export type Category =
  | 'electronics'
  | 'fashion'
  | 'home'
  | 'accessories'
  | 'sports'

export interface ProductVariant {
  id: string
  label: string
  value: string
}

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  longDescription: string
  price: number
  compareAtPrice?: number
  category: Category
  images: string[]
  modelUrl?: string
  environmentPreset?: 'studio' | 'city' | 'sunset' | 'warehouse'
  inStock: boolean
  featured: boolean
  variants: ProductVariant[]
  tags: string[]
  createdAt: string
}

export const CATEGORY_LABELS: Record<Category, string> = {
  electronics: 'Electronics',
  fashion: 'Fashion',
  home: 'Home',
  accessories: 'Accessories',
  sports: 'Sports',
}
