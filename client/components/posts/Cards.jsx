import Link from "next/link";

const Cards = ({title, type, Thumb, id}) => {
    return (
        <Link href={`/posts/${id}`}>
            <div className="group w-52 sm:w-72 text-light cursor-pointer">
                <div className="cardImage  h-40 bg-dark mb-2 flex rounded-2xl items-center justify-center">
                    {
                    type === "javascript" ? (<Thumb className="transition-all duration-200 group-hover:scale-95" />) 
                    :type === "next" ? (<Thumb className="transition-all duration-200 group-hover:scale-95" />)
                    :type === "react" ? (<Thumb className="transition-all duration-200 group-hover:scale-95" />)
                    :type === "angular" ? (<Thumb className="transition-all duration-200 group-hover:scale-95" />)
                    :type === "svelte" ? (<Thumb className="transition-all duration-200 group-hover:scale-95" />)
                    :""
                    }
                </div>
                <h3 className="font-medium text-sm text-dark selection:bg-dark selection:text-light">
                    {title}
                </h3>
            </div>
        </Link>
    )
}

export default Cards;