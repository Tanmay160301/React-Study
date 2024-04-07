import React from 'react'
import databaseService from '../appwrite/database'
import { Link } from 'react-router-dom'

//Ha postcard aplyala home page madhe disnar ... ithe we are planning to show title, and featured image  in the link format so that link varti click kela ki ti corresponding post dakhavta yeil

function PostCard({$id, Title, FeaturedImage}) {
  //Ithe featured image id chya form madhe yenar as random strings which we will use to fetch from the bucket using image preview function which we had written in database service

  // console.log("FeaturedImage")
  // console.log(FeaturedImage)

  return (
    <Link
    to={`/post/${$id}`}
    >
      <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
          <img 
          src={ databaseService.postImagePreview(FeaturedImage) }
          className='rounded-xl' 
          alt="" 
          />
        </div>
        <h2
        className='text-xl font-bold'
        >{Title}</h2>
      </div>

    </Link>
  )
}

export default PostCard