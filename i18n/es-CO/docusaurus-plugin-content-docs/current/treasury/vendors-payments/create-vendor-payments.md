---
title: Crea pagos a proveedores (Crea pagamenti fornitore)
sidebar_position: 2
---
El formulario se encuentra en **Tesorería > Pagos > Crear pagos a proveedores** y permite la creación de un nuevo listado de pago. La misma máscara se utiliza también para abrir en modificación o visualización un listado ya guardado.

Desde el formulario de búsqueda es posible crear un nuevo documento mediante el botón **> Nuevo pago** o abrir uno existente para visualizarlo y/o modificarlo.

## Cómo crear un listado de pago

Haz clic para los pasos fundamentales:

1. Selecciona el **Tipo de pago** del listado en el primer campo desplegable.  
2. Los campos siguientes se completan automáticamente:  
   - **anno**: propone el año actual del sistema.  
   - **numero distinta**: numeración progresiva del listado.  
   - **data emissione**: propone la fecha de hoy.  
3. Completa los campos obligatorios del encabezado:  
   - **banca**: ingresar el código de subcuenta del registro del banco sobre el cual emitir el listado.  
   - **conto corrente**: se completa automáticamente en base al registro del banco vinculado a la subcuenta.  
   - **note iniziali**: campo libre para anotaciones (no utilizado en el estándar).  
   - **note finali**: utilizado en la contabilidad para valorar la descripción del movimiento contable del banco.  
4. Configura las opciones adicionales si es necesario:  
   - **imponi questa data valuta beneficiario**: define la fecha de valor del beneficiario en el archivo telemático.  
5. Revisa los indicadores de estado del listado:  
   - **stampato**: no gestionado automáticamente por el programa.  
   - **file emesso**: actualizado automáticamente después de crear el archivo telemático.  
6. Selecciona las partidas a pagar:  
   - Presiona el botón **> Crear un pago desde las partidas** para seleccionar las partidas contables a cerrar.  
   - Presta atención al uso del indicador *visualización de partidas a cobrar (visualizzazione partite percipienti)*: la gestión del pago debe realizarse desde el módulo de cobradores.  
   - El indicador *Imponer banco de apoyo del registro del proveedor (Imponi banca d'appoggio dall'anagrafica del fornitore)* permite utilizar el banco predeterminado en el proveedor.  
7. Modifica, si es necesario, los valores de pago en la cuadrícula.  
   - Es posible ingresar pagos parciales o añadir filas manualmente.  
   - Atención: la adición manual puede causar discrepancias en el saldo contable si no se gestiona correctamente.  
8. Revisa las **Notas** en la cuadrícula: se completan automáticamente con los referentes de las partidas pagadas y se reportarán en la contabilidad general.  

:::tip ATENCIÓN
En el encabezado del listado hay un indicador **autorizzato** para permitir la creación del archivo XML y ejecutar el pago. El indicador almacena el usuario y la fecha de autorización. Puede activarse por defecto accediendo al formulario **parametri pagamenti fornitori** y activando el indicador *autorizzato di default*.
:::

9. **Presiona el botón Crear archivo SEPA** para generar automáticamente un archivo .xml de la lista de pagos y archivarlo automáticamente en el sistema documental. Puedes descargar el archivo del sistema documental para la posterior configuración en los sistemas de banca corporativa, en lugar de tener que volver a ingresar los pagos manualmente.

10. Presiona el botón **Documentos**, en el grupo Document manager para acceder al sistema documental con el archivo adjunto .xml Desde dentro del formulario del sistema documental, presiona luego el botón **Guardar adjunto** para descargar la copia en el PC local.

#### Botones específicos

> **nuovo pagamento**: Inserta manualmente una línea de pago a proveedor.

> **salva**: Guarda el encabezado del listado después de ingresar el tipo de pago y la subcuenta del banco.

> **cancella pagamenti selezionati**: Elimina los pagos a proveedores creados manualmente o desde la creación de pagos desde partidas.

> **crea un pagamento dalle partite**: Activable después de guardar el encabezado, adquiere los datos del archivo de partidas.

> **documenti**: Botón para acceder a la gestión documental.

---

### **VIDEOS TUTORIALES** (VIDEO TUTORIALS)

<iframe width="560" height="315" src="https://www.youtube.com/embed/CDCVq0iC29s" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>