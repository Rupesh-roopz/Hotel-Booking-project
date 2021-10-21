import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import AdminPage from '../containers/AdminContainer'

let getByTestId

beforeEach(() => {
    const component = render(<Router><AdminPage /></Router>)
    getByTestId = component.getByTestId
})

test('Rendering Login component correctly', () => {
    const loginComponent = getByTestId('admin-container')
    expect(loginComponent).toBeInTheDocument()
})

test('hotel name input renders correctly', () => {
    const hotelName = getByTestId('admin-hotelName')
    fireEvent.change(hotelName, {
        target : {
            value : 'testName'
        }
    })
    expect(hotelName.value).toBe('testName')
})

test('Total rooms input renders correctly', () => {
    const totalRooms = getByTestId('admin-totalRooms')
    fireEvent.change(totalRooms, {
        target : {
            value : '10'
        }
    })
    expect(totalRooms.value).toBe('10')
})

test('Available rooms input renders correctly', () => {
    const availableRooms = getByTestId('admin-roomsAvailable')
    fireEvent.change(availableRooms, {
        target : {
            value : '10'
        }
    })
    expect(availableRooms.value).toBe('10')
})

test('hotel address input renders correctly', () => {
    const address = getByTestId('admin-address')
    fireEvent.change(address, {
        target : {
            value : 'test'
        }
    })
    expect(address.value).toBe('test')
})

test('hotel phone input renders correctly', () => {
    const phone = getByTestId('admin-phone')
    fireEvent.change(phone, {
        target : {
            value : '1236547899'
        }
    })
    expect(phone.value).toBe('1236547899')
})

test('hotel description input renders correctly', () => {
    const description = getByTestId('admin-description')
    fireEvent.change(description, {
        target : {
            value : 'description'
        }
    })
    expect(description.value).toBe('description')
})

test('hotel single room price input renders correctly', () => {
    const singleRoomPrice = getByTestId('admin-singleRoomPrice')
    fireEvent.change(singleRoomPrice, {
        target : {
            value : '2000'
        }
    })
    expect(singleRoomPrice.value).toBe('2000')
})

test('hotel double room price input renders correctly', () => {
    const doubleRoomPrice = getByTestId('admin-doubleRoomPrice')
    fireEvent.change(doubleRoomPrice, {
        target : {
            value : '2000'
        }
    })
    expect(doubleRoomPrice.value).toBe('2000')
})

test('hotel suit room price input renders correctly', () => {
    const suitRoomPrice = getByTestId('admin-suitRoomPrice')
    fireEvent.change(suitRoomPrice, {
        target : {
            value : '2000'
        }
    })
    expect(suitRoomPrice.value).toBe('2000')
})
