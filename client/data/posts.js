import Javascript from '../public/post-icons/Javascript';
import React from '../public/post-icons/React';
import Next from '../public/post-icons/Next';
import Svelte from '../public/post-icons/Svelte';

export const PostsData = [
    {
        title: "Javascript Updates to ES11",
        Thumb: ({className}) => < Javascript className={className}/>,
        type: "javascript",
    },
    {
        title: "React 18 Looks Really Nice",
        Thumb: ({className}) => < React className={className}/>,
        type: "react",
    },
    {
        title: "Svelte Target Don’t Works Anymore",
        Thumb: ({className}) => < Svelte className={className}/>,
        type: "svelte",
    },
    {
        title: "Next Updates Its Router",
        Thumb: ({className}) => < Next className={className}/>,
        type: "next",
    },
    {
        title: "Next Updates Its Router",
        Thumb: ({className}) => < Next className={className}/>,
        type: "next",
    },
    {
        title: "Svelte Target Don’t Works Anymore",
        Thumb: () => < Svelte />,
        type: "svelte",
    },
    {
        title: "Javascript Updates to ES11",
        Thumb: () => < Javascript />,
        type: "javascript",
    },
    {
        title: "React 18 Looks Really Nice",
        Thumb: () => < React />,
        type: "react",
    },
]