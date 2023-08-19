import React, {useState} from 'react';
import {PostItem} from "../types/post.ts";

interface PostProps {
    post: PostItem;
    onDelete?: (post: PostItem) => void;
    onEdit?: (post: PostItem) => void;
}

let Post: React.FC<PostProps> = ({post, onDelete, onEdit}: PostProps) => {
    const [isBeingEdited, setIsBeingEdited] = useState(false);
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);

    const handleSubmit = () => {
        setIsBeingEdited(false);
        if (onEdit) {
            onEdit({
                ...post,
                title,
                body
            });
        }
    }

    return <div className="border-gray-300 border-2 m-2 py-3 px-4 rounded-xl text-center w-full mx-auto">
        {!isBeingEdited &&
            <>
                <h2>{title}</h2>
                <hr className="border-gray-300 my-4"/>
                <p className="mb-5">{body}</p>
                <button onClick={() => setIsBeingEdited(true)} className="bg-blue-300 rounded-md py-1 px-2 ml-2 hover:bg-blue-400">Edit</button>
            </>
        }
        {isBeingEdited &&
            <>
                <h2><input defaultValue={title} onChange={(e) => setTitle(e.target.value)} className="bg-gray-100 text-center border-gray-300 border-2 rounded-xl"/></h2>
                <hr className="border-gray-300 my-4"/>
                <p className="mb-5"><textarea defaultValue={body}  onChange={(e) => setBody(e.target.value)} className="bg-gray-100 border-gray-300 border-2 rounded-xl w-full h-auto overflow-hidden"/></p>
                <button onClick={handleSubmit} className="bg-green-300 rounded-md py-1 px-2 ml-2 hover:bg-green-400">Save</button>
            </>
        }
        <button onClick={onDelete && (() => onDelete(post))} className="bg-red-300 rounded-md py-1 px-2 ml-2 hover:bg-red-400">Delete</button>
    </div>
}

Post = React.memo(Post);
export default Post;