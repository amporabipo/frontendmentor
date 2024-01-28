import style from "@/app/newbie/16/16.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Newbie16(){
   return(
      <>
         <div className={style.container}>
            <div className={style.card}>
               <div className={style.imgprofile}>
                  <Image
                     src={'/16/avatar-jessica.jpeg'}
                     width={100}
                     height={100}
                     alt="profile"
                     priority={true}
                  >
                  </Image>
               </div>
               <div className={style.descript}>
                  <h2>Jessica Randall</h2>
                  <h3>London, United Kingdom</h3>
                  <h4>"Front-end developer and avid reader"</h4>
               </div>
               <div className={style.linksc}>
                     <Links
                        names={'Github'}
                     />
                     <Links
                        names={'Frontend Mentor'}
                     />
                     <Links
                        names={'LinkedIng'}
                     />
                     <Links
                        names={'Twitter'}
                     />
                     <Links
                        names={'Instagram'}
                     />
               </div>
            </div>
         </div>
      </>
   )
}
interface PropsLinks{
   names: string
   
}

function Links({names}: PropsLinks){
   return(
      <>
         <div className={style.links}>
            <Link
               href={'https://a.com'}
            >
               {names}
            </Link>
         </div>
      </>
   )
}