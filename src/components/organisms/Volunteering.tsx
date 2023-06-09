import Title from '../atoms/Title'
import ListItem from '../molecules/ListItem'

const Volunteering = () => {
  return (
    <div className='mb-20'>
      <Title tag='h2' fontFamily='font-rammetto' size='lg'>Volunteering</Title>
      <ul className='flex flex-col justify-between items-start space-y-10 mt-5'>
        {data.map(item => (<ListItem key={item.title} title={item.title} content={item.content} iconName={item.icon} />))}
      </ul>
    </div>
  )
}

export default Volunteering

const data = [
  {
    title: 'Volunteering 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eum, vitae doloribus dolor quis iusto. Totam dolorum itaque id accusamus qui repellat distinctio sequi quia.',
    icon: 'github'
  }
]