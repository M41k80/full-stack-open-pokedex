#!/bin/bash

echo "Iniciando script de construcción..."

# Instala dependencias
echo "Instalando dependencias..."
if ! npm install; then
  echo "Error: Falló la instalación de dependencias."
  exit 1
fi

# Construye la aplicación
echo "Construyendo la aplicación..."
if ! npm run build; then
  echo "Error: Falló la construcción de la aplicación."
  exit 1
fi

echo "¡Construcción completada con éxito!"