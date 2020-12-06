import React, {useState, useEffect} from 'react'
import { getFirestore } from '../src/firestore';
import ListFrases from '../src/components/listFrases';
import ElRegistro from '../src/components/elRegistro';
function App() {
  
  return (
    <div>
      <h4>El registro</h4>
      <ElRegistro/>
      
    </div>
  )

}

export default App;
