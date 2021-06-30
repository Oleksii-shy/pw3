import {useEffect, useState} from "react";
import {getComments} from "../services/API";
import Comment from "../comment/Comment";

export default function PostComments({postId}) {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        getComments().then(value => {
            setComments(value.data);
        });
    }, []);
    let commentsFilter = comments.filter(value => value.postId === postId);
    return (
        <div>
            {commentsFilter.map(value => <Comment key={value.id} item={value}/>)}
        </div>
    );
}