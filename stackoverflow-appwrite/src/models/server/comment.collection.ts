//Comment below is to ignore IndexType error. remove it to use IndexType
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IndexType, Permission } from 'node-appwrite';
import {db,commentCollection} from "../name" 
import {databases} from "./config" 

export default async function createCommentCollection() { 
    //create collection 
    await databases.createCollection(db,commentCollection,commentCollection,[Permission.read("any"),Permission.read("users"),
        Permission.create("users"),
        Permission.update("users"),
        Permission.delete("users"),

    ])
    console.log("Comment Collection is created"); 
 await Promise.all([ 
     databases.createStringAttribute(db,commentCollection,"content",10000,true),
        databases.createEnumAttribute(db,commentCollection,"type",["answer","question"],true), 
        databases.createStringAttribute(db,commentCollection,"typeId",50,true),
        databases.createStringAttribute(db,commentCollection,"authorId",50,true),
    
    ]); 
    console.log("Comment Attribute created") 
}