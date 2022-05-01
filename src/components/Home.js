import AwardInfo from "./HomeComponents/AwardInfo"
import BottomNav from "./NavigationComponents/BottomNav"
import ChooseDoctorSection from "./HomeComponents/ChooseDoctorSection"
import HomeSection from "./HomeComponents/HomeSection"
import LocationInfo from "./HomeComponents/LocationInfo"
import NavBarLower from "./NavigationComponents/NavBarLower"
import NewsArticle from "./HomeComponents/NewsArticle"
import TopNavigationBar from "./NavigationComponents/TopNavigationBar"
import ScrollToTop from "../CustomHooks/ScrollToTop"
const Home = () => {
  return (
      <div className = 'mainSection'>
          <ScrollToTop/>
          <TopNavigationBar/>
          <NavBarLower/>
          <HomeSection/>
          <AwardInfo/>
          <LocationInfo/>
          <ChooseDoctorSection/>
          <NewsArticle/>
          <BottomNav/>
      </div>
  )
}

export default Home
