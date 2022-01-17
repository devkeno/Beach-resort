import React, { Component } from 'react';
import {RoomContext} from '../Context';
import Loading from './Loading';
import Room from '../Components/Room';
import Title from './Title';

export default class FeaturedRooms extends Component {
    static contextType=RoomContext;
    render() {
        let {Loading,FeaturedRooms:rooms}=this.context;
        rooms=rooms.map(room =>{
            return <Room key={room.id} room={room}></Room>
        })
      
        return (
            <section className="featured-rooms">
                <Title title="featured-rooms" />
                 <div className="featured-rooms-center">
                     {Loading ? <Loading/> : rooms}
                 </div>
            </section>
        )
    }
    
}


