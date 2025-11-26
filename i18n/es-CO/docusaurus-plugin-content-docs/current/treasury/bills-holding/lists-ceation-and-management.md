---
title:  Creación y Gestión de Lista de Presentación
sidebar_position: 6
ai_generated: true
---

El formulario se encuentra en la ruta **Tesorería > Efectos > Crear Lista<!-- Distinta -->** y permite la creación de una *nueva* lista<!-- distinta --> o la *modificación/visualización* de una lista<!-- distinta --> ya existente.

## Cómo crear una Lista de presentación<!-- Distinta di presentazione -->

<details>

  <summary>Haz clic para los pasos fundamentales<!-- Clicca per i passaggi fondamentali --></summary>
 
  1. Selecciona el **Tipo** (de lista<!-- distinta -->); si has asociado Subcuentas<!-- Sottoconti -->/Contrapartidas<!-- Contropartite --> estos campos se cargarán automáticamente, de lo contrario insértalos manualmente.  
  2. **Guarda** el encabezado recién creado.  
  3. Utiliza el botón **Adquisición de efectos<!-- Acquisizione effetti -->** (en la ribbon bar) para agregar a la lista<!-- distinta --> los efectos previamente creados.  
  4. Utiliza el botón **Creación de archivo Ri.Ba.** (en la ribbon bar) para crear el archivo telemático para enviar al banco.  
  5. Abre la lista con el botón **Documentos** (en la ribbon bar) para acceder al archivo telemático adjunto.  
  6. Después de abrir el archivo telemático, utiliza **Guardar adjunto** para descargar una copia en tu PC y enviarla al banco.  
  7. Imprime la lista<!-- distinta --> o activa la casilla **Impreso<!-- Stampato -->**.  
  8. Utiliza **Contabilizar y cerrar<!-- Contabilizza e chiudi -->** si deseas contabilizar la lista<!-- distinta -->.

</details>

1. *Ingreso de datos*:  

> 1.1. Ingresa el *Tipo de lista<!-- distinta -->* con la combo box **Tipo**: el programa crea automáticamente el número progresivo de la lista<!-- distinta --> según el **numerador<!-- numeratore -->** asociado al tipo para **el año** de referencia.  
>1.2. La **fecha de presentación<!-- data di presentazione -->** se propone como fecha de *hoy* y puede ser cambiada si es necesario.  
>1.3. La **divisa<!-- divisa -->** de la lista<!-- distinta --> se sugiere con base en la divisa de la compañía activa: si se asigna una divisa diferente al euro, se requiere que en la lista<!-- distinta --> sólo se ingresen efectos en esa misma divisa.  
1.4. La sección de **Subcuentas<!-- Sottoconti --> / Contrapartidas<!-- Contropartite -->** puede completarse automáticamente según la configuración del [**tipo de lista<!-- tipo distinta -->**](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-list-presentation-types) seleccionado. Si no se han predefinido las cuentas asociadas al tipo de lista<!-- distinta -->, insértalas manualmente en los dos campos (widget): 
>> - **Banco cuenta corriente<!-- Banca conto corrente -->** (se refiere a la subcuenta<!-- sottoconto --> vinculada al registro bancario<!-- anagrafica banca --> donde se acreditará finalmente la operación) y      
>> - **Contrapartida presentado a salvo buen fin / descuento / después de cobro<!-- Contropartita presentato al salvo buon fine / sconto / dopo incasso -->** (cuenta transitoria de presentación; en la fase de *contabilización de la lista<!-- contabilizzazione della distinta -->* se cancelará la *cuenta del portafolio activo<!-- conto del portafoglio attivo -->* y se acreditarán las sumas en esta cuenta, posteriormente, en la fase de contabilización del abono, desde esta cuenta las cantidades serán transferidas a la cuenta *Banco cuenta corriente<!-- Banca conto corrente -->*).  
> 1.5. Si has definido en el registro bancario<!-- anagrafica banca --> un valor límite para el castelletto<!-- castelletto -->, el importe concedido y el residuo utilizable se visualizarán en la sección *Situación del castelletto bancario<!-- Situazione castelletto bancario -->*.

Si has completado el valor del castelletto<!-- castelletto --> en la sección *Diferenciado* (en vez de *Global*), configura la tipología de lista<!-- distinta --> en creación con los radio buttons en la sección **Tipo de presentación<!-- Tipo presentazione -->** para gestionar específicamente los valores del castelletto<!-- castelletto --> *Concedido* y *Restante*.

2. **Guarda** el encabezado de la lista<!-- distinta --> que acabas de crear. Una vez guardada la lista<!-- distinta -->, de hecho, se activarán los diversos botones de gestión en la ribbon bar.

3. Utiliza el botón **Adquisición de efectos<!-- Acquisizione effetti -->** (en la ribbon bar) para agregar los efectos previamente creados en la lista<!-- distinta -->. En particular, este comando abre una pantalla de búsqueda de los efectos emitidos pero no presentados aún en lista<!-- distinta -->. ATENCIÓN: Desde esta máscara sólo será posible agregar a la lista<!-- distinta --> los efectos completos con las referencias ABI/CAB necesarias.

