---
title: nuovo articolo
sidebar_position: 1.1
---

**Introducción (Introduzione)**: [Identificación de productos y partes relacionadas](/docs/erp-home/registers/items/master-item-intro)

:::important Para qué sirve (A cosa serve)
La base de datos de artículos de Fluentis desempeña un papel crucial en la gestión y organización de la información relacionada con los artículos de una empresa. Se presenta como una base de datos central donde se registran y actualizan los detalles de cada producto, permitiendo una visión clara y sistemática de las existencias, costos y movimientos de almacén.

La información contenida en la base de datos de artículos incluye detalles identificativos como el código de artículo, la descripción, la unidad de medida y la información relacionada con los proveedores. Además, es posible ingresar datos sobre precios, políticas de aprovisionamiento y gestión de lotes, facilitando las operaciones diarias de compra, venta y logística.

Gracias a esta base de datos, las empresas pueden realizar un seguimiento del estado de los artículos, automatizar procesos como el reabastecimiento de inventarios y obtener informes detallados para una planificación de compras más efectiva. Además, la integración con otros módulos de Fluentis permite coordinar mejor las actividades de almacén, mejorando la eficiencia operativa y contribuyendo a una gestión de existencias más precisa y ajustada con el tiempo.
:::

El procedimiento para crear un nuevo artículo se inicia a través de la ruta:
- **Inicio > Artículo > Crear Nuevo Artículo**,

o bien

- **Inicio > Artículos > Buscar Artículos** haciendo clic en el botón **Nuevo** presente en la barra de ribbon del formulario en cuestión.

Se abrirá el formulario **Base de datos de artículo** compuesto por una sección en la que se definirán las *características obligatorias* del artículo y por una sección inferior compuesta por diversas pestañas que agrupan las *características específicas*.

## 1. **testata**

