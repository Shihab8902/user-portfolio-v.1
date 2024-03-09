import { useEffect } from "react"
import About from "./About/About"
import Banner from "./Banner/Banner"
import News from "./News/News"
import Show from "./Show/Show"
import YouTube from "./YouTube/YouTube"

const Home = () => {

  //Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return <div>

    <Banner />
    <About />
    <YouTube />
    <Show />
    <News />

  </div>
}

export default Home