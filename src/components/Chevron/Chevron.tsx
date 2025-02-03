import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Sale } from '../../utils/type';
import { RootState } from '../../redux/store';

import './Chevron.css';
import { setSalesinformation } from '../../redux/productSlice';

const downward = <span>&#x25BC;</span>;
const upward = <span>&#x25B2;</span>;

export type ChevronProps = {
    comparator: (saleA: Sale, saleB: Sale) => number;
}

const Chevron = (props: ChevronProps) => {
    const salesData: Array<Sale> = useSelector((state: RootState) => state.product.productInformation.sales)
    const dispatch = useDispatch();
    const [isSelected, setIsSelected] = useState(false);

    const handleOnClick = () => {
        setIsSelected(!isSelected);
        const salesClone = [...salesData];
        salesClone.sort((a, b) => isSelected ? props.comparator.call(this, a, b) : -1 * props.comparator.call(this, a, b));
        dispatch(setSalesinformation(salesClone));
    }

    return (
        <span className='chevron' onClick={handleOnClick}>
            {
                isSelected ? downward : upward
            }
        </span>
    );
}

export default Chevron;