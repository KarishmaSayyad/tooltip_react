import React from 'react';
import Tooltip from '@mui/material/Tooltip';

//import matural UI 

//Tip components use props 
const Tip = (props) => {
 console.log(props.pos);
    //render
    return ( 
        // Tooltip is a MUI component
        <div className='container'>
        <Tooltip title={`"Thanks for hovering! I'm a ${props.pos}💭 side tooltip..😃"`} placement={props.pos}>

                <button className='hover_btn'>📔 Hover over me...!!!</button>
        </Tooltip>
        </div>)

}

export default Tip;