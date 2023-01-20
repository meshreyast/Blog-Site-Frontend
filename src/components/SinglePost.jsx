import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { Context } from '../context/Context';

const SinglePost = () => {

    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState({});
    const PF = 'http://localhost:5000/images/';
    const { user } = useContext(Context);

    useEffect(() => {
        try {
            const getPost = async () => {
                const res = await axios.get("/posts/" + path)
                setPost(res.data)
                setTitle(res.data.title)
                setDesc(res.data.desc)
                setCategories(res.data.categories)
            };
            getPost();
        } catch (err) { };
    }, [path]);

    //Updating post
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [categories, setCategories] = useState([]);
    const [updateMode, setUpdateMode] = useState(false);

    const handleUpdate = async () => {
        try {
            await axios.put("/posts/" + path, {
                username: user.username,
                title,
                desc,
                categories,
            });
            setUpdateMode(false)
        } catch (err) { };
    };

    //Deleting post
    const handleDelete = async () => {
        try {
            await axios.delete("/posts/" + path, {
                data: { username: user.username } //While deleting, we can't directly send anything. We have to wrap it in data object
            });
            window.location.replace("/");
        } catch (err) { };
    };

    return (
        <div className='singlePost'>
            <div className='singlePostWrapper'>
                {post.photo && (
                    <img className='singlePostImg' src={PF + post.photo} alt='' />
                )}
                {updateMode ? (<input
                    type='text'
                    className='singlePostTitleInput'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                />
                ) : (
                    <h1 className='singlePostTitle'>
                        {title}
                        {post.username === user?.username && (
                            <div className='singlePostEdit'>
                                <i
                                    className="singlePostIcon fa-regular fa-pen-to-square"
                                    onClick={() => setUpdateMode(true)}
                                >
                                </i>
                                <i
                                    className="singlePostIcon fa-solid fa-trash"
                                    onClick={handleDelete}
                                >
                                </i>
                            </div>
                        )}
                    </h1>
                )}
                <div className='singlePostInfo'>
                    <span className='singlePostAuthor'>Author :{" "}
                        <Link className='link' to={`/?user=${post.username}`}>
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    {updateMode ? <input
                        type='text'
                        className='singlePostCatInput'
                        value={categories}
                        onChange={(e) => setCategories(e.target.value)}
                    /> : (
                        <span className='singlePostCat'>{categories}</span>
                    )}
                    <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ? (
                    <textarea
                        className='singlePostDescInput'
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                ) : (
                    <p className='singlePostDesc'>{desc}</p>
                )}
                {updateMode && (
                    <button
                        className='singlePostButton'
                        onClick={handleUpdate}
                    >Update</button>
                )}
            </div>
        </div >
    )
}

export default SinglePost