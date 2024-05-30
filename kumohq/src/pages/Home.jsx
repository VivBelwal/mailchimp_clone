import React from 'react'
import Hero from '../components/specific/Home/Hero'
import Features from '../components/specific/Home/Features'
import BestInClass from '../components/specific/Home/BestInClass'
import Personalized from '../components/specific/Home/Personalized'
import Integrations from '../components/specific/Home/Integrations'
import Disclaimer from '../components/specific/Home/Disclaimer'
import BuilderAutomation from '../components/specific/Home/BuilderAutomation'


const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <BestInClass />
      <Personalized />
      <BuilderAutomation />
      <Integrations />
      <Disclaimer />
    </div>
  )
}

export default Home
