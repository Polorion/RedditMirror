import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { tokenThunk } from "../store/MainReducer";

const useGetToken = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tokenThunk());
  }, []);
};

export default useGetToken;
