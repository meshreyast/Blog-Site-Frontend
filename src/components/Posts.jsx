import PostCard from './PostCard'

const Posts = ({ posts }) => {
    return (
        <div className='posts'>
            {posts.map((p => {
                return (
                    <PostCard post={p} />
                )
            }))}
        </div>
    )
}

export default Posts