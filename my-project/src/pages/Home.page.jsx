import React,{useState} from 'react'

//layout Hoc
import DefaultLayoutHoc from '../layout/Default.layout'


// Components
import HeroCarousel from '../componets/HeroCarousel/HeroCarousel.component'
import EntertainmentCard from '../componets/navbar/Entertainment/Entertainmentcard.component'
import PosterSlider from '../componets/PosterSlider/PosterSlider.components'

//navbar 
import Navbar from '../componets/navbar/Navbar.component'



 const Homepage = ()=>{
    const [recommendedMovies, setRecommendedMovies] = useState([])
    const [premierMovies, setpremierMovies] = useState([])
    const [onlineStreamEvents, setonlineStreamEvents] = useState([])


    return (
        <>
        <HeroCarousel/>
        <div className='container mx-auto px-4 md:px-12 my-8'>
        <h1 className='text-2xl font-bold text-grey-800 sm:ml-3 ml-0 my-3'>The Best Entertainment</h1>
        <EntertainmentCard />
        </div>
        <div className='container mx-auto ps-4 md:px-12 my-8'>
            <PosterSlider
            title= "Recommended Movies"
            subject = "List of recommended movies"
            posters = {recommendedMovies}
            isDark = {false}

            />

        </div>

        <div className='bg-premier-800 py-12'>
            <div className='container mx-auto px-4 md:px-12 my-8 flex-col gap-3'>
                <div className='hidden md:flex'>
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" classname='w-full h-full' alt="rupay" />

                </div>
                <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
                <PosterSlider title = "Premiers"
                subjec = "Brand new releases every Friday"
                posters = {premierMovies}
                isDark = {true}/>

            </div>
            </div>
        </div>
        <div className='container mx-auto px-4 md:px-12 my-8'>
                <PosterSlider title = "Online Streming Events"
                //subject blank??
                subjec = ""
                posters = {onlineStreamEvents}
                isDark = {false}/>

            </div>
        </>
    )
 }
 export default DefaultLayoutHoc(Homepage)