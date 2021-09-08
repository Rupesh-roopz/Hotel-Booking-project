import React from 'react'
import HotelsFeedComponent from '../components/HotelsFeedComponent'
import { withRouter } from 'react-router-dom'
import NavigationContainer from './NavigationContainer'
import Pagination from '../components/PaginationComponent'
import api from '../Resources/index'
import http from '../constants/http'

class HotelsFeedContainer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            posts : [],
            currentPage : 1,
            postsPerPage : 3
        }
    }

    componentDidMount () {
        if (this.props.history.action === 'POP' && sessionStorage.getItem('token')) {
            this.props.history.push('/main')
        }
        this.getData()
    }

    getData = () => {
        api.getHotelDetails()
            .then((res) => {
                this.setState({ posts : res.data })
            })
            .catch((e) => {
                if (e.response.status === http.FORBIDDEN) { this.props.history.push('/forbidden') }
                if (e.response.status === http.UNAUTHORIZED) { this.props.history.push('/sessionExpired') }
            })
    }

    hotelPreview = async (hotel) => {
        const selectedHotel = {
            hotel : hotel
        }
        await api.postHotelData(selectedHotel)
            .then(res => {
                sessionStorage.setItem('hotelId', res.data.hotelID)
                this.props.history.push('/hotelPreview')
            })
            .catch((e) => {
                if (e.response.status === http.FORBIDDEN) { this.props.history.push('/forbidden') }
                if (e.response.status === http.UNAUTHORIZED) { this.props.history.push('/sessionExpired') }
            })
    }

    paginate = (pageNumber) => this.setState({ currentPage : pageNumber })

    render () {
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage
        const currentPosts = this.state.posts.slice(indexOfFirstPost, indexOfLastPost)
        return (
            <div>
                <NavigationContainer/>
                <HotelsFeedComponent
                    posts = {currentPosts}
                    hotelPreview = {this.hotelPreview}
                />
                <Pagination
                    postsPerPage={this.state.postsPerPage}
                    totalPosts={this.state.posts.length}
                    paginate={this.paginate}
                />
            </div>
        )
    }
}

export default withRouter(HotelsFeedContainer)
