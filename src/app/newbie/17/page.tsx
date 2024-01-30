'use client'
import style from "@/app/newbie/17/17.module.css"
import Link from "next/link"
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormSchema, formSchema } from "@/app/newbie/17/validate.schema"
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from "clsx"
import { useState } from "react"



export default function Newbiew17() {

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormSchema>({ resolver: zodResolver(formSchema) })

   const onSubmit: SubmitHandler<FormSchema> = async (data) => {


   }

   const [mystate, setState] = useState<boolean>()

   const handleStyleError = () => {
      if (errors === null || errors === undefined) {
         setState(true)
      } else {
         setState(false)
      }
   }
   return (
      <>
         <div className={style.container}>
            <div className={style.divleft}>
               <h2>Learn to code by watching others</h2>
               <p>See how experienced developers solve
                  problems in real-time. Watching
                  scripted tutorials is great, but
                  understanding how developers
                  think is invaluable.</p>
            </div>
            <div className={style.divright}>
               <div className={style.purchares}>
                  <span><b>Try it free 7 days</b> then $20/mo. thereafter</span>
               </div>
               <div className={style.divform}>
                  <form onSubmit={handleSubmit(onSubmit)} noValidate>
                     <fieldset>
                        <legend>Your data </legend>
                        <label htmlFor="name">
                           <input type="text"
                              id="name"
                              required
                              placeholder="First Name"
                              {...register('name')}
                              className={clsx(style.baseinput, {
                                 [style.errorinput]: mystate === false
                              })}
                           />
                           {errors.name && (
                              <Error
                                 errors={errors.name.message}
                              />
                           )}
                        </label>
                        <label htmlFor="lastname">
                           <input
                              type="text"
                              id="lastname"
                              required
                              placeholder="Last Name"
                              {...register('lastname')}
                              className={clsx(style.baseinput, {
                                 [style.errorinput]: mystate === false
                              })}
                           />
                           {errors.lastname && (
                              <Error
                                 errors={errors.lastname.message}
                              />
                           )}
                        </label>
                        <label htmlFor="email">
                           <input
                              type="email"
                              id="email"
                              required
                              placeholder="Email Address"
                              {...register('email')}
                              className={clsx(style.baseinput, {
                                 [style.errorinput]: mystate === false
                              })}
                           />
                           {errors.email && (
                              <Error
                                 errors={errors.email.message}
                              />
                           )}
                        </label>
                        <label htmlFor="password">
                           <input
                              type="password"
                              id="password"
                              required
                              placeholder="Password"
                              {...register('password')}
                              className={clsx(style.baseinput, {
                                 [style.errorinput]: mystate === false
                              })}
                           />
                           {errors.password && (
                              <Error
                                 errors={errors.password.message}
                              />
                           )}
                        </label>
                     </fieldset>
                     <button type="submit" onClick={handleStyleError}> Claim your free trial</button>
                  </form>
                  <h6>By clicking the button, you are agreeing to our <Link href={'/a'}>Terms and Services</Link></h6>
               </div>
            </div>
         </div>
      </>
   )
}

interface PropsError {
   errors?: string
}
function Error({ errors }: PropsError) {
   return (
      <>
         <span className={style.errorspan}>
            {errors}
         </span>
      </>
   )
}