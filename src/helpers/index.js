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

export const getSingleProduct = async (_id, category) => {
    console.log(category);
    try {
        if (category === 'electronics') {
            const response = await axios.get(`${process.env.NEXTAUTH_URL}/api/db`);
            if (response.status !== 200) {
                throw new Error('Failed to fetch data');
            }
            const data = response.data;
            const dataWithImg = data?.message.filter((item) => item.image);

            const oneMobile = dataWithImg.find((item) => {
                return item?._id == _id;
            })
            return oneMobile;

        } else if (category === 'cloths') {
            const data = productData;
            const oneProduct = data.find((data) => data?._id === _id);
            return oneProduct;
        } else {
            throw new Error('Invalid category');
        }
    } catch (error) {
        console.error('Error fetching product:', error);
        return null; // Or handle the error in a way that suits your application
    }
};

export const phoneProducts = async () => {
    try {
        const response = await axios.get(`${process.env.NEXTAUTH_URL}/api/db`);
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