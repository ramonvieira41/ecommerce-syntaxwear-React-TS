import { createFileRoute, Link } from '@tanstack/react-router'
import { ProductsList } from '../../../components/ProductsList'
import { products } from '../../../mocks/products'

export const Route = createFileRoute('/_app/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <section className='container pt-32 md:pt-54 pb-10 md:px-10 text-black min-h-[80vh] flex flex-col justify-center items-center'>

    <h1 className=' text-3xl text-center mb-3'>Lista de Produtos</h1>

    <h2 className='text-center mb-10 p-4'>Conforto íncrivel para sua rotina</h2>

    {products.length === 0 ? (
      <>
        <p className='text-center'>Nenhum produto encontrado</p>
        <Link to="/products" className='text-accent hover:text-accent-hover hover:underline'>
          Voltar para Produtos
        </Link>
      </>
    ) : (
      <ProductsList products={products} />
    )}
  </section>
}
