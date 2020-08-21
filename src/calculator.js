import React from 'react';
import './style.css';

export function Message (props) {
    return (
        <p className="format">This is displayed in Message function <italic>{props.valued}</italic></p>
    )
}

// export function Add(props){
// let [calcu, setCalcu]= useState(props.valued)
//     return(
//         setCalcu(calcu+1)
        
//     )

// }

// export function Sub(props){
// let [calcu, setCalcu]= useState(props.valued)
//     return(
//         setCalcu(calcu-1)
        
//     )
// }