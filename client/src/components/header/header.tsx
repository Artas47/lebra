import { Box, colors, Typography } from '@material-ui/core'
import React from 'react'

const Header = () => {
    return (
        <Box style={{backgroundColor: colors.blueGrey[300], height: '5rem'}} width="100%">
            <Typography variant='h3'>Lebra</Typography>
        </Box>
    )
}

export default Header
