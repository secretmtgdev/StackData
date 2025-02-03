import React from 'react';

import './ProductHightlight.css';

export type ProductHightlightProps = {
    title: string;
    subtitle: string;
    imageRef: string;
    imageAlt?: string;
}

const ProductHightlight = (props: ProductHightlightProps) => {
    return (
        <div className='center-content product-highlight'>
            <div>
                <img className='product-image' src={props.imageRef} alt={props.imageAlt ?? props.title}/>
            </div>
            <h3>{props.title}</h3>
            <h5 className='product-subtitle'>{props.subtitle}</h5>
        </div>
);
}

export default ProductHightlight;