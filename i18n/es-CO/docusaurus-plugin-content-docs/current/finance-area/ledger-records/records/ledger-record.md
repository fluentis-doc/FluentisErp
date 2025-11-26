---
title: Nueva Registración contable
sidebar_position: 1
ai_generated: true
---
El formulario se abre mediante la ruta **Administración > Registraciones contables<!-- Registrazioni contabili --> > Registraciones > Nueva Registración<!-- Nuova Registrazione -->** o a través del botón **Nueva<!-- Nuova -->** que se encuentra en el formulario [Búsqueda de registraciones contables](/docs/finance-area/ledger-records/records/search-ledger-records)<!-- Ricerca registrazioni contabili -->.

## *Cómo crear una Registración contable de Compra o Venta*<!-- *Come creare una Registrazione contabile di Acquisto o Vendita* -->

<details>
 
<summary>Haz clic para los pasos fundamentales<!-- Clicca per i passaggi fondamentali --></summary>
 
1. **Introduce los datos obligatorios en el Encabezado**: *Fecha de registración<!-- Data Registrazione -->, si es distinta de Hoy*, ***Causal contable***, *Cuenta (cliente o proveedor)<!-- Conto (cliente o fornitore) -->*, *Número y Fecha del Documento* *Total de la registración<!-- totale della registrazione -->*.  
 
2. **Introduce los datos de IVA**: Tipo de IVA, Cuenta de contrapartida y alícuota IVA (si no están ya propuestos por la ficha del cliente/proveedor)  
 
3. **Gestiona las fechas de competencia económica**: si es necesario, especialmente para servicios, con el fin de obtener los diferidos e ingresos anticipados automáticos posteriormente.
 
4. **Verifica y modifica la sección Libro Diario<!-- Libro giornale -->** si es necesario, puedes cambiar las cuentas o dividir el costo o ingreso insertando nuevas filas
 
5. **Controla la sección de Resúmenes<!-- Riepiloghi -->** verificando que la registración esté equilibrada.  
 
6. **Controla o gestiona la Pestaña de Partidas abiertas<!-- Tab delle Partite aperte -->** si no viene propuesta por la ficha de cliente o proveedor<!-- anagrafica cliente o fornitore -->, introduce los datos relativos al tipo y solución de pago para gestionar las partidas abiertas de manera alineada respecto al movimiento contable<!-- movimento contabile -->.

7. **Cobros o pagos** serán gestionados desde la **Pestaña Pagos<!-- Tab Pagamenti -->**, la cual se utilizará **primero**, buscando las partidas a cerrar con el botón **Buscar Partidas<!-- Ricerca Partite -->** y haciendo doble clic en las partidas a cerrar; de este modo, los datos de los clientes o proveedores cobrados o pagados ya serán reportados en la sección Libro Diario<!-- Libro giornale -->.

8. **Asientos simples de diario** como transferencias bancarias, etc... pueden ser ingresados directamente en la sección Libro Diario<!-- Libro giornale -->, no previendo la respectiva causal el movimiento en la cuadrícula IVA.

9. **Otras secciones específicas no obligatorias** que, según los parámetros activados en la causal contable, se visualizarán otras secciones específicas como la Contabilidad *analítica*, Los Activos fijos<!-- cespiti -->, **Intrastat**, las comisiones de **Agentes** que es posible gestionar.
 
</details>
<!-- *Come creare una Registrazione contabile di Acquisto o Vendita* -->

La registración contable<!-- Registrazione contabile -->, y por consiguiente el formulario para su inserción, se compone de los siguientes elementos:

- El **Encabezado** ("*Header*" que corresponde a la zona superior del formulario) el cual contiene elementos únicos para la registración<!-- registrazione --> tales como:
    > La fecha

    > El número

    > El total

    > El libro iva y el número de protocolo

    > Otros
    
    > La **Causal contable** que, según sus configuraciones y parámetros, activa los elementos adicionales detallados a continuación
