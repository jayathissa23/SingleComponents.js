import styled from 'styled-components';


function ButtonComponent({text,className}) {

    return (   
        <Button className={`${className} sign-up-btn button`}>{text}</Button>
        )
}


const Button=styled.button`     
      
      
`;      


export default ButtonComponent;
