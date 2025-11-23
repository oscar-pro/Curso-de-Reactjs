import React, { useState } from 'react';
import { FormularioTarea } from './FormularioTarea.jsx';
import { TarjetaTarea } from './TarjetaTarea.jsx';

export function TableroTareas() {
    const FechaActual = new Date();
    const DiaActual = FechaActual.getDate();
    const MesActual = FechaActual.getMonth() + 1;
    const AnioActual = FechaActual.getFullYear();
    const fechaFormateada = `${DiaActual}/${MesActual}/${AnioActual}`;
    const completada = false;
    const [tareas, setTareas] = useState([]);
        const agregarTarea = (texto) => {
        const nuevaTarea = {
            id: tareas.length + 1,
            texto: texto,
            completada: completada,
            fecha: fechaFormateada
        };
        setTareas([...tareas, nuevaTarea]);
    };
    const toggleCompletada = (id) => {
        const t = tareas.find(tarea => tarea.id === id);
        const arrayTareas = [...tareas];
        const index = arrayTareas.findIndex(tarea => tarea.id === id);
        const TableroTareas = arrayTareas[index];   
        TableroTareas.completada = !TableroTareas.completada;
        const nuevasTareas = arrayTareas.map(t => {
            if (t.id === id) {
                t.completada = !t.completada;
                return t;
            }
            return t;
        });
        setTareas(nuevasTareas);
    };
    const eliminarTarea = (id) => {
        const nuevasTareas = tareas.filter(tarea => tarea.id !== id);
        setTareas(nuevasTareas);
    };
    
    return (
        <div className="TableroTareas">
            <h1>📋 Tablero de Equipo</h1>
            <FormularioTarea alAgregar={agregarTarea} />
            <div>
                {tareas.map((tarea) => (
                    <TarjetaTarea
                        tarea={tarea}
                        alCompletar={toggleCompletada}
                        alEliminar={eliminarTarea}
                        key={tarea.id}
                    />
                ))}
            </div>
        </div>
    );
}
