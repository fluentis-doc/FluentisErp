---
title: Nueva Registración contable
sidebar_position: 1
ai_generated: true
---
El formulario se abre a través de la ruta **Administración > Registraciones contables<!-- Registrazioni contabili --> > Registraciones<!-- Registrazioni --> > Nueva Registración<!-- Nuova Registrazione -->** o mediante el botón **Nueva<!-- Nuova -->** que se encuentra en el formulario [Búsqueda de registraciones contables<!-- Ricerca registrazioni contabili -->](/docs/finance-area/ledger-records/records/search-ledger-records).

## *Cómo crear una Registración contable<!-- Come creare una Registrazione contabile --> de Compra o Venta*

<details>
 
<summary>Haz clic para los pasos fundamentales<!-- Clicca per i passaggi fondamentali --></summary>
 
1. **Ingresa los datos obligatorios en el Encabezado<!-- Testata -->**: *Fecha de registración<!-- Data Registrazione -->, si es diferente de Hoy*, ***Causal contable<!-- Causale contabile -->***, *Cuenta<!-- Conto --> (cliente o proveedor)*, *Número* y *Fecha del Documento* *Total de la registración<!-- registrazione -->*.  
 
2. **Ingresa los datos de IVA**: Tipo de IVA<!-- IVA -->, Cuenta de contrapartida y porcentaje de IVA (si no se propone ya desde la ficha del cliente/proveedor) 
<!-- 2. **Ingresa los datos de IVA**: Tipo de IVA, Cuenta de contrapartida y porcentaje de IVA (si no se propone ya desde la ficha del cliente/proveedor) -->

3. **Gestiona las fechas de competencia económica**: si es necesario, especialmente para los servicios, con el fin de obtener automáticamente los devengos y diferimientos posteriormente.
<!-- 3. **Gestisci le date di competenza economica**: se necessario in particolare per i servizi al fine di ottenere i ratei e risconti automatici in seguito. -->

4. **Verifica y modifica la sección Libro diario<!-- Libro giornale -->** si es necesario, puedes cambiar las cuentas o dividir el coste o ingreso insertando nuevas filas.
<!-- 4. **Verifica e modifica la sezione Libro giornale** se necessario puoi variare i conti o suddividere il costo o ricavo inserendo nuove righe -->

5. **Revisa la sección de Resúmenes<!-- Riepiloghi -->** verificando que el asiento<!-- registrazione --> esté balanceado.  
<!-- 5. **Controlla la sezione dei Riepiloghi** verificando che la registrazione sia bilanciata.  -->

6. **Revisa o gestiona la pestaña de Partidas abiertas<!-- Tab delle Partite aperte -->** si no se propone desde la ficha del cliente o proveedor, ingresa los datos relativos al tipo y solución de pago para gestionar las partidas abiertas de manera alineada respecto al movimiento contable<!-- movimento contabile -->.
<!-- 6. **Controlla o gestisci la Tab delle Partite aperte** se non viene proposta dall'anagrafica cliente o fornitore inserisci i dati relativi al tipo e soluzione di pagamento per gestire le partite aperte iun maniera allineata rispetto al movimento contabile -->

7. **Cobros o pagos** se gestionarán desde la **Pestaña Pagos<!-- Tab Pagamenti -->** que será utilizada **primero**, buscando las partidas a cerrar con el botón **Buscar Partidas<!-- Ricerca Partite -->** y haciendo doble clic en las partidas a cerrar; de este modo, los datos de los clientes o proveedores cobrados o pagados ya estarán reflejados en la sección Libro diario<!-- Libro giornale -->.
<!-- 7. **Incassi o pagamenti** verranno gestiti dalla **Tab Pagamenti** che sarà utilizzata **per prima**, ricercando le partite da chiudere con il bottone **Ricerca Partite** e facendo doppio click sulle partite da chiudere, in questo modo i dati dei clienti o fornitori incassati o pagati saranno già riportati nella sezione Libro giornale. -->

8. **Asientos simples de diario<!-- Scritture semplici di prima nota -->** como transferencias entre cuentas, etc., pueden ser ingresados directamente en la sección Libro diario<!-- Libro giornale -->, ya que la correspondiente causa<!-- causale --> no prevé mover la cuadrícula de IVA<!-- griglia IVA -->.
<!-- 8. **Scritture semplici di prima nota** come giroconti cc... possono essere inseriti direttamente nella sezione Libro giornale, non prevedendo la relativa causale di movimentare la griglia IVA -->

9. **Otras secciones específicas no obligatorias**: según los parámetros activados en la causa contable<!-- causale contabile -->, se visualizarán otras secciones específicas, como la Contabilidad **analítica<!-- analitica -->**, los activos fijos<!-- cespiti -->, los **Intrastat**, las comisiones de **Agentes** que es posible gestionar.
<!-- 9. **Altre sezioni specifiche non obbligatorie**  a seconda sei parametri attivati nella causale contabile, verranno visualizzate altre sezioni specifiche, quali la Contabilità **analitica**, I cespiti, gli **Intrastat**, le provvigioni **Agenti** che è possibile gestire. -->
 
</details>


El asiento contable<!-- Registrazione contabile -->, y por consiguiente el formulario para su ingreso, está compuesto por los siguientes elementos:
<!-- La Registrazione contabile, e conseguentemente la form per il suo inserimento, è composta dai seguenti elementi: -->

- El **Encabezado<!-- Testata -->** ("*Header*" que corresponde a la zona superior del formulario) que contiene elementos únicos para el asiento<!-- registrazione --> tales como:
    > La fecha

    > El número

    > El total

    > El registro de IVA<!-- registro iva --> y el número de protocolo

    > Otros
    
    > La **Causa contable<!-- Causale contabile -->** que, según sus configuraciones y parámetros, activa los siguientes elementos adicionales
- El **Pie<!-- Piede -->** ("*Footer*") del formulario que contiene la descripción general del asiento<!-- registrazione -->, que se reportará en el Libro diario<!-- Libro giornale -->, además de algunos totales y el control de desbalance entre las secciones Debe y Haber
- Pestaña **Registro<!-- Registrazione -->** que contiene las dos subsecciones ***IVA*** (depende de la causa<!-- causale -->) y ***Libro Diario<!-- Libro Giornale -->*** con los movimientos contables<!-- movimenti di contabilità -->
- Pestaña **Partidas<!-- Partite -->**, si está activada, para la apertura de partidas abiertas<!-- partite aperte --> que alimentan el calendario de vencimientos<!-- scadenzario -->
- Pestaña **Pagos<!-- Pagamenti -->**, si está activada, que gestiona el cierre de partidas abiertas<!-- partite aperte -->
- Pestaña **Analítica<!-- Analitica -->**, si está activada, que gestiona los movimientos de los centros empresariales (centros de coste / beneficio)
- Pestaña **Intrastat**, si está activada, que permite completar los datos para la posterior creación automática de las listas Intrastat
- Pestaña **Activos fijos<!-- Cespiti -->**, si está activada, que permite gestionar la compra o venta de activos fijos<!-- cespiti -->
- Pestaña **Comisiones<!-- Provvigioni -->**, si está activada, que permite gestionar la creación y almacenamiento de las comisiones de agentes<!-- Commissioni agenti -->
- Pestaña **Proyectos<!-- Progetti -->**, si está activada, que permite mover los Proyectos<!-- Progetti --> (órdenes de trabajo<!-- commesse -->)
- Pestaña Agrupaciones de partidas<!-- Raggruppamenti partite -->, si está activada: un modo particular de gestión de partidas abiertas<!-- partite aperte -->.
- Pestaña Parámetros<!-- Parametri --> con información adicional de detalle sobre el asiento<!-- registrazione -->

## **1. Encabezado (Header)<!-- 1. Testata (Header) -->**

**Fecha de registro<!-- Data di registrazione -->**: en un nuevo asiento<!-- registrazione --> se establece como la fecha actual del sistema, pero puede modificarse hacia adelante o hacia atrás en el tiempo siempre que se respete el orden cronológico de los protocolos de IVA<!-- protocolli IVA --> y los posibles periodos ya impresos en definitivo. 

<details>

  <summary>Detalles adicionales (Haga clic para expandir)<!-- Ulteriori dettagli (Click to expand) --></summary>
  
  La importancia de esta fecha es fundamental ya que no existe la necesidad de proceder a un Cambio de ejercicio:

a partir de la fecha de registro<!-- data di registrazione -->, la aplicación busca los parámetros de contabilidad<!-- parametri di contabilità --> para el año de referencia (identificando dentro de qué rango de fechas de ejercicio se encuentra) y a partir de ahí toma los otros rangos de fechas de control (fechas de competencia en línea y fechas de periodo en línea).

Esta fecha es la base para la impresión del libro diario<!-- libro giornale --> y de los extractos de cuenta contables<!-- estratti conto contabili -->.

En caso de que se pulse el botón de creación de una *Nueva registración* desde dentro de la que se está gestionando, es posible configurar, mediante los **parámetros de ingreso<!-- parametri di inserimento -->** (en la barra de cinta), que este campo también se proponga en la nueva;
<!-- L'importanza di questa data è fondamentale in quanto non esiste la necessità di procedere ad un Cambio esercizio: 

