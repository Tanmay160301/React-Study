/**
 * Summary: EK Service cha object create karnar which will serve us different   functionalities
 * 
 * 
 * Ata ithe Authentication chya case madhe aapn appwrite chya aat users create karun thevnar(register karun thevnar) ... they will have their own email-id, password, username.. appwrite will provide a way for encryption ... And only authencated users which have been registered on appwrite could access the database documents
 * 
 * 
 * Another important point of using this approach is that :
 * if suppose aplyala asa vatla ki appwrite chya aivaji dusryachi service use karnar ahe like for example custom database(mongoDB) or Firebase tr ... methods login, signup, logout wale tech rahanar fkt aatla code badalnar
 * 
 */

import config from "../config/config"
import { Client, Account , ID} from "appwrite";

export class AuthService{

    //class madhe variables are defined in this fashion
    client = new Client();
    account; //by default undefined

    //As soon as the object is created client and account la initialize karne using this keyword
    constructor(){
        //this cha use karycha to set the class variables
        this.client
    .setEndpoint(config.appwriteUrl) // Your API Endpoint
    .setProject(config.projectID) // Your project ID

    this.account = new Account(this.client);
    }

    //Now here we will create services such as Sign-up, login, logout

    //Sign-up.. Why it is async? because appwrite madhe pn code run hoat asnar to create account...toparyant aapla code thoda wait karnar to finish it
    //Ithe signup/createAccount chya parameters madhe aapn destructure kartoy so that aapn signup la directly ek object pass karnar
    async createAccount({name, email, password}){
        try {
            //ithe this keyword dyayla visrycha nahi as aapn sagla class chya aat karat ahe
            //first parameter nehmi ID dyaychi while creating an account
            const userAccount = await this.account.create(ID.unique() ,email, password, name);

            if (userAccount) {
                //call another method
                return this.login({email, password});
            } else {
                return userAccount;
            }
            
        } catch (error) {
            console.log("Appwrite Error :: createAccount :: error",error)
        }
    }

    //login service
    //login kela ki by default ek session create honar

    async login({email, password}){
        try {
            // return await this.account.createEmailSession(email, password);
            console.log("Yet ahe")
            
            return await this.account.createEmailPasswordSession(email, password);
            

        } catch (error) {
            console.log("Appwrite Error :: login :: error", error);
        }
    }

    //getCurrentUser() service
    //Kadhi Kadhi jyaveli aapn homepage varti asnar tyaveli aapn check karycha ki user logged in ahe ki nahi
    //tyasathi aapn getUser chi service lihinar
    async getCurrentUser(){
        try {
            //ithe aapn if else lavoo shaktoy kiva frontend madhe lavoo shaktoy
            return await this.account.get();
        } 
        catch (error) {
            console.log("Appwrite Error :: getCurrentUser :: error",error)
        }
        return null;
    }

    //logout Service
    //logout kela ki tya corresponding user sathi sagle sessions delete honar
    async logout(){
        try {
            return await this.account.deleteSessions();
        } 
        catch (error) {
            console.log(" Appwrite Error :: logout :: error ",error)

        }
    }

}

const authService = new AuthService();
//So that we can use authService.createAccount(), ... like this to use the functionality

export default authService;



