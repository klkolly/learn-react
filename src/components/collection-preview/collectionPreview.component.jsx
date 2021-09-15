import React from 'react';
import CollectionItem from '../collection-item/collectionItem.component';
import './collectionPreview.style.scss';

const CollectionPreview = ({title, items}) => (

    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, indexnum) =>(indexnum <4))
                .map( ({id, ...otherItemProps}) =>(
                    <CollectionItem  key={id} {...otherItemProps} />
                ))
            }
        </div>
    </div>

)

export default CollectionPreview;