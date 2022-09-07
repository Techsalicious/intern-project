import BannerComponent from "components/banner-component"
import Banner from "sections/banner"
import FeaturedProjects from "sections/featured-projects"
import FullWidthComponent from "sections/fullWidth-component"
import FutureGrowth from "sections/future-growth"
import SuccessStories from "sections/success-stories"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Banner />
      {/* <BannerComponent /> */}
      <FullWidthComponent />
      <SuccessStories />
      <FutureGrowth />
      <FeaturedProjects />
    </Layout>
  )
}

const styles = {
  heading: {
    color: "headingSecondary",
    fontSize: "64px"
  },
  learnMore: {
    color: "links.learnMore"
  }
}
