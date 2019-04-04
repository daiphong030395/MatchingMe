import React from 'react';
import { Row } from 'mdbreact';
import AdminCardSection1 from './sectionsHome/AdminCardSection1';
import AdminCardSection2 from './sectionsHome/AdminCardSection2';
import TableSection from './sectionsHome/TableSection';
// import BreadcrumSection from './sectionsHome/BreadcrumSection';
import ChartSection1 from './sectionsHome/ChartSection1';
import ChartSection2 from './sectionsHome/ChartSection2';
// import MapSection from './sectionsHome/MapSection';
import ModalSection from './sectionsHome/ModalSection';
import Main from './sectionsHome/Banner';

const HomePage =  () => {
  // window.location.reload();
  return (
    <React.Fragment>
      {/* <BreadcrumSection /> */}
        <Main />
      <AdminCardSection1 />
      <ChartSection1 />
      <TableSection />
      <ChartSection2 />
      <Row className="mb-4">
          {/* <MapSection /> */}
          <ModalSection />
      </Row>
      <AdminCardSection2 />
    </React.Fragment>
  )
}

export default HomePage;