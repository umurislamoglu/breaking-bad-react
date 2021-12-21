import { useState, useEffect } from "react";
import axios from "axios";

const useStarData = (id) => {
  const [star, setStar] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  async function fetchStarData(id) {
    try {
      let starData = await axios.get(
        `https://www.breakingbadapi.com/api/characters/${id}`
      );
      setStar(starData.data[0]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id > 0) {
      fetchStarData(id);
    }
  }, [id]);

  return {
    star,
    error,
    loading,
  };
};

export default useStarData;
