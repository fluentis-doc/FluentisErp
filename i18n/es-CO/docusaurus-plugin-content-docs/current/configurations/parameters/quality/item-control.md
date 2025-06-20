---
title: Parámetros de Control de Artículos
sidebar_position: 1
---

Los parámetros se encuentran en la ruta **Parámetros > Calidad > Parámetros de Control de Artículos**.

Los datos presentes en esta gestión son utilizados para proponer información en las gestiones:  
- **Hojas de datos**;  
- **Planes de control**;  
- **Control de artículos**;  
- **Certificados de Análisis**.  

#### Botón específico

**Guardar**: permite almacenar la información modificada.

## General 

En esta pestaña es posible ingresar datos que se propondrán por defecto en los documentos del módulo *Control de artículos*.  

### Tipos de prueba   

En este expandible es posible ingresar datos para proponer en los *Tipos de prueba*.  
En el expandible se puede ingresar:  
- **Tipo de valor**: *Tipo de valor* a proponer al ingresar un *Tipo de prueba*.  
- **Tipo de límite**: *Tipo de límite* a proponer al ingresar un *Tipo de prueba*.  

### Hojas de datos 

En este expandible es posible ingresar datos que se propondrán en las *Hojas de datos*.  
En el expandible se puede ingresar:  
- **Tipo de ficha técnica**: *Tipo de ficha técnica* a proponer al ingresar una *Hoja de datos*.  
- **Responsable**: *Empleado* a proponer como responsable al ingresar una *Hoja de datos*.  
- **Tipo de descargo de responsabilidad en artículos**: *Tipo de declaración* a proponer al ingresar un *Artículo asociado* de una *Hoja de datos*.  
- **Tipo de aviso legal en impresión**: *Tipo de declaración* a proponer en *Tipo de declaración para imprimir en caso de que el artículo no lo tenga* en *Impresión de hoja de datos*.  

### Planes de control  

En este expandible es posible ingresar datos que se propondrán en los *Planes de control*.  
En el expandible se puede ingresar:  
- **Tipo de plan de control**: *Tipo de plan de control* a proponer al ingresar un *Plan de control*.  
- **Responsable**: *Empleado* a proponer como responsable al ingresar un *Plan de control*.  

### Certificados de análisis  

En este expandible es posible ingresar datos que se propondrán en los *Certificados de análisis*.  
En el expandible se puede ingresar:  
- **Tipo de certificado**: *Tipo de certificado de análisis* a proponer al ingresar un *Certificado de análisis*.  
- **Responsable**: *Empleado* a proponer como responsable al ingresar un *Certificado de análisis*.  

## Control de artículos   

En esta pestaña es posible ingresar datos:  
> - para proponer por defecto en el *Control de artículos*;  
> - para definir varias coloraciones para reconocer los diferentes estados de un *Control*;  
> - para establecer parámetros de gestión;  
> - búsqueda y asociación automática de los *Planes de control* que se deben asociar al *Control de artículo*.  

- **Habilitar la detección de múltiples valores**: indica la habilitación de la posibilidad de detectar múltiples valores para cada prueba, en todos los tipos de documento.  
- **Aprobación automática de los valores detectados**: indica la *Aprobación* automática de la *Prueba* al detectar los *Valores* y la atribución automática del *Resultado*.  
- **Propuesta de resultado negativo**: es una lista de valores predeterminados por el sistema que indican la metodología de atribución de no conformidad de la *Prueba*.  
> La metodología se considera solo para la detección de *Pruebas* de tipo *Numérico* en la *Detección de múltiples valores*. Los valores predeterminados son:  
> - *al primer valor detectado no conforme*;  
> - *según la media aritmética de los valores detectados (solo valores numéricos)*.  
> 
- **Tipo de resultado negativo**: es la propuesta del *Tipo de resultado* en caso de *Pruebas* no conformes.  
- **Tipo de resultado positivo**: es la propuesta del *Tipo de resultado* en caso de *Pruebas* conformes.  

### Tipos de documento para la importación 

En este expandible/lista es posible ingresar datos a considerar durante la *Importación de artículos a controlar* y para proponer en el *Control de artículo*.  
La tabla contiene los tipos de documentos gestionados por el *Control de artículos*.  
Son tipos predefinidos por el sistema y no es posible ingresar nuevos o eliminarlos. Los valores predefinidos son:  
> - *Buena recepción*;  
> - *Nota de Entrega de Compra*;  
> - *Factura de Compra*;  
> - *Declaración de Producción*;  
> - *Fase de Orden de Producción*;  
> - *Devolución del subcontratista*;  
> - *Manejo de carga*.  

