import React, {useState, useEffect} from 'react'//useEffect means that jyaveli component mount hoil tyaveli ha code run kar
import {useNavigate, Link, useParams} from 'react-router-dom'//router che hooks
import {useSelector} from 'react-redux'//redux che hooks
import databaseService from '../appwrite/database'//toh corresponding post anudet
import {Button, Container} from "../components/index"// for jsx
import parse from 'html-react-parser'


// Editor madhe jo pn content ahe toh content aplyala return HTML madhe honar ... tyala aapn parse cha method use karun HTML to jsx karu shaktoy so that react elements madhe nantr tyacha internally transformation hoil

export default function Post() {
    const [post, setPost] = useState(null);
    // const [isAuthor, setIsAuthor] = useState(false);
    const userData = useSelector((state) => state.auth.userData)
    const navigate = useNavigate();
    const {slug} = useParams();

    console.log(userData)
   
    useEffect( () => {
        
        if (slug) {
            databaseService.getPost(slug).then((post) => {//post cha format kay mahit
                if (post) {
                    setPost(post);

                }else{
                    navigate('/');
                }
            })
        }
        else{
            navigate('/');
        }
    }, [slug,navigate] )

    //If you are the author of the post then you should get the edit and delete post options ..
    //post form madhe jyaveli apn post submit karat hoto tyaveli userId chya thikani userData.$id ch dila hota
    
   const isAuthor = (post && userData) ? post.UserId === userData.$id : false ;

    //isAuthor jo aahe does it keeps track of both post and userDate such that it immediately switch values

    const deletePost = () => {
        //Ithe aplyala post pn delete karyla lagnar ani image file pn delete karyla lagnar
        //Pahila post delete karuyat and then file delete karuyat
        //Ha post aplya useState madhla ahe
        databaseService.deletePost(post.$id).then((status) => {
            if (status) {
                databaseService.deleteFile(post.FeaturedImage);
                navigate('/');
            }
        })
        
    }

    if (post) {
        return (
            <div className='py-8'>
                <Container>
                    <div className='w-full flex justify-center mb-4 relative border rounded-xl p-2'>
                        <img src={databaseService.postImagePreview(post.FeaturedImage)} className='rounded-xl' />
                        {/* flex ahe mhnun he below 2 options upper-right side la janar 
                        isAuthor jr true asel trch buttons cha code disnar
                        */}
                        {isAuthor && (
                            <div className="absolute right-6 top-6">
                                <Link
                                to={`/edit-post/${post.$id}`}// post.$id is slug itself and post.userId is store madhun ghetlela id
                                >
                                    <Button className='mr-3' bgColor='bg-green-500 hover:bg-green-700'>
                                        Edit
                                    </Button>
                                </Link>
                                <Button 
                                bgColor='bg-red-500'
                                onClick = {deletePost}
                                >
                                    Delete
                                </Button>
                            </div>
                        )}
                        
                    </div>

                    <div className='w-full mb-6'>
                        <h1 className='text-2xl font-bold'>
                            {post.Title}
                        </h1>
                        <div className='browser-css'>
                            {/* RTE aplyala HTML content detay */}
                            {parse(post.Content)}
                        </div>

                    </div>

                </Container>
            </div>
        );
    }else{
        return null
    }
}

