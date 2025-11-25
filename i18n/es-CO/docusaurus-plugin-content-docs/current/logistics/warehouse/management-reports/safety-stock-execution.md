---
title: Bajo inventario
sidebar_position: 3
ai_generated: true
---

La impresión<!-- stampa --> se encuentra en la ruta **Logística > Almacén<!-- Magazzino --> > Informes de gestión<!-- Stampe gestionali --> > Bajo inventario<!-- Sottoscorta -->** y permite al usuario realizar controles para gestionar correctamente las existencias<!-- scorte -->. En particular, es posible, tras completar debidamente la ficha maestra de artículos<!-- anagrafica articoli -->, consultar el sistema para buscar los artículos que en el futuro llegarán a estar bajos de stock<!-- andranno in sottoscorta -->. Además, una vez ejecutado el procedimiento, es posible emitir solicitudes de compra de forma automática y en los tiempos correctos para los artículos que entren en bajo inventario<!-- vanno in sottoscorta -->.

**Tablas y parámetros<!-- Tabelle e parametri -->**

Se recomienda establecer una serie de configuraciones tanto a nivel tabular precodificadas como una correcta parametrización de los algoritmos básicos antes de proceder con la ejecución del bajo inventario<!-- sottoscorta -->:
- En la *Ficha maestra de artículos<!-- Anagrafica articoli -->* es necesario completar la pestaña *Suministro<!-- Approvvigionamento -->*, y en particular los datos para el suministro<!-- approvvigionamento -->.        
- En los *Parámetros MRP* de los artículos que se desean gestionar con el bajo inventario<!-- sottoscorta --> es necesario que la *política de gestión<!-- politica di gestione -->* sea por existencias<!-- scorta -->.        
- El inventario mínimo<!-- Scorta minima --> debe ser menor o igual al punto de reorden<!-- Punto di riordino -->.

**Procedimiento<!-- Procedura -->**

El procedimiento de bajo inventario<!-- sottoscorta --> utiliza un algoritmo que se basa en el consumo medio diario calculado desde la pestaña *Suministro<!-- Approvvigionamento -->* de la *Ficha maestra de artículos<!-- Anagrafica articoli -->*.

Por lo tanto, se parte del stock disponible<!-- giacenza --> en el momento de la elaboración y se comprueba si en la fecha solicitada, utilizando el consumo medio, se llegará o no al bajo inventario<!-- sottoscorta -->.

(Existencia mínima<!-- Scorta minima --> - Punto de reorden<!-- Punto di riordino -->) / Días para el reabastecimiento<!-- Giorni per il riordino -->

El procedimiento permite seleccionar: **Artículo** (clase, código de artículo, descripción), posible **Variante** solo para artículos gestionados con variantes, la **Fecha** límite hasta la cual se quiere calcular el bajo inventario<!-- sottoscorta -->. También es posible habilitar la **Creación automática de solicitudes de compra** para los artículos en bajo inventario<!-- sottoscorta -->. Si se activa esta función es necesario especificar el **Tipo** de documento de solicitud y, si se desea, una **Nota** para insertar en el encabezado de la solicitud de compra.

Después de ingresar estos filtros, presione el botón **Ejecutar<!-- Esegui -->** para procesar los datos.

La cuadrícula de resultados<!-- griglia di risultato --> de la ejecución muestra la lista de procesos realizados, especificando el **Número** y la **Fecha de procesamiento**.

Es importante notar que en el procedimiento de bajo inventario<!-- sottoscorta -->, cuando la RDA es generada y la disponibilidad<!-- disponibilità --> es inferior al punto de reorden<!-- Punto di Riordino -->, si para el artículo no se ha establecido un valor de *inventario máximo<!-- scorta massima -->*, la cantidad solicitada será igual a **Punto de reorden<!-- Punto di Riordino --> – Disponibilidad<!-- Disponibilità -->**; mientras que, si también está presente el valor de *inventario máximo<!-- scorta massima -->*, la cantidad solicitada será igual a **Inventario máximo<!-- Scorta max --> – Disponibilidad<!-- Disponibilità -->**.

:::note Nota<!-- Nota -->
Cabe destacar que, en el caso de que el artículo sea de tipo suministro *Compra<!-- Acquisto -->*, se creará la solicitud de compra<!-- richiesta di acquisto --> pero no la orden de trabajo<!-- commessa -->; mientras que, en el caso de que el artículo sea de suministro *Producción<!-- Produzione -->* o *Consignación de trabajos<!-- Conto lavoro -->*, entonces se creará la orden de trabajo<!-- commessa --> correspondiente.
:::

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios de impresión<!-- form di stampa -->, consulte el siguiente enlace [Vista previa e impresión<!-- Anteprima e stampa -->](/docs/guide/common/operations-with-data/reports).