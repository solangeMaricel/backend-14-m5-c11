<h1 align="center">API REST - ASTRO DB</h1>

![App scheme](https://i.ibb.co/Jrj3Yk0/rest-schema.png)

Desarrollar una API REST que permita interactuar con un sistema de registro de datos astrológicos de las personas. Al interactuar con la API se debe poder realizar las acciones detalladas más abajo, algunas de las cuales necesitan autorización especial. Para controlar el acceso a los recursos privados vamos a usar el sistema de autenticación por tokens.

#### CRUD DE USUARIOS

    -   Registrar un nuevo usuario
    -   Login y autenticación por token tipo SHA512.
    -   Obtener todos los usuarios sin mostrar datos sensibles.
    -   Modificar datos de un usuario (NECESARIO ESTAR LOGUEADO).
    -   Eliminar usuario (NECESARIO ESTAR LOGUEADO).
    -   Logout (NECESARIO ESTAR LOGUEADO).

#### CRUD DE CARTAS NATALES

    -   Obtener todas las cartas.
    -   Crear una carta (NECESARIO ESTAR LOGUEADO).
    -   Actualizar una carta (NECESARIO ESTAR LOGUEADO).
    -   Eliminar una carta (NECESARIO ESTAR LOGUEADO).

Pueden armar la estructura de carpetas del proyecto de esta forma:

-   src/

    -   controllers
        -   user-controller.ts
        -   chart-controller.ts
    -   database
        -   users.json
        -   charts.json
    -   models
        -   user-model.ts
        -   chart-model.ts
    -   routes
        -   chart-router.ts
        -   user-router.ts
    -   index.ts

**charts.json** es una collection cuyos objetos tienen la forma:

`{`
`"id": "ac838afb-d8bb-4a40-8984-761152735c77",`
`"name": "Matias Arno",`
`"birthdate": "7-3-1997",`
`"time": 2123,`
`"asc": 214,`
`"sun": 347,`
`"moon": 332,`
`"mercury": 344,`
`"venus": 341,`
`"mars": 180`
`}`

**users.json** es también una collection, sus objetos son así:

`{`
`"username": "Juan",`
`"email": "juan@ibm.com.uk",`
`"token": "3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2",`
`}`

<h1 align="center">PASOS para arrancar el proyecto</h1>

1. Crear la estructura de carpetas
2. Instalar y configurar las dependencias necesarias
    - Iniciar el proyecto con NPM
    - Instalar dependencias de desarrollo y principales
3. Iniciar el repo de git y hacer el primer commit
4. Desarrollar el endpoint para obtener la info general de la API.
5. Configurar los scripts, testearlos y hacer el deploy a Render (crear un nuevo servicio WEB).
6. Desarrollar el endpoint de login
7. Desarrollar el middleware para autorizar usuarios
8. Desarrollar el endpoint para crear una nueva carta natal
9. Validar los datos con zod
10. Probar el endpoint con datos reales: una alumna comparte su puerto y el resto le hace solicitudes con sus datos natales hasta completar la DB con los datos de todas
11. Commitear los cambios y pushear a GH.
12. Completar el resto de los endpoints

<h1 align="center">BUENAS PRÁCTICAS | ¿Cómo crear APIs robustas?</h1>
<h3 align="center">Artículo producido por EDTEAM</h3>

Las APIs son como traductores que permiten que las aplicaciones se puedan comunicar entre sí, como cuando quieres iniciar sesión en un sitio web con tu cuenta de Gmail. Sin embargo, las APIs también pueden ser vulnerables a ataques y en este blog, te daré 5 consejos para que crees APIs más robustas.

#### Válida todas las entradas.

No confíes en el frontend (no significa que el frontend no lo haga bien). Recuerda que tus API pueden ser consumidas adicional a tu frontend desde otros servicios, así que es importante que valides todas las entradas en tu API.

#### Controla adecuadamente los errores.

Es importante que controles todos los errores que pueden ocurrir dentro de la validación o dentro del proceso de tu API. Incluso, durante las excepciones que se generan. Asegúrate de devolverle el mensaje correcto a tu cliente para que él sepa qué fue lo que falló. Procura evitar devolver esos errores generales, que solo dicen “ups, ocurrió un error”, y mejor indícale a tu cliente exactamente qué falló.

Por ejemplo:

1- La edad debe ser un número entero positivo.

2- El ID tiene que ser del formato x, y, z.

3- El nombre no puede estar vacío.

#### Realiza test a tus API.

Cuando creas test automatizados, puedes validar tanto las entradas correctas, como las incorrectas.

Por ejemplo, ¿qué quieres devolver cuando los datos de entrada están bien? ¿Y qué quieres devolver cuando estén mal? Tienes que validar que ambos escenarios estén correctos.

El día de mañana, si necesitas refactorizar, porque necesitas mejorar la eficiencia y legibilidad del código, los test te ayudarán a asegurarte de que el funcionamiento de tu API siga siendo el correcto.

#### Haz un control de versiones.

En el momento que tu API sufre un cambio muy fuerte, es importante que no dañe el funcionamiento actual. No importa que más adelante depreques las versiones anteriores, es decir, que saques del mercado las versiones a las que ya no le darás soporte; sino que lo importante de todo esto, es que en ese control de versiones, el cliente puede seguir utilizando la versión que necesita mientras tú le avisas cuándo la vas a desactivar.

#### Monitoriza tu API.

Y por último, revisa los logs de tu sistema, ya sea en un sistema especializado o en la salida estándar o en un archivo, los logs son muy buenos. ¿Por qué? Esto se debe a que te podrán decir cómo está funcionando tu API, incluso si devuelve datos que no son los esperados.

De esta forma, tú puedes utilizar herramientas como: CloudWatch, ElasticLogs, Grafana o Loki, para ver cómo se está comportando tu API. Con los logs, podrás ver qué es lo que se está haciendo en cada uno de los procesos.

Sin embargo, si no tienes la habilidad (aún), de utilizar estas herramientas, o algunas similares, entonces puedes escribir todos los logs en un archivo y revisarlos a mano.

Lo importante es que puedas ver qué es lo que está sucediendo con tu API, así que monitorízalos.

Ahora que tomaste nota de estos consejos, es momento de ponerlos en práctica. ¿Sientes que te faltan cosas por aprender? No te preocupes, en EDteam tenemos una decena de cursos exclusivos sobre APIs para que encuentres el que mejor se adapte a ti y comiences a dominar este recurso tan valioso.
