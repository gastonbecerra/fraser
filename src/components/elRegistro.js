import React, {useState, useEffect} from 'react'
import { getFirestore } from '../firestore';
import ListaFrases from './listFrases';

function ElRegistro() {
  const [range, setRange] = useState(0)  
  const [oracion, setOracion] = useState('');
  const [oraciones, setOraciones] = useState('');
  const [id, setId] = useState(null);

function  fire(id){
    const db = getFirestore();
    const registro = db.collection('oraciones').doc(id);
    registro.update({clasificacion: range});
    setOracion('')
}

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

function caller(){
    const db = getFirestore();    
    var items;

    if(id === null){
        items = db.collection("oraciones")
        .where('clasificacion','==', 0)
        .limit(1);
        items
        .get()
        .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setOracion(data);
        });  
    }else{
        const item = db.collection("oraciones").doc(id)
        item
        .get()
        .then((snapshot)=>{
            const data = snapshot.data()
            
            setOracion([data])
        })
        
    }
}

useEffect(()=> {
    caller()
},[oracion])

useEffect(()=>{
    caller()
}, [id])

if(oracion){
  return oracion.map((p, i) => (
    <div>
    {p.id}  <br></br> {p.oracion}

    <form>
        <input type="range" defaultValue={5} max={10} min={1} onChange={(e) => setRange(e.target.value)}/>
        <br></br>
        <input onClick={()=> fire(p.id)} type="button" value="Clasificar"/>
    </form>

    <h4>Listado de ids</h4>

        <ListaFrases func={setId}/>
    </div>
    
  ))
}   

  return <div style={{textAlign: 'left', marginLeft: '5vw'}}>
      'Loading...'
  </div> 

}

export default ElRegistro;
