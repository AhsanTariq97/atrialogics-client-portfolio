import {AiOutlineMail} from 'react-icons/ai'
import {BiSquare} from 'react-icons/bi'
import {BsGithub} from 'react-icons/bs'
import {FaCodepen, FaLinkedinIn} from 'react-icons/fa'
import React from 'react'

interface IconProps {
    iconName: string;
    hoverColor?: string;
    hoverBgColor?: string;
    size?: string;
    hoverSize?: string;
}

const Icon: React.FC<IconProps> = ({ iconName, hoverColor='text-white', hoverBgColor='bg-designColor' }) => {

    let IconComponent: React.ElementType | null = null

    switch (iconName) {
        case 'github':
          IconComponent = BsGithub;
          break;
        case 'mail':
          IconComponent = AiOutlineMail;
          break;
        case 'codeSandbox':
          IconComponent = BiSquare;
          break;
        case 'codepen':
          IconComponent = FaCodepen;
          break;
        case 'linkedin':
          IconComponent = FaLinkedinIn;
          break;
        default:
          IconComponent = null;
    }

  return (
    IconComponent ? 
    <div className='min-w-[48px] min-h-[48px] flex items-center justify-center'>
        <div className={`group-hover:${hoverBgColor} group-hover:${hoverColor} group-hover:p-2 hover:${hoverBgColor} hover:${hoverColor} hover:p-2 p-0 rounded-full duration-300 ease-[cubic-bezier(.47,1.64,.41,.8)]`}>
            <IconComponent size={28} />
        </div>
    </div> : null
  )
}

export default Icon