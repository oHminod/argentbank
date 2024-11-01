import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../utils/data-access-layer";
import { logout, updateUserData } from "../redux/actions/authActions";
import { RootState } from "../redux/store/store";

type ErrorType =
  | {
      ok?: boolean;
      status?: number;
      message?: string;
    }
  | string
  | null;

const useUserData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorType>(null);
  const token = useSelector((state: RootState) => state.auth.token);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return setError({ status: 404, message: "That page doesn't exist..." });
    }
    const fetchUserData = async () => {
      const userResponse = await getUser(token);

      if (typeof userResponse === "string" || !userResponse.ok) {
        dispatch(logout());
        return setError(userResponse);
      }

      const userData = userResponse.userData;
      if (!userData) {
        dispatch(logout());
        return setError({ status: 404, message: "That page doesn't exist..." });
      }
      dispatch(updateUserData(userData));
    };
    fetchUserData();
    setLoading(false);

    return () => {
      setError(null);
      setLoading(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, error };
};

export default useUserData;
