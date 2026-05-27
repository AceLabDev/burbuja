import { useState } from 'react'
import { DollarSign, ShoppingCart, Users } from 'lucide-react'

import Sidebar from '../../../shared/Sidebar'
import Card from '../components/Card'

export default function Dashboard() {
  const [active, setActive] = useState('ventas')

  return (
    <div className="flex min-h-screen bg-[var(--color-dark-deep)]">
      <Sidebar
        active={active}
        onSelect={setActive}
      />

      <main className="flex-1 p-6 overflow-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white">
            Dashboard
          </h1>

          <p className="text-[var(--color-secondary)] mt-1">
            Bienvenido al panel administrativo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <Card
            title="Ingresos"
            value="$12,450"
            description="Últimos 30 días"
            icon={DollarSign}
            trend={12.4}
          />

          <Card
            title="Ventas"
            value="1,245"
            description="Pedidos completados"
            icon={ShoppingCart}
            trend={-3.2}
          />

          <Card
            title="Usuarios"
            value="845"
            description="Usuarios activos"
            icon={Users}
            trend={8.1}
          />
        </div>
      </main>
    </div>
  )
}