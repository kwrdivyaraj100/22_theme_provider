import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

function Test() {
    const theme = useTheme();
    console.log(theme);
    return (
        <Box>
<Typography variant='h1' color="primary">
    Hello World
</Typography>
        </Box>
        

    )
}

export default Test;