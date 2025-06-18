---
title: Análisis de disponibilidad (Analisi disponibilità)
sidebar_position: 6
---

:::important ¿Para qué sirve? (A cosa serve)
El análisis de disponibilidad de Fluentis es una herramienta poderosa y versátil que permite a los usuarios monitorear y gestionar en tiempo real las disponibilidades de los artículos dentro del almacén. A través de una interfaz intuitiva, el análisis es capaz de procesar rápidamente los datos relacionados con un artículo específico, solicitando simplemente la inserción del código del artículo. Además, el análisis se extiende también a los componentes de la lista de materiales, ofreciendo una visión completa de las disponibilidades.

En el panel principal del análisis, se presentan informaciones detalladas sobre la disponibilidad del artículo padre y de sus componentes, incluidos los datos sobre existencias, existencias no disponibles, y las cantidades en retraso. También es posible visualizar los detalles de los documentos que comprometen o hacen disponibles cantidades dentro del sistema, permitiendo un análisis profundo de las operaciones en curso.

Gracias a esta funcionalidad, los usuarios pueden tomar decisiones informadas respecto a los abastecimientos y la gestión de inventarios, reduciendo el riesgo de faltantes y optimizando la eficiencia operativa. El análisis de disponibilidad desempeña un papel crucial en asegurar que las empresas puedan responder de manera efectiva a las demandas del mercado y mantener niveles óptimos de servicio.
:::

La ventana para la impresión del análisis de disponibilidad se abre a través del camino **Inicio > Artículos > Análisis de disponibilidad**, y está compuesta por tres secciones: el área de filtro, la cuadrícula de resultados por almacén, y la cuadrícula de detalle.

### Área de filtro

A través de los filtros para **Artículo**, se puede definir para qué artículo o para qué serie de artículos se necesita verificar la disponibilidad de producto en el almacén.

**Cantidad acumulativa (Quantità cumulativa)**

Este indicador sirve para decidir si se quiere ver la cantidad disponible de ese artículo de forma acumulativa, o si se desea ver la disponibilidad por cada documento individual; también en esta sección se puede decidir si se quiere considerar la existencia que aún no está disponible en el periodo que se está analizando o si visualizar también la existencia que estará disponible a partir de la fecha en que se está realizando la búsqueda si esta no está en retraso.

**Considerar las disponibilidades provenientes de (Considera le disponibilità provenienti da)**

En esta sección se puede decidir considerar las disponibilidades que provienen de todas o algunas de las categorías propuestas, tales como: trabajo por encargo, producción planificada, compras, producción liberada, ventas y almacén.

**Período de verificación (Periodo di verifica)**

En esta sección se puede indicar el período para el cual se quiere verificar la disponibilidad, que puede ser: **Mensual (Mensile)** (en este caso se indica el número de meses que se desea tomar en cuenta), **Semanal (Settimanale)**, **Diario (Giornaliero)**, o se puede indicar una fecha específica en la que realizar la verificación.

**Visualizar líneas sin disponibilidad (Visualizza righe senza disponibilità)**

- *Visualizar líneas sin disponibilidad (Visualizza righe senza disponibilità)*: si está activo, este indicador indica que se desean visualizar también las líneas sin ningún valor en ninguno de los campos de disponibilidad en ese momento; si el artículo tiene cargas y descargas con suma igual a cero, esto también se visualizará sin el indicador;  

- *Solo en retraso (Solo in ritardo)*: por lo tanto, las líneas cuya cantidad a la fecha considerada debería haber sido ya producida, pero a causa de retrasos en la producción aún no lo es;

- *Solo con existencia negativa (Solo con giacenza negativa)*: por lo tanto, cantidades que deben ser producidas, que ya están planificadas pero para las cuales la existencia no es suficiente para cubrir su producción (probablemente en el sistema se encontrará registrado un pedido de proveedor en cobertura de la cantidad faltante);

