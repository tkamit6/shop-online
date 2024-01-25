import { NextResponse } from "next/server";
import { productData } from "@/app/constant/data";
export const GET = async () => {
    try {
        return NextResponse.json({
            message: "Product fetched Successfully",
            success: true,
            productData
        },
            { status: 200 })
    } catch (error) {
        return NextResponse.json({
            error: "Product Loading Error",
        },
            { status: 500 }
        )
    }
}