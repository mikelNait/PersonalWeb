# Mikel Nait — Personal Web

Web personal con estética romana, hecha con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com).

## Páginas

| Ruta         | Contenido                                                   |
| :----------- | :---------------------------------------------------------- |
| `/`          | Presentación y tecnologías                                  |
| `/portfolio` | Empleos, proyectos y galería de miniaturas de Warhammer     |
| `/redes`     | Contacto y redes sociales                                   |

## Editar contenido

- **Empleos:** `src/data/jobs.ts`
- **Proyectos:** `src/data/projects.ts`
- **Miniaturas:** añadir fotos a `src/assets/miniatures/` (el nombre del archivo es el pie de foto; un número inicial como `01-` solo sirve para ordenar)

## Comandos

| Comando           | Acción                                        |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Instala las dependencias                      |
| `npm run dev`     | Servidor local en `http://localhost:4321`     |
| `npm run build`   | Genera la web en `./dist/`                    |
| `npm run preview` | Previsualiza la versión generada              |
