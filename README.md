


# Country Info App

Esta aplicación web te permite obtener información sobre un país utilizando una API SOAP. La API acepta códigos ISO de dos letras para proporcionar detalles sobre el país correspondiente.

## Ejecución de la Aplicación

```bash
# Clonar el Repositorio
git clone https://github.com/iRizok/API-SOAP-paises.git
cd Country-Info-App

# Instalar Dependencias (asegúrate de tener Node.js y npm instalados)
npm install cors-anywhere

# Ejecutar el Servidor
node server.js
```

El servidor se ejecutará en `http://localhost:8080`. Puedes acceder a la aplicación en tu navegador visitando esta URL.

## Uso de la API

- Ingresa el código ISO de dos letras del país en el cuadro de entrada.
- Haz clic en el botón "Obtener Información".
- Asegúrate de ingresar códigos ISO válidos (por ejemplo, "US" para Estados Unidos, "CA" para Canadá).

## Notas Importantes

- La API solo acepta códigos ISO de dos letras válidos. Verifica los códigos ISO antes de realizar consultas.
- Asegúrate de tener una conexión a Internet activa para que la aplicación funcione correctamente.

¡Disfruta explorando la información sobre diferentes países con Country Info App!
