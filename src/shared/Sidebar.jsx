import {
  Bubbles,
  LogOut,
  Package,
  Settings2,
  ShoppingCart,
} from 'lucide-react'

const items = [
  { key: 'ventas', label: 'Ventas', icon: ShoppingCart },
  { key: 'inventario', label: 'Inventario', icon: Package },
  { key: 'ajustes', label: 'Ajustes', icon: Settings2 },
  { key: 'cerrar-sesion', label: 'Cerrar sesión', icon: LogOut },
]

export default function Sidebar({ active = 'ventas', onSelect = () => {} }) {
  return (
    <aside
      className="h-screen w-72 flex flex-col text-white shadow-2xl border-r-4 border-[var(--color-secondary)]"
      style={{ backgroundColor: '#011f2b', fontFamily: 'var(--font-sans)' }}
      aria-label="Sidebar de navegación"
    >
      <div className="px-5 py-6 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl" style={{ backgroundColor: 'var(--color-primary)' }}>
            <Bubbles className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold leading-tight">Novaxclean</h2>
            <p className="text-sm text-[rgba(255,255,255,0.7)]">Panel de control</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-auto px-3 py-4">
        {items.map((item) => {
          const isActive = active === item.key
          const Icon = item.icon
          return (
            <button
              key={item.key}
              onClick={() => onSelect(item.key)}
              className="group relative mb-2 flex w-full items-center gap-3 overflow-hidden rounded-xl px-3 py-3 text-left transition-all duration-200 focus:outline-none"
              style={{
                backgroundColor: isActive ? 'rgba(0, 144, 193, 0.18)' : 'transparent',
                color: isActive ? '#fff' : 'var(--color-secondary)',
                boxShadow: isActive ? 'inset 0 0 0 1px rgba(255,255,255,0.06)' : 'none',
              }}
              aria-current={isActive ? 'page' : undefined}
            >
              <span
                className={`absolute left-0 top-2 bottom-2 w-1 origin-center rounded-r-full bg-[var(--color-secondary)] transition-all duration-200 ${
                  isActive ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100'
                }`}
              />
              <span className="relative z-10 flex-none text-[18px] transition-transform duration-200 group-hover:translate-x-0.5">
                <Icon className="h-5 w-5" />
              </span>
              <span className="relative z-10 flex-1 text-sm font-medium">{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="px-5 py-4 border-t text-xs" style={{ borderColor: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)' }}>
      </div>
    </aside>
  )
}
