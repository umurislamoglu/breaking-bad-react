import React from 'react'
import { Container , Typography } from '@mui/material'

const Error = () => {
    return (
        <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          An Error Occured
        </Typography>
        </Container>
    )
}

export default Error
