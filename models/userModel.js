const mongoose  = require('mongoose');

const userSchema = new Schema({
    name: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        require: true
    },
    password: {
        type: 'string',
        require: true
    }
},{
    timestemps : true
})

const userModel = mongoose.Model('users', userSchema);

export default userModel;