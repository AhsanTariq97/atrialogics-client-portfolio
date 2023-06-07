import Title from '../atoms/Title'
import ListItem from '../molecules/ListItem'

const Experiments = () => {

  return (
    <div className='mb-20'>
        <Title tag='h2' fontFamily='font-rammetto' size='lg'>Experiments</Title>
        <ul className='flex flex-col justify-between items-start space-y-10 mt-5'>
          {data.map(item => (<ListItem key={item.title} title={item.title} content={item.content} iconName={item.icon} />))}
        </ul>
    </div>
  )
}

export default Experiments

const data = [
  {
    title: 'Title 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eum, vitae doloribus dolor quis iusto. Totam dolorum itaque id accusamus qui repellat distinctio sequi quia.',
    icon: 'github'
  },
  {
    title: 'Title 2',
    content: 'Neque obcaecati nesciunt nemo, temporibus accusantium ea. Sequi officia aut animi, ad sapiente iusto repellendus maxime officiis consequatur voluptates. Nesciunt explicabo sunt ad magnam labore?',
    icon: 'codepen'
  },
  {
    title: 'Title 3',
    content: 'Voluptatibus earum possimus ipsa hic sapiente explicabo pariatur magnam ipsam! Sit magnam ipsum odit temporibus vero aspernatur, expedita facilis vel repellendus, quasi, accusamus ratione perspiciatis.',
    icon: 'linkedin'
  }
]