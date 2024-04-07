/*

Controller is used for integrating externally controlled components … Editor is an externally controlled component ...Controller keeps track of its state and events and reports it to react hook form library …
Controller is having one important prop called as render prop 
It is where we will place our external controlled component … Editor here (We can make use of Editor props to better define the required things)...


https://www.tiny.cloud/docs/tinymce/6/react-ref/#installing-the-tinymce-react-integration-using-npm-or-yarn
Documentation for editor

Below is where we can copy paste the code from Basic configuration example
https://www.tiny.cloud/docs/tinymce/6/basic-setup/#basic-configuration-example


//control is like a ref which is responsible for passing data from this component into react hook form(Parent Component in this context)... Parent component can access state or events of this component

*/

import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'


export default function RealTimeEditor({name,control,label, defaultValue=""}) {
  return (
    <div className='w-full'>
        
    {
    label && (<label htmlFor="" className='text-sm text-gray-700'>{label}</label> )
    }

    <Controller 
    name={name || 'Content'}
    control={control}
    render={({field : {onChange}}) => (
        <Editor
        initialValue={defaultValue}
        apiKey='icd377yf3eukulht2rjzakb6k5h9s34vivth3d2itukwkvki'
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        
        />
    )}
    />

    </div>
  )
}

