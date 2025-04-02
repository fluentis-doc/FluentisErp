---
title: Gestión de Prototipos (Gestione Prototipi)
sidebar_position: 2
---

El Área de Prototipos representa la respuesta al modelo ETO (Engineering To Order), típico de las empresas del sector Manufacturero o de Instalaciones, que operan por pedido, proporcionando la realización de un producto "a medida" para un cliente específico, potencialmente siempre diferente.

*Integración con lista de materiales / ciclos*

Después de haber definido todos los componentes necesarios, a cualquier nivel de la lista de materiales dentro del prototipo, es posible obtener la creación de la lista de materiales correspondiente, y analizar respecto a esta eventuales diferencias posteriores. A través de esta funcionalidad, es posible evitar tener que reconstruir la estructura del producto en el módulo de listas de materiales, una vez que la oferta es confirmada por parte del cliente. El mismo procedimiento es operativo también en el contexto de los ciclos de trabajo, donde, habiendo previamente definido las fases de procesamiento, con la confirmación del encargo es posible obtener también el ciclo de trabajo especular a lo que se definió dentro de la estructura del prototipo.

La forma se compone de un área con la información de encabezado, donde es posible ingresar:

**Tipo de prototipo**: indica el tipo de prototipo a utilizar;  
**Año / número / fecha**: indican el año, número y fecha de creación del prototipo, estos son ingresados automáticamente;  
**Fecha de inicio y fin de validez**: indica la fecha de inicio y fin de validez del prototipo;  
**Proyecto**: indica el vínculo del prototipo a un posible proyecto;  
**Descripción del prototipo**: es un campo de notas libre.

:::note Nota
Es posible crear un prototipo para un artículo no codificado en el registro y de la misma manera insertar como componente un artículo no codificado.
:::

En la parte derecha del encabezado hay la posibilidad de indicar la información para el artículo padre del prototipo:

- **Artículo codificado**  
En caso de que se desee crear un prototipo para un artículo codificado, indicando clase, código y descripción de los artículos, código y descripción de la variante y unidad de medida;

- **Artículo no codificado**  
En caso de que se desee crear un prototipo para un artículo no codificado, indicando manualmente la descripción del artículo y eventualmente de la variante; si se trata de un artículo ficticio, la unidad de medida y el tipo de aprovisionamiento.  
Estos datos serán entonces utilizados para generar automáticamente el registro del artículo correspondiente. 

Los cuadros relativos al **Artículo codificado** y al **Artículo no codificado** se proponen abiertos en caso de que se esté creando un nuevo prototipo, ya que aún no es posible saber si se utilizará un artículo ya codificado o no; mientras que el cuadro **Artículo codificado** se visualiza abierto y el cuadro **Artículo no codificado** se cierra en caso de que se abra un prototipo basado en un artículo codificado y viceversa si se basa en un artículo no codificado.

Debajo están presentes pestañas específicas para:
- Producto
- Componentes
- Costos

### Producto

En esta pestaña hay una serie de información, solo de lectura, relativa al artículo ingresado en el encabezado.

**Nota artículo**: se reportan las notas ingresadas dentro de la pestaña [Notas](/docs/erp-home/registers/items/create-new-item) del registro del artículo.  

**Pesos**: reporta la unidad de medida del peso y los respectivos valores de peso: bruto, neto y específico.

**Existencias de almacenes**: reporta todos los almacenes con las respectivas cantidades de la existencia actual del artículo.

**Costos**: reporta los valores de costos: último, medio, estándar, estándar del próximo año y precio de venta.

**Listas de venta**: se visualizan todas las listas de venta donde este artículo aparece.

**Nota prototipo**: permite ingresar una nota libre relacionada con el prototipo (este es el único campo editable de esta pestaña).

### Componentes

