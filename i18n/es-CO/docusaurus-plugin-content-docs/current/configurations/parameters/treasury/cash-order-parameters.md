---
title: Parámetros de Orden de Efectivo
sidebar_position: 5
---

Los parámetros del módulo de Recibos Bancarios se encuentran en **Parámetros > Tesorería**

En los parámetros relacionados se pueden preconfigurar los elementos predeterminados que se propondrán en los procedimientos del módulo. En particular:

**Ruta para crear formatos de archivo**: Configuración del directorio estándar para la creación del trazado telemático para los recibos bancarios. Se recomienda crear un directorio compartido en red dentro de un servidor, para poder acceder desde todas las estaciones de trabajo del procedimiento.  
**Referencias de clientes**: Es la razón social de la empresa activa que se insertará en el archivo CBI de presentación.  
**Descripción estándar del crédito**: Es posible codificar, utilizando los códigos indicados entre paréntesis, el texto que se insertará en el archivo como descripción del documento de referencia de la emisión de orden de efectivo. Se trata de un texto del tipo Ft. Nr. (2) del (3).  
**Insertar carácter de control final**: Para algunos programas de banca remota, se requiere un salto de línea final en el archivo; configure este indicador si es necesario.  
**Sin referencia para importaciones no pagadas**: En algunos programas de banca remota, se prevé una actualización automática de los registros en función de los datos insertados en el archivo de orden de efectivo. El campo que utilizamos para el procedimiento de importación de impagos puede causar una actualización continua de los registros, lo que se puede evitar con este indicador (lo que implica la no utilizabilidad del procedimiento de importación de impagos).  
**Gestión de segunda descripción**: Con este indicador, la descripción del cliente insertada en el archivo será una combinación de la primera descripción + segunda descripción.