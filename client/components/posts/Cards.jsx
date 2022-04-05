import styled from "styled-components";
import Link from "next/dist/client/link";

const Card = styled.div`
    width: 100%;
    height: auto;
    cursor: pointer;

    &:hover .cardImage svg{
        transform: scale(.96);
    }
    .cardImage{
        display: flex;
        color: #F1F1F1;
        min-width: 200px;
        max-width: 280px;
        min-height: 150px;
        border-radius: 1em;
        justify-content: center;
        align-items: center;
        background-color: #1E1E1E;
        margin-bottom: .5em;
        user-select: none; 

        svg{
            transition: all .3s; 
        }

    }
    .title{
        font-size: .85rem;
        font-weight: 500;
    }
@media only screen and (min-width:  640px) {
   
}
@media only screen and (min-width:  960px) {
  
}
@media only screen and (min-width:  1440px) {
  
}
`;

const Cards = ({title, type, Thumb, id}) => {
    return (
        <Link href={`/posts/${id}`}>
            <Card className="group">
                <div className="cardImage">
                    {
                    type === "javascript" ? (<Thumb className="transition-all duration-200 group-hover:scale-95" />) 
                    :type === "next" ? (<Thumb className="transition-all duration-200 group-hover:scale-95" />)
                    :type === "react" ? (<Thumb className="transition-all duration-200 group-hover:scale-95" />)
                    :type === "angular" ? (<Thumb className="transition-all duration-200 group-hover:scale-95" />)
                    :type === "svelte" ? (<Thumb className="transition-all duration-200 group-hover:scale-95" />)
                    :""
                    }
                </div>
                <h3 className="title text-dark selection:bg-dark selection:text-light">
                    {title}
                </h3>
            </Card>
        </Link>
    )
}

export default Cards;