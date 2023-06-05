import Image from 'next/image'
import Link from 'next/link'

const RecentWork = () => {

  return (
    <div className='mb-20'>
        <h2 className="font-rammetto text-xl mb-5">Recent Work</h2>
        <ul className='flex flex-col justify-between items-start space-y-10'>
          <Link href='/work'>
              <li className="flex flex-col sm:flex-row justify-start items-center sm:items-start sm:space-x-4 space-y-2 sm:space-y-0 p-2 max-w-lg group">
                <div className={`min-w-[200px] max-w-[200px] flex items-center justify-center move-nav-img`}>
                  <Image src='/year-in-monzo-2020.png' alt='' width={200} height={200} />
                </div>
                <div className='flex flex-col'>
                  <h3 className='group-hover:underline'>Year in Monzo 2020</h3>
                  <p>A unique experience in to how each customer has spent over the past year</p>
                </div>
              </li>
          </Link>
          <Link href='/work1'>
              <li className="flex flex-col sm:flex-row justify-start items-center sm:items-start sm:space-x-4 space-y-2 sm:space-y-0 p-2 max-w-lg group">
                <div className='min-w-[200px] max-w-[200px] flex items-center justify-center'>
                  <Image src='/platform-requests.jpeg' alt='' width={200} height={200} />
                </div>
                <div className='flex flex-col'>
                  <h3 className='group-hover:underline'>Year in Monzo 2020</h3>
                  <p>A unique experience in to how each customer has spent over the past year</p>
                </div>
              </li>
          </Link>
          <Link href='/work2'>
              <li className="flex flex-col sm:flex-row justify-start items-center sm:items-start sm:space-x-4 space-y-2 sm:space-y-0 p-2 max-w-lg group">
                <div className='min-w-[200px] max-w-[200px] flex items-center justify-center'>
                  <Image src='/year-in-monzo-2020.png' alt='' width={200} height={200} />
                </div>
                <div className='flex flex-col'>
                  <h3 className='group-hover:underline'>Year in Monzo 2020</h3>
                  <p>A unique experience in to how each customer has spent over the past year</p>
                </div>
              </li>
          </Link>
        </ul>
    </div>
  )
}

export default RecentWork