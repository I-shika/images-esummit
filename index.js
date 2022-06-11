import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export const getStaticProps = async () => {
  const res = await fetch('https://api.esummit.in/events/all')
  const data =  await res.json();
  return {props :{data,},}
}

function show({props}){
    return ( <div  className={styles.body}>
    <div  className={styles.event_heading}>
    <h3>EVENTS</h3>
    </div>
    {props.data.CompetitiveEvents.map(
      show => {
        return(
         <div className={styles.event_img}>
           
        <div className={styles.event_images}>
            <img src={show.card_image}/>
          
          </div>
            </div> )
          }
  )} </div>)}
    


export default  show;