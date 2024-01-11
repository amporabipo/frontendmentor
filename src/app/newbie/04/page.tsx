import style from '@/app/newbie/04/04.module.css'
import Image from 'next/image'

export default function Newbiew04() {
  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
          <div className={style.sideleft}>

          </div>
          <div className={style.sideright}>
            <span className={style.slug}>Perfume</span>
            <h1>Gabrielle Essence Eau De Parfum</h1>
            <p>A floral, solar and voluptuous
              interpretation composed by Oliver Polge,
              Perfumer-Creator for the House of Chanel
            </p>
            <div className={style.price}>
              <span>$149.99</span>
              <span>$169.99</span>
            </div>
            <button className={style.mybtn}>
              <Image
                src={'/04/icon-cart.svg'}
                width={15}
                height={15}
                alt="cart-icon"
              >

              </Image>
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
