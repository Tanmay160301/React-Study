import React from 'react'
import {useState, useEffect} from 'react'
import databaseService from '../appwrite/database'//database madhun post ghyayla
import { PostCard,Container } from '../components/index' //jsx madge dakhvyla

//AllPost sarkha same ahe
function Home() {
    const [posts, setPosts] = useState([]);

    //Components jasa load hoil tasa tyala posts dakhavu.. tyaadhi sagle posts gheun state madhe thevu
    useEffect(()=> {
        databaseService.getAllPosts([]).then((postsArray) => {
            // console.log("post-Array")
            // console.log(postsArray);
            if (postsArray) {
                setPosts(postsArray.documents);
                console.log("posts")
                // console.log(posts)
            }
        })
    } , []);

    if (posts.length === 0) {
        return (
        <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>)
    }
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
            {
                //one by one document traverse karun Postcard madhe pathavu so that it will render alongside data
            posts.map((post) => (
                <div key={post.$id} className='p-2 w-1/4'>
                    {
                        console.log(post)
                    }
                    <PostCard  {...post} />
                    {/* post document cha sagle properties spread kelet */}
                </div>
                
            ))
        }
            </div>
        
        </Container>
    </div>
  )
}

export default Home