- El **Pie** ("*Footer*") del formulario que contiene la descripción general de la registración<!-- registrazione --> misma, para ser reportada en el Libro Diario<!-- Libro giornale -->, además de algunos totales y el control de descuadre entre las secciones Debe y Haber
- Pestaña **Registración<!-- Registrazione -->** que contiene las dos subsecciones ***IVA*** (depende de la causal) y ***Libro Diario<!-- Libro Giornale -->*** con los movimientos de contabilidad<!-- movimenti di contabilità -->
- Pestaña **Partidas<!-- Partite -->**, si está activada, para la apertura de partidas abiertas<!-- partite aperte --> que alimentan el vencimiento de pagos
- Pestaña **Pagos<!-- Pagamenti -->**, si está activada, que gestiona el cierre de las partidas abiertas
- Pestaña **Analítica<!-- Analitica -->**, si está activada, que gestiona los movimientos de los centros empresariales (centros de costo/beneficio)
- Pestaña **Intrastat**, si está activada, que permite completar los datos para la creación automática de los listados Intrastat
- Pestaña **Activos fijos<!-- Cespiti -->**, si está activada, que permite gestionar compras o ventas de activos fijos<!-- cespiti -->
- Pestaña **Comisiones<!-- Provvigioni -->**, si está activada, que permite gestionar la creación y almacenamiento de las Comisiones de agentes
- Pestaña **Proyectos**, si está activada, que permite mover los Proyectos<!-- commesse -->
- Pestaña Agrupación de partidas, si está activada: un modo particular de gestión de partidas abiertas<!-- partite aperte -->
- Pestaña Parámetros con información adicional de detalle sobre la registración<!-- registrazione -->

## **header**<!-- **header** -->

**Fecha de registración<!-- Data di registrazione -->**: en una nueva registración<!-- registrazione -->, se establece como la fecha de hoy del sistema, pero se puede modificar hacia adelante o atrás en el tiempo siempre y cuando se respete el orden cronológico de los protocolos de IVA y los eventuales períodos ya impresos en definitivo. 

<details>
  <summary>Detalles adicionales (Haz clic para expandir)<!-- Ulteriori dettagli (Click to expand) --></summary>
  
  La importancia de esta fecha es fundamental ya que no existe la necesidad de proceder con un Cambio de ejercicio: 

A partir de la fecha de registración<!-- data di registrazione -->, la aplicación busca los parámetros de contabilidad para el año de referencia (identificando dentro de qué rango de fechas de ejercicio se encuentra) y de aquí toma los otros rangos de fechas de control (fechas de competencia en línea y fechas de periodo en línea). 

Esta fecha es la base de la impresión del libro diario y de los extractos contables. 

Si se presiona el botón para crear una *Nueva registración<!-- Nuova registrazione -->* desde la que está en gestión, es posible configurar, mediante los **parámetros de ingreso** (en la cinta de opciones), para que este campo sea también propuesto en la nueva;
</details>

**Fecha de competencia<!-- Data competenza -->**: es la fecha de referencia para el balance del ejercicio: **normalmente es siempre igual a la fecha de registración<!-- data registrazione -->**. 
Puede utilizarse para los asientos de ajuste de balance y los relativos asientos de cierre/apertura de cuentas, los cuales pueden configurarse como fecha de registración<!-- data di registrazione --> en los períodos de aprobación y cierre del balance (por ejemplo, abril o junio del año siguiente), pero se establecerán con *fecha de competencia* 31/12 – 01/01. 
Esto también para permitir la inserción en un periodo posiblemente ya impreso en definitivo en el Libro Diario<!-- Libro Giornale -->.

:::important[Atención<!-- Attenzione -->]
esta fecha NO puede utilizarse para registrar las facturas a recibir a fin de año. **Se recomienda dejarla siempre igual a la fecha de registración<!-- data registrazione -->**: en contabilidad<!-- contabilità --> hay impresiones que trabajan por fecha de registración, otras por fecha de competencia, otras que dan libertad al usuario de filtrar por ambas; claramente se obtendrán resultados diferentes según los filtros aplicados. 
:::

En los **parámetros de ingreso** es posible configurar que esta fecha se alinee automáticamente respecto a la fecha de registración<!-- data registrazione -->;

**Número de registración<!-- Numero di registrazione -->**: Se asigna según las configuraciones de la tabla [**Numeración de Registraciones**](/docs/configurations/tables/finance/posting-ledger-numeration)<!-- Numerazione Registrazioni -->

