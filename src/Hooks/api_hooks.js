import axios from "axios";
import { useEffect, useState } from "react"



export const useApiHooks = (params, id) => {

  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);

  const getData = async () => {
    try {
      setLoad(true);
      const response = await axios.get('http://www.omdbapi.com', {
        params: {
          apikey: 'ca1bf188',
          ...params
        }
      });
      setLoad(false);
      setData(response.data)

    } catch (err) {
      setErr(false);
    }
  };

  console.log(data);

  useEffect(() => {
    getData();
  }, [id]);

  return [load, data, err];
}