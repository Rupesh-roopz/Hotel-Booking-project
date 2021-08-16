import React from 'react'
import HotelsFeedComponent from '../components/hotelsFeedComponent'
import { withRouter } from 'react-router-dom'
import NavigationContainer from './navigationContainer'
import Pagination from '../components/paginationComponent'
import api from '../Resources/index'

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
        this.getData()
    }

    getData = () => {
        api.getHotelDetails()
            .then((res) => {
                this.setState({ posts : res.data })
            })
            .catch((e) => {
                if (e.response.status === 403) { this.props.history.push('/forbidden') }
            })
    }

    hotelPreview = (hotel) => {
        const selectedHotel = {
            hotel : hotel
        }
        api.postHotelData(selectedHotel)
            .then(res => {
                console.log(res.data)
                sessionStorage.setItem('hotelId', res.data.hotelID)
                this.props.history.push('/hotelPreview')
            })
            .catch((e) => {
                if (e.response.status === 403) { this.props.history.push('/forbidden') }
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
