import React from 'react'
import Title from '../atoms/Title'

import type { ContentElement } from '~/pages/blog/[slug]'

const TableOfContent = ({headings}: { headings: ContentElement[] }) => {

    const smoothScrollTo = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        })
    };

  return (
    <div className='hidden col-start-3 xl:block'>
        <div className='sticky top-6 flex flex-col justify-start items-start'>
            <Title tag='h2' size='lg'>Table of Content</Title>
            {headings.map(heading => (
                <p className='hover:underline hover:cursor-pointer' key={heading.content} onClick={() => smoothScrollTo(heading.content)}>{heading.content}</p>
            ))}
        </div>
    </div>
  )
}

export default TableOfContent