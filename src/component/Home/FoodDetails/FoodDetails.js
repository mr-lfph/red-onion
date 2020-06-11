import React, { useState, useEffect, useContext } from 'react';
import './FoodDetails.css'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const  FoodDetails=(props)=> {

    const { addToCart, user, addCatDatabase } = useContext();
    const pdId = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const notify = () => toast("Item added Cart!");

    useEffect(() => {
        async function getFoods() {
         
          try {
            const response = await axios.get(`https://hot-onion.herokuapp.com/api/v1/foods/${pdId.id}`);
            setProduct(response.data.data.food)
           
          } catch (error) {
            console.log(error);
            
          }
        }
        getFoods()
    
      }, [pdId])
      const quantityHandler = quan => {
        if (quantity < 0 || quantity === 0) {
          setQuantity(0)
        } else {
          setQuantity(quantity - quan)
        }
      }
      const cartHandler = item => {
        if (!user) {
          props.history.push('/login')
        } else {
          // console.log(id);
          notify()
          addToCart({ ...item, quantity })
          addCatDatabase(item, quantity, user);
        }
      }



    return (
        <section className="food-details pt-1">
        <div className="container shadow">
          <div className="row">
            <div className="col">
            <div className="item-close py-4 ">
                <span className="bg-danger rounded-circle d-block  m-auto" style={{height:50, width:50, lineHeight:'50px'}} onClick={()=> props.history.push('/')} ><i className="fas fa-times" style={{lineHeight:'25px'}}></i></span>
              </div>
            </div>
            <div className="w-100"></div>
            <div className="col-md-6 py-5">
              <div className="food-details-content">
                <h3>{product && product.title}</h3>
                <p className="subtitle muted pt-3">{product && product.description}</p>
                <div className="cart-item d-flex align-items-center p-3">
                  <h3>${product && product.price}</h3>
                  <div className="input-group input-cart-item ml-4">
                    <button
                      className="btn btn-default"
                      onClick={() => quantityHandler(1)}
                      id="remove-product"><i className="fas fa-minus"></i></button>
                    <input type="text"
                      id="food-quantity"
                      
                      className="form-control text-center"
                      value={quantity} />
                    <button
                      onClick={() => setQuantity(quantity * 1 + 1)}
                      className="btn btn-default"
                      id="add-product"><i className="fas fa-plus"></i></button>
                  </div>
                </div>
                <button className="btn primary-btn btn-cart" onClick={() => cartHandler(product)}>
                  <span>
                    <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                  </span> Add</button>
              </div>
            </div>
            <div className="col-md-6 m-auto d-block">
              <img src={product && product.img} className="food-img m-auto d-block" alt="" />
            </div>
          </div>
        </div>
      </section>
       
    )
}

export default FoodDetails;
