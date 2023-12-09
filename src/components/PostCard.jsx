import { useState } from "react";
import { Link } from "react-router-dom";
import { URL } from "../constants";

const PostCard = ({ post }) => {

    const [readMore, setReadMore] = useState(false);
    const PF = `${URL}images/`;

    return (
        <div className="post">
            {post.photo && (
                <img className="postImg" src={PF + post.photo} alt="" />
            )}
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map(c => (
                        <span className="postCat">{c.name}</span>
                    ))}
                </div>
                <span className="postTitle">
                    <Link className="link" to={`/post/${post._id}`}>{post.title}</Link>
                </span>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">
                {readMore ? post.desc : `${post.desc.substring(0, 200)}...`}
                <button className='toggle-btn' onClick={() => setReadMore(!readMore)}>
                    {readMore ? 'Show less' : 'Read more'}
                </button>
            </p>
        </div>
    )
}

export default PostCard