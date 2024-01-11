import style from '@/app/newbie/02/02.module.css'
import Image from 'next/image'

export default function Newbiew02() {
  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
          <Image
            src={"/02/image-qr-code.png"}
            height={50}
            width={50}
            layout='responsive'
            alt='as'
          >
          </Image>
          <div className={style.content}>
            <span className={style.title}>Improve yout front-end
              skills by building projects
            </span>
            <span className={style.par}>Scan the QR code to visit
              Frontend Mentor and take your
              coding skills to the next
              level
            </span>
          </div>
        </div>
      </div>
    </>
  )
}