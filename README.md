# Proyecto GrowPro Challenge - Guía de Inicio Rápido

Este es un proyecto Vite básico con configuraciones predefinidas para desarrollo, construcción y otras tareas. 
Aquí encontrarás una guía detallada sobre cómo levantar el proyecto y realizar diferentes operaciones comunes.

## Requisitos previos

Asegúrate de tener instalado Node.js en tu sistema antes de comenzar.

- [Node.js](https://nodejs.org/) (v14 o superior)

## Pasos para levantar el proyecto
Sigue estos pasos para levantar el proyecto Vite en tu entorno de desarrollo:

# Clona el repositorio
```
git clone https://github.com/cristianmdev/growpro-challenge
```

# Navega hasta el directorio del proyecto
```
cd <directorio_de_donde_se_almaceno>/growpro-challenge
```

# Instala las dependencias
```
npm install
```

## Scripts relevantes disponibles

A continuación, se enumeran los scripts disponibles para este proyecto:

```
[dev] Corre un ambiente de desarrollo 
[build] Compilación del código
[preview] Prevista de una compilacion de producción (depende de un build previo)
```

Puedes ejecutar los scripts utilizando el siguiente comando:

```
npm run <nombre_del_script>
```

Recuerda reemplazar `<nombre_del_script>` con el nombre del script que deseas ejecutar.

¡Listo! Ahora estás listo para comenzar a trabajar en el proyecto Vite. ¡Disfruta de tu experiencia de desarrollo!



------------------

## Apartado challenge 
| 

|

|

¿ Por que elegiste esa arquitectura ?
Busque que sea simple y justa para lo buscado, al verla se entienda que es lo que contiene cada una, me habria gustado darle mas forma y separar mas pero hay un tiempo para el challenge y no queria excederlo

¿ Los patrones de diseño ?
Busque en algunos casos algun adaptador para que me permita rapidamente convertir los datos mas a las ui desde un model tal vez si requiere alguna operacion con una entidad utilitaria 
Realice algunos servicios al inicio enfocado en generar un carrito y con eso poder aprovecharlos mas pero en detalle el challenge apunta a una confirmacion y guardado en storage quedaba fuera el carrito

¿ En que invertiste mas tiempo ?
En los patrones, diseño responsive y conseguir los datos de las bicis + fotos.

¿ Por que elegiste vite ?
Suelo utilizar webpack 5, y hacer mis configuraciones a mano, pero para el challenge me parecia apropiado arrancar mas rapido con vite sabiendo que tenia sus pre configuraciones para esto ya que en webpack se puede pero tiene mas config que aplicar.

¿ Por que elegiste jotai y no redux ?
Trabaje con jotai y recoil ultimamente con los atomos me encuentro con una estructura mas libre y optima es simple su uso y su poder es grande dependiendo de las app, en este caso opte por jotai-form para los formularios anteriormente los habia echo mas a atomFamily y combinaciones de logica en otros proyectos en este me encontre que la parte ts de jotai-form fue un poco mas extensa de lo esperado pero encontre otras alternativas al final para esto y solucione de igualmente a jotai-form (el que quedo)