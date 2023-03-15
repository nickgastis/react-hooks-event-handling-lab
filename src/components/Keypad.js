import React from 'react';


const handleChange = (e) => {
console.log('Entering password...')
}

function Keypad (){
    return (
        <div className='keypad' >
            <input onChange={handleChange} type='password'></input>

        </div>
    )
}

export default Keypad;