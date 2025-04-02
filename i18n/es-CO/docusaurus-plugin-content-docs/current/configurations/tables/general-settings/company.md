---
title: società
sidebar_position: 3
---

:::tip[Inicio Rápido (FAst Start)]
La tabla está sujeta al procedimiento de [**Inicio Rápido (Fast Start)**](/docs/guide/fast-start)

En caso de que se pretenda configurar manualmente, consulte la lista de verificación de la página enlazada.
:::

### PREÁMBULO

La tabla, que se considera fundamental y necesaria para poder gestionar cualquier otro dato, permite codificar las empresas referidas a la base de datos a la que se está conectado.  

Es posible codificar un número ilimitado de sociedades (empresas) que estarán siempre todas en línea simultáneamente dentro de la misma base de datos.  
Tras la inserción/creación de una nueva empresa, será necesario gestionar los derechos de visibilidad para los usuarios a través de la aplicación ARM.

:::note Nota
Normalmente, el procedimiento de instalación de Fluentis crea una empresa por defecto y, por lo tanto, la base de datos nunca está completamente vacía.
:::

Junto al concepto de empresa (o más precisamente, sociedad, también en sentido jurídico, codificadas en la base de datos), es necesario mencionar de inmediato la **DIVISIÓN**.

Para cada empresa es necesario <u>**codificar al menos una división**</u> (por ejemplo, se puede nombrar "*Sede principal*" u otros nombres similares si no surge la necesidad específica de definir diferentes divisiones habiendo comprendido la gestión y peculiaridades relacionadas).

:::tip INFO
El concepto de división puede entenderse como departamento empresarial o también como rama de empresa, de tal importancia, sin embargo, que determina un ciclo activo y pasivo, entendido como producción de documentos, órdenes, facturas, etc. separado.  
La contabilidad, aunque única a nivel de empresa, que elabora un único balance, puede ser filtrada fácilmente por división con el fin de producir un balance divisional. También en las diversas máscaras, como la búsqueda de movimientos contables y partidas abiertas, es posible filtrar (a veces el campo de filtro está inicialmente "oculto" dentro de una sección expandible). También los registros de artículos están separados ya que se refieren a "negocios" diferentes.
:::

---

### GESTIÓN DE LA TABLA

La máscara que se abre representa la lista de las empresas presentes en la base de datos.  
Se presentan en cuadrícula, para comodidad, algunos campos presentes en el detalle de la propia empresa, que se describen a continuación.

**Para crear una nueva empresa** (que se definirán como la única o las diversas divisiones relacionadas) **pulse el botón *NUEVO***.

:::note Nota
Después de crear la nueva empresa en la presente tabla, es necesario gestionar sus permisos de visibilidad para los diversos usuarios a través de la aplicación ARM y preliminarmente definir también la propia empresa en ARM (menú società).
:::

### DETALLE DE REGISTRO DE LA EMPRESA

**Código** de la Empresa (que debe corresponder al código definido en el portal ARM).

**Descripción**: es decir, la razón social oficial de la empresa.

**Número de IVA**: normalmente se inserta sin el prefijo del país, por ejemplo, IT para Italia.

**Código fiscal de la empresa**: que puede corresponder al número de IVA.

**Código de Actividad**: es decir, el código Ateco de la actividad principal de la empresa.

**País de la empresa**: sobre la base de este campo, Fluentis reconoce la localización y las configuraciones fiscales que se deben presentar por defecto en el sistema.

**Moneda**: es la moneda en la que se lleva la contabilidad oficial de la empresa.

:::note Nota
El país y la moneda de la empresa ya se completan, ya que son requeridos y se configuran al momento de la instalación de Fluentis. Son claramente datos fundamentales que implementan toda una serie de otras configuraciones de carácter administrativo y fiscal. La moneda, en particular, es aquella en la que se denomina nuestra contabilidad.
:::

**Idioma**: en este campo, no obligatorio pero muy importante, se indica el idioma oficial de la empresa. Se utiliza como idioma predeterminado para reportar en las impresiones, así como en la valoración automática de cadenas descriptivas en contabilidad.

**Registro asociado**: este es un campo opcional que sirve para dos tipos de uso: el primero en caso de que la empresa sea una empresa unipersonal, este es el enlace al registro que nos permite recuperar los datos de la persona física para las declaraciones fiscales.  
El segundo uso: en caso de que dos empresas pertenecientes a un grupo tengan relaciones, y por lo tanto documentos intercompany, este campo sirve para la transmisión de datos de una empresa a otra; por ejemplo, de modo que la factura de ventas de la primera empresa se convierta automáticamente en factura de compras para la segunda empresa: para ello, la segunda empresa debe saber en qué registro buscar al proveedor para encabezar correctamente el documento.  
La configuración también se utiliza para el procedimiento del módulo Control > Cierres > Interanuales > Consolidación, donde el sistema neutraliza los costos y ingresos, créditos y deudas recíprocos entre las dos empresas del grupo, y agrega en cambio los costos e ingresos, créditos y deudas "externos" con el fin de obtener un balance consolidado.

