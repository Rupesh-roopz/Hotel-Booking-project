import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../containers/HomeContainer'

let getByTestId

beforeEach(() => {
    const component = render(<Home />)
    getByTestId = component.getByTestId
})

test('Rendering Home Component correctly', () => {
    const homeComponet = getByTestId('home-test')
    expect(homeComponet).toBeInTheDocument()
})

test('Rendering welcome text correctly', () => {
    const welcomeText = getByTestId('welcome-text')
    expect(welcomeText.textContent).toBe('Book your favourite hotel here!')
})

test('Rendering login button correctly', () => {
    const loginButton = getByTestId('login-button')
    expect(loginButton).toBeInTheDocument()
})

test('Rendering signin button correctly', () => {
    const signinButton = getByTestId('signin-button')
    expect(signinButton).toBeInTheDocument()
})
