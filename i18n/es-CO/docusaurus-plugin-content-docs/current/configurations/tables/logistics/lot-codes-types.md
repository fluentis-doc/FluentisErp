---
title: tipo codice lotto
sidebar_position: 26
---

:::important ¿Para qué sirve? (A cosa serve)
La tabla Tipos de Código de Lote de Fluentis representa una herramienta fundamental para la personalización y la gestión de los códigos de lote utilizados en la logística y el seguimiento de productos. Esta tabla permite definir varios tipos de código de lote según las necesidades específicas de la empresa, con el objetivo de optimizar las operaciones de gestión de materiales y garantizar una correcta identificación de los lotes.

Dentro de esta tabla, es posible introducir nuevos códigos de lote, especificando tanto un código identificativo como una descripción asociada. Además, se pueden configurar parámetros como el valor inicial del número progresivo y la gestión de caracteres alfabéticos, permitiendo una mayor flexibilidad en la composición de los códigos de lote. Es importante señalar que cada tipo de código debe estar asociado al registro del artículo para garantizar una correcta integración durante los procedimientos de creación automática del lote.

La configuración de estos códigos de lote no solo facilita el control y seguimiento, sino que también es esencial en contextos de gestión multi-almacén, donde la trazabilidad de las existencias se vuelve fundamental. Los usuarios pueden navegar a través de diferentes secciones de la tabla para definir en detalle las características, asociaciones y progresivos de los lotes, contribuyendo a una gestión más eficiente y precisa de los materiales dentro de la empresa.
:::

La tabla se encuentra en la ruta **Tablas > Logística > tipo codice lotto (Tabelle > Logistica > Tipo codice lotto)**.

En esta tabla es posible codificar los *Tipos de código de lote* personalizándolos según las necesidades.

### Búsqueda de Códigos de Lote (Ricerca Codici lotto)

El formulario consta de un área de filtro y de una de resultados. Una vez establecidos los filtros deseados, solo se debe hacer clic en el botón **ricerca** para visualizar los resultados en el área de resultados.

### Introducción de Códigos de Lote (Inserimento Codici lotto)

Para poder introducir nuevas codificaciones, es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **nuovo**.

Es necesario ingresar el **codice** y la **descrizione** del tipo de código de lote, habilitar o no el indicador **riempire valore progressivo** para completar los valores faltantes en la numeración, e ingresar el valor inicial del progresivo numérico en el campo **inizia valore progressivo** y el valor alfabético en el campo **Iniciar valor carácter (Inizio valore carattere)**. Obviamente, el primero será el valor inicial del **numero progressivo**, mientras que el segundo será el valor inicial usado para los **Caracteres alfabéticos (Caratteri alfabetici)**.

El **tipo codice lotto** debe luego estar vinculado al *anagrafica articolo* en el campo correspondiente y homónimo ubicado en la pestaña [Lotes y número de serie (Lotti e serial number)](/docs/erp-home/registers/items/create-new-item), de modo que en los procedimientos que crean automáticamente el código de lote para el artículo en cuestión, el lote se genere según las reglas establecidas aquí.

Debajo de la tabla principal, hay tres pestañas:  
- **dettagli tipo codice lotto**  
- **dettagli tipo codice lotto definizione progressivo**  
- **dettagli tipo codice lotto dei valori chiave progressivi**    

### Detalles del Tipo de Código de Lote (Dettagli tipo codice lotto)

En la tabla *codice predefinito*, se encuentran todos los valores que se pueden utilizar para la composición del lote que estamos creando, que son:

