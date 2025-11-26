---
title: Factura de Anticipo
sidebar_position: 5
ai_generated: true
---

En esta pestaña es posible gestionar las facturas de anticipo<!-- fatture di anticipo --> relacionadas con el proyecto, las cuales podrán asociarse a los documentos del área de proyectos, como solicitudes de intervención, intervenciones planificadas, intervenciones<!-- interventi -->.
La asociación a los documentos puede realizarse automáticamente configurando los parámetros adecuados del área de proyectos, o bien manualmente. Indicar esta información dentro de cada documento permite la anulación<!-- storno --> automática de las facturas de anticipo<!-- fatture di anticipo --> en las facturas finales emitidas a partir de la valorización de las intervenciones<!-- valorizzazione interventi -->. 

Las filas de esta pestaña contienen los artículos a facturar con sus respectivas características específicas:
  
**Tipo de Línea<!-- Tipo Riga -->**: es posible elegir entre tipo 1-Codificado o 2-No codificado

**Unidad de medida<!-- Unità di misura -->**: Las unidades de medida permitidas solo pueden ser de tipo "Tiempo". Sin embargo, las facturas de anticipo<!-- fatture di anticipo --> pueden utilizarse tanto para cubrir servicios, como materiales y gastos accesorios que tengan una unidad de medida diferente de "Tiempo".

**Cantidad<!-- Quantità -->**: cantidad de la factura de anticipo<!-- fattura di anticipo -->, utilizada como valor inicial para calcular y actualizar la cantidad restante<!-- quantità residua -->. 

**Precio unitario**: valor utilizado como precio unitario tanto en la factura de anticipo<!-- fattura di anticipo --> como en las líneas de anulación<!-- righe di storno --> de la factura de anticipo<!-- fattura di anticipo -->.

**Facturas de Venta<!-- Fatture di Vendita -->**: contiene la referencia de la factura de anticipo<!-- fattura di anticipo --> generada desde el proyecto. 

**Tipo**: es posible elegir el tipo de facturación entre "A cuenta" o "A saldo";

**Cantidad restante<!-- Quantità residua -->**: En cada valorización de intervenciones<!-- valorizzazione interventi --> se descontará<!-- stornato --> del valor original la cantidad correspondiente para obtener un residuo actualizado. El residuo también podrá ser actualizado manualmente mediante el botón **Actualizar Factura de Anticipo<!-- Aggiorna Fattura di Anticipo -->**.

**Fecha del último residuo actualizado<!-- Data ultimo aggiornamento residuo -->**: indica la fecha de actualización de la cantidad restante<!-- quantità residua -->

**Activo desde<!-- Attivo da -->**: fecha desde la cual está activa la factura de anticipo<!-- fattura di anticipo -->, utilizada para la propuesta en los documentos

**Fecha de cierre<!-- Data di chiusura -->**: fecha de cierre de la factura de anticipo<!-- fattura di anticipo -->, tras la cual ya no será posible asociar documentos con fecha posterior

Para cada línea es posible emitir la factura directamente desde esta pantalla usando el botón **Valorizar<!-- Valorizza -->**. Aparecerá un mensaje para elegir si abrir o no la factura generada.
Si el botón Valorizza<!-- Valorizza --> no estuviera activo, verifique si para el Tipo de Proyecto en cuestión se ha indicado el **Tipo de Factura<!-- Tipo Fattura -->**, necesario para generar la factura.

![](/img/it-it/project-management/projects/sal.png)

Ejemplo de gestión:  
en la línea de artículo hay que introducir la cantidad prevista y el precio unitario.
En la fase de valorización de intervenciones<!-- valorizzazione interventi --> que contienen referencias a facturas de anticipo<!-- fatture di anticipo -->, se insertará automáticamente la línea de anulación<!-- riga di storno --> con referencia a la factura de anticipo<!-- fattura di anticipo -->.
El total de la línea de anulación<!-- riga di storno --> corresponderá a la suma de todos los valores a los que la factura de anticipo<!-- fattura di anticipo --> haya sido asociada, sean servicios, materiales o gastos.
Una factura de anticipo<!-- fattura di anticipo --> puede usarse incluso para cubrir parcialmente una intervención, asociándola por ejemplo solo a los servicios y no a los materiales ni a los gastos.
El precio unitario de la línea de anulación<!-- riga di storno --> se tomará del precio unitario de la factura de anticipo<!-- fattura di anticipo --> presente en el proyecto.
En consecuencia, la cantidad a anular se calculará en proporción al total a anular / precio unitario factura de anticipo<!-- fattura di anticipo -->.

ejemplo:
factura de anticipo<!-- fattura di anticipo --> cantidad 10, UM días , precio unitario 500 €, total 5000 €

intervención<!-- intervento -->
servicio 1 día, 500 € asociados a la factura de anticipo<!-- fattura di anticipo -->
material 3 piezas, total 300 € asociados a la factura de anticipo<!-- fattura di anticipo -->

De la valorización de intervenciones<!-- valorizzazione interventi --> se obtendrá:
servicio 1 día, 500 €
material 3 piezas, total 300 €
anulación factura de anticipo<!-- storno fattura anticipo --> cantidad 1,6 UM días, precio unitario 500, total línea -800

Por medio del control del residuo de la factura de anticipo<!-- residuo Fattura di anticipo -->, se tendrá un residuo de 8,4 días