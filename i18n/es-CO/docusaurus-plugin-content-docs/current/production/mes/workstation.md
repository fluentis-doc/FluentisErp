---
title: Workstation
sidebar_position: 3
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
La introducción a las workstation del MES de Fluentis es fundamental para comprender cómo gestionar eficazmente los recursos<!-- risorse --> y las operaciones productivas dentro del entorno de trabajo. El sistema MES ofrece una tabla dedicada a la codificación<!-- codifica --> de las workstation, útil para insertar, modificar o eliminar registros. A través de una interfaz intuitiva, los usuarios pueden buscar workstation mediante un área de filtro, y al insertar nuevas codificaciones se debe proporcionar el código y la descripción de la workstation.

Cada workstation puede asociarse a diferentes recursos<!-- risorse -->, según las necesidades operativas. Por ejemplo, si se prevé una asociación a varios recursos<!-- risorse -->, en la fase de inicio del MES será responsabilidad del usuario seleccionar manualmente el recurso<!-- risorsa --> deseado. Por el contrario, en el caso de una asociación a un solo recurso<!-- risorsa -->, el sistema carga automáticamente todas las fases operativas ya iniciadas de ese recurso<!-- risorsa -->, simplificando el flujo de trabajo y mejorando la eficiencia.
:::

La tabla permite gestionar la codificación<!-- codifica --> de los diferentes tipos de *Workstation*.

Permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de Workstation<!-- Ricerca Workstation -->**<!-- Ricerca Workstation -->

El formulario consta de un área de filtro y una de resultados. Una vez configurados todos los filtros deseados, será suficiente hacer clic en el botón **Buscar<!-- Ricerca -->** para visualizar los resultados dentro de la cuadrícula de resultados.

**Inserción de Workstation<!-- Inserimento Workstation -->**

Para poder insertar nuevas codificaciones es necesario hacer clic en la cuadrícula principal en la primera fila vacía o presionar el botón **Nuevo<!-- Nuovo -->** e ingresar los siguientes datos:      
- **Código<!-- Codice -->**: indica el nombre del PC que funcionará como workstation;        
:::note Nota
Es posible obtener el nombre del PC ejecutando el comando *hostname* desde el símbolo del sistema. 
:::         
- **Descripción<!-- Descrizione -->**: indica la descripción del nombre del PC que funcionará como workstation.     

En la cuadrícula secundaria (debajo de la principal), es posible asociar los *recursos<!-- risorse -->* que podrán trabajar en cada workstation.
- En caso de que para una workstation se asocie solo un recurso<!-- risorsa --> (por ejemplo, de tipo centro de trabajo<!-- centro di lavoro -->), en la fase de inicio el MES cargará automáticamente ese recurso<!-- risorsa --> y todas las fases ya iniciadas asociadas a él.      
Ejemplo de workstation dedicada a un centro de trabajo<!-- centro di lavoro -->.        
- En caso de que para una workstation se asocien varios recursos<!-- risorse --> (por ejemplo, de tipo centro de trabajo<!-- centro di lavoro -->), en la fase de inicio del MES no se cargará ninguno de ellos y el usuario podrá seleccionar solo uno de los recursos<!-- risorse --> asociados.      
Ejemplo de workstation dedicada a un departamento donde se declararán todas las actividades de los centro de trabajo<!-- centro di lavoro --> de ese departamento en particular.     
- En caso de que, en cambio, para una workstation no se asocie ningún recurso<!-- risorsa -->, en la fase de inicio del MES no se cargará ninguno de ellos y el usuario podrá seleccionar cualquiera de los recursos<!-- risorse --> ingresados en la tabla [Recursos de producción<!-- Risorse di produzione -->](/docs/production/mes/production-resources).       
Ejemplo de workstation dedicada a un responsable de herramientas que declarará sus actividades para todos los centro de trabajo<!-- centro di lavoro -->.      

Para todo aquello no detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes<!-- Funzionalità, pulsanti e campi comuni -->](/docs/guide/common).