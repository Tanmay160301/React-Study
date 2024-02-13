/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export function Card({
	icon ,
	city,
	day,
	date,
	month,
	year,
	temp,
	maxTemp,
	minTemp,
	wind,
	visibility,
	humidity,
	status	
}) {
    
	let thisInstance = `${day} ${date} ${month} ${year}`;
	let avgTemp = `${temp}°C`;
	let mxTemp = `${maxTemp}°C`;
	let mnTemp = `${minTemp}°C`;
	let visi = `${visibility} km`;
	let Wind = `${wind} k/h`;
	let Humidity = `${humidity} %`;

    return (
        <>

        <div className="mt-4 flex items-center justify-center ">
            <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs shadow-2xl">
						<div className="font-bold text-xl">{city}</div>
						<div className="text-sm text-gray-500">{thisInstance}</div>
						<div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
                    {/* <svg src="https://cdn-icons-png.flaticon.com/128/1163/1163624.png" className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg> */}
							<img src={`http://openweathermap.org/img/w/${icon}.png`} height={100} width={100} alt="" />
						</div>
						<div className="flex flex-row items-center justify-center mt-6">
							<div className="font-medium text-3xl">{avgTemp}</div>
							<div className="flex flex-col items-center ml-6">
								<div>{status}</div>
								<div className="mt-1">
									<span className="text-sm"><i className="far fa-long-arrow-up"></i></span>
									<span className="text-sm font-light text-gray-500">{mxTemp}</span>
								</div>
								<div>
									<span className="text-sm"><i className="far fa-long-arrow-down"></i></span>
									<span className="text-sm font-light text-gray-500">{mnTemp}</span>
								</div>
							</div>
						</div>
						<div className="flex flex-row justify-between mt-6">
							<div className="flex flex-col items-center">
								<div className="font-medium text-sm">Wind</div>
								<div className="text-sm text-gray-500">{Wind}</div>
							</div>
							<div className="flex flex-col items-center">
								<div className="font-medium text-sm">Humidity</div>
								<div className="text-sm text-gray-500">{Humidity}</div>
							</div>
							<div className="flex flex-col items-center">
								<div className="font-medium text-sm">Visibility</div>
								<div className="text-sm text-gray-500">{visi}</div>
							</div>
						</div>
					</div>
                </div>

        </>
    )
}
