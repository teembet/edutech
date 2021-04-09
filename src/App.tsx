import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppHomePage from "./pages/home-page";
import AppFooter from "./components/footer";
import AppHeader from "./components/header";
import AppAboutUsPage from "./pages/about-us-page";
import AppContactUsPage from "./pages/contact-us-page";
import AppNotFoundPage from "./pages/not-found-page";
import AppBlog from "./pages/blog";
import AppPartners from "./pages/partners";
import AppVigiLearnPage from "./pages/vigi-learn";
import ScrollToTop from "./helpers/scrollToTheTop";
import AppBlogSingle from "./pages/blog-single";
import AppEduCollectPage from "./pages/edu-collect";

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  return (
    <Router>
      <ScrollToTop />

      <div className="App">
        <AppHeader></AppHeader>
        <Switch>
          <Route path="/" exact component={AppHomePage}></Route>
          <Route path="/partners" component={AppPartners}></Route>
          <Route path="/blog" component={AppBlog}></Route>
          <Route path="/blog-details" component={AppBlogSingle}></Route>

          <Route path="/about" component={AppAboutUsPage}></Route>
          <Route path="/contact" component={AppContactUsPage}></Route>
          <Route path="/vigi-learn" component={AppVigiLearnPage}></Route>
          <Route path="/edu-collect" component={AppEduCollectPage}></Route>
          <Route path="" component={AppNotFoundPage}></Route>
        </Switch>
        <AppFooter></AppFooter>
      </div>
    </Router>
  );
};

export default App;
