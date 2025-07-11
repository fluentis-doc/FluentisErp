---
title: Almacenes
sidebar_position: 15
---

:::important ¿Para qué sirve? 
La tabla Almacenes de Fluentis permite crear, modificar y gestionar los registros de los almacenes, asegurando un manejo eficaz de los materiales dentro del sistema.  
En la tabla, los usuarios encuentran una interfaz intuitiva que incluye herramientas de búsqueda y filtros para un acceso rápido a los datos. Es posible insertar nuevos almacenes especificando al menos el código y la descripción, además de detalles como el área de gestión y la fecha de finalización de validez.     
Cada almacén puede asignarse a un sitio productivo específico, facilitando así la organización de los recursos y el monitoreo de las existencias.    
La conexión de cada almacén a un determinado sitio productivo representa un valor añadido, ya que permite optimizar la distribución de los recursos y mejorar la planificación logística empresarial.
:::

La tabla se encuentra en la ruta **Tablas > Logística > Almacenes**.

La tabla de inserción de almacenes es necesaria para poder utilizar correctamente todas las funciones del sistema que tienen que ver con el manejo de materiales.

La tabla permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de almacenes**

El formulario consta de un área de filtro y una de resultados. Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **Buscar** para visualizar los resultados dentro de la cuadrícula de resultados.

**Inserción de almacén**

Para poder insertar nuevos códigos es necesario hacer clic en la primera fila vacía de la cuadrícula o presionar el botón **Inserción**.  
Para el nuevo registro se deben completar al menos los campos obligatorios requeridos por el programa: el Código del **Almacén** y la **Descripción**.

#### Campos específicos 

- **Sitio de Producción**: indica el [Sitio de Producción](/docs/configurations/parameters/production/production-orders-parameters/production-site) al que pertenece el almacén;  
- **Área de gestión**: indica el [Área de gestión](/docs/configurations/tables/logistics/management-area) a la que pertenece el almacén;  
- **Fecha de validez final**: indica la fecha de finalización de validez del almacén;  
- **Nombre en clave** y **Nombre de la empresa**: indican el destino (tomado de la *Base de datos de contactos*).  

Para cada almacén es posible insertar los respectivos **Centros de costo** y/o **Centros de ingresos**. 

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common). 