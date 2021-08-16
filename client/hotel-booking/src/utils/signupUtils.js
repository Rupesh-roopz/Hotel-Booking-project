export function signUpValidation (state) {
    const clientError = {}
    const emailRegx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    const passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/

    if (!(emailRegx.test(state.email))) {
        clientError.emailError = 'Please enter a valid Email'
    }
    if (!(passwordRegx.test(state.newPassword))) {
        clientError.passwordError = 'Please enter a strong password'
    }
    if (state.newPassword !== state.newPasswordVerify) {
        clientError.passwordVerifyError = 'password must be same'
    }
    if (state.mobileNumber.length !== 10) {
        clientError.mobileNumberError = 'Please enter a valid mobile number'
    }
    if (state.age < 18) {
        clientError.ageError = 'Too young to create account'
    }
    if (state.idProofNumber.length !== 12) {
        clientError.idProofNumberError = 'Please enter valid proof'
    }
    return clientError
}
