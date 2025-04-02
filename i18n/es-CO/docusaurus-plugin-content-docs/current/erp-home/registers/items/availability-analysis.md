---
title: analisi disponibilità
sidebar_position: 6
---

:::important ¿Para qué sirve? (A cosa serve)
El análisis de disponibilidad de Fluentis es una herramienta poderosa y versátil que permite a los usuarios monitorear y gestionar en tiempo real las disponibilidades de los artículos dentro del almacén. A través de una interfaz intuitiva, el análisis puede procesar rápidamente los datos relacionados con un artículo específico, requiriendo simplemente la entrada del código del artículo. Además, el análisis se extiende también a los componentes de la lista de materiales, ofreciendo una visión completa de las disponibilidades.

En el panel principal del análisis, se presentan informaciones detalladas sobre la disponibilidad del artículo padre y de sus componentes, incluidos los datos sobre existencias, posibles existencias no disponibles y las cantidades con retraso. También es posible visualizar los detalles de los documentos que comprometen o hacen posibles cantidades dentro del sistema, permitiendo un análisis exhaustivo de las operaciones en curso.

Gracias a esta funcionalidad, los usuarios pueden tomar decisiones informadas respecto a los aprovisionamientos y a la gestión de inventarios, reduciendo el riesgo de faltantes y optimizando la eficiencia operativa. El análisis de disponibilidad desempeña un papel crucial en garantizar que las empresas puedan responder efectivamente a las demandas del mercado y mantener niveles óptimos de servicio.
:::

La ventana para la impresión del análisis de disponibilidad se abre a través de la ruta **Inicio > Artículos > analisi disponibilità**, y está compuesta por tres secciones: el área de filtro, la cuadrícula de resultados por almacén, la cuadrícula de detalle.

### Área de filtro

A través de los filtros para **Artículo**, se puede definir para qué artículo o serie de artículos se necesita verificar la disponibilidad de productos en el almacén.

**Cantidad acumulativa**

Este indicador sirve para decidir si se desea ver la cantidad disponible de ese artículo acumulada, o si se quiere ver la disponibilidad por cada documento individual; también en esta sección se puede decidir si se quiere que se considere la existencia que aún no está disponible en el período que se está analizando o si se desea visualizar también la existencia que estará disponible a partir de la fecha en la que se está realizando la búsqueda si esta no está con retraso.

**Considerar las disponibilidades provenientes de**

En esta sección se puede decidir considerar las disponibilidades provenientes de todas o algunas de las categorías propuestas, como: trabajo por encargo, producción planificada, compras, producción liberada, ventas y almacén.

**Período de verificación**

En esta sección se puede indicar el período para el cual se quiere verificar la disponibilidad, que puede ser: **Mensual** (en este caso se indica el número de meses que se quiere tomar en cuenta), **Semanal**, **Diario** o se puede indicar una fecha precisa en la que realizar la verificación.

**Visualizar líneas sin disponibilidad**

- *Visualizar líneas sin disponibilidad*: si está activo, este indicador indica que se desean visualizar también las líneas sin ningún valor en cada uno de los campos de disponibilidad en ese momento; si en cambio el artículo tiene cargas y descargas con suma igual a cero, esto se visualiza también sin indicador; 

- *Solo con retraso*: por lo tanto, las líneas cuya cantidad en la fecha analizada debería ya estar producida, pero debido a retrasos productivos aún no lo está;

- *Solo con existencia negativa*: por lo tanto, cantidades que deben ser producidas, que ya están planificadas pero para las cuales la existencia no es suficiente para cubrir la producción (probablemente en el sistema se encontrará un pedido de proveedor cubriendo la cantidad faltante);

- *Resumen*: el resumen de estas dos opciones mencionadas anteriormente;

- *Detalle de lista de materiales*: al decidir considerar el detalle de la lista, se opta por ver la disponibilidad de todos los componentes individuales de la lista de materiales del artículo objeto de la búsqueda (también se visualizan los componentes con disponibilidad igual a cero); en este caso, en la visualización del análisis de disponibilidad, se añaden las columnas *nivel*, *prioridad* (se refiere a la prioridad indicada en la lista de materiales para ese componente), *código y variante del artículo padre* relativas precisamente al artículo padre. Además, la lista de artículos será ordenada por *nivel + código padre + variante padre + Prioridad + código artículo + variante artículo*. 

**Puntos de venta**

En el caso del retail, se puede decidir visualizar la disponibilidad filtrando por punto de venta.

**Para los documentos sin las fechas necesarias**

En este caso, se puede elegir no considerar los artículos que carecen de una fecha de recepción de mercancía o que carecen de una fecha de mercancía lista, o si considerarlos de todos modos atribuyéndoles una fecha que se establece en el momento de la búsqueda y que se indica en el campo correspondiente;


**Disponibilidad almacenes**

En esta sección se pueden seleccionar qué almacenes considerar para verificar las existencias.

Después de haber configurado los varios filtros e indicadores, se hará clic en el botón **ricerca** ubicado en la barra de ribbon.

### Disponibilidad del producto

En las cuadrículas de resultados por almacén se verán las diversas líneas de disponibilidad en función de los documentos o la línea acumulativa según los almacenes. Por lo tanto, se podrán ver las disponibilidades generales en función de los compromisos de todos los almacenes (Total) o las disponibilidades para un almacén individual (todas las diferentes pestañas con los nombres de los almacenes codificados en la base de datos).

### Detalles

En la cuadrícula de detalle se verán, al hacer clic en la línea de interés en la cuadrícula de almacén, todos los documentos vinculados a esa línea específica. Entonces, el pedido del cliente al que hace referencia, el pedido de producción y la orden de trabajo correspondiente y eventuales documentos de venta si están presentes (como DDT, facturas).

*Con retraso*: representa la suma algebraica de todos los documentos en retraso (con fecha de entrega anterior a hoy) presentes en la disponibilidad, por lo tanto, está dada por la suma de los valores en la columna demanda menos la suma de los valores de la columna oferta pero solo para los documentos en retraso.

Mediante un doble clic con el botón izquierdo del ratón en la línea seleccionada, es posible abrir el documento correspondiente.

:::note Nota
La disponibilidad del artículo a producir se da únicamente por la última fase con los indicadores **productiva** y **movimentable** activos presentes en el [Ciclo de trabajo (Ciclo di lavoro)](/docs/erp-home/registers/production/routes/new-route).
:::

En cuanto a la descripción de las funcionalidades comunes a todos los formularios, presentes en la barra de ribbon, se remite al artículo relacionado con los [Botones Comunes (Pulsanti Comuni)](/docs/guide/common/common-buttons), en particular para las funcionalidades de impresión también se remite al artículo [Previsualización e Impresión (Anteprima e Stampa)](/docs/guide/common/operations-with-data/reports).

*Botón específico*:
> **espandi/riduci griglia articoli**: botón que permite expandir o reducir las cuadrículas de resultados.

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, se remite al siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).