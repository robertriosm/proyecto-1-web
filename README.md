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
- [ ] Aplicacion en el puerto indicado con nginx

Para aprender a formatear bien el README se buscó en github [cómo hacerlo](https://docs.github.com/es/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) y se implementaron las reglas. Luego, al configurar el react+webpack+babel se obtuvieron varios errores con html-webpack-plugin que se resolvieron con ayuda de [este tutorial](https://www.youtube.com/watch?v=deyxI-6C2u4&t=1s&ab_channel=TraversyMedia). Se recurrio a los documentos de babel para averiguar [como configurar los presets](https://babeljs.io/docs/en/babel-preset-env). Respecto a Sass, ayudo mucho ya que al insepccionar la pagina de epic y vi los colores y los guarde en variables, tambien ayudo para la configuracion de la animacion que tienen algunos componentes. Eslint solo se uso para ponerle a todos los archivos `.jsx` en vez de `.js` y usé reglas airbnb.

### Referencias

- https://www.youtube.com/watch?v=deyxI-6C2u4&t=1s&ab_channel=TraversyMedia
- https://es.reactjs.org/docs/components-and-props.html
- https://store.epicgames.com/es-ES/
- https://docs.github.com/es/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
- https://babeljs.io/docs/en/babel-preset-env
