import React from 'react';
import { useSelector } from 'react-redux';

import LeftPanel from '../LeftPanel/LeftPanel';
import { RootState } from '../../redux/store';
import { ProductSummary } from '../../utils/type';

import './ProductPage.css';
import Table from '../Table/Table';

const ProductPage = () => {
    const summaryDetails: ProductSummary = useSelector((state: RootState) => state.product.productInformation);
    return (
        <div id="product-page-container">
            <LeftPanel {...summaryDetails} />
            <div>
                <Table />
            </div>
        </div>
    );
}

export default ProductPage;