
import { getProducts, phoneProducts } from '@/helpers'
import React from 'react'
import Container from './Container';
import ProductsData from './ProductsData';

export default async function Products() {
  // const [phoneList, setPhoneList] = useState([]);
  const products = await getProducts() ?? {};
  const phoneProductsData = await phoneProducts();

  return <Container >
    <div className="mb-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10">
      {
        products && products?.map((item) => (
          <ProductsData category={"cloths"} item={item} key={item.id} />
        ))
      }
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10">
      {

        phoneProductsData && phoneProductsData?.map((item) => (
          <ProductsData category={"electronics"} item={item} key={item._id} />
        ))
      }
    </div>

  </Container>

}
