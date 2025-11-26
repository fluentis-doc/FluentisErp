---
title: Crear pagos a proveedor
sidebar_position: 2
ai_generated: true
---
El formulario se encuentra en **Tesorería > Pagos > Crear pagos a proveedor<!-- Crea pagamenti fornitore -->** y permite la creación de una nueva relación<!-- distinta --> de pago. La misma pantalla se utiliza también para abrir en modificación o visualización una relación<!-- distinta --> ya guardada.

Desde el formulario de búsqueda es posible crear un nuevo documento mediante el botón **> Nuevo pago<!-- Nuovo pagamento -->** o abrir uno existente para visualizarlo y/o modificarlo.

## Cómo crear una relación de pago<!-- Come creare una distinta di pagamento -->

Haz clic para los pasos fundamentales:

1. Selecciona el **Tipo de pago<!-- Tipo di pagamento -->** de la relación<!-- distinta --> desde el primer campo desplegable.
2. Los campos siguientes se completan automáticamente:
   - **Año<!-- Anno -->**: sugiere el año actual del sistema.
   - **Número de la relación<!-- Numero distinta -->**: numeración progresiva de la relación<!-- distinta -->.
   - **Fecha de emisión<!-- Data emissione -->**: propone la fecha actual.
3. Completa los campos obligatorios del encabezado:
   - **Banco**: inserta el código de subcuenta<!-- sottoconto --> del registro bancario<!-- anagrafica banca --> sobre el cual emitir la relación<!-- distinta -->.
   - **Cuenta corriente**: se completa automáticamente en base al registro bancario<!-- anagrafica banca --> relacionado al subcuenta<!-- sottoconto -->.
   - **Notas iniciales**: campo libre para eventuales anotaciones (no utilizado en el estándar).
   - **Notas finales**: se usa en la contabilización para asignar la descripción del movimiento contable del banco.
4. Configura las opciones adicionales si es necesario:
   - **Imponer esta fecha valor al beneficiario<!-- Imponi questa data valuta beneficiario -->**: define la fecha valor del beneficiario en el archivo digital.
5. Controla las banderas de estado de la relación<!-- distinta -->:
   - **Impreso<!-- Stampato -->**: no gestionado automáticamente por el programa.
   - **Archivo emitido<!-- File emesso -->**: se actualiza automáticamente después de la creación del archivo telemático.
6. Selecciona las partidas a pagar:
   - Pulsa el botón **> Crear un pago desde partidas<!-- Crea un pagamento dalle partite -->** para seleccionar las partidas contables a cerrar.
   - Atención al uso de la bandera *visualización de partidas de perceptores<!-- visualizzazione partite percipienti -->*: la gestión del pago debe hacerse desde el módulo de perceptores.
   - La bandera *Imponer banco de apoyo desde el registro del proveedor<!-- Imponi banca d'appoggio dall'anagrafica del fornitore -->* permite utilizar el banco predeterminado del proveedor.
7. Modifica, si es necesario, los valores de pago en la cuadrícula.
   - Es posible ingresar pagos parciales o añadir filas manualmente.
   - Atención: la adición manual puede causar discrepancias en el saldo contable si no se gestiona correctamente.
8. Revisa las **Notas** en la cuadrícula: se completan automáticamente con las referencias de las partidas pagadas y se trasladarán a la contabilidad general.

:::tip ATENCIÓN<!-- ATTENZIONE -->
En el encabezado de la relación<!-- distinta --> se encuentra una bandera **Autorizado** para permitir la creación del archivo XML y ejecutar el pago. La bandera almacena el usuario y la fecha de autorización. Puede activarse por defecto accediendo al formulario **Parámetros de pagos a proveedores<!-- Parametri pagamenti fornitori -->** y activando la bandera *Autorizado por defecto<!-- Autorizzato di default -->*.
:::

9. **Pulsa el botón Crear archivo SEPA** para generar automáticamente un archivo .xml de la lista de pagos y archivarlo automáticamente en el gestor documental. Puedes descargar el archivo desde el gestor documental para posteriormente configurarlo en los sistemas de banca corporativa, en vez de tener que ingresar los pagos manualmente.

10. Pulsa el botón **Documentos**, en el grupo Document manager para acceder al gestor documental con el archivo adjunto .xml. Desde dentro del formulario documental pulsa luego el botón **Guardar adjunto<!-- Salva allegato -->** para descargar la copia en el PC local.

#### Botones específicos<!-- Pulsanti specifici -->

> **Nuevo pago<!-- Nuovo pagamento -->**: Inserta manualmente una fila de pago a proveedor.

> **Guardar<!-- Salva -->**: Guarda el encabezado de la relación<!-- distinta --> tras ingresar el tipo de pago y el subcuenta<!-- sottoconto --> bancario.

> **Eliminar pagos seleccionados<!-- Cancella pagamenti selezionati -->**: Elimina los pagos a proveedores creados manualmente o por la creación de pagos desde partidas.

> **Crear un pago desde partidas<!-- Crea un pagamento dalle partite -->**: Activable después de guardar el encabezado, adquiere los datos desde el archivo de partidas.

> **Documentos**: Botón para el enlace al gestor documental.


---

### **VIDEO TUTORIALES**<!-- VIDEO TUTORIALS -->

<iframe width="560" height="315" src="https://www.youtube.com/embed/CDCVq0iC29s" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>