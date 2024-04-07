
// By doing this aplyala hi guarantee ahe ki saglya goshti String madhe milnar and numbers madhe nahi milnar (type cha problem nahi yenar)
//This is considered a good production grade practice
//Ata aapn config.property karun js files madhe environment variables cha access karu shaktoy
const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    projectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    databaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    collectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    bucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    
}

export default config;