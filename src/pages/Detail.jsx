import React from "react";
import useStarData from "./../data/useStarData";
import { useParams } from "react-router-dom";
import Error from '../components/Error';
import Loading from '../components/loading/Loading';
import StarMegaCard from "../components/StarMegaCard";
import { useNavigate  } from "react-router-dom";


const Detail = () => {
  let { id } = useParams();
  const { star, error, loading } = useStarData(id);

  let navigate = useNavigate();

  return (
    <>
      {error && <Error />}
      {!error && loading ? (
        <Loading />
      ) : ( <StarMegaCard star={star} navigate={navigate} />
      )}
    </>
  );
};

export default Detail;
