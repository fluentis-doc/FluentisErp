---
title: Creación automática de pagos a proveedores (Creazione automatica pagamento fornitori)
sidebar_position: 1
---

El formulario se encuentra en Tesorería > Pagos a proveedores > Procedimientos > Creación automática de pagos a proveedores (Creazione automatica pagamenti fornitori).

Este procedimiento es alternativo a la creación de una nueva [lista de pagos (distinta di pagamento)](/docs/treasury/vendors-payments/create-vendor-payments) y su posterior contabilización, permitiendo realizar estas operaciones de manera integrada directamente desde este formulario.

## Cómo crear automáticamente un pago a proveedores

1. Utiliza la primera pestaña *Filtro de partidas* para localizar las partidas a pagar. (Es posible filtrar también por códigos ABI/CAB de los apoyos bancarios relacionados con la partida contable, además de por código / descripción del banco de apoyo - expandiendo la sección *Banco*).  

   Al expandir la sección *Tipo de partidas*, se **excluyen** por defecto los **pagos de partidas percepcionistas**, para los cuales <u>**la operación debe realizarse desde el módulo de percepcionistas**</u> si se desea poder utilizar el procedimiento de [certificación de retenciones](/docs/finance-area/declarations/declarations/withholding-tax-certification).

   El filtro para *subcuenta* de banco de *pago* permite gestionar la creación de la lista en base a lo que se ha canalizado a través de los distintos bancos a través de las configuraciones de registro y del procedimiento de [Gestión de Apoyo a Pagos](/docs/treasury/vendors-payments/procedures/payments-support-management) del mismo módulo.

2. Revisa, en la parte inferior, los totales de las líneas seleccionadas.

3. Pasa a la segunda pestaña **Datos de pago del proveedor** y establece los diversos elementos de gestión del procedimiento: primero debes ingresar el **banco de pago**, que será el banco titular de la lista.  
   Este campo desbloquea el botón **Iniciar la creación del pago desde partidas**.

4. Gestiona los otros parámetros:

- El indicador **Usar el banco de pago de la partida del proveedor, en ausencia de la anagrafica** obligará al procedimiento a crear tantas listas como bancos de pago estén asignados a las distintas partidas seleccionadas en el procedimiento de gestión de apoyo a pagos, o insertados en la anagrafica del proveedor. En ausencia de ambas, el pago se insertará en la lista para el código de banco configurado en el campo inicial.

- El indicador **Usar el banco de apoyo presente en la anagrafica del proveedor** forzará la asignación de los códigos bancarios del beneficiario, leyendo desde la línea de banco por defecto incluida en la sección de bancos de apoyo de la pestaña de pagos del registro del proveedor. Este indicador puede predefinirse dentro de los parámetros del módulo.

- El **Tipo de pago** permite definir la tipología de pago a asignar a la lista: el campo se vuelve obligatorio solo cuando las partidas a pagar prevén tipologías de pago no uniforme.

- El año y la fecha de emisión se definen por defecto en base a la fecha del sistema.

- El indicador **Imponer fecha de valor del beneficiario** permite asignar, dentro del trazado telemático, una fecha valor para el beneficiario del pago, que si no se establece se asigna como fecha de hoy. Si el indicador no está activado, la fecha valor será igual a la fecha de vencimiento.

- El campo **Notas iniciales** es un campo libre de notas del pago, no utilizado en el estándar.

- El campo **Notas finales** se utiliza en la contabilización de pagos para detallar la descripción del movimiento contable de la subcuenta del banco.

5. Si deseas contabilizar inmediatamente los pagos, activa el indicador de **Contabilización de la partida** que permite registrar directamente el cierre de las partidas y los movimientos contables de los pagos en creación: si no se utiliza, será posible usar posteriormente el *procedimiento separado de contabilización*.

6. Completa la causa de contabilización a utilizar para el registro, las fechas de registro y competencia. Las subcuentas de registro de notas activas y pasivas se proponen en base a la subcuenta de *ingresos imprevistos* presente en los parámetros de contabilidad. La fecha y el número de documento a insertar como referencias del encabezado del registro son opcionales (podría ser el número/fecha de la lista).

A la derecha hay un indicador por defecto de **Cierre de las partidas** (propuesto por defecto, no eliminar) y el criterio de gestión del agrupamiento en contabilidad **Agrupar por Banco** que permite registrar una entrada por cada subcuenta de banco de salida.  

Alternativamente, está disponible un **Agrupar por subcuenta** del proveedor y una opción de registro detallado pago por pago (**Sin agrupamiento**).

Si la causa contable requiere gestionar la fecha valor del banco y dentro de la anagrafica de bancos se ha definido un número de días para su cálculo en relación con la causa contable utilizada, el campo se gestionará automáticamente en el registro resultante.

7. Presiona el botón **Iniciar la creación del pago desde partidas**.

**<a href="https://youtu.be/DkxoWgTkvUg&amp;t=2m25s" target="_blank" rel="noopener noreferrer">Se remite al Tutorial - Enlace de YouTube (Tutorial - Link YouTube)</a>**

### La pestaña de restauración 

permite visualizar el registro contable a través de un doble clic en la sección relativa a los registros, así como la anulación parcial/total de las operaciones de pago seleccionadas. La anulación solo será posible si el período aún es modificable (impresión del libro diario y cierre de cuentas no ejecutadas).

**Botones específicos**

**Buscar anteriores**: Busca la lista de creaciones realizadas.

**Eliminar creación**: Con este botón se eliminará toda la contabilización realizada, con todos los pagos asociados.

**Eliminar pagos**: El botón restaura el pago seleccionado.