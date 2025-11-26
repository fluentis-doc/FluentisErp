La pantalla se encuentra en Tesorería > Pagos a proveedores > Procedimientos > Creación automática de pagos a proveedores<!-- Creazione automatica pagamenti fornitori -->.

Este procedimiento es alternativo a la creación de una nueva [lista de pagos<!-- distinta di pagamento -->](/docs/treasury/vendors-payments/create-vendor-payments) y a su posterior contabilización, permitiendo ejecutar estas operaciones de manera integrada directamente desde esta pantalla<!-- form -->.

## Cómo crear automáticamente un pago a proveedores<!-- pagamento fornitori -->


1. Utiliza la primera pestaña *Filtro partidas<!-- Filtro partite -->* para localizar las partidas<!-- partite --> a pagar. (Es posible filtrar también por códigos abi/cab de las referencias bancarias vinculadas a la partida contable<!-- partita contabile -->, además de por código/descripción del banco de referencia, expandiendo la sección *Banco*).

Al expandir la sección *Tipo de partidas<!-- Tipo partite -->* se **excluyen** por defecto los **pagos de partidas de perceptores<!-- pagamenti delle partite percipienti -->**, para los cuales <u>**la operación debe realizarse dentro del módulo de perceptores<!-- dall'interno del modulo percipienti -->**</u> si se desea poder utilizar el procedimiento de [certificación de retenciones<!-- certificazione ritenute -->](/docs/finance-area/declarations/declarations/withholding-tax-certification).

El filtro por *subcuenta<!-- sottoconto -->* bancaria de *pago<!-- pagamento -->* permite gestionar la creación de la lista<!-- distinta --> según lo canalizado en los distintos bancos a través de las configuraciones de la ficha maestra y del procedimiento de [Gestión de referencia de pagos<!-- Gestione Appoggio Pagamenti -->](/docs/treasury/vendors-payments/procedures/payments-support-management) del módulo.

2. Controla, en la parte inferior, los totales de las filas seleccionadas.


3. Pasa a la segunda pestaña **Datos de pago a proveedor<!-- Dati pagamento fornitore -->** e ingresa los diferentes elementos de gestión del procedimiento: primero debe ingresarse el **banco de pago<!-- banca di pagamento -->**, que será el titular de la lista<!-- distinta -->. 
Este campo habilita el botón **Iniciar la creación del pago desde partidas<!-- Inizia la creazione del pagamento da partite -->**.


4. Gestiona los demás parámetros:

- El indicador **Utilizar el banco de pago desde la partida del proveedor, en ausencia desde la ficha** hará que el procedimiento cree tantas listas<!-- distinte --> como bancos de pago se hayan asignado a las partidas<!-- partite --> seleccionadas en el procedimiento de gestión de referencia de pagos, o bien ingresadas en la ficha del proveedor<!-- anagrafica del fornitore -->. En ausencia de ambas, el pago será insertado en la lista<!-- distinta --> para el código de banco configurado en el campo inicial.

- El indicador **Utilizar el banco de referencia presente en la ficha del proveedor** fuerza la asignación de los códigos bancarios del beneficiario leyéndolos de la fila de banco por defecto introducida en la sección de bancos de referencia<!-- banche d'appoggio --> de la pestaña de pagos de la ficha maestra del proveedor<!-- anagrafica fornitore -->. Este indicador puede predefinirse dentro de los parámetros del módulo.

- El **Tipo de pago<!-- Tipo pagamento -->** permite definir la tipología de pago a asignar a la lista<!-- distinta -->: el campo se vuelve obligatorio solo cuando las partidas<!-- partite --> a pagar prevén tipologías de pago no uniforme.

- El año y la fecha de emisión se definen por defecto según la fecha del sistema.

- El indicador **Imponer fecha valor beneficiario<!-- Imponi data valuta beneficiario -->** permite asignar, dentro del archivo telemático, una fecha valor para el beneficiario del pago, que en caso de no indicarse será la fecha actual. Si el indicador no está activo, la fecha valor será igual a la fecha de vencimiento<!-- scadenza -->.

- El campo **Notas iniciales<!-- Note iniziali -->** es un campo libre de notas del pago, no utilizado por defecto.

- El campo **Notas finales<!-- Note finali -->** se utiliza en la contabilización de pagos<!-- contabilizzazione pagamenti --> para valorizar la descripción detallada del movimiento contable<!-- movimento contabile --> de la subcuenta<!-- sottoconto --> bancaria.

5. Si deseas contabilizar inmediatamente los pagos, activa el indicador de **Contabilización de la partida<!-- Contabilizzazione della partita -->**, que permite registrar directamente el cierre de las partidas<!-- partite --> y los movimientos de partida doble<!-- movimenti di partita doppia --> de los pagos en creación: si no se utiliza, será posible utilizar posteriormente el *procedimiento separado de contabilización*.

6. Completa la causa contable<!-- causale di contabilità --> a utilizar para el registro, las fechas de registro y de competencia<!-- registrazione e competenza -->. Las subcuentas<!-- sottoconti --> para la contabilización de descuentos activos y pasivos se proponen conforme a la subcuenta<!-- sottoconto --> *ingresos extraordinarios<!-- sopravvenienze attive -->* prevista en los parámetros de contabilidad<!-- parametri di contabilità -->. La fecha y número de documento a ingresar como referencia en el encabezado del registro son opcionales (podría ser el número/fecha de la lista<!-- distinta -->).

A la derecha está presente un indicador por defecto de **Cierre de la partida<!-- Chiusura della partite -->** (propuesto por defecto, no se debe quitar) y el criterio de gestión del agrupamiento en contabilidad **Agrupar por banco<!-- Raggruppa Banca -->** que permite registrar un asiento por cada subcuenta<!-- sottoconto --> bancaria de salida.

De manera alternativa está disponible un **Agrupar por subcuenta<!-- Raggruppa per sottoconto -->** de proveedor<!-- fornitore --> y una opción de registro detallado pago por pago (**Sin agrupamiento<!-- Nessun raggruppamento -->**).

Si la causa contable<!-- causale contabile --> prevé la gestión de la fecha valor bancaria y, dentro de la ficha de bancos<!-- anagrafica banche -->, se ha definido un número de días para su cálculo en relación con la causa contable utilizada, el campo será gestionado automáticamente en el registro resultante.

7. Pulsa el botón **Iniciar la creación del pago desde partidas<!-- Inizia la creazione del pagamento da partite -->**


**<a href="https://youtu.be/DkxoWgTkvUg&amp;t=2m25s" target="_blank" rel="noopener noreferrer">Consulte el Tutorial - Enlace a YouTube</a>**

### La pestaña de restauración<!-- scheda di ripristino -->

permite visualizar el asiento contable<!-- registrazione contabile --> mediante doble clic en la sección relativa a los registros, así como la anulación parcial/total de las operaciones de pago seleccionadas. La anulación solo será posible si el periodo todavía es modificable (impresión del libro diario<!-- stampa libro giornale --> y cierre de cuentas<!-- chiusura conti --> no realizados).


**Botones específicos**

**Buscar anteriores<!-- Ricerca precedenti -->**: Busca la lista de las creaciones realizadas.

**Borrar creación<!-- Cancella creazione -->**: Con este botón se eliminará toda la contabilización realizada, con todos los pagos asociados.

**Borrar pagos<!-- Cancella pagamenti -->**: El botón ejecuta la restauración del pago seleccionado.