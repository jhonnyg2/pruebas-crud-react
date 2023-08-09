import React, { useState } from 'react';

function Ingresar({ onDataUpdate }) {
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [secretpin, setSecretpin] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const usuario = {
            fullname,
            username,
            password,
            secretpin,
        };

        fetch('http://localhost/projects/pdologinapi/api.php?apicall=createusuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setMessage('Error al crear el usuario');
                } else {
                    setMessage('Usuario creado correctamente');
                    setFullname('');
                    setUsername('');
                    setPassword('');
                    setSecretpin('');
                    onDataUpdate(); // Llama a la función de actualización de datos en el componente padre
                }
            })
            .catch(error => {
                setMessage('Error en la solicitud');
                console.log(error);
            });
    };

    return (
        <div className="ingresar-container">
            <h2>Ingresar Elemento</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fullname">Nombre Completo:</label>
                    <input
                        type="text"
                        id="fullname"
                        value={fullname}
                        onChange={e => setFullname(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="username">Usuario:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="secretpin">Recordatorio:</label>
                    <input
                        type="text"
                        id="secretpin"
                        value={secretpin}
                        onChange={e => setSecretpin(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Crear Usuario</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Ingresar;