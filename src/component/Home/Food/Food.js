import React from 'react'
import { useState,useEffect } from 'react'
import './Food.css';
import '../../../App.css';
import axios from 'axios';
import FoodItem from '../FoodItem/FoodItem';
import { withRouter } from 'react-router-dom';
import { useContext } from 'react';

const Food = (props) => {
    const {cart, setCart} = useState([]);
    const [disabled, setDisabled] = useState(true)
    const [foods, setFoods] = useState([]);
   
    useEffect(()=>{
        async function getFoods() {
            try {
              const response = await axios.get('https://hot-onion.herokuapp.com/api/v1/foods');
           setFoods(response.data.data.foods);
               } catch (error) {
              console.error(error);
            }
          }
         getFoods() 
        
    },[])
    useEffect(()=> {
       const cart=1;
            if(cart.length >0) {
                setDisabled(false)
            }
       },[cart])

 const [activeCategories, setActiveCategories] = useState(
        {
            breakfastActive: true,
            lunchActive: false,
            dinnerActive: false
        }
    )
    const [selectedItem, setSelectedItem] = useState('breakfast');
    const [items, setItems] = useState([])
    useEffect(() => {
       const data = foods.filter(item => item.catagories === selectedItem)
        setItems(data)
      }, [selectedItem, foods])

    
    const selectHandler = item => {
        if (item === 'breakfast') {
            let previousState = activeCategories;
            previousState.breakfastActive = true;
            previousState.lunchActive = false;
            previousState.dinnerActive = false;

            setActiveCategories(previousState);

        }
        else if (item === 'lunch') {
            let previousState = activeCategories;
            previousState.breakfastActive = false;
            previousState.lunchActive = true;
            previousState.dinnerActive = false;
            setActiveCategories(previousState);
        }
        else if (item === 'dinner') {
            let previousState = activeCategories;
            previousState.breakfastActive = false;
            previousState.lunchActive = false;
            previousState.dinnerActive = true;
            setActiveCategories(previousState);
        }
        setSelectedItem(item)
        console.log('Active Categories', activeCategories);

    }
    const { breakfastActive, lunchActive, dinnerActive } = activeCategories;

    return (
        <div>
            <section className="food-categories-area">
                <div className="container">
                    <div className="row">
                        <div className="categories m-auto py-5">
                            <ul className="d-flex">
                                <li><button className={breakfastActive ? 'active btn' : 'btn'} onClick={() => selectHandler('breakfast')}>Breakfast</button></li>
                                <li><button className={lunchActive ? 'active btn' : 'btn'} onClick={() => selectHandler('lunch')}>Lunch</button></li>
                                <li><button className={dinnerActive ? 'active btn' : 'btn'} onClick={() => selectHandler('dinner')}>Dinner</button></li>
                            </ul>
                        </div>
                        <div className="f-right d-flex align-items-center text-danger">
                          <p className="see-all" onClick={() => props.history.push('/foods')}>
                            See all 
                            
                            </p>
                        </div>
                    </div>
                    <div className="row ">
                     {
                       items &&  items.map(item => <FoodItem key={item._id} item={item}
                     />)
                    }
                    <div className="w-100"></div>
                    <div className="checkout-btn-aria m-auto">
                        <button 
                            onClick={()=>props.history.push('/cart')}
                            className={disabled ? 'btn disabled my-4 text-center text-capitalize' :'btn checkout-btn  my-4 text-center text-capitalize' } 
                         disabled={disabled} 
                        >Checkout your food
                        </button>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
};

export default withRouter(Food);