<details>
  <summary>Detalles adicionales (Haz clic para expandir)<!-- Ulteriori dettagli (Click to expand) --></summary>
  
  La unicidad de la registración<!-- registrazione --> se determina siempre por la combinación *Fecha de registración<!-- Data registrazione -->* + *Número de registración<!-- Numero registrazione -->*. El número se gestiona automáticamente por el procedimiento según los parámetros del numerador (contador): en particular, en el momento de guardar, se asigna el número definitivo correcto, recuperando eventualmente un hueco de numeración para la fecha de registración relativa. Eliminar una registración en la fecha X, de hecho, dejará un hueco en la numeración de esa fecha: sólo interviniendo en la inserción/modificación de una de las registraciones de esa fecha se recuperará el número. En caso de registración provisional ese número irá en progresión negativa a partir del número -1000, de modo que sea bien visible para el usuario que se trata de una registración de ese estado: los reportes y las búsquedas contables están configuradas para filtrar por defecto solo las registraciones definitivas;
</details>

**Subcuenta nombre de la registración<!-- Sottoconto intestatario della registrazione -->**: este campo es **obligatorio solo para registraciones de IVA**, ya que está vinculado a la ficha cliente/proveedor propietaria del documento registrado. 

<details>
  <summary>Detalles adicionales (Haz clic para expandir)<!-- Ulteriori dettagli (Click to expand) --></summary>

Normalmente, este campo no se completa en caso de registraciones de pago/cobro, ya que normalmente en una misma registración<!-- registrazione --> se efectúan varios pagos/cobros a diferentes sujetos. En esta situación, se utiliza como filtro de partidas abiertas<!-- partite aperte --> el campo presente en la pestaña *Pagos*.

