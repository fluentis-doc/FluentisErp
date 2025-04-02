---
title: workstation
sidebar_position: 3
---

:::important ¿Para qué sirve? (A cosa serve)
La introducción a las estaciones de trabajo del MES de Fluentis es fundamental para comprender cómo gestionar eficazmente los recursos y las operaciones productivas dentro del entorno laboral. El sistema MES ofrece una tabla dedicada a la codificación de las estaciones de trabajo, útil para insertar, modificar o eliminar registros. A través de una interfaz intuitiva, los usuarios pueden buscar estaciones de trabajo mediante un área de filtro, y al ingresar nuevos códigos, es necesario proporcionar el código y la descripción de la estación de trabajo.

Cada estación de trabajo puede asociarse a diferentes recursos, dependiendo de las necesidades operativas. Por ejemplo, si se prevé una asociación con múltiples recursos, al iniciar el MES, será responsabilidad del usuario seleccionar manualmente el recurso deseado. Por el contrario, en caso de una asociación con un solo recurso, el sistema carga automáticamente todas las fases operativas ya iniciadas de ese recurso, simplificando el flujo de trabajo y mejorando la eficiencia.
:::

La tabla permite gestionar la codificación de los diferentes tipos de *Estaciones de trabajo* (Workstation).

Permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de Estaciones de Trabajo (Ricerca Workstation)**

El formulario se compone de un área de filtro y otra de resultados. Una vez que se han configurado todos los filtros deseados, basta con hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.

**Inserción de Estaciones de Trabajo (Inserimento Workstation)**

Para poder insertar nuevos códigos, es necesario hacer clic en la primera fila vacía de la cuadrícula principal o presionar el botón **nuovo** e ingresar los siguientes datos:      
- **codice**: indica el nombre del PC que funcionará como estación de trabajo;        
:::note Nota
Es posible obtener el nombre del PC ejecutando el comando *hostname* desde el símbolo del sistema. 
:::         
- **descrizione**: indica la descripción del nombre del PC que funcionará como estación de trabajo.     

En la cuadrícula secundaria (debajo de la principal), es posible asociar los *recursos* que podrán trabajar en cada estación de trabajo.
- En el caso de que solo se asocie un recurso a una estación de trabajo (por ejemplo, de tipo centro de trabajo), al iniciar el MES se cargará automáticamente ese recurso y todas las fases ya iniciadas asociadas a él.      
Ejemplo de estación de trabajo dedicada a un centro de trabajo.        
- En el caso de que se asocien múltiples recursos a una estación de trabajo (por ejemplo, de tipo centro de trabajo), al iniciar el MES no se cargará ninguno de ellos y el usuario podrá seleccionar solo uno de los recursos asociados.      
Ejemplo de estación de trabajo dedicada a un departamento donde se realizarán las declaraciones de todos los centros de trabajo de ese departamento en particular.     
- En el caso de que no se asocie ningún recurso a una estación de trabajo, al iniciar el MES no se cargará ninguno de ellos y el usuario podrá seleccionar cualquier recurso ingresado en la tabla [Recursos de producción (Risorse di produzione)](/docs/production/mes/production-resources).       
Ejemplo de estación de trabajo dedicada a un preparador que declarará sus actividades para todos los centros de trabajo.      

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).