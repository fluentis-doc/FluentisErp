---
title: installazione
sidebar_position: 2
---

Para poder instalar Fluentis MES es necesario seguir los siguientes pasos:

- crear un archivo de texto que contenga las siguientes cadenas:     

```csharp
<?xml version="1.0" encoding="utf-8" ?>
<Settings applicationStyle="Fluent"></Settings>
```

- renombrar el archivo recién creado a "MobileSettings.xml";        
- copiar el archivo "MobileSettings.xml" dentro de la carpeta que contiene la WPF de Fluentis;  
- crear un nuevo acceso directo al ejecutable de Fluentis (que se encuentra en la carpeta donde se guardó el archivo en el paso anterior);  
- acceder a las propiedades del acceso directo creado y modificar la ruta de *destino* añadiendo al final lo que ya está presente un espacio y la siguiente cadena: **settingsFile="MobileSettings.xml"**  
- ejecutar **Fluentis MES** a través del acceso directo.