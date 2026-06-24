import { useParams } from 'react-router-dom'

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()

  return (
    <section>
      <h1 className="text-3xl font-semibold">Product Detail</h1>
      <p className="mt-2 text-text-secondary">Viewing product {id}</p>
    </section>
  )
}
