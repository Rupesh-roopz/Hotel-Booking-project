import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import Login from '../containers/LoginContainer'
// import LoginForm from '../components/LoginFormComponent'
// import axiosMock from '../Resources/__mocks__/loginMock'

let getByTestId

beforeEach(() => {
    const component = render(<Router><Login /></Router>)
    getByTestId = component.getByTestId
})

test('Rendering Login component correctly', () => {
    const loginComponent = getByTestId('login-test')
    expect(loginComponent).toBeInTheDocument()
})

test('email test', () => {
    const emailInput = getByTestId('loginEmail')
    fireEvent.change(emailInput, {
        target : {
            value : 'test@gmail.com'
        }
    })
    expect(emailInput.value).toBe('test@gmail.com')
})

test('password test', () => {
    const passwordInput = getByTestId('loginPassword')
    fireEvent.change(passwordInput, {
        target : {
            value : 'testing@123456'
        }
    })
    expect(passwordInput.value).toBe('testing@123456')
})

// test('fetches and displays data', async () => {
//     axiosMock.get.mockResolvedValueOnce({ data : { greeting : 'hello there' } })
//     await waitForElement(() => getByTestId('login-test'))
// })

// test('submit test', () => {
//     const mockFn = jest.fn()
//         .email

//     const { getByTestId } = render(<LoginForm state={mockFn}/>)
//     const buttonNode = getByTestId('loginSubmit')
//     fireEvent.submit(buttonNode)
//     expect(mockFn).toHaveBeenCalledTimes(1)
// })
