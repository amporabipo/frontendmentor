import Link from "next/link"
import style from '@/app/newbie/styles.module.css'

interface LinkComponentProps {
  to: string,
  text: string,
  nums: string,

}

export default function LinkBtn({ to, text, nums }: LinkComponentProps) {
  return (
    <>
      <div className={style.btn}>
        <div className={style.num}>
          {nums}
        </div>
        <Link href={to} className={style.colortext} >
          <span>{text}</span>
        </Link>
      </div>
    </>
  )
}