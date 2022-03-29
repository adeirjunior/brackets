import Image from "next/image";
import styled from "styled-components";

const Wraper = styled.header`
display: flex;
user-select: none;
flex-direction: column;
padding: 2em 2em 0;
justify-content: center;
align-items: center;

p{
  font-size: .6rem;
  font-weight: 600;
  white-space: nowrap; 
}
`;

const Header = () => {
  return (
    <Wraper>
        <Image width={400}  height={80} src='/brackets.svg' alt="Brackets Logo"/>
        <p>important news for short time web devs</p>
    </Wraper>
  )
}

export default Header;