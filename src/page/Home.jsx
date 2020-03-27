import React from 'react';

// section
import {HomeCover, HomeOverview, HomeMember, HomeContact, Footer,} from 'section';


const Home = () => {
  return (
    <div className="Home">
      <HomeCover />
      <HomeOverview />
      <HomeMember />
      <HomeContact />
      <Footer />
    </div>
  );
}

export default Home;