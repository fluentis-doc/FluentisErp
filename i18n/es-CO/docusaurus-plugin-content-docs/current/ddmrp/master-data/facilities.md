---
title: struttura logistica
sidebar_position: 1
---

Fluentis DDMRP es capaz de gestionar no solo una fábrica, sino toda una cadena de suministro compuesta por fábricas y varios centros de distribución y hubs.

Esta tabla representa la estructura logística, es decir, la cadena de suministro, sobre la que debe actuar Fluentis DDMRP.

En Fluentis, denominamos cada nodo de la cadena de suministro "Facility" y esta es la tabla de las Facilities.

Se considera una estructura en niveles como se describe a continuación.

**Centros de distribución (Centri di distribuzione)**

Son las unidades logísticas que sirven directamente a los clientes finales a través de los inventarios que contienen.

Estas se ubican geográficamente en posiciones adecuadas para reducir el tiempo de transporte a los clientes finales.

Cada centro de distribución se abastece de un hub intermedio o directamente de la fábrica.

**Hub (Hub)**

Son unidades logísticas que abastecen a los centros de distribución.

Se ubican geográficamente en posiciones adecuadas para reducir el tiempo de transporte a los centros de distribución.

Los hubs permiten mantener un alto nivel de servicio a los clientes finales, reduciendo el nivel global de inventarios en la red de distribución.

Los hubs se abastecen de la fábrica o, en redes muy extensas, de otros hubs.

**fabbrica**

Se considera una sola fábrica en la estructura logística.

Esta abastece a los hubs y/o a los centros de distribución.

Por lo tanto, existe una relación cliente-proveedor entre las unidades de la estructura logística (cada unidad logística debe ser codificada tanto como cliente como proveedor).

Los centros de distribución son clientes y no proveedores en la estructura logística, los hubs son tanto clientes (de la fábrica o de otros hubs) como proveedores (de los centros de distribución o de otros hubs), la fábrica tiene como clientes a los centros de distribución o a los hubs y no tiene ninguna unidad logística proveedora.

Los campos que definen una unidad logística son los siguientes:

**magazzino**

Es el código de almacén asociado a la unidad logística.

Salvo la fábrica, cada unidad logística está identificada de manera única por el almacén asociado a ella (elección realizada para aumentar el grado de compatibilidad con aplicaciones externas).

A la fábrica, sin embargo, se le pueden asociar varios almacenes y estos son los únicos que serán considerados por el sistema DDMRP para los artículos de buffer de fábrica; por lo tanto, otros almacenes utilizados en la fábrica que no están presentes en esta tabla no deben contener buffers DDMRP ya que serían ignorados en el cálculo NFP.

Los almacenes de esta tabla que no están marcados como fábrica serán ignorados por el procedimiento MRP, ya que son almacenes de distribución de mercancías y no de producción, y deben ser planificados individualmente a través del cálculo de la posición de flujo neto (NFP), siempre desde el menú de ejecución del MRP.

En Fluentis DDMRP, se hará referencia a la unidad logística Fábrica a través de un código de almacén vacío, precisamente porque es la única unidad logística a la que se pueden asociar más de un almacén y por lo tanto se pierde la relación de biunivocidad entre almacén y unidad logística.

**cliente**

Identifica la unidad logística de manera única al igual que el código de almacén, por lo tanto, cada unidad logística debe tener una cuenta de cliente asociada a ella.

Si resulta ser proveedora de alguna otra unidad logística, entonces también debe tener una cuenta de proveedor asociada.

El mismo código de cliente no puede ser asociado a más de un almacén (salvo la fábrica), así como el mismo código de almacén no puede ser asociado a más de un código de cliente.

**fornitore**

Su valor identifica la unidad logística que proporcionará la mercancía a aquella identificada por el código de almacén y/o código de cliente del registro.

Solo para los registros asociados a la fábrica (indicador Fabbrica seleccionado), este campo no es editable y permanece vacío, puesto que la fábrica no puede ser abastecida por otra unidad logística.

Solo se puede seleccionar como proveedor una unidad logística ya registrada en esta tabla (no es posible seleccionar genéricamente un proveedor de la lista de proveedores).

El sistema verifica el código de cliente asociado al código de proveedor y, por lo tanto, busca dicho código de cliente en el campo cliente de los varios registros de la tabla Facilities; por lo tanto, una unidad logística proveedora debe tener asociados tanto un código de cliente como un código de proveedor.

Esto implica que la inserción en esta tabla debe comenzar desde el nivel más bajo, es decir, desde la fábrica, para luego ascender a los posibles hubs y, finalmente, a los centros de distribución; por lo tanto, la inserción se realiza por niveles de prioridad decreciente.

No es obligatorio que todos los artículos presentes en una unidad logística sean abastecidos por la unidad indicada como proveedora.

Esta permanece como el proveedor predeterminado que será utilizado en la creación de los **pedidos internos planificados (ordini interni pianificati)** generados por el sistema de planificación y para el cálculo del tiempo de entrega desacoplado (DLT).

En la tabla de parámetros DDMRP de los artículos se pueden definir excepciones, indicando otra unidad logística o un proveedor genérico externo a la estructura logística y el tiempo de transporte correspondiente.

**magazzino fornitore**

Es el código de almacén asociado a la unidad logística proveedora del registro seleccionado; este valor permite una búsqueda rápida en esta tabla a través del campo Almacén.

En caso de que el proveedor sea la fábrica, este campo resulta vacío ya que la fábrica es la única unidad logística a la que es posible asociar más de un almacén.

**fabbrica**

Es un indicador que señala que el almacén del registro se refiere a la fábrica (en este caso, el proveedor está vacío).

Para la fábrica son posibles varios registros, uno para cada almacén que debe considerar el sistema de planificación.

Después de haber ingresado el primer almacén con el indicador Fábrica activo, para los siguientes se controlará que el código de cliente sea el mismo que en los registros con el indicador de fábrica activo, ya que, evidentemente, a la fábrica siempre se le asociará un solo código de cliente (y un solo código de proveedor).

**priorità di pianificazione**

Es un valor mayor o igual a 0 y no superior a 100.

Los registros asociados a la fábrica tienen todos un valor de 100 por convención de Fluentis, las demás unidades logísticas tienen un valor inferior.

Este elemento sirve para indicar al sistema de planificación qué orden seguir en el proceso de cálculo; de hecho, se planificarán primero las unidades logísticas con valores más bajos, procediendo luego a aumentar dicho valor y, por lo tanto, planificando por último la fábrica, respetando la cadena de relaciones cliente-proveedor entre las unidades logísticas, tal como se hace en el caso de una lista de materiales, comenzando desde arriba y luego procediendo a los niveles inferiores.

Este orden es necesario porque para conocer las necesidades de una unidad logística, primero se deben haber planificado las de sus unidades clientes.

Cada registro cliente debe tener un nivel de prioridad inferior al de su unidad proveedora.

**lead time**

Es el tiempo necesario para transportar la mercancía desde la unidad logística proveedora y se expresa en días.

**causale di prelievo da facility fornitore**

Es la causa de almacén que se utilizará para cumplir un pedido interno, es decir, para retirar la mercancía de esta unidad y enviarla a la unidad que la ha solicitado y debe estar asociada al almacén para poder ser seleccionada en la fase de inserción del registro.

**causale di versamento nella facility cliente**

Es la causa de almacén que se utilizará para cargar mercancía como resultado de un pedido interno, es decir, para depositar la mercancía en esta unidad proveniente de la unidad que la ha proporcionado y debe estar asociada al almacén para poder ser seleccionada en la fase de inserción del registro.