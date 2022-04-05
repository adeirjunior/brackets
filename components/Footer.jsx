import styled from "styled-components";
const Wraper = styled.footer`
    margin-top: 4em;
    width: 100%; 
    height: 200px;
    font-size: .85rem;
    padding: 1.5em; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
@media only screen and (min-width:  640px) {
  
}
@media only screen and (min-width:  960px) {
  
}
@media only screen and (min-width:  1440px) {
  
}
`
const Footer = () => {
    return (
        <Wraper className="bg-dark text-light">
            <p className="text-light selection:bg-light selection:text-dark">Developed by <a target='github' className="underline hover:opacity-70" href="https://github.com/adeirjunior">Adeir Junior</a></p>
            <p className="text-light selection:bg-light selection:text-dark text-right">He would like a <a target='kofi' className="underline hover:opacity-70" href="https://ko-fi.com/F1F45NX9N">Coffe</a></p>
        </Wraper>
    )
}

export default Footer;