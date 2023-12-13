'use client'
import { columns } from '../components/datatable/columns'
import { DataTable } from '../components/datatable/index'
import { Header } from '@/components/header'

import { contacts } from '../../utilities/data'

export default function Home() {
  return (
    <>
      <Header />
      <main className="m-auto mt-40 flex h-[716px] w-full max-w-[1188px] rounded-xl bg-white px-8">
        <DataTable columns={columns} data={contacts} />
      </main>
    </>
  )
}
