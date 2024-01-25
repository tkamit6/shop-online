// user.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

const User = mongoose?.models?.categories || mongoose.model('categories', userSchema);

export default User;
