import { createContext } from "react";
export const TYPE_STAFF = {
  WAITERS: "waiters",
  COOKS: "cooks",
};
const StaffContext = createContext({
  staff: {},
  currentDay: 1,
  typeStaff: TYPE_STAFF.WAITERS,
  days: [],
  switchStaff: () => {},
});

export default StaffContext;
