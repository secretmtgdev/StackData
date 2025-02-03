import React from "react";
import Button from "../Button/Button";

import './Tags.css';

export type TagsProps = {
    tags: Array<string>;
}

const Tags = ({tags}: TagsProps) => {
    return (
        <div className='tags flex-container'>
            {tags.map(tagName => (
                <Button key={tagName} name={tagName} />
            ))}
        </div>
    );
};

export default Tags;