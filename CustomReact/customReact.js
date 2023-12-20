/*

basic expectation from this code:


We saw how React developers have thought while developing react by practically creating 
own react library 

practically saw whatever the JSX which our functional components are returning they are 
first transpiled into JS objects or react elements and then given for the virtual DOM to render it

basic understanding of a bundler






*/


const mainContainer = document.querySelector("#root");

//The point here is to show that the JSX is firstly converted into Javascript objects of React Elements
const ReactElement ={
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"Click me to visit google"

}

//The point here is to show that how the virtual dom Renders it
function customRender(ReactElement,mainContainer){
    // const virtualDomElement = document.createElement(ReactElement.type);
    // virtualDomElement.innerHTML ="Click here to visit the google website";
    // virtualDomElement.setAttribute('href',ReactElement.props.href);
    // virtualDomElement.setAttribute('target',ReactElement.props.target);

    // mainContainer.appendChild(virtualDomElement);

    //Now the updated version of code is as follows
    const virtualDomElement = document.createElement(ReactElement.type);
    virtualDomElement.innerHTML ="Click here to visit the google website";

    for (const key in ReactElement.props) {
        virtualDomElement.setAttribute(key,ReactElement.props[key]);
    }
    // virtualDomElement.setAttribute('href',ReactElement.props.href);
    // virtualDomElement.setAttribute('target',ReactElement.props.target);

    mainContainer.appendChild(virtualDomElement);

}

//calling the virtual dom to add the element
customRender(ReactElement,mainContainer);

/**
 * 
 * Summarizing the learnings:
 * practically saw whatever the JSX which our functional components are returning they are 
first transpiled into JS objects or react elements and then given for the virtual DOM to render it
 * 
 */