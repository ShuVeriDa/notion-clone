import {v} from "convex/values"
import {mutation, query} from "./_generated/server";

export const get = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()

    if(!identity) {
      throw new Error("Not authenticated")
    }

    return await ctx.db.query("documents").collect()
  }
})

export const create = mutation({
  args: {
    title: v.string(),
    parentDocument: v.optional(v.id("documents"))
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()

    if(!identity) {
      throw new Error("Not authenticated")
    }

    const userId = identity.subject

    return await ctx.db.insert("documents", {
      title: args.title,
      parentDocument: args.parentDocument,
      userId,
      isArchived: false,
      isPublished: false
    })
  }
})