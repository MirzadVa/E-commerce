import React from 'react';
import './product-description.css';
import CartButton from '../../../UI/grey-button/GreyButton';




const ProductDesription = (props) => {

let successBox;
 if(props.success){
    successBox = (
        <div className='success-box fadeInDownBig'>
                <p className='success-text'>
                    <span className='success'>Success!</span> You added product successfuly! 
                    <span className='close-box' onClick={props.hideBox}>X</span></p>
            </div>
    )
 }else if(props.successError){
    successBox = (
        <div className='success-box red fadeInDownBig'>
        <p className='success-text'>
            <span className='success'>Oops!</span> Try refreshing the page. 
            <span className='close-box' onClick={props.hideBox}>X</span></p>
    </div>
    )   
 }
    
   
    
    return (
        <div className='product-description-container'>
            <p className='product-name'>{props.data[0].name}</p>
            <p className='product-price'>${props.data[0].price}</p>
            <p className='product-description'>{props.data[0].description}</p>
            <div className="ul-materijal">
                <ul>
                    <li>
                        -Relaxed fit
                    </li>
                    <li>
                        -Dropped shoulder
                    </li>
                    <li>
                        -Elasticated body
                    </li>
                    <li>-Ribbed cuff</li>
                </ul>
                <p className='product-description second'>32% Polyamide, 29% Viscose, 23% Mulberry silk, 15% Organic cotton, 1% Elastane / Machine washable</p>
                <p className='product-description second'>Back length of size XS/S is 70cm</p>
            </div>
             {/* <p className='product-description2'>{props.data[0].description}</p> */}
                    <div className='cart-button'>
                        <CartButton 
                            name='Add to cart' 
                            buttonClick={props.addToCart}
                            buttonId="cart-button"/>
                    </div>
                <p className='product-description third'>32% Polyamide, 29% Viscose, 23% Mulberry silk, 15% Organic cotton, 1% Elastane / Machine washable</p>
                
                <p className='product-description '>
                Make sure that your favourite items remain long-loved pieces for years 
                to come; read our product care guide and explore our selection of carefully 
                chosen care products.
                </p>
            {successBox}
        </div>
    );
}



export default ProductDesription;

/*32% Polyamide / 29% Viscose / 23% Silk / 15% Cotton / 1% Elastane / Machine washable


Product No:
0930647001  */