const UserData = require('../models/usersData');

async function validation(name, email, res) {
    const error = {};
    await UserData.findOne({name : name})
        .then((data) => {
            if (data.name==name) {
                error.nameTaken = {
                    errorMessage : 'Name already taken!',
                };
            }
        })
        .catch((e) => {
            console.log(error);
            res.status(500);
        });
    await UserData.findOne({email : email})
        .then((data) => {
            if (data.email==email) {
                error.userExists = {
                    errorMessage : 'User Already exists!',
                };
            }
        })
        .catch((e) => {
            console.log(error);
            res.status(500);
        });
    return error;
}

module.exports ={validation};
