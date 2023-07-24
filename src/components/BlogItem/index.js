import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogDetails

  return (
    <Link to={`/blogs/${id}`}>
      <div className="blog-item-container">
        <img src={imageUrl} alt={title} className="cover-image" />
        <div className="blog-list-details-container">
          <p className="react-head">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-container">
            <img src={avatarUrl} alt={author} className="author-image" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
