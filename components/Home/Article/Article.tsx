import React from 'react'
import { articleData } from '../../../data/data'
import ArticleCard from './ArticleCard'

const Article = () => {
  return (
    <div className='pt-20 pb-20 bg-gray-100'>
      <div className='w-[90%] mx-auto'>
        {/* Heading text */}
        <h1 className='text-4xl md:text-6xl text-gray-900 font-bold'>Latest Articles</h1>
        {/* Card grid */}
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {/* Ariticle mapping card */}
            {articleData.map((article)=> {
                return <div key={article.id} className='bg-white rounded-lg shadow-md overflow-hidden'>
                    {/* REuseable cards */}
                    <ArticleCard article={article}/>
                </div>
            })}
        </div>
      </div>
    </div>
  )
}

export default Article
