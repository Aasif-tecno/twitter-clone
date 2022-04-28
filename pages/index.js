import Head from 'next/head';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black flex min-h-screen max-w-[1500px] mx-auto">
        <Sidebar />
      </main>
    </div>
  );
}
