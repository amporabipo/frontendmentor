import * as z from 'zod'

export const formSchema = z.object({
    email: z
    .string()
    .min(5, {message: 'Ingresa correo valido'})
    .email({message: 'debe ser un email valido'})
})

export type FormSchema = z.TypeOf<typeof formSchema>