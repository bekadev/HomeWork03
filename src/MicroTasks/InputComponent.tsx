import React, {ChangeEvent, useState} from 'react';
type InputComponentTypeProps = {
    addMessage: (title: string) => void
}
export const InputComponent = (props: InputComponentTypeProps) => {
    let [title, setTitle] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onClickHandler = () => {
        props.addMessage(title)
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};