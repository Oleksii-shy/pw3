import {useEffect, useState} from "react";
import {getPosts} from "../services/API";
import PostWithUser from "../postWithUser/PostWithUser";

export default function UserPosts({userId}) {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => {
            setPosts(value.data);
        });
    }, []);
    let postsFilter = posts.filter(value => value.userId === userId);
    return (
        <div>
            {postsFilter.map(value => <PostWithUser key={value.id} item={value}/>)}
        </div>
    );
}