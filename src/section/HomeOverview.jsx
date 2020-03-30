import React from 'react';
import {SectionTitle} from 'component';

const HomeOverview = () => {
  return (
    <section className="HomeOverview">
      <div className="con">
        <SectionTitle title = {'we are'} link = {'/study'} />
      </div>
    </section>
  );
}

export default HomeOverview;