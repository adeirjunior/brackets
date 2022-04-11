import Javascript from '../public/filter-icons/Javascript-Icon';
import React from '../public/filter-icons/React-Icon';
import Next from '../public/filter-icons/Next-Icon';
import Angular from '../public/filter-icons/Angular-Icon';
import Svelte from '../public/filter-icons/Svelte-Icon';

export const filterIcons = [
    {
        alt: 'Javascript Icon',
        Src: ({className}) => < Javascript className={className}/>,
    },
    {
        alt: 'React Icon',
        Src: ({className}) => < React className={className}/>,
    },
    {
        alt: 'Next Icon',
        Src: ({className}) => < Next className={className}/>,
    },
    {
        alt: 'Angular Icon',
        Src: ({className}) => < Angular className={className}/>,
    },
    {
        alt: 'Svelte Icon',
        Src: ({className}) => < Svelte className={className}/>,
    },
    
];