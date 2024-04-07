/**
 
 To understand the idea of forward ref ... Its like parent can get access to a specific dom node of a child component ... Parent will create a ref and will pass it as a property in child component ... later on Child will make use of forwardRef to forward that ref to its specific dom element
 
 * Here's a simple explanation for forwardRef:

Ref: Think of a "ref" as a way to reference a particular instance of a component or DOM element.

ForwardRef: It's like a bridge that lets you pass a ref from a parent component to a child component even if the child component is defined later in the code.

For example, if you have a parent component and a child component, and you want the parent to be able to access a DOM element or a specific instance of the child component, you can use forwardRef to achieve that even if the child component is declared later in the code.

In simpler words, forwardRef is a way to pass a reference from a parent component to a child component, even if the child component is declared later, making it easier to manage references and interactions between components.


Outline-none 
Use outline-none to hide the default browser outline on focused elements.
https://tailwindcss.com/docs/outline-style#removing-outlines

 */
import React,{useId} from 'react'

//ForwardRef chya aat ek function aapn lihito
const Input = React.forwardRef(function Input({
    label,
    type = 'text',// User ni jr kay value dili nahi tr by default hi value janar
    className='',
    ...props
}, ref){

    const id = useId();

    return (
        <div className='w-full'>
            {/* Label */}
            {
            label && (
                <label htmlFor={id} className='inline-block mb-1 pl-1'>{label}</label>
            )
            }

            {/* Input Tag */}
            <input
             type={type}
             name={id}
             className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border-gray-400 w-full ${className}`}
             ref={ref}
             {...props}// Hechya thikani sagle properties yenar like placeholder
             id={id}

             />
            
        </div>
    )
})

export default Input