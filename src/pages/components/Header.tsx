import {AiOutlineMail} from 'react-icons/ai'
import {BiSquare} from 'react-icons/bi'
import {BsGithub} from 'react-icons/bs'
import {FaCodepen, FaLinkedinIn} from 'react-icons/fa'
import Link from 'next/link'

const Header = () => {
  return (
    <>
        <header className="flex flex-col justify-start items-start md:flex-row md:items-center mb-8 space-y-3 md:space-y-0">
            <div className="font-rammetto text-[2rem] font-normal min-w-[15rem]">
                <h1>Nick</h1>
                <h1>McMillan</h1>
            </div>
            <h2 className="max-w-sm font-bold pr-8">I&apos;m a freelance front-end developer who wants to help make the internet a more creative, accessible, and better place.</h2>
        </header>
        <ul className='flex justify-start items-center space-x-6 mb-12'>
            <li className='w-10 h-10 flex items-center justify-center'>
                <Link href='' className="hover:bg-white hover:text-[#333333] rounded-full p-0 hover:p-2 duration-300 ease-[cubic-bezier(.47,1.64,.41,.8)]"><AiOutlineMail size={28} /></Link>
            </li>
            <li className='w-10 h-10 flex items-center justify-center'>
                <Link href='' className="hover:bg-white hover:text-[#333333] rounded-full p-0 hover:p-2 duration-300 ease-[cubic-bezier(.47,1.64,.41,.8)]"><BiSquare size={28} /></Link>
            </li>
            <li className='w-10 h-10 flex items-center justify-center'>
                <Link href='' className="hover:bg-white hover:text-[#333333] rounded-full p-0 hover:p-2 duration-300 ease-[cubic-bezier(.47,1.64,.41,.8)]"><BsGithub size={28} /></Link>
            </li>
            <li className='w-10 h-10 flex items-center justify-center'>
                <Link href='' className="hover:bg-white hover:text-[#333333] rounded-full p-0 hover:p-2 duration-300 ease-[cubic-bezier(.47,1.64,.41,.8)]"><FaCodepen size={28} /></Link>
            </li>
            <li className='w-10 h-10 flex items-center justify-center'>
                <Link href='' className="hover:bg-white hover:text-[#333333] rounded-full p-0 hover:p-2 duration-300 ease-[cubic-bezier(.47,1.64,.41,.8)]"><FaLinkedinIn size={28} /></Link>
            </li>
        </ul>
    </>
  )
}

export default Header