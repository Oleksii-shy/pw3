export default function PostWithUser({item: {id, title, body}}) {
    return (
        <div>
            {id}. {title}
            <p><i>{body}</i></p>
        </div>
    );
}