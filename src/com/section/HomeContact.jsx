import React from "react";
import { SectionTitle, ListContact } from "com/component";
const HomeContact = () => {
  return (
    <div className="HomeContact">
      <div className="con">
        <SectionTitle title="Contact -" link="/contact" />

        <ul className="contact">
          <ListContact />
          <ListContact />
        </ul>
      </div>
    </div>
  );
};

export default HomeContact;