**Campos de dirección**: es la dirección de la sede legal.

**Oficina de IVA**: en este campo se indica la ciudad donde se encuentra la oficina de IVA de referencia de la empresa.

**Oficina REA/Número de inscripción REA**: código de la provincia y número de inscripción en el registro de empresas (necesarios para la facturación electrónica).

**Capital suscrito/Capital aportado**: textos relacionados con los valores de la situación del capital societario (necesarios para la facturación electrónica).

También es necesario el campo **Socios** y el **Estado**, si está en liquidación o no, siempre para la facturación electrónica.

**Naturaleza jurídica**: en este campo se indica el código que identifica el tipo de empresa. La tabla es fija y predefinida.

**Régimen fiscal**: en este campo se indica en qué régimen fiscal opera. La tabla es fija y predefinida.

:::tip GRUPO IVA
En la lista de posibles regímenes, se ha añadido el código 61 GRUPO IVA. Al seleccionar esta opción (si la empresa que estamos gestionando es parte de un grupo IVA y, por lo tanto, presenta su número de IVA pero el número de IVA de la empresa matriz), en la fase de exportación del archivo XML de la factura electrónica de venta, se reportará tanto el número de IVA como el número de código fiscal. De hecho, el SDI controla ambos campos (y no solo el número de IVA) en caso de que la empresa declare que forma parte de un grupo IVA.

En lo que respecta a los archivos XML de las facturas de compra recibidas, con esta configuración se lleva a cabo el control tanto sobre el número de IVA y, si dentro de la base de datos hay más empresas con el mismo número de IVA, también del código fiscal.
:::

**Número de decimales para los campos de cantidad**: que indica cuántos decimales mostrar en las impresiones para los campos de cantidad de los documentos.  
El indicador **Mostrar símbolo de moneda** indica si se debe mostrar o no el símbolo de la moneda (y los campos iguales a cero) en las máscaras de visualización de los movimientos contables.  

Indicador **Gestión de controlling** que habilita los procedimientos "avanzados" (conjunto completo de funciones) del área de controlling para la empresa que estamos modificando.

**Empresa matriz**: campo gestionado en el procedimiento del módulo controlling *Consolidación maestra*. Esta realiza una consolidación de datos específica sobre la empresa matriz.

Al ingresar la empresa matriz, el campo para la correspondencia con el plan de cuentas de la matriz también se hace visible dentro del plan de cuentas de la empresa seleccionada.  
Por lo tanto, en la fase de consolidación, el movimiento contable de la empresa controlada será reflejado en la cuenta indicada relacionada con la empresa matriz.  
El dato que se gestiona en esta elaboración, en cualquier caso, es el gestionado en el módulo controlling y ya elaborado por los cost drivers relacionados, no el dato de contabilidad general.  
Solo la parte de dato de naturaleza contable será transcodificada, mientras que el movimiento del centro de costo (centro empresarial) se reportará sin modificaciones y el prerequisito para el reporte es, de hecho, que el código del centro empresarial sea igual tanto en la empresa matriz como en la empresa controlada.

#### Sección inferior

En la parte inferior de la ventana encontramos tres secciones expandibles con datos adicionales que se pueden insertar; en este caso se trata de datos de tipo opcional que pueden no estar presentes, al menos en la fase inicial:

Dentro de la sección **EDI** (Intercambio de Datos Electrónicos) se pueden indicar algunos valores empresariales utilizados en estos archivos telemáticos.

En la sección **Gastos de timbre**, en cambio, se indica el valor de los gastos de timbre y el valor que activa la obligación de su aplicación en la factura, el número de autorización para el timbre virtual y la provincia de la autoridad fiscal. Recuerdo que en la tabla de empresas se inserta el valor mínimo de las operaciones exentas de IVA que hacen que se añada el timbre en la factura, pero este gasto de timbre también debe ser codificado en la tabla de Tipos de gastos y debe ser incluido en el registro del cliente. Solo de esta manera, si el importe en la factura está exento de IVA, se añadirá el gasto de timbre.

**Expansor Ri.Ba.**: se colocan los datos identificativos de la empresa para el sistema telemático bancario: el código SIA (5 caracteres alfanuméricos) y el código CUC (8 caracteres) para el Sepa.


### Grilla de divisiones, Banco de apoyo por defecto y Logo

En la columna derecha de la máscara tenemos tres cuadrículas.

En la primera son visibles las divisiones definidas para la empresa. Es bueno recordar siempre que para cada empresa debe existir dentro del software al menos una división, aunque esta, como sucede en muchos casos, corresponda a la única sede. De hecho, a menudo se renombra como división 1 o, aún mejor, simplemente sede. En cada división es posible definir si el control de gestión se realiza con frecuencia semanal o mensual.

En la segunda podemos indicar las...

La última parte se refiere al logo empresarial, para el cual el predeterminado (configurado a través del botón ***Cambiar logo por defecto*** de la barra de herramientas) se utiliza automáticamente dentro de los documentos del ciclo activo/pasivo.