En la pestaña **Componentes** es posible crear, modificar y visualizar el árbol de la lista de materiales del prototipo.  
A través de los botones específicos, presentes en la barra de cinta, es posible agregar o eliminar los componentes individuales del árbol; alternativamente, también es posible hacerlo a través de las opciones que se activan con el botón derecho del ratón sobre el componente del árbol. Una posibilidad adicional es utilizar el arrastrar y soltar para mover un componente dentro del árbol.  
Además, también es posible, a través del botón **Importar**, importar una lista de materiales ya presente, por lo que al componente que he seleccionado se le llevará la lista de materiales importada.  
En la pestaña **General** se reporta el artículo padre seleccionado con clase, código y descripción; en los *Datos artículo padre* es posible indicar la variante, la versión, la cantidad del padre, la unidad de medida y si es un artículo ficticio.  
Finalmente, hay la posibilidad de indicar el valor de *Exportación BOM* entre *Mantener lista de materiales* y *Nueva lista de materiales* tanto en el artículo padre como en los componentes individuales; estos se consideran cuando exportamos la lista de materiales recién creada en el prototipo y respectivamente permiten mantener el componente existente (seleccionando *Mantener lista de materiales*) o sobrescribirlo con el existente (seleccionando *Nueva lista de materiales*).  

Es posible gestionar componentes codificados y no codificados dentro del cuadro respectivo:

- **Artículo codificado**  
En caso de que se desee insertar en el prototipo un artículo codificado, indicando clase, código y descripción de los artículos, código y descripción de la variante y unidad de medida;

- **Artículo no codificado**  
En caso de que se desee insertar en el prototipo un artículo no codificado, indicando manualmente la descripción del artículo y eventualmente de la variante; si se trata de un artículo ficticio, la unidad de medida y el tipo de aprovisionamiento.  
Estos datos serán luego utilizados para generar automáticamente el registro del artículo correspondiente.  

Dentro de los cuadros relativos a los **Datos del componente**, es posible indicar:  
> **Cantidad**: indica la cantidad del componente utilizada para producir la respectiva *Cantidad padre*;  
> **Unidad de medida alternativa**: indica la unidad de medida alternativa del componente;  
> **Tipo de costo de material**: de forma predeterminada se propone el *Tipo de costo de material* que hay en los [Parámetros de prototipado](/docs/configurations/parameters/logistics/item-prototypes-parameters/), obviamente puede ser modificado manualmente para cada componente. En caso de que se inserte un proveedor, el procedimiento para determinar el costo del componente, primero verifica si existe una lista para ese proveedor e inserta el valor encontrado independientemente del *Tipo de costo de material* ingresado. Así, en el cálculo del costo del componente, el valor de la lista para el proveedor ingresado siempre tiene prioridad.  
> **Proveedor**: indica el proveedor del componente. Automáticamente se reporta el que se indicó como predeterminado en los proveedores preferenciales del artículo, pero puede ser modificado manualmente; si el componente es un artículo no codificado, el proveedor ingresado, en el momento de la creación del artículo, se utilizará como proveedor predeterminado en los proveedores preferenciales.  
> **Costo de material**: indica el costo del material del componente de acuerdo con el **Tipo de costo de material** ingresado;  
> **Costo de procesamiento**: indica el costo de procesamiento del componente dado por la suma del costo de mano de obra y de máquina;  
> **Costo del componente**: indica el costo total del componente dado por la suma del costo de material y procesamiento;  
> **Notas**: permite ingresar una nota libre relacionada con el componente.  

Si el elemento seleccionado en el árbol es un semielaborado en la pestaña **Componentes** es posible visualizar los componentes de primer nivel de los cuales está constituido.

En las pestañas **Datos extra - modelo** y **Datos extra - componente** es posible ingresar respectivamente los datos extra relativos al artículo padre y al componente; para una descripción detallada sobre los datos extra se remite al artículo [Datos extra](/docs/configurations/utility/extra-data/extradata/new-extradata).  

En la parte inferior de la forma, dentro de la pestaña **Ciclo**, es posible ingresar las fases de las trabajadoras relativas a los elementos individuales del árbol con los respectivos tiempos y costos de equipamiento y procesamiento; también es posible ingresar un costo manualmente en el campo **Costo de fase manual** que tendrá una prioridad más alta en la fase de cálculo de costos, sobrescribiendo el costo calculado en base a los tiempos de las fases y los centros de costo.  
La pestaña **Ciclo** se habilita para los artículos con **Tipo de aprovisionamiento** *Producción* o *Trabajo a cuenta* en los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro).  
Además, en la pestaña **Fases de descarga** se indica la fase en la que el elemento correspondiente debe ser descargado del almacén.

*La exportación de los ciclos está en fase de desarrollo.*

*Botones específicos*:

