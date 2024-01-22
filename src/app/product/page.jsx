import Container from '@/components/Container'
import ProductsData from '@/components/ProductsData'
import SingleProducts from '@/components/SingleProducts'
import { getSingleProduct, getTrendingProducts } from '@/helpers'

export default async function page({ searchParams }) {

    const _idString = searchParams?._id
    const _id = Number(_idString)
    const product = getSingleProduct(_id)
    // console.log(product)
    const data = await getTrendingProducts()
    // console.log(data)

    return (
        <div>
            <Container>
                <SingleProducts product={product} />
                <div>
                    <p className='text-xl py-1 font-semibold'>Trending Products</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
                        {
                            data.map((item) => (
                                <ProductsData item={item} key={item?._id} />
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}
