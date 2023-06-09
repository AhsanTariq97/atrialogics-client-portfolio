import React from 'react'
import Icon from '../atoms/Icon'
import Title from '../atoms/Title'
import Text from '../atoms/Text'

const WordItem = ({ title, createdAt, iconName }: {title: string, createdAt: string, iconName: string }) => {
  
  const createdAtDate = new Date(createdAt);
  const options = { month: 'long' as const, day: 'numeric' as const, year: 'numeric' as const }
  const formattedCreatedAt = createdAtDate.toLocaleDateString('en-US', options)

  return (
    <li className="flex justify-start items-start space-x-4 max-w-lg group">
        <Icon iconName={iconName} />
        <div className='flex flex-col'>
            <Title tag='h3' hover='group-hover:underline' size='sm' >{title}</Title>
            <Text tag='p' size='sm' >{formattedCreatedAt}</Text>
        </div>
    </li>
  )
}

export default WordItem