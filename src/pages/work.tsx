import { type NextPage } from "next";
import Head from "next/head";
// import Header from "./components/Header";
import WorkPageDetail from "./components/WorkPageDetail";
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Work</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="min-h-screen text-white px-6 py-5 md:p-12 bg-[#333333]">
                <div className="max-w-[60rem] mx-auto">
                    <div className="max-w-2xl mx-auto mb-8 ">
                        <Image src='/year-in-monzo-2020.png' className="w-full move-nav-img" alt='' width={800} height={800} />
                    </div>
                    <WorkPageDetail />
                </div>
            </main>
        </>
    );
};

export default Home;
