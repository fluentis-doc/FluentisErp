---
title: Configuración XML (Impostazione XML)
sidebar_position: 10
---

La tabla se abre a través de la ruta **Tablas > Compras > Facturación de compras (Tabelle > Acquisti > Fatturato acquisti)** y se utiliza para determinar las propiedades de una solicitud.  
Esta tabla es necesaria para configurar los datos para importar un listado de proveedor descargándolo de un sitio web en formato XML.

Los campos presentes son:

**Cuenta-Subcuenta/Descripción de subcuenta (Conto-Sottoconto/Descrizione sottoconto)**: cuenta y subcuenta del cliente para el cual importar el listado.  

**indirizzo**: dirección de donde descargar el archivo XML.  

**utente**: usuario para conectarse a la dirección.  

**password**: contraseña para conectarse a la dirección.  

**Servicio Web (Webservice)**: ruta donde encontrar los datos a importar y el archivo.  

**informazione iniziale**: información inicial desde donde comenzar para la creación del archivo XML: offset=”1”.  

**tag iniziale**: define la etiqueta inicial para reconocer el inicio de los archivos XML: listado.  

**riga iniziale**: define la fila desde la cual comenzar con la importación: artículos.  

**pagina iniziale**: define la página inicial: page.  

**dimensione pagina**: define el tamaño de las páginas: offset=”500”.  

**classe**: clase a utilizar para importar los artículos.  

**um**: UM a utilizar para importar los artículos.  

**marca**: marca a utilizar para importar los artículos.  

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).