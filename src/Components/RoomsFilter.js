import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';

//get unique values
const getUnique = (items,value) => {
return [...new Set(items.map(item=>item[value]))]
}

export default function RoomsFilter({rooms}) {
    const context=useContext(RoomContext);
    const{
        handleChange,
        type,
        Capacity,
        Price,
        MaxPrice,
        MinPrice,
        MaxSize,
        MinSize,
        BreakFast,
        Pets

    }=context;
    let types=getUnique(rooms,'type');
    types=['all', ...types];
    types=types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
        
    })
    return (
       <section className="filter-container">
           <Title title="Search rooms"/>
           <form className="filter-form">
               {/* Select Type */}
              <div className="form-group">
                  <label htmlFor="type">Room type</label>
                  <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>{types}</select>
              </div>

               {/* End Select Type*/}
           </form>
       </section>
    )
}
