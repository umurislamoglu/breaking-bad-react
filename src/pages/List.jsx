import { Container, Grid } from "@mui/material";
import React from "react";
import useCastData from "./../data/useCastData";
import Loading from "../components/loading/Loading";
import Error from "../components/Error";
import StarCard from "../components/StarCard";

const List = () => {
  const { error, cast, loading } = useCastData();
  return (
    <Container sx={{ py: 8 }} maxWidth="xl" >
      <Grid container spacing={4} justifyContent="space-around">
        {error && <Error/>}
        {!error && loading ? (
          <Loading />
        ) : (
          cast.map((actor) => {
            return <StarCard actor={actor} />;
          })
        )}
      </Grid>
    </Container>
  );
};

export default List;
