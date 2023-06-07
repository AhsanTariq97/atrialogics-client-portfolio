import Title from '../atoms/Title'
import WorkItem from '../molecules/WorkItem'

const RecentWork = () => {
  return (
    <div className='mb-20'>
        <Title tag='h2' fontFamily='font-rammetto' size='lg'>Recent Work</Title>
        <ul className='flex flex-col justify-between items-start space-y-10 mt-5'>
          {data.map(item => (<WorkItem key={item.title} title={item.title} content={item.content} imageUrl={item.imageUrl} />))}
        </ul>
    </div>
  )
}

export default RecentWork

const data = [
  {
    title: 'Year in Monzo 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eum, vitae doloribus dolor quis iusto. Totam dolorum itaque id accusamus qui repellat distinctio sequi quia.',
    imageUrl: '/year-in-monzo-2020.png'
  },
  {
    title: 'Year in Monzo 2',
    content: 'Neque obcaecati nesciunt nemo, temporibus accusantium ea. Sequi officia aut animi, ad sapiente iusto repellendus maxime officiis consequatur voluptates. Nesciunt explicabo sunt ad magnam labore?',
    imageUrl: '/year-in-monzo-2020.png'
  },
  {
    title: 'Year in Monzo 3',
    content: 'Voluptatibus earum possimus ipsa hic sapiente explicabo pariatur magnam ipsam! Sit magnam ipsum odit temporibus vero aspernatur, expedita facilis vel repellendus, quasi, accusamus ratione perspiciatis.',
    imageUrl: '/year-in-monzo-2020.png'
  }
]