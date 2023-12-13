'use client'

import { type ColumnDef } from '@tanstack/react-table'

import { Checkbox } from '@/components/ui/checkbox'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface Contacts {
  id: number
  name: string
  contact: string
  state: string
  email: string
  actions: string
  avatar: string
}

export const columns: Array<ColumnDef<Contacts>> = [
  {
    id: 'select',
    // header: ({ table }) => (
    //   <Checkbox
    //     checked={
    //       table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
    //     }
    //     onCheckedChange={(value) => {
    //       // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    //       table.toggleAllPageRowsSelected(!!value)
    //     }}
    //     aria-label="Select all"
    //   />
    // ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => {
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          row.toggleSelected(!!value)
        }}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: 'name',
    header: 'Nome do Contato',
  },
  {
    accessorKey: 'contact',
    header: 'Contato',
  },
  {
    accessorKey: 'email',
    header: 'E-mail',
  },
  {
    accessorKey: 'state',
    header: 'Estado',
  },
  {
    accessorKey: 'actions',
    header: 'Ações',
  },
]
