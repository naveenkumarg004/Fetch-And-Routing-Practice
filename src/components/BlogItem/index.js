import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogData} = props
  const {id, author, avatarUrl, imageUrl, title, topic} = blogData
  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="blog-item-container">
        <img src={imageUrl} className="image" alt="" />
        <div className="text-content">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-div">
            <img className="avatar" src={avatarUrl} alt={title} />
            <p className="name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
