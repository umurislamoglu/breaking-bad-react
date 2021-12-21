import React from "react";
import { Container, Typography, Paper , Button} from "@mui/material";
import DetailTypography from './DetailTypography';
import Occupations from "./Occupations";

const StarMegaCard = ({star, navigate}) => {

  function handleClick() {
    navigate("/");
  }

  return (
    <Container maxWidth="lg" sx={{my:5 , display:'flex' , flexDirection:"column" , alignItems: 'center' ,  justifyContent:"center"}}>
      {star && <Paper elevation={4} sx={{p:5}}>
        
        <img src={star.img} style={{height:700}} loading="lazy" alt={star.name}/>
        <Typography variant = "h3" sx={{my:3}}>
            {star.name}
        </Typography>
        <DetailTypography title="Nickname" value={star.nickname}/>
        <DetailTypography title="Portrayed by" value={star.portrayed}/>
        <DetailTypography title="Birthday" value={star.birthday}/>
        <DetailTypography title="Status" value={star.status}/>
        <Occupations occupationList={star.occupation}/>
       <Container sx={{display:"flex" , justifyContent:"center"}}>
        <Button variant="outlined" color="warning" sx={{px:10 , mt:2 , mx:"auto"}} onClick={handleClick}>Back</Button>
        </Container>
        </Paper>
   }
        
        
   
    </Container>
  );
};

export default StarMegaCard;
