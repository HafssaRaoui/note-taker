import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
    args:{
        email : v.string(),
        username : v.string(),
        imageUrl : v.string()
    },

    handler:async(ctx,args) => {

        //check if the user already exit

        const user = await ctx.db.query('users')
        .filter((q)=> q.eq(q.field('email'),args.email))
        .collect();

        // if not we insert on our db
        if(user?.length == 0){
            await ctx.db.insert('users',{
                email : args.email,
                username : args.username,
                imageUrl : args.imageUrl

            })

            return 'Inserted new user ...'
        }

        return 'User already exits !'


    }
})