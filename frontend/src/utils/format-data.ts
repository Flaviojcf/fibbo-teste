import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDatePTBR(date: Date | number | string): string {
  return format(new Date(date), 'dd/MM/yyyy', { locale: ptBR })
}
