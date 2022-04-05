import Javascript from '../public/post-icons/Javascript';
import React from '../public/post-icons/React';
import Next from '../public/post-icons/Next';
import Svelte from '../public/post-icons/Svelte';

export const PostsData = [
    {
        title: "Javascript Updates to ES11",
        Thumb: () => < Javascript />,
        type: "javascript",
    },
    {
        title: "React 17 Looks Really Nice",
        Thumb: () => < React />,
        type: "react",
    },
    {
        title: "Svelte Target Don’t Works Anymore",
        Thumb: () => < Svelte />,
        type: "svelte",
    },
    {
        title: "Next Updates Its Router",
        Thumb: () => < Next />,
        type: "next",
    },
]