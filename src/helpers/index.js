export const getProducts = async () => {
    const res = await fetch("https://fakestoreapiserver.reactbd.com/smart")

    // const  c = res.json();
    // console.log(c)
    if (!res.ok) {
        throw new Error("Failed to get products")
    }
    return res.json()
}