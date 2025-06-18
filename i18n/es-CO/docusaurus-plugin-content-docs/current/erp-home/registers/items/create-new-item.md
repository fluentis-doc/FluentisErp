---
title: Nuevo artículo (Nuovo articolo)
sidebar_position: 1.1
---

**Introducción (Introduzione)**: [Identificación de productos y sus partes (Identificazione dei prodotti e relative parti)](/docs/erp-home/registers/items/master-item-intro) 

:::important ¿Para qué sirve? (A cosa serve)
La base de datos de artículos de Fluentis desempeña un papel crucial en la gestión y organización de la información relacionada con los artículos de una empresa. Se presenta como una base de datos central donde se registran y actualizan los detalles de cada producto, permitiendo una visión clara y sistemática de las existencias, los costos y las operaciones de almacén.

La información contenida en la base de datos de artículos incluye detalles identificativos como el código del artículo, la descripción, la unidad de medida y la información relacionada con los proveedores. Además, se pueden ingresar datos sobre precios, políticas de aprovisionamiento y gestión de lotes, facilitando las operaciones diarias de compra, venta y logística.

Gracias a esta base de datos, las empresas pueden hacer un seguimiento del estado de los artículos, automatizar procesos como el reabastecimiento de existencias y obtener informes detallados para una planificación de compras más eficaz. Además, la integración con otros módulos de Fluentis permite coordinar mejor las actividades de almacén, mejorando la eficiencia operativa y contribuyendo a una gestión de existencias más precisa y ajustada con el tiempo.
:::

El procedimiento para crear un nuevo artículo se abre a través de la ruta:
- **Inicio > Artículo > Crear Nuevo Artículo (Home > Articolo > Crea Nuovo Articolo)**,

o

- **Inicio > Artículos > Buscar Artículos (Home > Articoli > Ricerca Articoli)** haciendo clic en el botón **Nuevo (Nuovo)** presente en la barra de ribbon del formulario correspondiente.

Se abrirá el formulario **Base de datos de artículos (Anagrafica articolo)** compuesto por una sección en la que se definirán las *características obligatorias* del artículo y una sección inferior compuesta por varias pestañas que agrupan las *características específicas*.

## 1. **Cabecera (Testata)**

