import { type ReactNode } from 'react'

interface PropsType {
  children: ReactNode
  className: string
}

export default function Root({ children, className }: PropsType) {
  return <tr className={`border-b border-[#E8E8E8] ${className}`}>{children}</tr>
}
