import React from 'react'
import Icon from '../atoms/Icon'
import Title from '../atoms/Title'
import Text from '../atoms/Text'

const ListItem = ({ title, content, iconName }: {title: string, content: string, iconName: string }) => {
  return (
    <li className="flex justify-start items-start space-x-4 max-w-lg group">
        <Icon iconName={iconName} />
        <div className='flex flex-col'>
            <Title tag='h3' hover='group-hover:underline' size='sm' >{title}</Title>
            <Text tag='p' size='sm' >{content}</Text>
        </div>
    </li>
  )
}

export default ListItem