> *classe*: indica la clase del artículo;    
> *matricola*: indica el código del artículo;     
> *caratteristica*: indica la característica del registro del artículo;     
> *cat. merceologica*: indica la categoría mercantil del registro del artículo;    
> *tipo articolo*: indica el tipo de artículo del registro del artículo;    
> *variante*: indica la variante del artículo;    
> *numero progressivo*: es un progresivo de tipo numérico;          
> *Caracteres Alfabéticos (Caratteri alfabetici)*: es un progresivo de tipo alfabético, a diferencia del *numero progressivo* que es numérico;        
> *Día de la Fecha de Inserción (Giorno Data Inserimento)*: indica el día de la fecha de inserción;    
> *Mes de la Fecha de Inserción (Mese Data Inserimento)*: indica el mes de la fecha de inserción;    
> *Año de la Fecha de Inserción (Anno Data Inserimento)*: indica el año de la fecha de inserción;    
> *Día de la Fecha de Caducidad (Giorno Data Scadenza)*: indica el día de la fecha de caducidad;    
> *Mes de la Fecha de Caducidad (Mese Data Scadenza)*: indica el mes de la fecha de caducidad;    
> *Año de la Fecha de Caducidad (Anno Data Scadenza)*: indica el año de la fecha de caducidad;     
> *Tipo de Lote (Tipo Lotto)*: indica el tipo de lote del artículo;     
> *Asociación Año Letra (Associazione Anno Lettera)*: indica el valor asociado al año en la tabla [Asociación año - letra (Associazione anno - lettera)](/docs/configurations/tables/general-settings/year-letter-association);    
> *Asociación Mes Letra (Associazione Mese Lettera)*: indica el valor asociado al mes en la tabla [Asociación mes - letra (Associazione mese - lettera)](/docs/configurations/tables/general-settings/month-letter-association);    
> *Apodo de Proveedor (Nomignolo fornitore)*: indica el apodo presente en el registro del proveedor;          
> *Número de Recibo de Compra (Numero Bolla Acquisto)*: indica el número del recibo de compra;     
> *Número de Factura de Compra (Numero Fattura Acquisto)*: indica el número de la factura de compra;    
> *lotto fornitore*: indica el número del lote del proveedor.    

Cada uno de estos, según las necesidades, debe ser luego trasladado a la tabla *dettagli tipo codice lotto* mediante el uso de los botones correspondientes en la barra de menú. 
Para cada entrada añadida, es posible definir la *Longitud* y el *Carácter de relleno*.

#### Botones específicos  
> **Mover: Predeterminado -> Detalle (Sposta: Predefinito -> Dettaglio)**: permite agregar una de las entradas presentes en la tabla *codice predefinito* a la tabla *Detalle del tipo de código de lote (Dettaglio tipo codice lotto)*. Este botón se habilita solo después de haber seleccionado una fila en la tabla *Código predeterminado* del tab *Detalle del tipo de código de lote*;          
> **Mover: Detalle -> Predeterminado (Sposta: Dettaglio -> Predefinito)**: permite eliminar una de las entradas presentes en la tabla *Detalle del tipo de código de lote* trasladándola de nuevo a la tabla *codice predefinito*. Este botón se habilita solo después de haber seleccionado una fila en la tabla *Detalle del tipo de código de lote* del tab *Detalle del tipo de código de lote*;               

#### Detalles de la Definición Progresiva del Tipo de Código de Lote (Dettagli tipo codice lotto definizione progressivo)

En esta pestaña es posible definir cuáles de las entradas presentes en la tabla *codice predefinito* deben componer la raíz del código de lote, es decir, aquella parte del código que permanecerá fija mientras el progresivo varía. En este caso no es posible seleccionar las entradas *numero progressivo* y *Caracteres Alfabéticos (Caratteri alfabetici)* porque, al ser progresivos, varían continuamente, mientras que es posible seleccionar todas las demás entradas.

#### Botones específicos  
> **Mover: Predeterminado -> Definición Progresivo (Sposta: Predefinito -> Definizione progressivo)**: permite agregar una de las entradas presentes en la tabla *codice predefinito* a la tabla *definizione progressivo*. Este botón se habilita solo después de haber seleccionado una fila en la tabla *Código predeterminado* del tab *Detalle del tipo de código de lote definición progresiva*;          
> **Mover: Definición Progresivo -> Predeterminado (Sposta: Definizione progressivo -> Predefinito)**: permite eliminar una de las entradas presentes en la tabla *Definición Progresivo* trasladándola de nuevo a la tabla *codice predefinito*. Este botón se habilita solo después de haber seleccionado una fila en la tabla *Definición Progresivo* del tab *Detalle del tipo de código de lote definición progresiva*;  

#### Detalles de los Valores Clave Progresivos del Tipo de Código de Lote (Dettagli tipo codice lotto dei valori chiave progressivi)

En esta pestaña se visualizan todos los valores de los últimos progresivos relacionados con cada raíz del código.

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funciones, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).