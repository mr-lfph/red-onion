import React from 'react'
import { useState } from 'react'
import './Food.css';
import { useContext } from 'react';
 
//import FoodItem from '../FoodItem/FoodItem'

const Food=(props)=> {
    const { cart,setCart,user}=useContext(UserContext)

    const [activeCategories,setActiveCategories]=useState(
        {
            breakfastActive:true,
            lunchActive:false,
            dinnerActive:false
        }
    )
    const [selectedItem,setSelectedItem]=useState('breakfast');
    //const [items,setItems]=useState([]);
    
    const selectHandler=item=>{
        if(item==='breakfast'){
            let previousState=activeCategories;
            previousState.breakfastActive=true;
            previousState.lunchActive=false;
            previousState.dinnerActive=false;
            
            setActiveCategories(previousState);

        }
        else if(item==='lunch'){
            let previousState=activeCategories;
            previousState.breakfastActive=false;
            previousState.lunchActive=true;
            previousState.dinnerActive=false;
            setActiveCategories(previousState);
        }
        else if(item==='dinner'){
            let previousState=activeCategories;
            previousState.breakfastActive=false;
            previousState.lunchActive=false;
            previousState.dinnerActive=true;
            setActiveCategories(previousState);
        }
        setSelectedItem(item)
console.log('Active Categories',activeCategories);

    }
    const {breakfastActive,lunchActive,dinnerActive}=activeCategories;

    return (
        <div>
           <section className="food-categories-area">
               <div className="container">
                
                   <div className="row">
                       <div className="categories m-auto py-5">
                           <ul className="d-flex">
                             
                               <li><button className={breakfastActive ? 'active btn':'btn'} onClick={()=>selectHandler('breakfast')}>Breakfast</button></li>
                               <li><button className={lunchActive ? 'active btn':'btn'} onClick={()=>selectHandler('lunch')}>Lunch</button></li>
                               <li><button className={dinnerActive ?  'active btn':'btn'} onClick={()=>selectHandler('dinner')}>Dinner</button></li>
                           </ul>
                       </div>
                       <div className="f-right d-flex align-items-center text-danger">
                           <p className="see-all" onClick={()=>props.history.push('/foods')}>

                           </p>
                       </div>
                   </div>
               </div>
           </section>
        </div>
    )
}

export default Food