El ingreso de los efectos en la lista<!-- distinta --> actualiza el *Total lista<!-- Totale distinta -->* que se visualiza en la parte inferior del formulario: para eliminar un efecto de la lista<!-- distinta --> simplemente selecciónalo y presiona la tecla *Supr* de tu teclado, o bien el botón ***Eliminar Efectos<!-- Cancella Effetti -->*** de la ribbon bar.

4. Utiliza el botón **Generación de archivo Ri.Ba.** para crear el archivo telemático de la lista<!-- distinta --> para enviar al banco. Alternativamente, según el tipo de lista<!-- distinta --> creada, están disponibles las exportaciones para archivos SDD (ex RID ahora a nivel Sepa Europeo) y LCR (Francés).

5. Abre el módulo documental con el botón **Documentos** (en la ribbon bar) para descargar en tu PC el archivo para enviar al banco.

6. Después de abrir el documento en el documental, usa el botón **Guardar adjunto** para descargar una copia en tu PC para enviar al banco.

7. Una vez completada la lista<!-- distinta --> será posible proceder con la **impresión** directa de la misma (o activar la casilla *Impreso<!-- Stampato -->*).

:::tip[Info]
El **estado de lista impresa<!-- stato di distinta stampata --> es necesario para poder proceder a su contabilización**, lo cual puede hacerse directamente desde esta pantalla con el botón **Contabilizar y cerrar<!-- Contabilizza e chiudi -->**: será obligatorio haber predefinido la causale<!-- causale --> contable dentro de los parámetros del módulo.
:::

8. Utiliza el botón **Contabilizar y cerrar<!-- Contabilizza e chiudi -->** si necesitas contabilizar la lista<!-- distinta -->.

:::note[Nota]
La situación del castelletto bancario<!-- castelletto bancario --> muestra los datos del castelletto sbf guardado en el registro bancario<!-- anagrafica banca --> *Cuenta corriente<!-- Conto corrente -->* y el saldo disponible en base al importe de los efectos presentados pero aún no acreditados.

Una serie de flags almacena si la lista<!-- distinta --> ha sido: 
- Impresa (esta condición es obligatoria para poder proceder a su contabilización), 
- si se ha **creado** un **Archivo** telemático,
- si ha sido **Contabilizada**
- si se trata de una lista<!-- distinta --> **RID** referida a **servicios públicos<!-- utenze -->** o LCR.
:::

### La pestaña **Pagos<!-- Pagamenti -->**

- está activa **sólo en caso de** tipo de lista<!-- distinta --> con el flag ***Efectos a proveedor<!-- Effetti a fornitore -->***

- está dedicada a la identificación de los documentos de proveedor a cerrar mediante el movimiento de los efectos presentes en la lista<!-- distinta -->.

El total de la sección **Pagos<!-- Pagamenti -->** deberá ser igual al total de los efectos girados: para obtener esta igualdad se permite el ingreso de una línea manual de diferencia, la cual será gestionada como apertura de documento a nombre del proveedor si la causale<!-- causale --> contable utilizada prevé abrir documentos relacionados.

**Botones específicos**:

*Nuevo pago*: Activa el cursor en una nueva línea de pago.

*Eliminar pagos*: Elimina los pagos seleccionados en la cuadrícula.

*Pagos desde partidas*: Abre la pantalla de ayuda para partidas, desde donde se seleccionarán las partidas de proveedor a cerrar.

## Listas SDD Sepa Direct Debit

El Débito Directo Sepa<!-- Addebito Diretto Sepa -->, que sustituye al anterior RID nacional, es una herramienta de cobro preautorizado frente a un mandato de débito recibido del Deudor a favor de su Acreedor.

Está basado en un acuerdo previo (mandato) entre Deudor y Acreedor que permite a este último solicitar la activación de un procedimiento interbancario para debitar la cuenta del Deudor de forma automática.


:::tip[Cómo crear una lista SDD]
Después de completar los campos necesarios [**en el registro del cliente**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) titular del SDD y en la tabla con los datos de nuestra empresa, es necesario:

- Definir un tipo específico de Efecto "*SDD*" [**aquí**](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-types) y asociarlo al respectivo [**Tipo de pago**](/docs/configurations/tables/general-settings/payment-types)
- Definir un tipo específico de lista<!-- distinta --> en el portafolio de efectos, ver el campo Servicios públicos<!-- Utenze --> [**aquí**](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-list-presentation-types)
- Utilizar los procedimientos [**Creación de efectos a partir de partidas**](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values) o [**Creación de efectos a partir de vencimientos**](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values) para generar un efecto de tipo "*SDD*"
- Crear una [**nueva lista de presentación**](/docs/treasury/bills-holding/lists-ceation-and-management) de tipo "*SDD*" e ingresar el efecto "*SDD*" dentro de la misma 
- Utilizar el botón **Exportación SDD** en la ribbon bar (habilitado mediante el tipo específico de lista<!-- distinta --> configurado con el flag Servicios públicos<!-- Utenze -->) para generar el archivo bancario válido para SDD.
:::