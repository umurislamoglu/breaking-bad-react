import { useState, useEffect } from "react";
import axios from "axios";

const useCastData = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  async function fetchCastData() {
    try {
      let castData = await axios.get("https://www.breakingbadapi.com/api/characters");
      setCast(castData.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchCastData()
  }, [])

  return  {
    cast,
    error,
    loading,

  };
};

export default useCastData;
