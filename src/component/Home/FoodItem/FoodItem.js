import React from 'react'
import {withRouter} from 'react-router-dom'
import '../../../App.css';

const FoodItem=(props)=> {
     const {title,img,subtitle,price,_id}=props.item;
   return (
        <div className="col-xl-4" onClick={()=>props.history.push(`/foods/${_id}`)}>
          <div className="single-item text-center m-4">
               <div className="card p-4" >
                <img src={img} className="card-img-top" alt=""/>
                   <div className="card-body">
                    <h6 className="card-title">{title}</h6>
                    <p className="card-text">{subtitle}</p>
                    <h5 className="price">${price}</h5>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default withRouter(FoodItem);
