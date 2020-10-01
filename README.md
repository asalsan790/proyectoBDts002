# Objetivos
Menú
Entrada de teclado
Crear Objetos
Almacenarlos en BD

# Pasos
## Creamos el proyecto node.js
*npm init --yes*
## Instalamos typescript como dependencia de desarrollo
*npm install typescript -D*
## Creamos el proyecto typescript
*npx tsc --init*
## Hacemos los cambios en tsconfig.json
*"target": "es6",*
*"outDir": "./dist",*
*,"exclude": [ "node_modules"]* 

## Creamos el .gitignore con
*dist*
*node_modules*