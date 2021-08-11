import axios from 'axios'

const instance = axios.create({
    baseURL : 'http://localhost:8800'
})

export default {
    postHotelDetails : (state) =>
        instance({
            method : 'POST',
            url : '/hotels/add',
            data : state,
            headers : {
                Authorization : `Bearer ${sessionStorage.getItem('login')}`
            }
        }),
    getHotelDetails : () =>
        instance({
            method : 'GET',
            url : '/hotels/showHotels',
            headers : {
                Authorization : `Bearer ${sessionStorage.getItem('login')}`
            }
        }),
    postHotelData : (data) =>
        instance({
            method : 'POST',
            url : '/showHotel/hotelPreview',
            data : data,
            headers : {
                Authorization : `Bearer ${sessionStorage.getItem('login')}`
            }
        }),
    getHotelData : () =>
        instance({
            method : 'GET',
            url : '/showHotel/hotelPreview',
            headers : {
                Authorization : `Bearer ${sessionStorage.getItem('login')}`
            }
        }),
    postNewUser : (states) =>
        instance({
            method : 'POST',
            url : '/users/signIn',
            data : states,
            headers : {
                Authorization : `Bearer ${sessionStorage.getItem('login')}`
            }
        }),
    postUserData : (state) =>
        instance({
            method : 'POST',
            url : '/users/login',
            data : state,
            headers : {
                Authorization : `Bearer ${sessionStorage.getItem('login')}`
            }
        }),
    getUserData : () =>
        instance({
            method : 'GET',
            url : '/users/login',
            headers : {
                Authorization : `Bearer ${sessionStorage.getItem('login')}`
            }
        })
}
