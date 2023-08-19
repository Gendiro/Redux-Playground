import type React from "react";
import {postAPI} from "../services/PostService.ts";
import Post from "./Post.tsx";
import LoadingCircle from "./LoadingCircle.tsx";
import {PostItem} from "../types/post.ts";

const PostList: React.FC = () => {
    const {data: posts, isLoading, error} = postAPI.useFetchAllPostsQuery(10);
    const [createNewPost] = postAPI.useCreatePostMutation();
    const [updatePost] = postAPI.useUpdatePostMutation();
    const [deletePost] = postAPI.useDeletePostMutation();

    const handleNewPost = () => {
        const title = prompt("Enter the title of the post") as string;
        const body = prompt("Enter the description of the post") as string;
        const newPost: PostItem = {
            title,
            body,
            id: Date.now(),
            userId: 0
        }
        createNewPost(newPost);
    }

    const handleEditPost = (editedPost: PostItem) => {
        updatePost(editedPost);
    }

    const handleDeletePost = (post: PostItem) => {
        deletePost(post);
    }

    if (isLoading) {
        return <LoadingCircle/>
    }

    if (error) {
        return <div className="w-4/6 h-full text-center text-red-500 text-2xl mx-auto m-10">If you're seeing this, you're probably watching the deployed project. This particular page uses local json-server to setup the REST API for the RTK Query to work with, so it won't work with github pages. <br/> Consult with README for further info.</div>;
    }

    return <div className = "grid grid-cols-3 w-5/6 gap-6 mx-auto">
        {posts && posts.map(post =>
            <Post key={post.id} post={post} onDelete={post => handleDeletePost(post)} onEdit={(post: PostItem) => handleEditPost(post)}/>
        )}
        <button onClick={handleNewPost} className="border-gray-300 border-2 m-2 py-3 px-4 rounded-xl text-center w-full mx-auto hover:bg-gray-200">Create new post</button>
    </div>;
}

export default PostList;