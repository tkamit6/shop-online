import User from "@/lib/model";

const { connectDB } = require("@/lib/db");
const { NextResponse } = require("next/server");

export const GET = async () => {
    try {
        await connectDB();
        const data = await User.find();
        console.log(data)
        return NextResponse.json({ message: data })
    } catch (error) {
        return NextResponse.json({ message: error })
    }
}