Las características fundamentales y obligatorias que debe tener cada artículo y que encontramos en la primera parte del formulario son: la [**Clase (Classe)**](/docs/guide/common/glossary/glossary-intro#item-class) (máximo 3 caracteres), el [**Código (Codice)**](/docs/guide/common/glossary/glossary-intro#item-code) (máximo 50 caracteres), una breve **Descripción (Descrizione)** y la [**Unidad de medida (Unità di misura)**](/docs/guide/common/glossary/glossary-intro#unit-of-measurement).

:::note
La combinación de la clase y el código debe ser única para ese artículo específico.
:::

#### Campos no obligatorios  
- **Segunda descripción (Seconda descrizione)**: una segunda descripción que puede atribuírsele al artículo;  
- **Configuración/Versión (Configurazione/Versione)**: combo a través del cual se selecciona la versión del artículo;  

Una vez que se han definido todas las características obligatorias del artículo, se procede a ingresar las más específicas a través de las diferentes pestañas que encontramos en la segunda parte de la ventana y que se tratarán en los siguientes documentos.

#### Botones específicos  

> **Actualización LF LV con Fórmula (Aggiornamento LF LV con Formula)**: botón que permite actualizar los precios de venta a través de fórmulas específicas a partir de los precios de lista;      
> [**Parámetros MRP (Parametri MRP)**](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): botón que permite acceder a los *Parámetros MRP* de ese artículo, donde se definen los parámetros que se necesitarán para gestionar ese artículo en producción; este es un botón que también encontraremos dentro de otros formularios relacionados con la parte de producción.  

## 2. **Generalidades (Generalità)**

:::important ¿Para qué sirve? (A cosa serve)
La pestaña Generalidades contiene la información principal y logística de los artículos, como el código, la descripción, la unidad de medida y otras clasificaciones opcionales, incluida la categoría de mercancías y la naturaleza del artículo.     
Esta pestaña permite definir detalles adicionales útiles para la gestión y la trazabilidad de los artículos dentro de los procesos empresariales, facilitando la organización y la elaboración de informes.
:::

#### Campos específicos  

**Fecha de inserción (Data inserimento)**: campo que se completa automáticamente al crear el artículo y que indica la fecha de creación del artículo;  
**Tipo impositivo (Aliquota IVA)**: combo a través del cual se selecciona e inserta la tasa de IVA relacionada con ese artículo; este campo tiene prioridad sobre la tasa de IVA que se atribuye al cliente/proveedor en la base de datos de contactos;  
**IVA de compras agrícolas / IVA de ventas agrícolas**: que tienen un método de gestión diferente;  
**Características y Modelo (Caratteristica e Modello)**: son dos campos no obligatorios en los que se proporciona una definición adicional del artículo según una serie de agrupaciones que se establecen dentro de la gestión empresarial de los productos;  
**Fatturato de compras (Fatturato acquisti)**: combo que se relaciona con un tipo de *Fatturato acquisti* que ha sido definido en la tabla de subcuentas contables para la contabilización de las facturas de compra;  
**Tipo de artículo (Tipo articolo)**: es una tabla no obligatoria en la que se puede ingresar una descripción adicional del artículo según otros agrupamientos internos;  
**Nomenclatura (Nomenclatura)**: en estos campos se selecciona a través de la ayuda, la nomenclatura (es decir, el código arancelario del artículo) útil para fines intrastat para la declaración de mercancías a la importación o exportación, así como para fines estadísticos en el comercio de artículos dentro de la UE;  
**Días de pago de mercancías perecederas (Giorni di pagamento merce deperibile)**: está relacionado con el artículo 62; para las mercancías perecederas, la factura debe crearse y pagarse dentro de un plazo de 30/60 días según el tipo de artículo. En este caso, este control se realiza tanto sobre el artículo como sobre el tipo de pago que se introduce, de modo que no se puedan emitir facturas con una fecha de inicio mayor que la indicada;  
**Fecha de última modificación (Data ultima modifica)**: indica la fecha de última modificación del artículo;  
**Categoría fiscal (Categoria fiscale)**: a través de esta combo se puede seleccionar la categoría fiscal a la que pertenece el artículo, que se utiliza para las impresiones fiscales de almacén, a fin de agrupar los inventarios por categoría fiscal;  
**Categoría de mercancías (Categoria merceologica)**: dato estadístico como la característica, y se utiliza en algunos informes específicos;  
**Fatturato de ventas (Fatturato vendite)**: al igual que para el fatturato de compras, esta combo sirve para la gestión de las subcuentas de ingresos por la venta del artículo;  
**Naturaleza del artículo (Natura articolo)**: es un campo que se utiliza para atribuir al artículo algunas características específicas para luego ser utilizado en algunos procedimientos particulares. En la combo encontramos la lista de las diversas naturalezas que podemos atribuir al artículo (haz clic para el [glosario](/docs/guide/common/glossary/glossary-intro#item-nature));
> **Equipo/Herramienta (Attrezzatura/Utensile)**: el artículo de esta naturaleza se puede asociar al registro de los instrumentos de medición y de los equipos presentes en las fases de los ciclos de procesamiento.  
> **Máquina/Planta (Macchina/Impianto)**: esta naturaleza se puede asociar al registro de las máquinas;  
> **Familia de artículos (Famiglia articoli)**: que define el artículo como una familia de artículos / productos de las previsiones de venta;  
> **Embalaje (Imballo)**: se utiliza para la gestión de los embalajes retornables, para la contabilidad (para entender cuántos embalajes tengo en casa y cuántos he dado al cliente o al proveedor y, por lo tanto, saber cuántos me deben devolver);  
> **Servicios (Servizi)**: para la gestión de las intervenciones post-venta;  
> **Préstamo de uso/Componente de planta (Prestito d’uso/Componente impianto)**: se utilizan para la gestión del mantenimiento;  

#### Opciones disponibles (Opzioni disponibili)  
**Control de calidad (Controllo qualità)**: si este indicador está activo, inicia el proceso de control de calidad, lo que significa que el artículo entrará en el flujo de calidad;  
**Ficticio (Fittizio)**: si está activo, este indicador sirve para declarar que el artículo no debe ser movido;  
**Interés fiscal (Interesse fiscale)**: si está activo, este indicador sirve para incluir el artículo en las impresiones fiscales del almacén;  
**ABC (ABC):** para ABC, en la gestión de inventarios con fines logísticos, se entiende un método de categorización del inventario que consiste en dividir los artículos en tres clases, denominadas A, B y C, donde A contiene los artículos más importantes y C los menos importantes. Es un método útil para enfocar la atención en los pocos productos esenciales y no en muchos productos de escasa importancia. Si este método es utilizado por la empresa, en este campo se encontrará la letra que define la categoría a la que pertenece el artículo;  
**En agotamiento (In esaurimento)**: si está activo, este indicador indica que el artículo está en agotamiento.  
Las condiciones para recibir la alerta de que el artículo está a punto de agotarse, en los documentos, por ejemplo en los pedidos de cliente, son:  
- en los [parámetros de pedidos de cliente (parametri Ordini cliente)](/docs/configurations/parameters/sales/sales-orders-parameters), debe estar configurado el indicador "Verificar artículos en agotamiento (Verifica articoli in esaurimento)";  
- en el registro de artículos (anagrafica articolo), debe estar configurado el indicador "En agotamiento (In esaurimento)" y, además, la "Fecha de agotamiento (Data esaurimento)" debe ser menor o igual a la fecha del pedido.  

**Fecha en agotamiento (Data in esaurimento)**: indica desde cuándo el artículo ha estado en agotamiento;  
**Artículo sin cálculo de disponibilidad (Articolo senza calcolo della disponibilità)**: si el indicador está activo, el sistema no considerará la disponibilidad para poder utilizar el artículo;  
**Archivado (Archiviato)**: si está activo, el artículo ya no aparecerá en la lista de artículos que se pueden utilizar, ya que se ha vuelto obsoleto;  
**Derechos de autor (Diritti d'autore)**: si está activo, indica que el artículo está sujeto a derechos de autor/royalties y se considerará en la [Gestión de royalties (Gestione royalties)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/royalties/). 

## 3. **Administración (Amministrazione)**

Dentro de esta pestaña se ingresan los centros empresariales (centros de costo) y el posible centro de beneficios del artículo, de tal manera que al recuperar el artículo en los documentos se muestre el centro o los centros seleccionados para luego ser utilizados en el proceso de contabilización.

**Cuadrícula de centros empresariales (Griglia dei centri aziendali)**: permite vincular el registro del artículo a uno o más centros empresariales; 

#### Campos de la cuadrícula de centros empresariales (Campi della griglia dei centri aziendali)  
> **Número (Numero)**: indica el número de la fila;  
> **Centro de costo (Centro di costo)**: permite recuperar el código del centro de costo;  
> **Descripción (Descrizione)**: indica la descripción;  
> **Porcentaje (Percentuale)**: indica el porcentaje de distribución entre los distintos centros de costo incluidos en la cuadrícula (si el centro es único será el 100%);  
> **División (Divisione)**: permite asociar el centro de costo al artículo en relación con la *División* empresarial seleccionada;  
> **Fecha de inicio / Fecha de fin de validez (Data inizio / Data fine validità)**: permiten atribuir una validez a la relación;  
> **Dimensión (Dimensione)**: permite especificar la dimensión del centro empresarial (para más detalles, consulte la tabla de [Centros Empresariales (Centri Aziendali)](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers));  
> **Categoría (Categoria)**: permite especificar la categoría del centro empresarial (para más detalles, consulte la tabla de [Centros Empresariales (Centri Aziendali)](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers)).
:::note Nota (Note)  
Si el parámetro *Gestión de controlling*, presente en la pestaña *Otras configuraciones (Altre impostazioni)* de la tabla [**Empresa (Società)**](/docs/configurations/tables/general-settings/company) está desactivado, este campo se utiliza para ingresar el centro de costo.  
:::

**Centro de beneficios (Centro di profitto)**: solo si el parámetro *Gestión de controlling*, presente en la pestaña *Otras configuraciones (Altre impostazioni)* de la tabla **Empresa (Società)** está desactivado, será gestionable y servirá para ingresar el centro de beneficios.

## 4. **Aprovisionamiento (Approvvigionamento)**

:::important ¿Para qué sirve? (A cosa serve)  
La pestaña de Aprovisionamiento del registro de artículos de Fluentis permite definir todos los parámetros necesarios para gestionar de manera óptima las existencias del artículo. En la primera sección, se configuran los datos generales como el stock mínimo y máximo, que indican los límites dentro de los cuales mantener las cantidades de almacén. Otros parámetros incluyen las semanas de cobertura, los días para el stock y el punto de reabastecimiento, que establece cuándo es necesario proceder con un nuevo pedido.  
Además, hay configuraciones disponibles para las impresoras de etiquetas y los tipos de informes de etiquetas, útiles para la gestión de lotes en los diferentes estados (Único, Conforme, No conforme, Cuarentena). En la segunda sección, es posible especificar estos parámetros para cada almacén en el que el artículo esté presente, ofreciendo una gestión precisa y personalizada del inventario.  
:::

En esta pestaña se definen todos los datos necesarios para el aprovisionamiento del artículo en cuestión.  
La ventana se compone de dos partes:  
a. En la primera parte se establecen los datos para el aprovisionamiento general del artículo y no por almacén individual:  

**Stock mínimo y stock máximo (Scorta minima e scorta massima)**: representan las cantidades mínimas que deben estar siempre presentes en el almacén para ese artículo y las cantidades máximas que se pueden mantener en el almacén;  
**Días para el stock (Giorni per la scorta)**: representa el número de días necesarios para reemplazar al menos el stock mínimo que se ha indicado para ese artículo;  
**Semanas de cobertura (Settimane di copertura)**: se indica el intervalo de tiempo (calculado en semanas) durante el cual el stock cubre la necesidad de ese artículo;  
**Índice de cobertura (Indice di copertura)**: es un campo editable en el que se inserta un porcentaje que puede ser considerado o no por el planificador o el MRP para el restablecimiento de existencias.  
Si en los parámetros MRP se activa el indicador *Considerar índice de cobertura (Considera indice copertura)* en el momento de la planificación, el procedimiento tendrá en cuenta el porcentaje indicado en este campo para restablecer la disponibilidad del artículo en una cantidad suficiente para cubrir la necesidad de las n semanas que se ha decidido especificar en el campo **Semanas de cobertura (Settimane di copertura)**;  
**Punto de reabastecimiento (Punto di riordino)**: aquí se indica a qué cantidad es necesario proceder con el reabastecimiento de ese artículo;  
**Días para el reabastecimiento (Giorni per il riordino)**: días necesarios para el restablecimiento del material en el almacén;  
**Intervalo de revisión del punto de reabastecimiento (Intervallo tempo revisione punto di riordino)**: se indica cada cuánto tiempo se debe revisar y actualizar el punto de reabastecimiento;  
**Fecha del último cálculo del punto de reabastecimiento (Data ultimo calcolo punto di riordino)**: se indica la fecha relativa a la última vez que se realizó el análisis y se estableció el punto de reabastecimiento indicado anteriormente.  

Luego hay dos secciones llamadas:  
- **Impresoras de etiquetas (Stampanti etichette)**: permite elegir las impresoras propuestas por defecto para imprimir las etiquetas de los lotes para los diferentes *Estados de lote (Stati lotto)*; se podrá elegir entre la impresora para el estado de lote *Único (Unico)*, *Conforme (Conforme)*, *No conforme (Non conforme)*, y *Cuarentena (Quarantena)*.  

- **Tipos de informes de etiquetas (Tipi report etichette)**: permite especificar los informes por defecto a imprimir para los lotes en los diferentes *Estados de lote (Stati lotto)*; se podrá elegir informes diferentes según el estado del lote *Único (Unico)*, *Conforme (Conforme)*, *No conforme (Non conforme)*, y *Cuarentena (Quarantena)*.  

b. En la segunda parte de la ventana, se indican los diferentes almacenes donde se puede encontrar el artículo y, si es necesario, se pueden definir algunos de los datos mencionados anteriormente (stock mínimo/máximo y días para el stock, punto de reabastecimiento y días para el reabastecimiento, impresión de etiqueta única/conforme/no conforme/cuarentena) para cada almacén individual (por ejemplo, el stock mínimo o el stock máximo que se podrá tener de ese artículo en ese almacén específico, y así sucesivamente para el resto de la información).

## 5. **Categoría de descuentos de compras (Categoria sconti acquisti)**  

En esta pestaña se ingresan las **Categorías de descuento** con las cuales se adquiere el artículo. Estas categorías son utilizadas por la **Gestión de precios** del módulo de compras.  

## 6. **Categoría de descuentos de ventas (Categoria sconti vendite)**  

En esta pestaña se ingresan las **Categorías de descuento** con las cuales se vende el artículo. Estas categorías son utilizadas por la **Gestión de precios** del módulo de ventas.  

## 7. **Clientes (Clienti)**  

En esta pestaña se puede asociar al artículo la lista de clientes que lo han adquirido.  

**Tipo de muestreo (Tipo campionamento)**: combo para definir el modo por defecto de muestreo de las muestras de un pedido de producción para ese artículo (por ejemplo, una muestra cada 100 piezas, o 1 muestra cada 3 pedidos, etc.). Los tipos de muestreo se codifican previamente en la tabla en la ruta **Tablas > Logística**.  

Grilla superior:  
**Cliente (Cliente)**: se debe indicar la cuenta/subcuenta y la descripción del cliente;  
**Lote económico (Lotto economico)**: se debe indicar el lote económico (la cantidad mínima que el cliente puede adquirir) con la unidad de medida correspondiente;  
**Artículo cliente (Articolo cliente)**: en esta sección se puede indicar el código y la descripción que el cliente asigna al artículo dentro de su base de datos; al indicar en esta sección su referencia, esta se incluirá en todos los documentos relacionados con ese cliente para ese artículo;  
**Sector de uso (Settore uso)**: aquí se indica el sector de uso del cliente;  
**Tipo de muestreo (Tipo di campionamento)**: en este caso, se selecciona el tipo de muestreo del artículo según el cliente al que está asociado, que podría ser diferente al seleccionado en el combo inicial de la ventana;  
**Ficha técnica (Scheda tecnica)**: en caso de que exista una ficha técnica ya redactada para este artículo, en esta sección se indican los detalles del documento;  
**Control final (Collaudo finale)**: en este campo se debe ingresar la información relativa al tipo, año, código y descripción del control final;  
**Variante (Variante)**: en este campo se debe ingresar la posible variante de ese artículo, seleccionándola a través del combo que contiene las variantes previamente codificadas en la tabla **Variantes Artículo**;  
**Notas (Note)**: sección donde se pueden ingresar notas adicionales.  

La grilla inferior puede contener información sobre los [Datos extra (Extra Data)](/docs/configurations/utility/extra-data/extradata/search-extradata).

#### Botones específicos  
> **Insertar clientes (Inserisci clienti)**: permite ingresar un nuevo cliente;  
> **Eliminar clientes (Cancella clienti)**: permite eliminar el registro de un cliente ingresado anteriormente.  

## 8. **Códigos de barras (Codici Barcode)**

Dentro de esta pestaña se pueden ingresar códigos alternativos también conocidos como códigos de barras que representan el artículo.  
Los códigos de barras son códigos que encapsulan algunas de las principales informaciones relacionadas con la codificación del artículo al que se asocian y son útiles para las operaciones de almacén. Estos códigos se leen a través de equipos específicos llamados móviles mediante rayos láser o barras LED.  
Los códigos de barras pueden ser de varios tipos.  
Las dos tipologías gestionadas por la base de datos son:  
- el EAN13 (significa que el código de barras puede tener una longitud máxima de 13 caracteres)  
- el EAN128 (significa que el código de barras debe tener una longitud de cifras par).  

En **Fluentis ERP** no hay parámetros ya definidos que indiquen cómo configurar el código de barras de manera que cumpla con las normativas relativas al EAN13 y 128, pero se pueden aplicar algoritmos personalizados que sigan el estándar y que chequeen el código de barras ingresado verificando que respete las normas mencionadas anteriormente.  
El formulario está compuesto por una cuadrícula en la que se puede insertar un **Nuevo** código de barras, mediante el botón **Insertar (Inserisci)** presente en la barra de herramientas, o yendo directamente a una nueva fila.  
En el campo **Tipo de código de barras (Tipo barcode)** se selecciona, a través del combo correspondiente, el tipo de código de barras que se desea codificar y en el campo **Código de barras (Barcode)** se ingresa el código de barras.

:::note Nota (Nota)  
Al activar el indicador **Exportar administración pública (Export pubblica amministrazione)**, presente en la tabla [Tipos de código de barras (Tipi barcode)](https://docs.fluentis.com/FluentisErp/docs/configurations/tables/general-settings/barcode-types/), el control de unicidad del código de barras ingresado se realiza solo a nivel del artículo individual, mientras que si el indicador está desactivado, el control de unicidad del código de barras se realiza a nivel global, es decir, para todos los artículos.  
:::

#### Botones específicos> **Validación (Validation)**: al presionar este botón, el sistema verifica que el código cumpla con las normas mencionadas anteriormente respecto a la longitud que debe tener según el tipo de código que se está ingresando;  
> **Eliminar códigos de barras (Cancella codici barcode)**: permite eliminar un código de barras ingresado anteriormente.

## 9. **Embalaje (Confezionamento)**

:::important ¿Para qué sirve? (A cosa serve)
La pestaña de embalaje del registro de artículos en Fluentis es esencial para definir la modalidad de embalaje de un artículo, especificando los tipos de Unidades de Carga (UDC) que lo componen. Esta configuración puede tener una estructura jerárquica, en la que un palé, por ejemplo, puede contener varias cajas, cada una de las cuales, a su vez, puede contener una cierta cantidad de artículos.

Definir correctamente el embalaje es fundamental porque permite generar automáticamente las UDC necesarias para el envío en el momento en que se prepara un pedido. 

Además, es posible asociar unidades de medida específicas para el volumen y definir la descripción para el cliente o proveedor, permitiendo así una gestión personalizada según las necesidades específicas de cada cliente. Por lo tanto, esta pestaña se configura como una herramienta clave para optimizar la logística y la gestión de almacenes.
:::

A través de esta pestaña se define la modalidad de embalaje del artículo, especificando qué tipos de unidad de carga lo componen.

Puede tener una estructura jerárquica ya que, por ejemplo, podemos establecer el palé como método de embalaje, el cual puede contener un determinado número de cajas que, a su vez, pueden contener un cierto número de artículos.

Definir el embalaje permite crear a través del sistema las unidades de carga necesarias para el envío cuando debemos preparar un pedido para la expedición;

La ventana se compone de una cuadrícula donde se ingresan la siguiente información:

**Tipo de unidad de carga / Tipo de unidad de carga contenido**: en estos campos se ingresan el tipo de unidad de carga, es decir, el tipo de embalaje, y el tipo de contenido seleccionando la opción correspondiente a través del menú desplegable; los datos presentes en estos campos han sido codificados previamente en la tabla [Tipos de unidad de carga](/docs/configurations/tables/logistics/loading-unit-types);  
**Cantidad**: en este campo se indica la cantidad que esa unidad de carga puede contener;  
**Prioridad**: en este campo se indica la prioridad del embalaje (por ejemplo, si tenemos un palé que contiene cajas, se debe determinar la prioridad para que, al crear las unidades de carga, el sistema ya conozca la prioridad del embalaje);  
**Cuenta / Subcuenta / Descripción cliente/proveedor**: en este campo se inserta el cliente/proveedor que solicita este tipo de unidad de carga. Así, es posible definir diferentes unidades de carga a nivel de cliente individual;  
**Dimensión Unidad de medida**: en este campo se selecciona la unidad de medida para las dimensiones de la unidad de carga; al ingresar el **Tipo de unidad de carga**, este valor se tomará de la tabla [Tipos de unidad de carga](/docs/configurations/tables/logistics/loading-unit-types);   
**Altura / Ancho / Profundidad**: en estos campos se especifican las dimensiones de la unidad de carga completa; al ingresar el **Tipo de unidad de carga**, estos valores se tomarán de la tabla [Tipos de unidad de carga](/docs/configurations/tables/logistics/loading-unit-types) solo si el indicador **Volumen variable** (presente siempre en Tipos de unidad de carga) está desactivado; de lo contrario, los datos no se propondrán y deberán ser ingresados manualmente por el operador dado que no se puede prever cómo se posicionan los artículos en la unidad de carga seleccionada. En cualquier caso, pueden ser modificados manualmente, y cada cambio recalculará también el **Volumen**;  
**Unidad de medida volumen**: en este campo se indica la unidad de medida del volumen de la unidad de carga; al ingresar el **Tipo de unidad de carga**, este valor se registrará a partir de la tabla [Tipos de unidad de carga](/docs/configurations/tables/logistics/loading-unit-types);   
**Volumen**: en este campo se indicará el volumen de la unidad de carga completa. Si el indicador **Volumen variable** está activo, al ingresar el **Tipo de unidad de carga**, este valor se calcula sumando el volumen de la unidad de carga vacía presente en la tabla [Tipos de unidad de carga](/docs/configurations/tables/logistics/loading-unit-types) y el volumen del artículo (tomado del campo *Volumen* presente en la pestaña Pesos / Dimensiones del registro de artículos multiplicado por la cantidad correspondiente) del volumen de las unidades de carga contenidas; en cambio, si el indicador **Volumen variable** no está activo, al ingresar el **Tipo de unidad de carga**, se mostrará directamente el valor del volumen de la unidad de carga vacía presente en la tabla [Tipos de unidad de carga](/docs/configurations/tables/logistics/loading-unit-types) ya que este no es variable. En caso de que se modifiquen las dimensiones de **Altura / Ancho / Profundidad**, el valor del **Volumen** se recalculará en consecuencia. El **volumen** también se recalculará si hay variaciones en el volumen del **Tipo de unidad de carga contenido**. Este valor siempre puede ser modificado manualmente;  
**Volumen variable**: indica que se trata de una unidad de carga con volumen variable, por lo tanto, el volumen total variará dependiendo de lo que y cómo se cargue; es un campo de solo lectura que puede ser valorado en la tabla [Tipos de unidad de carga](/docs/configurations/tables/logistics/loading-unit-types);  
**Unidad de medida Peso**: en este campo se indica la unidad de medida del peso de la unidad de carga; al ingresar el **Tipo de unidad de carga**, este valor se registrará a partir de la tabla [Tipos de unidad de carga](/docs/configurations/tables/logistics/loading-unit-types);      
**Peso**: en este campo se indicará el peso de la unidad de carga completa; al ingresar el **Tipo de unidad de carga** y la **Cantidad**, este valor se calculará sumando el peso de la unidad de carga vacía presente en la tabla [Tipos de unidad de carga](/docs/configurations/tables/logistics/loading-unit-types) con el peso de los artículos (tomado del campo *Peso bruto* presente en la pestaña Pesos / Dimensiones del registro de artículos multiplicado por la cantidad correspondiente) o del peso de las unidades de carga contenidas. Este valor siempre puede ser modificado manualmente;  
**Tolerancia dimensiones/Tolerancia cantidad**: se utilizan en personalizaciones y serían útiles cuando, a partir de un plan de carga, se crea una lista de UDC para el retiro con las unidades de carga disponibles en el almacén. La procedimiento debería insertar en la lista UDC, unidades de carga con dimensiones o cantidades que difieren de las especificadas en el embalaje para los porcentajes indicados. Actualmente no se utilizan en estándar;                
**Dimensiones obligatorias**: si está activo, este indicador indica que las dimensiones especificadas son obligatorias;  
**Unidad de carga obligatoria**: si está activo, este indicador indica que este artículo debe ser gestionado obligatoriamente a través de unidades de carga en las declaraciones de producción y en la recepción de mercancías del WMS;  
**Descripción tipo unidad de carga / Descripción Tipo unidad de carga contenido**: en estos campos, una vez ingresados el tipo de unidad de carga y el tipo de unidad de carga contenido, se visualizarán automáticamente las descripciones de los tipos seleccionados.

## 10. **Costos (Costi)**

:::important ¿Para qué sirve? (A cosa serve)
En la pestaña Costos del registro de artículos de Fluentis, los usuarios pueden registrar varios tipos de costos asociados, incluidos el costo último y el costo medio ponderado, que se actualizan automáticamente según los movimientos de almacén. El costo último representa el último precio de compra registrado, mientras que el costo medio es el resultado de los movimientos de almacén, útil para calcular el valor de las existencias.      
La pestaña también permite definir un costo estándar, utilizado como referencia para el año y que generalmente se actualiza anualmente. Además, es posible ingresar el precio de venta, a partir del cual se pueden crear listas de precios de venta.           
Esta información es fundamental para la valorización de las existencias en el almacén y para la planificación financiera, contribuyendo a una gestión más efectiva de los artículos en el almacén.
:::

Dentro de esta pestaña se ingresan varios costos asociados al artículo.

#### Campos específicos  
**Costo último (Costo ultimo)** y el **Costo medio (Costo medio)**: por costo último se entiende el último costo de compra (el más reciente), mientras que para costo medio ponderado se refiere al costo medio que deriva de los movimientos de almacén. Para ambos costos, la causal utilizada para el movimiento del almacén debe tener activadas las casillas de actualización *Costo medio/Costo último* junto con *Actualizar costo artículo* y *Interés fiscal*, de este modo, los movimientos relativos serán considerados en el cálculo de los costos.   
**Costo estándar/costo estándar siguiente (Costo standard/costo standard successivo)**: el costo estándar es un costo establecido manualmente o por el procedimiento de cálculo de costo y indica el costo de referencia para un artículo determinado a utilizar durante el año. Generalmente es un costo que se actualiza al inicio o al final del año. Para los artículos de compra, suele corresponder al costo medio, mientras que para los otros artículos se calcula a partir del procedimiento de [Cálculo de costo](/docs/controlling/cost-calculation/cost) que se encuentra en el área de *Controlling*, como suma de los costos de los materiales y de los costos de las fases de producción.  
Todos estos costos pueden ser utilizados para la valorización de la lista de materiales, de las existencias del almacén, o (para los artículos de compra) para la valorización de los pedidos de producción (y movimientos de carga relacionados) cuando se cargue en el almacén un artículo de un pedido de producción.  
**Precio de venta (Prezzo di vendita)**: precio base a partir del cual se puede crear una lista de precios de venta en caso de que se considere una lista nacional de partida, por ejemplo. Si no hay listas para este artículo, en los documentos este artículo tomará este precio. (salvo en los documentos de devolución, donde el artículo toma por defecto el precio indicado en el costo último, que se debe verificar bien) (no se utiliza mucho).  
**Categoría de descuento/Configuración de rangos de precios/Fórmulas para la actualización de políticas de descuento**: son datos puramente comerciales que sirven para la actualización de precios.  
Se utilizará en los documentos, no reflejará nunca los descuentos provenientes de las listas donde se contiene y no se calcularán las comisiones sobre las ventas de este artículo.

## 11. **Descripción de artículos en idioma (Descrizione articoli in lingua)**

Esta pestaña permite ingresar la **Descripción en idioma** y la **Descripción 2** del artículo en los varios idiomas de trabajo utilizados.

#### Campos específicos  
**Idioma (Lingua)**: a través de este menú desplegable se selecciona el idioma que se desea agregar; los idiomas entre los que se puede seleccionar han sido previamente codificados en la tabla correspondiente;  
**Descripción en idioma (Descrizione in lingua)**: en este campo se ingresa manualmente la descripción del artículo en el idioma elegido;  
**Descripción 2 (Descrizione 2)**: en este campo se ingresa manualmente la descripción secundaria del artículo en el idioma elegido.

## 12. **Datos Extra (Extra Data)**

Se remite a la documentación relacionada con los [Datos Extra (Extra Data)](/docs/configurations/utility/extra-data/extradata/search-extradata).

## 13. **Proveedores preferenciales (Fornitori preferenziali)**

:::important ¿Para qué sirve? (A cosa serve)
La pestaña Proveedores Preferenciales dentro del registro de artículos de Fluentis es una funcionalidad clave para la gestión de aprovisionamientos. Esto permite definir de manera precisa los proveedores preferenciales para cada artículo, facilitando así el proceso de aprovisionamiento y garantizando que se elijan los proveedores más adecuados.
En su interfaz, la sección se divide en dos partes principales. La primera parte se refiere a información general sobre los proveedores, como la selección de un proveedor predeterminado, que se convierte en el canal principal de aprovisionamiento para el artículo en cuestión. Aquí, los usuarios también pueden establecer parámetros importantes como la cantidad máxima que se puede ordenar, las tolerancias sobre las cantidades y precios, así como los detalles relacionados con los pedidos de suministro. La segunda parte ofrece una cuadrícula detallada donde se pueden añadir informaciones específicas sobre cada proveedor, como el tiempo de aprovisionamiento y posibles notas.
:::

En esta pestaña se pueden definir, para cada artículo, cuáles son los proveedores preferenciales de los que se suele aprovisionar dicho artículo, indicando uno por defecto para que el sistema siempre ordene desde el mismo proveedor.

La ventana se compone de dos secciones:  
1. En la primera sección se ingresan las informaciones relativas a todos los proveedores preferenciales, en caso de que estas informaciones sean generales, tales como:

**Relación de proveedor obligatoria (Relazione fornitore obbligatoria)**: si está activo, este indicador indica que este artículo solo se puede comprar al proveedor predeterminado que será indicado en la cuadrícula en la segunda parte de la pantalla;  
**Número máximo de filas de prueba (Numero massimo righe di prova)**: es el número máximo de filas de pedido que se pueden hacer para un artículo/proveedor dado hasta que el indicador **Bloqueo de filas de pedido (Blocco righe ordine)** esté activo;  
**U.M. de compra (U.M di acquisto)**: en este campo se indica la unidad de medida de compra de ese material;  
**Valor máximo adquirible (Valore massimo acquistabile)**: en este campo se indica la cantidad máxima que se puede ordenar de ese proveedor para ese artículo;  
**Bloqueo de filas de pedido (Blocco righe ordine)**: si está activo, este indicador indica que se desea bloquear la posibilidad de insertar nuevas filas de pedido de proveedor;  
**Fecha de bloqueo (Data Blocco)**: indica la fecha en la que se activa el bloqueo de filas de pedido de proveedor;  
**% tolerancia en cantidad recibida en exceso y en defecto (% tolleranza quantità ricevuta in eccesso e in difetto)**: en estos dos campos se indica el % de tolerancia sobre la cantidad entregada en más y en menos por el proveedor para ese material;  
**% tolerancia en precio en exceso y en defecto (% tolleranza prezzo in eccesso e in difetto)**: en estos dos campos se indica el % de tolerancia sobre el precio del proveedor en exceso y en defecto respecto al precio establecido;  
**Permitir precio a cero (consenti prezzo a zero)**: si está activo, este indicador permite emitir pedidos a proveedores con precio a cero para ese artículo.

2. En la segunda parte de la pantalla se encuentra una cuadrícula, donde se indicará el proveedor predeterminado y otros proveedores que se utilizan para la compra del artículo y los datos respectivos para cada proveedor:  
**Proveedor (Fornitore)**: se indicará la cuenta/subcuenta/descripción del proveedor;  
**Predeterminado (Default)**: este indicador, si está activo, indica el proveedor predeterminado en caso de múltiples proveedores;  
**Lote económico (Lotto economico)**: en esta sección se indicará el lote económico mínimo y sus múltiplos para cada proveedor;  
**Artículo proveedor (Articolo fornitore)**: en esta sección se podrá agregar el código y la descripción que el proveedor utiliza para identificar el artículo;  
**Tiempo de aprovisionamiento (Tempo di approvvigionamento)**: se indicará para cada proveedor la gestión, es decir, el tiempo necesario para que el proveedor reproduzca/adquiera ese artículo, el tiempo de envío y el tiempo total, la suma de los dos datos anteriores que indica el tiempo necesario para reabastecer el stock de material;  
**Orden de compra (Ordine di acquisto)**: en esta sección se indicarán para cada proveedor las informaciones relativas a los pedidos de compra ya detalladas anteriormente (U.M, bloqueo de fila, fecha de bloqueo, número máximo de filas, valor máximo, % de tolerancia en cantidad recibida en exceso/difecto);  
**Productor (Produttore)**: en esta sección se indicará la cuenta y la descripción del productor del material;  
**Origen (Origine)**: indica el origen de la mercancía, por ejemplo, el país de procedencia o la proveniencia de origen animal o vegetal;     
**Controles de aceptación (Controlli di accettazione)**: en este campo se indicarán los controles necesarios que deben llevarse a cabo al aceptar el material antes de poder utilizarlo;  
**Variante (Variante)**: en este campo se ingresará la posible variante del proveedor de ese artículo;  
**Notas (Note)**: en esta sección se pueden añadir posibles notas relativas al proveedor en cuestión.

## 14. **Imágenes (Immagini)**

Esta pestaña permite asociar imágenes al artículo.

A través del botón **Agregar imagen (Aggiungi immagine)** es posible insertar una imagen dentro de la pestaña.

Este procedimiento no se utiliza con frecuencia ya que en cada formulario está disponible la función [**Adjuntar documentos (Allega documenti)**](/docs/guide/common/common-buttons#document-manager) que permite adjuntar varios tipos de documentos, incluidas las imágenes.

## 15. **Listas de proveedores (Listini fornitori)**

En esta pestaña se enumeran todas las listas de proveedores en las que está presente el artículo. La cuadrícula es de solo lectura.

## 16. **Listas de precios de venta (Listini di vendita)**

En esta pestaña se enumeran todas las listas de clientes en las que está presente el artículo. La cuadrícula es de solo lectura.

## 17. **Lotes y números de serie (Lotti e serial number)**

:::important ¿Para qué sirve? (A cosa serve)
La pestaña "Lotes y Números de Serie" en el registro de artículos de Fluentis permite una gestión detallada de los materiales a través de dos variantes: la gestión por lotes y la gestión mediante números de serie.
La gestión por lotes permite organizar los artículos en grupos homogéneos que pueden ser tanto de compra como de producción. Cada lote está identificado por un código único que permite rastrear sus movimientos y existencias, incluso en escenarios de múltiples almacenes. Dentro de la gestión por lotes, los usuarios pueden definir el tipo de extracción (FIFO, fecha de caducidad o manual), seleccionar el tipo de código de lote para definir su codificación. Esta gestión es fundamental para artículos sensibles como los alimentarios y farmacéuticos.

Alternativamente, la gestión mediante número de serie ofrece la posibilidad de rastrear cada pieza a través de un número de serie único. Esto es particularmente útil para artículos de alto valor o críticos, donde cada unidad requiere un seguimiento preciso. Las opciones disponibles incluyen la modalidad de generación del número de serie (manual o automática) y la validez temporal del número mismo.

Por lo tanto, esta pestaña es un elemento crucial para garantizar la trazabilidad, el cumplimiento normativo y la gestión eficiente de los inventarios en el almacén, contribuyendo así a optimizar la logística empresarial.
:::

El artículo puede ser gestionado por lotes o por números de serie, y de cada código de artículo se pueden crear subgrupos que, a su vez, pueden ser gestionados por lotes o por números de serie.

Los lotes son grupos de cantidades homogéneas de artículos que ingresan a la empresa (lotes de compra) o que son producidos en la propia empresa (lotes de producción).

Cada lote debe poder ser identificado por un código único, a partir del cual se pueden obtener algunas informaciones que caracterizan el lote en sí. Este código puede ser definido por la empresa en la ventana **Tipo de código de lote**, o en el caso de lotes de compra, se puede optar por mantener el mismo código de lote del proveedor.

Cada lote debe poder ser rastreado y, en el caso de múltiples almacenes, gracias al código de lote, se debe poder hacer seguimiento de los datos de existencias para cada almacén.

Dentro de esta pestaña, se irán a definir los parámetros en función del tipo de gestión que se elija para ese artículo específico y que se aplicará a través de los indicadores correspondientes que encontramos al principio de esta pestaña: **Gestionado por lotes (Gestito a lotti)** y **Gestionado con número de serie (Gestito con serial number)**.

### Gestión por lotes (Gestione a lotti)

**Tipo de extracción del lote (Tipologia di prelievo del lotto)**: indica si el tipo de extracción es F.I.F.O., por fecha de caducidad o manual (es decir, elegido por el operador);  
**Tipo de código de lote (Tipo codice lotto)**: en este caso se selecciona el tipo de código de lote (y las características relacionadas establecidas para crearlo) que se ha definido en la ventana *Tipo código de lotto* y que está dado por la concatenación de varios campos;  
**Estado inicial del lote (Stato iniziale lotto)**: normalmente, cada lote se caracteriza también por un estado que define su validez. Para ciertos tipos de materiales, como productos alimentarios y farmacéuticos, el estado es obligatorio (por ejemplo, en el ámbito farmacéutico un lote que necesita análisis antes de poder ser utilizado tendrá como estado inicial *en cuarentena* hasta que se completen los análisis); para este tipo de productos, el estado estará acompañado de una fecha de caducidad para evitar la venta y el uso de mercancía caducada. Según el estado del lote, se podrá elegir gestionar de manera Rfid o Rfid único;  
**Gestionado por RFID (Gestito RFID)**: si se activa, el artículo será gestionado mediante tecnología Rfid (radiofrecuencia) a través de la aplicación;  
**RFID único (RFID unico)**: si se activa, el código RFID asociado al artículo es único para ese artículo;  
**Tipos de caducidad del lote (Tipi di scadenza lotto)**: para seleccionar el tipo de caducidad que se quiere atribuir al lote (si por fecha de caducidad, el último día del mes de caducidad, el primer día del mes de caducidad);  
**Modificar fecha de caducidad del lote (Modifica data di scadenza del lotto)**: si se activa, permite modificar manualmente la fecha de caducidad del lote;  
**Anticipación de bloqueo del lote expresada en días (Anticipo blocco lotto espresso in giorni)**: los dos campos **Aviso bloqueo (Avviso blocco)** y **Bloqueo (Blocco)** permiten expresar, en días, cuándo avisar que se está por bloquear ese lote y establecer el día de bloqueo del lote;  
**Lote mono proveedor (Lotto mono fornitore)**: si se activa, indica que a ese lote pertenecerán solo artículos con el mismo proveedor;  

Se puede optar por gestionar el artículo a través de **Gestión con Número de Serie (Gestione con serial number)**. En este caso, para cada pieza se crea un número de serie que identifica de manera única esa pieza dentro de la estructura para poder rastrearla. Este tipo de gestión es particularmente adecuada para artículos considerados *críticos* o de *alto valor* para los cuales es necesario mantener un registro de cada pieza movida y no de una cantidad total.

### Gestión con número de serie (Gestione con serial number)

**Tipo de código de número de serie (Tipo codice serial number)**: para seleccionar el tipo predeterminado en la tabla **Tipo de código de número de serie**;  
**Días de validez del número de serie (Giorni validità del serial number)**: para indicar cuántos días este código será válido;  
**Generación del número de serie (Generazione del serial number)**: para establecer la modalidad de creación del número de serie, si manual o automática; cuando está configurada como automática, significa que para todos los movimientos con motivo de *carga* y con el indicador *Crear número de serie* activo (en el motivo mismo), al ingresar el lote, los números de serie se crearán automáticamente.

## 18. **Notas (Note)**

Esta pestaña permite asociar notas libres al artículo.

## 19. **Matrices (Matrici)**

Esta pestaña se activa solo si se ha configurado una [Configuración (Configurazione)](/docs/configurations/tables/CPQ/principal-configurations) en la cabecera del Artículo.  
Se gestiona en caso de que sea necesario gestionar las matrices para la combinación de los atributos de un artículo y permite definir las combinaciones posibles para el artículo.  
Primero es necesario asignar un **Código** identificativo único y una **[Definición de matriz (Definizione di matrice)](/docs/configurations/tables/CPQ/matrices-definition)** (que contiene el conjunto de atributos que compondrán la matriz); según la definición seleccionada, en las pestañas siguientes será posible seleccionar solo los [Datos Extra (Extra Data)](/docs/configurations/utility/extra-data/extradata/search-extradata) válidos para esta matriz.  

Al moverse a la sección *Valores de dimensión permitidos (Valori dimensione consentiti)*, el siguiente paso es seleccionar, uno a uno, los Datos Extra del combo box **Atributo**. Una vez seleccionado el atributo, en la cuadrícula *Resultados disponibles (Risultati disponibili)* se muestran los valores del Extra Data (por ejemplo, si seleccionamos el atributo Talla, en esta cuadrícula se mostrarán los valores del Extra Data: XS, S, M, L, XL, etc.). Una vez seleccionados los valores del atributo que queremos hacer válidos para esta matriz, es necesario arrastrarlos a la cuadrícula *Valores admitidos (Valori ammessi)* para indicar que esos valores serán válidos para las combinaciones de la matriz.  
Una vez elegidos los valores válidos para cada atributo, automáticamente aparecerán nuevas pestañas, una para cada matriz de soporte y una pestaña para la matriz completa, que unirá las varias matrices de soporte para tener una única con todas las combinaciones posibles.  
Al moverse a las pestañas generadas por las matrices de soporte, es necesario marcar las combinaciones de valores válidos. Para cada combinación, se debe insertar el indicador solo si es válida.  
En la pestaña de la *Matriz completa*, en cambio, se genera una matriz única con todas las combinaciones válidas, establecidas en la pestaña anterior.  
La matriz ahora puede ser utilizada en los objetos para los cuales ha sido configurada.  

## 20. **Pesos/Dimensiones (Pesi/Dimensioni)**

:::important ¿Para qué sirve? (A cosa serve)
La pestaña Pesos y Dimensiones del registro de artículos de Fluentis es esencial para la gestión logística de los artículos. En esta sección, los usuarios pueden especificar detalles sobre las dimensiones y el peso de los artículos, facilitando las operaciones de almacén y aprovisionamiento.  
Esto permite la entrada de las dimensiones (longitud, ancho, altura) utilizando la unidad de medida elegida y calcula automáticamente el volumen.  
Además, es posible definir el peso bruto, neto y específico, información importante para la planificación de envíos y la gestión de costos.
:::

#### Dimensiones del artículo (Dimensioni articolo)

En el combo, el usuario tiene la opción de elegir la unidad de medida de la dimensión entre las opciones propuestas y en la zona inferior puede indicar la primera, segunda y tercera dimensión y su valor, para poder indicar la altura, el ancho y la profundidad.

#### Volumen (Volume)  
En el combo se elegirá la unidad de medida del volumen y en el campo inferior se indicará el valor del volumen de referencia.

#### Tipo de material (Tipo di materiale)  
En el combo se selecciona el tipo de material entre los tipos de materiales pre-codificados en la tabla **Tablas > Logística > Tipos de material**.  
Además, también es posible definir el tipo de perfil del material con las dimensiones correspondientes.

#### Peso (Peso)  
En el combo se seleccionará la unidad de medida del peso, y se indicará a continuación el peso bruto, el peso neto y el peso específico. El peso bruto y el peso neto son los que se reflejan en los varios documentos relacionados con el artículo.

#### Tipo de unidad de carga (Tipo unità di carico)  
En el combo se define el embalaje del artículo (si pallet, europallet, etc.) y en el campo inferior se pueden indicar el número de artículos por unidad de carga. Según el tipo de unidad de carga y los artículos por tipo de unidad de carga, al crear los planes de carga se podrá obtener automáticamente el cálculo de las cantidades y el embalaje para la preparación de los medios. Es importante notar que estos valores se tienen en cuenta si no hay valores generales en la pestaña [Embalaje (Confezionamento)](/docs/erp-home/registers/items/create-new-item).

#### Número de bultos (Numero di colli)  
Esta sección sirve para gestionar el número de bultos en los documentos; se pueden gestionar en base al número de artículos por bulto, o al número de bultos para formar el artículo, configurando el indicador en el parámetro que se desea utilizar para este cálculo; de este modo, el cálculo del número de bultos se reflejará automáticamente en los documentos.

## 21. **Calidad (Qualità)**

En esta pestaña se definirán toda una serie de informaciones útiles para los procesos de control de calidad (donde los haya) para ese artículo.

#### Ubicaciones

En esta sección se definirá el lugar dentro del almacén donde debe estar ubicado el artículo; en particular se podrán definir:

**Tipo de ubicación (Tipo di ubicazione)**: es decir, dónde queremos ubicar el artículo;  
**Ubicación mono-artículo (Ubicazione mono-articolo)**: si está activo, este indicador indica que en esa ubicación podrá estar ubicado solamente ese tipo de artículo; no podrá haber dos artículos diferentes en esa misma ubicación simultáneamente;  
**Ubicación mono-lote (Ubicazione mono-lotto)**: si está activo, este indicador indica que en esa ubicación podrá estar ubicado no solo un tipo de artículo, sino que de ese artículo solo podrá estar ubicado un lote y no más lotes del mismo artículo simultáneamente.

#### Registros de almacén (Registrazioni di magazzino)

En esta sección se definen informaciones útiles para el registro de almacén de este artículo, tales como:  
**Carga manual permitida (Carico manuale permesso)**: si está activo, este indicador indica que este artículo podrá ser cargado manualmente en el almacén;  
**Bloqueo de movimiento (Blocco movimento)**: se utiliza en personalizaciones para bloquear el guardado de un registro manual si el valor respectivo (del estándar o real del artículo o del lote) supera el especificado **Valor máximo de carga/valor máximo de descarga**. No se usa en estándar;  
**Valor máximo de carga/valor máximo de descarga (Valore massimo carico/valore massimo scarico)**: se utilizan en personalizaciones (junto con el indicador **Bloqueo de movimiento**) como valores de referencia para bloquear el guardado de un registro manual si el valor respectivo (del estándar o real del artículo o del lote) supera el especificado. No se utilizan en estándar;  
**Costo a utilizar (Costo da utilizzare)**: en esta subsección se indica cómo se pretende valorar el artículo, considerando el costo real o el costo estándar;

#### Compras (Acquisti)

En esta sección se indica si al momento de la recepción del material de compra se deben realizar chequeos de entrada sobre el material o si estos no son requeridos, indicando:  
**Controles en aceptación (Controlli in accettazione)**: a través del combo se selecciona el tipo de control que debe hacerse (si interno/no normalizado/normalizado/oficial) y en los campos junto a través de la ayuda se indicará el Tipo de plan de control eligiendo entre los planes de control codificados dentro de la forma correspondiente a la que se accede mediante la ruta **Calidad > Planes de control (Qualità > Piani di controllo)**.  
**Controles en aceptación no requeridos (Controlli in accettazione non richiesti)**: si está activo, este indicador indica que, al contrario, no se requieren controles en aceptación. 

#### Producción (Produzione)

En esta sección se especifican informaciones relacionadas con la producción del material, siempre conectadas al control de calidad, tales como:

**% tolerancia de cantidad producida (% tolleranza quantità prodotta)**: en este se indicará el porcentaje de tolerancia sobre la cantidad producida en más y/o en menos,  

**Ficha técnica (Scheda tecnica)**: en estos campos se selecciona, donde esté presente, la ficha técnica y el tipo de ficha técnica relacionadas con este artículo;  

**Ficha técnica no requerida (Scheda tecnica non richiesta)**: en caso de que el material no necesite ficha técnica, este indicador se activará;  

#### Calidad (Qualità)

En esta sección se indicará el tiempo de análisis necesario para realizar los controles preliminares sobre el artículo:  
**Tiempo de análisis (Lead time analisi)**: si está activo, este indicador indica que para ese material son necesarios controles de calidad que requieren por lo tanto un período de tiempo (en días) que se indica en el campo junto; esto sirve para establecer después de haber recibido el material, después de cuántos días es posible utilizarlo en producción o en el caso de un producto terminado, después de cuántos días de su producción es posible enviar el material.

#### Postventa (Post vendita)

En esta sección final se indicará la posible garantía otorgada sobre el material y los días de garantía establecidos activando el indicador **Con Garantía (Con Garanzia)** y agregando en el campo editable el número de días de garantía; en caso de que el material no tenga garantía, el indicador permanecerá desactivado.

## 22. **Gastos (Spese)**

Dentro de esta pestaña es posible añadir/gestionar gastos relacionados con el artículo que pueden ser, por ejemplo, gastos varios, gastos de eliminación, etc.  

Estos gastos se codifican en la tabla correspondiente **Gastos (Spese)**.  

La pantalla consta de una cuadrícula en la que se introducen los gastos que se desean gestionar para ese artículo entre los presentes en los tipos de gastos codificados previamente.  
**Tipo (Tipo)**: a través de este combo se selecciona el tipo de gasto que deseamos añadir de la lista de gastos mediante el combo correspondiente;  
**Descripción (Descrizione)**: campo que se completa automáticamente una vez seleccionado el tipo de gasto, y que muestra la descripción del gasto elegido;  
**Importe (Importo)**: en este campo se debe introducir manualmente el importe de dicho gasto en la moneda de referencia;  
**Fecha (Data)**: a través de este combo, se introduce la fecha de inicio de validez del gasto para este artículo;  
**Fecha de finalización (Data fine)**: en este campo se puede introducir la posible fecha de finalización de validez del gasto para ese artículo.  

En caso de que sea necesario introducir más tipos de gastos, se debe pasar a la fila siguiente y repetir el procedimiento de adición del gasto recién ilustrado.

:::note Nota
Los gastos ingresados en esta pestaña se reflejan en la pestaña *Resumen (Riepiloghi)* de los pedidos de clientes en la sección **Gastos (Spese)**.
:::

## 23. **U.M. alternativa (U.M alternativa)**

:::important ¿Para qué sirve? (A cosa serve)
La pestaña Unidad de Medida Alternativa en el registro de artículos de Fluentis ofrece una funcionalidad importante para la gestión de las diferentes unidades de medida asociadas a cada artículo. En esta pestaña se puede definir una unidad de medida alternativa, útil para gestionar artículos que pueden ser tratados en más de una unidad. Este enfoque permite simplificar las operaciones de aprovisionamiento y almacén, ya que los diversos operadores pueden utilizar una unidad de medida con la que se sientan más cómodos o que mejor se adapte a sus necesidades operativas.  
En la pestaña hay secciones para especificar el factor de conversión entre la unidad de medida principal y la alternativa, permitiendo calcular automáticamente la cantidad requerida.  
Las opciones disponibles incluyen configuraciones para definir si una unidad de medida es predeterminada o obligatoria, así como para determinar cuáles unidades de medida son prioritarias durante las operaciones de gestión de inventarios.  
A través de estas funcionalidades, las empresas pueden gestionar de manera más eficiente los inventarios y los pedidos, adaptando la información relativa a las unidades de medida a las necesidades operativas específicas y mejorando la interoperabilidad entre diferentes sistemas de gestión, como el Warehouse Management System (WMS).
:::

En esta pestaña se indica, donde sea necesario, la unidad de medida alternativa del artículo. 

El artículo puede ser gestionado en ambas unidades de medida y creando relaciones entre las dos.

**Unidad de medida (Unità di misura)** y **Descripción (Descrizione)**: se indicará entonces la unidad de medida alternativa con su descripción;  
**Factor de conversión (Fattore di conversione)**: aquí se define el factor de conversión entre la unidad de medida principal y la unidad de medida alternativa; la *cantidad alternativa* en los documentos se calcula en base a la configuración realizada en los [Parámetros iniciales de almacén (Parametri iniziali di magazzino)](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)  
**Predeterminado (Default)**: si está activo, este indicador señala cuál es la unidad de medida de referencia entre N alternativas posibles para el artículo;  
**Obligatoria (Tassativa)**: si está activo, este indicador determina la invariabilidad del factor de conversión. Cuando se va a ingresar la unidad de medida de gestión a través del factor de conversión, el sistema calculará automáticamente la unidad de medida alternativa, y viceversa. Si el indicador Obligatoria no está activo, esa unidad de medida alternativa puede configurarse como unidad de medida primaria, independientemente del indicador **Prioritaria**;  
**Prioritaria (Prioritaria)**: si está activo, la actualización de la *cantidad de gestión* no cambia la *cantidad alternativa* porque esta última tiene prioridad, mientras que en el caso de que se modifique la *cantidad alternativa*, la *cantidad de gestión* se recalcula en función de la cantidad alternativa según el factor de conversión;  
**Predeterminado WMS (Default WMS)**: si está activo, indica que esta unidad de medida será la utilizada por defecto dentro del WMS.

## 24. **Variantes (Varianti)**

:::important ¿Para qué sirve? (A cosa serve)
La pestaña Variantes del registro de artículos de Fluentis proporciona la funcionalidad para insertar y gestionar las variantes de un artículo determinado. Esta opción es especialmente útil cuando es necesario crear un nuevo artículo que difiera solo marginalmente de uno ya existente. En estos casos, la creación de una variante es preferible a la creación de un nuevo artículo, sobre todo cuando las características principales del artículo original permanecen sustancialmente inalteradas.  
Un ejemplo práctico de esta funcionalidad se puede observar en el sector de la moda: podría haber un artículo denominado "camiseta", del cual se crean variantes para diferentes tallas y colores, manteniendo las características fundamentales del artículo original.

La pestaña está estructurada en dos cuadrículas: la primera contiene los detalles de las variantes, como código, descripción, stock mínimo y máximo, punto de reorden, días de stock, costo medio y precio de venta. Esta información es la que diferencia cada variante del artículo principal. En la segunda cuadrícula, en caso de disponibilidad, también se puede insertar un código de barras específico para la variante.

En resumen, la pestaña Variantes representa una herramienta poderosa para la gestión de las diferencias menores entre artículos similares, facilitando el registro y la administración de inventarios.
:::

En esta pestaña se pueden insertar y/o ver las variantes de un artículo determinado. A veces, si un nuevo artículo que se necesita crear es muy similar a uno ya presente y solo se diferencia por una mínima característica que no tiene un gran impacto en la información presente en las diversas pestañas del artículo existente, en este caso no se crea un nuevo artículo, sino que simplemente se crean variantes de ese artículo.

Un *ejemplo* puede ser el del sector de moda: se inserta el artículo camiseta y luego se pueden crear las variantes por talla y por color, pero las características principales del artículo camiseta siguen siendo las mismas.

La pestaña está compuesta por dos cuadrículas. En la primera cuadrícula se inserta la variante con la información relacionada con el código y descripción, stock mínimo y máximo, punto de reorden y los respectivos días, los días de stock, el costo último, medio, estándar y finalmente el precio de venta.

La información que se encuentra en la cuadrícula son las únicas que diferencian la variante del artículo principal; para toda la información que no se presenta en la cuadrícula, basta con confiar en la que se encuentra en las diversas pestañas de ese artículo.

En la cuadrícula inferior se podrá insertar, si está presente, también el código de barras específico de esa variante.

## 25. **Pictogramas (Pittogrammi)**

En esta pestaña es posible asociar uno o más pictogramas a los artículos presentes en el registro.  
Los pictogramas pueden ser utilizados para representar visualmente características específicas del artículo, como materiales, destino de uso, certificaciones, u otras propiedades relevantes.  
En particular, esta sección permite indicar claramente símbolos de peligrosidad, conforme a la normativa vigente, facilitando así el reconocimiento inmediato de artículos que requieren especial atención en su gestión, almacenamiento y manipulación. La asociación de pictogramas contribuye a mejorar la comunicación visual de la información de seguridad y a respaldar la correcta gestión de los productos dentro de los diferentes procesos empresariales.

Para insertar un nuevo pictograma, simplemente haga clic en la primera fila libre y selecciónelo entre los que se han insertado en la tabla [Pictogramas (Pittogrammi)](/docs/configurations/tables/general-settings/pictograms).  
Además, es posible insertar una nota específica.