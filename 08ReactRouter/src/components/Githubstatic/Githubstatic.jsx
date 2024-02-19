/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function Githubstatic() {
  // let {username} = useParams();

  /**
     * Why useEffect wala code is commented?
     * -> because useEffect wala code tyavelich run honar jyaveli me link varti click karnar
     * mala desired behaviour asa hava ahe ki me maza mouse pointer jasa link varti annar tyavelich
     * data fetching cha kam chalu vhyala pahije and then data cache madhe jayla pahije... 
     * so The solution is to make use of Loader property of Router
     * 
     * Loader Property in Route

Context: Now me header madhe ajun ek My Github navacha ek webpage/ react component banavlela ahe ... jyaveli me tyachyavr click karto then mala new webpage disata and techyavr mala maza github cha dp ani followers distat...

Problem : jyaveli me github cha data fetch karat hoto using fetch API inside useEffect Hook then ek thodya velasathi lag experience yeto....toh lag nako ahe ...

Solution is to use loader inside the route.... so that jyaveli me tya icon kiva link chya javal maza mouse pointer nhein tyavelich maza data fetching chi process suru hoil.... thereby saving my time
     * 
     */

  // const [data, setData] = useState({});

  // useEffect(() => {
  //     fetch(`https://api.github.com/users/Tanmay160301`)
  //     .then( (response) => response.json() )
  //     .then( (data) => setData(data)  )
  // }, [])

  const data = useLoaderData();

  return (
    <>
      <div className="my-10 container mx-auto text-center justify-center items-center space-x-4 font-bold flex flex-col md:flex-row">
        <div>
          <img src={data?.avatar_url} width={150} alt="" />
        </div>
        <div>
          <h1>Github Followers : {data?.followers} </h1>
        </div>
      </div>
    </>
  );
}

export const GithubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Tanmay160301");
  return response.json();
};
