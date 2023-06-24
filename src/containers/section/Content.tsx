import React from 'react'
import { Label } from '../../components/ui'
import CreateDynamicElement from '../CreateDynamicElement'
import styles from "../styles/page.module.css";
import { contentPropsType } from '../types';

const Content = (contentProps: contentPropsType) => {
    const { content, state, handleChange } = contentProps;
    return (
        <div
            className={styles.container}>
            {content.map((data, index) => {
                return (
                    <div key={index}
                        className='flex flex-col'
                        style={data.style}
                    >
                        <Label
                            htmlFor={data.htmlFor}
                            label={data.label}
                        />
                        <CreateDynamicElement
                            type={data.type}
                            id={data.id}
                            placeholder={data.placeholder}
                            required={data.required}
                            options={data.options}
                            state={state}
                            handleChange={handleChange}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Content