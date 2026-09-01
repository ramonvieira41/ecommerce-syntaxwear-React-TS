import { createFileRoute } from '@tanstack/react-router'
import { ProductsList } from '../../../components/ProductsList'
import { products } from '../../../mocks/products'

export const Route = createFileRoute('/_app/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='container pt-32 md:pt-54 pb-10 md:px-10 text-black '>

    <h1 className=' text-3xl text-center mb-3'>Lista de Produtos</h1>

    <h2 className='text-center mb-10 p-4'>Conforto íncrivel para sua rotina</h2>
    <ProductsList products={products} />
  </div>
}
