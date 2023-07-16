import { stadisticsData } from '@/app/data/stadistics-home'
import StadisticHome from '../StadisticHome'

export default function DataInsights() {
  return (
    <section className='section'>
        <h4 className='title'>Data insights: SOMOS Achievements</h4>
        <article className='data-insights__container'>
            {
                stadisticsData && (
                    stadisticsData.map((stadistic: any, i: number) => (
                        <StadisticHome key={i} img={stadistic.img} after={stadistic.after} number={stadistic.number} title={stadistic.title}/>
                    ))
                )
            }
        </article>
        <button className="button stats-button">RETRACT</button>
    </section>
  )
}
