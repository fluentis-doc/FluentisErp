---
title: nuova registrazione contabile
sidebar_position: 1
---
El formulario se abre a través de la ruta **Administración > Registros contables > Registros > Nueva Registro** o a través del botón **Nuevo** que se encuentra en el formulario [Búsqueda de registros contables](/docs/finance-area/ledger-records/records/search-ledger-records).

## *Cómo crear un Registro contable de Compra o Venta*

<details>
 
<summary>Haz clic para los pasos fundamentales</summary>
 
1. **Ingresa los datos obligatorios en la Cabecera**: *Fecha de Registro, si es diferente de Hoy*, ***Causal contable***, *Cuenta (cliente o proveedor)*, *Número* y *Fecha Documento* *Total de la registración*.  
 
2. **Ingresa los datos IVA**: Tipo IVA, Cuenta de contrapartida y aliquota IVA (si no ya propuestas por el registro del cliente/proveedor)  
 
3. **Gestiona las fechas de competencia económica**: si es necesario, en particular para los servicios, para obtener los ajustes y provisiones automáticas posteriormente.
 
4. **Verifica y modifica la sección Libro diario**: si es necesario, puedes variar las cuentas o dividir el costo o ingreso ingresando nuevas líneas.
 
5. **Controla la sección de Resúmenes** verificando que el registro esté equilibrado.  
 
6. **Verifica o gestiona la pestaña de Partidas abiertas**: si no es propuesta por el registro del cliente o proveedor, ingresa los datos relativos al tipo y solución de pago para gestionar las partidas abiertas de manera alineada respecto al movimiento contable.

7. **Cobranzas o pagos** se gestionarán en la **Pestaña Pagos** que se utilizará **primero**, buscando las partidas a cerrar con el botón **Buscar Partidas** e ingresando doble clic en las partidas a cerrar, así los datos de los clientes o proveedores cobrados o pagados ya estarán reflejados en la sección Libro diario.

8. **Asientos simples de primera nota** como transferencias bancarias pueden ser ingresadas directamente en la sección Libro diario, no requerirán la causal respectiva para mover el registro IVA.

9. **Otras secciones específicas no obligatorias**: según los parámetros activados en la causal contable, se visualizarán otras secciones específicas, como la Contabilidad **analítica**, los activos, los **Intrastat**, las comisiones **Agentes** que se pueden gestionar.
 
</details>


El Registro contable, y por consiguiente el formulario para su inserción, está compuesto por los siguientes elementos:

- La **Cabecera** ("*Header*" que corresponde a la zona superior del formulario) la cual contiene elementos únicos para el registro tales como:
    > La fecha

    > El número

    > El total

    > El registro de IVA y el número de protocolo

    > Otro
    
    > La **Causal contable** que, según las configuraciones y parámetros, activa otros elementos que se detallan a continuación.
- El **Pie** ("*Footer*") del formulario que contiene la descripción general del registro mismo, que debe circularse en el Libro diario, además de algunos totales y el control de desequilibrio entre las secciones Deber y Haber.
- Pestaña **Registro** que contiene las dos subsecciones ***IVA*** (depende de la causal) y ***Libro Diario*** con los movimientos de contabilidad.
- Pestaña **Partidas**, si está activada, para la apertura de partidas abiertas que alimentan el calendario de vencimientos.
- Pestaña **Pagos**, si está activada, que gestiona el cierre de las partidas abiertas.
- Pestaña **Analítica**, si está activada, que gestiona los movimientos de los centros empresariales (centros de costo / beneficio).
- Pestaña **Intrastat**, si está activada, que permite completar los datos para la creación automática de las listas Intrastat.
- Pestaña **Activos**, si está activada, que permite gestionar la compra o venta de activos.
- Pestaña **Comisiones**, si está activada, que permite gestionar la creación y almacenamiento de las comisiones de agentes.
- Pestaña **Proyectos**, si está activada, que permite gestionar los Proyectos (contratos).
- Pestaña de Agrupamientos de partidas, si está activada: una modalidad particular de gestión de las partidas abiertas.
- Pestaña de Parámetros con información adicional sobre el registro.

## **header**

**Fecha de registro**: en un nuevo registro se establece como la fecha de sistema actual, puede ser modificada hacia adelante o hacia atrás en el tiempo, siempre que se respete el orden cronológico de los protocolos de IVA y los periodos que ya han sido impresos de forma definitiva. 

<details>

  <summary>Más detalles (Click para expandir)</summary>
  
  La importancia de esta fecha es fundamental ya que no es necesario hacer un Cambio de ejercicio: 

a partir de la fecha de registro, la aplicación busca los parámetros de contabilidad para el año correspondiente (identificando en qué rango de fechas se encuentra) y de este retoma los otros rangos de fechas de control (fechas de competencia y fechas de periodo en línea). 

Esta fecha es la base de la impresión del libro diario y de los extractos contables. 

Si se presiona el botón para crear un *Nuevo registro* desde dentro del que se está gestionando, es posible establecer, a través de los **parámetros de inserción** (en la barra de herramientas), que este campo también se proponga en ese nuevo registro;

</details>


**Fecha de competencia**: es la fecha de referencia para el balance de ejercicio: **normalmente siempre es igual a la fecha de registro**.  
Puede ser utilizada para las escrituras de ajuste del balance y las respectivas escrituras de cierre/apertura de cuentas, que pueden establecerse como fecha de registro en los periodos de aprobación y cierre del balance (por ejemplo, en abril o junio del año siguiente), pero se establecerán con *fecha de competencia* 31/12 – 01/01.  
Esto también con el fin de permitir la inserción en un periodo que probablemente ya haya sido impreso de forma definitiva en el Libro Diario.

:::important[Atención]
esta fecha NO puede ser utilizada para registrar las facturas a recibir de fin de año. **Se recomienda dejarla siempre igual a la fecha de registro**: en contabilidad hay impresiones que funcionan por fecha de registro, otras por fecha de competencia, otras que permiten al usuario filtrar por ambas, claramente se obtendrían resultados diferentes dependiendo de los filtros aplicados. 
:::


En los **parámetros de inserción** es posible configurar que esta fecha se alinee automáticamente con respecto a la fecha de registro;

**Número de registro**: Se atribuye según la configuración de la tabla [**Numeración de Registros**](/docs/configurations/tables/finance/posting-ledger-numeration).

<details>

  <summary>Más detalles (Click para expandir)</summary>
  
  La unicidad del registro se determina siempre por la combinación *Fecha de registro* + *Número de registro*. El número de registro es gestionado automáticamente por el procedimiento según la configuración del numerador (contador): específicamente, en el momento de guardar, se atribuye el número definitivo correcto, recuperando eventualmente un hueco de numeración en la fecha de registro relativa. Borrar un registro en la fecha X, de hecho, dejará un hueco en la numeración de esa fecha: solo interviniendo en la inserción/modificación de uno de los registros de esa fecha se recuperará el número. En caso de registro provisional, este número irá en progresión negativa a partir del número -1000, de modo que sea bien visible para el usuario que se trata de un registro de este estado: los informes y las búsquedas contables están configuradas para filtrar por defecto solo sobre los registros definitivos.

</details>


**Subcuenta del titular del registro**: este campo es **obligatorio solo para los registros de IVA**, ya que está vinculado al registro del cliente/proveedor titular del documento registrado. 

<details>

  <summary>Más detalles (Click para expandir)</summary>

Este campo normalmente no debe ser completado en caso de registros de pago/cobro, ya que normalmente en el mismo registro se realizan varios pagos/cobros a diferentes sujetos. En esta situación se utiliza como filtro de las partidas abiertas el campo presente en la pestaña *Pagos*. 

