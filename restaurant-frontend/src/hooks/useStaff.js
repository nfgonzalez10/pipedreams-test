import { useEffect, useState } from "react";
import { fetchStaff } from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function useStaff() {
  const navigation = useNavigate();
  const [loading, setLoading] = useState(true);
  const [staff, setStaff] = useState({});
  const [days, setDays] = useState([]);

  const getLongestWeek = ({ cooks, waiters }) => {
    return Object.keys(cooks).length > Object.keys(waiters).length
      ? Object.keys(cooks)
      : Object.keys(waiters);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const staffResponse = await fetchStaff();
        setStaff(staffResponse);
        setDays(getLongestWeek(staffResponse));
      } catch (error) {
        console.log("🚀 ~ file: App.js:16 ~ fetchData ~ error:", error);
        navigation("error");
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return [staff, days, loading];
}
