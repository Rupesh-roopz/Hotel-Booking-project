import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import SignUp from '../containers/SignupContainer'

let getByTestId

beforeEach(() => {
    const component = render(<Router><SignUp /></Router>)
    getByTestId = component.getByTestId
})

test('Rendering Signup component correctly', () => {
    const signinComponent = getByTestId('signin-component')
    expect(signinComponent).toBeInTheDocument()
})

test('Input name renders correctly', () => {
    const nameInput = getByTestId('signin-name')
    fireEvent.change(nameInput, {
        target : {
            value : 'Rupesh Esambadi'
        }
    })
    expect(nameInput.value).toBe('Rupesh Esambadi')
})

test('Input email renders correctly', () => {
    const emailInput = getByTestId('signin-email')
    fireEvent.change(emailInput, {
        target : {
            value : 'test@gmail.com'
        }
    })
    expect(emailInput.value).toBe('test@gmail.com')
})

test('password input renders correctly', () => {
    const passwordInput = getByTestId('signin-newPassword')
    fireEvent.change(passwordInput, {
        target : {
            value : 'testing@123456'
        }
    })
    expect(passwordInput.value).toBe('testing@123456')
})

test('verify password input renders correctly', () => {
    const passwordInput = getByTestId('signin-newPassword')
    fireEvent.change(passwordInput, {
        target : {
            value : 'testing@123456'
        }
    })
    expect(passwordInput.value).toBe('testing@123456')
})

test('mobile input renders correctly', () => {
    const mobileInput = getByTestId('signin-mobileNumber')
    fireEvent.change(mobileInput, {
        target : {
            value : '1234567891'
        }
    })
    expect(mobileInput.value).toBe('1234567891')
})

test('proof input renders correctly', () => {
    const proofInput = getByTestId('signin-proof')
    fireEvent.change(proofInput, {
        target : {
            value : '123456789111'
        }
    })
    expect(proofInput.value).toBe('123456789111')
})

test('Age input renders correctly', () => {
    const ageInput = getByTestId('signin-age')
    fireEvent.change(ageInput, {
        target : {
            value : '20'
        }
    })
    expect(ageInput.value).toBe('20')
})
