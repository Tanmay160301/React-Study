/*
    Database is a set of collections and collections are set of documents
    documents madhe individual data or tuples {}(JSON format) madhe asnar
*/
import config from "../config/config";
import { Client, Databases, Storage,ID } from "appwrite";

export class DatabaseService{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl) // Your API Endpoint
        .setProject(config.projectID) // Your project ID

        //Database is used here to store collections
        this.databases = new Databases(this.client);

        //Storage is used for uploading and downloading files 
        //Hya context madhe aapn pics store karnar
        this.bucket = new Storage(this.client);
    }

    //Service for creating a post
    async createPost({ UserId, Title, Slug , Content, FeaturedImage ,Status}){
        try {
            return await this.databases.createDocument(
                config.databaseID,
                config.collectionID,
                Slug,//ID.unique() pn lihu shakto
                {
                    UserId: UserId,
                    Title:Title,
                    Content:Content,
                    FeaturedImage:FeaturedImage,
                    Status:Status,
                }
            );
        } catch (error) {
            console.log("Appwrite Error :: createPost :: error",error)
        }
    }

    //Service for updating a post
    async updatePost(Slug ,{ Title, Content, FeaturedImage ,Status}){
        try {
            return await this.databases.updateDocument(
                config.databaseID,
                config.collectionID,
                Slug,//ID.unique() pn lihu shakto
                {
                    Title:Title,
                    Content:Content,
                    FeaturedImage:FeaturedImage,
                    Status:Status,
                }
            );
        } catch (error) {
            console.log("Appwrite Error :: updatePost :: error",error)
        }
    }

    //Service for deleting the post
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.databaseID,
                config.collectionID,
                slug
                );
            return true;
            
        } catch (error) {
            console.log("Appwrite Error :: deletePost :: error",error)
            return false;
        }
    }

    //Service for getting a single document based on id
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.databaseID,
                config.collectionID,
                slug);

        } catch (error) {
            console.log("Appwrite Error :: getPost :: error",error) 
        }
    }

    //get all the posts
    async getAllPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                config.databaseID,
                config.collectionID,
                queries
                );
        } catch (error) {
            console.log("Appwrite Error :: getAllPost :: error", error)  
        }
    }


    //Services related to files
    
    //upload service
    //Parameter madhe file dilela ahe .. which we will see in the frontend how to handle it... or what actually it is
    async uploadPostImage(file){
        try {
            return await this.bucket.createFile(
                config.bucketID,
                ID.unique(),
                file//he file upload karychi ahe
            )// Ha return aplyala ek FileId denar in the form of string which we will use as a parameter in createPost service.. so that appwrite madhe Post chya ithe jo image ahe tithe fileId jail
            
        } catch (error) {
            console.log("Appwrite Error :: uploadFileError :: error",error) 
            return false;
        }
    }

    //delete service
    async  deleteFile(fileId){
        try {
            await this.bucket.deleteFile(config.bucketID,fileId)
            return true;// response madhe true karycha       
        } 
        catch (error) {
            console.log("Appwrite Error :: deleteFileError :: error",error) 
        }
    }

    //postImagePreview service
    //fileId here itself is an id which we have stored in another collection
    postImagePreview(fileId){
        try {
            //this is not a promise
            return this.bucket.getFilePreview(config.bucketID, fileId);
        } catch (error) {
            console.log("Appwrite Error :: postImagePreview :: error", error) 
        }
    }
   
}

const databaseService = new DatabaseService();

export default databaseService;