import React from 'react'
import { Card , CardMedia , CardContent , Typography , CardActions , Button  } from '@mui/material'
import { Link } from 'react-router-dom'


const StarCard = ({star}) => {

    const {name , img , char_id} = star

    return (
        <Card elevation={4} sx={{ maxWidth: 345 , mx: 2 , my: 3 ,}}>
        <CardMedia
          component="img"
          height="500"
          image={img}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
                  {name}
          </Typography>
        </CardContent>
        <CardActions>
         <Link to={`/${char_id}`}> <Button size="small">See Details</Button></Link>
        </CardActions>
      </Card>
    )
}

export default StarCard
