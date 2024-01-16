import style from '@/app/newbie/10/10.module.css'
import Image from 'next/image'
import clsx from 'clsx'

export default function Newbie10() {
  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
          <div className={style.result}>
            <h3>Your Result</h3>
            <div className={style.circleresult}>
              <span>76</span>
              <span>of 100</span>
            </div>
            <h2>Great</h2>
            <p>You scored higher than 65% of
              the people who have taken these tests.
            </p>
          </div>
          <div className={style.summary}>
            <h3>Summary</h3>
            <ListSummary
              icon="/10/icon-reaction.svg"
              itemtext='Reaction'
              nums="80"
              tipo="red"
            />
            <ListSummary
              icon="/10/icon-memory.svg"
              itemtext='Memory'
              nums="80"
              tipo="yellow"
            />
            <ListSummary
              icon="/10/icon-verbal.svg"
              itemtext='Verbal'
              nums="80"
              tipo="green"
            />
            <ListSummary
              icon="/10/icon-visual.svg"
              itemtext='Visual'
              nums="80"
              tipo="violet"
            />
            <button>Continue</button>
          </div>
        </div>
      </div>
    </>
  )
}

interface PropsSumary {
  icon: string,
  itemtext: string,
  nums: string,
  tipo: 'red' | 'yellow' | 'green' | 'violet'
}

function ListSummary({ icon, itemtext, nums, tipo }: PropsSumary) {


  return (
    <>
      <div className={clsx(style.base, {
        [style.red]: tipo === 'red',
        [style.yellow]: tipo === 'yellow',
        [style.green]: tipo === 'green',
        [style.violet]: tipo === 'violet'
      })}>
        <div className={style.pard}>
          <Image
            src={icon}
            width={30}
            height={30}
            alt={`icon-${icon}`}>
          </Image>
          <span>{itemtext}</span>
        </div>
        <span className={style.porcent}><em>{nums} </em><i> / </i> 100</span>
      </div >
    </>
  )
}