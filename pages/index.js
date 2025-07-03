import Head from 'next/head';
import DoldurDashboard from '../components/DoldurDashboard';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Doldur Premium Dashboard</title>
      </Head>
      <main>
        <DoldurDashboard />
      </main>
    </div>
  );
}