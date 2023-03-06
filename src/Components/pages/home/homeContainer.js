import React from 'react'
import HomeComponent from './homeComponent'
import '../../../Assets/style/pages/home.css'
import { Box } from '@mui/material'

const HomeContainer = () => {

    const optionsList = [
        {
            value: 'high todo',
            option: 'Haut'
        },
        {
            value: 'middle todo',
            option: 'Moyen'
        },
        {
            value: 'low todo',
            option: 'Bas'
        },
    ]

    return (
        <Box className="home">
            <HomeComponent optionsList={optionsList} />
        </Box>
    )
}

export default HomeContainer