---
title: sottoscorta
sidebar_position: 3
---

La impresión se encuentra en la ruta **sottoscorta** y permite al operador realizar controles con el fin de gestionar correctamente las existencias. En particular, es posible, después de haber completado adecuadamente el registro de artículos, interrogar al sistema para buscar los artículos que en el futuro estarán en suministro bajo. También es posible, una vez ejecutado el procedimiento, emitir automáticamente las solicitudes de compra en los tiempos correctos para los artículos que van en suministro bajo.

**Tablas y parámetros (Tabelle e parametri)**

Una serie de configuraciones de naturaleza tanto tabular precodificada como una correcta parametrización de los algoritmos básicos se recomienda antes de proceder con la ejecución del suministro bajo:
- en *anagrafica articoli* es necesario completar la pestaña *approvvigionamento* y, en particular, los datos para el aprovisionamiento.        
- en los *Parámetros MRP* de los artículos que se desea gestionar con el suministro bajo, es necesario que la *política de gestión sea a suministro (Gestione sia a scorta)*.        
- el Suministro mínimo debe ser menor o igual al Punto de pedido (Punto di riordino).

**procedura**

El procedimiento del suministro bajo utiliza un algoritmo que se basa en el consumo medio diario calculado desde la pestaña *approvvigionamento* del *anagrafica articoli*.

Se parte, por lo tanto, de la existencia en el momento de la elaboración y se verifica si a la fecha solicitada, a través del consumo medio, se llega o no a suministro bajo.

(Stock mínimo (Scorta minima) - Punto de pedido (Punto di riordino)) / Días para el pedido (Giorni per il riordino)

El procedimiento permite elegir: **articolo** (clase, código del artículo, descripción), eventual **variante** solo para artículos gestionados por variante, la **data** límite hasta la cual se desea calcular el suministro bajo. También es posible habilitar la **Creación automática de solicitudes de compra (Creazione automatica delle richieste di acquisto)** para los artículos en suministro bajo. Si se activa esta función, es necesario especificar el **tipo** de documento de solicitud y, si se desea, una **nota** para incluir en el encabezado de la solicitud de compra.

Después de ingresar estos filtros, presione el botón **esegui** para procesar los datos.

La cuadrícula de resultados de la ejecución representa la lista de las elaboraciones realizadas especificando **numero** y **data elaborazione**.

Es importante notar que en el procedimiento del suministro bajo, cuando la RDA se genera y la disponibilidad es inferior al Punto de Pedido, si para el artículo no se ha establecido un valor de *scorta massima*, la cantidad solicitada será igual a **Punto de pedido - Disponibilidad**; mientras que, si también está presente el valor de *scorta massima*, la cantidad solicitada será igual a **Suministro máximo - Disponibilidad**.

:::note Nota
Cabe destacar que en el caso de que el artículo sea de tipo aprovisionamiento *acquisto*, se generará la solicitud de compra pero no el pedido; mientras que en el caso de que el artículo sea de aprovisionamiento *produzione* o *conto lavoro*, se generará el pedido correspondiente.
:::

Para todo lo que no está detallado en este documento sobre el funcionamiento común de los formularios de impresión, consulte el siguiente enlace [Vista previa e impresión (Anteprima e stampa)](/docs/guide/common/operations-with-data/reports).