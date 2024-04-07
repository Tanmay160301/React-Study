import React, { useEffect,useState } from 'react'
import {useParams, useNavigate} from 'react-router-dom'//kutla post ghyaycha ahe tyacha id milel
import { Container, PostForm } from '../components/index'//jsx madhe dakhvyla
import databaseService from '../appwrite/database';

function EditPost() {
    const [post,setPost] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        databaseService.getPost(slug).then((post) => {
            if (post) {
                setPost(post);               
            }else{
                navigate('/');//navigate to home page 
            }

        })
    }, [slug, navigate])

     
    //Ithe tya slug chya navacha post asu pn shakto nasu pn shakto
    if (post) {
        return (
            <div className='py-8'>
                <Container >
                    <PostForm post={post}/>
                </Container>
            </div>
          )
    }
    else{
        return null
    }
  
}

export default EditPost