import Link from 'next/link'
import Title from '../atoms/Title'
import WordItem from '../molecules/WordItem'

import type { Article } from '~/pages/blog/[slug]'

const Words = ({ articles }: {articles: Article []}) => {
  return (
    <div className='mb-20'>
        <Title tag='h2' fontFamily='font-rammetto' size='lg'>Words</Title>
        <ul className='flex flex-col justify-between items-start space-y-10 mt-5'>
          {articles.map(article => (<Link href={`/blog/${article.slug}`} key={article.slug}><WordItem title={article.title} createdAt={article.createdAt} iconName='github' /></Link>))}
        </ul>
    </div>
  )
}

export default Words
