import style from '@/app/newbie/12/12.module.css'
import Image from 'next/image'
import clsx from 'clsx'

export default function Newbie12() {
  return (
    <>
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.sectionhead}>
            <div className={style.col1}>
              <h1>10,000+ of our
                users love our
                products
              </h1>
              <p>
                We only provide great products combined
                with excellent customer service. See what
                out satisfied customer are saying about our
                services.
              </p>
            </div>
            <div className={style.col2}>
              <Start
                text='Rated 5 Starts in Reviews'
                spaces='uno'
              />
              <Start
                text='Rated 5 Starts in Report Guru'
                spaces='dos'
              />
              <Start
                text='Rated 5 Starts in BestTeach'
                spaces='tres'
              />
            </div>
          </div>
          <div className={style.sectioncard}>
            <Cards
              img={cartObj[0].img}
              name={cartObj[0].name}
              sub={cartObj[0].sub}
              descript={cartObj[0].description}
              margins='uno'
            />
            <Cards
              img={cartObj[1].img}
              name={cartObj[1].name}
              sub={cartObj[1].sub}
              descript={cartObj[1].description}
              margins='dos'
            />
            <Cards
              img={cartObj[2].img}
              name={cartObj[2].name}
              sub={cartObj[2].sub}
              descript={cartObj[2].description}
              margins='tres'
            />
          </div>
        </div>
      </div>
    </>
  )
}

const cartObj = [
  {
    img: '/12/image-colton.jpg',
    name: 'Colton Smith',
    sub: 'Verified Buyer',
    description: '"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"',
  },
  {
    img: '/12/image-irene.jpg',
    name: 'Irene Roberts',
    sub: 'Verified Buyer',
    description: '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."'
  },
  {
    img: '/12/image-anne.jpg',
    name: 'Anne Wallace',
    sub: 'Verified Buyer',
    description: ' "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"'
  }
]

function StartImg() {
  return (
    <>
      <Image
        src={'/12/icon-star.svg'}
        width={20}
        height={20}
        alt='start'
      >
      </Image>
    </>
  )
}

interface StartProps {
  text: string,
  spaces: string
}
function Start({ text, spaces }: StartProps) {

  const fiveStarts = () => {
    const components = [];
    for (let i = 0; i < 5; i++) {
      components.push(<StartImg key={i} />)
    }
    return components
  }

  return (
    <>
      <div className={clsx(style.content, {
        [style.space1]: spaces === 'uno',
        [style.space2]: spaces === 'dos',
        [style.space3]: spaces === 'tres'
      })}>
        <div className={style.left}>
          {fiveStarts()}
        </div>
        <div className={style.right}>
          <span>{text}</span>
        </div>
      </div>
    </>
  )
}

interface CardsProps {
  img: string
  name: string
  sub: string
  descript: string
  margins: string

}

function Cards({ img, name, sub, descript, margins }: CardsProps) {
  return (
    <>
      <div className={clsx(style.contentcard, {
        [style.margint1]: margins === 'uno',
        [style.margint2]: margins === 'dos',
        [style.margint3]: margins === 'tres',
      })}>
        <div className={style.profile}>
          <Image
            src={img}
            height={30}
            width={30}
            alt='as'
          ></Image>
          <div className={style.name}>
            <h3>{name}</h3>
            <span>{sub}</span>
          </div>
        </div>
        <div className={style.descript}>
          <p>
            {descript}
          </p>
        </div>
      </div>
    </>
  )
}