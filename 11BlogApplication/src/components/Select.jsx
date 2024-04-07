import React, {useId} from 'react' 

function Select({
    options,// array of options jo ki parent kadun props pathvle jatil
    label,
    classname = '',
    ...props
},ref) {
    const id = useId();

  return (
    <div className='w-full'>
        {/* Label -- label cha for ani tyacha corresponding html cha tag cha id same pahije so that they are related to each other*/}
        {label && ( <label htmlFor={id}>{label}</label> )}

        {/* select tag with options */}
        <select
        name={label}
        id={id}
        ref={ref} // forward ref madhe ref chi property dyayla nahi visarychi
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${classname}`}
        {...props}
        >
        {
            //why options chya ithe question mark ... because it may so happen ki options cha array empty ahe
            options?.map((option) => (
            <option value={option} key={option}>{option}</option>
        ))
        }
        </select>

    </div>
  )
}

export default React.forwardRef(Select);