import React from 'react'
import { render } from '@testing-library/react';
import CityInfo from './CityInfo' // SUT subjet under testing (objeto del testeo)
import '@testing-library/jest-dom/extend-expect'; //add the custom jest matchers from jest-dom by importing

test("CytiInfo render", async ()=> {

    const city = 'Medellin';
    const country = 'Colombia'

    //render: renderiza todo el componetes y retorna una serie de funciones
    //la cual vamos a usar findAllByAll
    const { findAllByRole } = render (<CityInfo city={city} country={country}></CityInfo>)

    //Assert
    //findByRole nos va buscar (en este caso) todos los componentes que sean 
    //"heading" => H1 H2 H3... 
    //el resultado es un array de componentes (cityCountryComponets)
    const cityCountryComponets = await findAllByRole("heading");


    //cuando el test es correcto ? 
    //Definicion: cuando el primer elemento (heading) encuentre la ciudad medellin
    //y cuando el segundo elemento ecuentre el pais colombia
    expect(cityCountryComponets[0]).toHaveTextContent(city)
    expect(cityCountryComponets[1]).toHaveTextContent(country)
});