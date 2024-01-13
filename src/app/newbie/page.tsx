import style from '@/app/newbie/styles.module.css'
import Image from 'next/image'
import LinkBtn from '@/app/newbie/components/linkbtn'

export default function Home() {
  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <Image
            src={'./logo-desktop.svg'}
            height={10}
            width={550}
            layout='intrinsic'
            alt='logo-frontenmentor'
          >
          </Image>
        </div>
        <div className={style.content}>
          <div className={style.card}>
            <h1>Challengs:</h1>
            <ul className={style.list} >
              <li className={style.listnew}>
                <LinkBtn
                  to="newbie/01"
                  text="Blog preview card"
                  nums='1'
                />
              </li>
              <li className={style.listnew}>
                <LinkBtn
                  to="newbie/02"
                  text="QR code"
                  nums='2'
                />
              </li>
              <li className={style.listnew}>
                <LinkBtn
                  to="newbie/03"
                  text="NFT preview "
                  nums='3'
                />
              </li>
              <li className={style.listnew}>
                <LinkBtn
                  to="newbie/04"
                  text="Product preview"
                  nums='4'
                />
              </li>
              <li className={style.listnew}>
                <LinkBtn
                  to="newbie/05"
                  text="Order sumary"
                  nums='5'
                />
              </li>
              <li className={style.listnew}>
                <LinkBtn
                  to="newbie/06"
                  text="Profile card"
                  nums='6'
                />
              </li>
              <li className={style.listnew}>
                <LinkBtn
                  to="newbie/07"
                  text="huddle landing page"
                  nums='7'
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}