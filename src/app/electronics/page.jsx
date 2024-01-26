import Container from '@/components/Container'
import ProductsData from '@/components/ProductsData';
import { phoneProducts } from '@/helpers';
import React from 'react'

export default async function page() {
    const phoneProductsData = await phoneProducts();

    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10">
                {

                    phoneProductsData && phoneProductsData?.map((item, id) => (
                        <ProductsData category={"electronics"} item={item} key={id} />
                    ))
                }
            </div>
        </Container>
    )
}
