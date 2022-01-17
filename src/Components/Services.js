import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
    state={
        services:[
            {
             icon:<FaCocktail/>,
             title:"Free Cocktails",
             info:'Lorem ipsum dolor sit amet consectetur adipicinsing elite. Magni, corporis!'
            },
            {
             icon:<FaHiking/>,
             title:"Endless Hiking",
             info:'Lorem ipsum dolor sit amet consectetur adipicinsing elite. Magni, corporis!'
            },
            {
             icon:<FaShuttleVan/>,
             title:"Free Shuttle",
             info:'Lorem ipsum dolor sit amet consectetur adipicinsing elite. Magni, corporis!'
            },
            {
             icon:<FaBeer/>,
             title:"Strongest Bear",
             info:'Lorem ipsum dolor sit amet consectetur adipicinsing elite. Magni, corporis!'
            },
        ]
    }
    render() {
        return (
            <section className="services">
               <Title title="Services"/>
               <div className="services-center">
                   {this.state.services.map((service,index)=>{
                       return <article key={index} className="service"><span>{service.icon}</span>
                       <h6>{service.title}</h6>
                       <p>{service.info}</p>
                       </article>
                   })}
               </div>
            </section >
        )
    }
}
