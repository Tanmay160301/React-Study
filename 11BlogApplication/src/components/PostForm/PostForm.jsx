// I have understood this like 60 to 70 percent : confusion tr slug madhe hoat ahe bakicha ok ahe ... slug chya input madhe ti onInput wali line tr samajlelich nahi ahe

/**
 * 
 * React hook form madhe jya navane aapn register kela ahe tyach navane aplyala data object madhe as a property mhunun disnar ... Experimenatally verified
 */

import React from 'react'
import { Input, Button, Select, RealTimeEditor } from '../index'
import { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import databaseService from '../../appwrite/database'// apn object create kelela ithe ghetla

//control is like a ref
function PostForm({ post }) {
    //Jr kuni edit button varti click kela asel tyaveli database madhun tya corresponding post cha data yayla pahije na tr toh "post" madhe yenar

    //watch is used for tracking a particular component
    const { register, handleSubmit, control, watch, setValue, getValues } = useForm({
        // Observe how can we put in default values
        defaultValues: {
            title: post?.Title || '',
            slug: post?.$id || '',
            content: post?.Content || '',
            featuredImage: post?.FeaturedImage || '',
            status: post?.Status || 'active'
        }
    });


    const navigate = useNavigate();
    //Ha code run honarch ahe so form dakhavnyapurvi kon user ahe tyacha data gheun thevuyat
    const userData = useSelector((state) => state.auth.userData)//userData madhe ek data kay yetoy te ek bghuyat ... I think toh appwrite madhun yet ahe

    const submitPost = async (data) => {


        //Check logic and continue
        try {
            if (post) {
                

                //Below is Sir's Logic:

                // Upload the new image file... delete the existing file image and then update the post
                //data.image[0] is a binary file object ... data barobar image cha ek array yetoy tikade toh astoy

                const file = data.featuredImage[0] ? await databaseService.uploadPostImage(data.featuredImage[0]) : null;

                if (file) {
                    // jr file delete zali asel tr adhichi file delete karu and then post la update karu
                    await databaseService.deleteFile(post.FeaturedImage);//its in id form
                }
                const updatedPost = await databaseService.updatePost(
                    post.$id,//slug asnar toh as an id ... we access id through this syntax
                    {
                        Title:data.title,
                        Content:data.content,
                        FeaturedImage: file ? file.$id : undefined,
                        Status: data.status
                    }
                )

                if (updatedPost) {
                    navigate(`/post/${post.$id}`)
                }

            }
            else {
                //new post
                //pahila file upload cha kam karu
                const file = data.featuredImage[0] ? await databaseService.uploadPostImage(data.featuredImage[0]) : null;

                
                if (file) {
                    const fileId = file.$id;
                    data.featuredImage = fileId;
                    // console.log(data.featuredImage)
                }

                // console.log(data)

                const upload = await databaseService.createPost({
                    Slug: data.slug,
                    UserId: userData.$id,// userData store madhlach generated id send kelela ahe 
                    Title: data.title,
                    Content: data.content,
                    FeaturedImage: data.featuredImage,
                    Status: data.status
                })

                if (upload) {
                    navigate(`/post/${upload.$id}`)
                }
            }
        } catch (error) {
            console.log(error);
        }

    }

    // Slug transform cha code jo title la watch karnar
    //value chya thikani aapn title denar 
    const slugTransform = useCallback((value) => {

        if (value && typeof value === 'string') {
            const slug = value.toLowerCase().replace(/ /g, '-');
            return slug;
        }

        return "";
    }, []);

    useEffect(() => {

        const subscription = watch((value, { name }) => {
            // value madhe I think form chya saglya values yenar 
            // console.log(value);

            // I think its like title la monitor(tyachya kadhe laksha thev) kr
            if (name === 'title') {
                //its like name kade laksha thev ani slug chi value set kr
                setValue('slug', slugTransform(value.title));
            }
            //Pn ithe mala doubt ahe ki ithe set karychi kay garaj ahe jr aapn JSX madhe set karatch aahot
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [slugTransform, setValue, watch])




    return (

        <form onSubmit={handleSubmit(submitPost)} className='flex flex-wrap'>
            <div className="w-2/3 px-2">
                <Input
                    label="Title: "
                    type="text"
                    name="Title"
                    placeholder="Please Enter the title of your blog"
                    className="mb-4"
                    {...register("title", {
                        required: true
                    })}
                />

                <Input
                    label="Slug: "
                    placeholder="Slug"
                    className="mb-4"
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                    {...register("slug", { required: true })}
                />
                
                <label htmlFor="">Content: </label>
                <RealTimeEditor label="" name="content" control={control} defaultValue={getValues("content")}  
                />

            </div>
            <div className='w-1/3 px-2' >
                <Input
                    label="Featured Image: "
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg"
                    {...register("featuredImage", { required: true })}
                />

                {
                    post && 
                    (<div className='w-full mb-4'>
                        <img src={databaseService.postImagePreview(post.FeaturedImage)} className='rounded-lg' alt="" />
                    </div>)
                }


                <Select
                    label="Status: "
                    options={["active", "inactive"]}
                    className="mb-4"
                    {...register("status", { required: true })}
                />

                <Button
                    type='submit'
                    bgColor={post ? "bg-red-500" : undefined}
                    className="w-full"
                >{post ? "Update" : "Submit"}</Button>
            </div>


        </form>
    )
}

export default PostForm