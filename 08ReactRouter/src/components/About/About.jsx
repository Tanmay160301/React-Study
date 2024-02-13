// import React from 'react'

export default function About() {
    

    return (
        <section>
            <div className=" container mx-auto  flex flex-col md:flex-row items-center space-y-4 ">
                {/* image */}
                <div className="md:w-1/3 flex-shrink-0 w-22 mx-5 md:mx-0">
                <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                </div>
                {/* Para */}
                <div className="w-2/3 text-center md:p-7 md:m-7 space-y-4">
                    <h1 className="font-bold text-xl">React development is carried out by passionate developers</h1>
                    <p className="font-semibold text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error modi labore maxime inventore eos autem sapiente dignissimos! Aut quia repudiandae a corporis exercitationem rem velit sequi hic quidem accusantium ipsa non, eos minima minus.</p>
                    <p className="font-semibold text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, temporibus dolore. Delectus eaque ea hic quaerat, nesciunt deserunt aliquid alias sint quia laboriosam. Tenetur modi, omnis autem sit blanditiis repellat. Autem odit amet dolor, sequi necessitatibus laborum.</p>
                </div>
            </div>
        </section>
    )
}
