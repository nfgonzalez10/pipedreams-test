import React from "react";
import List from "../components/List/List";
import TransitionComponent from "../components/Transition/Transition";
import { TYPE_STAFF } from "../context/StaffContext";
import Header from "../components/Header/Header";
import Spinner from "@atlaskit/spinner";
import prototypes from "prop-types";
import LayoutCenterPage from "./LayoutCenterPage";

const StaffPage = ({
  days,
  day,
  loading,
  employeeType,
  setCurrentTransition,
}) => {
  return !loading && day ? (
    <>
      <Header day={day} staffType={employeeType} />
      <TransitionComponent
        maxNumberTransition={days?.length - 1}
        sendCurrentValue={(current) => {
          setCurrentTransition(current);
        }}
      >
        <List />
      </TransitionComponent>
    </>
  ) : (
    <LayoutCenterPage>
      <Spinner size={"xlarge"} />
    </LayoutCenterPage>
  );
};

StaffPage.propTypes = {
  employeeType: prototypes.oneOf([TYPE_STAFF.WAITERS, TYPE_STAFF.COOKS])
    .isRequired,
  days: prototypes.array,
  day: prototypes.string,
  loading: prototypes.bool,
  setCurrentTransition: prototypes.func,
};

export default StaffPage;
