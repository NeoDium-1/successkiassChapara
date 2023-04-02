import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicHomeHero = dynamic(() => import('./src/components/home/hero'))
const DynamicHomeFeature = dynamic(() => import('./src/components/home/feature'))
const DynamicHomeProperty = dynamic(() => import('./src/components/home/property'))
const DynamicHomeTestimonial = dynamic(() => import('./src/components/home/testimonial'))
const DynamicHomeOurMentors = dynamic(() => import('./src/components/home/mentors'))
const DynamicHomeNewsLetter = dynamic(() => import('./src/components/home/newsletter'))

const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero />
      <DynamicHomeProperty />
      <DynamicHomeFeature />
      <DynamicHomeTestimonial />
      <DynamicHomeOurMentors />
      <DynamicHomeNewsLetter />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
