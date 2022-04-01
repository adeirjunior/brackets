import styled from "styled-components";
import Image from "next/image";

const Card = styled.div`
    width: 100%;
    height: auto;
    cursor: pointer;

    &:not(:last-child){
        margin-bottom: 2em;
    }

    .cardImage{
        display: flex;
        color: #F1F1F1;
        min-width: 200px;
        max-width: 280px;
        min-height: 150px;
        border-radius: 1em;
        justify-content: center;
        background-color: #1E1E1E;
        margin-bottom: .5em;
        user-select: none;
    }
    .title{
        font-size: .85rem;
        font-weight: 500;

        &::selection{
            background-color: #1C1C1C;
            color: #f1f1f1;
        }
    }

`;

const Cards = ({title, thumb}) => {
    const src = `/post-icons/${thumb}.svg`;

    return (
        <Card className="group">
            <div className="cardImage">
                {
                thumb === "javascript" ? (<Image className="transition-all duration-200 group-hover:scale-95" width={50} height={50} alt={title}src={src}/>) 
                :thumb === "next" ? (<Image className="transition-all duration-200 group-hover:scale-95" width={50} height={50} alt={title}src={src}/>)
                :thumb === "react" ? (<Image className="transition-all duration-200 group-hover:scale-95" width={60} height={60} alt={title}src={src}/>)
                :thumb === "angular" ? (<Image className="transition-all duration-200 group-hover:scale-95" width={50} height={50} alt={title}src={src}/>)
                :thumb === "svelte" ? (<Image className="transition-all duration-200 group-hover:scale-95" width={50} height={50} alt={title}src={src}/>)
                :""
                }
            </div>
            <h3 className="title">
                {title}
            </h3>
        </Card>
    )
}

export default Cards;