Si se presiona el botón para crear un *Nuevo registro* desde el que se está gestionando, es posible establecer los **parámetros de inserción** para que este campo también se proponga en ese nuevo registro. La causal contable, finalmente, puede prever un **[control de coherencia](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** entre el tipo de cuenta ingresado en este punto y lo que se prevé en la causal; 

</details>


**Causal**: este campo es **obligatorio**: cada registro se basa en una causal de referencia que regula sus características y funcionamiento. 

Este campo ya no es modificable una vez guardado el registro (claramente otros campos quedarán bloqueados en caso de que se haya impreso de forma definitiva el registro de IVA o el diario o se haya realizado el cierre automático de cuentas): en caso de que la causal sea errónea, es necesario borrar e ingresar nuevamente el registro con el código correcto. 

Si se presiona el botón para crear un *Nuevo registro* desde el que se está gestionando, es posible establecer los **parámetros de inserción** para que este campo también se proponga en ese nuevo registro;

**Registro de IVA**: es reportado por la causal de contabilidad seleccionada y no es modificable manualmente: 

**Protocolo IVA**: es un campo numérico que es gestionado automáticamente por el procedimiento para cada registro: al abrir la máscara se propondrá el *máx protocolo + 1* para el registro establecido, y luego al guardarlo se confirmará o no según el caso que se hayan realizado otros guardados para ese registro o si hay protocolos de IVA por recuperar. 

<details>

  <summary>Más detalles (Click para expandir)</summary>

La recuperación de protocolos varía según si en la causal se inserta o no el bloqueo del guardado con numeración no progresiva (se trata de un control de coherencia entre la fecha de registro y el número de protocolo), con el bloqueo activo se recuperará un protocolo libre solo si la fecha de registro es coherente, sin el bloqueo también se propondrá un protocolo no válido para esa fecha, con los correspondientes mensajes de advertencia al usuario. 

El campo del protocolo se deshabilita en caso de registro provisional;

</details>


**Tipo documento**: es propuesto por el procedimiento según el valor establecido en las causales de contabilidad general: es modificable, pero se trata de una modificación normalmente no necesaria (tipicamente se necesita especificar los documentos de los registros de IVA, ejemplo FV = Facturas de venta o FA = Facturas de compra, mientras que todos los demás movimientos siempre tendrán un documento de tipo GEN = Genérico);

**Fecha documento**: es un campo obligatorio o no, según las **[configuraciones de las causales de contabilidad:](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** esta fecha no puede ser posterior a la fecha de registro y debe estar dentro del rango de fechas de validez relativo al **[periodo en línea para el ejercicio de referencia](/docs/configurations/parameters/finance/accounting-parameters)** del registro. En caso de que se presione el botón para crear un *Nuevo registro* desde el que se está gestionando, es posible establecer los **parámetros de inserción** para que este campo también se proponga en ese nuevo registro;

<a id="campo_progetto" style={{ textDecoration: 'none' , color: 'inherit' , fontWeight: 'bold' }}></a> 

**Número documento**: Se inserta en este campo el número de la factura para los asientos contables de IVA. 

<details>

  <summary>Más detalles (Click para expandir)</summary>

Es un campo alfanumérico de 20 caracteres: dependiendo de las configuraciones de la causal se bloquea la inserción del mismo número/año (tomado de la fecha del documento) / tipo (campo tipo documento) para el mismo código ingresado en el campo subcuenta de la cabecera del registro (este bloqueo está ingresado por defecto en cada causal contable, pero puede ser deshabilitado). En caso de que sea el mismo número/año/subcuenta pero el tipo sea diferente, se retornará un simple mensaje de advertencia al usuario. De igual manera, el mensaje de advertencia se retornará si la misma referencia se guarda en un registro provisional;

</details>

**Campo Proyecto** (ex contrato): está activo solo si la causal de contabilidad prevé la gestión de proyectos (ex flag 'Contrato'): este proyecto es el referente para todo el registro, pero será posible reasignar los valores dentro de la pestaña **Proyecto** del mismo.

:::danger ATENCIÓN
la pestaña Proyectos está activa solo cuando dentro del registro general de la empresa (Configuración > Tablas > Configuraciones generales > Empresa) el flag **Gestión del Control** está **desactivado**. Esto significa que **no** está activo el módulo de gestión de control en modo **completo**.  
En caso de que el flag **Gestión del Control** esté **activo**, la gestión del proyecto (o contrato, según la anterior terminología) se llevará a cabo de manera diferente, es decir, será necesario atribuir el proyecto (contrato) a través de un centro de costo particular (hoy centro empresarial) que tenga como [**dimensión**](/docs/configurations/tables/controlling/analytical-accounting/dimension) (consultar la documentación del área de control) aquella adecuada para la gestión de los contratos.
:::

**Divisa**: propuesta prioritariamente desde el registro titular de la registración, alternativamente de la divisa de la empresa: puede ser modificada de vez en cuando. Una vez guardada la registración el campo ya no es modificable;

**Fecha moneda**: es la fecha de referencia del cambio, tal como se inserta en la tabla de cambios de moneda: el procedimiento lee en esta tabla la fecha más reciente ingresada con el respectivo tipo de cambio respecto a este campo. 

<details>

  <summary>Más detalles (Click para expandir)</summary>

En los *parámetros de inserción* esta fecha puede ser configurada como la fecha de registro (por defecto) o como la fecha del documento. 
Se prevé un parámetro de usuario de aviso cuando no está establecido un cambio a la fecha de registro (y por tanto se utiliza un cambio anterior);

</details>

**Cambio Directo / Cambio inverso**: es el valor del cambio tal como se inserta en la tabla de cambios de moneda: se exponen simultáneamente tanto el cambio DIRECTO (el que normalmente se lee en los cambios de moneda), como el valor INVERSO. 

<details>

  <summary>Más detalles (Click para expandir)</summary>

El uso del valor inverso proviene del hecho de que la aplicación ha mantenido la lógica *incierto por cierto* derivada de la gestión de liras – cuántas liras por una unidad de la segunda divisa – mientras que el euro tiene cambios *cierto por incierto* – con 1 euro cuántas unidades obtengo de la segunda divisa. Este valor puede ser forzado manualmente por el usuario (caso típico: causales de pago/cobro en divisa, el valor del cambio aplicado por el banco nunca será el oficial de los cambios internacionales);

</details>

**Total divisa / Total documento**: son campos interrelacionados a través del cambio, por lo que, en registros en euros, será indiferente escribir el monto en uno o en otro.  
En un registro en divisa extranjera, normalmente, se inserta el valor en el campo del Total en divisa obteniendo el contravalor en Euro.

<details>

  <summary>Más detalles (Click para expandir)</summary>

**[La causal contable](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates#13-parametri)** puede prever que estos sean actualizados automáticamente al variar los datos ingresados dentro de la grilla IVA, solo en incremento o también en decremento. El guardado del registro puede ser bloqueado si este importe no es igual a los datos IVA del registro;

</details>

**Total impuesto**: Campo visualizado en la base de la grilla IVA, para visualizar el importe total, que se actualiza automáticamente por el procedimiento, no debe ser ingresado manualmente.

### Pie (Footer)

En la parte inferior del formulario, en la pestaña *Registro*, está presente la **descripción movimiento** del registro contable: se trata de una nota que se puede establecer dentro de la causal de contabilidad a través del uso de códigos numéricos paramétricos (1) (2) … (10). 

<details>

  <summary>Más detalles (Click para expandir)</summary>

los códigos (8) y (9) se utilizan solo en las descripciones de detalle de las subcuentas en la sección del libro diario. Con un doble clic en el campo es posible abrir una búsqueda dentro de las notas codificadas (procedimiento existente dentro de las Utilidades: la modificación manual de esta descripción será eventualmente reiniciada con la confirmación del usuario una vez modificado uno de los campos gestionados automáticamente en las notas.

En la parte inferior de la máscara, abriendo la sección expandible (expander), están presentes otros campos de resumen de los datos IVA y de la registración: merecen en particular una anotación los campos dedicados a la visualización del desequilibrio de la registración, lo que normalmente no está permitido (pero que se puede habilitar en las configuraciones de la causal en uso). 

</details>

El **desequilibrio debe/debe** sirve para un control de cuadraturas a fin de poder guardar la registración. 

<details>

  <summary>Más detalles (Click para expandir)</summary>

A menos que no se deshabilite el control en los parámetros de la causal contable, lo que desaconsejamos firmemente a menos que haya necesidades del todo particulares.

El valor del desequilibrio se propondrá como importe en las nuevas líneas de contabilidad que se ingresen manualmente en el registro a fin de equilibrarlo automáticamente. 

</details>

#### Botones específicos de la Barra de Herramientas

> **Parámetros de inserción**: llama a los parámetros de inserción de la primera nota. 

- *Fecha de competencia económica*: presente en la grilla del registro IVA y reportada automáticamente en la del Libro diario, puede ser propuesta como diario (igual a la fecha de registro tanto para "desde fecha" como para "hasta fecha"), fin de ejercicio ("hasta fecha" se establecerá 31/12/XXXX), y ninguna para cuentas de tipo servicios (donde se dejará en blanco si la cuenta de contrapartida utilizada es de tipo "para ajustar" es decir, útil para el cálculo del ajuste, a fin de obligar al usuario a definir el rango de fechas);  
- *Avisar desequilibrio en moneda*: controla si también la columna 'Importe en moneda' en el Libro Diario equilibra (aunque representada en una sola columna, el programa conoce la sección del movimiento);   
- Avisar fecha de cambio: ya que el cambio propuesto automáticamente en la registración es el último cambio ingresado en la tabla "cambios de moneda", verifica que la fecha del cambio en la tabla "cambios de moneda" sea igual a la fecha de registro;  
- *Subcuenta (Ninguna / Última introducida)*: referido a la subcuenta del titular de la registración ingresada en cabecera.

> **Botones de recálculo**: actualizan los valores con un refresco / recálculo
    - IVA
    - Libro Diario
    - Centros de costo (si se está posicionado en la Pestaña Analítica)
    - Partidas (si se está posicionado en la Pestaña Partidas)

## **2. Registro**

### 2.1 Extremos IVA del documento  
La sección está presente **solo para registros IVA** (donde en la causal contable está configurado un **registro IVA** y un tipo de movimiento de IVA coherente).  

En caso de **inserción manual** de un nuevo registro, la sección puede ser completada de múltiples maneras:  

- >*el registro del cliente/proveedor/agente titular de la registración no tiene ninguna subcuenta de contrapartida predeterminada y tampoco la aliquota IVA estándar*: en este caso el usuario selecciona el **Tipo IVA** (ver detalle a continuación) así como la **subcuenta** de contrapartida para la línea y **la aliquota IVA** relativa. Una vez establecido esto también, el procedimiento se encargará de desglosar el total del documento/registración ingresado en cabecera para asignar los importes respectivos a las diversas columnas de la línea. El usuario podrá modificar estos valores y proceder a nuevas inserciones, siempre con la misma lógica. El importe propuesto se calculará sobre la base de la diferencia faltante para cubrir el total de la registración;  
- >*el registro del cliente/proveedor/agente prevé la subcuenta de contrapartida predeterminada y/o la aliquota IVA*: una vez ingresado el **Tipo IVA**, el procedimiento propone la subcuenta de contrapartida y/o la aliquota predeterminada, los importes se ingresan como en el caso anterior desglosando el total del documento/ registración y el usuario podrá modificarlos manualmente: la próxima línea, nuevamente, propondrá subcuenta/aliquota del registro y el importe obtenido del residual hasta cubrir el total del documento/registración;  
- >*el registro del cliente/proveedor (no se gestiona para los agentes) prevé una lista de subcuentas de contrapartida, ninguna subcuenta de contrapartida predeterminada, y está presente la aliquota IVA predeterminada*: en este caso la aplicación propondrá directamente en la sección IVA la lista de subcuentas de contrapartida predeterminadas, cada una con su respectiva aliquota IVA de detalle o con la aliquota predeterminada del registro, y el usuario deberá ingresar los importes manualmente línea por línea. En este caso, la adición manual de una nueva línea no propondrá la subcuenta correspondiente, sino solo la aliquota IVA, desglozando el importe faltante hasta cubrir el total del documento/registración.

**Tipo IVA**: es una tabla fija interna del sistema y contiene los valores:  
> - **Genérico**: es el tipo **estándar** de movimiento IVA, suficiente en casi todos los casos. Este tipo de línea es considerado en algunos procedimientos IVA como movimiento mercancía;  
> - **Destinado a la reventa**: se utiliza para las compras que son base de cálculo de los porcentajes a aplicar en la ventilación de los ingresos (por ejemplo, para supermercados o farmacias: estos minoristas no aplican el IVA artículo por artículo, pero se les permite hacer un total único de las ventas de fin de periodo y dividir los importes según la proporción de los artículos comprados en el periodo);  
> - **Redondeos**: se trata de redondeos fuera del campo IVA, típicos, por ejemplo, de las facturas telefónicas. La utilidad de este indicativo es mínima, sin embargo, la subcuenta correspondiente se inserta según la lógica vista anteriormente;  
> - **Venta IVA 74Ter**: se trata de un tipo de movimiento específico para las agencias de viaje, para las cuales la fecha de competencia IVA se retrasa 30 días respecto a la fecha de la operación (vendo en la fecha actual, el IVA será a pagar en la liquidación del próximo mes). En estas líneas se aplica la gestión del IVA del 74Ter con la liquidación IVA periódica correspondiente;  
> - **Reventa**: se trata de las ventas sobre las que la aplicación aplicará el cálculo de la ventilación de los ingresos;   
> - **Operación no agrícola**: se trata de un tipo de movimiento específico para las empresas sujetas a régimen agrícola, sirve para excluir de este régimen (establecido en la causal contable) para la línea específica;  
> - **Servicio**: se trata de un tipo de movimiento específico para identificar que la línea proviene de una compra/venta de servicios, elemento importante en algunos procedimientos IVA (por ejemplo, en las listas **INTRASTAT**).

**% Indetralidad**: se retoma de la aliquota IVA ingresada en la línea. Se desaconseja la forzatura manual, la operación correcta es modificar la aliquota IVA;  Determina el cálculo de la columna (impuesto) *indetralible*.

**Impuesto**: puede ser forzado manualmente respecto al cálculo realizado por el procedimiento: puede suceder, de hecho, que el documento en compra tenga un redondeo no gestionado correctamente y el usuario deba registrar el documento tal como lo recibe;  

**Total divisa / total**: son campos calculados y no almacenados a nivel de base de datos;  

**Desde la fecha de competencia/Hasta la fecha de competencia**: son las fechas de **competencia económica**, fundamentales para los **cálculos** automáticos de las **rectificaciones e integraciones** tanto a nivel de balance intermedio como de balance contable. Con base en su indicación se calcularán los ajustes y los anticipos.  

<details>

  <summary>**EJEMPLO** Click para expandir!</summary>
 
estamos al 31/03/año X. 

Si el registro de costo reporta fechas de competencia 31/03/X - 31/03/X+1, en la fecha 31/12/X, al lanzar los procedimientos de ajuste, se calculará un anticipo activo por la parte del costo de competencia 01/01/X+1 - 31/03/X+1.

Si el registro de costo realizado el 31/01/X reporta fechas de competencia 31/01/X-1 -31/01/X, al lanzar los procedimientos de ajuste en la fecha 31/12//X-1 se calculará un ajuste pasivo por la parte del costo de competencia 31/01/X-1 - 31/12/X-1.

</details>

Este rango de fechas puede ser gestionado automáticamente, según los ***Parámetros de inserción***, de 3 maneras alternativas: 

- >*Fin de ejercicio* con la cual la fecha inicial se propone con base en la fecha del documento y la fecha final como fecha fin de ejercicio. 
- >*Diaria* (con la cual ambas fechas se establecen con base en la fecha del documento);
- >*Ninguna fecha para tipo cuenta servicio* (opción recomendada) la aplicación no propondrá ninguna fecha para las subcuentas económicas que prevén en el tipo cuenta el flag *servicio*, pero obligará al usuario a ingresar manualmente el rango correcto (con los otros tipos de cuenta propondrá la misma fecha del documento en ambas fechas).

:::important[Atención]
para que se puedan calcular automáticamente los ajustes y anticipos por procedimiento de ajuste, es necesario que el tipo de cuenta utilizado para las cuentas afectadas por las rectificaciones esté definido en la tabla **[Tipos de cuenta](/docs/configurations/tables/finance/account-types)** con el flag Servicio.

Ejemplo de tipos de cuenta que tienen el flag servicio en la tabla Tipos de cuenta (en bases de datos estándar) "Costos a ajustar" y "Ingresos a ajustar".

El tipo de cuenta adecuado se asigna a la subcuenta en cuestión directamente en el plan de cuentas.
:::

**Mes**: es el **periodo de referencia IVA para la registración**, obtenido respecto al tipo de liquidación y a la fecha de competencia IVA. El campo utilizado efectivamente en la liquidación, sin embargo, es la fecha competencia IVA; 
 
**Fecha competencia IVA**: el campo se propone según la configuración de la causal contable, típicamente como fecha de registro para las compras y fecha de documento para las ventas (si el movimiento es venta 74Ter entonces es fecha de documento + 30 días). Esta es la **fecha de referencia para la impresión de la liquidación IVA periódica**; 
 
**Competencia plafond**: esta fecha se toma como referencia para el concurso de la registración en cuestión al cálculo del plafond; se propone igual a la fecha del documento para todas las aliquotas IVA que prevén la gestión del plafond IVA;  

**Nota variación años anteriores**: el campo está activo solo para registros con tipo de documento que prevé el flag *Nota de variación*. Sirve para indicar que la línea de la nota de crédito se refiere a años anteriores respecto al año del documento.
  
**Fecha referencia nota de variación**: el campo está activo solo para registros con tipo de documento que prevé el flag *Nota de variación*. Sirve para indicar la fecha de referencia de la factura rectificada; 

**División**: el campo es visible solo si la causal prevé la gestión de las divisiones. En este caso será posible dividir el mismo registro IVA en más divisiones empresariales.

#### Anotaciones adicionales:  
- no es posible guardar **líneas IVA con imponible 0** a menos que la causal contable no lo permita (flag *permite subcuentas con valor 0*); 
 
- los **redondeos del IVA** están gestionados línea por línea, mientras que la normativa prescribe que el cálculo debe realizarse sobre un imponible que agrupa todas las líneas con la misma aliquota IVA: es posible, por tanto, que haya una diferencia debida únicamente a la gestión de redondeos (esto solo aplica a la inserción manual de un registro contable: las contabilizaciones automáticas de compras y ventas ya realizan el cálculo correcto) respecto al documento en registración.
 
    Una vez detectada la diferencia, las soluciones son: 
        1. forzar manualmente una línea IVA 
        2. presionar el botón de recálculo de impuesto que se encuentra en la cabecera y hacer que la última línea de cada aliquota presente se alinee automáticamente.

### 2.2 Libro diario

<details>

  <summary>Haz clic para ver el ejemplo</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/record-tab/image02.png)

</details>

Cada registro de contabilidad general **debe obligatoriamente tener líneas en esta sección** para poder ser guardado.

- > En caso de **registros IVA** esta parte se **calcula**, sobre la base de la lógica de ***tipos de importe***, según los datos cargados en las líneas de la anterior **grilla IVA**; 

- > en caso de registros de **pago/cobro**, el importe **dependerá de los importes de los pagos cargados en la pestaña *Pagos***; 

- > en **otros casos**, en cambio, las líneas y los importes serán gestionados en general **manualmente** por el usuario.  

:::note[Nota]
la causal puede proponer una lista de subcuentas preestablecidas: el usuario deberá en este caso ingresar línea por línea solo los importes en la sección Deber / Haber correcta. 

Al momento del guardado, si la causal no prevé el guardado de subcuentas a cero, las líneas no valoradas serán borradas automáticamente;

Esta modalidad de uso es típica, por ejemplo, para los asientos de nómina de empleados donde el formato de la causal propone todas las posibles subcuentas útiles, pero de vez en cuando solo se utilizan algunas.
:::

<details>

  <summary>Más detalles (Click para expandir)</summary>
 
- en caso de registro simple ‘deber/haber' es posible codificar una causal específica que prevea ya las subcuentas a utilizar con el tipo importe ‘Tot. Doc./Registro' para que el usuario simplemente escriba el importe en los campos de totales de la cabecera y el procedimiento los coloque en deber/haber según la causal;
  
- cada nueva inserción manual de las líneas cubrirá el eventual desequilibrio presente en la registración: se recuerda que las registraciones desequilibradas no pueden ser guardadas, a no ser que se habilite la causal.

</details>

#### Campos específicos de la grilla Libro Diario

**Divisa**: puede prever los detalles de la divisa (fecha cambio, valor cambio e importe moneda): el importe moneda debe cargarse siempre en valor absoluto (el signo deber/haber en la divisa de la empresa define también su signo); los campos en moneda y en la divisa de la empresa pueden desvincularse entre sí sin recalcular los importes en los mensajes de confirmación que se ejecutan en la modificación de los mismos;  
**Desde la fecha de competencia/Hasta la fecha de competencia**: este rango de fechas, como se mencionó ya para la sección IVA, es fundamental para la gestión de los asientos de ajuste tanto para los balances intermedios como para el balance contable. Se remite a las notas específicas insertadas arriba;  
**División**: puede estar presente si se configura en la causal, puede servir para dividir el mismo registro en más divisiones;  
**Descripción detalle** (se recomienda su ingreso por defecto en todas): puede estar presente si se configura en la causal, también esto puede ser gestionado automáticamente en causal con las notas (1) – (2) … etc. como para la descripción general. De particular interés es la gestión de los códigos (8)-(9) relativamente a las líneas de clientes/proveedores de cierre contable;  
**Fecha cambio banco**: El campo puede ser automatizado respecto al número de días establecido, en cada registro de bancos, para cada causal contable que les concierne;  
**Núm. línea**: puede ser útil para registros particularmente largos (ej. nómina) para mantener en orden de ingreso los diversos subcuentas;  
**Rif. manual partidas**: puede estar presente, si se configura en la causal, puede servir para vincular manualmente líneas de contabilidad sin pasar por la gestión de las partidas abiertas;  
**Subcuenta de contrapartida**: puede estar presente, si se configura en la causal, se desaconseja su uso manual. La gestión automática en registros IVA prevé que para las líneas de clientes/ proveedores se asigne la subcuenta de costo/ingreso  de importe mayor, mientras que para las líneas de costo/ingreso/IVA la contrapartida será la subcuenta cliente/proveedor.

#### Otras anotaciones  

el usuario puede proceder a forzar manualmente las líneas de libro diario: normalmente se recomienda alinear los datos a partir directamente del IVA. Eventuales forzaduras pueden ser reiniciadas presionando el botón de recálculo de libro diario.  
En la causal contable, en particular para todas las causales IVA, para la línea con el *Tot. Doc./registro* se inserta la cuenta genérica de los clientes/proveedores, que será sustituida de vez en cuando con la subcuenta titular del registro: esta sustitución se efectuará solo si en los **[parámetros de contabilidad](/docs/configurations/parameters/finance/accounting-parameters)**, sección lista de cuentas clientes/proveedores, está autorizada (es decir, inserta en grilla) la tipología de subcuenta relativa asociándola a la cuenta maestra la cual deberá corresponder a la que está presente en la plantilla de la causal contable.

## 3. Partidas

La pestaña está presente **solo si la causal contable tiene activado el flag *Apertura partidas***. 

### 3.1 Grilla Tipología de pago

grilla dedicada a la gestión de los datos de cálculo de las partidas subyacentes, replica los datos presentes dentro del registro del cliente/proveedor/agente titular de la registración.
 
Si en el registro no hay ningún dato por defecto que se pueda leer, esta sección puede ser completada manualmente en caso de inserción manual del registro contable.


<details>

  <summary>Más detalles (Click para expandir)</summary>
  
  Para otros tipos de registro (por ejemplo, para los pagos anticipados es posible codificar una causal que abra la partida, en el signo opuesto, en lugar de cerrarla, ya que el documento aún no ha sido registrado): en este caso la gestión de esta sección se vuelve manual, de modo que el usuario podrá ingresar los datos esenciales del tipo de pago, de la solución de pago y de la subcuenta de referencia, con el 100% ingresado en el campo *Porcentaje*.  

    Para esta sección se destaca que:  
    - la partida puede ser creada también sobre subcuentas que no estén en el registro y que no tienen el flag Apertura partidas en el plan de cuentas (este flag se refiere solo al control de que los datos de diario y partidas coincidan para las subcuentas que lo han configurado);  
    - los apoyos bancarios son reportados típicamente por el registro o por el documento contabilizado del área de compras/ventas/percipientas, pero pueden ser forzados de vez en cuando llamando uno diferente utilizando el help abi/cab (doble clic en el campo).
</details>


 El apoyo bancario vinculado en esta sección (campos **Banco, Descripción Banco, CIN, ABI, CAB, Cuenta corriente, IBAN, SWIFT**)

será normalmente el dato utilizado en los pagos a proveedores como el banco beneficiario del pago a menos que no se establezca el flag **[Imponer banco de apoyo presente en registro del proveedor](/docs/configurations/parameters/treasury/vendor-payments-parameters)**;  
 

Normalmente se inserta el campo **Porcentaje** al 100%. Con porcentajes diferentes (que sumen 100%) es posible gestionar en varias líneas también combinaciones de pagos diferentes. 

<details>

  <summary>Más detalles (Click para expandir)</summary>

En el campo **Importe** se puede ingresar un importe fijo que se utilizará para la combinación tipo pag./solución pag. de la línea gestionada; el campo **Impuesto** permite definir, de este importe, cuánto es referible al IVA (esto sirve en caso de que la solución de pago prevé porcentajes imponible/impuesto diferenciados entre las diversas cuotas, para obtener un cálculo correcto). Es posible ingresar una combinación importe/porcentaje:

**Agrupa partidas**: el flag, no activo, se retoma del registro del cliente/proveedor: esencialmente no tiene uso práctico, ya que es bien raro que dos partidas tengan el mismo tipo de pago y la misma fecha de vencimiento dentro del mismo documento;

Debajo de la grilla hay algunos campos de resumen de la situación del cliente/proveedor: el importe del **límite concedido** en el módulo Riesgo del cliente, el valor de la **exposición** obtenido según la situación de las partidas abiertas (sin considerar el registro en uso) y el **saldo contable** (considerando también el registro en uso);

En el caso de un registro derivado de la **contabilización de morosidades**, la grilla superior NO tiene ninguna relevancia para el cálculo de las partidas subyacentes (típicamente el registro prevé partidas por RB, pero las morosidades se gestionan como BB y no deben reemitirse automáticamente otras facturas): se lee únicamente en caso de que se necesite el dato de los apoyos bancarios.
</details>



### 3.2 Grilla Partidas

**presenta la lista de las partidas calculadas según las configuraciones de la sección anterior**. 

El usuario puede forzar el tipo de pago, la fecha de vencimiento y los importes de las diversas cuotas (teniendo cuidado de respetar los totales). La grilla de partidas NO permite la inserción manual de una nueva cuota. 

En el caso de que la causal prevea tanto la apertura de partidas, como el cierre por compensación y se haya activado también el flag *Aviso*, al momento de guardar el registro, el usuario recibirá un mensaje de advertencia sobre la presencia de partidas que pueden ser compensadas.

**Estado Partida**: se indica el estado de la partida (abierta, parcialmente abierta, cerrada);  
**Cuenta/subcuenta/descripción**: subcuenta del cliente o proveedor a la que se refiere la partida;  
**Pago**: tipo de pago (transferencia, efectivo, etc...);  
**Vencimiento**: fecha de vencimiento calculada a partir de las condiciones de pago de la grilla anterior o impuesta manualmente;  
**Código documento**: código del documento que generó la partida (ejemplo FA = factura de compra, FV = factura de venta);  
**Fecha documento**: fecha del documento (ejemplo factura de compra) que generó la partida;  
**Número documento**: número del documento que generó la partida;  
**Divisa**: divisa en la que está denominada la partida (ej. EUR = Euro);  
**Cambio directo / Cambio inverso**: tipo de cambio (expuesto tanto como tipo de cambio directo *cierto para incierto*, como tipo de cambio indirecto *incierto para cierto*) que ha determinado el valor en moneda y el contravalor en Euro de la partida;  
**Fecha Moneda**: fecha de referencia del tipo de cambio;  
**Importe en moneda**: importe en la divisa extranjera o igual al importe en euros si el cambio es 1;  
**Importe Debe / Haber**: la partida tiene un signo (o sección que así se le quiera llamar) así como el movimiento contable que la ha generado. La partida con signo deber será una partida a nuestro favor, mientras que una partida con signo haber será una partida a deber (ejemplo a cuenta de factura recibida de proveedor o de nota de crédito emitida al cliente); 

Además, es posible bloquear el pago de la partida (Flag **No Pagable**): la aplicación memorizará la fecha y el usuario que bloqueó el pago con una eventual nota explicativa (**Inicio Bloqueo, Usuario Bloqueo, Notas Bloqueo**) así como la fecha y el usuario desbloqueante (**Usuario Desbloqueo, Fin Bloqueo**), para ambas operaciones se prevén derechos de usuario específicos en el ARM. 

**Número / año partida**: asignados automáticamente para identificar la partida;  
**Posición partida**: combo box vinculada a una tabla libre definible por el usuario, permite clasificar las partidas contables desde el momento de su creación;  
**Notas** (de la partida): notas libres que se pueden también vincular automáticamente en causal contable a la descripción detallada de la subcuenta así como se insertaron en contabilidad.  
**Agente**: en este campo es posible vincular el agente de referencia para la partida: este se valoriza automáticamente sobre la base del agente insertado en la factura de venta al momento de la contabilización (en caso de que haya más de un agente, será asignado el que tenga comisiones superiores).  
**Fecha de Referencia / Número de Referencia**: Campos tomados de la fecha documento  y número documento en la registración contable (si están presentes, de lo contrario tomados de fecha/número registración), permiten agrupar y filtrar las partidas referidas al mismo documento (por ejemplo una nota de crédito que se refiere a una factura, para visualizar la conta todo junto).  
**Cig** y **Cup**: tomados de la factura de venta, pero pueden también ser escritos a mano (a través de combo box) Ver **[documentación sobre los campos en factura](/docs/sales/sales-invoices/invoicing/sales-invoice)**.  
**Cuenta / Subcuenta de garantía**: cuenta dedicada a la contabilización de los depósitos de garantía vinculados a las partidas a través de un modo específico. Ver [**aquí**](/docs/finance-area/maturity-values/maturity-values/maturity-values/search-maturity-values) el flag *Mostrar garantías*.
**Modelos de referencia** y **Número de referencia**: campos generalmente no utilizados en Italia, típicos de Croacia (donde cuando la empresa emite la factura a cada vencimiento asocia un tipo/código identificativo de la cuota, que el cliente luego reporta en el pago y el banco reporta en el movimiento de cobro: del extracto bancario, por lo tanto, se puede fácilmente rastrear la cuota cerrada). Los campos representan un referente también a raíz de una futura implementación de importación de movimientos bancarios.  
**Retraso medio de días de pago**: No utilizado en Italia: toma el valor de los días de retraso del registro del cliente pero es modificable también manualmente. Puede ser utilizado en la simulación de flujo de caja.

#### Botones específicos  
> **Elimina las partidas**: permite eliminar la partida creada automáticamente en base al tipo de pago ingresado.  
> **Eliminación de la grilla de pagos**: permite eliminar la solución de pago, propuesta automáticamente por el registro, o ingresada manualmente.  
> **Recalcula partidas**: permite recalcular la partida forzada manualmente.  
> **Agrupar partidas**: permite agrupar las partidas en presencia de más partidas con la misma fecha de vencimiento.  

## **4. Pagos** 

La pestaña **está presente solo si la causal contable tiene activado el flag *Cierre de partidas***. 

Permite visualizar las partidas abiertas para proceder a los pagos/cobros con cierre de las partidas abiertas o las compensaciones.  

:::tip Info
La pestaña está dividida en dos grillas fundamentales, la primera, la superior, sirve para buscar las partidas abiertas a fin de cerrarlas, la segunda, inferior, contendrá el resultado de la maniobra de cierre (es decir, los pagos resultantes)
:::

### Configuración correcta de la interacción entre Apertura, Cierre y Compensación de Partidas

- Típicamente todos los registros de tipo IVA (ej. compras o ventas) tienen el flag de *apertura de partidas* y pueden tener también el flag de cierre + compensación de partidas; 

- Las causales de **pago/cobro**, en cambio, prevén siempre el cierre de partidas **sin nunca el flag de compensación**, eventualmente pueden tener el flag de apertura de partidas para gestionar los casos de pago anticipado (en este caso, faltando el cierre de una partida, se abrirá una partida de signo opuesto manteniendo el equilibrio con el movimiento contable). 

El equilibrio que puede hacerse obligatorio a través de los **[parámetros](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** de la causal contable. 

:::tip ATENCIÓN
Diferencia entre pagos de partidas y compensación de partidas:  
la compensación, en la terminología contable, puede considerarse tanto como compensación de partidas (deber/haber) de la misma subcuenta (ej. factura con nota de crédito) como también como compensación cliente/proveedor (ej. compenso la deuda hacia la subcuenta proveedor con el crédito de la subcuenta cliente que pertenece a la misma registración).  
En esta forma, la compensación está estrechamente relacionada con la situación de partidas que pertenecen a la misma subcuenta.  
La compensación cliente/proveedor puede gestionarse  simplemente realizando un **pago** de partidas (cierre simple) "cruzado" (tanto deber como haber - por ejemplo, mediante un girocontable -  yendo a "compensarse" a saldo en la contabilidad).
Alternativamente, es posible utilizar dos procedimientos más específicos y flexibles: [**Compensación de partidas**](/docs/finance-area/maturity-values/procedures/maturity-compensation) o [**Compensación rápida**](/docs/finance-area/maturity-values/procedures/fast-compensation).
:::

Si en la cabecera del registro se ha ingresado un subcuenta titular, este será reportado como filtro de búsqueda en los campos relativos iniciales de la pestaña de pagos: 

<details>

  <summary>Haz clic para ver el ejemplo</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/record-tab/image02.png)

</details>

Para todos los registros IVA, entonces, la aplicación propondrá aquí las partidas del solo cliente/proveedor ingresado en la cabecera, para proceder a la compensación factura/nota de crédito; 

en el caso de registros de pago/cobro (sobre todo de más clientes o proveedores), en cambio, normalmente el campo en cabecera estará vacío y será el usuario quien complete el filtro según las necesidades. 

En particular, es importante señalar el campo del subcuenta **Banco**: no se trata de un filtro, sino que se completa automáticamente con la subcuenta de pago insertada en **[registro](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance)** del cliente/proveedor titular de la registración y desde aquí se actualizará el registro contable en el campo que prevé el tipo de importe *Tot. Doc./registro*, 

<details>

  <summary>Haz clic para ver el ejemplo</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image03.png)

</details>

(si los **[parámetros de contabilidad](/docs/configurations/parameters/finance/accounting-parameters)**, en la lista de cuentas clientes/proveedores, autorizan la sustitución, es decir, debe haber una asociación entre el tipo de cuenta de bancos y la respectiva maestra en el plan de cuentas para que pueda suceder la sustitución).

<details>

  <summary>Haz clic para ver el ejemplo</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image04.png)

</details>

### Ejecución del cierre de la partida 

:::tip CÓMO CERRAR LA PARTIDA
Una vez localizada, en la primera grilla, la partida (o las partidas) a pagar es posible seleccionarles y pagarlas mediante **doble clic** en la línea individual, o utilizando el botón **Crear pagos**.
:::

En caso de que la causal prevé la compensación de partidas estará activo el botón de **Compensación de partidas** (y el doble clic tendrá el mismo significado). 

Otro botón útil en esta sección es el **Crear pagos extendidos**: 

<details>

  <summary>Haz clic para ver el ejemplo</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image08.png)

