import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetails: [], isLoading: true}

  componentDidMount = () => {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)

    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogDetails: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogDetails} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogDetails
    return (
      <>
        <h1 className="head">{title}</h1>
        <div className="avatar-div">
          <img className="avatar" src={avatarUrl} alt="avatar" />
          <p className="name">{author}</p>
        </div>
        <img src={imageUrl} className="image" alt={title} />
        <p className="content">{content}</p>
      </>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="content-div">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
