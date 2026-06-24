import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'

export function RootLayout() {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl flex-1 px-container py-section">
        <Outlet />
      </main>
    </div>
  )
}
