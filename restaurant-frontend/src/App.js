import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import StaffPage from "./pages/StaffPage";
import StaffContext, { TYPE_STAFF } from "./context/StaffContext";
import useStaff from "./hooks/useStaff";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const location = useLocation();
  const history = useNavigate();
  const [currentTransition, setCurrentTransition] = useState(0);
  const [staffType, setStaffType] = useState(TYPE_STAFF.COOKS);

  const [staff, days, loading] = useStaff();

  useEffect(() => {
    if (location.pathname === "/") {
      window.location = staffType;
    }
  }, [location]);

  const day = String(days[currentTransition]);
  const paths = ["/", TYPE_STAFF.COOKS, TYPE_STAFF.WAITERS];
  const valueProvider = useMemo(
    () => ({
      staff,
      currentDay: currentTransition,
      days,
      typeStaff: staffType,
      switchStaff: (newStaff) => {
        setStaffType(newStaff);
        history(newStaff);
      },
    }),
    [currentTransition, staffType, staff, days]
  );

  return (
    <StaffContext.Provider value={valueProvider}>
      <Routes>
        {paths.map((path) => {
          return (
            <Route
              key={`${path}`}
              path={path}
              element={
                <StaffPage
                  day={day}
                  days={days}
                  loading={loading}
                  setCurrentTransition={(current) =>
                    setCurrentTransition(current)
                  }
                  employeeType={path === "/" ? TYPE_STAFF.COOKS : path}
                />
              }
            />
          );
        })}
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </StaffContext.Provider>
  );
}

export default App;
