import style from '@/app/newbie/06/06.module.css'
import Image from 'next/image'
export default function Newbiew06() {
  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
          <div className={style.cardheader}>

          </div>
          <div className={style.cardcontent}>
            <div className={style.profile}>
              <Image
                src={'/06/image-victor.jpg'}
                alt='profile'
                height={100}
                width={100}
              >
              </Image>
              <p className={style.name}>Victor Crest<span>26</span></p>
              <p className={style.city}>London</p>
            </div>
            <hr className={style.hrs} />
            <div className={style.footer}>
              <div className={style.footer_item}>
                <p className={style.status}>80K</p>
                <small className={style.itemname}>Followers</small>
              </div>
              <div className={style.footer_item}>
                <p className={style.status}>803K</p>
                <small className={style.itemname}>Likes</small>
              </div>
              <div className={style.footer_item}>
                <p className={style.status}>1.4K</p>
                <small className={style.itemname}>Photos</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}