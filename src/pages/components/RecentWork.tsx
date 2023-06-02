import Image from 'next/image'

const RecentWork = () => {
  return (
    <div className='mb-20'>
        <h2 className="font-rammetto text-xl mb-5">Recent Work</h2>
        <ul className='flex flex-col justify-between items-start space-y-10'>
          <li className="flex justify-start items-start space-x-4 max-w-lg group">
            <div className='min-w-[200px] max-w-[200px] flex items-center justify-center'>
              <Image src='/year-in-monzo-2020.png' alt='' width={200} height={200} />
            </div>
            <div className='flex flex-col'>
              <h3 className='group-hover:underline'>GT Sport, 2021</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, alias natus harum dicta impedit delectus veniam obcaecati! Odit id, hic obcaecati culpa laudantium blanditiis porro.</p>
            </div>
          </li>
          <li className="flex justify-start items-start space-x-4 max-w-lg group">
            <div className='min-w-[200px] max-w-[200px] flex items-center justify-center'>
              <Image src='/year-in-monzo-2020.png' alt='' width={200} height={200} />
            </div>
            <div className='flex flex-col'>
              <h3 className='group-hover:underline'>GT Sport, 2021</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, alias natus harum dicta impedit delectus veniam obcaecati! Odit id, hic obcaecati culpa laudantium blanditiis porro.</p>
            </div>
          </li>
          <li className="flex justify-start items-start space-x-4 max-w-lg group">
            <div className='min-w-[200px] max-w-[200px] flex items-center justify-center'>
              <Image src='/year-in-monzo-2020.png' alt='' width={200} height={200} />
            </div>
            <div className='flex flex-col'>
              <h3 className='group-hover:underline'>GT Sport, 2021</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, alias natus harum dicta impedit delectus veniam obcaecati! Odit id, hic obcaecati culpa laudantium blanditiis porro.</p>
            </div>
          </li>
        </ul>
    </div>
  )
}

export default RecentWork