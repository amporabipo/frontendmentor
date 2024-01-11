import style from '@/app/newbie/01/01.module.css'
import Image from 'next/image'
export default function Newbiew01() {
  return (
    <>
      <div className={style.container}>

        <div className={style.card}>
          <Image
            src={"/01/illustration-article.svg"}
            width={100}
            height={100}
            alt='1asd'
            layout='responsive'
          >
          </Image>
          <div className={style.contentcard}>
            <span className={style.tag}>Learning</span>
            <h2 className={style.fecha}>Published 21 Dec 2023</h2>
            <h1 className={style.title}>HTML & CSS foundations</h1>
            <p className={style.textp}>These languages are the backbone of every
              website, defining structure, content and
              presentation
            </p>
            <div className={style.autor}>
              <Image
                src={"/01/image-avatar.webp"}
                height={35}
                width={35}
                alt='avatar'
              >

              </Image>
              <span className={style.autorname}>Greg Hopper</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}