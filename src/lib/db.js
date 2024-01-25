import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://tkamit6:tkamit6@cluster0.yqgwz0t.mongodb.net/evently?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("DB connected")
    } catch (error) {
        console.log(error)
    }
}