import React, { useContext } from "react";
import Comment from "@atlaskit/comment";
import Avatar from "@atlaskit/avatar";
import StaffContext from "../../context/StaffContext";
import PageHeader from "@atlaskit/page-header";

const List = () => {
  const { currentDay, staff, typeStaff, days } = useContext(StaffContext);
  const dataDay = staff?.[typeStaff]?.[days?.[currentDay]];

  return (
    <div className="list">
      {dataDay?.length > 0 ? (
        dataDay?.map((employee, index) => {
          return (
            <Comment
              key={index}
              avatar={<Avatar name={employee} />}
              content={<p>{employee}</p>}
            />
          );
        })
      ) : (
        <PageHeader>{`No employees assigned today`}</PageHeader>
      )}

      <style jsx="true">
        {`
          .list {
            margin: 2rem;
          }
        `}
      </style>
    </div>
  );
};

export default List;
