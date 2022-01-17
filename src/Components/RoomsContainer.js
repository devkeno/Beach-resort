import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { RoomConsumer } from '../Context';
import Loading from './Loading';
import { withRoomConsumer } from '../Context';



function RoomContainer({context}) {
    const {loading, SortedRooms, rooms} = context;
    if(loading){
        return <Loading/>
    }
    return(
     <>   
     <RoomsFilter rooms={rooms}/>
     <RoomsList rooms={SortedRooms}/>
     </>     
    )
}



export default withRoomConsumer(RoomContainer)


// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 value=>{
//                     const {loading, sortedRooms, rooms} = value;
//                     if(loading){
//                         return <Loading/>
//                     }
//                     return(
//                         <div>
//                         Hello from Rooms Container
//                         <RoomsFilter rooms={rooms}/>
//                         <RoomsList rooms={sortedRooms}/>
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
      
//     )
// }
