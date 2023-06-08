import Image from "next/image"
import Title from "./atoms/Title"
import Text from "./atoms/Text"

const WorkPageDetail = () => {
  return (
    <>
        <div className="max-w-xl mx-auto">
            <Title tag='h1' size='xl' >Year in Monzo 2020</Title>
            <Text tag='p' size='sm' >Year in Monzo is an interactive web based experience that provides customers with unique insights in to how they spend and saved over the past year.</Text>
            <Title tag='h3' size='base' >Moving to D3.js</Title>
            <Text tag='p' size='sm' >In past editions of Year in Monzo, graphs have been powered by the Google Chart API. Although these have worked well for us, the desire to add more complex graphs meant we needed a different solution.</Text>
            <Text tag='p' size='sm' >D3.js gave us this flexibility and allowed us to create more customised visiulations.</Text>
            <Title tag='h3' size='base' >New data points to reflect 2020</Title>
            <Text tag='p' size='sm' >2020 for many was a hectic year, which had a huge impact on how people managed and spent their money. With a national lockdown in the UK in March, most customers saw a drop in the frequency of in-person (in a physical shop) spending.</Text>
            <Text tag='p' size='sm' >Getting the tone of this graph right was important. We felt that removing labels and values from the graph and treating it more as an illustration helped to soften some of the curves, but whilst still providing a strong enough nod towards what had been an awful year.</Text>
            <Text tag='p' size='sm' >This graph ended up becoming one of the most popular parts of the experience with hundreds of customers sharing their graphs on social media.</Text>
            <Image src='/online-in-person.jpeg' className="w-full pt-4" alt='' width={600} height={600} /><br />
            <Title tag='h3' size='base' >Technical architecture</Title>
            <Text tag='p' size='sm' >Our final system ended up reflecting how most of our systems work at Monzo. An entry API which manages authentication and authorization makes a request to the main data service, which pulls the given data for the user. This is then enriched with data from other downstream services such as merchant names and logos. This allowed us to ensure that the logos displayed for a given merchant would always be up to date, as they are requested on each request.</Text>
            <Image src='/technical-architecture.png' className="w-full pt-4" alt='' width={600} height={600} /><br />
            <Title tag='h3' size='base' >Generating 8 million unique images</Title>
            <Text tag='p' size='sm' >As part of the experience, we pre-generated two personalised images for each user which contained stats about their spending.</Text>
            <Text tag='p' size='sm' >Using a headless browser to screenshot an HTML file seemed like the most viable approach, as it would give us a large amount of flexibility over the layout and design of the final image, as it was ultimately just HTML and CSS. However running a headless browser and making 8 million requests to it ended up creating some large engineering problems.</Text>
            <Text tag='p' size='sm' >We decided to pre-generate all of the images to reduce the extra load on the platform during launch. After scaling the service up, we managed to generate all 8 million images in a few hours.</Text>
            <Title tag='h3' size='base' >Launching</Title>
            <Text tag='p' size='sm' >After several rounds of internal testing, we finally released to our customers.</Text>
            <Text tag='p' size='sm' >Despite the viral mechanic built in, we had still built several levers in to the release process that would allow us to increase and decrease the number of people seeing their Year in Monzo.</Text>
            <Text tag='p' size='sm' >The graph below, which shows the number of requests per second to Monzo on launch-day vs the previous day, is testament to the work of the platform engineers who built a system that could manage a 3-fold increase in requests, without fail.</Text>
            <Image src='/platform-requests.jpeg' className="w-full pt-4" alt='' width={600} height={600} />

        </div>
    </>
  )
}

export default WorkPageDetail