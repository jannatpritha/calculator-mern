import React, { useState } from 'react'

const Calc = () => {

    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (e) => {
        setInput(input + e.target.name);
    };


    const clear = () => {
        setInput('');
        setResult('');
    };

    const backspace = () => {
        setInput(input.slice());
    };

    const calculate = () => {
        try {
            setResult(eval(input).toString());
        } catch (err) {
            setResult('Error');
        }
    };

    return (
        <div className='calcApp m-5'>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Equation</span>
                <input className='input-group-text' type='text' value={input} readOnly></input>
            </div>
            <div className="input-group flex-nowrap mt-2">
                <span className="input-group-text" id="addon-wrapping">Result</span>
                <input className='input-group-text' type='text' value={result} readOnly></input>
            </div>
            <div className='keypad mt-2'>

                <div className='container-md flex-nowrap mt-2 ms-0 '>
                    <button className='btn btn-primary me-1' onClick={clear} id="clear">Clear</button >
                    <button className='btn btn-primary' onClick={backspace} id="backspace">C</button >
                </div>

                <div className='container-md flex-nowrap mt-2'>
                    <button className='btn btn-dark me-2' name="+" onClick={handleClick}>+</button >
                    <button className='btn btn-dark me-2' name="-" onClick={handleClick}>&ndash;</button >
                    <button className='btn btn-dark me-2' name="*" onClick={handleClick}>&times;</button >
                    <button className='btn btn-dark me-2' name="/" onClick={handleClick}>&divide;</button >
                    <br />
                </div>

                <div className='container-md flex-nowrap mt-2' >
                    <button className='btn btn-dark me-2' name="7" onClick={handleClick}>7</button >
                    <button className='btn btn-dark me-2' name="8" onClick={handleClick}>8</button >
                    <button className='btn btn-dark me-2' name="9" onClick={handleClick}>9</button >
                </div>

                <div className='container-md mt-2'>
                    <button className='btn btn-dark me-2' name="4" onClick={handleClick}>4</button >
                    <button className='btn btn-dark me-2' name="5" onClick={handleClick}>5</button >
                    <button className='btn btn-dark me-2' name="6" onClick={handleClick}>6</button >
                </div>

                <div className='container-md mt-2'>
                    <button className='btn btn-dark me-2' name="1" onClick={handleClick}>1</button >
                    <button className='btn btn-dark me-2' name="2" onClick={handleClick}>2</button >
                    <button className='btn btn-dark me-2' name="3" onClick={handleClick}>3</button >
                </div>
                <div className='container-md mt-2'>
                    <button className='btn btn-dark me-2' name="0" onClick={handleClick}>0</button >
                    <button className='btn btn-dark me-2' name="." onClick={handleClick}>.</button >
                </div>
                <div className='container-md'>
                    <button className='btn btn-danger btn-lg my-2' onClick={calculate} id="result">=</button >
                </div>
            </div>
        </div>
    );

};

export default Calc;