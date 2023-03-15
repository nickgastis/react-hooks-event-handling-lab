import React from 'react';


const handleBlur = (e) => {
console.log('Hey! Eyes on me!')
}

const handleFocus = (e) => {
console.log(e.target = 'Good!')
}

function EyesOnMe() {
    return (
        <div>
            <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>

        </div>
        
        )
}

export default EyesOnMe;