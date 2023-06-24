import React from 'react'
import { headlinePropsType } from '../types';

const Headline = (headlineProps: headlinePropsType) => {
    const { headline } = headlineProps;
    return (
        <div className='font-bold' style={{ margin: '1rem 0' }}>
            {headline}
        </div>
    )
}

export default Headline