Las características fundamentales y obligatorias que debe tener cada artículo y que encontramos en la primera parte del formulario son: la [**Clase**](/docs/guide/common/glossary/glossary-intro#item-class) (máximo 3 caracteres), el [**Código**](/docs/guide/common/glossary/glossary-intro#item-code) (máximo 50 caracteres), una breve **Descripción** y la [**Unidad de medida**](/docs/guide/common/glossary/glossary-intro#unit-of-measurement).

:::note
La combinación de la clase y el código debe ser única para ese artículo específico.
:::

#### Campos no obligatorios  
- **Segunda descripción** (Seconda descrizione): una segunda descripción que puede ser atribuida al artículo;  
- **Configuración/Versión** (Configurazione/Versione): combo a través del cual se selecciona la versión del artículo;

Una vez que se han definido todas las características obligatorias del artículo, se procede a la inserción de las características más específicas a través de las distintas pestañas que encontramos en la segunda parte de la ventana y que se tratan en los siguientes documentos.

#### Botones específicos  

> **aggiornamento lf lv con formula**: botón que permite actualizar los precios de venta a través de fórmulas específicas partiendo de los precios de lista;      
> [**Parámetros MRP**](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): botón que permite acceder a los *Parámetros MRP* de ese artículo, donde se definen los parámetros que servirán para gestionar ese artículo en producción; este botón también lo encontraremos dentro de otros formularios relacionados con la parte de producción.

## 2. **generalità**

:::important Para qué sirve (A cosa serve)
La pestaña Generalidades contiene la información principal y logística de los artículos, como el código, la descripción, la unidad de medida y otras clasificaciones opcionales, incluidas la categoría mercantil y la naturaleza del artículo.     
Esta pestaña permite definir detalles adicionales útiles para la gestión y trazabilidad de los artículos dentro de los procesos empresariales, facilitando la organización y la elaboración de informes.
:::

#### Campos específicos  

**Fecha de inserción** (Data inserimento): campo que se completa automáticamente al crear el artículo, indicando efectivamente la fecha de creación del artículo;  
**Tasa de IVA** (Aliquota IVA): combo a través del cual se selecciona e inserta la tasa de IVA correspondiente a ese artículo; este campo tiene prioridad sobre la tasa de IVA que se asigna al cliente/proveedor en la base de datos de contacto;  
**IVA de compras agrícolas / IVA de ventas agrícolas** (IVA acquisti agricoli / IVA vendite agricole): que tienen un método diferente de gestión;  
**Característica y Modelo** (Caratteristica e Modello): son dos campos no obligatorios en los que se da una definición adicional del artículo en función de una serie de agrupaciones que se establecen dentro de la gestión empresarial de productos;  
**Facturación de compras** (Fatturato acquisti): combo que se conecta a un tipo de *Facturación de compras* que se ha definido en la tabla de subcuentas contables para la contabilidad de las facturas de compra;  
**Tipo de artículo** (Tipo articolo): es una tabla no obligatoria en la que se puede ingresar una descripción adicional del artículo en función de otros agrupamientos internos;  
**Nomenclatura** (Nomenclatura): en estos campos se selecciona a través de la ayuda, la nomenclatura (es decir, la partida arancelaria del artículo) útil para fines intrastat para la declaración de mercancías a la importación o exportación, así como para fines estadísticos en el comercio de artículos dentro de la UE;  
**Días de pago para mercancías perecederas**: está relacionada con el artículo 62; para mercancías perecederas, la factura debe crearse y pagarse dentro de un plazo de 30/60 días según el tipo de artículo. En este caso, este control se realiza tanto sobre el artículo como sobre el tipo de pago que se inserta, para que no se puedan emitir facturas con una fecha de inicio mayor a la indicada;  
**Fecha de última modificación** (Data ultima modifica): indica la fecha de la última modificación del artículo;  
**Categoría fiscal** (Categoria fiscale): a través de este combo se puede seleccionar la categoría fiscal a la que pertenece el artículo, que se utiliza para las impresiones fiscales de almacén, para poder agrupar los inventarios por categoría fiscal;  
**Categoría mercantil** (Categoria merceologica): dato estadístico como la característica, y se utiliza en algunos informes específicos;  
**Facturación de ventas** (Fatturato vendite): como para la facturación de compras, esta combo sirve para la gestión de las subcuentas de ingresos por la venta del artículo;  
**Naturaleza del artículo** (Natura articolo): es un campo que se utiliza para atribuir al artículo algunas características específicas para luego ser utilizadas en ciertos procedimientos particulares. En la combo encontramos la lista de las diversas naturalezas que podemos atribuir al artículo (clic para el [glosario](/docs/guide/common/glossary/glossary-intro#item-nature));  

> **Equipo/Herramienta (Attrezzatura/Utensile)**: el artículo de esta naturaleza es asociable al registro de instrumentos de medición y a las herramientas presentes en las fases de los ciclos de procesamiento.  
> **Máquina/Instalación (Macchina/Impianto)**: esta naturaleza es asociable al registro de máquinas;  
> **Familia de artículos (Famiglia articoli)**: que define el artículo como una familia de artículos/productos de previsiones de venta;  
> **imballo**: sirve para la gestión de los envases retornables, para la contabilidad (para entender cuántos envases tengo en casa y cuántos le he dado al cliente o al proveedor y, por lo tanto, cuántos me tienen que devolver);  
> **servizi**: para la gestión de intervenciones post-venta;  
> **Préstamo de uso/Componente de instalación (Prestito d’uso/Componente impianto)**: sirven para la gestión del mantenimiento;

#### Opciones disponibles  
**Control de calidad**: si este indicador está activo, activa el proceso de control de calidad, lo que significa que el artículo entrará en el flujo de calidad;  
**Ficticio**: si está activo, este indicador sirve para declarar que el artículo no debe ser movido;  
**Interés fiscal**: si está activo, este indicador sirve para incluir el artículo en las impresiones fiscales del almacén;  
**ABC**: para ABC, en la gestión de existencias con fines logísticos, se entiende como un método de categorización del inventario que consiste en dividir los artículos en tres clases, denominadas A, B y C, donde A contiene los artículos más importantes y C los menos importantes. Es un método útil para centrar la atención en los pocos productos esenciales y no en muchos productos de escasa importancia. Si este método es utilizado por la empresa, en este campo se encontrará la letra que define la categoría a la que pertenece el artículo;  
**En agotamiento**: si está activo, este indicador indica que el artículo está en agotamiento.         
Las condiciones para recibir la alerta de que el artículo está a punto de agotarse, en los documentos, como por ejemplo en los pedidos de clientes, son:  
- en los [parámetros de pedidos de clientes](/docs/configurations/parameters/sales/sales-orders-parameters) debe estar activado el indicador "Verificar artículos en agotamiento";             
- en la base de datos de artículos debe estar activado el indicador "En agotamiento" y, además, la "Fecha de agotamiento" debe ser menor o igual que la fecha del pedido.         

**Fecha en agotamiento**: indica desde cuándo el artículo está en agotamiento;  
**Artículo sin cálculo de disponibilidad**: si el indicador está activo, el sistema no considerará la disponibilidad para poder utilizar el artículo;  
**Archivado**: si está activo, el artículo no aparecerá más en la lista de artículos que se pueden utilizar, ya que se ha vuelto obsoleto;  
**Derechos de autor**: si está activo, indica que el artículo está sujeto a derechos de autor/royalties y será considerado en la [Gestión de royalties](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/royalties/).

## 3. **amministrazione**

Dentro de esta pestaña se introducen los centros de empresa (centros de costo) y el eventual centro de beneficios del artículo, de manera que al llamar al artículo en los documentos se registre el centro o los centros seleccionados para ser utilizados en la fase de contabilización.
   
**Cuadrícula de centros empresariales**: permite vincular la base de datos del artículo a uno o más centros empresariales; 

#### Campos de la cuadrícula de centros empresariales  
> **Número**: indica el número de la fila;        
> **Centro de costo**: permite llamar el código del centro de costo;         
> **Descripción**: indica la descripción;         
> **Porcentaje**: indica el porcentaje de reparto entre los diferentes centros de costo insertados en la cuadrícula (si el centro es único será el 100%);            
> **División**: permite asociar la asociación del centro de costo al artículo en relación con la *División* empresarial seleccionada;          
> **Fecha de inicio / Fecha de fin de validez**: permiten atribuir una validez a la relación;      
> **Dimensión**: permite especificar la dimensión del centro empresarial (para más detalles ver la tabla de [Centros Empresariales](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers));             
> **Categoría**: permite especificar la categoría del centro empresarial (para más detalles ver la tabla de [Centros Empresariales](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers).                      

:::note Nota
Si el parámetro *Gestión de controlling*, presente en la pestaña *Otras configuraciones* de la tabla [**Empresa**](/docs/configurations/tables/general-settings/company) está desactivado, este campo se usa para introducir el centro de costo. 
:::

**Centro de beneficios** (Centro di profitto): sólo en el caso de que el parámetro *Gestión de controlling*, presente en la pestaña *Otras configuraciones* de la tabla **Empresa**, esté desactivado, será gestionable y servirá para introducir el centro de beneficios.

## 4. **approvvigionamento**

:::important Para qué sirve (A cosa serve)
La pestaña de Aprovisionamiento de la base de datos de artículos de Fluentis permite definir todos los parámetros necesarios para gestionar de manera óptima las existencias del artículo. En la primera sección, se establecen los datos generales como la existencia mínima y máxima, que indican los límites dentro de los cuales mantener las cantidades en almacén. Otros parámetros incluyen las semanas de cobertura, los días para el reabastecimiento y el punto de reorden, que establece cuándo es necesario proceder con un nuevo pedido.
Además, se encuentran configuraciones para las impresoras de etiquetas y los tipos de informes de etiquetas, útiles para la gestión de lotes en los diferentes estados (Único, Conforme, No conforme, Cuarentena). En la segunda sección, se pueden especificar estos parámetros para cada almacén en el que esté presente el artículo, ofreciendo una gestión precisa y personalizada de las existencias.
:::

En esta pestaña se definen todos los datos necesarios para el aprovisionamiento del artículo en cuestión.  
La ventana se compone de dos partes: 
a. En la primera parte se configuran los datos para el aprovisionamiento general del artículo y no por almacén específico:  

**Existencia mínima y existencia máxima** (Scorta minima y scorta massima): representan las cantidades mínimas que deben estar siempre presentes en almacén para ese artículo y las cantidades máximas que se pueden mantener en almacén;  
**Días para el reabastecimiento** (Giorni per la scorta): representan el número de días necesarios para reponer al menos la existencia mínima que se ha indicado para ese artículo;  
**Semanas de cobertura** (Settimane di copertura): se indica el intervalo de tiempo (calculado en semanas) durante el cual la existencia cubrirá la necesidad de ese artículo;  
**Índice de cobertura** (Indice di copertura): es un campo editable en el que se inserta un porcentaje que puede o no ser considerado por el programador o el MRP para el reabastecimiento de las existencias.  
Si en los parámetros MRP se activa el indicador *Considera índice cobertura*, en el momento de la programación el procedimiento tomará en cuenta el porcentaje indicado en este campo para reponer la disponibilidad del artículo en una cantidad suficiente para cubrir la necesidad de las n semanas que se ha decidido especificar en el campo **Semanas de cobertura**;  
**Punto de reorden** (Punto di riordino): aquí se indica a partir de qué cantidad es necesario proceder con el reabastecimiento de ese artículo;  
**Días para el reabastecimiento** (Giorni per il riordino): días necesarios para el reabastecimiento de material en almacén;  
**Intervalo de tiempo de revisión del punto de reorden**: se indica cada cuánto tiempo se debe revisar y actualizar el punto de reorden;  
**Fecha del último cálculo del punto de reorden** (Data ultimo calcolo punto di riordino): se indica la fecha relativa a la última vez que se realizó el análisis y se estableció el punto de reorden indicado anteriormente.  

Luego hay dos secciones llamadas:  
- **Impresoras de etiquetas**: permite elegir las impresoras que se propondrán por defecto para imprimir las etiquetas de los lotes para los diferentes *Estados del lote*; será posible elegir entre la impresora para el estado de lote *Único*, *Conforme*, *No conforme*, y *Cuarentena*.

- **Tipos de informes de etiquetas**: permite especificar los informes por defecto a imprimir para los lotes en los diferentes *Estados del lote*; será posible elegir diferentes informes según el estado del lote *Único*, *Conforme*, *No conforme*, y *Cuarentena*.

b. En la segunda parte de la ventana, se indicarán los diferentes almacenes donde se puede encontrar el artículo y, eventualmente, es posible definir algunos de los datos mencionados anteriormente (existencia mínima/máxima y días para el reabastecimiento, punto de reorden y días para el reabastecimiento, impresión de etiquetas únicas/conformes/no conformes/cuarentena) para cada almacén específico. (ej. la existencia mínima o la existencia máxima que se puede tener de ese artículo en ese almacén específico, y así sucesivamente para el resto de la información).

## 5. **categoria sconti acquisti**  

En esta pestaña se introducen las **Categorías de descuento** con las cuales se adquiere el artículo. Estas categorías son utilizadas por la **Gestión de precios** del módulo de compras.  

## 6. **categoria sconti vendite**  

En esta pestaña se introducen las **Categorías de descuento** con las cuales se vende el artículo. Estas categorías son utilizadas por la **Gestión de precios** del módulo de ventas. 

## 7. **clienti**

En esta pestaña es posible asociar al artículo la lista de clientes que lo han adquirido.

**Tipo de muestreo** (Tipo campionamento): combo para definir la modalidad por defecto de muestreo de muestras de un pedido de producción para ese artículo (por ejemplo, una muestra cada 100 piezas, o 1 muestra cada 3 pedidos, etc.). Los tipos de muestreo se codifican previamente en la tabla en la ruta **Tablas > Logística**.

Cuadrícula superior:  
**Cliente** (Cliente): se indica la cuenta/subcuenta y descripción del cliente;  
**Lote económico** (Lotto economico): se indica el lote económico (la cantidad mínima adquirible por el cliente) con la unidad de medida correspondiente;  
**Artículo del cliente** (Articolo cliente): en esta sección se puede indicar el código y la descripción que el cliente atribuye al artículo en su base de datos; al indicar su referencia en esta sección, esta será reportada en todos los documentos relacionados con ese cliente para ese artículo;  
**Sector de uso** (Settore uso): aquí se indica el sector de uso del cliente;  
**Tipo de muestreo** (Tipo di campionamento): en este caso se selecciona el tipo de muestreo del artículo en función del cliente al que está asociado, que podría ser diferente al seleccionado en el combo inicial de la ventana;   
**Ficha técnica** (Scheda tecnica): en caso de que ya exista una ficha técnica elaborada para este artículo, en esta sección se indican los detalles del documento;  
**Prueba final** (Collaudo finale): en este campo se ingresan las eventuales informaciones relacionadas con el tipo, año, código y descripción de la prueba final;  
**Variante** (Variante): en este campo se inserta la posible variante de ese artículo, seleccionándola a través del combo que contiene las variantes previamente codificadas en la tabla **Variantes Artículo**;  
**Notas** (Note): sección en la que se pueden insertar eventuales notas.

La cuadrícula inferior puede contener información sobre los [Datos Extra](/docs/configurations/utility/extra-data/extradata/search-extradata).

#### Botones específicos  
> **inserisci clienti**: permite añadir un nuevo cliente;    
> **cancella clienti**: permite borrar el registro de un cliente insertado anteriormente.

## 8. **codici barcode**

Dentro de esta pestaña se pueden ingresar códigos alternativos, también llamados códigos de barras, que representan el artículo.  
Los códigos de barras son códigos que encierran algunas de las principales informaciones relacionadas con la codificación del artículo al que se asocian y son útiles para las operaciones de almacén. Estos códigos son leídos a través de equipos específicos llamados Móviles mediante rayos láser o luces LED.  
Los códigos de barras pueden ser de varias tipologías.  
Las dos tipologías gestionadas por la base de datos son:
- el EAN13 (significa que el código de barras puede tener una longitud máxima de 13 caracteres)     
- el EAN128 (significa que el código de barras debe tener una longitud de cifras par).

En **Fluentis ERP** no hay parámetros ya definidos que indiquen cómo configurar el código de barras de modo que este respete las normas relativas al EAN13 y 128, pero se pueden aplicar algoritmos personalizados que sigan el estándar y que controlen el código de barras que se inserta, verificando que respete las normas anteriormente citadas.  
El formulario está compuesto por una cuadrícula donde se puede insertar un **Nuevo** código de barras, a través del botón **Insertar** en la barra de ribbon, o yendo directamente a una nueva fila.  
En el campo **Tipo de código de barras** se selecciona, a través del combo correspondiente, el tipo de código de barras que se desea codificar y en el campo **Código de barras** se inserta el código.

#### Botones específicos  
> **validation**: al presionar este botón, el sistema verifica que el código cumpla con las normas mencionadas anteriormente sobre la longitud que debe tener, según el tipo de código que se está insertando;  
> **Eliminar códigos de barras (Cancella codici barcode)**: permite eliminar un código de barras previamente insertado.

## 9. **confezionamento**

:::important Para qué sirve (A cosa serve)
La pestaña de confeccionamiento de la base de datos de artículos de Fluentis es esencial para definir la modalidad de confección de un artículo, especificando los tipos de Unidades de Carga (UDC) que lo componen. Esta configuración puede tener una estructura en árbol, en la que un pallet, por ejemplo, puede contener diferentes cajas, cada una de las cuales puede contener un cierto número de artículos.

Definir con precisión el confeccionamiento es fundamental, ya que permite generar automáticamente las UDC necesarias para el envío en el momento en que se prepara un pedido. 

Además, es posible asociar unidades de medida específicas para el volumen y definir la descripción para cliente o proveedor, permitiendo así una gestión personalizada según las necesidades específicas de cada cliente. Por lo tanto, esta pestaña se configura como una herramienta clave para optimizar la logística y la gestión de almacenes.
:::

A través de esta pestaña se define la modalidad de confeccionamiento del artículo, indicando cuáles son los tipos de unidades de carga que lo componen.

Puede ser una estructura en árbol, ya que, por ejemplo, podemos establecer como método de confección el pallet, que puede contener un número determinado de cajas, que a su vez pueden contener un número determinado de artículos.

Definir el confeccionamiento permite crear a través del sistema las unidades de carga necesarias para el envío en el momento en que debemos preparar un pedido para su envío;

La ventana se compone de una cuadrícula en la que se insertan las siguientes informaciones:

**Tipo de unidad de carga / Tipo de unidad de carga contenido** (Tipo unità di carico / Tipo unità di carico  contenuto): en estos campos se ingresa el tipo de unidad de carga, es decir, el tipo de embalaje y el tipo de contenido seleccionando la opción correspondiente a través del combo; los datos presentes en los combos de estos campos han sido previamente codificados en la tabla [Tipos de unidad de carga](/docs/configurations/tables/logistics/loading-unit-types);  
**Cantidad** (Quantità): en este campo se indica la cantidad que esa unidad de carga puede contener;  
**Prioridad** (Priorità): en este campo se indica la prioridad del confeccionamiento (por ejemplo, si tenemos un pallet con cajas dentro, es necesario dar prioridad para que cuando el sistema cree las unidades de carga sepa ya la prioridad del confeccionamiento);  
**Cuenta / Subcuenta / Descripción del cliente/proveedor** (Conto / Sottoconto / Descrizione cliente/fornitore): en este campo se inserta el cliente/proveedor que requiere este tipo de unidad de carga. Por lo tanto, es posible definir diferentes unidades de carga a nivel de cliente;  
**Dimensión de Unidad de medida** (Dimensione Unità di misura): en este campo se selecciona la unidad de medida para las dimensiones de la unidad de carga; al ingresar el **Tipo de unidad de carga**, este valor es tomado de la tabla [Tipos de unidad de carga](/docs/configurations/tables/logistics/loading-unit-types);   
**Altura / Ancho / Profundidad** (Altezza / Larghezza / Profondità): en estos campos se especifican las dimensiones de la unidad de carga completa; al ingresar el **Tipo de unidad de carga**, estos valores se toman de la tabla [Tipos de unidad de carga](/docs/configurations/tables/logistics/loading-unit-types) sólo si también el indicador **Volumen variable** (presente en Tipos de unidad de carga) está desactivado; de lo contrario, los datos no serán propuestos y deberán ser ingresados manualmente por el operador, dada la imposibilidad de prever cómo se colocan los artículos en la unidad de carga seleccionada. En cualquier caso, pueden ser modificados manualmente, y a cada modificación se recalculará también el **Volumen**;  
**Unidad de medida de volumen** (Unità di misura volume): en este campo se indica la unidad de medida del volumen de la unidad de carga; al ingresar el **Tipo de unidad de carga**, este valor es tomado de la tabla [Tipos de unidad de carga](/docs/configurations/tables/logistics/loading-unit-types);   
**Volumen** (Volume): en este campo se indica el volumen de la unidad de carga completa. Si el indicador **Volumen variable** está activo, al ingresar el **Tipo de unidad de carga**, este valor se calcula sumando el volumen de la unidad de carga vacía presente en la tabla [Tipos de unidad de carga](/docs/configurations/tables/logistics/loading-unit-types) y el valor del volumen del artículo (tomado del campo *Volumen* presente en la pestaña Pesos / Dimensiones de la base de datos de artículos multiplicado por la cantidad relativa) del volumen de las unidades de carga contenidas; en cambio, si el indicador **Volumen variable** no está activo, al ingresar el **Tipo de unidad de carga**, se reportará directamente el valor del volumen de la unidad de carga vacía presente en la tabla [Tipos de unidad de carga](/docs/configurations/tables/logistics/loading-unit-types), dado que este no es variable. En caso de que se modifiquen las dimensiones de **Altura / Ancho / Profundidad**, el valor del **Volumen** se recalculará en consecuencia. El **volumen** también se recalculará si hay variaciones en el volumen del **Tipo de unidad de carga contenido**. Este valor puede siempre ser modificado manualmente;  
**Volumen variable (Volume variabile)**: indica que se trata de una unidad de carga con volumen variable, por lo que el volumen total variará según lo que se cargue y cómo se cargue; es un campo de solo lectura valorizable en la tabla [Tipos de unidad de carga](/docs/configurations/tables/logistics/loading-unit-types);  
**unità di misura peso**: en este campo se indica la unidad de medida del peso de la unidad de carga; al ingresar el **Tipo de unidad de carga**, este valor es tomado de la tabla [Tipos de unidad de carga](/docs/configurations/tables/logistics/loading-unit-types);      
**Peso** (Peso): en este campo se indica el peso de la unidad de carga completa; al ingresar el **Tipo de unidad de carga** y la **Cantidad**, este valor se calcula sumando el peso de la unidad de carga vacía presente en la tabla [Tipos de unidad de carga](/docs/configurations/tables/logistics/loading-unit-types) y el peso de los artículos (tomado del campo *Peso bruto* presente en la pestaña Pesos / Dimensiones de la base de datos de artículos multiplicado por la cantidad relativa) o del peso de las unidades de carga contenidas. Este valor puede siempre ser modificado manualmente;  
**Tolerancia de dimensiones/Tolerancia de cantidad**: son utilizados en personalizaciones y serían útiles cuando, desde un plan de carga, se crea una lista de recogida de UDC con las unidades de carga disponibles en almacén. El procedimiento debería insertar en la lista UDC, unidades de carga con dimensiones o cantidades que difieren de las especificadas en el confeccionamiento por los porcentajes especificados. Actualmente, no se utilizan en estándar;                
**Dimensiones obligatorias**: si este indicador está activo, significa que las dimensiones indicadas son obligatorias;  
**Unidad de carga obligatoria**: si este indicador está activo, significa que este artículo debe obligatoriamente ser gestionado mediante unidad de carga en las declaraciones de producción y en la recepción de mercancías del WMS;  
**Descripción del tipo de unidad de carga / Descripción del tipo de unidad de carga contenido**: en estos campos, una vez ingresado el tipo de unidad de carga y el tipo de unidad de carga contenido, se visualizarán automáticamente las descripciones de los tipos seleccionados.

## 10. **costi**

:::important Para qué sirve (A cosa serve)
En la pestaña Costos de la base de datos de artículos de Fluentis, los usuarios pueden registrar varios tipos de costos asociados, incluidos el costo más reciente y el costo medio ponderado, que se actualizan automáticamente según los movimientos de almacén. El costo más reciente representa el último precio de compra registrado, mientras que el costo medio es el resultado de los movimientos de almacén, útil para calcular el valor de las existencias.       
La pestaña también permite definir un costo estándar, utilizado como referencia durante el año y generalmente actualizado anualmente. Además, es posible ingresar el precio de venta, del cual se parte para la creación de listas de venta.          
Esta información es fundamental para la valorización de las existencias de almacén y para la planificación financiera, contribuyendo a una gestión más efectiva de los artículos en almacén.
:::

Dentro de esta pestaña se ingresan diferentes costos asociados al artículo.

#### Campos específicos  
**Costo más reciente** (Costo ultimo) y el **Costo medio** (Costo medio): por costo más reciente se entiende el último costo de compra (el más reciente), mientras que por costo medio ponderado se entiende el costo medio que resulta de los movimientos de almacén. Para ambos costos, la causal utilizada para el movimiento del almacén debe tener el indicador de actualización *Costo medio/Costo último* activado y también el indicador de *Actualizar costo del artículo* y sobre *Interés fiscal*, de este modo los movimientos relativos serán tenidos en cuenta para el cálculo de los costos.   
**Costo estándar/costo estándar posterior** (Costo standard/costo standard successivo): el costo estándar es un costo establecido manualmente o por el procedimiento de cálculo de costo y señala el costo de referencia para un determinado artículo a usar durante el año. Generalmente, es un costo que se actualiza al inicio o al final del año. Para los artículos de compra, suele corresponder al costo medio, mientras que para los demás artículos es calculado por la [Procedura de Cálculo de Costos](/docs/controlling/cost-calculation/cost) que se encuentra en el área de *Controlling*, como suma de costos de materiales y costos de fases de producción.  
Todos estos costos pueden ser utilizados para la valorización de la lista de materiales, de las existencias de almacén o (para los artículos de compra) para la valorización de los pedidos de producción (y los movimientos de carga relacionados) cuando se carga en almacén el artículo de un pedido de producción.  
**Precio de venta** (Prezzo di vendita): precio base del que se puede comenzar a crear una lista de venta en caso de que se considere una lista nacional inicial, por ejemplo. En el caso de que no haya listas para este artículo, en los documentos, este artículo tomará este precio. (salvo en los documentos de devolución en los que el artículo toma por defecto el precio indicado en el costo más reciente a verificar bien) (no se utiliza mucho).  
**Categoría de descuento/Configuración de rangos de precios/Formulas de actualización de políticas de descuento**: son datos puramente comerciales que sirven para la actualización de los precios.  
Se utilizará en los documentos, no reportará nunca los descuentos provenientes de las listas en las que está contenido y no se calcularán las comisiones sobre las ventas de este artículo.

## 11. **descrizione articoli in lingua**

Esta pestaña permite ingresar la **Descripción en idioma** y la **Descripción 2** del artículo en los diferentes idiomas de trabajo utilizados.

#### Campos específicos  
**Idioma** (Lingua): a través de este combo se selecciona el idioma que se desea agregar; los idiomas entre los que se puede seleccionar han sido previamente codificados en la tabla correspondiente;  
**Descripción en idioma** (Descrizione in lingua): en este campo se inserta manualmente la descripción del artículo en el idioma elegido;  
**Descripción 2** (Descrizione 2): en este campo se inserta manualmente la descripción secundaria del artículo en el idioma elegido.

## 12. **extra data**

Se remite a la documentación relacionada con los [Datos Extra](/docs/configurations/utility/extra-data/extradata/search-extradata).

## 13. **fornitori preferenziali**

:::important Para qué sirve (A cosa serve)
La pestaña Proveedores Preferenciales dentro de la base de datos de artículos de Fluentis es una funcionalidad clave para la gestión de aprovisionamientos. Esta permite definir de manera precisa los proveedores preferenciales para cada artículo, facilitando así el proceso de aprovisionamiento y garantizando que se elijan los proveedores más adecuados.
En su interfaz, la sección está dividida en dos partes principales. La primera parte trata sobre información general de los proveedores, como la selección de un proveedor predeterminado, que se convierte en el canal principal de aprovisionamiento para el artículo en cuestión. Aquí, los usuarios también pueden establecer parámetros importantes como la cantidad máxima ordenable, las tolerancias sobre cantidades y precios, y los detalles relativos a los pedidos de suministro. La segunda parte ofrece una cuadrícula detallada donde se pueden añadir información específica sobre cada proveedor, como el tiempo de aprovisionamiento y eventuales notas.
:::

En esta pestaña se pueden definir, para cada artículo, cuáles son los proveedores preferenciales de los que generalmente se aprovisiona ese artículo, indicando uno por defecto para que el sistema siempre haga el pedido al mismo proveedor.

La ventana se compone de dos secciones:  
1. En la primera sección se indican las informaciones relativas a todos los proveedores preferenciales, en caso de que estas informaciones sean generales, tales como:

**Relación de proveedor obligatoria**: si está activo, este indicador indica que este artículo sólo puede ser adquirido del proveedor predeterminado que será indicado en la cuadrícula en la segunda parte de la pantalla;  
**Número máximo de líneas de prueba**: es el número máximo de líneas de pedido de proveedor que se podrán hacer para un artículo / proveedor determinado hasta que el indicador **Bloqueo de líneas de pedido** esté activo;  
**U.M de compra**: en este campo se indica la unidad de medida de compra de ese material;  
**Valor máximo comprable**: en este campo se indica la cantidad máxima que se puede ordenar a ese proveedor para ese artículo;  
**Bloqueo de líneas de pedido**: si está activo, este indicador indica que se desea bloquear la posibilidad de ingresar nuevas líneas de pedido del proveedor;  
**Fecha de bloqueo**: indica la fecha en la que se activa el bloqueo de las líneas de pedido del proveedor;  
**% de tolerancia sobre la cantidad recibida en exceso y en defecto**: en estos dos campos se indica el porcentaje de tolerancia sobre la cantidad entregada en más y en menos por el proveedor para ese material;  
**% de tolerancia en precio en exceso y en defecto**: en estos dos campos se indica el porcentaje de tolerancia sobre el precio del proveedor en exceso y en defecto respecto al precio establecido;  
**Permitir precio cero**: si está activo, este indicador permite emitir pedidos a proveedores con precio cero para ese artículo.

2. En la segunda parte de la pantalla se encuentra una cuadrícula, donde se indicará el proveedor predeterminado y eventuales otros proveedores que se utilizan para la compra del artículo y los datos relativos a cada proveedor:  
**Proveedor** (Fornitore): se indica la cuenta/subcuenta/descrición del proveedor;  
**default**: este indicador, si está activo, indica el proveedor predeterminado en caso de múltiples proveedores;  
**Lote económico** (Lotto economico): en esta sección se indicará para cada proveedor el lote económico mínimo y sus múltiplos;  
**Artículo del proveedor** (Articolo fornitore): en esta sección se puede agregar el código y la descripción que el proveedor utiliza para identificar el artículo;  
**Tiempo de aprovisionamiento** (Tempo di approvvigionamento): se indica para cada proveedor la gestión, es decir, el tiempo necesario para que el proveedor reproduzca/adquiera ese artículo, la remisión, que es el tiempo necesario para el envío del material desde el proveedor, y el tiempo total, que es la suma de los dos datos anteriores que indica el tiempo necesario para reabastecer el stock de material;  
**Pedido de compra**: en esta sección se indicarán para cada proveedor las informaciones relativas a los pedidos de compra ya detalladas arriba (U.M, bloqueo de línea, fecha de bloqueo, número máximo de líneas, valor máximo, % de tolerancia sobre la cantidad recibida en exceso/déficit);  
**produttore**: en esta sección se indicará la cuenta y la descripción del productor del material;  
**Origen**: indica el origen de la mercancía, por ejemplo, el país de procedencia o la procedencia de origen animal o vegetal;     
**Controles de aceptación (Controlli di accettazione)**: en este campo se indicarán eventuales controles que deben realizarse al aceptar el material antes de poder utilizarlo;  
**Variante**: en este campo se inserta la eventual variante del proveedor de ese artículo;  
**note**: en esta sección es posible ingresar eventuales notas relativas al proveedor en cuestión.

## 14. **immagini**

Esta pestaña permite asociar al artículo imágenes.

A través del botón **aggiungi immagine** es posible insertar una imagen dentro de la pestaña.

Este procedimiento no se utiliza mucho, ya que en cada formulario existe la función [**Adjuntar documentos**](/docs/guide/common/common-buttons#document-manager) que permite adjuntar diversos tipos de documentos, incluidas imágenes.

## 15. **listini fornitori**

En esta pestaña se indican todas las listas de proveedores en las que está presente el artículo. La cuadrícula es de solo lectura.

## 16. **listini di vendita**

En esta pestaña se indican todas las listas de clientes en las que está presente el artículo. La cuadrícula es de solo lectura.

## 17. **lotti e serial number**

:::important Para qué sirve (A cosa serve)
La pestaña "Lotes y Números de Serie" de la base de datos de artículos de Fluentis permite una gestión detallada de los materiales a través de dos variantes: la gestión por lotes y la gestión mediante números de serie.
La gestión por lotes permite organizar los artículos en grupos homogéneos que pueden ser tanto de compra como de producción. Cada lote está identificado por un código único que permite rastrear sus movimientos y existencias, incluso en escenarios multi-almacén. Dentro de la gestión por lotes, los usuarios pueden definir el tipo de extracción (FIFO, fecha de caducidad o manual), seleccionar el tipo de código de lote para definir su codificación. Esta gestión es fundamental para artículos sensibles como los alimentarios y farmacéuticos.

Alternativamente, la gestión con números de serie ofrece la posibilidad de rastrear cada pieza individual a través de un número de serie único. Esto es particularmente útil para artículos de alto valor o críticos, donde cada unidad necesita un monitoreo preciso. Las opciones disponibles incluyen la modalidad de generación del número de serie (manual o automática) y la validez temporal del número mismo.

Esta pestaña es, por lo tanto, un elemento crucial para garantizar la trazabilidad, el cumplimiento normativo y la gestión eficiente de las existencias en el almacén, contribuyendo así a optimizar la logística empresarial.
:::

El artículo puede ser gestionado por Lotes o por Números de Serie, y de cada código de artículo se pueden crear subgrupos que a su vez pueden ser gestionados por lotes o por números de serie.

Los lotes son grupos de cantidades homogéneas de artículos que entran en la empresa (lotes de compra) o que son producidos en la propia empresa (lotes de producción).

Cada lote debe ser identificado por un código único, del cual se obtienen algunas informaciones que caracterizan el lote mismo. Este código puede ser definido por la empresa en la ventana **Tipo de código de lote**, o en el caso de lotes de compra, se puede decidir mantener el mismo código de lote del proveedor.

Cada lote debe poder ser rastreado, y en el caso de múltiples almacenes, gracias al código de lote debe ser posible hacer un seguimiento de los datos sobre las existencias por cada almacén.

Dentro de esta pestaña se definirán los parámetros en base al tipo de gestión que se elija tener para ese artículo específico, y que será aplicada a través de los indicadores que encontramos al inicio de esta pestaña: **gestito a lotti** y **gestito con serial number**.

### Gestión por lotes

**Tipo de extracción del lote (Tipologia di prelievo del lotto)**: indica si el tipo de extracción es F.I.F.O., por fecha de caducidad o manual (es decir, elegido por el operador);      
**tipo codice lotto**: en este caso se selecciona el tipo de código de lote (y las características relacionadas establecidas para crearlo) que se ha definido en la ventana *Tipo de código de lote* y que es dado por la concatenación de varios campos;       
**Estado inicial del lote (Stato iniziale lotto)**: generalmente, un solo lote también está caracterizado por un estado que define su validez. Para algunos tipos de materiales en particular, como productos alimentarios y farmacéuticos, el estado es obligatorio (por ejemplo, en el ámbito farmacéutico, un lote que necesita análisis antes de poder ser utilizado estará en estado *en cuarentena* hasta que se completen los análisis); para este tipo de productos, el estado será acompañado por una fecha de caducidad para evitar la venta y el uso de mercancías caducadas. Según el estado del lote, se podrá elegir gestionar el lote por RFID o por RFID único;       
**Gestionado por RFID** (Gestito RFID): si se activa, el artículo será gestionado mediante la tecnología RFID (radiofrecuencia) a través de la aplicación;       
**RFID único** (RFID unico): si se activa, el código RFID asociado al artículo es único para el artículo;      
**Tipos de caducidad del lote** (Tipi di scadenza lotto): para seleccionar el tipo de caducidad que se quiere atribuir al lote (si es por fecha de caducidad, al último día del mes de caducidad, al primer día del mes de caducidad);      
**Modificar fecha de caducidad del lote** (Modifica data di scadenza del lotto): si se activa, permite modificar manualmente la fecha de caducidad del lote;      
**Anticipo del bloqueo del lote expresado en días** (Anticipo blocco lotto espresso in giorni): los dos campos **Aviso de bloqueo** y **Bloqueo** permiten expresar, en días, cuándo avisar que se va a bloquear ese lote y establecer el día de bloqueo del lote;      
**Lote mono proveedor (Lotto mono fornitore)**: si se activa, indica que a ese lote pertenecerán solo artículos con el mismo proveedor;     

Se puede optar por gestionar el artículo mediante la **Gestión con Número de Serie (Gestione con Serial Number)**. En este caso, para cada pieza se crea un número de serie que identifica de manera única esa pieza dentro de la estructura, permitiendo su rastreo. Este tipo de gestión es particularmente adecuada para artículos considerados *críticos* o de *alto valor* para los que es necesario mantener un seguimiento de cada pieza movida y no de una cantidad completa.

### Gestión con número de serie

**tipo codice serial number**: para seleccionar el tipo predeterminado en la tabla **Tipo de código de número de serie**;      
**Días de validez del número de serie** (Giorni validità del serial number): para indicar cuántos días será válido este código;      
**Generación del número de serie** (Generazione del serial number): para establecer la modalidad de creación del número de serie, si manual o automática; cuando se configura como automática, significa que para todos los movimientos con causal de *carga* y con el indicador *Crear número de serie* activo (en la causal misma), al ingresar el lote, los números de serie se crearán automáticamente.

## 18. **note**

Esta pestaña permite asociar al artículo notas libres.

## 19. **Matrices (Matrci)**

Esta pestaña se activa solo si se ha establecido una [Configuración](/docs/configurations/tables/CPQ/principal-configurations) en la cabecera del Artículo.           
Se gestiona en caso de que sea necesario gestionar las matrices para la combinación de atributos de un artículo y permite definir las combinaciones posibles para el artículo.        
Como primer paso, es necesario asignar un **Código** único identificativo y una **[Definición de matriz](/docs/configurations/tables/CPQ/matrices-definition)** (que contiene el conjunto de atributos que compondrá la matriz); en función de la definición seleccionada, en las pestañas siguientes será posible seleccionar solo los [Datos Extra](/docs/configurations/utility/extra-data/extradata/search-extradata) válidos para esta matriz. 

Al desplazarse a la sección *Valores de dimensión permitidos*, el siguiente paso es seleccionar, uno por uno, los Datos Extra del combo box **Atributo**. Una vez seleccionado el atributo, en la cuadrícula *Resultados disponibles* se mostrarán los valores de los Datos Extra (por ejemplo, si seleccionamos el atributo Talla, en esta cuadrícula se mostrarán los valores del Datos Extra: XS, S, M, L, XL, etc.). Una vez seleccionados los valores del atributo que queremos hacer válidos para esta matriz, es necesario arrastrarlos a la cuadrícula *Valores permitidos* para indicar que esos valores serán válidos para las combinaciones de la matriz.        
Una vez elegidos los valores válidos para cada atributo, automáticamente aparecerán nuevas pestañas, una para cada matriz de soporte y una pestaña para la matriz completa, que unirá las diversas matrices de soporte para tener una única con todas las combinaciones posibles.        
Al desplazarse en las pestañas generadas por las matrices de soporte, es necesario marcar las combinaciones de valores válidas. Para cada combinación, se necesitará insertar la marca solo si es válida.        
En la pestaña de la *Matriz completa*, en cambio, se genera una matriz única con todas las combinaciones válidas, establecidas en la pestaña anterior.      
La matriz ahora puede ser utilizada en los objetos para los cuales fue configurada.   

## 20. **pesi/dimensioni**

:::important Para qué sirve (A cosa serve)
La pestaña Pesos y Dimensiones de la base de datos de artículos de Fluentis es esencial para la gestión logística de los artículos. En esta sección, los usuarios pueden especificar detalles acerca de las dimensiones y el peso de los artículos, facilitando las operaciones de almacén y aprovisionamiento.         
Esto permite la inclusión de las dimensiones (longitud, ancho, altura) utilizando la unidad de medida elegida, y calcula automáticamente el volumen.           
Además, es posible definir el peso bruto, neto y específico, información importante para la planificación de envíos y la gestión de costos.
:::

#### Dimensiones del artículo (Dimensioni articolo)

En el combo, el usuario tiene la posibilidad de elegir la unidad de medida de la dimensión entre las opciones propuestas y en la sección siguiente podrá indicar la primera, segunda y tercera dimensión y su respectivo valor, para poder indicar la altura, el ancho y la profundidad.

#### Volumen  
En el combo se selecciona la unidad de medida del volumen y en el campo debajo se indica el valor del volumen de referencia.

#### Tipo de material (Tipo di materiale)  
En el combo se selecciona el tipo de material entre los tipos de materiales precodificados en la tabla correspondiente **Tablas > Logística > Tipos de material**. Además, también se puede definir el tipo de perfil del material con las dimensiones relativas.

#### Peso  
En el combo se selecciona la unidad de medida del peso, y luego en los campos debajo se indican el peso bruto, el peso neto y el peso específico. El peso bruto y el peso neto son los pesos que se reportan en los diversos documentos relacionados con el artículo.

#### Tipo de unidad de carga (Tipo unità di carico)  
En el combo se define el embalaje del artículo (si pallet, europallet, etc.) y en el campo debajo se pueden indicar el número de artículos por unidad de carga. Según el tipo de unidad de carga y los artículos por tipo de unidad de carga, al crear los planes de carga se podrá tener automáticamente el cálculo de las cantidades y el embalaje para la preparación de los medios. Es importante notar que estos valores se toman en consideración si no hay valores genéricos presentes en la pestaña [Confeccionamiento](/docs/erp-home/registers/items/create-new-item).

#### Número de bultos (Numero di colli)  
Esta sección sirve para gestionar el número de bultos en los documentos; se pueden gestionar según el número de artículos por bulto o el número de bultos para formar el artículo configurando el indicador en el parámetro que se desea utilizar para este cálculo; de esta manera, en los documentos se reportará el cálculo del número de bultos de manera automática.

## 21. **qualità**
En esta pestaña se definirán toda una serie de informaciones útiles para los procesos de control de calidad (donde existan) para ese artículo.

#### Ubicaciones

En esta sección se definirá el lugar dentro del almacén donde deberá ser ubicado el artículo; en particular, se podrán definir:

**Tipo de ubicación**: es decir, dónde queremos ubicar el artículo;  
**Ubicación mono-artículo**: si está activo, este indicador significa que en esa ubicación solo podrá ser ubicado ese tipo de artículo; no podrán existir dos artículos diferentes en esa misma ubicación simultáneamente;  
**ubicazione mono-lotto**: si está activo, este indicador significa que en esa ubicación no solo podrá estar ubicado un solo tipo de artículo, sino que de ese artículo solo podrá haber un lote ubicado en ese lugar y no más lotes del mismo artículo al mismo tiempo.

#### Registros de almacén (Registrazioni di magazzino)

En esta sección se definen informaciones útiles para el registro de almacén de este artículo, tales como:  
**Carga manual permitida**: si está activo, este indicador indica que este artículo podrá ser cargado manualmente en el almacén;  
**Bloqueo de movimiento**: se utiliza en personalizaciones para bloquear el guardado de un registro manual si el valor relativo (estándar o real del artículo o lote) supera el especificado **Valor máximo de carga/valor máximo de descarga**. No se utiliza en estándar;          
**Valor máximo de carga/valor máximo de descarga**: se utilizan en personalizaciones (junto con el indicador **Bloqueo de movimiento**) como valores de referencia para bloquear el guardado de un registro manual si el valor relativo (estándar o real del artículo o lote) supera el especificado. No se utilizan en estándar;     
**costo da utilizzare**: en esta subsección se indicará cómo se pretende valorar el artículo, si considerando el costo real o el costo estándar;

#### Compras (Acquisti)

En esta sección se indicará si al momento de la recepción del material de compra deben realizarse verificaciones en la entrada sobre el material o si no se requieren estas, indicando:  
**controlli in accettazione**: a través del combo se selecciona el tipo de control que se debe hacer (si interno/no normalizado/normalizado/oficial) y a través de los campos adyacentes se deberá indicar el Tipo de plan de control eligiendo entre los planes de control codificados dentro del formulario correspondiente al que se accede a través de la ruta **Calidad > Planes de control**.  
**Controles en aceptación no requeridos**: si está activo, este indicador significa que no se requieren controles en aceptación.

#### Producción (Produzione)

En esta sección se especifican informaciones relativas a la producción del material, siempre relacionadas con el control de calidad, tales como:

**% de tolerancia sobre la cantidad producida (Quantià)**: en este campo se indica el porcentaje de tolerancia sobre la cantidad producida en más y/o en menos,

**Ficha técnica** (Scheda tecnica): en estos campos se selecciona, donde exista, la ficha técnica y el tipo de ficha técnica relacionadas con este artículo;

**scheda tecnica non richiesta**: en caso de que el material no requiera ficha técnica, este indicador será activado.

#### Calidad

En esta sección se indica el lead time de análisis necesario para realizar los controles preliminares sobre el artículo:  
**Lead time análisis**: si está activo, este indicador significa que para ese material son necesarios controles de calidad que requieren un periodo de tiempo (en días) que se indica en el campo al lado; este sirve para establecer, después de haber recibido el material, cuántos días se puede utilizar en producción o, en el caso de un producto terminado, cuántos días después de su producción se puede enviar el material.

#### Postventa

En esta sección final se indicará la eventual garantía concedida sobre el material y los días de garantía establecidos, activando el indicador **Con Garantía** y añadiendo en el campo editable el número de días de garantía; en el caso de que el material no tenga garantía, el indicador resultará desactivado.

## 22. **spese**

Dentro de esta pestaña es posible añadir/gestionar los gastos relacionados con el artículo que pueden ser, por ejemplo, gastos diversos, gastos de eliminación, etc.

Estos gastos que se codifican en la tabla correspondiente **Gastos**.

La pantalla se compone, por lo tanto, de una cuadrícula en la que se introducen el/los gastos que se desean gestionar para ese artículo entre los que están presentes en los tipos de gasto codificados previamente.  
**tipo**: a través de este combo se selecciona el tipo de gasto que se desea agregar de la lista de gastos mediante el combo correspondiente;  
**Descripción** (Descrizione): campo que se completa automáticamente una vez seleccionado el tipo de gasto, y que muestra la descripción del gasto seleccionado;  
**importo**: en este campo se debe ingresar manualmente el importe de ese gasto en la moneda de referencia;  
**data**: a través de este combo, se ingresa la fecha de inicio de validez del gasto para este artículo;  
**data fine**: en este campo se puede ingresar la eventual fecha de fin de validez del gasto para ese artículo.

En caso de que se necesite insertar múltiples tipos de gastos, basta con desplazarse a la fila siguiente y repetir la misma solicitud de adición del gasto ya ilustrada.

:::note Nota
Los gastos ingresados en esta pestaña se reportan en la pestaña *Resúmenes* de los pedidos de clientes en la sección **Gastos**.
:::

## 23. **U.M alternativa (U.M alternativa)**

:::important Para qué sirve (A cosa serve)
La pestaña de Unidades de medida alternativas en la base de datos de artículos de Fluentis ofrece una funcionalidad importante para la gestión de las diferentes unidades de medida asociadas a cada artículo. En esta pestaña se puede definir una unidad de medida alternativa, útil para gestionar artículos que pueden ser tratados en más de una unidad. Este enfoque permite simplificar las operaciones de aprovisionamiento y almacén, ya que los diferentes operadores pueden utilizar una unidad de medida con la que se sientan más cómodos o que mejor se adapte a sus necesidades operativas.     
En la pestaña hay una sección para especificar el factor de conversión entre la unidad de medida principal y la alternativa, permitiendo calcular automáticamente la cantidad requerida.     
Las opciones disponibles incluyen configuraciones para definir si una unidad de medida es predeterminada o obligatoria, así como para establecer cuáles unidades de medida son prioritarias durante las operaciones de gestión de existencias.     
A través de estas funcionalidades, las empresas pueden gestionar con mayor eficiencia las existencias de almacén y los pedidos, adaptando la información relacionada con las unidades de medida a las necesidades operativas específicas y mejorando la interoperabilidad entre diferentes sistemas de gestión, como el Sistema de Gestión de Almacenes (WMS).
:::

En esta pestaña se indica, donde sea necesario, la unidad de medida alternativa del artículo.

El artículo puede ser gestionado en ambas unidades de medida y creando relaciones entre las dos.

**unità di misura** y **Descripción** (Descrizione): se indicará, por lo tanto, la unidad de medida alternativa con su descripción;  
**fattore di conversione**: aquí se define el factor de conversión entre la unidad de medida principal y la alternativa; la *cantidad alternativa* en los documentos se calcula según la configuración realizada en los [Parámetros iniciales de almacén](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)  
**default**: si está activo, este indicador indica cuál es la unidad de medida de referencia entre N alternativas posibles para el artículo;  
**tassativa**: si está activo, este indicador determina la invariabilidad del factor de conversión. Cuando se ingresa la unidad de medida de gestión a través del factor de conversión, el sistema calcula automáticamente la unidad de medida alternativa y viceversa. Si no está activo el indicador Obligatoria, esa unidad de medida alternativa puede establecerse como unidad de medida primaria, independientemente del indicador **Prioritaria**;     
**Prioritaria**: si está activo, la actualización de la *cantidad de gestión* no cambia la *cantidad alternativa* porque esta última tiene la prioridad, mientras que, en el caso de que se modifique la *cantidad alternativa*, la *cantidad de gestión* se recalcula en función de la cantidad alternativa según el factor de conversión;        
**Predeterminada WMS**: si está activo, indica que esta unidad de medida será utilizada por defecto dentro del WMS.

## 24. **varianti**

:::important Para qué sirve (A cosa serve)
La pestaña Variantes de la base de datos de artículos de Fluentis proporciona la funcionalidad para ingresar y gestionar las variantes de un determinado artículo. Esta opción es particularmente útil cuando es necesario crear un nuevo artículo que difiera solo marginalmente de uno ya existente. En estos casos, la creación de una variante es preferible a la creación de un nuevo artículo, especialmente cuando las características principales del artículo original permanecen esencialmente inalteradas.       
Un ejemplo práctico de esta funcionalidad podría observarse en el sector de la moda: podría haber un artículo denominado "camiseta", del cual se crean variantes para diferentes tallas y colores, manteniendo las características fundamentales del artículo original.

La pestaña está estructurada en dos cuadrículas: la primera contiene los detalles de las variantes, como código, descripción, existencia mínima y máxima, punto de reorden, días de existencia, costo medio y precio de venta. Esta información es lo que diferencia cada variante del artículo principal. En la segunda cuadrícula, en caso de disponibilidad, también se puede insertar un código de barras específico para la variante.

En resumen, la pestaña Variantes representa una herramienta poderosa para la gestión de las diferencias menores entre artículos similares, facilitando el registro y la administración de las existencias.
:::

En esta pestaña se pueden insertar y/o ver las variantes de un determinado artículo. A veces, si un nuevo artículo que se necesita crear es muy similar a uno ya existente y se diferencia solo por una característica mínima que no tiene un gran impacto en la información presente en las distintas pestañas del artículo existente, en este caso no se crea un nuevo artículo, sino simplemente se crean variantes de ese artículo.

Un *ejemplo* puede ser del sector de la moda: se inserta el artículo camiseta y luego se pueden crear las variantes por tamaño y por color, pero las características principales del artículo camiseta permanecen iguales.

La pestaña se compone de dos cuadrículas. En la primera cuadrícula se inserta la variante con la información relativa al código y descripción, existencia mínima y máxima, punto de reorden y los días relativos, los días de existencia, costo más reciente, medio, estándar y, por último, el precio de venta.

Las informaciones que se encuentran en la cuadrícula son las únicas que diferencian la variante del artículo principal; para toda la información que no esté presente en la cuadrícula, basta con confiar en la que está presente en las distintas pestañas de ese artículo. 

En la cuadrícula inferior se podrá ingresar, si corresponde, también el código de barras específico de esa variante.