> **Parámetros de prototipado**: permite abrir los parámetros de prototipado, específicamente consultar los Parámetros de prototipado;  
> **Recalcular costos**: permite recalcular los costos de ese prototipo basándose en los costos que lo componen;  
> **Registro de artículos**: permite abrir el registro de artículos relacionado con el elemento seleccionado;  
> **Parámetros MRP**: permite abrir los parámetros MRP relativos al elemento seleccionado;  
> **Codificación de artículos**: permite codificar los artículos no codificados;  
> **Lista de materiales**: permite abrir la lista de materiales relacionada con el elemento seleccionado;  
> **Ciclo de trabajo**: permite abrir el ciclo de trabajo relacionado con el elemento seleccionado;  
> **Analizar**: permite comparar los componentes presentes en la pestaña *Componentes* con los que están en la lista de materiales presente en el registro, destacando los componentes que están presentes en ambas;  
> **Importar**: seleccionando un componente del árbol, tenemos la posibilidad de enlazarlo con una lista de materiales ya predefinida y desde ahí poder modificarlo;  
> **Exportar**: almacena o sobrescribe la lista de materiales creada en los prototipos, funciona junto al indicador *Exportación BOM* en la pestaña *General* sección *Componente*;  
> **Insertar componente**: permite agregar un componente al elemento seleccionado;  
> **Eliminar componente**: permite eliminar un componente del elemento seleccionado;  
> **Expandir todo**: permite abrir todo el árbol de la lista de materiales;  
> **Copiar**: permite copiar un elemento del árbol de la lista de materiales;  
> **Cortar**: permite cortar un elemento del árbol de la lista de materiales;  
> **Pegar**: permite pegar un elemento del árbol de la lista de materiales que ha sido copiado o cortado recientemente;  

### Costos

En la pestaña **Costos** se reportan los precios del prototipo en general (de uso interno), para un cliente específico, o también para un cliente específico pero ligado a una oferta. Así que es posible tener múltiples valorizaciones de un mismo prototipo. Las valorizaciones individuales tienen en común entre sí solo los datos contenidos en la pestaña *Componentes*, mientras que pueden diferenciarse por las condiciones que inciden sobre el valor desde el costo industrial en adelante.  
Un prototipo puede ser asociado a una oferta de cliente directamente desde el documento mismo, así que puedo crear un nuevo prototipo o asociar uno ya existente a través de los botones *Crear nuevo prototipo* y *Asociar prototipo*.  

Además, es posible ingresar eventuales *Costos directos*, *Costos generales* y/o *Otros costos* que serán considerados en el cálculo total.  
Todos los costos de las siguientes categorías: **Costos directos**, **Costos generales** y **Otros costos** son gestionados dentro de la tabla [Elementos de costo](/docs/configurations/tables/general-settings/cost-elements/) donde a través del campo *Tipo de costo* es posible definir en cuál categoría estará contenido.

En concreto, los campos considerados son los siguientes:

**Costo horario manual**: permite ingresar un costo horario manualmente, el cual tendrá un impacto solo en aquellos componentes que tienen asociadas fases;  
**Costo de material**: total del costo de material calculado desde el árbol de la lista;  
**Costo de mano de obra**: total del costo de mano de obra calculado desde el árbol de la lista;  
**Costo de máquina**: total del costo de máquina calculado desde el árbol de la lista;  
**Costo manual**: no gestionado;  

**Costo industrial**: total de los *Costos de material*, *Costo de mano de obra* y *Costo de máquina*;  
**Total de costos directos**: total de los costos ingresados en la sección *Costos directos*;  
**Costo industrial + costos directos**: total del *Costo industrial* y *Costos directos*;  
**Recargo**: permite indicar el recargo en porcentaje o en valor; este valor incrementa el *Costo industrial* o el *Total de costos generales*, respectivamente si en los [Parámetros de prototipado](/docs/configurations/parameters/logistics/item-prototypes-parameters/) en la sección *Cálculo p. venta con recargo sobre:* se indica *Costos directos* o *Costos totales*;  
**Total costo recargado**: total del *Costo industrial + costos directos* y del recargo;  
**Total de costos generales**: total de los costos ingresados en la sección *Costos generales*;  
**Total de otros costos**: total de los costos ingresados en la sección *Otros costos*;  
**Corrección**: permite ingresar un valor para corregir el nuevo precio de venta;  
**Redondeo**: permite decidir si redondear hacia arriba o hacia abajo y el orden de magnitud;  
**Precio de venta**: total del *Costo industrial + costos directos*, *Costos generales*, *Total de otros costos*, *Corrección* y *Redondeo*; si en los [Parámetros de prototipado](/docs/configurations/parameters/logistics/item-prototypes-parameters/) está activo el indicador *Nuevo precio de venta*, este campo es calculado automáticamente y no modificable manualmente, mientras que si está desactivado, el campo es editable también manualmente;  
**Lote de producción**: permite indicar el valor del lote de producción, el cual determina un aumento o una disminución de los costos de mano de obra y máquina, además incide en el costo unitario de equipamiento;  
**Total lote de producción**: total del *Precio de venta* calculado para el *Lote de producción* indicado;  
**Desviación de lista**: indica la desviación respecto a la lista de venta;  
**Tipo de lista de venta**: indica el tipo de lista;  
**Desde fecha de validez**: indica la fecha de validez de la lista;  
**Hasta fecha de validez**: indica la fecha de validez de la lista.  

