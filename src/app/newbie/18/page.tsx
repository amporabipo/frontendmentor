"use client"

import style from '@/app/newbie/18/18.module.css'
import Image from 'next/image'

import { useForm, SubmitHandler } from 'react-hook-form'
import { FormSchema, formSchema } from '@/dist/newbie/18/validate.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { useState } from 'react'

export default function Newbie18() {

  const { register, handleSubmit, formState: { errors },

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
          <div className={style.text}>
            <span>We're</span>
            <span>coming</span>
            <span>soon</span>
            <p>Hello fellow shoppers!
              We're currently building
              our new fashion store.
              Add your email below
              to stay up-to-date
              with announcements
              and our launch deals.</p>
          </div>
          <div className={style.divform}>
            <form className={style.myform} noValidate onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor='email'>
                <input id='email'
                  type='email'
                  placeholder='Email Addres'
                  autoComplete='true'
                  required
                  {...register('email')}
                  className={clsx(style.baseinput, {
                    [style.errorinput]: mystate === false
                  })}
                />

              </label>
              <button onClick={handleStyleError}>
                <Image
                  src={'/18/icon-arrow.svg'}
                  height={15}
                  width={15}
                  alt='arrow'>
                </Image>
              </button>
            </form>
            {errors.email && (
              <Error errors={errors.email.message} />
            )}
          </div>
        </div>
        <div className={style.logo}>
          <Image
            src={'/18/logo.svg'}
            height={40}
            width={200}
            alt='logo_icon'
          ></Image>
        </div>
        <div className={style.divrigth}>

        </div>
      </div >
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