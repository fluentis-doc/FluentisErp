---
title: Creación y Gestión de la Lista de Presentación (Creazione e Gestione Distinta di Presentazione)
sidebar_position: 6
---

El formulario se encuentra en la ruta **Tesorería > Efectos > Crear Lista** y permite la creación de una *nueva* lista o la *modificación/visualización* de una lista ya existente.

## Cómo crear una Lista de presentación

<details>

  <summary>Clica para los pasos fundamentales</summary>
 
  1. Llama el **Tipo** (de lista); si has asociado Subcuentas / Contrapartidas, estos campos se cargarán automáticamente; de lo contrario, ingrésalos manualmente;  
  2. **Guarda** el encabezado recién creado;  
  3. Usa el botón **Adquisición de efectos** (en la barra de ribbon) para insertar en la lista los efectos previamente creados;  
  4. Usa el botón **Generación de archivo Ri.Ba.** (en la barra de ribbon) para crear el archivo telemático que se enviará al banco;  
  5. Abre la lista con el botón **Documentos** (en la barra de ribbon) para acceder al archivo telemático adjunto;  
  6. Después de abrir el archivo telemático, usa **Guardar adjunto** para descargar una copia en tu PC para enviar al banco;  
  7. Imprime la lista o activa el indicador **Impreso**;  
  8. Usa **Contabilizar y cerrar** si quieres contabilizar la lista.

</details>

1. *Inserción de datos*:  

> 1.1. Ingresa el *Tipo de la lista* con el cuadro combinado **Tipo**: el programa crea automáticamente el número progresivo de la lista según el **numerador** asociado al tipo para el **año** de referencia.  
> 1.2. La **fecha de presentación** se propone como fecha *hoy* y puede cambiarse si es necesario.  
> 1.3. La **divisa** de la lista se propone en función de la divisa de la empresa activa: en caso de que se asigne una divisa diferente al euro, esto obliga a ingresar en la lista solo efectos con la misma divisa.  
> 1.4. La sección de **Subcuentas / Contrapartidas** se puede completar automáticamente en función de la configuración del [**tipo de lista**](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-list-presentation-types) seleccionado. Si no se han predefinido las cuentas asociadas al tipo de lista, ingrésalas manualmente en los dos campos (widget):  
>> - **Banco cuenta corriente** (se trata de la subcuenta relacionada con la base de datos del banco en la que se realizará el abono final al buen término de la operación) y  
>> - **Contrapartida presentada al cobro / descuento / después de cobro** (cuenta transitoria de presentación; en la fase de *contabilización de la lista*, se anulará la *cuenta del portafolio activo* y se abonarán las sumas a esta cuenta, posteriormente, en la fase de contabilización del abono, desde esta cuenta las sumas se transferirán a la cuenta *Banco cuenta corriente*).  
> 1.5. Si has definido en la base de datos del banco un valor límite para el cajón, el importe concedido y el residuo utilizable se visualizarán en la sección *Situación del cajón bancario*.  
> 
Si has completado el valor del cajón en la sección *Diferenciado* (en lugar de *Global*), establece la tipología de lista en creación con los botones de opción en la sección **Tipo de presentación** para gestionar específicamente los valores del cajón *Concedido* y *Residuo*.

2. **Guarda** el encabezado de la lista recién creada. Una vez guardada la lista, se activarán los diferentes botones de gestión en la barra de ribbon.

3. Usa el botón **Adquisición de efectos** (en la barra de ribbon) para insertar los efectos previamente creados en la lista. Este comando abre una máscara de búsqueda de efectos emitidos pero que aún no se han presentado en la lista. ATENCIÓN: Desde esta máscara, solo será posible insertar en la lista los efectos completos de los datos ABI/CAB necesarios.  

La inserción de efectos en la lista actualiza el *Total de la lista* visualizado en la parte inferior del formulario: para eliminar un efecto de la lista, basta con seleccionarlo y presionar el botón *Supr* del teclado, o el botón ***Eliminar Efectos*** en la barra de ribbon.

4. Usa el botón **Generación de archivo Ri.Ba.** para crear el archivo telemático de la lista que se enviará al banco. Alternativamente, dependiendo del tipo de lista creada, están disponibles las exportaciones para formatos SDD (ex RID ahora a nivel Sepa Europeo) y LCR (Francés).

5. Abre la documentación con el botón **Documentos** (en la barra de ribbon) para descargar en tu PC el archivo que se enviará al banco.  

6. Después de abrir el documento en la documentación, usa el botón **Guardar adjunto** para descargar una copia en tu PC para enviar al banco.

7. Una vez completada la lista, será posible proceder a la **impresión** directa de la misma (o activar el indicador *Impreso*).

:::tip[Info]
El **estado de lista impresa es necesario para poder proceder a su contabilización**, que se puede realizar directamente desde esta máscara con el botón **Contabilizar y cerrar**: será necesario haber predefinido el motivo contable dentro de los parámetros del módulo. 
:::

8. Usa el botón **Contabilizar y cerrar** si necesitas contabilizar la lista.

:::note[Nota]
La situación del cajón bancario propone los datos del cajón SBf almacenados en la base de datos del banco *Cuenta corriente* y el saldo disponible de acuerdo con el importe de los efectos presentados pero aún no acreditados.  

Una serie de indicadores almacena si la lista ha sido:  
- impresa (esta condición es obligatoria para poder proceder a su contabilización),  
- si se ha **creado** un **Archivo** telemático,  
- si ha sido **Contabilizada** y  
- si se trata de una lista **RID** relacionada con **servicios** o LCR.  
:::

### La pestaña **Pagos** 

- está activa **solo en el caso de** tipo de lista con indicador ***Efectos a proveedor***

- está dedicada a la identificación de las partidas de proveedores que se cerrarán con la transferencia de los efectos presentes en la lista misma.  

El total de la sección **Pagos** deberá ser igual al total de los efectos transferidos: para lograr esta igualdad se permite la inserción de una fila manual de diferencia, que se gestionará como apertura de partida a favor del proveedor si el motivo contable utilizado prevé la apertura de partidas misma.  

**Botones específicos**:  

*Nueva pago*: Activa el cursor en una nueva fila de pago.  

*Eliminar pagos*: Elimina los pagos seleccionados en la cuadrícula.  

*Pagos de partidas:* Abre la máscara de ayuda sobre partidas, desde la cual seleccionar las partidas de proveedor a cerrar.