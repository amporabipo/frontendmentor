import style from '@/app/newbie/14/14.module.css'
import Image from 'next/image'
import clsx from 'clsx'


export default function Newbie14() {
    return (
        <>
            <div className={style.container}>
                <div className={style.titles}>
                    <h1>Reliable, efficient delivery <br />
                        <span> Powered by Technology</span>
                    </h1>
                    <p>Our Artificial Intelligence powered tools use millions
                        of project data points to ensure that your project
                        is successful</p>
                </div>
                <div className={style.cards}>
                    <div className={style.contentl}>
                        <Card
                            title={data[0].title}
                            description={data[0].description}
                            img={data[0].img}
                            color='cyan' />
                    </div>
                    <div className={style.contentc}>
                        <Card
                            title={data[1].title}
                            description={data[1].description}
                            img={data[1].img}
                            color='red'
                        />
                        <Card
                            title={data[2].title}
                            description={data[2].description}
                            img={data[2].img}
                            color='yellow'
                        />
                    </div>
                    <div className={style.contentr}>
                        <Card
                            title={data[3].title}
                            description={data[3].description}
                            img={data[3].img}
                            color='blue'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}



const data = [
    {
        title: 'Supervisor',
        description: 'Monitors activity to identify project roadblocks',
        img: '/14/icon-supervisor.svg'
    },
    {
        title: 'Team Builder',
        description: 'Scans our talent network to create the optimal team for your project',
        img: '/14/icon-team-builder.svg'
    },
    {
        title: 'Karma',
        description: 'Regularly evaluates our talent to ensure quality',
        img: '/14/icon-karma.svg'
    },
    {
        title: 'Calculator',
        description: 'Uses data from past projects to provide better delivery estimates',
        img: '/14/icon-calculator.svg'
    }
]

interface CardProps {
    title: string,
    description: string,
    img: string,
    color: 'cyan' | 'red' | 'yellow' | 'blue'
}

function Card({ title, description, img, color }: CardProps) {
    return (
        <>
            <div className={clsx(style.card, {
                [style.cyan]: color === 'cyan',
                [style.red]: color === 'red',
                [style.yellow]: color === 'yellow',
                [style.blue]: color === 'blue'
            })}>
                <div className={style.titlecard}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={style.footercard}>
                    <Image
                        src={img}
                        width={45}
                        height={45}
                        alt={`icon-${title}`}
                    ></Image>
                </div>
            </div>
        </>
    )
}