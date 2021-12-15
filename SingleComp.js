import React from 'react'
import styled from 'styled-components';

function Comp() {
    return (
        <DIV className={`${className} `}>

        </DIV>
    )
}

const DIV=styled.div`
      .icon{ 
         width: 25px;
         height: 25px;
         //margin-right: 10px;  
         cursor: pointer;
	   }
`;



export default Comp;
