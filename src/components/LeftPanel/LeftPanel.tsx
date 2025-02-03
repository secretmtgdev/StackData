import React from 'react';
import ProductHightlight from '../ProductHighlight/ProductHightlight';
import { ProductSummary } from '../../utils/type';
import Tags from '../Tags/Tags';
import { ProductHightlightProps } from '../ProductHighlight/ProductHightlight';

import './LeftPanel.css';


const LeftPanel = (summaryDetails: ProductSummary) => {
    const productHighlight: ProductHightlightProps = {
        imageRef: summaryDetails.image,
        title: summaryDetails.title,
        subtitle: summaryDetails.subtitle
    };
    return (
        <aside className='left-panel product-component'>
            <section>
                <ProductHightlight {...productHighlight} />
            </section>
            <hr />
            <section>
                <Tags tags={summaryDetails.tags} />
            </section>
            <hr />
            <section>
                {/* Something later? */}
            </section>
        </aside>
    );
};

export default LeftPanel;