import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import Services from '../Components/Services';
import FeaturedRooms from '../Components/FeaturedRooms';
import StyledHeader from '../Components/StyledHero';


export const Homepage = () => {
    return (       
        <>
        <Hero>
         <Banner title="luxuries rooms" subtitle="deluxe rooms starting at $299" >
             <Link to="/rooms" className="btn-primary">Our Rooms</Link>
         </Banner>
        </Hero>
        <Services></Services>
        <FeaturedRooms/>
        </>
    )
}
