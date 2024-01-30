import * as z from 'zod'

export const formSchema = z.object({
   name: z 
   .string()
   .min(5, {message: 'Ingresa un nombre valido'}),
   lastname: z
   .string()
   .min(5, {message: 'Ingresa un apellido valido'}),
   email: z
   .string()
   .min(5,{message: 'Ingresa un correo'})
   .email({message: 'Debe ser un email valido'}),
   password: z
   .string()
   .min(4,{message: 'Ingresa una contraseña valida 4'})
   .max(12,{message: 'Ingresa contraseña valida 12'})
   
})

export type FormSchema = z.TypeOf<typeof formSchema>