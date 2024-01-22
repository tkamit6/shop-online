import { productData } from "@/app/constant/data"

export const getProducts = async () => {
    const res = await fetch("https://fakestoreapiserver.reactbd.com/smart")

    if (!res.ok) {
        throw new Error("Failed to get products")
    }
    return res.json()
}
export const getTrendingProducts = async () => {
    const res = await fetch("https://fakestoreapiserver.reactbd.com/smarttrending")

    if (!res.ok) {
        throw new Error("Failed to get products")
    }
    return res.json()
}

export const calculatePercentage = (oldPrice, price) => {
    return !!parseFloat(price) && !!parseFloat(oldPrice) ? (100 - (oldPrice / price) * 100).toFixed(0) : 0;
}

export const getSingleProduct = (_id) => {
    const data = productData;

    const oneProduct = data.find((data) => {
        return data?._id == _id
    })
    return oneProduct;
}