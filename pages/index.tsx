import Image from 'next/image';
import Layout from '../components/Layout';
import style from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/zoro.jpg" width={200} height={200} alt="profile"/>
      <h1 className={style['title-homepage']}>Welcome Suha</h1>
    </Layout>
  )
}
