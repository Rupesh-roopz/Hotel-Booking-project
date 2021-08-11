import React from 'react'
import NavigationComponent from '../components/navigationComponent'
// import axios from 'axios'
import { withRouter } from 'react-router-dom'
import api from '../Resources/index'

class NavigationContainer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data : []
        }
    }

    componentDidMount () {
        this.getUserData()
    }

  getUserData = () => {
      api.getUserData()
          .then((res) => {
              console.log(res.data)
              this.setState({ data : res.data })
          })
          .catch((e) => {
              if (e.response.status === 403) { this.props.history.push('/') }
          })
  }

  logout = () => {
      sessionStorage.clear()
      this.props.history.push('/')
  }

  render () {
      return <NavigationComponent
          userData = {this.state}
          logout = {this.logout}
      />
  }
}
export default withRouter(NavigationContainer)