a partire dalla data di registrazione l'applicativo ricerca  i parametri di contabilità per l'anno di riferimento (individuando all'interno di quale range di date esercizio si trovi) e da questo riprende gli altri range di date di controllo (date competenza in linea e date periodo in linea). 

Questa data è quella base della stampa del libro giornale e degli estratti conto contabili. 

In caso sia premuto il pulsante di creazione di una *Nuova registrazione* da dentro quella in gestione è possibile impostare, tramite i **parametri di inserimento**  (nella ribbon bar) che questo campo sia proposto anche in quella nuova; -->

</details>


**Fecha de competencia<!-- Data competenza -->**: es la fecha de referencia para el balance de ejercicio<!-- bilancio di esercizio -->: **normalmente siempre es igual a la fecha de registro<!-- data registrazione -->**.  
Puede utilizarse para los asientos de ajuste de balance<!-- scritture di assestamento di bilancio --> y los correspondientes asientos de cierre/apertura de cuentas<!-- scritture di chiusura/apertura conti -->, que pueden establecerse como fecha de registro<!-- data di registrazione --> en los periodos de aprobación y cierre del balance (por ejemplo, abril o junio del año siguiente), pero se configurarán con *fecha de competencia<!-- data competenza -->* 31/12 – 01/01.  
Esto también con el fin de permitir la inserción en un periodo probablemente ya impreso en definitivo en el Libro Diario<!-- Libro Giornale -->.

:::important[Atención<!-- Attenzione -->]
esta fecha NO puede utilizarse para registrar las facturas por recibir de fin de año. **Se recomienda dejarla siempre igual a la fecha de registro<!-- data registrazione -->**: en contabilidad<!-- contabilità --> existen impresiones que trabajan por fecha de registro<!-- data registrazione -->, otras por fecha de competencia<!-- data competenza -->, otras que permiten al usuario filtrar por ambas; claramente se obtendrán resultados diferentes según los filtros aplicados.
:::

En los **parámetros de inserción<!-- parametri di inserimento -->** es posible configurar que esta fecha se alinee automáticamente respecto a la fecha de registro<!-- data registrazione -->;

**Número de registro<!-- Numero di registrazione -->**: Se asigna según la configuración de la tabla [**Numeración de registros<!-- Numerazione Registrazioni -->**](/docs/configurations/tables/finance/posting-ledger-numeration)

<details>

  <summary>Detalles adicionales (Click para expandir)<!-- Ulteriori dettagli (Click to expand) --></summary>
  
  La unicidad del registro<!-- registrazione --> siempre se determina por la combinación *Fecha de registro<!-- Data registrazione -->* + *Número de registro<!-- Numero registrazione -->*. El número de registro<!-- numero di registrazione --> se gestiona automáticamente por el procedimiento según la configuración del numerador (contador): en particular, al momento de guardar se asigna el número definitivo correcto, recuperando eventualmente un hueco de numeración en la fecha de registro<!-- data registrazione --> correspondiente. Eliminar un registro<!-- registrazione --> en la fecha X, de hecho, dejará un hueco en la numeración de esa fecha: solo interviniendo en la inserción/modificación de uno de los registros<!-- registrazioni --> de esa fecha se recuperará el número. En caso de registro<!-- registrazione --> provisional, este número avanzará en progresión negativa a partir del número -1000, para que el usuario vea claramente que se trata de un registro<!-- registrazione --> en este estado: los informes y búsquedas contables están configurados para filtrar por defecto solo los registros<!-- registrazioni --> definitivos;

</details>

**Subcuenta titular del registro<!-- Sottoconto intestatario della registrazione -->**: este campo es **obligatorio solo para registros IVA<!-- registrazioni IVA -->**, ya que está vinculado a la ficha del cliente/proveedor titular del documento registrado.

<details>

  <summary>Detalles adicionales (Click para expandir)<!-- Ulteriori dettagli (Click to expand) --></summary>

Este campo, normalmente, no debe completarse en caso de registros de pago/cobro<!-- registrazioni di pagamento/incasso -->, ya que normalmente en el mismo registro<!-- registrazione --> se realizan varios pagos/cobros a diferentes sujetos. En esta situación se utiliza como filtro de partidas abiertas el campo presente en la pestaña *Pagos<!-- Pagamenti -->*.

En caso de que se pulse el botón para crear un *Nuevo registro<!-- Nuova registrazione -->* desde el que se está gestionando, es posible configurar los **parámetros de inserción<!-- parametri di inserimento -->** para que este campo también se proponga en el nuevo. Finalmente, la causa contable<!-- causale contabile --> puede prever un **[control de coherencia<!-- controllo di coerenza -->](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** entre el tipo de cuenta introducido aquí y lo previsto en la causa<!-- causale -->;

</details>

**Causa<!-- Causale -->**: este campo es **obligatorio**: cada registro<!-- registrazione --> se basa en una causa<!-- causale --> de referencia que regula sus características y funcionamiento.

Este campo ya no es modificable una vez guardado el registro<!-- registrazione --> (claramente se bloquearán otros campos en caso de que se haya impreso en definitivo el registro IVA<!-- registro IVA --> o el diario<!-- giornale --> o se haya realizado el cierre automático de cuentas<!-- chiusura automatica conti -->): en caso de que la causa<!-- causale --> sea incorrecta, es necesario eliminar y volver a ingresar el registro<!-- registrazione --> con el código correcto.

En caso de que se pulse el botón para crear un *Nuevo registro<!-- Nuova registrazione -->* desde el que se está gestionando, es posible configurar los **parámetros de inserción<!-- parametri di inserimento -->** para que este campo también se proponga en el nuevo;

**Registro IVA**: se toma de la causa contable<!-- causale di contabilità --> seleccionada y no es modificable manualmente:

**Protocolo IVA<!-- Protocollo IVA -->**: es un campo numérico que se gestiona automáticamente por el procedimiento para cada registro<!-- registro -->: al abrir la pantalla se propondrá el *máx protocolo + 1* para el registro<!-- registro --> configurado, luego al guardar se confirmará o no según si se han realizado otros guardados para ese registro<!-- registro --> o si hay protocolos IVA<!-- protocolli IVA --> que recuperar.

<details>

  <summary>Detalles adicionales (Click para expandir)<!-- Ulteriori dettagli (Click to expand) --></summary>

La recuperación de protocolos cambia según si en la causa<!-- causale --> se ha introducido o no el bloqueo del guardado con numeración no progresiva (se trata de un control de coherencia entre la fecha de registro<!-- data registrazione --> y el número de protocolo), con el bloqueo activo solo se recuperará un protocolo libre si la fecha de registro<!-- data registrazione --> es coherente, sin el bloqueo también se propondrá un protocolo no válido para esa fecha, con los correspondientes mensajes de advertencia al usuario.

El campo del protocolo se deshabilita en caso de registro<!-- registrazione --> provisional;

</details>

**Tipo de documento<!-- Tipo documento -->**: lo propone el procedimiento en base al valor configurado en las causas de contabilidad general<!-- causali di contabilità generale -->: es modificable, pero normalmente no es necesario (típicamente sirve para especificar los documentos de los registros IVA<!-- registrazioni IVA -->, por ejemplo FV = Facturas de venta o FA = Facturas de compra, mientras que todos los demás movimientos siempre tendrán un documento de tipo GEN = Genérico);

**Fecha del documento<!-- Data documento -->**: es un campo obligatorio o no según las **[configuraciones de las causas de contabilidad<!-- impostazioni delle causali di contabilità -->:](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** esta fecha no puede ser superior a la fecha de registro<!-- data di registrazione --> y debe estar dentro del rango de fechas de validez relativo al **[periodo en línea para el ejercicio de referencia<!-- periodo in linea per l'esercizio di riferimento -->](/docs/configurations/parameters/finance/accounting-parameters)** del registro<!-- registrazione -->. En caso de que se pulse el botón para crear un *Nuevo registro<!-- Nuova registrazione -->* desde el que se está gestionando, es posible configurar los **parámetros de inserción<!-- parametri di inserimento -->** para que este campo también se proponga en el nuevo;

<a id="campo_proyecto" style={{ textDecoration: 'none' , color: 'inherit' , fontWeight: 'bold' }}></a> 

**Número de documento<!-- Numero documento -->**: En este campo se introduce el número de la factura para los asientos contables IVA<!-- scritture contabili IVA -->

<details>

  <summary>Detalles adicionales (Click para expandir)<!-- Ulteriori dettagli (Click to expand) --></summary>

Es un campo alfanumérico de 20 caracteres: según la configuración de la causa<!-- causale --> se bloquea la inserción del mismo número/año (tomado de la fecha del documento<!-- data documento -->) / tipo (campo tipo de documento<!-- tipo documento -->) para el mismo código introducido en el campo subcuenta<!-- sottoconto --> de la cabecera del registro<!-- registrazione --> (este bloqueo está activado por defecto en cada causa contable<!-- causale contabile -->, pero puede desactivarse). En caso de que sea el mismo número/año/subcuenta<!-- sottoconto --> pero el tipo sea diferente, se devuelve simplemente un mensaje de advertencia al usuario. Del mismo modo, el mensaje de advertencia también se devuelve si la misma referencia se guarda en un registro<!-- registrazione --> provisional;

</details>

**Campo Proyecto<!-- Campo Progetto -->** (antes obra<!-- commessa -->): está activo solo si la causa de contabilidad<!-- causale di contabilità --> prevé la gestión de proyectos<!-- gestione progetti --> (antes bandera 'Obra<!-- Commessa -->'): este proyecto es el de referencia para todo el registro<!-- registrazione -->, pero será posible reasignar los valores dentro de la pestaña **Proyecto<!-- Progetto -->** de la misma.

:::danger ATENCIÓN<!-- ATTENZIONE -->
la pestaña Proyectos<!-- tab Progetti --> está activa solamente cuando dentro de la ficha general de la empresa (Configuración > Tablas > Configuración general > Empresa) la bandera **Gestión Controlling<!-- Gestione Controlling -->** está **desactivada**. Esto significa que **no** está activo el módulo de gestión de control de gestión en modo **completo**.  
En caso de que la bandera **Gestión Controlling<!-- Gestione Controlling -->** esté **activa** la gestión del proyecto (u obra<!-- commessa -->, según la denominación anterior) se realizará de manera diferente, es decir, será necesario asignar el proyecto (obra<!-- commessa -->) a través de un centro de coste particular (hoy centro empresarial<!-- centro aziendale -->) que tenga como [**dimensión<!-- dimensione -->**](/docs/configurations/tables/controlling/analytical-accounting/dimension) (véase la documentación del área de controlling) la adecuada para la gestión de obras<!-- gestione delle commesse -->.
:::

**Divisa**: propuesta prioritariamente desde la ficha titular del registro<!-- anagrafica intestataria della registrazione -->, en su defecto desde la divisa de la empresa: puede modificarse en cada ocasión. Una vez guardado el registro<!-- registrazione --> el campo ya no es modificable;

**Fecha de valor<!-- Data valuta -->**: es la fecha de referencia del tipo de cambio, tal como se introduce en la tabla de tipos de cambio<!-- tabella cambi valuta -->: el procedimiento lee en esta tabla la fecha más reciente introducida con el tipo de cambio correspondiente respecto a este campo.

<details>

  <summary>Detalles adicionales (Haga clic para expandir)<!-- Ulteriori dettagli (Click to expand) --></summary>

En los *parámetros de inserción<!-- parametri di inserimento -->* esta fecha puede configurarse como fecha de registro<!-- data registrazione --> (por defecto) o como fecha de documento.  
Existe un parámetro de usuario de aviso cuando no se ha establecido un tipo de cambio en la fecha de la registración<!-- registrazione --> (y por lo tanto se utiliza un tipo de cambio anterior);

</details>

**Cambio directo / Cambio inverso**: es el valor del tipo de cambio tal como se introduce en la tabla de cambios de divisas: se muestran simultáneamente tanto el cambio DIRECTO (el que normalmente se lee en los cambios de divisas), como el valor INVERSO.

<details>

  <summary>Detalles adicionales (Haga clic para expandir)<!-- Ulteriori dettagli (Click to expand) --></summary>

El uso del valor inverso deriva del hecho de que el procedimiento ha mantenido la lógica *incierto por cierto* derivada de la gestión de la lira – cuántas liras por una unidad de la segunda moneda – mientras que el euro tiene cambios *cierto por incierto* – con 1 euro cuántas unidades se obtienen de la segunda moneda. Este valor puede ser forzado manualmente por el usuario (caso típico: causales<!-- causali --> de pago/cobro en moneda extranjera, el valor del tipo de cambio aplicado por el banco nunca será el oficial de los cambios internacionales);

</details>

**Total en moneda / Total del documento**: son campos vinculados entre sí a través del tipo de cambio, por lo tanto, en registros<!-- registrazioni --> en euros será indiferente escribir el importe en uno u otro.  
En un registro<!-- registrazione --> en moneda extranjera, normalmente, se introduce el valor en el campo del Total en moneda obteniendo el contravalor en euros.

<details>

  <summary>Detalles adicionales (Haga clic para expandir)<!-- Ulteriori dettagli (Click to expand) --></summary>

**[La causal contable<!-- causale contabile -->](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** puede prever que estos se actualicen automáticamente al variar los datos introducidos en la cuadrícula de IVA, solo en incremento o también en decremento. El guardado de la registración<!-- registrazione --> puede ser bloqueado si este importe no es igual a los datos de IVA de la registración<!-- registrazione -->;

</details>

**Total impuesto**: Campo visualizado en la parte inferior de la cuadrícula de IVA, para mostrar el importe total, que siempre se actualiza automáticamente por el procedimiento, no debe introducirse manualmente.

### Pie (Footer)<!-- Piede (Footer) -->

En la parte inferior del formulario, en la pestaña *Registro<!-- Registrazione -->*, está presente la **descripción del movimiento<!-- descrizione movimento -->** de la registración contable<!-- registrazione contabile -->: se trata de una nota que se puede configurar dentro de la causal<!-- causale --> de contabilidad mediante el uso de los códigos numéricos paramétricos (1) (2) … (10)

<details>

  <summary>Detalles adicionales (Haga clic para expandir)<!-- Ulteriori dettagli (Click to expand) --></summary>

los códigos (8) y (9) se utilizan solo en las descripciones de detalle de los subcuentas<!-- sottoconti --> en la sección del libro diario. Con doble clic en el campo es posible abrir una búsqueda dentro de las notas codificadas (procedimiento presente dentro de las Utilidades: la modificación manual de esta descripción será eventualmente reseteada tras la confirmación del usuario una vez modificado uno de los campos gestionados automáticamente en las notas.

En la parte inferior de la pantalla, abriendo la sección expandible (expander), hay otros campos de resumen de los datos de IVA y de la registración<!-- registrazione -->: merecen en particular una anotación los campos dedicados a la visualización del desbalance de la registración<!-- sbilancio della registrazione -->, algo normalmente no permitido (pero que se puede habilitar en la configuración de la causal<!-- causale --> en uso).

</details>

El **desbalance debe-haber<!-- sbilancio dare avere -->** sirve para un control de cuadraturas con el fin de poder guardar la registración<!-- registrazione -->.

<details>

  <summary>Detalles adicionales (Haga clic para expandir)<!-- Ulteriori dettagli (Click to expand) --></summary>

A menos que se desactive el control dentro de los parámetros de la causal contable<!-- causale contabile -->, lo cual desaconsejamos encarecidamente salvo necesidades muy particulares.

El valor del desbalance se propondrá como importe en las nuevas líneas de contabilidad que se insertarán manualmente en la registración<!-- registrazione --> para balancearla automáticamente.

</details>

#### Botones específicos de la Ribbon Bar<!-- Pulsanti specifici della Ribbon Bar -->

> **Parámetros de inserción<!-- Parametri di inserimento -->**: llama a los parámetros de inserción de la primera nota.

- *Fecha de competencia económica*: presente en la cuadrícula del registro de IVA y reportada automáticamente en la del Libro Diario, puede proponerse como diaria (igual a la fecha de registro<!-- data registrazione --> tanto para "desde fecha" como para "hasta fecha"), fin de ejercicio ("hasta fecha" se establecerá en 31/12/XXXX), y ninguna para cuentas de tipo servicios (donde se dejará en blanco si la cuenta de contrapartida utilizada es de tipo "a rectificar", es decir, útil para el cálculo del ajuste, con el fin de obligar al usuario a definir el rango de fechas);
- *Avisar desbalance en moneda*: controla si también la columna 'Importe en moneda' en el Libro Diario cuadra (aunque esté representada en una sola columna el programa conoce la sección del movimiento<!-- movimento -->);
- Avisar fecha de cambio: ya que el tipo de cambio propuesto automáticamente en la registración<!-- registrazione --> es el último introducido en la tabla "cambios de divisas", verifica que la fecha del cambio en la tabla "cambios de divisas" sea igual a la fecha de registro<!-- data registrazione -->;
- *Subcuenta<!-- Sottconto --> (Ninguna / Última introducida)*: referido a la subcuenta<!-- sottoconto --> titular de la registración<!-- registrazione --> introducida en cabecera.

 > **Botones de recálculo<!-- Pulsanti di ricalcolo -->**: actualizan los valores con un refresh / recálculo
    - IVA
    - Libro Diario<!-- Libro Giornale -->
    - Centros de coste (si se está posicionado en la pestaña Analítica)
    - Partidas (si se está posicionado en la pestaña Partidas)

## **2. Registro<!-- Registrazione -->**

### 2.1 Datos de IVA del documento<!-- Estremi IVA del documento -->
La sección está presente **solo para registros de IVA<!-- registrazioni IVA -->** (donde en la causal contable<!-- causale contabile --> se ha configurado un **registro de IVA<!-- registro IVA -->** y un tipo de movimiento de IVA<!-- movimento iva --> coherente).

En caso de **inserción manual** de un nuevo registro<!-- registrazione --> la sección puede ser completada de varias maneras:

- >*la ficha de cliente/proveedor/agente titular del registro<!-- registrazione --> no tiene ninguna subcuenta<!-- sottoconto --> de contrapartida predefinida ni tampoco la tasa de IVA estándar*: en este caso el usuario selecciona el **Tipo de IVA<!-- Tipo IVA -->** (ver detalle abajo) así como la **subcuenta<!-- sottoconto -->** de contrapartida para la línea y la **tasa de IVA<!-- aliquota IVA -->** correspondiente. Una vez configurado esto, el procedimiento se encargará de desglosar el total del documento/registro<!-- documento/registrazione --> introducido en cabecera para asignar los importes relativos a las distintas columnas de la línea. El usuario podrá modificar estos valores y proceder a nuevas inserciones, siempre con la misma lógica. El importe propuesto se calculará en base a la diferencia faltante para cubrir el total del registro<!-- registrazione -->;
- >*la ficha de cliente/proveedor/agente prevé la subcuenta<!-- sottoconto --> de contrapartida predefinida y/o la tasa de IVA*: una vez introducido el **Tipo de IVA<!-- Tipo IVA -->** el procedimiento propone la subcuenta<!-- sottoconto --> de contrapartida y/o la tasa predefinida, los importes se introducen como en el caso anterior desglosando el total del documento/registro<!-- documento/registrazione --> y el usuario podrá modificarlos manualmente: la siguiente línea, nuevamente, propondrá subcuenta<!-- sottoconto -->/tasa desde la ficha y el importe obtenido del residuo hasta cubrir el total del documento/registro<!-- documento/registrazione -->;
- >*la ficha de cliente/proveedor (no se gestiona para los agentes) prevé una lista de subcuentas<!-- sottoconti --> de contrapartida, ninguna subcuenta<!-- sottoconto --> de contrapartida predefinida, y está presente la tasa de IVA predefinida*: en este caso la aplicación propondrá directamente en la sección de IVA la lista de subcuentas<!-- sottoconti --> de contrapartida predefinidas, cada una con la tasa de IVA de detalle correspondiente o con la tasa predefinida de la ficha, y el usuario deberá introducir los importes manualmente línea por línea. En este caso la adición manual de una nueva línea no propondrá la subcuenta<!-- sottoconto --> relativa sino solo la tasa de IVA, desglosando el importe faltante hasta cubrir el total del documento/registro<!-- documento/registrazione -->.

**Tipo de IVA<!-- Tipo IVA -->**: es una tabla fija interna del sistema y contiene los valores:  
> - **Genérico**: es el tipo **estándar** de movimiento de IVA<!-- movimento IVA -->, suficiente en casi todos los casos. Este tipo de línea se considera en algunos procedimientos de IVA como movimiento de mercancía;
> - **Destinado a la reventa**: se utiliza para las compras que son base de cálculo de los porcentajes a aplicar en la ventilación de los ingresos (por ejemplo, para supermercados o farmacias: estos minoristas no aplican el IVA artículo por artículo, sino que se les permite hacer un total único de las ventas de fin de período y dividir los importes según la proporción de los artículos comprados en el período);
> - **Redondeos**: se trata de los redondeos fuera del campo de IVA, típicos por ejemplo de las facturas telefónicas. La utilidad de esta indicación es mínima, de todos modos la subcuenta<!-- sottoconto --> relativa se introduce según la lógica vista anteriormente;
> - **Venta IVA 74Ter**: se trata de un tipo de movimiento específico para las agencias de viaje, para las cuales la fecha de competencia de IVA se retrasa 30 días respecto a la fecha de la operación (vendo en la fecha actual, el IVA se pagará en la liquidación del próximo mes). En estas líneas se aplica la gestión de IVA del 74Ter con la liquidación periódica de IVA correspondiente;
> - **Reventa**: se trata de las ventas sobre las cuales la aplicación aplicará el cálculo de la ventilación de los ingresos;
> - **Operación no agrícola**: se trata de un tipo de movimiento específico para las sociedades sujetas al régimen agrícola, sirve para excluir de este régimen (configurado en la causal contable<!-- causale contabile -->) para la línea específica;
> - **Servicio**: se trata de un tipo de movimiento específico para identificar que la línea deriva de una compra/venta de servicios, elemento importante en algunos procedimientos de IVA (por ejemplo, los listados **INTRASTAT**).

**% No deducible<!-- % Indetraibilità -->**: se toma de la tasa de IVA<!-- aliquota IVA --> introducida en la línea. Se desaconseja forzarla manualmente, la operación correcta es modificar la tasa de IVA; determina el cálculo de la columna (impuesto) *no deducible*.

**Impuesto<!-- Imposta -->**: puede ser forzado manualmente respecto al cálculo realizado por el procedimiento: puede suceder, de hecho, que el documento de compra tenga un redondeo no gestionado correctamente, el usuario debe registrar el documento tal como lo recibe;

**Total moneda / total**: son campos calculados y no almacenados a nivel de base de datos;

**Desde fecha de competencia/Hasta fecha de competencia<!-- Da data competenza/A data competenza -->**: son las fechas de **competencia económica**, fundamentales para los **cálculos** automáticos de **ajustes e integraciones** tanto a nivel de balance interanual como de balance contable. En base a su indicación se calcularán los devengos y diferidos.

<details>

  <summary>**EJEMPLO** Haga clic para expandir<!-- **ESEMPIO** Click to expand! -->!</summary>
 
Estamos al 31/03/año X.

Si el asiento de coste<!-- registrazione di costo --> indica fechas de competencia 31/03/X - 31/03/X+1, en fecha 31/12/X al ejecutar los procedimientos de ajuste se calculará un anticipo activo<!-- risconto attivo --> por la parte proporcional del coste<!-- costo --> correspondiente al periodo 01/01/X+1 - 31/03/X+1.

Si el asiento de coste<!-- registrazione di costo --> realizado el 31/01/X indica fechas de competencia 31/01/X-1 - 31/01/X, al ejecutar los procedimientos de ajuste en fecha 31/12/X-1 se calculará un devengo pasivo<!-- rateo passivo --> por la parte proporcional del coste<!-- costo --> correspondiente al periodo 31/01/X-1 - 31/12/X-1

</details>

Este rango de fechas puede gestionarse automáticamente, según los ***Parámetros de inserción<!-- Parametri di inserimento -->***, de 3 formas alternativas:

- >*Fin de ejercicio<!-- Fine esercizio -->* con la cual la fecha inicial se propone en base a la fecha del documento y la final como fecha de fin de ejercicio
- >*Diaria<!-- Giornaliera -->* (con la cual ambas fechas se establecen en base a la fecha del documento);
- >*Sin fecha para tipo de cuenta servicio<!-- Nessuna data per tipo conto servizio -->* (opción recomendada) la aplicación no propondrá ninguna fecha para los subcuentas<!-- sottoconti --> económicas que tengan en el tipo de cuenta<!-- tipo conto --> la marca *servicio<!-- servizio -->*, pero obligará al usuario a introducir manualmente el rango correcto (con los otros tipos de cuenta<!-- tipi conto --> propondrá la misma fecha del documento en ambas fechas).

:::important[Atención<!-- Attenzione -->]
Para que los devengos y anticipos<!-- ratei e risconti --> puedan ser calculados automáticamente por el procedimiento de ajuste, es necesario que el tipo de cuenta<!-- tipo conto --> utilizado para las cuentas<!-- conti --> afectadas por los ajustes esté definido en la tabla **[Tipos de cuenta](/docs/configurations/tables/finance/account-types)<!-- Tipi conto -->** con la marca Servicio<!-- Servizio -->.

Ejemplo de tipos de cuenta<!-- tipi conto --> que tienen la marca servicio<!-- flag servizio --> en la tabla Tipos de cuenta<!-- Tipi conto --> (en las bases de datos estándar) "Costes a rectificar<!-- Costi da rettificare -->" y "Ingresos a rectificar<!-- Ricavi da rettificare -->".

El tipo de cuenta<!-- tipo conto --> adecuado se asigna a la subcuenta<!-- sottoconto --> correspondiente directamente en el plan de cuentas<!-- piano dei conti -->.
:::

**Mes**: es el **periodo de referencia IVA para el asiento<!-- registrazione -->**, obtenido en función del tipo de liquidación y la fecha de competencia IVA. El campo que realmente se utiliza en la liquidación, sin embargo, es la fecha de competencia IVA;
 
**Fecha de competencia IVA<!-- Data competenza IVA -->**: el campo se propone según la configuración de la causa contable<!-- causale contabile -->, típicamente como fecha de registro<!-- data registrazione --> para las compras y fecha de documento para las ventas (si el movimiento<!-- movimento --> es venta 74Ter entonces es fecha de documento + 30 días). Esta es la **fecha de referencia para la impresión de la liquidación periódica de IVA<!-- stampa della liquidazione IVA periodica -->**;
 
**Competencia plafond**: esta fecha se toma como referencia para la inclusión del asiento<!-- registrazione --> en el cálculo del plafond; se propone igual a la fecha del documento para todas las tasas de IVA que prevén la gestión del plafond de IVA;

**Nota de variación de años anteriores<!-- Nota variazione anni precedenti -->**: el campo está activo solo para asientos<!-- registrazioni --> con tipo de documento que prevé la marca *Nota de variación<!-- Nota di variazione -->*. Sirve para indicar que la línea de la nota de crédito se refiere a años anteriores respecto al año del documento.
  
**Fecha de referencia de la nota de variación<!-- Data riferimento nota di variazione -->**: el campo está activo solo para asientos<!-- registrazioni --> con tipo de documento que prevé la marca *Nota de variación<!-- Nota di variazione -->*. Sirve para indicar la fecha de referencia de la factura rectificada;

**División**: el campo es visible solo si la causa<!-- causale --> prevé la gestión de divisiones. En este caso será posible dividir el mismo asiento de IVA<!-- registrazione IVA --> en varias divisiones empresariales.

#### Anotaciones adicionales<!-- Annotazioni ulteriori -->:  
- no es posible guardar **líneas de IVA con base imponible 0** a menos que la causa contable<!-- causale contabile --> lo permita (marca *permitir subcuentas con valor 0<!-- consenti sottoconti con valore 0 -->*);

- los **redondeos del IVA** se gestionan línea por línea, mientras que la normativa prescribe que el cálculo se realice sobre una base imponible que agrupe todas las líneas con la misma tasa de IVA: es posible, por tanto, que exista una diferencia debida únicamente a la gestión de redondeos (esto solo aplica para la inserción manual de un asiento contable<!-- registrazione contabile -->: las contabilizaciones automáticas de compras y ventas ya realizan el cálculo correcto) respecto al documento en registro.
 
    Una vez detectada la diferencia, las soluciones son: 
        1. forzar manualmente una línea de IVA
        2. pulsar el botón de recálculo de impuesto que se encuentra en la cabecera y hacer que la aplicación alinee automáticamente la última línea de cada tasa presente.

### 2.2 Libro diario<!-- Libro giornale -->

<details>

  <summary>Haga clic para ver el ejemplo<!-- Click per visualizzare l'esempio --></summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/record-tab/image02.png)

</details>

Cada registro de contabilidad general **debe obligatoriamente tener filas en esta sección** para poder ser guardado.

- > En caso de **registros de IVA<!-- registrazioni IVA -->**, esta parte se **calcula**, en base a la lógica de los ***tipos de importe<!-- tipi importo -->***, según los datos cargados en las filas de la anterior **cuadrícula de IVA<!-- griglia IVA -->**;

- > en caso de registros de **pago/cobro<!-- pagamento/incasso -->**, en cambio, los importes **dependen de los importes de los pagos cargados en la pestaña *Pagos<!-- Pagamenti -->***;

- > en **otros casos**, en cambio, las filas y los importes serán gestionados en general **manualmente** por el usuario.

:::note[Nota]
la causa<!-- causale --> puede proponer una lista de subcuentas<!-- sottoconti --> predefinidas: en este caso, el usuario deberá ingresar fila por fila solo los importes en la sección Debe / Haber correcta.

Al momento de guardar, si la causa<!-- causale --> no prevé el guardado de subcuentas<!-- sottoconti --> en cero, las filas no valorizadas serán eliminadas automáticamente;

Este modo de uso es típico, por ejemplo, para los asientos de nómina de empleados donde la plantilla de la causa<!-- causale --> propone todas las posibles subcuentas<!-- sottoconti --> útiles, pero en cada ocasión solo se utilizan algunas.
<!--
la causale può proporre una lista di sottoconti preimpostati: l'utente dovrà in questo caso inserire riga per riga soltanto gli importi nella sezione Dare / Avere corretta. 

Al momento del salvataggio, se la causale non prevede il salvataggio di sottoconti a zero, le righe non valorizzate saranno cancellate automaticamente;

Questa modalità di utilizzo è tipica, ad esempio, pr le scritture delle paghe dipendenti dove il template della causale propone tutti i possibili sottoconti utili, ma di volta in volt se ne utilizzano solo alcuni 
-->
:::

<details>

  <summary>Detalles adicionales (Haga clic para expandir)<!-- Ulteriori dettagli (Click to expand) --></summary>
 
- en caso de registro simple ‘debe/haber', es posible codificar una causa<!-- causale --> específica que ya prevea las subcuentas<!-- sottoconti --> a utilizar con el tipo de importe ‘Total Doc./Registro<!-- Tot. Doc./Registrazione -->' para que el usuario simplemente escriba el importe en los campos de totales de cabecera y el procedimiento los coloque en debe/haber según la causa<!-- causale -->;
  
- cada nueva inserción manual de filas cubrirá el eventual desbalance presente en el registro: se recuerda que los registros desbalanceados no pueden ser guardados, salvo habilitando la causa<!-- causale -->.

<!--
- in caso di registrazione semplice ‘dare/avere' è possibile codificare una causale specifica che preveda già i sottoconti da utilizzare con il tipo importo ‘Tot. Doc./Registrazione' per far si che l'utente scriva semplicemente l'importo nei campi dei totali di testata e la procedura li metta in dare/avere secondo la causale;
  
- ogni nuovo inserimento manuale delle righe andrà a coprire l'eventuale sbilancio presente nella registrazione: si ricorda che le registrazioni sbilanciate non possono essere salvate, se non abilitando la causale.
-->
</details>

#### Campos específicos de la cuadrícula Libro Diario<!-- Campi specifici della griglia Libro Giornale -->

**Moneda<!-- Valuta -->**: puede prever los detalles de la moneda (fecha de cambio, valor de cambio e importe en moneda): el importe en moneda debe cargarse siempre en valor absoluto (el signo debe/haber en la divisa de la empresa define también su signo); los campos en moneda y en la divisa de la empresa pueden estar desvinculados entre sí, no recalculando los importes en los mensajes de confirmación que se ejecutan al modificar los mismos;  
**Desde fecha de competencia/Hasta fecha de competencia<!-- Da data competenza/A data competenza -->**: este rango de fechas, como ya se mencionó para la sección de IVA, es fundamental para la gestión de los asientos de ajuste tanto para los balances intermedios como para el balance contable. Se remite a las notas específicas insertadas arriba;  
**División<!-- Divisione -->**: puede estar presente si se configura en la causa<!-- causale -->, puede servir para dividir el mismo registro en varias divisiones;  
**Descripción detallada<!-- Descrizione dettaglio -->** (se recomienda su ingreso por defecto en todas): puede estar presente si se configura en la causa<!-- causale -->, esto también puede ser gestionado en parte automáticamente en la causa<!-- causale --> con las notas (1) – (2) … etc. como para la descripción general. De particular interés la gestión de los códigos (8)-(9) en relación con las filas de clientes/proveedores de cierre de partidas contables;  
**Fecha valor banco<!-- Data valuta banca -->**: El campo puede ser automatizado respecto al número de días configurado, en cada ficha de bancos, para cada causa contable<!-- causale contabile --> que les concierna;  
**Núm. de fila<!-- Num. riga -->**: puede ser útil para registros particularmente largos (ej. nóminas) para mantener en orden de inserción las diferentes subcuentas<!-- sottoconti -->;  
**Ref. manual de partidas<!-- Rif. manuale partite -->**: puede estar presente, si se configura en la causa<!-- causale -->, puede servir para vincular manualmente filas de contabilidad sin pasar por la gestión de partidas abiertas;  
**Subcuenta de contrapartida<!-- Sottoconto di contropartita -->**: puede estar presente, si se configura en la causa<!-- causale -->, se desaconseja su uso manual. La gestión automática en registros de IVA prevé para las filas de clientes/proveedores asignar la subcuenta de costo/ingreso de mayor importe, mientras que para las filas de costo/ingreso/IVA la contrapartida será la subcuenta de cliente/proveedor.

#### Notas adicionales<!-- Ulteriori annotazioni -->

El usuario puede proceder a forzar manualmente las filas del libro diario<!-- libro giornale -->: normalmente se recomienda alinear los datos comenzando directamente desde el IVA. Cualquier forzado puede ser restablecido presionando el botón de recálculo del libro diario<!-- libro giornale -->.  
En la causa contable<!-- causale contabile -->, en particular para todas las causas de IVA<!-- causali IVA -->, para la fila con el *Total Doc./registro<!-- Tot. Doc./registrazione -->* se inserta la cuenta genérica de clientes/proveedores, que será sustituida cada vez por la subcuenta titular del registro: esta sustitución se realizará solo si en los **[parámetros de contabilidad<!-- parametri di contabilità -->](/docs/configurations/parameters/finance/accounting-parameters)**, sección lista de cuentas de clientes/proveedores, se autoriza (es decir, se inserta en la cuadrícula) el tipo de subcuenta relativa asociándola a la cuenta principal, la cual deberá corresponder a la presente en la plantilla de la causa contable<!-- causale contabile -->.
## 3. Partidas<!-- Partite -->

La pestaña está presente **solo si la causal contable<!-- causale contabile --> tiene activado el indicador *Apertura de partidas<!-- Apertura partite -->***.  

### 3.1 Cuadrícula Tipología de pago<!-- Griglia Tipologia di pagamento -->

Cuadrícula dedicada a la gestión de los datos de cálculo de las partidas<!-- partite --> subyacentes, replica los datos presentes dentro de la ficha de cliente/proveedor/agente titular del asiento<!-- registrazione -->.
 
Si en la ficha no hay ningún dato por defecto que se pueda leer, esta sección puede ser completada manualmente en caso de inserción manual del asiento contable<!-- registrazione contabile -->.

<details>

  <summary>Detalles adicionales (Haga clic para expandir)<!-- Ulteriori dettagli (Click to expand) --></summary>
  
  Para otros tipos de asiento<!-- registrazione --> (por ejemplo, para los pagos anticipados es posible codificar una causal<!-- causale --> que abra la partida<!-- partita -->, en el signo opuesto, en lugar de cerrarla ya que el documento aún no ha sido registrado): en este caso la gestión de esta sección se vuelve manual, de modo que el usuario podrá ingresar los datos esenciales del tipo de pago, la solución de pago y la subcuenta<!-- sottoconto --> de referencia, con el 100% ingresado en el campo *Porcentaje<!-- Percentuale -->*.  

    Para esta sección cabe señalar que:  
    - la partida<!-- partita --> puede ser creada también en subcuentas<!-- sottoconti --> que no sean de ficha<!-- anagrafica --> y que no tengan el indicador Apertura de partidas<!-- Apertura partite --> en el plan de cuentas (este indicador se refiere solo al control de que los datos del diario y de partidas<!-- partite --> coincidan para las subcuentas<!-- sottoconti --> que lo tienen activado);  
    - los bancos de apoyo<!-- appoggi bancari --> normalmente se traen desde la ficha<!-- anagrafica --> o desde el documento contabilizado del área de compras/ventas/perceptores, pero pueden ser forzados cada vez seleccionando uno diferente utilizando la ayuda abi/cab (doble clic en el campo).
</details>

El banco de apoyo<!-- appoggio bancario --> vinculado en esta sección (campos **Banco, Descripción del banco, CIN, ABI, CAB, Cuenta corriente, IBAN, SWIFT**)

será el dato normalmente utilizado en los pagos a proveedores como banco beneficiario del pago, a menos que esté activado el indicador de **[Imponer banco de apoyo presente en la ficha del proveedor<!-- Imponi banca d'appoggio presente in anagrafica del fornitore -->](/docs/configurations/parameters/treasury/vendor-payments-parameters)**;  
 

Normalmente se ingresa el campo **Porcentaje<!-- Percentuale -->** al 100%. Con porcentajes diferentes (que sumen 100%) es posible gestionar en varias filas también combinaciones de pagos diferentes. 

<details>

  <summary>Detalles adicionales (Haga clic para expandir)<!-- Ulteriori dettagli (Click to expand) --></summary>

En el campo **Importe<!-- Importo -->** se puede ingresar un importe fijo a utilizar para la combinación tipo de pago/solución de pago de la fila en gestión; el campo **Impuesto<!-- Imposta -->** permite definir, de este importe, cuánto corresponde al IVA (esto es útil en caso de que la solución de pago prevea porcentajes imponible/impuesto diferenciados entre las distintas cuotas, para obtener un cálculo correcto). Es posible ingresar una combinación importe/porcentaje:

**Agrupar partidas<!-- Raggruppa partite -->**: el indicador, si no está activo, se toma de la ficha de cliente/proveedor: en la práctica no tiene uso, ya que es muy raro que dos partidas<!-- partite --> tengan el mismo tipo de pago y la misma fecha de vencimiento dentro del mismo documento;

Debajo de la cuadrícula hay algunos campos de resumen de la situación del cliente/proveedor: el importe del **crédito concedido<!-- fido concesso -->** en el módulo de Riesgo de cliente, el valor de la **exposición<!-- esposizione -->** obtenido según la situación de las partidas<!-- partite --> abiertas (sin considerar el asiento<!-- registrazione --> en uso) y el **saldo contable<!-- saldo contabile -->** (considerando también el asiento<!-- registrazione --> en uso);

En caso de asiento<!-- registrazione --> derivado de la **contabilización de impagos<!-- contabilizzazione insoluti -->**, la cuadrícula superior NO tiene ninguna relevancia para el cálculo de las partidas<!-- partite --> subyacentes (normalmente la ficha<!-- anagrafica --> prevé partidas<!-- partite --> para RB, pero los impagos se gestionan como BB y no se deben volver a emitir automáticamente otras riba): solo se lee en caso de que se necesite el dato de los bancos de apoyo<!-- appoggi bancari -->.
</details>



### 3.2 Cuadrícula de partidas<!-- Griglia Partite -->

**presenta la lista de las partidas<!-- partite --> calculadas según la configuración de la sección anterior**.

El usuario puede forzar el tipo de pago, la fecha de vencimiento y los importes de las distintas cuotas (asegurándose de respetar los totales). La cuadrícula de partidas<!-- partite --> NO permite la inserción manual de una nueva cuota.

En caso de que la causale<!-- causale --> prevea tanto la apertura de partidas<!-- apertura partite --> como el cierre por compensación y también se haya activado el indicador *Aviso*, al momento de guardar la registración<!-- registrazione --> se mostrará al usuario un mensaje de advertencia sobre la presencia de partidas<!-- partite --> que se pueden compensar.

**Estado de la partida<!-- Stato Partita -->**: se indica el estado de la partida<!-- partita --> (abierta, parcialmente abierta, cerrada);  
**Cuenta/subcuenta/descripción<!-- Conto/sottoconto/descrizione -->**: subcuenta<!-- sottoconto --> de cliente o proveedor a la que se refiere la partida<!-- partita -->;  
**Pago<!-- Pagamento -->**: tipo de pago (transferencia bancaria, efectivo, etc.);  
**Vencimiento<!-- Scadenza -->**: fecha de vencimiento calculada a partir de las condiciones de pago de la cuadrícula superior o establecida manualmente;  
**Código de documento<!-- Codice documento -->**: código del documento que generó la partida<!-- partita --> (por ejemplo FA = factura de compra, FV = factura de venta);  
**Fecha de documento<!-- Data documento -->**: fecha del documento (por ejemplo factura de compra) que generó la partida<!-- partita -->;  
**Número de documento<!-- Numero documento -->**: número del documento que generó la partida<!-- partita -->;  
**Divisa**: moneda en la que está denominada la partida<!-- partita --> (ej. EUR = Euro);  
**Cambio directo / Cambio inverso<!-- Cambio diretto / Cambio inverso -->**: tipo de cambio (mostrado tanto como tipo directo *cierto por incierto*, como tipo indirecto *incierto por cierto*) que determinó el valor en moneda extranjera y el contravalor en euros de la partida<!-- partita -->;  
**Fecha de moneda<!-- Data Valuta -->**: fecha de referencia del tipo de cambio;  
**Importe en moneda<!-- Importo in valuta -->**: importe en moneda extranjera o igual al importe en euros si el tipo de cambio es 1;  
**Importe Debe / Haber<!-- Importo Dare / Avere -->**: la partida<!-- partita --> tiene un signo (o sección, como se prefiera) así como el movimiento contable<!-- movimento contabile --> que la generó. La partida<!-- partita --> con signo Debe será una partida<!-- partita --> a nuestro favor, mientras que una partida<!-- partita --> con signo Haber será una partida<!-- partita --> a deber (por ejemplo, frente a una factura recibida de proveedor o una nota de crédito emitida al cliente);

Además, es posible bloquear el pago de la partida<!-- partita --> (Flag **No Pagable<!-- Non Pagabile -->**): el procedimiento almacenará la fecha y el usuario que bloqueó el pago con una posible nota explicativa (**Inicio de Bloqueo, Usuario de Bloqueo, Notas de Bloqueo<!-- Inizio Blocco, Utente Blocco, Note Blocco -->**) así como la fecha y el usuario que desbloquea (**Usuario de Desbloqueo, Fin de Bloqueo<!-- Utente Sblocco, Fine Blocco -->**), para ambas operaciones existen derechos de usuario específicos en el ARM.

**Número / año de la partida<!-- Numero / anno partita -->**: asignados automáticamente para identificar la partida<!-- partita -->;  
**Posición de la partida<!-- Posizione partita -->**: combo box vinculada a una tabla libre definible por el usuario, permite clasificar las partidas<!-- partite --> contables desde el momento de su creación;  
**Notas** (de la partida<!-- partita -->): notas libres que también se pueden vincular automáticamente en la causale<!-- causale contabile --> a la descripción detallada de la subcuenta<!-- sottoconto --> tal como se ingresó en la contabilidad<!-- contabilità -->.  
**Agente**: en este campo es posible asociar el agente de referencia para la partida<!-- partita -->: este se valoriza automáticamente en base al agente ingresado en la factura de venta al momento de la contabilización (en caso de que haya varios agentes, se asignará el que tenga mayores comisiones).  
**Fecha de Referencia / Número de Referencia<!-- Data Riferimento / Numero Riferimento -->**: Campos tomados de la fecha y número de documento en la registración contable<!-- registrazione contabile --> (si están presentes, de lo contrario se toman de la fecha/número de registración<!-- registrazione -->), permiten agrupar y filtrar las partidas<!-- partite --> referidas al mismo documento (por ejemplo, una nota de crédito que se refiere a una factura, para visualizar el mayor de partidas<!-- partitario --> todo junto).  
**Cig** y **Cup**: tomados de la factura de venta, pero también se pueden escribir manualmente (mediante combo box). Véase la **[documentación sobre los campos en factura](/docs/sales/sales-invoices/invoicing/sales-invoice).**  
**Cuenta / Subcuenta de depósito<!-- Conto / Sottoconto cauzione -->**: cuenta dedicada a la contabilización de los depósitos de garantía vinculados a las partidas<!-- partite --> mediante el modo correspondiente. Ver [**aquí**](/docs/finance-area/maturity-values/maturity-values/maturity-values/search-maturity-values) el flag *Mostrar depósitos<!-- Mostra cauzioni -->*.
**Modelos de referencia** y **Número de referencia**: campos generalmente no utilizados en Italia, típicos de Croacia (donde cuando la empresa emite la factura, en cada vencimiento asocia un tipo/código identificativo de la cuota, que el cliente luego indica en el pago y el banco reporta en el movimiento de cobro: a partir del extracto bancario, por tanto, es fácil rastrear la cuota cerrada. Los campos representan una referencia también para una futura implementación de importación de movimientos bancarios).
**Retraso medio en días de pago<!-- Ritardo medio giorni di pagamento -->**: No utilizado en Italia: toma el valor de los días de retraso del registro del cliente pero también se puede modificar manualmente. Puede utilizarse en la simulación de flujo de caja.

#### Botones específicos<!-- Pulsanti specifici -->
> **Eliminar partidas<!-- Cancella le partite -->**: permite eliminar la partida<!-- partita --> creada automáticamente según el tipo de pago ingresado.  
> **Eliminación desde la cuadrícula de pagos<!-- Cancellazione dalla griglia dei pagamenti -->**: permite eliminar la solución de pago, propuesta automáticamente por el registro, o ingresada manualmente.  
> **Recalcular partidas<!-- Ricalcola partite -->**: permite recalcular la partida<!-- partita --> forzada manualmente.  
> **Agrupar partidas<!-- Raggruppa partite -->**: permite agrupar las partidas<!-- partite --> en caso de que haya varias partidas<!-- partite --> con la misma fecha de vencimiento.

## **4. Pagos<!-- Pagamenti -->**

La pestaña **solo está presente si la causale contable<!-- causale contabile --> tiene activado el flag *Cierre de partidas<!-- Chiusura partite -->***.

Permite visualizar las partidas<!-- partite --> abiertas para proceder a los pagos/cobros con cierre de partidas<!-- partite --> abiertas o a las compensaciones.

:::tip Info
La pestaña está dividida en dos cuadrículas fundamentales, la primera, la superior, sirve para buscar las partidas<!-- partite --> abiertas con el fin de cerrarlas, la segunda, inferior, contendrá el resultado de la maniobra de cierre (es decir, los pagos resultantes)
:::

### Configuración correcta de la interacción entre Apertura, Cierre y Compensación de Partidas<!-- Corretta configurazione dell'interazione tra Apertura, Chiusura e Compensazione Partite -->

- Típicamente todos los asientos de tipo IVA (ej. compras o ventas) tienen el flag de *apertura de partidas<!-- apertura partite -->* y pueden tener también el flag de cierre + compensación de partidas<!-- chiusura + compensazione partite -->;

- Las causales<!-- causali --> de **pago/cobro<!-- pagamento/incasso -->**, en cambio, prevén siempre el cierre de partidas<!-- chiusura partite --> **sin nunca el flag de compensación**, eventualmente pueden tener el flag de apertura de partidas<!-- apertura partite --> para gestionar los casos de pago anticipado (en este caso, al faltar el cierre de una partida<!-- partita -->, se abrirá una partida<!-- partita --> de signo opuesto manteniendo el cuadre con el movimiento contable<!-- movimento contabile -->.

El cuadre puede hacerse obligatorio mediante los **[parámetros](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** de la causale contable<!-- causale contabile -->.

:::tip ATENCIÓN<!-- ATTENZIONE -->
Diferencia entre pagos de partidas<!-- pagamenti partite --> y compensación de partidas<!-- compensazione partite -->:  
la compensación, en la terminología contable, puede entenderse tanto como compensación de partidas<!-- compensazione partite --> (debe/haber) del mismo subcuenta<!-- sottoconto --> (por ejemplo, factura con nota de crédito) como también como compensación cliente/proveedor (por ejemplo, compenso la deuda con el subcuenta<!-- sottoconto --> proveedor con el crédito del subcuenta<!-- sottoconto --> cliente perteneciente a la misma ficha maestra<!-- anagrafica -->).  
En este formulario la compensación está estrictamente relacionada con la situación de partidas<!-- partite --> pertenecientes al mismo subcuenta<!-- sottoconto -->.  
La compensación cliente/proveedor puede gestionarse simplemente realizando un **pago** de partidas<!-- pagamento partite --> (cierre simple) "cruzado" (tanto debe como haber - por ejemplo mediante una transferencia interna<!-- giroconto --> - compensándose a saldo en contabilidad).
Como alternativa, es posible utilizar dos procedimientos más específicos y flexibles: [**Compensación de partidas**](/docs/finance-area/maturity-values/procedures/maturity-compensation)<!-- Compensazione partite --> o [**Compensación rápida**](/docs/finance-area/maturity-values/procedures/fast-compensation)<!-- Compensazione veloce -->
:::

Si en el encabezado del asiento<!-- registrazione --> se ha ingresado un subcuenta<!-- sottoconto --> titular, este se utilizará como filtro de búsqueda en los campos iniciales correspondientes de la pestaña de pagos<!-- scheda pagamenti -->: 

<details>

  <summary>Click para ver el ejemplo<!-- Click per visualizzare l'esempio --></summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/record-tab/image02.png)

</details>

para todos los asientos<!-- registrazioni --> de IVA, por lo tanto, la aplicación propondrá aquí solo las partidas<!-- partite --> del cliente/proveedor ingresado en el encabezado, para proceder a la compensación factura/nota de crédito; 

en el caso de asientos<!-- registrazioni --> de pago/cobro (especialmente de varios clientes o proveedores), normalmente el campo en el encabezado estará vacío y será el usuario quien complete el filtro según sus necesidades. 

Cabe destacar, en particular, el campo del subcuenta<!-- sottoconto --> **Banco<!-- Banca -->**: no se trata de un filtro, sino que se completa automáticamente con el subcuenta<!-- sottoconto --> de pago ingresado en la **[ficha maestra<!-- anagrafica -->](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance)** del cliente/proveedor titular del asiento<!-- registrazione --> y desde aquí actualiza el asiento contable<!-- registrazione contabile --> en el campo que prevé el tipo de importe *Total Doc./asiento<!-- Tot. Doc./registrazione -->*, 

<details>

  <summary>Click para ver el ejemplo<!-- Click per visualizzare l'esempio --></summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image03.png)

</details>

(si los **[parámetros de contabilidad<!-- parametri di contabilità -->](/docs/configurations/parameters/finance/accounting-parameters)**, en la lista de cuentas de clientes/proveedores, autorizan la sustitución, es decir, debe existir una asociación entre el tipo de cuenta bancos y el correspondiente grupo principal<!-- mastro --> en el plan de cuentas para que la sustitución pueda realizarse).

<details>

  <summary>Click para ver el ejemplo<!-- Click per visualizzare l'esempio --></summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image04.png)

</details>

### Ejecución del cierre de partida<!-- Esecuzione della chiusura partita -->

:::tip CÓMO CERRAR LA PARTIDA<!-- COME CHIUDERE LA PARTITA -->
Una vez identificada, en la primera cuadrícula, la partida<!-- partita --> (o las partidas<!-- partite -->) a pagar, es posible seleccionarlas y pagarlas mediante **doble clic** en la fila individual, o utilizando el botón **Crear pagos<!-- Crea pagamenti -->**.
:::

En caso de que la causa<!-- causale --> prevea la compensación de partida<!-- compensazione partita --> estará activo el botón de **Compensación de partidas<!-- Compensazione partite -->** (y el doble clic tendrá el mismo significado). 

Otro botón útil en esta sección es **Crear pagos extendidos<!-- Crea pagamenti estesi -->**: 

<details>

  <summary>Click para ver el ejemplo<!-- Click per visualizzare l'esempio --></summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/payments-tab/image08.png)

</details>

se abrirá una ventana intermedia para configurar el importe del pago con un posible importe de descuento, con el correspondiente subcuenta<!-- sottoconto --> para el registro contable. 

:::note NOTA
En esta ventana relativa al comando *Pagos extendidos<!-- Pagamenti estesi -->* (solo aquí) es posible establecer el estado **Forzosamente cerrada<!-- Forzatamente chiusa -->** a una partida<!-- partita --> (mediante la casilla correspondiente): el uso de este estado no se recomienda ya que no se determina por la creación normal de un pago que cierra la partida<!-- partita --> sino que fuerza su estado, puede ser útil para realinear diferencias y errores que ya no pueden corregirse normalmente.  
Un resultado similar puede obtenerse creando manualmente un pago y forzando su importe.  
No está permitido forzar el pago con un importe superior al saldo pendiente de la partida<!-- partita -->.
:::

<details>

  <summary>Detalles adicionales Haga clic aquí<!-- Ulteriori dettagli Click Here --></summary>

En la lista de pagos<!-- pagamenti --> se pueden insertar notas de los mismos: estas notas pueden ser vinculadas automáticamente, en la causale<!-- causale -->, con la descripción genérica del asiento contable<!-- registrazione contabile --> (flag *descripción en diario y pagos<!-- descrizione in giornale e pagamenti -->*, no recomendado).

Si el pago<!-- pagamento --> será gestionado, según las **[configuraciones de la causale](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**, al cambio histórico de la partida, no se detectará ninguna diferencia de cambio automáticamente y deberá gestionarse manualmente en contabilidad: la opción además facilita, y esto es particularmente útil, la gestión de la igualdad entre partidas abiertas y saldo contable.

De lo contrario, si la opción no está activa, el contravalor en euros será calculado al tipo de cambio de la fecha de registro<!-- data registrazione --> (y en este caso, si está correctamente configurado **[en la causale](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** - ver tipo de importe Utilidad/Pérdida dif. de cambio - y **[en las divisas](/docs/configurations/tables/general-settings/currencies)**, el procedimiento valorizará automáticamente las subcuentas<!-- sottoconti --> de utilidad/pérdida por diferencia de cambio, divisa por divisa).

Mediante el botón **Expandir/reducir<!-- Espandi/riduci -->** se puede visualizar solo una de las dos cuadrículas (búsqueda de partidas o pagos<!-- pagamenti -->).

En la parte inferior se visualizarán campos de totalización de los importes seleccionados.

En base a los pagos<!-- pagamenti --> efectivamente ingresados y a las configuraciones de la causale<!-- causale -->, la aplicación actualizará la línea con el tipo de importe ‘Total Doc./registro' (por ejemplo, atribuido a la subcuenta<!-- sottoconto --> del banco de pago) con el total de los pagos<!-- pagamenti --> registrados, mientras que insertará una línea por cada pago<!-- pagamento --> o agrupará los pagos<!-- pagamenti --> deudores y acreedores, divisa por divisa, de cada subcuenta<!-- sottoconto --> de cliente/proveedor pagado/cobrado.

</details>

#### Botones específicos<!-- Pulsanti specifici -->  
> **Parámetros de inserción<!-- Parametri di inserimento -->**: llama a los parámetros de inserción de la primera nota.  
> **Búsqueda de partidas<!-- Ricerca partite -->**: permite buscar las partidas a pagar/cobrar.  
> **Eliminar pagos<!-- Cancella pagamenti -->**: permite eliminar los pagos<!-- pagamenti --> previamente seleccionados.  
> **Crear pagos<!-- Crea pagamenti -->**: permite crear el pago<!-- pagamento --> de la partida seleccionada.  
> **Compensación**: permite realizar la compensación de partidas si está previsto en la causale<!-- causale contabile -->.  
> **Crear pagos extendidos<!-- Crea pagamenti estesi -->**: permite gestionar el pago/cobro con eventuales importes de descuento y la correspondiente subcuenta<!-- sottoconto --> de registro contable.  
> **Expandir/reducir<!-- Espandi/riduci -->**: permite reducir la visualización solo a la parte de partidas o pagos<!-- pagamenti --> y viceversa, o expandirla a ambas.  

## **5. Analítica<!-- Analitica -->**

La pestaña está dedicada a la gestión de los **centros de coste/beneficio** (hoy centros empresariales), y está presente solo si la causale<!-- causale --> tiene al menos uno de los dos flags de gestión **Centros de coste** / Centros de beneficio.

:::danger ATENCIÓN<!-- ATTENZIONE -->
La gestión de los centros de coste / beneficio (hoy centros empresariales) será diferente según esté activado o no el **flag GESTIÓN CONTROLLING** dentro de la tabla [**Sociedad**](/docs/configurations/tables/general-settings/company).

 Con el flag ACTIVADO se habilitan las **funcionalidades completas para el control de gestión**, actualmente consideradas como la **opción estándar**, permitiendo una gestión más avanzada y flexible del controlling respecto al conjunto de funcionalidades anteriores (con flag desactivado), presentes por retrocompatibilidad.

En esta configuración **los centros de beneficio YA NO se utilizan**.

Se utilizan únicamente los centros de coste (que asumen la nueva definición de centros empresariales). Los centros empresariales pueden acoger tanto componentes positivos (de beneficio) como negativos (de coste) y pueden ser reasignados libremente unos a otros según las lógicas previstas en el módulo de Controlling de manera totalmente flexible.
<details>

  <summary>Detalles de la gestión antigua Haga clic aquí<!-- Dettagli vecchia gestione Click Here --></summary>

Dependiendo de las configuraciones de la causale<!-- causale --> estará presente una sección, la otra, o ambas (en este último caso con dos opciones: en caso de *gestión separada cdc/cdp* ambas deberán ser valorizadas simultáneamente, de lo contrario el procedimiento atribuirá el importe solo a una de las dos secciones, los costes irán a los centros de coste y los ingresos a los centros de beneficio).

</details>

:::

Si en la causale<!-- causale contabile --> también se ha activado la opción **Gestión de máquina**, estará disponible también una cuadrícula de valorización de costes/ingresos a los vehículos<!-- automezzi --> empresariales (debajo de la cuadrícula principal de los centros de coste)  
Llamando al vehículo<!-- automezzo --> a través del combo box correspondiente será posible también atribuir los datos de detalle del mismo.  
El combo box está vinculado a la tabla Gestión de vehículo<!-- Gestione automezzo --> (Logística > Vehículos > Actividad diaria > Gestión de vehículo<!-- Logistica > Automezzi >Attività giornaliera > Gestione Automezzo -->)

### CAMPOS PRESENTES EN LA CUADRÍCULA PRINCIPAL<!-- CAMPI PRESENTI NELLA GRIGLIA PRINCIPALE -->

Con las funcionalidades completas de controlling activas, está disponible una estructura tipo tabla dinámica<!-- pivot table --> que agrupa, subcuenta<!-- sottoconto --> por subcuenta<!-- sottoconto -->, las atribuciones de los movimientos contables<!-- movimenti contabili --> a los centros empresariales<!-- centri aziendali --> por [***dimensión***](/docs/configurations/tables/controlling/analytical-accounting/dimension) de análisis. <!-- struttura tipo pivot table che raggruppa, sottoconto per sottoconto, le attribuzioni dei movimenti contabili ai centri aziendali per dimensione di analisi -->

De hecho, los centros empresariales<!-- centri aziendali --> **deben** ser atribuidos a una dimensión de análisis, creando así subconjuntos funcionales para la gestión de la contabilidad analítica<!-- contabilità analitica --> que resulta estructurada sobre análisis multidimensionales.

La misma subcuenta<!-- sottoconto --> que recibe el movimiento de coste contable<!-- movimento di costo contabile -->, puede entonces ser imputada **simultáneamente** a varios centros, cada uno haciendo referencia a dimensiones (y por lo tanto "agrupaciones") diferentes.

Dentro de la misma dimensión, el movimiento podría luego ser repartido (por ejemplo al 50%) entre dos centros.

<details>

  <summary>Haga clic para ver la imagen<!-- Click per visualizzare l'immagine --></summary>

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/cost-profit-centers-tab/image07.png)

</details>

**Cuenta / Subcuenta / Descripción<!-- Conto / Sottoconto / Descrizione -->**: campos para la introducción de la subcuenta<!-- sottoconto --> contable que se atribuye al centro. Los datos serán reportados automáticamente si existe una asociación definida en el plan de cuentas<!-- piano dei conti --> o en la ficha maestra<!-- anagrafica --> (ver abajo).

**División / Descripción<!-- Divisione / Descrizione -->**: El movimiento puede asociarse también a una sola división empresarial para soportar análisis específicos referidos a la rama de la empresa.

**Proyecto**: Si en la causa contable<!-- causale contabile --> está habilitada la opción Proyectos (antes Proyectos de obra<!-- Commesse -->), este campo será visible y permite atribuir el movimiento a un proyecto. El widget hace referencia a la tabla Proyectos (Gestión de Proyectos > Proyectos > Proyectos)

:::danger ATENCIÓN:
si las funciones avanzadas de controlling están activas, se prevé que el proyecto solo pueda ser atribuido vinculándolo a un centro empresarial<!-- centro aziendale --> asociado a la dimensión de tipo Obra<!-- Commessa --> o a las dimensiones para las cuales se ha activado la opción **Habilitar obra<!-- Abilita commessa -->**.  

Dicha dimensión (que puede ser nombrada libremente, aunque se recomienda un nombre claro, por ejemplo "Obras<!-- Commesse -->" o "Proyectos") se vincula al tipo correcto mediante una opción presente en la tabla **Dimensiones<!-- Dimensioni -->** (Configuración > Tablas > Controlling > Contabilidad analítica<!-- Contabilità analitica --> > Dimensión) 
:::

**Centros de coste / Descripción de los centros de coste<!-- Centri di costo / Descrizione centri di Costo -->**: campos para la introducción (mediante combo box ubicada en el campo Centros de coste<!-- Centri di costo -->) del centro al que atribuir el coste (o beneficio). La combo box hace referencia a la tabla **[Centros Empresariales<!-- Centri Aziendali -->](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers)** (Configuración > Tablas > Controlling > Analítica > Centros Empresariales<!-- Centri Aziendali -->).  
**Divisa**: valor tomado de los datos del asiento contable<!-- registrazione contabile -->, especifica la divisa (que luego presenta el contravalor en euros) del movimiento que se atribuye.  
**Fecha de divisa<!-- Data Valuta -->**: Fecha de la tasa de cambio entre la divisa y el euro (tomada del movimiento contable<!-- movimento contabile -->).  
**Cambio directo<!-- Cambio Diretto -->**: Valor del tipo de cambio directo entre euro y divisa (tomado del movimiento contable<!-- movimento contabile -->).  
**Importe en divisa<!-- Importo Valuta -->**: Importe en divisa del movimiento (tomado del movimiento contable<!-- movimento contabile --> en caso de atribución total del movimiento a un solo centro o definido a través del porcentaje de atribución en el plan de cuentas<!-- piano dei conti --> o en la ficha maestra<!-- anagrafica -->); el valor puede ser modificado manualmente para definir la atribución a los centros deseados en caso de reparto del coste entre varios centros. El campo se presenta en una única sección y luego se inserta en la sección debe o haber del movimiento en euros siguiendo el esquema de la causa contable<!-- causale contabile --> o del asiento<!-- registrazione --> (Pestaña Asiento<!-- Tab Registrazione -->), pero puede ser forzado.

**Importe Debe / Importe Haber<!-- Importo Dare / Importo Avere -->**: Importe en euros del movimiento (tomado del movimiento contable<!-- movimento contabile --> en caso de atribución total del movimiento a un solo centro o definido a través del porcentaje de atribución en el plan de cuentas<!-- piano dei conti --> o en la ficha maestra<!-- anagrafica -->); el valor puede ser modificado manualmente para definir la atribución a los centros deseados en caso de reparto del coste entre varios centros.

**Desde Fecha de Competencia / Hasta Fecha de Competencia<!-- Da Data Competenza / A Data Competenza -->**: Tomados del movimiento contable<!-- movimento contabile --> (pueden ser forzados si es necesario). Permiten la rectificación por competencia económica (acumulaciones y diferimientos<!-- ratei e risconti -->) también de los movimientos de los centros.

**Descripción Detallada<!-- Descrizione di Dettaglio -->**: Tomada del campo homónimo en las líneas del movimiento contable<!-- movimento contabile -->. 

### La carga de datos en las secciones cdc/cdp puede automatizarse de dos maneras:<!-- Il caricamento dei dati nelle sezioni cdc/cdp può essere automatizzato in due modi: -->

- a través de la asignación de los centros en el plan de cuentas<!-- piano dei conti -->, a las subcuentas<!-- sottoconti --> de coste/ingreso, valorando el porcentaje de atribución del valor de cada cuenta a uno o más centros. Para más detalles ver **[Plan de cuentas<!-- Piano dei conti -->](/docs/erp-home/registers/accounting/analytic-chart-of-accounts)**. 

- en las fichas maestras<!-- anagrafiche --> de clientes/proveedores, (siempre en porcentaje) en cuyo caso todas las subcuentas<!-- sottoconti --> económicas introducidas en el asiento<!-- registrazione --> a nombre del sujeto serán valoradas de la misma manera y atribuidas al centro indicado en la ficha maestra<!-- anagrafica -->. 

La prioridad de valoración, entre la regla establecida en el plan de cuentas<!-- piano dei conti --> y la definida en la ficha maestra<!-- anagrafica -->, se configura dentro de los **[parámetros de contabilidad general<!-- parametri di contabilità generale -->](/docs/configurations/parameters/finance/accounting-parameters)**.

Se permiten modificaciones manuales a los importes calculados, así como la introducción manual directa de las líneas: en este segundo caso, el procedimiento propondrá automáticamente los importes para cubrir, subcuenta<!-- sottoconto --> por subcuenta<!-- sottoconto -->, el total movido en contabilidad, reportando el mismo rango de fechas de competencia. Es importante señalar, de hecho, que los procedimientos de rectificación e integración prevén también la rectificación de los movimientos asignados a centro de coste/beneficio<!-- centro di costo/profitto -->.

Al momento de guardar el asiento<!-- registrazione -->, la aplicación procederá a mostrar una ventana con los detalles de las diferencias de valoración, bloqueando eventualmente el guardado si así está configurado en la causa utilizada.

#### Botones específicos<!-- Pulsanti specifici -->  
> **Eliminar los centros de costo seleccionados**: permite eliminar los centros de costo seleccionados.<!-- Cancella i centri di costo selezionati: permette di cancellare i centri di costo selezionati. -->  
> **Eliminar los centros de beneficio seleccionados**: permite eliminar los centros de beneficio seleccionados.<!-- Cancella i centri di profitto selezionati: permette di cancellare i centri di profitto selezionati. -->  
> **Expandir/reducir**: permite reducir la visualización solo a la parte de los centros de costo o beneficio y viceversa, o expandirla a ambos.<!-- Espandi/riduci: permette di ridurre la visualizzazione alla sola parte dei centri di costo o profitto e viceversa o espanderla ad entrambe. -->  

## **6. Proyectos<!-- Progetti -->**

La pestaña<!-- tab --> **Proyectos<!-- Progetti -->** (antes *Órdenes de trabajo<!-- Commesse -->*) está presente solo si la causal<!-- causale --> tiene activada la marca *Proyectos<!-- Progetti -->*.

:::danger ATENCIÓN:
si las funciones avanzadas de controlling están activas (marca *Gestión de controlling<!-- Gestione controlling -->* en la tabla Sociedad<!-- Società -->), se prevé que el proyecto solo pueda ser atribuido vinculándolo a un centro empresarial que a su vez esté atribuido a una dimensión de tipo Orden de trabajo<!-- Commessa -->.

**Por lo tanto, si las funciones avanzadas para el controlling están activas, la pestaña en cuestión NO será visible**.

Sin embargo, sigue siendo visible el campo presente en el encabezado de la registración<!-- registrazione --> para la atribución del Proyecto (antes Orden de trabajo<!-- Commessa -->) a la registración<!-- registrazione --> en su conjunto en lugar de al detalle de los movimientos<!-- movimenti -->.
:::

En esta pestaña se asignarán a los distintos Proyectos (órdenes de venta<!-- commesse di vendita -->) los datos económicos detectados en la registración contable<!-- registrazione di contabilità -->: automáticamente se asignarán todos a la orden de trabajo<!-- commessa --> ingresada en el encabezado, pero el usuario podrá dividir los importes de manera diferente manualmente directamente en esta sección.

Al ingresar manualmente los importes, el software asignará automáticamente el valor residual para cuadrar el movimiento contable<!-- movimento contabile -->. Se prevén controles de balanceo de los importes con la contabilidad general<!-- contabilità generale --> y la posibilidad de bloquear el guardado de la registración<!-- registrazione --> en caso de diferencias (ver [**parámetros**<!-- parametri -->](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) de la causal<!-- causale -->).

## 7. Activos fijos<!-- Cespiti -->

La pestaña<!-- tab --> Activos fijos<!-- Cespiti -->, visible solo si la causal contable<!-- causale contabile --> que se está utilizando tiene activada la marca ***activos fijos<!-- cespiti -->***, está dedicada a la gestión de bienes de uso plurianual: se utiliza para registrar compras, incrementos, enajenaciones y destrucciones.

<details>

  <summary>Detalles adicionales (Click para expandir)<!-- Ulteriori dettagli (Click to expand) --></summary>
  
En la causal<!-- causale --> (pestaña **[Detalle de registración<!-- Dettaglio registrazione -->](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**), también es necesario haber configurado el **tipo de operación** a realizar, mediante la lista desplegable junto a la marca de activación de la pestaña de activos fijos<!-- tab cespiti --> (adquisición, baja, destrucción, etc...).

Por lo tanto, será conveniente crear diferentes causales<!-- causali --> dedicadas a los activos fijos<!-- cespiti --> y adecuadas para realizar las distintas operaciones posibles.

</details>

### Cuadrícula superior<!-- Griglia superiore -->

Está dedicada a la inserción de un nuevo activo fijo<!-- cespite --> adquirido o a la selección de un activo fijo<!-- cespite --> existente para registrar una nueva operación en él.

:::tip[Atención]
**Para insertar un nuevo activo fijo<!-- cespite -->** basta con completar una nueva fila,  
mientras que **para seleccionar un activo fijo<!-- cespite --> existente** es necesario utilizar el botón denominado **Seleccionar activo fijo existente<!-- Seleziona cespite esistente -->** presente en la barra de herramientas para llamar la ficha del activo fijo<!-- scheda cespite --> ya existente e integrarla.  
:::

#### PROCEDIMIENTO PARA LA INSERCIÓN<!-- PROCEDURA PER L'INSERIMENTO -->:

- seleccionar la **Categoría de activo fijo<!-- Categoria cespite -->** correspondiente mediante la lista desplegable (la cual está vinculada a la tabla '**[categoría de activo fijo<!-- categoria cespite -->](/docs/configurations/tables/finance/fixed-asset-category)**'),  
- seleccionar el **Tipo de propiedad<!-- Tipo di proprietà -->** (normalmente se propone 'activo fijo de propiedad<!-- cespite di proprietà -->' por defecto), (**Notas de propiedad<!-- Note proprietà -->**: campo para ingresar una anotación libre adicional)  
- asignar un eventual **Precódigo<!-- Precodice -->** (si se desea obtener una numeración dentro de este precódigo, de hecho no es posible tener dos fichas de activos fijos<!-- schede cespiti --> con el mismo número si no se utiliza un precódigo que permita atribuir una nueva numeración referida a él) la lista desplegable está vinculada a la tabla '**[Precódigo de activo fijo<!-- Precodice cespite -->](/docs/configurations/tables/finance/fixed-asset-precode)**'  
- confirmar la numeración progresiva asignada automáticamente a la ficha del activo fijo<!-- scheda cespite -->, o imponer el número deseado (también mediante la combinación con el precódigo)  
- ingresar la '**Descripción del activo fijo<!-- Descrizione cespite -->**' (que se reportará en la ficha del activo fijo<!-- scheda cespite --> y se utilizará en todos los informes del módulo como el libro de activos fijos<!-- libro cespiti --> y las impresiones de las fichas).

Todos estos campos se retomarán directamente del activo fijo<!-- cespite --> ya existente en caso de operación adicional.

- ingresar el **Importe** (valor patrimonial correspondiente al costo de la operación, es decir, al imponible más el eventual IVA no deducible en caso de compra o precio de venta en caso de enajenación total o parcial);

- ingresar la **tasa de IVA<!-- aliquota iva -->** mediante la lista desplegable correspondiente.

El campo **% ind**. que se refiere al porcentaje de no deducibilidad del IVA, normalmente se completa automáticamente y depende del código de IVA seleccionado mediante la configuración establecida en la tabla **[Tasas y modalidades de IVA<!-- Aliquote e modalità iva -->](/docs/configurations/tables/finance/vat-rates)**, se desaconseja su modificación manual.

**Estado**: campo configurado automáticamente; inicialmente, en el momento de la compra se establece en *no amortizado<!-- non ammortizzato -->*, posteriormente, según las amortizaciones acumuladas, el estado será *parcialmente amortizado<!-- parzialmente ammortizzato -->* o *totalmente amortizado<!-- totalmente ammortizzato -->*.<!-- Stato: campo impostato automaticamente, inizialmente, all'atto dell'acquisto si imposta su *non ammortizzato*, successivamente, a seconda degli ammortamenti accumulati lo stato sarà *parzialmente ammortizzato* o *totalmente ammortizzato*. -->

El valor puede ser forzado manualmente mediante la lista desplegable vinculada a una tabla fija.  
**Tipo de operación<!-- Tipo operazione -->**: se propone en base a la configuración de la causal contable<!-- causale contabile -->: típicamente, en caso de compra o incrementos, el tipo de operación es ‘costo original<!-- costo originario -->’, mientras que para las ventas será ‘Enajenación parcial<!-- Alienazione parziale -->’ o ‘Enajenación total<!-- Alienazione totale -->’;  
**Cuenta / Subcuenta / Descripción<!-- Conto / Sottoconto / Descrizione -->**: se toma de la categoría de activo fijo<!-- categoria cespite --> (si está ingresada en la tabla **[Categoría de Activo Fijo](/docs/configurations/tables/finance/fixed-asset-category)<!-- Categoria Cespite -->**);  
**Fecha de inicio de actividad<!-- Data di inizio attività -->**: se propone en base a la fecha de registro<!-- data registrazione -->: a partir de esta fecha se verificará el año desde el cual el activo fijo<!-- cespite --> puede ser amortizado;  
**Fecha de fin de actividad<!-- Data di fine attività -->**: no se ingresa (pero la visualización en el libro de activos fijos<!-- libro cespiti --> también depende de este campo);  
**Inicio / fin de garantía<!-- Inizio / fine garanzia -->**: campo informativo sobre la validez de la garantía.  
**Usado<!-- Usato -->**: identifica los activos fijos<!-- cespiti --> que han sido adquiridos usados (para estos activos fijos<!-- cespiti --> el porcentaje de aplicación de la amortización el primer año es del 100% y la amortización anticipada es aplicable solo por un año),  
**En uso<!-- In uso -->**: (propuesto por defecto al guardar) indica que el activo fijo<!-- cespite --> está efectivamente en uso (sin este indicador, el activo fijo<!-- cespite --> no puede ser amortizado),  
**En mantenimiento<!-- In manutenzione -->**: indica que el activo fijo<!-- cespite --> debe ser considerado para el cálculo de los mantenimientos. 

**Notas<!-- Note -->**: campo para anotaciones, no reportado en los informes estándar (puede ser añadido personalizándolos). 

**Estadísticas fiscales<!-- Statistiche fiscali -->**: Habilita la gestión de la pestaña inferior Datos objetivos del activo fijo<!-- Dati oggettivi cespite --> para utilizarlo en la amortización fiscal.

**Sociedad instrumental<!-- Società di comodo -->**: para identificar los activos fijos<!-- cespiti --> a considerar en los listados de activos fijos<!-- stampe cespiti --> que entran en estos casos fiscales, 

**Tipo de deducibilidad<!-- Tipo deducibilità -->**: permite configurar la deducibilidad fiscal de la amortización para el activo fijo<!-- cespite -->. La lista desplegable está vinculada a la tabla **[Tipos de deducibilidad](/docs/configurations/tables/finance/deductibility-types)<!-- Tipi deducibilità -->**.

**Unidad de Medida<!-- Unità di Misura -->**: lista desplegable que permite seleccionar la unidad de medida (código) para la cantidad (ej. Kg, Piezas...); la **Descripción<!-- Descrizione -->** de la unidad elegida se visualiza en el campo adyacente;

**Porcentaje<!-- Percentuale -->**: campo visible solo si dentro del formulario **[Parámetros de Activos Fijos](/docs/configurations/parameters/finance/fixed-assets-parameters)<!-- Parametri Cespiti -->** está activo el indicador *Porcentaje en activo fijo individual<!-- Percentuale su singolo Cespite -->*. Permite definir un porcentaje de amortización específico para el activo fijo<!-- cespite --> que se está ingresando, que prevalecerá sobre el definido dentro de la respectiva categoría de activo fijo<!-- categoria cespite -->. El campo se reporta dentro de la ficha del activo fijo<!-- scheda cespite -->.

**Tipos de amortización fiscal<!-- Tipi Ammortamento fiscale -->**: lista desplegable que permite seleccionar el tipo (código) de amortización fiscal, desvinculado de la contable, a aplicar; la **Descripción<!-- Descrizione -->** del código seleccionado se visualiza en el campo adyacente; la lista desplegable está vinculada a la tabla **[Tipos de Amortización Fiscal](/docs/configurations/tables/finance/objective-amortization-types)<!-- Tipi Ammortamenti fiscali -->** (Tipo de Amortización<!-- Tipo Ammortamento -->**).

**Al guardar la fila pueden aparecer, según los casos, diferentes mensajes**:

- "El activo fijo<!-- cespite --> tiene un valor inferior a ___. ¿Desea amortizarlo al 100%?": la categoría de activo fijo<!-- categoria cespite --> ha configurado un valor en el campo de *límite de amortización total<!-- limite ammortamento totale -->* y el valor ingresado para el nuevo activo fijo<!-- cespite --> es inferior (por ejemplo, bienes inferiores a 516 €) que la normativa fiscal permite llevar directamente a gasto (es decir, amortizar al 100%) directamente en el año de compra. Si elige Sí (Yes), se realizará la amortización al 100% el primer año, mediante la actualización del indicador en la cabecera de la ficha del activo fijo<!-- testata dell'anagrafica cespite --> para que sea gestionado de forma específica en el procedimiento automático de amortización;

- "¿Desea vincular la enajenación parcial a una operación patrimonial ya existente?": la causal es de venta parcial y la categoría de activo fijo<!-- categoria cespite --> no tiene activo el indicador *incremental*: en este caso el mensaje pregunta si se desea proceder a una asignación del importe de la enajenación a una operación patrimonial específica del activo fijo<!-- cespite -->. Ejemplo: para un activo fijo<!-- cespite --> no incremental (con componentes incrementales separados) cada línea de operación se gestiona a nivel de amortizaciones con una vida propia: la enajenación parcial (respecto a todo el activo fijo<!-- cespite -->) podría en realidad gestionarse como una venta total de la operación individual (por ejemplo: tengo un ordenador, lo incremento con un escáner, luego vendo solo el escáner).

**Si elige Sí (Yes)** se mostrará una ayuda (ventana emergente) para la búsqueda de qué **componente** que constituye el activo fijo<!-- cespite --> se desea enajenar, permitiendo seleccionarlo mediante los botones *Buscar<!-- Ricerca -->* y *Seleccionar<!-- Seleziona -->*  

En particular, nótese que los distintos componentes son fácilmente identificables también porque se refieren, dentro de la ayuda, al campo **Progresivo<!-- Progressivo -->** así como dentro de la ficha del activo fijo<!-- scheda cespite -->.

### Cuadrículas inferiores<!-- Griglie inferiori -->

El contenido se refiere a la fila superior seleccionada.

#### OPERACIONES PATRIMONIALES:<!-- OPERAZIONI PATRIMONIALI: -->

(se añade una nueva fila por cada operación cargada en la cuadrícula superior).

**Fecha de operación<!-- Data Operazione -->**: Fecha en la que se registra el movimiento<!-- movimento --> en el libro de activos fijos;

**Progresivo**: Progresivo de la fila de la operación;

**Costo original<!-- Costo Originario -->**: el campo se completa solo con las operaciones realizadas con Tipo de operación 'costo original' con el valor patrimonial de compra (correspondiente al imponible + posible IVA no deducible);

**Cantidad<!-- Quantità -->**: se refiere a la cantidad de bienes a cargar;

**Impuesto no deducible<!-- Imposta indetraibile -->**: recoge el valor del posible IVA no deducible que se sumará al costo para determinar el valor contable inicial (costo histórico). El valor se completa automáticamente a partir del valor ingresado en el campo 'Importe' de la cuadrícula superior en relación con el código de IVA seleccionado en el campo adyacente (si prevé no deducibilidad);

**Importe no amortizable<!-- Importo non ammortizzabile -->**: si en la categoría de activo fijo correspondiente está completado el campo 'Porc. amortizable<!-- Perc amm.(ortizzabile) -->', el campo se completará automáticamente; el importe se deduce del valor de cálculo de la amortización, ej. Porc. amortizable = 50% Costo histórico 30.000;

Amortización 30.000 - 15.000 = 15.000 x 3%; La amortización se calculará hasta que el fondo alcance 15.000;

**Remanente no amortizable<!-- Residuo non ammortizzabile -->**: gestionado solo manualmente, con referencia al ejemplo del campo anterior la amortización será igual a 30.000 *3% pero hasta que el fondo alcance 15.000;

**Ya amortizado<!-- Già ammortizzato -->**: el valor es visible solo si la amortización ha sido calculada pero aún no contabilizada (al contabilizar el valor se sumará en el 'Valor contable' y en el fondo);

**Fondo de amortización ordinario / anticipado / desacelerado<!-- F.do Amm. Ord. / Anticipato / Decelerato -->**: los campos recogen, según el tipo de amortización calculada (ordinaria, anticipada o desacelerada) el acumulado de las cuotas de amortización contabilizadas;

**Fondo de amortización fiscal<!-- Fondo Ammortamento Fiscale -->**: se completa si está activo el indicador 'Fiscal' presente en la categoría de activo fijo o activable a nivel de fila individual en la pestaña 'Amortización<!-- Ammortamento -->'

**Enajenación<!-- Alienazione -->**: recoge el valor de venta del bien y se completa automáticamente a través del campo 'Importe' de la cuadrícula superior si el Tipo de movimiento<!-- Tipo Movimento --> es 'Enajenación'. En base a este valor y al valor de la plusvalía o minusvalía se actualizará el valor histórico del bien a descargar del libro de activos fijos;

**Enajenación parcial<!-- Alienazione parziale -->**: recoge el valor de venta del bien y se completa automáticamente a través del campo 'Importe' de la cuadrícula superior si el Tipo de movimiento<!-- Tipo Movimento --> es 'Enajenación parcial'. En base a este valor y al valor de la plusvalía o minusvalía se actualizará el valor histórico del bien a descargar del libro de activos fijos;

**Plusvalía<!-- Plusvalenza -->**: recoge el valor de la plusvalía de venta del activo fijo y contribuye al cálculo del valor histórico cedido;

**Plusvalía reinvertida<!-- Plusvalenza reinvestita -->**: no activo;

**Revalorización<!-- Rivalutazione -->**: aumenta el costo histórico según la ley de revalorización;

**Minusvalía<!-- Minusvalenza -->**: recoge el valor de la minusvalía de venta del activo fijo y contribuye al cálculo del valor histórico cedido.

**Destrucción<!-- Distruzione -->**: normalmente se completa en cero (como alternativa a los campos 'Enajenación' o 'Enajenación parcial'), se puede atribuir un valor para casos particulares (por ejemplo, valor de realización del desecho);

**Costo original cedido<!-- Costo Originario ceduto -->**: valor histórico que se cede en el ámbito de una operación con Tipo de movimiento<!-- Tipo movimento --> 'Enajenación' o 'Enajenación parcial' calculado en base a los datos ingresados en los campos Enajenación, Enajenación parcial, (o Destrucción), Plusvalía y Minusvalía. El campo Valor contable será, paralelamente, rectificado en negativo por un importe determinado a partir del valor original cedido neto del fondo de amortización acumulado;

**IVA**: no activo en Italia;

**Ajuste<!-- Assestamento -->**: no activo en Italia;

**Valor en euros<!-- Valore Euro -->**: contravalor en euros si el valor está expresado en moneda extranjera o si la moneda de la empresa es diferente al euro;

**Subcuenta<!-- Sottoconto -->**: subcuenta del proveedor (compra) o Cliente (venta) a nivel de fila relativa al componente individual (podrían ser comprados o vendidos a sujetos diferentes);

**Fecha doc. / Nº doc. / Prot. IVA<!-- Data doc. / Nr. doc. / Prot. IVA -->**: referencias de la factura de compra o de venta correspondiente a la fila del movimiento<!-- movimento --> en cuestión;

**Notas<!-- Note -->**: notas libres de la fila;

**Progresivo de Venta<!-- Progressivo Vendita -->**: en caso de enajenación parcial, muestra el progresivo de la línea seleccionada para la venta del componente correspondiente;

**Impreso<!-- Stampato -->**: se activa si el libro de activos fijos<!-- libro cespiti --> ha sido impreso de forma definitiva en relación con la línea en cuestión.

#### OPERACIONES ECONÓMICAS<!-- OPERAZIONI ECONOMICHE -->:

*(normalmente no utilizada), sirve para vincular a la ficha del activo fijo<!-- scheda cespite --> un coste que no debe capitalizarse (porque no es plurianual).*

Los datos contenidos en esta pestaña se completan si en la cuadrícula superior se inserta una línea con Tipo de movimiento<!-- Tipo movimento --> *Operaciones económicas<!-- Operazioni economiche -->*

Los campos son similares a los presentes en la pestaña Operaciones patrimoniales<!-- Operazioni patrimoniali -->

#### AMORTIZACIONES<!-- AMMORTAMENTI -->:

**Normalmente no se utiliza dentro del asiento contable<!-- registrazione contabile -->**, ya que la amortización puede gestionarse más cómodamente mediante el procedimiento automático correspondiente en el ámbito de los asientos de ajuste<!-- scritture di assestamento -->, o bien, para cada activo fijo<!-- cespite -->, desde la propia ficha del activo fijo<!-- scheda cespite --> (en la cuadrícula específica que replica los campos presentes en la pestaña en cuestión).

En caso de que se desee, en el ámbito de un asiento de diario<!-- registrazione di prima nota -->, realizar la amortización (en lo que respecta a la ficha del activo fijo<!-- scheda cespite -->, la parte contable se gestionará en la pestaña Registro<!-- Registrazione -->), será necesario seleccionar el activo fijo<!-- cespite --> existente a amortizar mediante el botón **Seleccionar un activo fijo existente<!-- Seleziona un cespite esistente -->** que hará aparecer la línea correspondiente en la cuadrícula superior, asegurarse de que el Tipo de operación<!-- Tipo operazione --> sea *F.do Amortización Ordinaria<!-- F.do Ammortamento Ordinario -->*, si no está ya previsto en la configuración de la causal<!-- causale -->, ingresar en el campo **Importe<!-- Importo -->** el valor de la amortización anual a registrar, luego en la pestaña *Amortizaciones<!-- Ammortamenti -->* indicar el año de la amortización (campo **Año<!-- Anno -->**) y completar manualmente los campos obligatorios de la cuadrícula:

**Progresivo<!-- Progressivo -->**: permite seleccionar mediante combo box la línea de la ficha del activo fijo<!-- scheda cespite --> a amortizar (la única presente si no hay componentes adicionales o incrementos del activo fijo<!-- cespite -->);

**Año<!-- Anno -->**: Confirmar el año de la amortización;

**Tipo de Amortización<!-- Tipo di Ammortamento -->**: Ordinaria, anticipada o desacelerada;

**Cuenta / subcuenta / descripción cuota de amortización<!-- Conto / sottoconto / descrizione quota ammortamento -->**: normalmente se recupera automáticamente a través de la categoría del activo fijo<!-- categoria cespite --> de la línea cargada en la cuadrícula superior;

**Cuenta / subcuenta / descripción fondo de amortización<!-- Conto / sottoconto / descrizione fondo ammortamento -->**: normalmente se recupera automáticamente a través de la categoría del activo fijo<!-- categoria cespite --> de la línea cargada en la cuadrícula superior;

**Base imponible<!-- Imponibile -->**: valor del activo fijo<!-- cespite --> (histórico) sobre el cual se calcula la amortización aplicando el **Porcentaje<!-- Percentuale -->** (o tasa de amortización<!-- aliquota di ammortamento -->);

**Días de posesión<!-- Giorni di possesso -->**: sobre los que se calcula la amortización si en la configuración de la categoría del activo fijo<!-- categoria cespite --> correspondiente se ha elegido el cálculo por días (con el flag correspondiente);

**Costo<!-- Costo -->**: resultado del cálculo base imponible * Porcentaje * días de posesión / 365 (puede ser forzado manualmente).

**Contabilizado<!-- Contabilizzato -->**: flag contabilizado, atribuye al asiento la calificación de contabilizado impidiendo su sobrescritura, sin este flag no podrá procesarse una amortización posterior.

**Fiscal<!-- Fiscale -->**: flag que identifica la amortización a efectos fiscales y aumentará el fondo fiscal en el campo correspondiente, distinto del civil/contable.

**Amortización deducible<!-- Ammortamento deducibile -->** / **Amortización no deducible<!-- Ammortamento indeducibile -->**: campos completados automáticamente con las cuotas deducibles y no deducibles de la amortización, si en la **[categoría del activo fijo](/docs/configurations/tables/finance/fixed-asset-category)<!-- categoria cespite -->** correspondiente se ha completado el campo Tipo deduc., a su vez vinculado a la tabla **[Tipos de deducibilidad](/docs/configurations/tables/finance/deductibility-types)<!-- Tipi deducibilità -->** donde se define el porcentaje de deducibilidad. De lo contrario, pueden completarse manualmente.

En la pestaña Operaciones patrimoniales<!-- tab Operazioni patrimoniali -->, el tipo de operación F.do Amm. Ordinario ya habrá actualizado la línea del libro de activos fijos<!-- libro cespiti --> que incrementa el fondo de amortización y reduce en igual importe el valor neto contable del bien.

#### GESTIÓN DE DATOS OBJETIVOS<!-- GESTIONE DATI OGGETTIVI -->:

Esta pestaña permite gestionar los datos útiles para la amortización objetiva (técnica extracontable - o fiscal) que pueden ser procesados paralelamente a la amortización civil.

En primer lugar, dentro de la tabla de **[Categorías de activos fijos](/docs/configurations/tables/finance/fixed-asset-category)<!-- Categorie cespite -->** deberá activarse el flag correspondiente para recibir los datos dentro de la ficha del activo fijo<!-- scheda cespite -->.

Luego, al ingresar el asiento contable<!-- registrazione contabile --> correspondiente, por ejemplo, a la compra del activo fijo<!-- cespite -->, en esta pestaña se reportarán automáticamente los datos (que luego pueden modificarse independientemente de los patrimoniales oficiales) útiles para las amortizaciones objetivas.

Los campos de la pestaña de hecho replican los presentes en la pestaña 'Operaciones patrimoniales<!-- Operazioni patrimoniali -->'. La pestaña 'Amortizaciones<!-- Ammortamenti -->', en cambio, se utiliza exclusivamente para asientos de tipo contable / civil, por lo que la gestión de las amortizaciones técnicas (extracontables) solo podrá realizarse entrando en la ficha del activo fijo<!-- scheda cespite --> (Administración > Activos fijos<!-- Cespiti --> > Activos fijos<!-- Cespiti --> > doble clic para entrar).

#### CENTROS DE COSTO - PROYECTOS<!-- CENTRI DI COSTO - COMMESSE: -->

Esta pestaña (**visible solo cuando NO están activas las funciones avanzadas para el controlling**) gestionadas por el flag *Gestión de controlling<!-- Gestione controlling -->* en la tabla Sociedad<!-- Società --> está reservada para la imputación del centro de costo / beneficio (actualmente centro empresarial<!-- centro aziendale -->) y del proyecto<!-- commessa --> (actualmente Proyecto) que se vincularán a la ficha del activo fijo<!-- scheda cespite --> que se creará con el asiento contable<!-- registrazione contabile --> que se está ingresando.

En particular, el centro que se vinculará a la ficha del activo fijo<!-- scheda cespite --> con el asiento<!-- registrazione --> (y que también se puede ingresar manualmente directamente en la ficha, en la pestaña 'Detalle<!-- Dettaglio -->' de la misma) representa una excepción, válida para ese activo fijo<!-- cespite -->, respecto al dato ingresado en la categoría de activo fijo<!-- categoria cespite --> a la que la ficha insertada hace referencia, en la tabla Categorías de activos fijos<!-- Categorie cespite -->.

**El centro de costo ingresado se valorizará en el momento del cálculo (por parte del procedimiento automático) de la amortización.<!-- Il centro di costo inserito sarà valorizzato al momento del calcolo (da parte della procedura automatica) dell'ammortamento. -->**

:::tip NOTA:
En caso de que estén activas las funciones avanzadas para el controlling, la gestión del centro empresarial<!-- centro aziendale --> y del proyecto al que asociar las cuotas de amortización será definida en una pestaña específica **Amortización para controlling<!-- Ammortamento per controlling -->** dentro de la ficha del activo fijo<!-- scheda cespite -->.
:::

**Centro de costo<!-- Cdc -->**: cuadro combinado necesario para llamar al centro y vinculado con la tabla **[Centros empresariales<!-- Centri aziendali -->;](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers)**

**Descripción**: Descripción del centro llamado a través del campo anterior;

**Porcentaje**: porcentaje de atribución al centro ingresado en la fila en uso (por ejemplo, en caso de atribución total a ese centro indicar 100%; si el costo relativo a la cuota de amortización se repartirá entre dos centros, se ingresarán dos filas cada una con reparto al 50%).

**La cuadrícula reservada para la inserción del Proyecto<!-- Progetto -->** (Proyecto<!-- Commessa -->) no se actualiza ni interactúa con el campo 'Proyecto' en el encabezado del asiento<!-- testata registrazione --> y/o la pestaña 'Proyectos' (dedicados a la gestión de los costes ordinarios de ejercicio en lugar de los plurianuales); de hecho, dicha cuadrícula está dedicada, al igual que para los centros empresariales<!-- centri aziendali -->, a indicar el proyecto que deberá ser reportado en la ficha del activo fijo<!-- scheda cespite --> y sobre el cual se imputarán las cuotas de amortización calculadas.

**Proyectos**: widget para la inserción del proyecto (con doble clic se abre la ayuda de búsqueda, o bien comenzando a escribir en el campo se activa la búsqueda rápida); el campo está vinculado a la tabla Proyectos

**Porcentaje**: porcentaje de atribución al proyecto ingresado en la fila en uso (por ejemplo, en caso de atribución total a ese proyecto indicar 100%; si el costo relativo a la cuota de amortización se repartirá entre dos proyectos, se ingresarán dos filas cada una con reparto al 50%).

## PROCEDIMIENTO PARA LA VENTA DE ACTIVOS FIJOS<!-- PROCEDURA PER VENDITA CESPITE -->

- Ingresar una causa contable<!-- causale contabile --> adecuadamente configurada con la función Activos fijos<!-- Cespiti --> y el tipo de operación correcto, por ejemplo, enajenación total
- Completar el encabezado del asiento<!-- testata registrazione --> como de costumbre con el cliente y los datos de la factura, incluido el total
- En la pestaña Activos fijos<!-- Cespiti --> utilizar el comando **seleccionar activo fijo existente<!-- seleziona cespite esistente -->** para llamar la ficha del activo fijo<!-- scheda dl cespite --> vendido
- En la cuadrícula superior indicar en el campo **Importe<!-- Importo -->** el valor imponible de venta acordado con el cliente (indicar cero si el activo fijo<!-- cespite --> se dona o destruye)
- En la cuadrícula inferior, el valor del fondo de amortización acumulado se revierte automáticamente y, por diferencia, se completa automáticamente el campo de plusvalía o minusvalía
- Si la causa<!-- causale --> está correctamente configurada (se recomienda una causa estándar<!-- causale standard -->), la sección contable ya estará correctamente completa con los datos de IVA y contables, incluido el reverso del costo histórico, del fondo de amortización y el registro de la plusvalía/minusvalía.

## OTRO<!-- ALTRO -->

En caso de enajenación parcial (siempre para un activo fijo<!-- cespite --> ‘incremental’ o en caso de enajenación parcial no vinculada para uno no incremental), el usuario deberá completar la línea de la operación parcial con los importes de reversión de los fondos (por lo tanto, con signo negativo) y valorizar la minusvalía o plusvalía correspondiente: dichos importes deberán ser ingresados también dentro de la ficha ‘registro<!-- registrazione -->’ para la contabilidad general. En los demás casos, la aplicación habrá actualizado correctamente la ficha del activo fijo<!-- scheda cespite -->, habrá insertado el movimiento<!-- movimento --> también dentro de la sección IVA del registro<!-- registrazione --> y desde allí habrá actualizado el registro<!-- registrazione --> correspondiente. En el caso de enajenación, en particular, si se han codificado las subcuentas<!-- sottoconti --> de minusvalía y plusvalía tanto dentro de la causal<!-- causale --> como en los parámetros de contabilidad, también se habrán añadido las líneas relativas a la operación de venta (una línea de reversión del total patrimonial activo, una o más líneas de reversión de los fondos de amortización y, por diferencia, la minusvalía/plusvalía).

Otras operaciones disponibles en la ficha de activos fijos<!-- scheda cespiti -->: al momento de cargar un nuevo activo fijo<!-- cespite --> es posible proceder a dividirlo en N fichas diferentes. Es posible, de hecho, que la compra se refiera a un número de activos fijos<!-- cespiti --> idénticos, como por ejemplo 5 computadoras iguales: el usuario, en lugar de cargar 5 activos fijos<!-- cespiti --> manualmente, podría cargar uno por el total y luego dividirlo automáticamente en 5 partes iguales con el botón correspondiente (otra opción podría ser crear un solo activo fijo<!-- cespite --> que se compone de 5 activos fijos<!-- cespiti -->: esto, si bien simplifica la situación en el libro de activos fijos<!-- libro cespiti -->, por otro lado crea cierta dificultad luego para gestionar las enajenaciones de activos fijos<!-- alienazioni cespiti -->, ya que deberán gestionarse manualmente como enajenaciones parciales).

Es posible eliminar la línea de activo fijo<!-- riga cespite --> insertada en la cuadrícula superior: en este caso se ejecutará un mensaje de confirmación para la eliminación también de la ficha del activo fijo<!-- anagrafica cespite -->, cuyo valor predeterminado es ‘No’ (el mensaje también se ejecuta al cerrar el registro<!-- registrazione --> sin guardar). Se recomienda prestar especial atención al mensaje, para no dejar fichas de activos fijos<!-- schede cespiti --> ‘vacías’ dentro de la base de datos.

#### Botones específicos<!-- Pulsanti specifici -->
> **Seleccionar un activo fijo existente<!-- Seleziona un cespite esistente -->**: permite seleccionar un activo fijo<!-- cespite --> ya existente y registrar una nueva operación en su interior.  
> **Eliminar activo fijo<!-- Cancella cespite -->**: permite eliminar el activo fijo<!-- cespite --> seleccionado.  
> **Eliminar los datos seleccionados de la cuadrícula tipo amortización<!-- Cancella i dati selezionati dalla griglia tipo ammortamento -->**: permite eliminar la línea seleccionada dentro de la cuadrícula (inferior) contenida en la pestaña Amortizaciones<!-- Ammortamenti -->  

## **8. Parámetros<!-- Parametri -->**

La pestaña **Parámetros<!-- Parametri -->** está siempre presente en un registro contable<!-- registrazione contabile -->, contiene una serie de informaciones y parámetros útiles pero no estrictamente necesarios para el ingreso de un registro<!-- registrazione -->.

**Estado del registro<!-- Stato registrazione -->**: *definitivo* o *provisional* para el registro contable<!-- registrazione contabile --> en uso: el registro<!-- registrazione --> con estado ‘definitivo’ seguirá siendo modificable (en todo excepto en la causal<!-- causale --> y moneda de referencia) hasta que no se haya impreso de forma definitiva un libro fiscal obligatorio o bien el mismo no haya sido utilizado en un cierre automático de cuentas. El uso del estado ‘provisional’ del registro<!-- registrazione --> (que desactivará y deshabilitará el protocolo IVA y numerará negativamente desde -1000 el registro<!-- registrazione -->) puede utilizarse para registrar en contabilidad facturas a pagar por adelantado u otros tipos de operaciones periódicas de manifestación futura (como cánones postpagados). Ingresar nuevamente al registro<!-- registrazione --> para establecer el estado definitivo reasignará automáticamente el número del registro<!-- registrazione --> y el protocolo IVA válido para la fecha de registro<!-- data registrazione --> establecida (respetando la progresividad del mismo). Se recuerda que existe un procedimiento de gestión de registros provisionales<!-- registrazioni provvisorie --> que permite gestionar masivamente el paso a registro definitivo de un grupo de registros provisionales<!-- registrazioni provvisorie --> seleccionados.

Las siguientes banderas derivan de la causal contable<!-- causale contabile -->:

**Agrupar registro IVA<!-- Raggruppa registro IVA -->** (se recomienda dejarlo siempre activo) agrupa o no en el diario las líneas de IVA referidas a la misma subcuenta contable<!-- sottoconto contabile -->;

**Recalculo automático de centros de costo, de ingreso y proyectos<!-- Ricalcolo automatico centri di costo, di ricavo e progetti -->**: puede ser de interés para algunos tipos de registro manual<!-- registrazione manuale -->, para los cuales el usuario normalmente esté obligado a una gestión manual de las fichas cdc/cdp: dejando la bandera activada, la aplicación siempre restablecerá las fichas mencionadas en cada modificación del dato de origen del libro diario, lo que podría causar la pérdida de todas las inserciones manuales realizadas. Este automatismo, incluso con la bandera desactivada, está presente al momento de ingresar el registro<!-- registrazione -->: de hecho, se aplica al entrar en la modificación del mismo.

**En black list**: (OBSOLETO) permite gestionar el caso particular de compras extracomunitarias (con causal<!-- causale --> sin IVA) a resumir en la declaración de operaciones con países de fiscalidad privilegiada, vinculando el registro<!-- registrazione --> actual al movimiento IVA<!-- movimento iva --> del DDT aduanero del cual leer los valores a declarar.

**Fecha / Núm. de registro vinculado<!-- Data / Num. registrazione collegata -->**: campo obsoleto, se habilita cuando está activada la bandera ‘Black list’. Servía para las declaraciones black list, para vincular la factura del DDT aduanero (que proporcionaba los valores a comunicar) al registro<!-- registrazione --> del proveedor en black list.

**Fecha / Núm. reg. vinculado a nota de crédito<!-- Data / Num. reg. collegata a nota di accredito -->**: campo obsoleto; en el área de ventas, cuando se crea una nota de crédito, se puede indicar dentro del documento a qué factura hace referencia:

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/parameters-tab/image02.png)

En la imagen: campo para indicar la referencia de la factura dentro de la nota de crédito.

Cuando se contabiliza la nota de crédito, Fluentis intenta identificar el registro<!-- registrazione --> relativo a esa factura de origen para completar automáticamente este vínculo también a nivel de contabilidad (si estás en un registro manual<!-- registrazione manuale --> de una nota de crédito, entonces también puedes establecer estos campos manualmente). Utilizado para el spesometro (antes de 2017) cuando tenía el límite de 3000 euros, para revertir las notas de crédito de la factura y no comunicar la operación. Actualmente ya no se utiliza.

**AUDIT TRAIL**:

Sección referida al sistema de monitoreo de actividades de los usuarios y verificación de las modificaciones a los datos integrado en el sistema de gestión "Audit Trail".

**Fecha de creación / Nombre**: muestra la fecha y el nombre del usuario que ha creado el asiento contable<!-- registrazione contabile --> en uso;

**Fecha de última modificación / Nombre**: muestra la fecha de la última modificación y el nombre del usuario que ha modificado el asiento contable<!-- registrazione contabile --> en uso;

**Fecha de validación / Nombre**: Muestra la fecha y el nombre del usuario que ha validado el asiento contable<!-- registrazione contabile --> en uso. Sin embargo, el campo debe ser habilitado mediante un cambio de estado (a configurar cuando se requiera) que establezca el usuario y la fecha de validación. Con el campo completado por el cambio de estado, el asiento<!-- registrazione --> puede hacerse no modificable.

**Cuenta Partner<!-- Conto Partner -->**: (OBSOLETO) campo para ingresar (mediante el widget de búsqueda de cuentas) una subcuenta<!-- sottoconto --> ya codificada en el maestro de datos; útil para memorizar, por ejemplo, el nombre del proveedor extranjero en una DDT aduanera, la cual suele ser ingresada con referencia a un maestro de datos con información genérica respecto al sujeto "aduana" (esto con el fin de cumplir con las modificaciones normativas en el spesometro según las cuales desde 2018 ya no se permitía pasar los datos de la aduana, de la cual a menudo no se tienen referencias fiscales y se utilizaba en lugar del número de IVA el relleno XX-99999999, donde XX corresponde al código ISO internacional del país del sujeto).

**La cuadrícula inferior,** muestra el eventual asiento automático<!-- registrazione automatica --> vinculado al que está en uso: de hecho, con cada modificación del primero, el procedimiento continuará alineando el segundo según la lógica de las causales automáticas<!-- causali automatiche -->.

## 9. Agrupación de partidas<!-- Raggruppamento partite -->

**GESTIÓN PARTICULAR DE LAS PARTIDAS ABIERTAS, ALTERNATIVA RESPECTO A LA ESTÁNDAR DESCRITA ARRIBA.**

La gestión de Agrupaciones de partidas<!-- Raggruppamenti partite --> permite crear, en la fase de apertura de partidas<!-- partite --> o en un segundo momento, grupos de partidas<!-- partite --> (el grupo es una especie de contenedor que incluye, también visualmente, las partidas<!-- partite --> de detalle).

Estos grupos pueden ser luego manipulados agregando o desagregando las partidas<!-- partite -->. Así, en la fase de pago es posible asignar el pago de manera flexible respecto a los grupos y a las correspondientes partidas<!-- partite --> de detalle.

Este tipo de gestión, evidentemente particular, es adecuado para quienes operan en sectores como la gran distribución o el comercio minorista, o en general para quienes gestionan múltiples partidas<!-- partite --> / pagos de pequeño importe y alta cantidad, y donde la relación entre las facturas emitidas o recibidas y los respectivos pagos está sujeta a una elevada flexibilidad y un vínculo menos estricto respecto a la operativa ordinaria.

Esta funcionalidad, una vez activada, es una gestión incompatible con la gestión normal de partidas<!-- partite --> y pagos: la elección entre una gestión y otra, por tanto, debe realizarse inicialmente al configurar las causales<!-- causali --> de contabilidad general, teniendo muy claras las características de esta gestión.

**GESTIÓN DE LA CAUSAL CONTABLE Y RESULTADO EN EL ASIENTO<!-- REGISTRAZIONE -->:**

Causal de apertura de partidas<!-- partite --> (ejemplo para "Emisión de factura" o "Factura de proveedor"): activar los habituales flags para la apertura de partidas<!-- partite --> (y eventualmente el cierre y compensación), añadiendo el flag Crear Grupo.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image01.png)

En el asiento contable<!-- registrazione contabile --> de diario, con la causal<!-- causale --> así modificada, en la fase de inserción del asiento<!-- registrazione --> no se notarán diferencias y el grupo de partidas<!-- gruppo partite --> no será visible, pero se creará con las mismas referencias de la partida<!-- partita --> contenida en él:

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image02.png)

Para realizar modificaciones al grupo, agrupando otras partidas<!-- partite --> o desagrupando, se debe operar dentro de la pantalla **[Agrupaciones de partidas<!-- Raggruppamenti partite -->](/docs/finance-area/maturity-values/maturity-values/maturity-value-grouping)**.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image03.png)

Aquí el usuario podrá proceder a crear, para estas partidas<!-- partite -->, uno o más nuevos grupos de partidas<!-- gruppi partite --> (que tomarán el número y la fecha del número y la fecha del documento de la partida<!-- partita --> que los crea). La gestión de estas operaciones se realiza utilizando el menú contextual que aparece al hacer clic con el botón derecho del ratón partida<!-- partita --> por partida<!-- partita -->: 

mark: para seleccionar varias partidas<!-- partite -->/grupos<!-- gruppi --> 

crear nuevo grupo: para crear nuevos grupos<!-- gruppi -->; 

desagrupar: para desvincular una partida<!-- partita --> del grupo<!-- gruppo -->  

descuentos: para crear descuentos y para cerrar un grupo<!-- gruppo -->, 

detalles: para visualizar los detalles de la partida<!-- partita --> individual; 

dividir partida: para dividir la partida<!-- partita --> incluida en un grupo<!-- gruppo -->. 

La visualización de los grupos<!-- gruppi --> se realiza para el subcuenta<!-- sottoconto --> seleccionado en la cuadrícula superior.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image04.png)   ![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image05.png)

Con arrastrar y soltar (drag and drop) se pueden mover las partidas<!-- partite --> de un grupo<!-- gruppo --> a otro

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image06.png)

NOTA:

En el caso de contabilización automática de facturas desde el módulo de compras o ventas, en las tablas **Tipos de facturas<!-- Tipi fatture -->** (en **[compras](/docs/configurations/tables/purchase/purchase-invoices-type)** y **[ventas](/docs/configurations/tables/sales/invoices-type)**) hay una casilla similar para cuando se contabiliza la factura automáticamente (Agrup. partidas<!-- Ragg. partite -->)

Causal de cierre de partidas<!-- Causale di chiusura partite -->: (por ejemplo, la causal "Pago en efectivo") activar la casilla ‘Agrupamientos de partidas<!-- Raggruppamenti partite -->’ que hace visible la pestaña **Pagos de grupos<!-- Pagamenti gruppi -->.**

Es obligatorio indicar el tipo de pago correspondiente en el cuadro combinado adyacente. 

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image07.png)

En este punto, la operatividad del usuario en los registros de cobro/pago es completamente diferente a la de un cierre de partidas<!-- partite --> normal: en este caso, de hecho, el usuario comenzará el registro desde la pestaña **[Registro](/docs/finance-area/ledger-records/records/ledger-record)**, imputando directamente un valor al pago/cobro (mediante la cumplimentación de las secciones del asiento<!-- prima nota -->), sobre el cual la aplicación creará igualmente una partida<!-- partita --> deudora/acreedora que el usuario procederá luego a asignar manualmente (si lo desea) a un grupo<!-- gruppo --> desde la pestaña ‘Pagos de grupos<!-- Pagamenti gruppi -->’.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image08.png)

Operativamente, la aplicación creará, en cada una de estas partidas<!-- partite -->, los respectivos pagos recíprocos (y es por esto que la lectura de un calendario de vencimientos ‘estándar’ ya no será clara y se deberá utilizar solo los informes y las pantallas de visualización/gestión de los agrupamientos<!-- raggruppamenti --> para tener una visión clara de los auxiliares<!-- partitari -->). Cuando el saldo del grupo<!-- gruppo -->, como resultado de las distintas partidas<!-- partite --> asignadas, llegue a 0, entonces el grupo<!-- gruppo --> pasará automáticamente al estado ‘cerrado’.

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image09.png)

**NOTA: Para visualizar los agrupamientos<!-- raggruppamenti --> seleccione con el ratón la fila en la cuadrícula superior.**

![](/img/it-it/finance-area/ledger-records/records/create-ledger-record/mat-val-grouping-tab/image10.png)

Directamente en la pestaña **Pagos de grupos<!-- Pagamenti gruppi -->** es posible realizar modificaciones adicionales como desagrupamientos o nuevos agrupamientos.

### VIDEO TUTORIALES<!-- VIDEO TUTORIALS -->

:::important Véase también<!-- Vedi Anche -->
[**VIDEO TUTORIALES SOBRE LOS REGISTROS CONTABLES**](/docs/video/finance/intro)<!-- VIDEO TUTORIALS SULLE REGISTRAZIONI CONTABILI -->
:::