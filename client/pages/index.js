import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"><span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-bold"> Next-level Technology</span>
        <br class="hidden lg:inline-block"/>Business cards.
      </h1>
      <p class="mb-8 leading-relaxed">Combining Elegance, Design & Next-level Technology, plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <a href="http://localhost:3000/register" class="shadow-xl transition duration-1000 inline-flex text-white bg-gradient-to-r from-green-400 to-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started </a>
        <a href="http://localhost:3000/login" class="shadow-xl ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Login</a>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded " alt="hero" src="https://telda.app/assets/images/press_card.png"/>
    </div>
  </div>
</section>

    </div>
  )
}
