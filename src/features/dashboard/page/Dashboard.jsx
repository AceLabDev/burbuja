import { useState } from 'react'
import Sidebar from '../../../shared/Sidebar'

export default function Dashboard() {
  const [active, setActive] = useState('ventas')

  return (
    <Sidebar
      active={active}
      onSelect={setActive}
    />
  )
}