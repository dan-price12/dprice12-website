import {Box, Typography} from '@mui/material';

type SubHeaderProps = {
    headerText: string;
    headerSubText: string;
};

export const SubHeader = (props: SubHeaderProps) => {
    const {headerText, headerSubText} = props;

    return (
        <Box>
            <Typography
                color='inherit'
                component='div'
                flexGrow={1}
                fontWeight={500}
                justifyContent='center'
                letterSpacing='.3rem'
                mb={1}
                mt={5}
                textAlign='center'
                variant='h1'
                whiteSpace='normal'
                sx={{
                    textDecoration: 'none'
                }}
            >
                {headerText}
            </Typography>
            <Typography
                color='inherit'
                component='div'
                flexGrow={1}
                fontWeight={500}
                justifyContent='center'
                letterSpacing='.3rem'
                mb={5}
                textAlign='center'
                variant='caption'
                whiteSpace='normal'
                sx={{
                    textDecoration: 'none'
                }}
            >
                {headerSubText}
            </Typography>
        </Box>
    );
};
