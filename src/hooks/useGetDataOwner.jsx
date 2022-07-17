import { useEffect, useState } from "react";
import axios from "axios";

const useGetDataOwner = (token) => {
  const [data, setData] = useState({});
  useEffect(() => {
    if (token !== "") {
      axios
        .get(`https://oauth.reddit.com/api/v1/me`, {
          headers: { Authorization: `bearer ${token}` },
        })
        .then((resp) => {
          console.log(resp.data.icon_img.split("?")[0]);
          setData({
            name: resp.data.name,
            img: resp.data.icon_img.split("?")[0],
          });
        })
        .catch(console.log);
    }
  }, [token]);
  return data;
};

export default useGetDataOwner;
