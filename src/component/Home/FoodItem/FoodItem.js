import React from 'react'
import {withRouter} from 'react-router-dom'


const FoodItem=(props)=> {
    const {title,subtitle,id,img,price}=props;
    return (
        <div className="col-xl-4">
           <h2>Food Items</h2>
           <div className="single-item text-center m-4">
               <div className="card p-4" >
                   <img src={img} className="card-img-top" alt=""/>
                   <div className="card-body">card Body
                    <h5 className="card-title">{title}Title</h5>
                    <p className="card-text">{subtitle}SubTitle</p>
                    <h4 className="price">{price}price</h4>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default withRouter(FoodItem);
