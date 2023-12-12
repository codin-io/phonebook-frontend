/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
// import axios from 'axios'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Modal } from '@/components/ui/modal'
import { useToast } from '@/components/ui/use-toast'

const formSchema = z.object({
  name: z.string().min(4, 'Nome deve ter no minimo 4 caracteres'),
  email: z.string().email(),
  phone: z.string().min(9, 'Deve ter no minimo 9 digitos'),
})

interface StoreModalProps {
  isOpen: boolean
  onClose: () => void
  initialData: {
    name: string
    phone: string
    email: string
  }
}

export default function UpdateModal({ isOpen, onClose, initialData }: StoreModalProps) {
  const { toast } = useToast()

  const [loading, setLoading] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true)
      //   const response = await axios.post('/api/stores', values)
      //   window.location.assign(`/${response.data.id}`)
      console.log(values)
      toast({
        title: 'Sucesso!',
        description: 'Form enviado com sucesso...',
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong',
      })
    } finally {
      setLoading(false)
    }
  }
  return (
    <Modal title="Editando contato" description="" isOpen={isOpen} onClose={onClose}>
      <div>
        <div className="space-y-4 py-2 pb-4">
          <div className="space-y-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome do contato</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Nome completo"
                          className="focus-visible::shadow-[#1F50FF] h-[51px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contato telefonico</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="92X XXX XXX"
                          className="focus-visible::shadow-[#1F50FF] h-[51px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="E-mail"
                          className="focus-visible::shadow-[#1F50FF] h-[51px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex w-full flex-col items-center justify-end space-x-2 pt-6">
                  <Button
                    disabled={loading}
                    className="h-[51px] w-full bg-gradient-to-t from-[#0F3EE4] to-[#4F75FF] text-base"
                    type="submit"
                  >
                    Salvar Alteracoes
                  </Button>
                  <Button
                    disabled={loading}
                    className="h-[51px] w-full border-none text-base font-semibold text-[#1F50FF] hover:bg-transparent hover:text-[#4F75FF]"
                    variant="outline"
                    type="reset"
                    onClick={() => {
                      form.reset({
                        email: '',
                        name: '',
                        phone: '',
                      })
                      form.clearErrors(['name', 'email', 'phone'])
                      onClose()
                    }}
                  >
                    Fechar
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </Modal>
  )
}
