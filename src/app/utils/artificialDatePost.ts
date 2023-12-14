import { Post } from "@/types/Posts";

const artificialDate = new Date("Thu Nov 20 2023 16:38:34 GMT+0100 (Central European Standard Time)");

export const artificialDatePost = (post : Post)=>{
    const date = artificialDate.getTime() - 1000 * 60 * 60 * 24 * 20 * post.id;
    return post.createdAt = new Date(date);
}