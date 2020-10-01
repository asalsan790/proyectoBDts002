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

## Instalo mongoose
*npm i mongoose*

## Instalo el reconocimiento de tipos
*npm install @types/mongoose*

## Cremos las carpetas scr y doc
## Comando para compilar
*npx tsc -w*


## Creamos el repositorio remoto y los comandos locales son
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/asalsan790/proyectoBDts002.git
git push -u origin main

## Nos vamos a basar en
Proyecto anterior con menú y entrada de teclado
Proyecto anterior con bases de datos

## Creamos la capeta view
Tendrá la estructura de menú y la entrada de teclado