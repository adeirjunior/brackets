import Javascript from '../public/filter-icons/Javascript-Icon';
import React from '../public/filter-icons/React-Icon';
import Next from '../public/filter-icons/Next-Icon';
import Angular from '../public/filter-icons/Angular-Icon';
import Svelte from '../public/filter-icons/Svelte-Icon';

export const filterIcons = [
    {
        type: 'javascript',
        Src: ({className, onClick}) => < Javascript onClick={onClick} className={className}/>,
    },
    {
        type: 'react',
        Src: ({className, onClick}) => < React onClick={onClick} className={className}/>,
    },
    {
        type: 'next',
        Src: ({className, onClick}) => < Next onClick={onClick} className={className}/>,
    },
    {
        type: 'angular',
        Src: ({className, onClick}) => < Angular onClick={onClick} className={className}/>,
    },
    {
        type: 'svelte',
        Src: ({className, onClick}) => < Svelte onClick={onClick} className={className}/>,
    },
    
];