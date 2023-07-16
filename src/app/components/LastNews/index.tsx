import { newsData } from '@/app/data/news'
import PostCard from '../PostCard'

export default function LastNews() {
  return (
    <section className='section last-news'>
        <h4 className='title'>Last News Feeds</h4>
        <article className='container-projects'>
            {
                newsData && (
                    newsData.map((news: any, i: number) => (
                        <PostCard key={i} title={news.title} icon={news.icon} img={news.img} description={news.description}/>
                    ))
                )
            }
        </article>
    </section>
  )
}
