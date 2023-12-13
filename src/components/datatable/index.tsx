import { DataTableHeader } from './header'
import { Table } from './table'

export function DataTable() {
  return (
    <section className="flex h-auto w-full flex-col gap-16 rounded-2xl bg-white px-8 py-12">
      <DataTableHeader totalContacts={0} />
      <Table />
    </section>
  )
}
