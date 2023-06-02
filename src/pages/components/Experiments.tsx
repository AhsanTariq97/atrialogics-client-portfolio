import {BsGithub} from 'react-icons/bs'

const Experiments = () => {
  return (
    <div className='mb-20'>
        <h2 className="font-rammetto text-xl mb-5">Experiments</h2>
        <ul className='flex flex-col justify-between items-start space-y-10'>
          <li className="flex justify-start items-start space-x-4 max-w-lg group">
            <div className='min-w-[40px] min-h-[40px] flex items-center justify-center'>
              <div className='group-hover:bg-white group-hover:text-[#333333] rounded-full p-0 group-hover:p-2 transition-all'>
                <BsGithub size={28} />
              </div>
            </div>
            <div className='flex flex-col'>
              <h3 className='group-hover:underline'>GT Sport, 2021</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, alias natus harum dicta impedit delectus veniam obcaecati! Odit id, hic obcaecati culpa laudantium blanditiis porro.</p>
            </div>
          </li>
          <li className="flex justify-start items-start space-x-4 max-w-lg group">
            <div className='min-w-[40px] min-h-[40px] flex items-center justify-center'>
              <div className='group-hover:bg-white group-hover:text-[#333333] rounded-full p-0 group-hover:p-2 transition-all'>
                <BsGithub size={28} />
              </div>
            </div>
            <div className='flex flex-col'>
              <h3 className='group-hover:underline'>GT Sport, 2021</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, alias natus harum dicta impedit delectus veniam obcaecati! Odit id, hic obcaecati culpa laudantium blanditiis porro.</p>
            </div>
          </li>
          <li className="flex justify-start items-start space-x-4 max-w-lg group">
            <div className='min-w-[40px] min-h-[40px] flex items-center justify-center'>
              <div className='group-hover:bg-white group-hover:text-[#333333] rounded-full p-0 group-hover:p-2 transition-all'>
                <BsGithub size={28} />
              </div>
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

export default Experiments