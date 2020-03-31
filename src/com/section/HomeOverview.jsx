import React from 'react';
// component
import {SectionTitle} from 'com/component';

const HomeOverview = () => {
  return (
    <div className="HomeOverview">
      <div className="con">
        <SectionTitle title = "We Are - " link = {'/study'}/>
      </div>
    </div>
  );
}

export default HomeOverview;