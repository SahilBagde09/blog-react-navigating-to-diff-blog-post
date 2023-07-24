import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogDetails: {},
  }

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    console.log(params.id)
    const response = await fetch(`https://apis.ccbp.in/blogs/${params.id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    console.log(updatedData)
    this.setState({blogDetails: updatedData})
  }

  render() {
    const {blogDetails} = this.state
    const {title, imageUrl, avatarUrl, author, content, topic} = blogDetails
    return (
      <div className="main-content">
        <div className="inside-content-container">
          <h1 className="content-heading">{title}</h1>
          <div className="author-info-container">
            <img
              src={avatarUrl}
              alt={author}
              className="author-image-container"
            />
            <h1 className="author-name">{author}</h1>
          </div>
          <img src={imageUrl} alt={title} className="main-image" />
          <p className="blog-content">{content}</p>
        </div>
      </div>
    )
  }
}

export default BlogItemDetails
