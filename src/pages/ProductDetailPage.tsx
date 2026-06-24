import { useParams } from 'react-router-dom'
import { getProductById } from '../data'

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()
  const product = id ? getProductById(id) : undefined

  if (!product) {
    return (
      <section>
        <h1 className="text-3xl font-semibold">Product Not Found</h1>
        <p className="mt-2 text-text-secondary">
          The product you are looking for does not exist.
        </p>
      </section>
    )
  }

  return (
    <section>
      <h1 className="text-3xl font-semibold">{product.name}</h1>
      <p className="mt-2 text-text-secondary">{product.description}</p>
    </section>
  )
}
