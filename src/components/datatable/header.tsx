import { useState } from 'react'

import { Button } from '../button'
import { Input } from '../input'

/* eslint-disable @next/next/no-img-element */
interface PropsTypes {
  totalContacts: number
}

export function DataTableHeader({ totalContacts }: PropsTypes) {
  const [currentTarget, setCurrentTarget] = useState<any>()

  return (
    <header className="flex items-start justify-between">
      <div id="about__contacts" className="flex flex-col gap-3">
        <h1 className="text-[32px] font-semibold leading-9">Meus contatos ({totalContacts})</h1>
        <p className="text-base font-normal leading-5 text-[#737373]">
          Gere a sua lista de contatos
        </p>
      </div>

      <div id="search__area" className="flex items-start gap-4">
        <Input
          placeholder="Pesquisar contatos..."
          icon="/MagnifyingGlass.svg"
          onChange={(e: any) => {
            setCurrentTarget(e.currentTarget.value)
          }}
        />
        <Button
          icon="/UserPlus.svg"
          onClick={() => {
            alert(currentTarget)
          }}
        />
      </div>
    </header>
  )
}
