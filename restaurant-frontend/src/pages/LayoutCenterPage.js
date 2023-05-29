import React from "react";
import proptypes from "prop-types";

const LayoutCenterPage = ({ children }) => {
  return (
    <>
      <div className="layoutCenterChild">{children}</div>
      <style jsx="true">
        {`
          .layoutCenterChild {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        `}
      </style>
    </>
  );
};

LayoutCenterPage.propTypes = {
  children: proptypes.node.isRequired,
};

export default LayoutCenterPage;
