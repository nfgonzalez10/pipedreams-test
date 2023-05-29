import React, { useContext } from "react";
import { capitalLetter } from "../../utils/formaters";
import PageHeader from "@atlaskit/page-header";
import Button from "@atlaskit/button";
import PropTypes from "prop-types";
import StaffContext, { TYPE_STAFF } from "../../context/StaffContext";

const Header = ({ day }) => {
  const { switchStaff, typeStaff } = useContext(StaffContext);
  const getAnothertype = Object.values(TYPE_STAFF).find(
    (type) => type !== typeStaff
  );
  return (
    <div className="header">
      <PageHeader>{`${capitalLetter(day)} - ${capitalLetter(
        typeStaff
      )}`}</PageHeader>
      <Button
        appearance="primary"
        onClick={() => switchStaff(getAnothertype)}
      >{`Switch to ${capitalLetter(getAnothertype)}`}</Button>
      <style jsx="true">{`
        .header {
          display: flex;
          width: 90%;
          justify-content: space-between;
          align-items: center;
          margin: 2rem;
        }
      `}</style>
    </div>
  );
};

Header.propTypes = {
  day: PropTypes.string.isRequired,
};

export default Header;