- *Resumen (Riepilogativa)*: el resumen de estas dos opciones mencionadas anteriormente;

- *Detalle de lista de materiales (Dettaglio distinta base)*: al decidir considerar el detalle de la lista, se opta por ver la disponibilidad de todos los componentes individuales de la lista de materiales del artículo objeto de la búsqueda (también se visualizan los componentes con disponibilidad igual a cero); en este caso, en la visualización del análisis de disponibilidad, se añadirán las columnas *nivel (livello)*, *prioridad (priorità)* (se refiere a la prioridad indicada en la lista de materiales para ese componente), *código y variante artículo padre (codice e variante articolo padre)* relativas precisamente al artículo padre. Además, la lista de artículos estará ordenada por *nivel + código padre + variante padre + Prioridad + código artículo + variante artículo*. 

**Puntos de venta (Punti vendita)**

En el caso del retail, se puede decidir visualizar la disponibilidad filtrando por punto de venta.

**Para documentos sin fechas necesarias (Per i documenti privi di date necessarie)**

En este caso, se puede elegir no considerar los artículos que carecen de una fecha de recepción de mercancía o carecen de una fecha de mercancía lista, o si considerarlos de todos modos atribuyéndoles una fecha que se establece en el momento de la búsqueda y que se indicará en el campo correspondiente;

**Disponibilidad de almacenes (Disponibilità magazzini)**

En esta sección se pueden elegir cuáles almacenes considerar para verificar la existencia.

Después de haber configurado los diversos filtros e indicadores, se hará clic en el botón **Buscar (Ricerca)** ubicado en la barra de ribbon.

### Disponibilidad de producto (Disponibilità prodotto)

En las cuadrículas de resultados por almacén se verán las diversas líneas de disponibilidad en función de los documentos, o la línea acumulativa en base a los almacenes. Así, se podrán ver las disponibilidades generales en base a los compromisos de todos los almacenes (Total) o las disponibilidades por almacén individual (todas las diversas pestañas con los nombres de los almacenes codificados en la base de datos).

### Detalles

En la cuadrícula de detalle se verán, al hacer clic en la línea de interés en la cuadrícula del almacén, todos los documentos vinculados a esa única línea. Así, el pedido del cliente al que se refiere, el pedido de producción y la orden de trabajo de referencia, y cualquier documento de venta si está presente (como DDT, facturas).

*En retraso (In ritardo)*: representa la suma algebraica de todos los documentos en retraso (con fecha de entrega anterior a hoy) presentes en la disponibilidad, por lo que se da por la suma de los valores en la columna demanda menos la suma de los valores en la columna oferta, pero solo para los documentos en retraso.

A través de un doble clic del botón izquierdo del mouse sobre la línea seleccionada, es posible abrir el documento correspondiente.     

:::note Nota
La disponibilidad del artículo a producir se da solamente por la última fase con los indicadores **productiva (produttiva)** y **movible (movimentabile)** activos presentes en el [Ciclo de trabajo (Ciclo di lavoro)](/docs/erp-home/registers/production/routes/new-route).
:::

En cuanto a la descripción de las funcionalidades comunes a todos los formularios, presentes en la barra de ribbon, se remite al artículo relacionado con los [Botones Comunes (Pulsanti Comuni)](/docs/guide/common/common-buttons), en particular para las funcionalidades de las impresiones también se remite al artículo [Vista previa e Impresión (Anteprima e Stampa)](/docs/guide/common/operations-with-data/reports).

*Botón específico*:
> **Expandir/reducir cuadrícula de artículos (Espandi/riduci griglia articoli)**: botón que permite expandir o reducir las cuadrículas de resultados. 

:::note Creación de perfiles
En este formulario se pueden crear perfiles solo en el filtro y en la pestaña total.  
En las pestañas de los almacenes no se pueden crear perfiles ya que son construidos y destruidos de manera dinámica.
:::

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, se remite al siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).