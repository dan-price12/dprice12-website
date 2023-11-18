import {Grid, Paper, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

type ServiceGridItemProps = {
    serviceName: string;
    serviceDescription: string;
    serviceIcon: React.ReactNode;
};

export default function ServiceGridItem(props: ServiceGridItemProps) {
    const {serviceName, serviceDescription, serviceIcon} = props;

    const StyledPaper = styled(Paper)(({theme}) => ({
        ...theme.typography.body2,
        padding: theme.spacing(2),
        maxWidth: 450,
        color: theme.palette.text.primary,
        height: 550,
        margin: 'auto'
    }));

    const StyledTypography = styled(Typography)(({theme}) => ({
        ...theme.typography.h4,
        fontWeight: 500,
        textAlign: 'center'
    }));

    return (
        <Grid item xs={12} md={6} justifyContent={'center'}>
            <StyledPaper elevation={5}>
                <StyledTypography>{serviceName}</StyledTypography>
                {serviceIcon}
                <Typography variant='body2'>{serviceDescription}</Typography>
            </StyledPaper>
        </Grid>
    );
}
