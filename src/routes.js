import Home from './components/Home';
import About from './components/about/About';
import Team from './components/about/Team';
import PressKit from './components/about/PressKit';
import Blog from './components/about/blog/Blog';
import Wallets from './components/Wallets';
import Roadmap from './components/Roadmap';
import Charity from './components/Charity';
import FAQ from './components/resources/FAQ';
import Community from './components/resources/Community';
import Developers from './components/resources/Developers';

export const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/team', component: Team },
  { path: '/press-kit', component: PressKit },
  { path: '/blog', component: Blog },
  { path: '/wallets', component: Wallets },
  { path: '/roadmap', component: Roadmap },
  { path: '/charity', component: Charity },
  { path: '/faq', component: FAQ },
  { path: '/community', component: Community },
  { path: '/developers', component: Developers }
]
