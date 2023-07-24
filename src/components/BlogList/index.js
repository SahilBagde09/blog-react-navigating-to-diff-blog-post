import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {currentBlogList: [], isLoading: true}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      title: eachData.title,
      imageUrl: eachData.image_url,
      avatarUrl: eachData.avatar_url,
      author: eachData.author,
      topic: eachData.topic,
    }))
    console.log(updatedData)
    this.setState({currentBlogList: updatedData, isLoading: false})
  }

  render() {
    const {currentBlogList, isLoading} = this.state
    return (
      <div className="blog-list-container">
        {isLoading ? (
          <div data-testid="loader">
            (<Loader type="TailSpin" color="#00bfff" height={50} width={50} />)
          </div>
        ) : (
          currentBlogList.map(eachBlogData => (
            <BlogItem blogDetails={eachBlogData} key={eachBlogData.id} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
