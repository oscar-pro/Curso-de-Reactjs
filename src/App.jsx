import './index.css'
import { TableroTareas } from './components/TableroTareas'
import { useState } from 'react'

export default function App() {
    const [tareas, setTareas] = useState([]);
    return (
        <>
            <div className="App-Tareas">
                <TableroTareas/>
            </div>
        </>
    )
}