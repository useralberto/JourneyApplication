# Propuesta de la Estructura inical del proyecto Journey Application.

## Utilidades necesarias para inicializar el proyecto
- **Node Js ^12v**
- **npm ^6v**

## Herramientas implementas

- **Sass**
- **HTML 5**
- **Webpack**
- **Bootstrap 5**

## Estructura de directorios y archivos
````bash
├── crea-tus-metas.html
├── index.html
├── mix-manifest.json
├── package.json
├── package-lock.json
├── progreso.html
├── src
│   ├── js
│   │   ├── app.js
│   │   └── components
│   │       └── components.js
│   └── scss
│       ├── app.scss
│       ├── components
│       │   └── components.scss
│       ├── _utilities.scss
│       └── _variables.scss
├── web
│   ├── css
│   │   └── app.css
│   └── js
│       ├── app.js
│       └── app.js.LICENSE.txt
└── webpack.mix.js

````

## Flujo de trabajo del proyecto

- **Scss**:
-- Es flujo de trabajo de estilos (css) se realizará en el directorio `src / scss`  en el archivo `app.scs` es el archivo principal y padre en él se hace las importaciones de los componentes para ser compilados y minificados con webpack.
-- En el archivo `src/scss/components.scss`  se importaron todos los componentes que se iran creando con el desarrollo del frondend.

- **Js**:
-- El flujo de trabajo de los script se realizará en el directorio `src/js` en el archivo `app.js`  en él se importaran todos los scripts de los componentes creados e importados del archivo del directorio `src/js/components/components.js`.

## comandos a utilizar:
- `npm install` comando para instalas los paquetes necesarios del proyecto.

- `npm run watch` comando util para el proceso de desarrollo.

- `npm run prod` comando para el minificado del los archivos** app.scss y app.js**
