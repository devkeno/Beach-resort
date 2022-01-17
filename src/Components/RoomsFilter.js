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
        capacity,
        price,
        maxPrice,
        minPrice,
        maxSize,
        minSize,
        breakfast,
        pets

    }=context;
    let types=getUnique(rooms,'type');
    types=['all', ...types];
    types=types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>  
    })

    let people = getUnique(rooms,'capacity');
    people= people.map((item,index)=> {
        return <option key={index} value={item}>{item}</option>
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

                 {/* Select Capacity */}
              <div className="form-group">
                  <label htmlFor="capacity">Guests</label>
                  <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>{people}</select>
              </div>

               {/* End Select Capacity*/}
                {/* Price range */}
              <div className="form-group">
                  <label htmlFor="price">room price ${price}</label>
                  <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className='form-control'/>
              </div>

               {/* End price range*/}
               {/* Room size*/}
               <div className="form-group">
                  <label htmlFor="size">room size</label>
                  <div className="size-inputs">
                      <input type='number' className="size-input" name="minSize" id="size" value={minSize} onChange={handleChange}/>
                      <input type='number' className="size-input" name="maxSize" id="size" value={maxSize} onChange={handleChange}/>
                  </div>
              </div>
               {/* End room size*/}
               {/* EXTRAS */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                        <label htmlFor='breakfast'>breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                        <label htmlFor='pets'>pets</label>
                    </div>
                </div>




               {/* END EXTRAS */}

           </form>
       </section>
    )
}
