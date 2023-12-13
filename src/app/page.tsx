'use client'

import { DataTable } from '@/components/datatable'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <>
      <Header />
      <main className="m-auto mt-36 flex h-[716px] w-full max-w-[1222px] flex-col px-5">
        <DataTable />
      </main>
    </>
  )
}
