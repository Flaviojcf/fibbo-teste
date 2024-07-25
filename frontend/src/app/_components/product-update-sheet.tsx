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
  SheetTrigger,
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
import { updateProduct } from '../actions'
import { ErrorResponse } from './product-data-table'
import { Product } from '../interfaces'

type ProductUpdateSheetProps = {
  product: Product
  fetchProducts: () => void
  setLoading: (loading: boolean) => void
  children?: React.ReactNode
}

export const updateProductSchema = zod.object({
  id: zod.string().trim().min(1),
  name: zod.string().trim().min(1, 'O nome é obrigatório'),
  description: zod.string().trim().min(1, 'A descrição é obrigatória'),
  price: zod.union([
    zod
      .string()
      .transform((val) => parseFloat(val))
      .refine((val) => !isNaN(val), {
        message: 'O preço é obrigatório',
      })
      .refine((val) => val > 0, {
        message: 'O preço deve ser um valor positivo',
      }),
    zod
      .number()
      .refine((val) => val !== undefined, {
        message: 'O preço é obrigatório',
      })
      .refine((val) => val > 0, {
        message: 'O preço deve ser um valor positivo',
      }),
  ]),
  createdAt: zod.string(),
})

export function ProductUpdateSheet({
  product,
  fetchProducts,
  children,
  setLoading,
}: ProductUpdateSheetProps) {
  type UpdateProductFormData = zod.infer<typeof updateProductSchema>

  const updateProductFormData = useForm<UpdateProductFormData>({
    resolver: zodResolver(updateProductSchema),
    defaultValues: {
      id: product.id,
      name: product.name,
      description: product.description,
      price:
        typeof product.price === 'number'
          ? product.price
          : parseFloat(product.price as string),
      createdAt: product.createdAt,
    },
  })

  const { handleSubmit, register, reset, watch } = updateProductFormData

  async function handleUpdateProduct(data: UpdateProductFormData) {
    setLoading(true)
    try {
      const error: ErrorResponse = await updateProduct(data.id, data)

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
      <SheetTrigger asChild>
        <div>{children}</div>
      </SheetTrigger>
      <SheetContent>
        <FormProvider {...updateProductFormData}>
          <form
            id="updateProduct"
            onSubmit={handleSubmit(handleUpdateProduct)}
            className="space-y-8"
          >
            <SheetHeader>
              <SheetTitle>Atualizar Produto</SheetTitle>
              <SheetDescription>
                Atualize as informações do produto aqui. Depois clique para
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
                    Esta será a descrição exibida
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
                form="updateProduct"
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
