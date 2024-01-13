import style from '@/app/newbie/09/09..module.css'
import Image from 'next/image'

export default function Newbie09() {
  return (
    <>
      <div className={style.container}>
        <div className={style.cards}>
          <Card
            icon={"/09/icon-sedans.svg"}
            title={myData[0].title}
            text={myData[0].texts}
            mycolor={style.card}
          />
          <Card
            icon={"/09/icon-suvs.svg"}
            title={myData[1].title}
            text={myData[1].texts}
            mycolor={style.card1}
          />
          <Card
            icon={"/09/icon-luxury.svg"}
            title={myData[2].title}
            text={myData[2].texts}
            mycolor={style.card2}
          />
        </div>
      </div>
    </>
  )
}

interface Props {
  icon: string,
  title: string,
  text: string,
  mycolor: string
}

function Card({ icon, title, text, mycolor }: Props) {


  return (
    <>
      <div className={mycolor}>
        <div className={style.contendcard}>
          <Image
            src={icon!}
            alt=''
            width={95}
            height={55}>
          </Image>
          <h2>{title}</h2>
          <p>{text}</p>
          <button>
            Learn More
          </button>
        </div>
      </div>
    </>
  )
}

const myData = [
  {
    title: "Sedans",
    texts: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
  },
  {
    title: "SUVs",
    texts: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
  },
  {
    title: "Luxury",
    texts: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
  }
]