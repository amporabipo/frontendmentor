import style from '@/app/newbie/13/13.module.css'

export default function Newbie13() {
    return (
        <>
            <div className={style.container}>
                <div className={style.card}>
                    <div className={style.topcard}>
                        <h1>Join our community</h1>
                        <h2>30-day, hassle-free money back guarantee</h2>
                        <p>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
                    </div>
                    <div className={style.bottomcard}>
                        <div className={style.colleft}>
                            <h2>Monthly Subscription</h2>
                            <h3><span>$29</span> per month</h3>
                            <p>Full access for less than $1 a day</p>
                            <button>Sign Up</button>
                        </div>
                        <div className={style.colright}>
                            <h2>Why Us</h2>
                            <p> Tutorials by industry experts Peer & expert code review Coding exercises Access to our GitHub repos Community forum Flashcard decks New videos every week</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