Es necesario importar previamente una o más imágenes a utilizar como logo mediante el botón ***Importación de imágenes***.

---

### BOTÓN DE CONFIGURACIONES GENERALES (PARA INICIAR EL PROCEDIMIENTO DE INICIO RÁPIDO)

Este botón crea, en una base de datos recién instalada, o en una empresa añadida a la base de datos, toda una serie de datos de base predeterminados; por ejemplo, un plan de cuentas y configuraciones básicas de registros de IVA, causales contables, tipos de documentos tales como pedidos, albaranes y facturas, etc.

Se trata de una funcionalidad muy útil en la fase de definición de la estrategia para el lanzamiento de una nueva empresa y para la configuración del software relacionada, ya que, en ciertos casos, podría ser más conveniente, para hacer que el software esté completamente operativo en tiempos reducidos, partir de una situación por defecto, haciendo luego modificaciones para adaptar, por ejemplo, el plan de cuentas, las causas contables y otras tablas por defecto a la situación concreta, en lugar de empezar de cero creando estas tablas y configuraciones.  

:::tip[Más Info]
para más información detallada consulte [**aquí**](/docs/guide/fast-start)
:::

### DATOS NECESARIOS PARA LA FACTURACIÓN ELECTRÓNICA

:::tip ATENCIÓN

Se recomienda completar de manera completa todos los datos gestionados por el registro de la empresa, sin embargo, aprovechamos la ocasión para resaltar los campos que son necesarios para la creación de la facturación electrónica. 

- Primero, el número de IVA y el código fiscal.
- El código destinatario y el PEC son campos no obligatorios que son útiles únicamente para almacenar los propios datos.
- En cuanto al teléfono y fax, si se desea completarlos, se sugiere no usar la barra para separar el prefijo, para evitar posibles problemas en los controles formales del sistema de intercambio, ante caracteres no reconocidos.
- Los campos relativos a la oficina REA, el primero acepta la sigla de la provincia y el segundo el número.
- También es necesario el campo Socios y el Estado, si está en liquidación o no.
- Debe completarse también, con este fin, el capital suscrito y aportado, teniendo cuidado de no poner el puntito de los miles y de separar los dos decimales con el punto en lugar de la coma, nuevamente por motivos de los controles formales del SdI, 
- la naturaleza jurídica y el régimen fiscal.
:::


### CONFIGURACIÓN PARA EMPRESAS PERTENECIENTES A UN GRUPO IVA

:::tip Info: el grupo IVA
Con la introducción de esta norma, se ha previsto la posibilidad, para las empresas vinculadas por intereses financieros, económicos y organizativos, de crear un grupo único, considerado como un solo contribuyente (solo a efectos de IVA) ante el fisco. Este contará, por lo tanto, con un único número de Partida IVA. Las empresas que forman parte del grupo facturarán las operaciones hacia terceros con un número de IVA común, el número de IVA del grupo. En cambio, las cesiones de bienes y las prestaciones de servicios intercambiadas entre las empresas internas al grupo no afectarán a efectos del IVA imponible. Como consecuencia de esto, todas las operaciones realizadas por uno de los sujetos del grupo se consideran como realizadas por todo el grupo. La factura y los demás documentos son emitidos por el representante del Grupo o por los participantes, indicando en los mismos, además del número de partida IVA del Grupo, el código fiscal del sujeto participante que realizó la operación.
:::

En caso de que una o más empresas existentes en la base de datos sean parte de un grupo IVA, dentro de la presente tabla es necesario completar los campos **NÚMERO DE IVA** (con el número del grupo) y el **CÓDIGO FISCAL** (específico para la empresa que forma parte del grupo)  
Es importante también establecer la **NATURALEZA JURÍDICA**, que deberá ser ‘61- Grupo IVA’.


### **NUEVA PESTAÑA DE IVA DE GRUPO**

En esta pestaña se insertan las configuraciones del grupo IVA constituido por una o más de las empresas presentes en la base de datos.

Periodo/Año de inicio y Periodo/Año Final: para definir la validez de la configuración y la existencia del estado de grupo IVA.

Es empresa matriz: debe activarse si la empresa en uso es la matriz, es decir, aquella que impone su número de IVA a las demás.

Combo box de la empresa matriz: sirve para enlazar la empresa en uso a la empresa matriz ya presente dentro de la misma base de datos.

Registro de la empresa matriz: sirve para seleccionar una empresa matriz externa, por lo tanto, no presente dentro de la misma base de datos como empresa (por ejemplo, porque se gestiona con otro software y, por lo tanto, es necesario ingresarla como un simple registro de contacto del cual leer los datos como el número de IVA, etc.).

**NOTA: Dentro del procedimiento de LiPe (comunicación trimestral de liquidaciones de IVA) se presenta un indicador para habilitar el modo grupo IVA para la declaración misma.**

---

### TUTORIALES EN VIDEO

:::important Ver También
[**TUTORIALS EN VIDEO SOBRE LAS TABLAS GENERALES**](/docs/video/finance/intro)
:::