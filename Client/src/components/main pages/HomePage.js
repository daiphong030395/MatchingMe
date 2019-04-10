import React from 'react';
import AdminCardSection1 from './sectionsHome/ListPostsPage';
import Banner from './sectionsHome/Banner';
import Footer from './sectionsHome/Introduce';

const HomePage =  () => {
  // window.location.reload();
  return (
    <React.Fragment>
      <Banner />
      <AdminCardSection1 />
      <Footer />
    </React.Fragment>
  )
}

export default HomePage;