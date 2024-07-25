'use client'

import * as zod from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { toast } from '@/components/ui/use-toast'
import { createProduct } from '../actions'
import { ErrorResponse } from './product-data-table'

type ProductUpsertSheetProps = {
  children?: React.ReactNode
  fetchProducts: () => void
  setLoading: (loading: boolean) => void
}

export const upsertProductSchema = zod.object({
  name: zod.string().trim().min(1, 'O nome é obrigatório'),
  description: zod.string().trim().min(1, 'A descrição é obrigatória'),
  price: zod
    .string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val), {
      message: 'O preço é obrigatório',
    })
    .refine((val) => val > 0, {
      message: 'O preço deve ser um valor positivo',
    }),
})

export const deleteProductSchema = zod.object({
  id: zod.string().optional(),
})

export function ProductInsertSheet({
  children,
  fetchProducts,
  setLoading,
}: ProductUpsertSheetProps) {
  type NewProductFormData = zod.infer<typeof upsertProductSchema>

  const newProductFormData = useForm<NewProductFormData>({
    resolver: zodResolver(upsertProductSchema),
  })

  const { handleSubmit, register, reset, watch } = newProductFormData

  async function handleCreateProduct(data: NewProductFormData) {
    setLoading(true)
    try {
      const error: ErrorResponse = await createProduct(data)

      reset()
      fetchProducts()

      if (!error != null) {
        toast({
          title: 'Sucesso',
          description: 'O produto foi atualizado com sucesso',
        })
      } else {
        toast({
          title: 'Error',
          description: error.errors[0].message,
        })
      }
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  return (
    <Sheet>
      <div>{children}</div>
      <SheetContent>
        <FormProvider {...newProductFormData}>
          <form
            id="upsertProduct"
            onSubmit={handleSubmit(handleCreateProduct)}
            className="space-y-8"
          >
            <SheetHeader>
              <SheetTitle>Crie um novo produto</SheetTitle>
              <SheetDescription>
                Adicione as informações do novo produto aqui. Depois clique para
                salvar.
              </SheetDescription>
            </SheetHeader>

            <FormField
              name="name"
              render={() => (
                <FormItem>
                  <FormLabel>Nome do produto</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite o nome do produto"
                      {...register('name')}
                    />
                  </FormControl>
                  <FormDescription>Este será o nome exibido</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="description"
              render={() => (
                <FormItem>
                  <FormLabel>Descrição do produto</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Informe a descrição do produto"
                      {...register('description')}
                    />
                  </FormControl>
                  <FormDescription>
                    Este será a descrição exibida
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="price"
              render={() => (
                <FormItem>
                  <FormLabel>Preço do produto</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Informe o preço do produto"
                      type="number"
                      step=".01"
                      {...register('price')}
                    />
                  </FormControl>
                  <FormDescription>Este será o preço exibido</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <SheetFooter className="mt-auto">
              <Button
                type="submit"
                form="upsertProduct"
                disabled={
                  !(watch('name') && watch('description') && watch('price'))
                }
              >
                Salvar
              </Button>
            </SheetFooter>
          </form>
        </FormProvider>
      </SheetContent>
    </Sheet>
  )
}
