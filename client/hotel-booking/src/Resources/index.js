import axios from 'axios'

const instance = axios.create({
    baseURL : 'http://localhost:8800',
    headers : { Authorization : `Bearer ${sessionStorage.getItem('token')}` }
})

export default {
    postHotelDetails : (state) =>
        instance({
            method : 'POST',
            url : '/hotels/add',
            data : state
        }),
    getHotelDetails : () =>
        instance({
            method : 'GET',
            url : '/hotels/list'
        }),
    postHotelData : (data) =>
        instance({
            method : 'POST',
            url : '/hotel/preview',
            data : data
        }),
    getHotelData : () =>
        instance({
            method : 'GET',
            url : '/hotel/preview',
            params : {
                ID : sessionStorage.getItem('hotelId')
            }
        }),
    postNewUser : (state) =>
        instance({
            method : 'POST',
            url : '/user/signIn',
            data : state
        }),
    postUserData : (state) =>
        instance({
            method : 'POST',
            url : '/user/logIn',
            data : state
        }),
    getUserData : () =>
        instance({
            method : 'GET',
            url : '/user/profile',
            params : {
                ID : sessionStorage.getItem('userName')
            }
        }),
    postBookedHotelData : (state) =>
        instance({
            method : 'POST',
            url : '/bookedHotel/add',
            data : state
        }),
    getBookedHotelData : () =>
        instance({
            method : 'GET',
            url : '/bookedHotel/list',
            params : {
                ID : sessionStorage.getItem('userName')
            }
        }),
    getSelectedHotelData : () =>
        instance({
            method : 'GET',
            url : '/bookedHotel/view',
            params : {
                ID : sessionStorage.getItem('bookedHotelId')
            }
        })
}
