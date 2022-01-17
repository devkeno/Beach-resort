import React, { Component } from 'react';
import items from './data';

const RoomContext=React.createContext();

// <RoomContext.Provided value={}

class RoomProvider extends Component {
    state={
        rooms:[],
        SortedRooms:[],
        FeaturedRooms:[],
        Loading:false,
        type:'all',
        Capacity:1,
        Price:0,
        MinPrice:0,
        MaxPrice:0,
        MinSize:0,
        MaxSize:0,
        Breakfast:false,
        Pets:false

    };
    //getData

componentDidMount(){
    let rooms=this.formatData(items);
    let FeaturedRooms=rooms.filter(room=>room.featured===true);
    let MaxPrice = Math.max(...rooms.map(item=>item.price));
    let MaxSize = Math.max(...rooms.map(item=>item.size));

    console.log(MaxPrice);
    this.setState({
        rooms,FeaturedRooms,SortedRooms:rooms,loading:false,
        Price:MaxPrice,
        MaxPrice,
        MaxSize
    })
}        

formatData(items){
    let tempItems=items.map(item => {
    let id=item.sys.id;
    let images=item.fields.images.map(image=>image.fields.file.url);
    let room={...item.fields,images,id}
    

    return room;
    })
    return tempItems;
}
getRoom = (slug) =>{
    let TempRooms= [...this.state.rooms];
    const room= TempRooms.find(room=>room.slug === slug);
    return room;
}
handleChange = event =>{
    const target=event.target;
    const name = event.target.name;
    const value = event.type==='checkbox' ? target.checked : event.target.value;
    this.setState(
        {
        [name] : value
        },
        this.fiterRooms
    )
}
fiterRooms = () =>{
    let {rooms, type, Capacity, Price, MinSize, MaxSize, Breakfast,pets} = this.state;
    let TempRooms=[...rooms];
    if(type !== 'all'){
        TempRooms= TempRooms.filter(room=>room.type === type)
    }
    this.setState({
        SortedRooms : TempRooms
    })
}


    render() {

        return (
            <RoomContext.Provider value={{...this.state, getRoom:this.getRoom, handleChange:this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}


const RoomConsumer= RoomContext.Consumer;

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value => <Component {...props} context={value}></Component>}
        </RoomConsumer>
    }
    
}


export {RoomProvider,RoomConsumer,RoomContext};