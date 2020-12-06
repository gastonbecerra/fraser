import React, {useState, useEffect} from 'react'
import { getFirestore } from '../firestore';

function ListFrases(props) {

  const [oraciones, setOraciones] = useState('');

useEffect(()=> {
  const db = getFirestore();
  const items = db.collection("oraciones")
//   .where('clasificacion','==', 0)
  .limit(10);

items
  .get()
  .then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setOraciones(data)
  });
},[])

if(oraciones.length > 0){
  return oraciones.map((p, i) => (
    <span onClick={()=>props.func(p.id)}>
    {p.id}|
    </span>
    
  ))      
}   
  return <div style={{textAlign: 'left', marginLeft: '5vw'}}>
      'Loading...'
  </div> 

}

export default ListFrases;
