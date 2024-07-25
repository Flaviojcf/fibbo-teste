import * as zod from 'zod'

export const appearanceFormSchema = zod.object({
  theme: zod.enum(['light', 'dark'], {
    required_error: 'Por favor, selecione um tema.',
  }),
})
