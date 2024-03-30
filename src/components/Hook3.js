import React, { useState } from 'react';

const Hook3 = () => {
    const [student, setStudent]= useState({name: "Nguyễn Hoàng", age: 19})
    const handle_change_name = () =>{
        setStudent({...student,name:"Lê Mèo"})
    }
    const handle_change_age = () =>{
        setStudent({...student,age:30})
    }
    return (
        <div>
            <p>Name: {student.name}</p>
            <p>Age: {student.age} </p>
            <button onClick={handle_change_name}>Change Name</button>
            <button onClick={handle_change_age} >Change Age</button>
        </div>
    );
}

export default Hook3;
