import Link from 'next/link'
import Icon from '../atoms/Icon'
import Title from '../atoms/Title'

const Header = () => {
  return (
    <>
        <header className="flex flex-col justify-start items-start md:flex-row md:items-center mb-8 space-y-3 md:space-y-0">
            <div className="text-[2rem] font-normal min-w-[15rem]">
                <Title tag='h1' fontFamily='font-rammetto' size='xl'>Nick</Title>
                <Title tag='h1' fontFamily='font-rammetto' size='xl'>McMillan</Title>
            </div>
            <Title tag='h2' size='base' className='max-w-sm pr-8'>I&apos;m a freelance front-end developer who wants to help make the internet a more creative, accessible, and better place.</Title>
        </header>
        <ul className='flex justify-start items-center space-x-4 mb-12'>
            <Link href='/'><Icon iconName='mail' /></Link>
            <Link href='/'><Icon iconName='codeSandbox' /></Link>
            <Link href='/'><Icon iconName='github' /></Link>
            <Link href='/'><Icon iconName='codepen' /></Link>
            <Link href='/'><Icon iconName='linkedin' /></Link>
        </ul>
    </>
  )
}

export default Header