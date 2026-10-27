Imprime respuesta.status y luego JSON.stringify(datos, null, 2). ¿Dónde viene el texto de la IA? ¿Qué información trae el campo usage?

El texto de la ai esta dentro de un objeto y su vez guardado en uno de los indieces llamado content .Usage guarda difrenetes nuemros como de tiempo


2.Rompe el programa a propósito y anota qué ocurre en cada caso:
*Cambia una letra de tu clave en .env. ¿Qué status y qué mensaje recibes?
me arrojo un status 401, con un mensaje de "Invalid API Key"

*Escribe mal el nombre del modelo en MODEL. ¿Qué status recibes?
Me arrojo un error 404 , con un mensaje que dice basicamnete , que elmkodel de open ai que especificamos no existe o que no tenemos aceso a el

Escribe mal la API_URL. ¿Qué error aparece y por qué no hay status?
Me arroja un error 404 , que dice que no se reconoce la url y me piede de favor checkar la url o ver la documentacion