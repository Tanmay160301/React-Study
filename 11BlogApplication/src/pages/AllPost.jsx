import React, {useState,useEffect} from 'react'//core react che hooks
import databaseService from '../appwrite/database' // appwrite cha object
import {useNavigate} from 'react-router-dom'//router che hooks
import { Container, PostCard } from '../components/index'//Components for our jsx


function AllPost() {

    const [posts, setPosts] = useState([]);

    //Components jasa load hoil tasa tyala posts dakhavu.. tyaadhi sagle posts gheun state madhe thevu
    useEffect(()=> {
        databaseService.getAllPosts([]).then((postsArray) => {
            if (postsArray) {
                setPosts(postsArray.documents);
            }
        })
    } , []);

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
            {
                //one by one document traverse karun Postcard madhe pathavu so that it will render alongside data
            posts.map((post) => (
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard  {...post} />
                </div>
                
            ))
        }
            </div>
        
        </Container>
    </div>
  )
}

export default AllPost