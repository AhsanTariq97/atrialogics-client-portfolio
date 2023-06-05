/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const RecentWork = () => {

  const router = useRouter()

  const viewNavigate = (newRoute: any) => {
    // Navigate to the new route
    if (!document.startViewTransition) {
      return router.push(newRoute);
    } else {
      return document.startViewTransition(() => router.push(newRoute));
    }
  };

  return (
    <div className='mb-20'>
        <h2 className="font-rammetto text-xl mb-5">Recent Work</h2>
        <ul className='flex flex-col justify-between items-start space-y-10'>
          <button onClick={() => viewNavigate('/work')}>
              <li className="flex flex-col sm:flex-row justify-start items-center sm:items-start sm:space-x-4 space-y-2 sm:space-y-0 p-2 bg-[#812732] max-w-lg group">
                <div className={`min-w-[200px] max-w-[200px] flex items-center justify-center move-nav-img`}>
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
                <div className='min-w-[200px] max-w-[200px] flex items-center justify-center'>
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
                <div className='min-w-[200px] max-w-[200px] flex items-center justify-center'>
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