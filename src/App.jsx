import './index.css'
import { TableroTareas } from './components/TableroTareas'
import { FormularioTarea } from './components/FormularioTarea'
import { useState } from 'react'
// ¡Bienvenido a tu primer día!
// Esta es la aplicación principal. Ahora mismo renderiza el Tablero de Tareas.
// No necesitas tocar mucho aquí, el problema está dentro de los componentes.

export default function App() {
    const [tareas, setTareas] = useState([]);
    const [completada, setCompletada] = useState(false);
    const agregarTarea = (texto) => {
        const nuevaTarea = {
            id: tareas.length + 1,
            texto: texto,
            completada: completada,
        };
        setTareas([...tareas, nuevaTarea]);
    };

    const FechaActual = new Date();
    const DiaActual = FechaActual.getDate();
    const MesActual = FechaActual.getMonth() + 1;
    const AnioActual = FechaActual.getFullYear();

    const fechaFormateada = `${DiaActual}/${MesActual}/${AnioActual}`;
    const toggleCompletada = (id) => {
        const tarea = tareas.find(t => t.id === id);
        tarea.completada = !tarea.completada;
        setTareas([...tareas]); 
    };
    const eliminarTarea = (id) => {
        setTareas(tareas.filter(t => t.id !== id));
    };
    return (
        <>
            <div className="App-Tareas">
                <TableroTareas
                    tareas={tareas}
                    agregarTarea={agregarTarea}
                    toggleCompletada={toggleCompletada}
                    eliminarTarea={eliminarTarea}
                />
                <FormularioTarea
                    agregarTarea={agregarTarea}
                />
            </div>
        </>
    )
}