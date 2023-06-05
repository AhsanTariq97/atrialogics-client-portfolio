import Image from "next/image"

const WorkPageDetail = () => {
  return (
    <>
        <div className="max-w-xl mx-auto move-detail">
            <h1 className="font-bold text-4xl">Year in Monzo 2020</h1><br />
            <p>Year in Monzo is an interactive web based experience that provides customers with unique insights in to how they spend and saved over the past year.</p><br />
            <h3 className="font-semibold text-xl mb-3">Moving to D3.js</h3>
            <p>In past editions of Year in Monzo, graphs have been powered by the Google Chart API. Although these have worked well for us, the desire to add more complex graphs meant we needed a different solution.</p><br />
            <p>D3.js gave us this flexibility and allowed us to create more customised visiulations.</p><br />
            <h3 className="font-semibold text-xl mb-3">New data points to reflect 2020</h3>
            <p>2020 for many was a hectic year, which had a huge impact on how people managed and spent their money. With a national lockdown in the UK in March, most customers saw a drop in the frequency of in-person (in a physical shop) spending.</p><br />
            <p>Getting the tone of this graph right was important. We felt that removing labels and values from the graph and treating it more as an illustration helped to soften some of the curves, but whilst still providing a strong enough nod towards what had been an awful year.</p><br />
            <p>This graph ended up becoming one of the most popular parts of the experience with hundreds of customers sharing their graphs on social media.</p>
            <Image src='/online-in-person.jpeg' className="w-full pt-4" alt='' width={600} height={600} /><br />
            <h3 className="font-semibold text-xl mb-3">Technical architecture</h3>
            <p>Our final system ended up reflecting how most of our systems work at Monzo. An entry API which manages authentication and authorization makes a request to the main data service, which pulls the given data for the user. This is then enriched with data from other downstream services such as merchant names and logos. This allowed us to ensure that the logos displayed for a given merchant would always be up to date, as they are requested on each request.</p>
            <Image src='/technical-architecture.png' className="w-full pt-4" alt='' width={600} height={600} /><br />
            <h3 className="font-semibold text-xl mb-3">Generating 8 million unique images</h3>
            <p>As part of the experience, we pre-generated two personalised images for each user which contained stats about their spending.</p><br />
            <p>Using a headless browser to screenshot an HTML file seemed like the most viable approach, as it would give us a large amount of flexibility over the layout and design of the final image, as it was ultimately just HTML and CSS. However running a headless browser and making 8 million requests to it ended up creating some large engineering problems.</p><br />
            <p>We decided to pre-generate all of the images to reduce the extra load on the platform during launch. After scaling the service up, we managed to generate all 8 million images in a few hours.</p><br />
            <h3 className="font-semibold text-xl mb-3">Launching</h3>
            <p>After several rounds of internal testing, we finally released to our customers.</p><br />
            <p>Despite the viral mechanic built in, we had still built several levers in to the release process that would allow us to increase and decrease the number of people seeing their Year in Monzo.</p><br />
            <p>The graph below, which shows the number of requests per second to Monzo on launch-day vs the previous day, is testament to the work of the platform engineers who built a system that could manage a 3-fold increase in requests, without fail.</p>
            <Image src='/platform-requests.jpeg' className="w-full pt-4" alt='' width={600} height={600} />

        </div>
    </>
  )
}

export default WorkPageDetail