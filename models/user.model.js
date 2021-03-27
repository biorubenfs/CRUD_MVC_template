import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    country_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
});

const User = mongoose.model("users", userSchema);

export default User;