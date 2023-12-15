import React from 'react'
import "../componenets/loader.css"
// import { Alert, AlertIcon } from '@chakra-ui/react'
const Error = (props) => {
  return (
    <div>
    
      <div className="container">

<h1>404</h1>
<p><strong>There is a site error.</strong></p>

<p>
  {props.mesge},
  <strong>  OR  </strong>Check out your internet connection 
</p>

    </div>
</div>
  )
}

export default Error
