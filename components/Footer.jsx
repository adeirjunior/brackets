import styled from "styled-components";
import Link from "next/link";
const Wraper = styled.footer`
    color: #f1f1f1;
    background-color: #1C1C1C;
    width: 100%; 
    font-size: .85rem; 
    padding: 1.5em;  
 
    .github a, .coffee a{
        text-decoration: underline;
        &:hover{  
            opacity: .7;
        }
    }
    .coffee{
        margin-top: 5em; 
        float: right;
    }
`
const Footer = () => {
    return (
        <Wraper>
            <p className="github">Developed by <Link href="https://github.com/adeirjunior">Adeir Junior</Link></p>
            <p className="coffee">He would like a <Link href="https://ko-fi.com/F1F45NX9N">Coffe</Link></p>
        </Wraper>
    )
}

export default Footer;