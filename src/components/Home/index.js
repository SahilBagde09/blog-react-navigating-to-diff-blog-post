import BlogList from '../BlogList'
import './index.css'

const Home = () => (
  <div className="home-container">
    <div className="user-info-container">
      <img src="" alt="profile" className="" />
      <h1 className="user-name">Wade Warren</h1>
      <p className="user-role">Software developer at UK</p>
    </div>
    <BlogList />
  </div>
)

export default Home
