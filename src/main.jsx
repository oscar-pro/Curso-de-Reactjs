import React from 'react'
import { createRoot } from 'react-dom/client'
import { HeaderPag1 } from './header-pag1.jsx'
import { CuerpoPag1 } from './cuerpo-pag1.jsx'
createRoot(document.getElementById('root')).render(
  <>
    <HeaderPag1
    home={'Home'}
    about={'Abaout'}
    services={'Services'}
    contact={'Contact'}   
    ></HeaderPag1>

    <CuerpoPag1
    title={'Welcome to Our Website'}
    description={'We are glad to have you here. Explore our services and offerings.'}
    buttonText={'Learn More'}
    ></CuerpoPag1>
  </>,
)
