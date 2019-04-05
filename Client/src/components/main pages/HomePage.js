import React from 'react';
import AdminCardSection1 from './sectionsHome/ListPostsPage';
import Banner from './sectionsHome/Banner';
import Footer from './sectionsHome/Introduce';

const HomePage =  () => {
  // window.location.reload();
  return (
    <React.Fragment>
      {/* <BreadcrumSection /> */}
      <Banner />
      <AdminCardSection1 />
      {/* <ChartSection1 /> */}
      {/* <TableSection /> */}
      <Footer />
      {/* <ChartSection2 /> */}
      {/* <Row className="mb-4"> */}
          {/* <MapSection /> */}
          {/* <ModalSection /> */}
      {/* </Row> */}
      {/* <AdminCardSection2 /> */}
    </React.Fragment>
  )
}

export default HomePage;