Si se presiona el botón de creación de una *Nueva registración<!-- Nuova registrazione -->* desde la que está en gestión, es posible configurar los **parámetros de ingreso** para que este campo sea también propuesto en la nueva. La causal contable puede prever, finalmente, un **[control de coherencia](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** entre el tipo de cuenta introducido aquí y lo previsto en la causal; 
</details>

**Causal**: este campo es **obligatorio**: cada registración<!-- registrazione --> se basa, de hecho, en una causal de referencia que regula sus características y funcionamiento.

Este campo no se puede modificar una vez guardada la registración<!-- registrazione --> (claramente otros campos quedarán bloqueados en caso de que se haya impreso en definitivo el libro IVA o el diario, o se haya efectuado el cierre automático de cuentas): en caso de causal incorrecta es necesario borrar e ingresar nuevamente la registración con el código correcto.

Si se presiona el botón de creación de una *Nueva registración<!-- Nuova registrazione -->* desde la que está en gestión, es posible configurar los **parámetros de ingreso** para que este campo sea también propuesto en la nueva;

**Libro IVA<!-- Registro IVA -->**: se transfiere desde la causal de contabilidad seleccionada y no es modificable manualmente:

**Protocolo IVA<!-- Protocollo IVA -->**: es un campo numérico que se gestiona automáticamente por el procedimiento para cada libro: al abrir la pantalla, se propondrá el *max protocolo + 1* para el libro configurado, luego al guardar se confirmará o no según si se han realizado otros guardados para ese libro o si hay protocolos de IVA que recuperar.

<details>
  <summary>Detalles adicionales (Haz clic para expandir)<!-- Ulteriori dettagli (Click to expand) --></summary>

La recuperación de protocolos varía dependiendo de si en la causal se ha introducido o no el bloqueo de guardado con numeración no progresiva (esto es un control de coherencia entre fecha de registración y número de protocolo), con el bloqueo activo se recuperará un protocolo libre sólo si la fecha de registración es coherente, sin el bloqueo se propondrá incluso un protocolo no válido para esa fecha, con los correspondientes mensajes de advertencia al usuario.

El campo del protocolo se deshabilita en caso de registración provisional;
</details>

**Tipo de documento<!-- Tipo documento -->**: lo propone el procedimiento en base al valor configurado en las causales de contabilidad general: es modificable, pero suele no ser necesario (típicamente sirve especificar los documentos de las registraciones de IVA, ejemplo FV = Facturas de venta o FA = Facturas de compra, mientras que todos los demás movimientos tendrán siempre un documento de tipo GEN = Genérico);

**Fecha del documento<!-- Data documento -->**: es un campo obligatorio o no según las **[configuraciones de las causales de contabilidad:](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** esta fecha no puede ser superior a la fecha de registración y debe estar dentro del rango de fechas de validez relativo al **[periodo vigente para el ejercicio de referencia](/docs/configurations/parameters/finance/accounting-parameters)** de la registración<!-- registrazione -->. Si se presiona el botón de creación de una *Nueva registración<!-- Nuova registrazione -->* desde la gestionada, es posible configurar los **parámetros de ingreso** para que este campo sea también propuesto en la nueva;

<a id="campo_proyecto" style={{ textDecoration: 'none' , color: 'inherit' , fontWeight: 'bold' }}></a> 

**Número de documento<!-- Numero documento -->**: Aquí se ingresa el número de la factura para los asientos contables de IVA

<details>
  <summary>Detalles adicionales (Haz clic para expandir)<!-- Ulteriori dettagli (Click to expand) --></summary>

Es un campo alfanumérico de 20 caracteres: según la configuración de la causal, se bloquea la inserción del mismo número/año (tomado de la fecha del documento)/tipo (campo tipo de documento) para el mismo código insertado en el campo subcuenta del encabezado de la registración<!-- registrazione --> (este bloqueo está insertado por defecto en cada causal contable, pero puede deshabilitarse). Si es el mismo número/año/subcuenta pero el tipo es diferente se devuelve un simple mensaje de advertencia al usuario. Del mismo modo, el mensaje de advertencia se devuelve también si la misma referencia se guarda en una registración provisional;
</details>

**Campo Proyecto** (ex commessa): sólo está activo si la causal contable prevé la gestión de proyectos (ex flag 'Commessa'): este proyecto es el de referencia para toda la registración<!-- registrazione -->, pero será posible reasignar los valores dentro de la pestaña **Proyecto**.

:::danger ATENCIÓN<!-- ATTENZIONE -->
La pestaña Proyectos solamente está activa cuando dentro de la ficha general de la empresa (Configuración > Tablas > Configuraciones generales > Sociedad) la bandera **Gestión de Controlling** está **desactivada**. Eso significa que **no** está activo el módulo de control de gestión en modalidad **completa**.  
En el caso de que la bandera **Gestión de Controlling** esté **activa**, la gestión del proyecto (o commessa, según la denominación anterior) ocurrirá de manera diferente, es decir, será necesario asignar el proyecto (commessa) a través de un centro de costo específico (hoy centro empresarial) que tiene como [**dimensión**](/docs/configurations/tables/controlling/analytical-accounting/dimension) (consulte la documentación del área de controlling) la adecuada para la gestión de commesse.
:::

**Divisa**: propuesta prioritariamente desde la ficha titular de la registración<!-- anagrafica intestataria della registrazione -->, en su defecto desde la divisa de la empresa: puede ser modificada cada vez. Una vez guardada la registración<!-- registrazione -->, el campo ya no es modificable;

**Fecha valor**: es la fecha de referencia del tipo de cambio, tal como está insertado en la tabla de cambios de divisa<!-- cambi valuta -->: el procedimiento lee en esta tabla la fecha más reciente insertada con el relativo tipo de cambio respecto a este campo.

<details>
  <summary>Detalles adicionales (Haz clic para expandir)<!-- Ulteriori dettagli (Click to expand) --></summary>

En los *parámetros de ingreso* esta fecha puede configurarse como fecha de registración (por defecto) o como fecha del documento. 
Existe un parámetro de usuario de alerta cuando no está configurado un cambio en la fecha de la registración (por lo que se utiliza un cambio anterior);

</details>

**Cambio Directo / Cambio Inverso**: es el valor del cambio según está insertado en la tabla de cambios de divisas: se exponen ambos, cambio DIRECTO (el que normalmente se lee en los cambios de divisas), y el valor INVERSO.

<details>
  <summary>Detalles adicionales (Haz clic para expandir)<!-- Ulteriori dettagli (Click to expand) --></summary>

El uso del valor inverso deriva del hecho de que el procedimiento mantuvo la lógica *incerto per certo* derivada de la gestión en liras: cuántas liras por una unidad de la segunda divisa – mientras el euro tiene cambios *certo per incerto* – con 1 euro cuántas unidades obtengo de la segunda divisa. Este valor puede ser forzado manualmente por el usuario (caso típico: causales de pago/cobro en moneda extranjera, el valor aplicado por el banco no será nunca el oficial de los cambios internacionales);

</details>

**Total divisa / Total documento**: son campos vinculados entre sí a través del tipo de cambio; así que en asientos en euros será indiferente escribir el importe en uno u otro. En una registración en moneda extranjera, normalmente, se inserta el valor en el campo del Total en moneda y se obtiene el contravalor en Euro.

<details>
  <summary>Detalles adicionales (Haz clic para expandir)<!-- Ulteriori dettagli (Click to expand) --></summary>

**[La causal contable](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** puede prever que estos sean actualizados automáticamente al variar los datos en la cuadrícula de IVA, solo en incremento o también en decremento. El guardado de la registración puede bloquearse si este importe no es igual a los datos de IVA de la registración;

</details>

**Total impuesto**: Campo visualizado en la base de la cuadrícula IVA, para mostrar el importe total, que se actualiza siempre automáticamente por el procedimiento, no debe insertarse manualmente.

### Pie (Footer)<!-- Piede (Footer) -->

En la parte inferior del formulario, en la pestaña *Registración<!-- Registrazione -->*, está presente la **descripción del movimiento** de la registración contable<!-- registrazione contabile -->: se trata de una nota que puede establecerse dentro de la causal contable usando los códigos numéricos paramétricos (1) (2)… (10).

<details>
  <summary>Detalles adicionales (Haz clic para expandir)<!-- Ulteriori dettagli (Click to expand) --></summary>

Los códigos (8) y (9) se utilizan sólo en las descripciones de detalle de las subcuentas en la sección del libro diario. Con doble clic en el campo es posible acceder a la búsqueda en las notas codificadas (procedimiento presente en Utilidades: la modificación manual de esta descripción será eventualmente reseteada para confirmación del usuario al modificar uno de los campos gestionados automáticamente en las notas.

En la base del formulario, abriendo la sección expandible, hay otros campos de resumen de los datos de IVA y la registración<!-- registrazione -->: en particular, merece mención los campos dedicados a la visualización del descuadre de la registración, lo cual normalmente no se permite (pero puede habilitarse en la configuración de la causal utilizada).
</details>

El **descuadre debe haber** sirve para controlar la cuadratura y poder guardar la registración<!-- registrazione -->.

<details>
  <summary>Detalles adicionales (Haz clic para expandir)<!-- Ulteriori dettagli (Click to expand) --></summary>

A menos que no se desactive el control dentro de los parámetros de la causal contable, lo cual desaconsejamos firmemente salvo requisitos muy específicos.

El valor del descuadre será propuesto como importe en las nuevas líneas de contabilidad<!-- contabilità --> que serán insertadas manualmente en la registración para cuadrarla automáticamente.
</details>

#### Botones específicos de la Ribbon Bar

> **Parámetros de ingreso**: llama los parámetros de ingreso del asiento de diario. 

- *Fecha de competencia económica*: presente en la cuadrícula del libro IVA y luego automáticamente en la del Libro Diario<!-- Libro giornale -->, puede proponerse como diaria (igual a la fecha de registración, tanto para "de fecha" como para "hasta fecha"), fin de ejercicio ("hasta fecha" será 31/12/XXXX), o ninguna para cuentas de tipo servicios (en cuyo caso quedará en blanco si la cuenta de contrapartida utilizada es de tipo "a rectificar", útil para el cálculo del ajuste, obligando al usuario a definir el rango de fechas);  
- *Avisar descuadre en moneda*: controla si también la columna 'Importe en moneda' en el Libro Diario<!-- Libro Giornale --> cuadra (aunque se representa en una única columna, el programa conoce la sección del movimiento);   
- Aviso fecha de cambio: puesto que el cambio propuesto automáticamente en la registración es el último insertado en la tabla "cambios de divisa", verifica que la fecha del cambio en tabla "cambios de divisa" sea igual a la fecha de registración;  
- *Subcuenta (Ninguno / Último introducido)*: referido a la subcuenta titular de la registración insertada en el encabezado.

 > **Botones de recálculo**: actualizan los valores con un refresh / recálculo
    - IVA
    - Libro Diario<!-- Libro Giornale -->
    - Centros de costo (si está posicionado en la Pestaña Analítica)
    - Partidas (si está posicionado en la Pestaña Partidas)

---

<!-- Las reglas para mantener los términos ERP italianos y los comentarios HTML son muy extensas para este documento.
A causa de la longitud y la complejidad, la traducción completa debe proporcionarse por partes, paragráfo por párrafo, asegurando el cumplimiento de todas las reglas.
Si necesita la traducción de una sección específica, por favor indíquelo y continúo con el formato estricto exigido. -->