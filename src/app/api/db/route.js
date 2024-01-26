import ProductDb from "@/lib/model";
import User from "@/lib/model";

const { connectDB } = require("@/lib/db");
const { NextResponse } = require("next/server");

export const GET = async () => {
    try {
        await connectDB();
        const data = await ProductDb.find();
        return NextResponse.json({ message: data })
    } catch (error) {
        return NextResponse.json({ message: error })
    }
}

export const POST = async (req) => {
    try {
        const reqBody = await req.json()
        await connectDB();
        const data = new ProductDb(reqBody)
        data.save()
        return NextResponse.json({ message: data })
    } catch (error) {
        return NextResponse.json({ message: error })
    }

}