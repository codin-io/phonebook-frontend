'use client'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex flex-col">
      <h1>Funciona Correctamente</h1>
      <Button
        onClick={() => {
          alert('Funciona')
        }}
      >
        Click em mim
      </Button>
    </main>
  )
}
