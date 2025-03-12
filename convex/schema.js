import { defineSchema,defineTable} from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        username : v.string(),
        email : v.string(),
        imageUrl : v.string()

      })
    })
  
