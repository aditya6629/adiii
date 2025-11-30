import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function App(){
  const [items, setItems] = useState([])
  useEffect(()=>{
    axios.get('/api/items/nearby').then(res => setItems(res.data)).catch(()=>{})
  },[])
  return (
    <div style={{padding:20,fontFamily:'sans-serif'}}>
      <h1>Smart Leftover Logistics - Demo</h1>
      <p>This demo app calls <code>/api/items/nearby</code></p>
      <ul>
        {items.map(i=> <li key={i.id}>{i.title} — {i.quantity} {i.unit}</li>)}
      </ul>
    </div>
  )
}
