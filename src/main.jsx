import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Blog from './Pages/Blog.jsx';
import Blog1 from './Pages/Blog1.jsx';
import Blog2 from './Pages/Blog2.jsx';
import Blog3 from './Pages/Blog3.jsx';
import Detail from './Pages/Detail.jsx';
import Feature from './Pages/Feature.jsx';
import Quote from './Pages/Quote.jsx';
import Team from './Pages/Team.jsx';
import Contact from './Pages/Contact.jsx';
import ContentMarketing from './Pages/ContentMarketing.jsx';
import InfluencerMarketing from './Pages/InfluencerMarketing.jsx';
import AffiliateMarketing from './Pages/AffiliateMarketing.jsx';
import Ppc from './Pages/Ppc.jsx';
import Privacy from './Pages/Privacy.jsx';
import RefundandReturns from './Pages/RefundandReturns.jsx';

import Seo from './Pages/Seo.jsx';
import Socialmedia from './Pages/Socialmedia.jsx';
import TermsandConditions from './Pages/TermsandConditions.jsx';
import Testimonial from './Pages/Testimonial.jsx';
import AI from './Pages/AI.jsx';
// import EmailService from './Pages/EmailService.jsx';
import CommunicationMarketing from './Pages/CommunicationMarketing.jsx';
import SeoOptimization from './Pages/SeoOptimization.jsx';
import Ppcadvertising from './Pages/Ppcadvertising.jsx';
import LeadGeneration from './Pages/LeadGeneration.jsx';
import Onlineadvertising from './Pages/Onlineadvertising.jsx';
import Cro from './Pages/Cro.jsx';
import HappyClients from './Pages/HappyClients.jsx';
import Latestblog from './Pages/latestblog.jsx';
import KeyProjects from './Pages/KeyProjects.jsx';
import OurTechnologies from './Pages/OurTechnologies.jsx';
import AnalyticsDR from './Pages/AnalyticsDR.jsx';
import ECommerceServices from './Pages/Ecommerceservices.jsx';
import WebDesignServices from './Pages/WebDesignServices.jsx';
import DigitalMarketing from './Pages/DigitalMarketing.jsx';
import PowerBI from './Pages/PowerBI.jsx';
import SmartSheet from './Pages/SmartSheet.jsx';
import UIUX from './Pages/UIUX.jsx';
import DataGovernance from './Pages/DataGovernance.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/blog1' element={<Blog1/>} />
      <Route path='/blog2' element={<Blog2/>} />
      <Route path='/blog3' element={<Blog3/>} />
      <Route path='/detail' element={<Detail/>} />
      <Route path='/feature' element={<Feature/>} />
      <Route path='/quote' element={<Quote/>} />
      <Route path='/team' element={<Team/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/contentMarketing' element={<ContentMarketing/>} />
      <Route path='/influencerMarketing' element={<InfluencerMarketing/>} />
      <Route path='/affiliateMarketing' element={<AffiliateMarketing/>} />
      <Route path='/ppc' element={<Ppc/>} />
      <Route path='/privacy' element={<Privacy/>} />
      <Route path='/refundandReturns' element={<RefundandReturns/>} />
      <Route path='/seo' element={<Seo/>} />
      <Route path='/socialmedia' element={<Socialmedia/>} />
      <Route path='/termsandConditions' element={<TermsandConditions/>} />
      <Route path='/testimonial' element={<Testimonial/>} />
      <Route path='/ai' element={<AI/>} />
      {/* <Route path='/emailService' element={<EmailService/>} /> */}
      <Route path='/communicationMarketing' element={<CommunicationMarketing/>} />
      <Route path='/seooptimization' element={<SeoOptimization/>} />
      <Route path='/ppcadvertising' element={<Ppcadvertising/>} />
      <Route path='/leadgeneration' element={<LeadGeneration/>} />
      <Route path='/onlineadvertising' element={<Onlineadvertising/>} />
      <Route path='/cro' element={<Cro/>} />
      <Route path='/HappyClients' element={<HappyClients/>} />
      <Route path='/LatestBlog' element={<Latestblog/>} />
      <Route path='/KeyProjects' element={<KeyProjects/>} />
      <Route path='/OurTechnologies' element={<OurTechnologies/>} />
      <Route path='/Analyticsdatareporting' element={<AnalyticsDR/>} />
      <Route path='/Ecommerceservice' element={<ECommerceServices/>} />
      <Route path='/Websitedesign' element={<WebDesignServices/>} />
      <Route path='/Digitalmarketing' element={<DigitalMarketing/>} />
      <Route path='/Powerbi' element={<PowerBI/>} />
      <Route path="/smartsheet" element={<SmartSheet />} />
      <Route path="/uiux" element={<UIUX/>} />
      <Route path="/Datagovernance" element={<DataGovernance/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
