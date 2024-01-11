import style from '@/app/newbie/05/05.module.css'
import Image from 'next/image'
export default function Newbiew05() {
  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
          <div className={style.headimg}>

          </div>
          <div className={style.content}>
            <div className={style.texts}>
              <h1>Order Summary</h1>
              <p>You can now listen millions
                of songs, audiobooks, and podcast
                on any device anywhere you like!
              </p>
            </div>
            <div className={style.price}>
              <Image
                src={'/05/icon-music.svg'}
                width={40}
                height={40}
                alt='icon music'

              >
              </Image>
              <div className={style.description}>
                <span>Anual Plan</span>
                <span>$59.99/year</span>
              </div>
              <span className={style.change}>Change</span>
            </div>
            <div className={style.payment}>
              <button>Proceed to Payment</button>
              <span>Cancel Order</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}