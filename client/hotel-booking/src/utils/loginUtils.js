export function loginValidation (state) {
    const clientLoginError = {}
    const emailRegx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

    if (!(emailRegx.test(state.email))) {
        clientLoginError.emailError = 'Please enter a valid Email'
    }
    if (state.password.trim() === '') {
        clientLoginError.passwordError = 'Please enter password'
    }
    return clientLoginError
}
