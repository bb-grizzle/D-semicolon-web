import React from "react";
// component
import { SectionTitle } from "com/component";

const HomeOverview = () => {
  return (
    <div className="HomeOverview">
      <div className="con">
        <SectionTitle type={"text"} title="We Are - " link={"/study"} />
        <div className="wrap-text">
          <p className="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
          </p>
        </div>
        <div className="wrap-img"></div>
      </div>
    </div>
  );
};

export default HomeOverview;
