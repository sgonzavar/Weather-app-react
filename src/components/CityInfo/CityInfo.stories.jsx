import React from 'react'
import CityInfo from './CityInfo'

//font 
import 'typeface-roboto'

export default {
    title: 'CityInfo',
    component: CityInfo,
};

export const CityExample = () => <CityInfo city="Medellin" country="Colombia"></CityInfo>

