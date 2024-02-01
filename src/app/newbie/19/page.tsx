"use client"
import style from '@/app/newbie/19/19.module.css'
import Image from 'next/image'
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import {useForm, SubmitHandler} from 'react-hook-form'
import { FormSchema, formSchema } from '@/dist/newbie/19/validate.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx'
import { useState } from 'react';


export default function Newbie19(){

const { 
    register, 
    handleSubmit, 
    formState: { errors },} = useForm<FormSchema>
    ({ resolver: zodResolver(formSchema) })

const [mystate, setState] = useState<boolean>()

const onSubmit: SubmitHandler<FormSchema> = async (data) => {

}
const handleStyleError = () => {
    if (errors === null || errors === undefined) {
      setState(true)
    } else {
      setState(false)
    }
  }

    return(
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <Image
                    src={'/19/logo.svg'}
                    width={60}
                    height={20}
                    alt='loco'
                    >
                    </Image>
                    <h1>We are launching <span>soon!</span></h1>
                    <span>Subscribe and get notifed</span>
                    <form noValidate onSubmit={handleSubmit(onSubmit)}>
                        <label>
                        
                        <input 
                        type='email' 
                        placeholder='Your email address'
                        autoComplete='true'
                        required
                        {...register('email')}
                        className={clsx(style.baseinput, {
                            [style.errorinput]: mystate === false
                          })}
                        />
                        
                       </label>
                        <button onClick={handleStyleError}>Notify me</button>
                    </form>
                    {errors.email && (
                                <Error errors={errors.email.message} />
                         )}
                    <Image
                        src={'/19/illustration-dashboard.png'}
                        height={300}
                        width={500}
                        alt='dashboard-img'
                    >
                    </Image>
                    <div className={style.wrapperul}>
                    <ul>
                        <li><FaFacebookF /></li>
                        <li><FaTwitter /></li>
                        <li><FaInstagram /></li>
                    </ul>
                    </div>
                    
                    <h3>© Copyright Ping. All rights reserved.</h3>
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