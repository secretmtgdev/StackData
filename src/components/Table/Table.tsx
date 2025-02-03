import React from 'react';

import { Sale } from '../../utils/type';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import './Table.css';
import Chevron from '../Chevron/Chevron';

const Table = () => {
    const salesData: Array<Sale> = useSelector((state: RootState) => state.product.productInformation.sales)
    const weekendComparator = (a: Sale, b: Sale) => a.weekEnding > b.weekEnding ? 1 : (
        a.weekEnding < b.weekEnding ? -1 : 0);
    const retailComparator = (a: Sale, b: Sale) => a.retailSales > b.retailSales ? 1 : (
        a.retailSales < b.retailSales ? -1 : 0);
    const wholesaleComparator = (a: Sale, b: Sale) => a.wholesaleSales > b.wholesaleSales ? 1 : (
        a.wholesaleSales < b.wholesaleSales ? -1 : 0);
    const unitsComparator = (a: Sale, b: Sale) => a.unitsSold > b.unitsSold ? 1 : (
        a.unitsSold < b.unitsSold ? -1 : 0);
    const marginComparator = (a: Sale, b: Sale) => a.retailerMargin > b.retailerMargin ? 1 : (
        a.retailerMargin < b.retailerMargin ? -1 : 0);

    return (
        <table className='product-component'>
            <thead>
                <tr>
                    <th>WEEK ENDING <Chevron comparator={weekendComparator}/></th>
                    <th>RETAIL SALES <Chevron comparator={retailComparator}/></th>
                    <th>WHOLESALE SALES <Chevron comparator={wholesaleComparator}/></th>
                    <th>UNITS SOLD <Chevron comparator={unitsComparator}/></th>
                    <th>RETAIL MARGIN <Chevron comparator={marginComparator}/></th>
                </tr>
            </thead>
            <tbody>
                {
                    salesData.map(saleData => (
                        <tr key={saleData.weekEnding}>
                            <td>{saleData.weekEnding}</td>
                            <td>{saleData.retailSales}</td>
                            <td>{saleData.wholesaleSales}</td>
                            <td>{saleData.unitsSold}</td>
                            <td>{saleData.retailerMargin}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
};

export default Table;