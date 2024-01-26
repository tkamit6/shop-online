import Container from '@/components/Container'
import ProductsData from '@/components/ProductsData'
import SingleProducts from '@/components/SingleProducts'
import { getSingleProduct, getTrendingProducts } from '@/helpers'

export default async function page({ searchParams }) {

    const _idString = searchParams?._id
    const category = searchParams?.category
    const _id = _idString
    const product = await getSingleProduct(_id, category)
    const data = await getTrendingProducts()
    // console.log(product)
    // console.log(category)

    return (
        <div>
            <Container>
                <SingleProducts product={product} idString={_idString} />
                <div>
                    <p className='text-xl py-1 font-semibold'>Trending Products</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
                        {
                            data.map((item, id) => (
                                <ProductsData category={"cloths"} item={item} key={id} />
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}
