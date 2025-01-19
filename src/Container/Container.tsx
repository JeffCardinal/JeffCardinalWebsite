import { ReactNode } from 'react'
import './Container.css';

export default function Container({children}:{children: ReactNode}) {
  return (
    <div className="container">
      {children}
    </div>
  )
}
