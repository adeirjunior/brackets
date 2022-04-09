import Link from "next/link";
import Javascript from '../../public/post-icons/Javascript';
import React from '../../public/post-icons/React';
import Next from '../../public/post-icons/Next';
import Svelte from '../../public/post-icons/Svelte';

const Cards = ({ post }) => {
    return (
        <Link passHref href={`/posts/${post.slug}`}>
            <div className="group w-52 sm:w-72 text-light cursor-pointer">
                <div className="cardImage  h-40 bg-dark mb-2 flex rounded-2xl items-center justify-center">
                    {
                    post.frontmatter.cover_image === "javascript" ? (<Javascript className="transition-all duration-200 group-hover:scale-95" />) 
                    :post.frontmatter.cover_image === "next" ? (<Next className="transition-all duration-200 group-hover:scale-95" />)
                    :post.frontmatter.cover_image === "react" ? (<React className="transition-all duration-200 group-hover:scale-95" />)
                    :post.frontmatter.cover_image === "angular" ? (<Thumb className="transition-all duration-200 group-hover:scale-95" />)
                    :post.frontmatter.cover_image === "svelte" ? (<Svelte className="transition-all duration-200 group-hover:scale-95" />)
                    :""
                    }
                </div>
                <h3 className="font-medium text-sm text-dark selection:bg-dark selection:text-light">
                    {post.frontmatter.title}
                </h3>
            </div>
        </Link>
    )
}

export default Cards;