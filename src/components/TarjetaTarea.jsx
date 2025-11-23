import React from 'react';
import './TargetaTarea.css';

export function TarjetaTarea({ tarea, alCompletar, alEliminar }) {
   const fechaFormateada = (fecha) => {
        const fechaFormateada = new Date(fecha);
        const dia = fechaFormateada.getDate();
        const mes = fechaFormateada.getMonth() + 1;
        const anio = fechaFormateada.getFullYear();
        return `${dia}/${mes}/${anio}`;
    };

    const id = tarea.id;
    const texto = tarea.texto;
    const completada = tarea.completada;
    const fecha = tarea.fecha;

    const fechaFormateadaTarea = fechaFormateada(fecha);

    const manejarCompletar = (evento) => {
        evento.preventDefault();
        alCompletar(id);
    };

    const manejarEliminar = (evento) => {
        evento.preventDefault();
        alEliminar(id);
    };  
    
    return (
        <div style={{
            border: '2px solid #ccc',
            padding: '10px',
            margin: '10px',
            backgroundColor: '#ffffff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div>
                <span style={{ textDecoration: tarea.completada == true ? 'line-through' : 'none' }}>
                    {tarea.texto}
                </span>

                <div style={{ fontSize: '0.8em', color: '#666' }}>
                    Creado: {fechaFormateadaTarea}
                </div>
            </div>



            <div>
                <button onClick={manejarCompletar}>
                    {tarea.completada ? 'Desmarcar' : 'Completar'}
                </button>
                <button onClick={manejarEliminar}>
                    Eliminar
                </button>
            </div>
        </div>
    );
}
