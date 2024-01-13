"use client"
import style from '@/app/newbie/08/08.module.css'
import Image from 'next/image'
import { useState } from 'react';

export default function NewBiew08() {
  return (
    <>
      <div className={style.container}>
        <div className={style.cardfaqs}>
          <div className={style.faqs}>
            <Image
              src={'/08/icon-star.svg'}
              alt='start'
              width={60}
              height={60}
            >
            </Image>
            <h1>FAQS</h1>
          </div>
          <div className={style.listfaqs}>
            {data.map((item) => {
              return (
                <Collapse key={item.id}
                  title={item.title}
                  content={item.text}
                  collapsed>
                </Collapse>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

interface Props {
  title: string;
  collapsed: boolean;
  content: string
}

function Collapse({ title, collapsed, content }: Props) {

  const [isCollap, setIsCollap] = useState(collapsed)



  return (
    <>
      <div className={style.col}>
        <div className={style.colhead} onClick={() => setIsCollap(!isCollap)}>
          <h3>{title}</h3>
          {isCollap ? <Icons iconbol={isCollap} /> : <Icons iconbol={isCollap} />}
        </div>

        <div className={`${style.content} ${isCollap ? style.content_collapsed : style.content_expan}`}>
          <p>{content}</p>
        </div>
      </div>
    </>
  )
}


interface PropsIcons {
  iconbol: boolean
}

function Icons({ iconbol }: PropsIcons) {
  return (
    <>
      {iconbol ? <div className={style.icon}>
        <Image
          src={'/08/icon-plus.svg'}
          alt='icon-plus'
          width={50}
          height={50}>
        </Image>
      </div> :
        <div className={style.icon}>
          <Image
            src={'/08/icon-minus.svg'}
            alt='icon-plus'
            width={50}
            height={50}>
          </Image>
        </div>}

    </>
  )
}

const data = [
  {
    id: 0,
    title: "What is Frontend Mentor, and how will it help me?",
    text: "Frontend Mentor offers realistic coding challenges to help developer improve their frontend coding skills with project in HTML, CSS, and Javacript. It's suitable for all levels and ideal for portfolio building"

  },
  {
    id: 1,
    title: "Is Frontend Mentor free?",
    text: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
  },
  {
    id: 2,
    title: 'Can I use Frontend Mentor projects in my portfolio?',
    text: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellentway to showcase your skills to potential employers!"
  },
  {
    id: 3,
    title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    text: "The best place to get help is inside Frontend Mentor's Discord community. There's a help  channel where you can ask questions and seek support from other community members."
  }

]