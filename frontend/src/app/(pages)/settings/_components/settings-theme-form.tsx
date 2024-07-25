'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { toast } from '@/components/ui/use-toast'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from '@/components/ui/form'
import { SheetFooter } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { RadioGroupItem } from '@radix-ui/react-radio-group'
import { RadioGroup } from '@/components/ui/radio-group'
import { useTheme } from 'next-themes'
import { appearanceFormSchema } from '../schema'

export function SettingsThemeForm() {
  const theme = useTheme()
  type UpdateThemeSchema = zod.infer<typeof appearanceFormSchema>

  const updateThemeSchema = useForm<UpdateThemeSchema>({
    resolver: zodResolver(appearanceFormSchema),
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = updateThemeSchema

  async function handleUpdateTheme(data: UpdateThemeSchema) {
    theme.setTheme(data.theme)
    toast({
      title: 'Sucesso',
      description: 'O tema foi alterado com sucesso',
    })
  }
  return (
    <Form {...updateThemeSchema}>
      <form
        id="updateTheme"
        onSubmit={handleSubmit(handleUpdateTheme)}
        className="space-y-8"
      >
        <Card>
          <CardHeader className="max-lg:flex max-lg:text-center">
            <CardTitle>Tema</CardTitle>
            <CardDescription>Selecione o tema</CardDescription>
          </CardHeader>
          <CardContent className="max-lg:flex max-lg:justify-center">
            <FormField
              name="theme"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormMessage />
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid max-w-md grid-cols-2 gap-8 pt-2 max-lg:flex max-lg:max-w-48 max-lg:flex-col"
                  >
                    <FormItem>
                      <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                        <FormControl>
                          <RadioGroupItem value="light" className="sr-only" />
                        </FormControl>
                        <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                          <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                            <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                              <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                              <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                            </div>
                            <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                              <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                              <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                            </div>
                            <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                              <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                              <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                            </div>
                          </div>
                        </div>
                        <span className="block w-full p-2 text-center font-normal">
                          Light
                        </span>
                      </FormLabel>
                    </FormItem>
                    <FormItem>
                      <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                        <FormControl>
                          <RadioGroupItem value="dark" className="sr-only" />
                        </FormControl>
                        <div className="items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground">
                          <div className="space-y-2 rounded-sm bg-slate-950 p-2">
                            <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                              <div className="h-2 w-[80px] rounded-lg bg-slate-400" />
                              <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                            </div>
                            <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                              <div className="h-4 w-4 rounded-full bg-slate-400" />
                              <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                            </div>
                            <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                              <div className="h-4 w-4 rounded-full bg-slate-400" />
                              <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                            </div>
                          </div>
                        </div>
                        <span className="block w-full p-2 text-center font-normal">
                          Dark
                        </span>
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <SheetFooter className="mt-auto">
          <Button type="submit" form="updateTheme" disabled={isSubmitting}>
            {isSubmitting ? 'Salvando...' : 'Salvar'}
          </Button>
        </SheetFooter>
      </form>
    </Form>
  )
}