En la lista, para cada tipo de documento, es posible ingresar:  
- **Def.**: indica el tipo de documento propuesto en los filtros de búsqueda; se puede seleccionar un solo tipo o ninguno.  
- **Detalle del artículo**: es una lista de valores predeterminados por el sistema que identifican el tipo de detalle que se debe controlar del *Artículo* para el tipo de documento específico. Los valores predeterminados son:  
> - *Ninguno* - la línea *Artículo* considerada no tomará ningún dato de detalle;  
> - *Lote* - la línea *Artículo* considerada tomará como máximo detalle el *Lote*;  
> - *S.N.* - la línea *Artículo* considerada tomará como máximo detalle el *Número de serie*;  
> - *Unidad de Carga* - la línea *Artículo* considerada tomará como máximo detalle la *Unidad de Carga*.  
> 
- **Mult.**: indica si habilitar la *Detección de múltiples valores* en el *Control de artículos* para el tipo de documento específico.  
> Para ser considerado, debe indicarse el parámetro general *Habilitar la detección de múltiples valores*.  
- **Tipo de Control de Artículos**: *Tipo de control* a proponer al ingresar un *Control de artículos* para el tipo de documento específico.  
- **Tipo de plan de control**: durante la *Importación de artículos a controlar*, excluyendo los tipos de documento de producción (*Declaración de Producción* y *Fase de Orden de Producción*), es el *Tipo de plan de control* que tiene mayor prioridad para la búsqueda del *Plan de control* que se debe asociar al *Control de artículos*.  
- **Tipo de Control de Elemento de Descripción**: es la descripción del *Tipo de control*.  
- **Descripción del tipo de plan de control**: es la descripción del *Tipo de plan de control*.  

### Colores de las filas del Control de artículo   

En esta lista es posible definir varias coloraciones para reconocer los diferentes estados de un *Control de artículo*.  
Esos colores se aplican en el *Filtro de los Controles de artículo*. La lista se compone de la siguiente información:  
- **Tipo**: es el estado del *Control de artículo* al que asociar las coloraciones.  
> La tabla contiene valores predeterminados por el sistema y no es posible ingresar nuevos, eliminarlos o modificarlos. Los valores predeterminados son:  
> - *Elementos no sujetos a control*;  
> - *Controles sin un Plan de Control*;  
> - *Control de ítems con múltiples métodos de prueba*;  
> - *Controles no detectados*;  
> - *Controles con resultado insatisfactorio*;  
> - *Controles ya validados*.  
> 
- **Color de fondo**: es el color aplicado al fondo de la línea del *Control de artículo* del estado específico.  
- **Color de fuente**: es el color aplicado al texto de la línea del *Control de artículo* del estado específico.  

### Personalización de datos por tipo de documento   

En esta lista es posible agregar *Propiedades* de la tipo de documento de origen en la lista de datos del *Control de artículo*.  
La tabla contiene los mismos tipos de documentos mencionados en **Tipos de documento para la importación**.  
Son tipos predefinidos por el sistema y no es posible ingresar nuevos o eliminarlos.  
Se prevén 5 informaciones por cada tipo de dato: *Texto*, *Sí/No*, *Entero*, *Decimal*, *Fecha*.  
A través de un doble clic en la celda se puede seleccionar la *Propiedad* deseada del documento.  

:::tip *Ejemplo:*  
Para la tipo de documento *Factura de Compra* es posible agregar el valor de la *Propiedad* de encabezado *Su referencia*.  
A través del doble clic del mouse en la columna *Texto 01* se ejecuta la Ayuda sobre las propiedades de línea del documento *Factura de Compra*.  
Expanda la referencia *Factura *, seleccione la propiedad *Su referencia* y presione el botón *Seleccionar*.  
En la celda donde se realizó la selección aparecerá la propiedad *YourReference*.  
:::

### Personalización de encabezados de columnas para el tipo de documento 

En esta lista es posible indicar el *Título de la propiedad*, correspondiente a las *Propiedades* seleccionadas de la lista **Personalización de datos por tipo de documento** y que aparecerán en la lista de datos del *Control de artículo*.  
La tabla contiene los mismos tipos de documentos mencionados en **Tipos de documento para la importación**.  
Son tipos predefinidos por el sistema y no es posible ingresar nuevos o eliminarlos.  
Se prevén 5 informaciones por cada tipo de dato: *Texto*, *Sí/No*, *Entero*, *Decimal*, *Fecha*.  
A través de un doble clic en la celda se puede seleccionar la *Entrada del diccionario* deseada para mostrar como encabezado.  

:::tip *Ejemplo:*  
Para la tipo de documento *Factura de Compra* es posible indicar el encabezado correspondiente al ejemplo mencionado anteriormente para el valor de la *Propiedad* de encabezado *Su referencia*.  
A través del doble clic del mouse en la columna *Texto 01* o escribiendo manualmente la *Entrada del diccionario*, ingrese *Su referencia*.  
:::

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).