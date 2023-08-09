import React, { useEffect, useState } from 'react';

function Consultar({ dataUpdated }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [dataUpdated]); // Agregar dataUpdated como dependencia

    const fetchData = () => {
        fetch('http://localhost/projects/pdologinapi/api.php?apicall=readusuario')
            .then(response => response.json())
            .then(data => setData(data.contenido))
            .catch(error => console.log(error));
    };

    return (
        <div className="consultar-container">
            <h2>Elementos</h2>
            <ul>
                {Array.isArray(data) ? (
                    data.map(item => (
                        <li key={item.id}>
                            <p>Nombre Completo: {item.fullname}</p>
                            <p>Usuario: {item.username}</p>
                            <p>Contraseña: {item.password}</p>
                            <p>Recordatorio: {item.secretpin}</p>
                        </li>
                    ))
                ) : (
                    <p>No hay datos disponibles</p>
                )}
            </ul>
        </div>
    );
}

export default Consultar;
