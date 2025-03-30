import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const generateUploadUrl = mutation({
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const addFileEntryToDb = mutation({
    args:{
                fileId : v.string(),
                storageId : v.string(),
                filename : v.string(),
                createdBy : v.string(),
                fileUrl : v.string()
    },

    handler: async(ctx,args)=> {

        const result = await ctx.db.insert('pdfFiles',{
            fileId : args.fileId,
            filename : args.filename,
            storageId : args.storageId,
            createdBy : args.createdBy,
            fileUrl : args.fileUrl

        })

        return 'Inserted'

    }

})

export const getFileUrl = mutation({
  args:{
    storageId :v.string()
  }
  ,
  handler: async (ctx,args) => {
    const url = ctx.storage.getUrl(args.storageId)
    return url
  },
});

export const  GetFileRecord = query({
  args : {
    fileId : v.string()
  },
  handler : async (ctx,args) => {
    const result = await ctx.db.query("pdfFiles").filter((q)=> q.eq(q.field("fileId"),args.fileId))
    .collect()
    console.log(result)
    return result[0]
  }
  

})





