import { getProducts } from '../data'

export function ProductListPage() {
  const products = getProducts()

  return (
    <section>
      <h1 className="text-3xl font-semibold">All Products</h1>
      <p className="mt-2 text-text-secondary">
        {products.length} products available
      </p>
    </section>
  )
}
