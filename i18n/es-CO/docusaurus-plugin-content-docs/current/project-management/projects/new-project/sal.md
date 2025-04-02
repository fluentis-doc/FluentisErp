---
title: fattura di anticipo
sidebar_position: 5
---

En esta pestaña es posible gestionar las facturas de anticipo relacionadas con el proyecto, que podrán ser asociadas a los documentos del área de proyectos, como solicitudes de intervención, intervenciones planificadas e intervenciones.  
La asociación a los documentos puede realizarse de manera automática configurando parámetros específicos del área de proyectos, o manualmente. La indicación de esta información dentro de los documentos individuales permite la cancelación automática de las facturas de anticipo en las facturas a saldo emitidas por la valorización de intervenciones.

Las filas de esta pestaña contienen los Artículos a facturar con sus características específicas:

**tipo riga**: es posible elegir entre el tipo 1-Codificado o 2-No codificado.

**unità di misura**: Las unidades de medida permitidas son solo de tipo "Tiempo". Sin embargo, las facturas de anticipo pueden utilizarse tanto para cubrir servicios, como materiales y gastos accesorios que tengan UM diferentes de "Tiempo".

**quantità**: cantidad de la factura de anticipo, utilizada como valor de partida para calcular y actualizar la cantidad residual.

**prezzo unitario**: valor utilizado como precio unitario tanto en la factura de anticipo como en las líneas de cancelación de la factura de anticipo.

**fatture di vendita**: contiene la referencia de la factura de anticipo generada por el proyecto.

**tipo**: es posible elegir la tipología de facturación entre En cuenta y A saldo;

**quantità residua**: En cada valorización de intervenciones se descontará de la cantidad original el valor correspondiente para obtener un residuo actualizado. El residuo podrá actualizarse manualmente a través del botón **aggiorna fattura di anticipo**.

**Fecha de último aggiornamiento del residual (Data ultimo aggiornamento residuo)**: indica la fecha de actualización de la cantidad residual.

**attivo da**: fecha desde la cual es activa la factura de anticipo, utilizada para la propuesta en los documentos.

**data di chiusura**: fecha de cierre de la factura de anticipo, a partir de la cual no será posible asociar documentos con fecha posterior.

Para cada línea es posible emitir factura directamente desde esta pantalla utilizando el botón **valorizza**. Se mostrará un mensaje para elegir si abrir o no la factura generada. En caso de que el botón Valorar no esté activo, verifique si en el Tipo de Proyecto en cuestión se ha indicado el **Tipo de Factura**, necesario para generar la factura.

![](/img/it-it/project-management/projects/sal.png)

Ejemplo de gestión:  
en la línea de artículo ingrese la cantidad prevista y el precio unitario.  
En la fase de valorización de intervenciones que contengan referencias a las facturas de anticipo, se insertará automáticamente la línea de cancelación con referencia a la factura de anticipo.  
El total de la línea de cancelación corresponderá a la suma de todos los valores a los que la factura de anticipo ha sido asociada, ya sean servicios, materiales o gastos.  
Una factura de anticipo puede utilizarse para cubrir solo parcialmente una intervención, asociándola, por ejemplo, solo a los servicios y no a los materiales y gastos.  
El precio unitario de la línea de cancelación se tomará del precio unitario de la factura de anticipo presente en el proyecto.  
En consecuencia, la cantidad a cancelar se calculará en proporción al total a cancelar / precio unitario de la factura de anticipo.

Ejemplo:  
factura de anticipo cantidad 10, UM días, precio unitario 500€, total 5000€.

intervención:  
servicio 1 día, 500€ asociados a la factura de anticipo.  
material 3 piezas, total 300€ asociados a la factura de anticipo.

de la valorización de intervenciones se obtendrá:  
servicio 1 día, 500€.  
material 3 piezas, total 300€.  
cancelación de factura de anticipo cantidad 1.6, UM días, precio unitario 500, total línea -800.

A través del control del residual de la Factura de anticipo, se tendrá un residual de 8.4 días.