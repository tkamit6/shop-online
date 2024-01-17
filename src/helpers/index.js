export const getProducts = async () => {
    const res = await fetch("https://fakestoreapiserver.reactbd.com/smart")

    // const  c = res.json();
    // console.log(c)
    if (!res.ok) {
        throw new Error("Failed to get products")
    }
    return res.json()
}

export const calculatePercentage = (oldPrice, price) => {
    return !!parseFloat(price) && !!parseFloat(oldPrice) ? (100 - (oldPrice / price) * 100).toFixed(0) : 0;
}