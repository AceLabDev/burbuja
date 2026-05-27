import React from 'react'

const items = [
  {
    key: 'ventas',
    label: 'Ventas',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 13l3-3 5 5 4-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'inventario',
    label: 'Inventario',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="3" y="7" width="18" height="13" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 3v4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 3v4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'zonas-mas',
    label: 'Zonas más vendidas',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M3 17l6-6 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'zonas-menos',
    label: 'Zonas menos vendidas',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M21 7l-6 6-4-4L3 19" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'ajustes',
    label: 'Ajustes',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 1 1 2.3 17.88l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09c.68 0 1.28-.39 1.51-1a1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 6.12 2.3l.06.06c.46.46 1.21.52 1.82.33.61-.19 1-1 1-1.51V2a2 2 0 1 1 4 0v.09c0 .5.39 1.28 1 1.51.61.19 1.36.13 1.82-.33l.06-.06A2 2 0 1 1 21.7 6.12l-.06.06c-.46.46-.52 1.21-.33 1.82.19.61 1 1 1.51 1H21a2 2 0 1 1 0 4h-.09c-.5 0-1.28.39-1.51 1z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Sidebar({ active = 'ventas', onSelect = () => {} }) {
  return (
    <aside
      className="h-screen w-64 flex flex-col text-white"
      style={{ backgroundColor: 'var(--color-dark-deep)', fontFamily: 'var(--font-sans)' }}
      aria-label="Sidebar de navegación"
    >
      <div className="px-4 py-5 border-b" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
        <h2 className="text-lg font-semibold">Administrador</h2>
        <p className="text-sm text-[rgba(255,255,255,0.7)]">Panel de control</p>
      </div>

      <nav className="flex-1 overflow-auto px-2 py-4">
        {items.map((item) => {
          const isActive = active === item.key
          return (
            <button
              key={item.key}
              onClick={() => onSelect(item.key)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md mb-2 text-left transition-colors duration-150 focus:outline-none`}
              style={{
                backgroundColor: isActive ? 'var(--color-primary)' : 'transparent',
                color: isActive ? '#fff' : 'var(--color-secondary)',
              }}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className="flex-none text-[18px]" style={{ color: isActive ? '#fff' : 'var(--color-secondary)' }}>
                {item.icon}
              </span>
              <span className="flex-1 text-sm">{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="px-4 py-3 border-t text-xs" style={{ borderColor: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.7)' }}>
        <div className="mb-1">Versión 1.0</div>
        <div style={{ color: 'var(--color-accent)' }}>Soporte · ayuda@empresa.example</div>
      </div>
    </aside>
  )
}
