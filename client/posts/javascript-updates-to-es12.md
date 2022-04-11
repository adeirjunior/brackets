---
title: 'Javascript Updates to es12'
date: '04/12/2022'
cover_image: 'javascript'
---
As a programmer we can only put the best performant code to the project when we know what new APIs recently introduced in the technology which is being used into the project.

Javascript is widely used programming language now a days in many projects of Software Industry. So it is important that we know that what important APIs introduced in every version of JS.

**Lets see ES2021’s important features which we should know and could start using into project.**
### String replaceAll() method
Prior to ES2021, there was no direct way to replace all occurrences of a string. ES2021 has introduced replaceAll so it is very simple to achieve it.

**Example-**

```
    let string = "ababaababaab"
    console.log(string.replaceAll('a', ''))
    // output bbbbb
```

### Promise.any
This is very nice implementation added by ES2021. It can be used to run multiple promises in parallel. It gets resolved when any of the promise gets resolved or it throws “AggregateError” when all the promises gets rejected.

**Example-**

```
    const p1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('p1');
        }, 2000)
    })
    const p2 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('p2');
        }, 2000)
    })
    Promise.any([p1, p2]).then((val) => {
        // success callback
        console.log(val);
    }, (e) => {
        // error callback
        console.log(e.message);
    })
```
