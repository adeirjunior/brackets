import Image from "next/image";
import styled from "styled-components";
import Brackets from "../public/brackets";

const Wraper = styled.header`
display: flex; 
user-select: none;
flex-direction: column; 
padding: 2em 2em 0;  
margin: 0 1em ; 
justify-content: center; 
align-items: center;

p{
  font-size: .68rem;
  margin-top: .5em; 
  font-weight: 600;
  white-space: nowrap; 
}
`;

const Header = () => {
  return (
    <Wraper>
        <Brackets className=""/>
        <p>important news for short time web devs</p>
    </Wraper>
  )
}

export default Header;