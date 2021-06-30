export default function Comment({item: {id, name, email, body}}) {
    return (
        <div>
            <hr/>
            {id}. {name}
            <h4>{email}</h4>
            <p><i>{body}</i></p>
            <hr/>
        </div>
    );
}