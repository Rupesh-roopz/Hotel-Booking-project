function errorFunction(body) {
    console.log(body);
    // const error = {};
    // if (newPassword !==newPasswordVerify) {
    //     error.passwordError = {
    //         errorMessage : 'same pass',
    //     };
    //     // return res.status(401).json({err : 'same pass'});
    // }
    // if (newPassword.length < 6) {
    //     error.passwordLength = {
    //         errorMessage : 'password is too short',
    //     };
    //     // return res.status(401).json({err : 'password greater than 6'});
    // }
    // return error;
}

module.exports = errorFunction();
