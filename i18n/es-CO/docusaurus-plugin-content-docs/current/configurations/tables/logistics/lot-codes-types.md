---
title: Tipo de código de lote
sidebar_position: 26
---

:::important ¿Para qué sirve? 
La tabla Tipo de Código de Lote de Fluentis representa una herramienta fundamental para la personalización y la gestión de los códigos de lote utilizados en la logística y el seguimiento de productos. Esta tabla permite definir varios tipos de código de lote según las necesidades específicas de la empresa, con el objetivo de optimizar las operaciones de gestión de materiales y garantizar una correcta identificación de los lotes.

Dentro de esta tabla, es posible introducir nuevos códigos de lote, especificando tanto un código identificativo como una descripción asociada. Además, se pueden configurar parámetros como el valor inicial del número progresivo y la gestión de caracteres alfabéticos, permitiendo una mayor flexibilidad en la composición de los códigos de lote. Es importante señalar que cada tipo de código debe estar asociado al registro del artículo para garantizar una correcta integración durante los procedimientos de creación automática del lote.

La configuración de estos códigos de lote no solo facilita el control y seguimiento, sino que también es esencial en contextos de gestión multi-almacén, donde la trazabilidad de las existencias se vuelve fundamental. Los usuarios pueden navegar a través de diferentes secciones de la tabla para definir en detalle las características, asociaciones y progresivos de los lotes, contribuyendo a una gestión más eficiente y precisa de los materiales dentro de la empresa.
:::

La tabla se encuentra en la ruta **Tablas > Logística > Tipo de código de lote**.

En esta tabla es posible codificar los *Tipos de código de lote* personalizándolos según las necesidades.

### Búsqueda de Códigos de Lote 

El formulario consta de un área de filtro y de una de resultados. Una vez establecidos los filtros deseados, solo se debe hacer clic en el botón **Buscar** para visualizar los resultados en el área de resultados.

### Inserción de Códigos de Lote

Para poder introducir nuevas codificaciones, es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **Nuevo**.

Es necesario ingresar el **código** y la **descripción** del tipo de código de lote, habilitar o no el indicador **Llenar el valor progresivo** para completar los valores faltantes en la numeración, e ingresar el valor inicial del progresivo numérico en el campo **Iniciar valor progresivo** y el valor alfabético en el campo **Iniciar valor carácter**. Obviamente, el primero será el valor inicial del **numero progressivo**, mientras que el segundo será el valor inicial usado para los **Caracteres alfabéticos**.

El **Tipo de código de lote** debe luego estar vinculado al *anagrafica articolo* en el campo correspondiente y homónimo ubicado en la pestaña [Lotes y número de serie](/docs/erp-home/registers/items/create-new-item), de modo que en los procedimientos que crean automáticamente el código de lote para el artículo en cuestión, el lote se genere según las reglas establecidas aquí.

Debajo de la tabla principal, hay tres pestañas:  
- **Detalles del tipo de código de lote**  
- **Detalles de la definición del tipo de código de lote progresivo**  
- **Detalles del tipo de código de lote clave progresiva**    

### Detalles del Tipo de Código de Lote 

En la tabla *Código de lote predeterminado*, se encuentran todos los valores que se pueden utilizar para la composición del lote que estamos creando, que son:

> *Clase*: indica la clase del artículo;    
> *Código*: indica el código del artículo;     
> *Característica*: indica la característica del registro del artículo;     
> *Cat. de producto*: indica la categoría mercantil del registro del artículo;    
> *Tipo de artículo*: indica el tipo de artículo del registro del artículo;    
> *Variante*: indica la variante del artículo;    
> *Número progresivo*: es un progresivo de tipo numérico;          
> *Caracteres Alfabéticos*: es un progresivo de tipo alfabético, a diferencia del *Número progresivo* que es numérico;        
> *Día de la Fecha de Inserción*: indica el día de la fecha de inserción;    
> *Mes de la Fecha de Inserción*: indica el mes de la fecha de inserción;    
> *Año de la Fecha de Inserción*: indica el año de la fecha de inserción;    
> *Día de la Fecha de Caducidad*: indica el día de la fecha de caducidad;    
> *Mes de la Fecha de Caducidad*: indica el mes de la fecha de caducidad;    
> *Año de la Fecha de Caducidad*: indica el año de la fecha de caducidad;     
> *Tipo de Lote*: indica el tipo de lote del artículo;     
> *Asociación Año Letra*: indica el valor asociado al año en la tabla [Asociación año - letra](/docs/configurations/tables/general-settings/year-letter-association);    
> *Asociación Mes Letra*: indica el valor asociado al mes en la tabla [Asociación mes - letra](/docs/configurations/tables/general-settings/month-letter-association);    
> *Apodo de Proveedor*: indica el apodo presente en el registro del proveedor;          
> *Número de Nota de Entrega de Compra*: indica el número del recibo de compra;     
> *Número de Factura de Compra*: indica el número de la factura de compra;    
> *Lote de proveedor*: indica el número del lote del proveedor.    

Cada uno de estos, según las necesidades, debe ser luego trasladado a la tabla *Detalles del tipo de código de lote* mediante el uso de los botones correspondientes en la barra de menú. 
Para cada entrada añadida, es posible definir la *Longitud* y el *Carácter de relleno*.

#### Botones específicos  
> **Mover: Predeterminado -> Detalle**: permite agregar una de las entradas presentes en la tabla *Código de lote predeterminado* a la tabla *Detalle del tipo de código de lote*. Este botón se habilita solo después de haber seleccionado una fila en la tabla *Código predeterminado* del tab *Detalle del tipo de código de lote*;          
> **Mover: Detalle -> Predeterminado**: permite eliminar una de las entradas presentes en la tabla *Detalle del tipo de código de lote* trasladándola de nuevo a la tabla *Código de lote predeterminado*. Este botón se habilita solo después de haber seleccionado una fila en la tabla *Detalle del tipo de código de lote* del tab *Detalle del tipo de código de lote*;               

#### Detalles de Tipo de Código de Lote Progresivo Definición

En esta pestaña es posible definir cuáles de las entradas presentes en la tabla *Código de lote predeterminado* deben componer la raíz del código de lote, es decir, aquella parte del código que permanecerá fija mientras el progresivo varía. En este caso no es posible seleccionar las entradas *Número progresivo* y *Caracteres Alfabéticos* porque, al ser progresivos, varían continuamente, mientras que es posible seleccionar todas las demás entradas.

#### Botones específicos  
> **Mover: Predeterminado -> Definición Progresivo**: permite agregar una de las entradas presentes en la tabla *Código de lote predeterminado* a la tabla *Definición progresiva*. Este botón se habilita solo después de haber seleccionado una fila en la tabla *Código predeterminado* del tab *Detalles de la definición del tipo de código de lote progresivo*;          
> **Mover: Definición Progresivo -> Predeterminado**: permite eliminar una de las entradas presentes en la tabla *Definición Progresivo* trasladándola de nuevo a la tabla *codice predefinito*. Este botón se habilita solo después de haber seleccionado una fila en la tabla *Definición Progresivo* del tab *Detalles de la definición del tipo de código de lote progresivo*;  

#### Detalles del tipo de código de lote clave progresiva

En esta pestaña se visualizan todos los valores de los últimos progresivos relacionados con cada raíz del código.

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funciones, botones y campos comunes](/docs/guide/common).