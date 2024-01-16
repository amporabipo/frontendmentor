import style from '@/app/newbie/11/11.module.css'

export default function Newbie11() {
  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
          <div className={style.content}>
            <div className={style.wrapper}>
              <div className={style.title}>
                <h1>Get <span>insights</span> that help yout business grow.</h1>
                <p>Discover the benefits of data analytics and make better decisions
                  regarding revenue, customer, experience, and overall efficiency
                </p>
              </div>
              <div className={style.stacks}>
                <Row
                  title='10k+'
                  descript='COMPANIES'
                />
                <Row
                  title='314+'
                  descript='TEMPLATES'
                />
                <Row
                  title='12m+'
                  descript='QUERIES'
                />
              </div>
            </div>
          </div>
          <div className={style.heroimg}>
            <div className={style.filter}>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

interface PropsCom {
  title: string,
  descript: string
}

function Row({ title, descript }: PropsCom) {
  return (
    <>
      <div className={style.row}>
        <h2>{title}</h2>
        <span>{descript}</span>
      </div>
    </>
  )
}