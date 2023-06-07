import React from 'react'
import Title from '../atoms/Title'
import Text from '../atoms/Text'
import Image from 'next/image'

const WorkItem = ({ title, content, imageUrl }: {title: string, content: string, imageUrl: string }) => {
  return (
    <li className="flex flex-col sm:flex-row justify-start items-center sm:items-start sm:space-x-4 space-y-2 sm:space-y-0 p-2 max-w-lg group">
        <div className={`min-w-[200px] max-w-[200px] flex items-center justify-center`} >
            <Image src={imageUrl} alt='' width={200} height={200} />
        </div>
        <div className='flex flex-col'>
            <Title tag='h3' hover='group-hover:underline' size='sm' >{title}</Title>
            <Text tag='p' size='sm' >{content}</Text>
        </div>
    </li>
  )
}

export default WorkItem