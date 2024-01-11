import style from '@/app/newbie/03/03.module.css'
import Image from 'next/image'

export default function Newbiew03() {
  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
          <div className={style.imgs}>
            <Image
              src={'/03/image-equilibrium.jpg'}
              height={100}
              width={100}
              layout='responsive'
              alt='product'
              className={style.myimgs}
            >
            </Image>
            <div className={style.overlay}>
              <span>
                <Image
                  src={'/03/icon-view.svg'}
                  height={30}
                  width={30}
                  alt='icon'>
                </Image>
              </span></div>
          </div>
          <div className={style.content}>
            <h1>Equilibrium #3429</h1>
            <p>Out Equilibrium collection promotes
              balance and calm
            </p>
            <div className={style.price}>
              <span className={style.ether}><Image
                src={'/03/icon-ethereum.svg'}
                height={20}
                width={12}
                alt='ethereum'
              ></Image>0.041ETH</span>
              <span className={style.days}><Image
                src={'/03/icon-clock.svg'}
                height={20}
                width={20}
                alt='clock'
              ></Image>3 Days left</span>
            </div>
            <hr></hr>
            <div className={style.author}>
              <Image
                src={'/03/image-avatar.png'}
                height={30}
                width={30}
                alt="avatar"
                className={style.imga}
              >
              </Image>
              <h3>Creation of <span>Jules Wyverm</span></h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}