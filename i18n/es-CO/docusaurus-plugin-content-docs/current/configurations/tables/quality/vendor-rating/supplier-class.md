---
title: Clases de suministro (Classi di fornitura)
sidebar_position: 1
---

La tabla se encuentra en la ruta **Tablas > Calidad > Calificación de proveedores > Clases de suministro**.

Los datos presentes en esta tabla se utilizan para catalogar las diferentes *Clases de suministro* de los proveedores.  
En la tabla se pueden asociar algunas informaciones que luego se propondrán al proveedor.  
Algunos ejemplos de uso de las *Clases de suministro* los encontramos en las gestiones:  
> **anagrafiche contatti** - en la pestaña *Datos contables > Datos de calidad (Dati contabili > Dati qualità)*.

La tabla permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de Clases de suministro**

El formulario consta de un área de filtrado y otra de resultados. Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.

**Inserción de Clases de suministro**

Para poder insertar nuevas *Clases de suministro* es necesario hacer clic en la primera fila vacía de la cuadrícula o presionar el botón **nuovo**.  
Para el nuevo registro, se deben ingresar al menos los campos obligatorios requeridos por el programa: el **codice** y la **descrizione**.

*Campos específicos:*

> **classe fornitura**  
>> **codice**: es el código de la *Clase de suministro*.   
>> **descrizione**: es la descripción de la *Clase de suministro*.   
>
> **check-list**  
> la *check-list* y la *Periodicidad (Periodicità)* se proponen a los proveedores asociados a la *Clase de suministro* y se utilizan para su *Evaluación inicial y periódica*.  
>> **codice**: es el código de la *Lista de verificación*.   
>> **descrizione**: es la descripción de la *Lista de verificación*.   
>> **Periodicidad (en meses) (Periodicità)**: es el período (expresado en meses).   
>
> **tipo controllo**  
>> **codice**: es el código del *Tipo de control* que se debe realizar para la *Clase de suministro*.   
>> **descrizione**: es la descripción del *Tipo de control* que se debe realizar para la *Clase de suministro*.   
>> **da controllare**: es el número de artículos a controlar sobre el total especificado en *sul totale*.   
>> **sul totale**: es el número total de artículos sobre el cual basar cuántos artículos deben ser controlados y especificado en *da controllare*.   
>
> **gestione bonus**  
> el *Bonus* y la *Periodicidad (Periodicità)* se ofrecen a los proveedores asociados a la *Clase de suministro* y se utilizan para su *Evaluación periódica sobre No conformidades*.  
>> **valore proposto**: es el bono (puntuación) inicial otorgado a los proveedores de la clase;  
>> el *Bonus* asignado al proveedor podrá ser modificado posteriormente;  
>> durante la evaluación, la puntuación se decrementará con base en los valores atribuidos a las No conformidades dadas al proveedor en un período determinado.  
>> **Periodicidad (en meses) (Periodicità)**: es el período (expresado en meses);  
>> la *Periodicidad* asignada al proveedor podrá ser modificada posteriormente;  
>> es el período de evaluación de las No conformidades dadas al proveedor para disminuir el *Bonus* inicial.   
>
> **note**: anotaciones libres.

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).