**Tipo de detalle gráfico de análisis**

Permite visualizar a través de un diagrama de pastel, de manera sintética o analítica, la composición de los costos del prototipo.

*Botones específicos*:

> **Actualización listas de venta**: permite actualizar el precio del artículo en la lista de venta correspondiente;  
> **Actualizar ofertas**: variando el valor del *Precio de venta* de un prototipo ligado a una oferta, a través de este botón es posible actualizar el precio indicado en la oferta misma;  
> **Actualizar cliente**: permite crear una nueva línea de valorización para el prototipo asociada al cliente seleccionado.  

**Modalidad de cálculo de costos**

Los costos reportados para cada componente son costos unitarios, en la estructura de la lista de los prototipos se reportan en cambio los costos unitarios y totales de material y de trabajos referidos a las cantidades del padre de cada componente.

- Para los artículos de compra no se calculan costos de procesamiento y los costos de material se toman en base a los parámetros de los prototipos (costos de almacén, costos de lista y mejor precio de lista).  
El costo se busca en la lista de acuerdo a la fecha de validez del prototipo, si la fecha de validez del prototipo no es ingresada, los costos se buscan por la fecha del día.  
Para la búsqueda del costo en las listas se utiliza la UM de uso también como UM alternativa del artículo y si se encuentra un precio con una UM diferente de la de uso se aplica el factor de conversión de la UM alternativa del artículo para calcular el costo de material.  
El costo de material del componente puede ser ingresado manualmente y se recalcula el costo de material del prototipo en base al nuevo costo, pero al lanzar un recalculo de costos desde la cinta se busca el costo conforme a las reglas de los parámetros.  

- Para los artículos de trabajo a cuenta, los costos de material se toman de los componentes mientras que los costos de procesamiento se toman de las fases si están presentes, de lo contrario se toman de las listas de trabajo a cuenta.  

- Para los artículos de producción, los costos de material se toman de los componentes mientras que los costos de procesamiento se toman de las fases.  
El cálculo de los costos de procesamiento considera como prioritario el costo manual expresado en la fase; si no hay, verifica si está presente el costo horario manual presente en la pestaña de costos; si no está presente, busca el costo en el centro de costo de los grupos de mano de obra y de máquinas.  
Para el equipamiento, si se ingresa el tiempo de equipamiento se considera omnicomprensivo de mano de obra y máquinas y se calcula todo como mano de obra utilizando el costo en base a las prioridades descritas anteriormente; si en cambio se desea dividir el costo del equipamiento de la máquina del costo del equipamiento de la mano de obra, deben ser ingresados el grupo de mano de obra para la búsqueda del costo de su centro de costo y el equipamiento de máquinas, es decir, la máquina, para la búsqueda del costo de su centro de costo; en ausencia de estos datos, incluso si se ingresan los tiempos de equipamiento de hombre y de máquina no se consideran para el cálculo de costos.  
Cada componente de la lista del prototipo incluye en su costo material y de procesamiento también el costo de sus componentes, lo mismo sucede por lo tanto con el prototipo.  
La indicación del lote de producción en la pestaña de costos compete solo al cálculo del costo unitario de equipamiento para sumar al costo industrial del prototipo; variando el lote de producción aumentan o disminuyen el costo de mano de obra y el costo de máquina de la pestaña de costos.  
El procedimiento de recalculo de costos recalcula todos los costos tomando los datos de los parámetros para las compras (costos de almacén, costos de lista y mejor precio de lista) y de las fases para los trabajos.