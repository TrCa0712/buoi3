import React, { useState } from 'react';
import "./hook5.css"
const Hook5 = () => {
    const [a, setA]= useState("")
    const [b, setB]= useState("")
    const [result, setResult]= useState("")
    
    return (
        <div className='tinh'>
            <label>Nhập a</label> <input value={a} onChange={(e) => setA (e.target.value)} /><br/>
            <label>Nhập b</label> <input value={b}  onChange={(e) => setB (e.target.value)} /> <br/>
            <button onClick={()=>setResult(a*1+b*1)} >+</button>
            <button onClick={()=>setResult(a-b)}>-</button>
            <button onClick={()=>setResult(a*b)}>X</button>
            <button onClick={()=>setResult(a/b)}>/</button>
            <h1>Kết quả: {result} </h1>
        </div>
    );
}

export default Hook5;
