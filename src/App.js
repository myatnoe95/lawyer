import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './view/Home/Home';
import AboutUs from './view/AboutUs/AboutUs';
import LawFirm from './view/LawFirm/LawFirm';
import LawSchool from './view/LawSchool/LawSchool';
import News from './view/News/News';
import ContactUs from './view/ContactUs/ContactUs';
import NotMatch from './view/NotMatch/NotMatch';
import Layout from './components/Layout/Layout';
import Navigation from './components/Navbar/Navbar';
import {Jumbotron} from './components/Banner/Banner';
import {LawSchoolBanner} from './components/LawSchoolBanner/LawSchoolBanner';
import {Footer} from './components/Footer/Footer';
import NewsDetails from './view/NewsDetails/NewsDetails';
import {Container} from 'react-bootstrap';


function App() {
  return (
    <React.Fragment>
      <Navigation/>
      {window.location.pathname === '/law_school'?
         <LawSchoolBanner/>
      :
        <Jumbotron/>
      }
      <Container fluid>
        <Router>
          <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route  path="/about_us" component={AboutUs}></Route>
              <Route  path="/law_firm" component={LawFirm}></Route>
              <Route  path="/law_school" component={LawSchool}></Route>
              <Route  path="/news" component={News}></Route>
              <Route path="/news-details" component={NewsDetails}/>
              <Route  path="/contact_us" component={ContactUs}></Route>
              <Route component={NotMatch}></Route>
          </Switch>
        </Router>
      </Container>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
