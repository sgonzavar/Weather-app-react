import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';

const CityInfo = ({city, country}) => {
    return (
        <div>
            <Typography>{city}</Typography>
            <Typography>{country}</Typography>
        </div>
    )
}

CityInfo.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
}

export default CityInfo 
