import PostComments from "../postComments/PostComments";
import {useState} from "react";
import './Post.css'

export default function Post({item: {id, title, body}}) {
    let [postClassSwitcher, setPostClassSwitcher] = useState('hide');
    return (
        <div>
            {id}. {title}
            <p><i>{body}</i></p> <button onClick={() => {
                if (postClassSwitcher === 'show') {
                    setPostClassSwitcher('hide')
                }
                else if (postClassSwitcher === 'hide') {
                    setPostClassSwitcher('show')
                }
            }
        }>Comments</button>
            <div className={postClassSwitcher}>
                <PostComments postId={id}/>
            </div>
        </div>
    );
}