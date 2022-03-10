import React from 'react';
import './test.scss';


const Test = () => {
    return(
        <>
            <h1 className='box1'>Scss practice 1</h1>
            <div className='box1-2'>
                box 1-2
            </div>
            <h2 className='box2'>Scss practice 2</h2>
            <div className='box3'>
                <h3>title</h3>
                <p>contents</p>
            </div>
            <button className='btn1'>button1</button>
            <button className='btn2'>button2</button>
            <div className='container'>
                <div className='box4 orange'></div>
                <div className='box4 violet'></div>
                <div className='box4 tomato'></div>
                <div className='box4 cornflowerblue'></div>
            </div>
            
        </>
    );
};

export default Test;