</details>

se abrirá una máscara intermedia de configuración del importe del pago con un eventual importe de bonificación, con la respectiva subcuenta para la contabilización. 

:::note NOTA
En esta máscara relativa al comando *Pagos extendidos* (solo aquí) es posible establecer el estado **Forzadamente cerrado** a una partida (a través del respectivo flag): el uso de este estado se desaconseja ya que no es determinado por la creación normal de un pago que cierra la partida, sino que fuerza el estado, puede ser útil para realinear diferencias y errores que ya no pueden ser identificados mediante la corrección normal.  
Un resultado similar puede obtenerse creando manualmente un pago y forzando su importe.  
No se permite forzar el pago con un importe superior al residuo de la partida.
:::

<details>

  <summary>Más detalles Haz clic aquí</summary>

En la lista de pagos pueden ser insertadas notas de los mismos: estas notas pueden también ser vinculadas automáticamente, en causal, con la descripción general del registro contable (flag *descripción en diario y pagos*, desaconsejado).

Si el pago será gestionado, según las **[configuraciones de la causal](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**, al cambio histórico de la partida, no se detectará ninguna diferencia de cambio automáticamente y será necesario gestionarlo manualmente en contabilidad: la opción facilita además, y esto es particularmente útil, la gestión de la igualdad entre partidas abiertas y saldo contable. 

Por el contrario, si la opción no está activa, el contravalor en euros se calculará al cambio de la fecha de registro (y en este caso, si se establece correctamente  **[en la causal](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** - ver tipo importe Útil/Pérd. diff. cambios - y **[en las divisas](/docs/configurations/tables/general-settings/currencies)**, la aplicación valorizará automáticamente las subcuentas de utilidad/pérdida por cambios en función de cada divisa). 

A través del botón **Expandir/reducir** puedes visualizar solo una de las dos grillas (búsqueda de partidas o pagos). 

En la parte inferior se visualizarán campos de totalización de los importes seleccionados. 

Con base en los pagos realmente ingresados y las configuraciones de la causal, la aplicación actualizará la línea con el tipo de importe ‘Tot. Doc./registro' (por ejemplo, atribuido a la subcuenta de la banca de pago) con el total de los pagos registrados, mientras ingresará una línea por cada pago o agrupará los pagos de deber y haber, divididos por divisa, de cada subcuenta cliente/proveedor pagado/cobrado.

</details>

#### Botones específicos  
> **Parámetros de inserción**: llama a los parámetros de inserción de la primera nota.  
> **Buscar partidas**: permite buscar las partidas a pagar/cobrar.  
> **Eliminar pagos**: permite eliminar los pagos previamente seleccionados.  
> **Crear pagos**: permite crear el pago de la partida seleccionada.  
> **Compensación**: permite realizar la compensación de partidas si está previsto en la causal contable.  
> **Crear pagos extendidos**: permite gestionar el pago/cobro con eventuales importes de bonificación y la respectiva subcuenta de contabilización.  
> **Expandir/reducir**: permite reducir la visualización solamente a la parte de partidas o pagos y viceversa o expandirla a ambas.  

## **5. Analítica**

La pestaña está dedicada a la gestión de los **centros de costo/profit** (hoy centros empresariales), está presente solo si la causal tiene al menos uno de los dos flags de gestión **Centros de costo** / Centros de beneficio.

:::danger ATENCIÓN
La gestión de centros de costo / beneficio (hoy centros empresariales) será diferente dependiendo de si está activado o no el **flag GESTIÓN DE CONTROL** dentro de la tabla [**Empresa**](/docs/configurations/tables/general-settings/company).

 Con el flag ACTIVADO se habilitan las **funcionalidades completas para el control de gestión**, actualmente a considerar como la **opción estándar**, permiten una gestión más evolucionada y flexible del control con respecto al conjunto de funcionalidades anteriores (con flag desactivado), presentes por retrocompatibilidad.

En esta configuración **los centros de beneficio NO son utilizados**.

Se utilizan únicamente los centros de costo (que asumen la nueva definición de centros empresariales). Los centros empresariales pueden aceptar de hecho tanto componentes positivos (de beneficio) como componentes negativos (de costo) y pueden ser transferidos libremente entre sí según las lógicas previstas en el módulo de Control de manera totalmente flexible.
<details>

  <summary>Detalles de la antigua gestión Haz clic aquí</summary>

Dependiendo de las configuraciones de la causal, estará presente una sección, la otra, o ambas (en este último caso con dos opciones: en el caso de *gestión separada cdc/cdp* ambas deberán valorarse simultáneamente, de lo contrario la aplicación atribuirá el importe solo a una de las dos secciones, los costos irán a los centros de costo y los ingresos a los centros de beneficio). 

</details>

:::

Si en la causal contable se ha activado también la opción **Gestión de máquina** habrá presente también una grilla de valorización de costos/ingresos a los vehículos empresariales (debajo de la grilla principal de centros de costo).  
Llamando el vehículo a través del combo box correspondiente será posible atribuir también los datos de detalle del mismo.  
El combo box está vinculado a la tabla Gestión de vehículos (Logística > Vehículos > Actividad diaria > Gestión de vehículos).

### CAMPOS PRESENTES EN LA GRILLA PRINCIPAL

Con las funcionalidades completas de control activas, está presente una estructura tipo tabla dinámica que agrupa, subcuenta por subcuenta, las atribuciones de los movimientos contables a los centros empresariales por [***dimensión***](/docs/configurations/tables/controlling/analytical-accounting/dimension) de análisis. 

De hecho, los centros empresariales **deben** ser atribuidos a una dimensión de análisis creando así subconjuntos funcionales para la gestión de la contabilidad analítica que resulta estructurada en análisis multidimensionales.

La misma subcuenta que acoge el movimiento de costo contable, puede así ser imputada **conjuntamente** a más centros haciendo referencia cada uno a dimensiones (y así "agrupamientos") diferentes.

Dentro de la misma dimensión, el movimiento podría luego ser repartido (ejemplo al 50%) sobre dos centros.

<details>

  <summary>Haz clic para ver la imagen</summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/cost-profit-centers-tab/image07.png)

</details>

**Cuenta / Subcuenta / Descripción**: campos para la inserción de la subcuenta contable que se atribuye al centro. Los datos serán reportados automáticamente si está presente una asociación definida en el plan de cuentas o en el registro (ver abajo).

**División / Descripción**: El movimiento puede ser asociado también a una sola división empresarial para apoyar análisis específicas referidas al ramo de la empresa.

**Proyecto**: Si en la causal contable está habilitado el flag Proyectos (ex Contratos) es visible este campo que permite atribuir el movimiento a un proyecto. El widget hace referencia a la tabla Proyectos (Gestión de Proyectos > Proyectos > Proyectos).

:::danger ATENCIÓN:
si las funciones avanzadas de control están activas, se prevé que el proyecto pueda ser atribuido solamente vinculándolo a un centro empresarial que a su vez esté atribuido a una dimensión de tipo Contrato.

Tamaño de esta dimensión (que puede ser nombrada a gusto, aunque se recomienda un nombre claro, como "Contratos" o "Proyectos") se vincula a la tipología correcta a través de un flag presente en la tabla **Dimensiones** (Configuración > Tablas > Control > Contabilidad analítica > Dimensión). 
:::

**Centros de costo / Descripción centros de Costo**: campos para la inserción (a través de combo box posicionada en el campo Centros de costo) del centro en el cual atribuir el costo (o beneficio). La combo box hace referencia a la tabla **[Centros Empresariales](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers)** (Configuración > Tablas > Control > Analítica > Centros Empresariales).  
**Divisa**: valor recuperado de los datos de la registración contable, especifica la divisa (que presenta luego el contravalor en Euro) del movimiento que es atribuido.  
**Fecha Moneda**: Fecha moneda del cambio entre divisa y Euro (recuperada del movimiento contable).  
**Cambio Directo**: Valor del cambio directo entre Euro y divisa (recuperada del movimiento contable).  
**Importe Moneda**: Importe en divisa del movimiento (recuperado del movimiento contable en caso de atribución total del movimiento a un solo centro, o definido a través del porcentaje de atribución en el plan de cuentas o en el registro); el valor puede ser variado manualmente para definir la atribución deseada entre los centros en caso de repartición del costo sobre más centros. El campo se presenta en una única sección y luego se inserta en la sección de deber o haber del movimiento en euros siguiendo el esquema de la causal contable o de la registración (Pestaña Registro), pero puede ser forzado luego.

**Importe Debe / Importe Haber**: Importe en Euros del movimiento (recuperado del movimiento contable en caso de atribución total del movimiento a un solo centro, o definido a través del porcentaje de atribución en el plan de cuentas o en el registro); el valor puede ser variado manualmente para definir la atribución deseada en caso de repartición del costo sobre más centros.

**Desde Fecha de Competencia / Hasta Fecha Competencia**: Recuperadas del movimiento contable  (pueden eventualmente ser forzadas). Permiten la rectificación por competencia económica (ajustes y anticipos) también de los movimientos de los centros.

**Descripción Detalle**: Recuperada del homónimo campo en las líneas del movimiento contable. 

### La carga de datos en las secciones cdc/cdp puede ser automatizada de dos maneras:

- a través de la asignación de los centros en el plan de cuentas, a las subcuentas de costo/ingreso, valorizando el porcentaje de atribución del valor de cada cuenta a uno o más centros. Para más detalles ver **[Plan de cuentas](/docs/erp-home/registers/accounting/analytic-chart-of-accounts)**. 

- en los registros de clientes/proveedores, (siempre en porcentaje) en este caso todas las subcuentas económicas insertadas en la registración titular del sujeto serán valorizadas de la misma manera y atribuidas al centro indicado en el registro. 

La prioridad de valorización, entre la regla establecida en el plan de cuentas y la que se defina en el registro, se configura dentro de los **[parámetros de contabilidad general](/docs/configurations/parameters/finance/accounting-parameters)**.

Se permiten modificaciones manuales a los importes calculados, así como también una inserción manual directa de las líneas: en este segundo caso, el procedimiento propondrá automáticamente los importes para cubrir, subcuenta por subcuenta, el total movido en contabilidad, reportando el mismo rango de fechas de competencia. Es importante señalar, de hecho, que los procedimientos de rectificación e integraciones prevén también la rectificación de los movimientos asignados a centro de costo/profit.

Al momento del guardado de la registración, la aplicación procederá a retornar una máscara con los detalles de las diferencias de valorización, bloqueando eventualmente el guardado si así está configurado en la causal en uso.

#### Botones específicos  
> **Elimina centros de costo seleccionados**: permite eliminar los centros de costo seleccionados.  
> **Elimina centros de beneficio seleccionados**: permite eliminar los centros de beneficio seleccionados.  
> **Expandir/reducir**: permite reducir la visualización a la parte sola de los centros de costo o beneficio y viceversa o expandirla a ambas.  

## **6. Proyectos**

La pestaña **Proyectos** (ex *Contratos*) está presente solo si la causal tiene el flag *Proyectos* activado.

:::danger ATENCIÓN:
si las funciones avanzadas del control están activas (flag *Gestión de control* en la tabla Empresa), se prevé que el proyecto pueda ser atribuido solamente vinculándolo a un centro empresarial que a su vez esté atribuido a una dimensión de tipo Contrato.

**Si las funciones avanzadas para el control están activas, por lo tanto, la pestaña en comentario NO estará visible**. 

Sin embargo, permanece visible el campo presente en la cabecera de la registración para la atribución del Proyecto (ex Contrato) al registro en su conjunto en lugar de al detalle de los movimientos.
:::
 
En esta pestaña se asignarán a los diversos Proyectos (contratos de venta) los datos económicos registrados en la registración contable: automáticamente serán asignados todos al contrato ingresado en cabecera, pero el usuario podrá dividir los importes de manera diferente manualmente directamente en esta sección.

En la inserción manual de los importes, el software se encargará automáticamente de atribuir el valor residual con el fin de cuadrar el movimiento contable. Se prevén controles de equilibrio de los importes con la contabilidad general y la posibilidad de bloquear el guardado del registro en caso de diferencias (ver [**parámetros**](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) de la causal).

## 7. Activos

La pestaña Activos, visible solo si la causal contable que se está utilizando tiene activado en su interior el flag ***activos***, está dedicada a la gestión de bienes de uso plurianual: se utiliza para registrar adquisiciones, incrementos, disposiciones y destrucciones.

<details>

  <summary>Más detalles (Click para expandir)</summary>
  
En la causal (pestaña **[Detalle registro](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**), es necesario haber configurado también el **tipo de operación** a realizar, mediante la combo box al lado del flag de activación de la pestaña activos (adquisición, disposición, destrucción, etc...). 

Por lo tanto, será oportuno crear diferentes causales dedicadas a los activos y adecuadas para realizar las distintas operaciones posibles. 

</details>


### Grilla superior

Está dedicada a la inserción del nuevo activo adquirido o a la selección del activo existente para registrar una nueva operación en su interior. 

:::tip[Atención]
**Para insertar un nuevo activo** es suficiente proceder a completar una nueva línea, 
mientras que **para seleccionar un activo existente** se debe necesariamente utilizar el botón denominado **Seleccionar activo existente** presente en la barra de herramientas a fin de llamar a la ventana del activo ya existente e integrarlo.  
:::


#### PROCEDIMIENTO PARA LA INSERCIÓN:

- seleccionar la **Categoría de activo** de pertenencia a través de la combo box (la cual está vinculada a la tabla '**[categoría de activo](/docs/configurations/tables/finance/fixed-asset-category)**'),  
- seleccionar el **Tipo de propiedad** (normalmente se propone 'activo de propiedad' de forma predeterminada), (**Notas de propiedad**: campo para insertar una anotación adicional libre)  
- asignar un eventual **Precódigo** (si se desea obtener una numeración dentro de este precóddico, ya que no son posibles dos fichas de activos con el mismo número sin utilizar un precódigo que permite atribuir una nueva numeración a él relacionado) la combo box está vinculada a la tabla '**[Precódigo de activo](/docs/configurations/tables/finance/fixed-asset-precode)**'  
- confirmar la numeración progresiva asignada automáticamente a la ficha de activo, o imponer el número deseado (también a través de la combinación con el precódigo)  
- ingresar la '**Descripción del activo**' (que será reportada en la ficha de activo y utilizada en todos los informes del módulo, como el libro de activos y las impresiones de las fichas). 

Todos estos campos serán recuperados directamente del activo ya existente en el caso de operación adicional. 

- ingresar el **Importe** (valor patrimonial correspondiente al costo de la operación, es decir, al imponible más el eventual IVA indetralible en caso de compra o precio de venta en caso de disposición total o parcial);

- ingresar la **aliquota IVA** mediante la combo box correspondiente.

El campo **% ind**. que se refiere al porcentaje de indetralidad del IVA, normalmente es completado automáticamente y depende del código IVA seleccionado a través de la configuración establecida en la tabla **[Aliquotas y modos IVA](/docs/configurations/tables/finance/vat-rates)**, se desaconseja su modificación manual.

**Estado**: campo configurado automáticamente inicialmente, al momento de la compra se establece en *no amortizado*, posteriormente, según los amortizaciones acumuladas el estado será *parcialmente amortizado* o *totalmente amortizado*. 

El valor puede ser forzado manualmente a través de la combo box vinculada a una tabla fija.  
**Tipo de operación**: se propone sobre la base de la configuración de la causal contable: típicamente en el caso de compras o incrementos el tipo de operación es ‘costo original', mientras que para las ventas será ‘Disposición parcial' o ‘Disposición total';  
**Cuenta / Subcuenta / Descripción**: se recupera de la categoría de activo (si se inserta en la tabla **[Categoría Activo](/docs/configurations/tables/finance/fixed-asset-category)**);  
**Fecha de inicio de actividad**: se propone sobre la base de la fecha de registro: de esta fecha se verificará el año a partir del cual el activo puede ser amortizado;  
**Fecha de finalización de actividad**: no es indicada (pero la visualización en el libro de activos depende también de este campo);  
**Inicio / fin de garantía**: campo informativo sobre la validez de la garantía.  
**Usado**: identifica los activos que han sido comprados usados (para estos activos la tasa de aplicación de la amortización el primer año es del 100% y la amortización anticipada es aplicable solo durante un año),  
**En uso**: (propuesto por defecto al guardado) indica que el activo está efectivamente en uso (sin este flag, el activo no puede ser amortizado),  
**En mantenimiento**: indica que el activo debe considerarse para el cálculo de los mantenimientos. 

**Notas**: campo para anotaciones, no reportado en los informes estándar (puede ser añadido personalizando los mismos). 

**Estadísticas fiscales**: Habilita la gestión de la pestaña inferior Datos objetivos del activo para utilizarlo para la amortización fiscal.

**Sociedad de conveniencia**: para identificar los activos considerados en las impresiones de activos que caen dentro de estas casísticas fiscales, 

**Tipo deducibilidad**: permite establecer la deducibilidad fiscal de la amortización para el activo. La combo box está vinculada a la tabla **[Tipos de deducibilidad](/docs/configurations/tables/finance/deductibility-types)**.

**Unidad de Medida**: combo box que permite seleccionar la unidad de medida (código) para la cantidad (ej. Kg, Piezas...); la **Descripción** de la unidad elegida se visualiza en el campo adyacente;

**Porcentaje**: campo visible solo si dentro del formulario **[Parámetros de Activos](/docs/configurations/parameters/finance/fixed-assets-parameters)** está activo el flag *Porcentaje sobre un solo Activo*. Permite definir un porcentaje de amortización específico para el activo que se está ingresando, que prevalecerá respecto a la definida dentro de la respectiva categoría de activo. El campo es reportado dentro de la ficha del activo.

**Tipos de Amortización fiscal**: combo box que permite seleccionar la tipología (código) de amortización fiscal, desvinculada de la contabilidad, a aplicar; la **Descripción** del código seleccionado se visualiza en el campo adyacente; la combo box está vinculada a la tabla **[Tipos de Amortizaciones fiscales](/docs/configurations/tables/finance/objective-amortization-types)** (Tipo Amortización).

**Al guardar la línea podrían aparecer, según los casos, diferentes mensajes**:

- "El activo tiene un valor inferior a ___. ¿Quieres amortizarlo al 100%?": la categoría de activo ha establecido un valor en el campo del *límite de amortización total* y el valor ingresado para el nuevo activo es inferior (ejemplo bienes inferiores a 516 €) que la normativa fiscal permite girar directamente a costo (es decir, amortizar al 100%) directamente en el año de compra. Eligiendo Sí (Yes) se realizará la amortización al 100% el primer año, mediante la actualización del flag en la cabecera del registro del activo para ser gestionado de forma específica en el procedimiento automático de amortización.

- "¿Quieres vincular la disposición parcial a una operación patrimonial ya existente?": la causal es de venta parcial y la categoría de activo no tiene activo el flag *incremental*: en este caso el mensaje pregunta si proseguir con la asignación del importe de disposición a una operación patrimonial específica del activo. Ejemplo: para un activo no incremental (con componentes incrementales separados) cada línea de operación se gestiona a nivel de amortizaciones con una vida cada una: la disposición parcial (respecto a todo el activo) podría ser en realidad gestionada como una venta total de la línea única (ej.: tengo una computadora, la incremento con un escáner, luego vendo solo el escáner).

**Eligiendo Sí (Yes)** se visualizará un ayuda (popup) para la búsqueda de cuál **componente** que constituye el activo se quiere disponer, permitiendo seleccionarlo mediante los botones *Buscar* y *Seleccionar*. 

En particular, se observe que los diversos componentes son fácilmente identificables, ya que están referidos, dentro de la ayuda, al campo **Progresivo** así como dentro de la ficha del activo.

### Grillas inferiores

El contenido se refiere a la línea superior seleccionada. 

#### OPERACIONES PATRIMONIALES: 

(se añade una nueva línea por cada operación cargada en la grilla superior). 

**Fecha Operación**: Fecha a la cual se registra el movimiento en el libro de activos;

**Progresivo**: Progresivo de línea de la operación;

**Costo Original**: el campo será valorizado solo por las operaciones realizadas con Tipo de operación 'costo original' con el valor patrimonial de adquisición (correspondiente al imponible + eventual IVA indetralible);

**Cantidad**: referida a la cantidad de bienes a cargar;

**Impuesto indetralible**: acoge el valor del eventual IVA indetralible que se sumará al costo para determinar el valor contable inicial (costo histórico). El valor se completa automáticamente a partir del valor ingresado en el campo 'Importe' de la grilla superior en relación con el código IVA seleccionado en el campo adyacente (si prevé indetralibilidad);

**Importe no amortizable**: si en la categoría de activo correspondiente está valorizado el campo 'Perc. amm.(ortizable)', el campo se completará automáticamente; el importe se resta del valor de cálculo de la amortización, por ejemplo, Perc. amm = 50% Costo histórico 30.000;

Ammortización 30.000 - 15.000 = 15.000 x 3%; La amortización se calculará hasta que el fondo no alcance 15.000;

**Residuo no amortizable**: gestionado solo manualmente, con referencia al ejemplo del campo anterior, la amortización será equivalente a 30.000 *3% pero hasta que el fondo no alcance 15.000;

**Ya amortizado**: el valor es visible solo si se ha calculado la amortización pero aún no contabilizado (contabilizando el valor se sumará en el 'Valor contable' y en el fondo);

**F.do Amm. Ord. / Anticipado / Decelerado**: los campos acogen, dependiendo del tipo de amortización calculada (ordinaria o anticipada o decelerada), el total de las cuotas de amortización contabilizadas;

**Fondo Amortización Fiscal**: será valorizado si está activo el flag 'Fiscal' presente en la categoría de activo o bien activable a nivel de línea individual en la Pestaña 'Amortización'.

**Disposición**: acoge el valor de venta del bien y es valorizado automáticamente a través del campo 'Importe' de la grilla superior si el Tipo Movimiento es 'Disposición'. Con base en este valor y el valor de la Plusvalía o minusvalía se actualizará el valor histórico del bien a eliminar del libro de activos;

**Disposición parcial**: acoge el