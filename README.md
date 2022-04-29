# proyecto-1-web

Proyecto 1 de Sistemas y Tecnologías Web, replicación de una página web.
La pagina escogida fue [Epic Games Store](https://store.epicgames.com/es-ES/).
**No se utilizó `create-react-app` o similar.**

Roberto Francisco Rios Morales, 20979.

## Tecnologias implementadas:

- [x] README bien formateado :tada:
- [x] El único archivo html del proyecto es index.html
- [x] React implementado
- [x] Babel implementado
- [x] Webpack implementado
- [x] Eslint implementado
- [x] Sass implementado
- [x] loaders para imagenes implementados
- [ ] animaciones o transiciones iguales
- [ ] Server Side Rendering implementado
- [x] Aplicacion en el puerto indicado con nginx

Para aprender a formatear bien el README se buscó en github [cómo hacerlo](https://docs.github.com/es/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) y se implementaron las reglas. Luego, al configurar el react+webpack+babel se obtuvieron varios errores con html-webpack-plugin que se resolvieron con ayuda de [este tutorial](https://www.youtube.com/watch?v=deyxI-6C2u4&t=1s&ab_channel=TraversyMedia). Se recurrio a los documentos de babel para averiguar [como configurar los presets](https://babeljs.io/docs/en/babel-preset-env). Respecto a Sass, es lo mejor, ayudo mucho ya que al insepccionar la pagina de epic y vi los colores y los guarde en variables, tambien ayudo para el estilo que tienen algunos componentes y a utilizar una herencia para las cosas que van adentro de los componentes, increible herramienta, muy recomendada, no vuelvo a usar css jaja. Eslint solo se uso para ponerle a todos los archivos `.jsx` en vez de `.js` y usé reglas airbnb. Respecto a los loaders, solo se utilizo uno para los svg. Lo unico que me falto fueron las animaciones, personalmente me hubiera gustado agregarle mas contenido a la pagina e implementar lo de server side rendering.

### Referencias

- https://www.youtube.com/watch?v=deyxI-6C2u4&t=1s&ab_channel=TraversyMedia
- https://es.reactjs.org/docs/components-and-props.html
- https://store.epicgames.com/es-ES/
- https://docs.github.com/es/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
- https://babeljs.io/docs/en/babel-preset-env
