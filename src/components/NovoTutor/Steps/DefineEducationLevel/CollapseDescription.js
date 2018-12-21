import React from 'react'
import { Collapse, Typography, Grid, } from '@material-ui/core'

const CollapseDescription = props => {
    return (
        <Collapse in={props.checked === props.name}>
            <Typography variant="h6" style={{ fontWeight: 'bold', marginTop: 10 }}>
                {props.name}
            </Typography>
            <Typography>
                {props.details.description}
            </Typography>
            <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
                {props.details.subtitle}
            </Typography>
            <Grid container direction="row" justify="flex-start">
                <img style={{ maxWidth: '25%', width: 230, height: 230 }} src={props.img} alt="" />
                <div style={{ maxWidth: '75%' }}>
                    <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
                        - Pedagogical Model
                    </Typography>
                    <Typography>
                        {props.details.pedagogical}
                    </Typography>
                    <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
                        - Evaluation Methods
                    </Typography>
                    <Typography>
                        {props.details.evaluation}
                    </Typography>
                    <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
                        - Reports
                    </Typography>
                    <Typography>
                        {props.details.reports}
                    </Typography>
                </div>
            </Grid>
        </Collapse>
    )
}
export default CollapseDescription