import { productData } from "@/app/constant/data"
import { connectDB } from "@/lib/db"
import axios from "axios"

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

export const searchQueryFunc = async (req, res) => {
    try {
        const allProducts = await getProducts();

        const filteredProducts = await allProducts.filter((product) => {
            return product.title.toLowerCase().includes(req.toLowerCase())

        })
        return filteredProducts;
    } catch (error) {
        console.log(error)
    }

}

export const calculatePercentage = (oldPrice, price) => {
    return !!parseFloat(price) && !!parseFloat(oldPrice) ? ((oldPrice - price) / oldPrice * 100).toFixed(0) : 0;
}

export const getSingleProduct = (_id) => {
    const data = productData;

    const oneProduct = data.find((data) => {
        return data?._id == _id
    })
    return oneProduct;
}

export const phoneProducts = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/db');
        if (!response.status === 200) {
            throw new Error('Failed to fetch data');
        }
        const data = response.data;
        const dataWithImg = await data?.message.filter((item) => {
            return item?.image
        })
        return dataWithImg;
    } catch (error) {
        console.log(error)
    }

}