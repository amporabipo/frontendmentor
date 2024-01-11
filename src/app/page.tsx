import style from '@/app/styles.module.css'
import Image from 'next/image'
import Link from 'next/link'


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
            <h1>Level Challeng:</h1>
            <ul >
              <Link href={"/newbie"}>
                <li className={style.list}>
                  <span className={style.tag1}>
                    <span className={style.numtag1}>1
                    </span>
                    <span className={style.letertag1}>newbie</span>
                  </span>

                </li>
              </Link>
              <Link href={"/junior"}>
                <li className={style.list}>
                  <span className={style.tag2}>
                    <span className={style.numtag2}>2
                    </span>
                    <span className={style.letertag2}>Junior</span>
                  </span>
                </li>
              </Link>
              <Link href={"/intermediate"}>
                <li className={style.list}>
                  <span className={style.tag3}>
                    <span className={style.numtag3}>3
                    </span>
                    <span className={style.letertag3}>Intermediate</span>
                  </span>
                </li>
              </Link>
              <Link href={"/advance"}>
                <li className={style.list}>
                  <span className={style.tag4}>
                    <span className={style.numtag4}>4
                    </span>
                    <span className={style.letertag4}>Advance</span>
                  </span>
                </li>
              </Link>
              <Link href={"/guro"}>
                <li className={style.list}>
                  <span className={style.tag5}>
                    <span className={style.numtag5}>5
                    </span>
                    <span className={style.letertag5}>guro</span>
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
