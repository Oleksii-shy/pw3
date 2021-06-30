import UserPosts from "../userPosts/UserPosts";
import {useState} from "react";
import './User.css'
export default function User({item: {id, name}}) {
    let [classSwitcher, setClassSwitcher] = useState('hide');
    return (
        <div>
            {id}. {name} - <button onClick={() => {
                if (classSwitcher === 'hide') {
                    setClassSwitcher('show')
                }
                else if (classSwitcher === 'show') {
                    setClassSwitcher('hide')
                }
            }
        }>Posts</button>
            <div className={classSwitcher}>
                <UserPosts userId={id}/>
            </div>
        </div>
    );
}