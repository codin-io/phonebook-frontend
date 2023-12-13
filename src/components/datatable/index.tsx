'use client'

import Image from 'next/image'
import { useState } from 'react'

import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnFiltersState,
  getFilteredRowModel,
} from '@tanstack/react-table'

import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface DataTableProps<TData, TValue> {
  columns: Array<ColumnDef<TData, TValue>>
  data: TData[]
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  })

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex w-full items-center justify-between py-16">
        <div>
          <h2 className="text-[32px] font-semibold leading-9">Meus contatos (0)</h2>
          <p className="font-normal leading-5 text-[#737373]">Gere a sua lista de contatos</p>
        </div>
        <div id="search__area">
          <div
            id="input__area"
            className="flex w-full max-w-[216px] items-center gap-1 rounded-[8px] bg-[#F4F4F4] p-2"
          >
            <Image src="/magnifyingGlass.png" alt="magnifyingGlass" width={24} height={24} />
            <Input
              placeholder="Pesquisar contatos..."
              value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
              onChange={(event) => table.getColumn('email')?.setFilterValue(event.target.value)}
              className="max-w-sm bg-[#F4F4F4] "
            />
          </div>

          {/* <button className="bg-[#4F75FF ]flex cursor-pointer items-center rounded-sm px-3 py-[10px]">
            <h1>Funciona</h1>
            {/* <Image src="/UserPlus.png" alt="userplus" width={24} height={24} /> */}
          {/* </button> */}
        </div>
      </div>
      <div className="rounded-md border-none">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="text-lg font-normal leading-9 text-[#363636]"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length !== 0 ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className="border-b border-[#E8E8E8] text-base font-normal leading-9 text-[#484848]"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
