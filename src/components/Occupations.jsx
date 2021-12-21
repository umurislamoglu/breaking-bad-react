import React from 'react'
import { Typography } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Occupations = ({occupationList}) => {
    return (
        <>
        <Typography variant="h6">Occupations</Typography>
       {occupationList.map((occ,keyVal) => (<Typography key={keyVal} sx={{display:'flex', alignItems:'center' ,}}><ArrowRightIcon     fontSize='small'/>{occ}</Typography>))}
       </>
    )
}

export default Occupations
