/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const RecentWork = () => {

  const router = useRouter()

  const [transitionName, setTransitionName] = useState('')

  console.log('transitionName: ', transitionName)

  const viewNavigate = (newRoute: any) => {
    // Navigate to the new route
    if (!document.startViewTransition) {
      return router.push(newRoute);
    } else {
      return document.startViewTransition(() => router.push(newRoute));
    }
  };
  
  const handleClick = () => {
    setTransitionName('work-image');
  };

  useEffect(() => {
    if (transitionName !== '') {
      console.log('1. transitionName: ', transitionName)
      document.startViewTransition(() => {
        // setTransitionName('');
        router.push('/work');
      });
    }
  }, [transitionName]);

  return (
    <div className='mb-20'>
        <h2 className="font-rammetto text-xl mb-5">Recent Work</h2>
        <ul className='flex flex-col justify-between items-start space-y-10'>
          <button >
              <li className="flex flex-col sm:flex-row justify-start items-center sm:items-start sm:space-x-4 space-y-2 sm:space-y-0 p-2 bg-[#812732] max-w-lg group">
                <div className={`min-w-[200px] max-w-[200px] flex items-center justify-center`} onClick={handleClick} style={{ viewTransitionName: transitionName }} >
                  <Image src='/year-in-monzo-2020.png' alt='' width={200} height={200} />
                </div>
                <div className='flex flex-col'>
                  <h3 className='group-hover:underline'>Year in Monzo 2020</h3>
                  <p>A unique experience in to how each customer has spent over the past year</p>
                </div>
              </li>
          </button>
          <button onClick={() => viewNavigate('/work1')}>
              <li className="flex flex-col sm:flex-row justify-start items-center sm:items-start sm:space-x-4 space-y-2 sm:space-y-0 p-2 bg-[#637223] max-w-lg group">
                <div className='min-w-[200px] max-w-[200px] flex items-center justify-center move-nav-img2'>
                  <Image src='/platform-requests.jpeg' alt='' width={200} height={200} />
                </div>
                <div className='flex flex-col'>
                  <h3 className='group-hover:underline'>Year in Monzo 2020</h3>
                  <p>A unique experience in to how each customer has spent over the past year</p>
                </div>
              </li>
          </button>
          <button onClick={() => viewNavigate('/work2')}>
              <li className="flex flex-col sm:flex-row justify-start items-center sm:items-start sm:space-x-4 space-y-2 sm:space-y-0 p-2 bg-[#d12312] max-w-lg group">
                <div className='min-w-[200px] max-w-[200px] flex items-center justify-center move-nav-img3'>
                  <Image src='/year-in-monzo-2020.png' alt='' width={200} height={200} />
                </div>
                <div className='flex flex-col'>
                  <h3 className='group-hover:underline'>Year in Monzo 2020</h3>
                  <p>A unique experience in to how each customer has spent over the past year</p>
                </div>
              </li>
          </button>
        </ul>
    </div>
  )
}

export default RecentWork