const path = require('path');

// Carga el archivo .env
try {
    process.loadEnvFile(path.join(__dirname, '..', '.env'));
} catch (error) {
    // Usamos las variables de entorno que ya existan
}

async function preguntarIA(mensajeSistema, mensajeUsuario) {

    if (!process.env.GROQ_API_KEY) {
        throw new Error('Falta configurar GROQ_API_KEY en el archivo .env');
    }

    if (!process.env.API_URL) {
        throw new Error('Falta configurar API_URL en el archivo .env');
    }


    const respuesta = await fetch(process.env.API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
            model: process.env.MODEL,
            messages: [
                { role: 'system', content: mensajeSistema },
                { role: 'user', content: mensajeUsuario }
            ]
        }),
        signal: AbortSignal.timeout(30000)
    });
        

    const datos = await respuesta.json();

    if (!respuesta.ok) {
        const mensaje = datos.error?.message || 'Error desconocido de la API';
        throw new Error(`Error ${respuesta.status}: ${mensaje}`);
    }

    return datos.choices[0].message.content;

}

module.exports = { preguntarIA };