
import style from '@/app/newbie/07/07.module.css'
import Image from 'next/image'
import { SlSocialInstagram } from "react-icons/sl";
import { ImFacebook } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";



export default function NewBiew07() {
  return (
    <>
      <div className={style.container}>
        <div className={style.headers}>
          <Image
            src={'/07/logo.svg'}
            width={350}
            height={150}
            alt='Logo'
          >

          </Image>

        </div>
        <div className={style.content}>
          <div className={style.heroimg}>
            <Image
              src={'/07/illustration-mockups.svg'}
              alt="Picture of the author"
              sizes="100vw"
              style={{
                width: '85%',
                height: 'auto',
              }}
              width={400}
              height={200}
            >

            </Image>
          </div>
          <div className={style.texts}>
            <h2>Build The Community
              Your Fans Will Love
            </h2>
            <p>
              Huddle re-imagines the way we build
              communities. You have a voice, but
              so does your audience. Create connections
              with your users as engage in genuine discussion
            </p>
            <button>
              Registers
            </button>
          </div>
        </div>
        <div className={style.footer}>
          <ul>
            <li><ImFacebook /></li>
            <li><FaXTwitter /></li>
            <li><SlSocialInstagram /> </li>
          </ul>
        </div>
      </div >
    </>
  )
}