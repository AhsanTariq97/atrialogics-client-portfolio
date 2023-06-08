import {AiOutlineMail} from 'react-icons/ai'
import {BiSquare} from 'react-icons/bi'
import {BsGithub} from 'react-icons/bs'
import {FaCodepen, FaLinkedinIn} from 'react-icons/fa'
import React from 'react'

const Icon = ({ iconName }: {iconName: string}) => {

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
        <div className={`group-hover:bg-designColor group-hover:text-white group-hover:p-2 hover:bg-designColor hover:text-white hover:p-2 p-0 rounded-full duration-300 ease-[cubic-bezier(.47,1.64,.41,.8)]`}>
            <IconComponent size={28} />
        </div>
    </div> : null
  )
}

export default Icon