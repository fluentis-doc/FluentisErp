---
title: contabilizzazione fatture di acquisto
sidebar_position: 1
---

El procedimiento se abre a través de la ruta **Compras > Facturas de compra > Procedimientos > contabilizzazione fatture di acquisto**.

### 1. Contabilización

La máscara presenta en la parte superior los filtros de búsqueda para localizar la lista de facturas por contabilizar presentes en el sistema.

En la parte inferior de la máscara hay algunos parámetros de gestión de la contabilización:

- **data registrazione**: es la fecha de registro que se asignará a la propia contabilización, si no se ha activado el indicador *Fecha de registro igual a la última fecha del registro IVA*;  
- **data competenza**: es la fecha de competencia que se asignará a la contabilización;  
- **data registrazione uguale ultima data registro iva**: con este indicador, el sistema determinará para cada factura cuál es la última fecha de registro utilizada para el registro IVA asociado al tipo de factura y utilizará esta fecha para registrar los documentos seleccionados. En ausencia del indicador, se activará el campo *Fecha de registro* para establecer la fecha de registro manualmente;  
- **data competenza uguale a data registrazione**: este indicador impone la contabilización con la fecha de competencia igual a la fecha del registro. Si el indicador se desactiva, se activa el campo de la fecha de competencia para establecer manualmente esta fecha;  
- **usa il cambio della tabella cambi**: con este indicador, se obliga al sistema a verificar la tabla de cambios para utilizar el que esté presente en la fecha de registro/factura (o el último ingresado anteriormente). Si el indicador no está activado, se utilizará en cambio el tipo de cambio ya presente en la cabecera de la factura;  
- **aggiorna cambio in documento**: el campo está activo solo si el indicador anterior está activado. Su significado es actualizar también el tipo de cambio presente en la cabecera de la factura, sobrescribiendo el anterior.

#### Botón específico

> **contabilizzazione fatture**: permite contabilizar las facturas seleccionadas en la cuadrícula, según los parámetros ingresados.

### 2. Obsequios (Omaggi)

El usuario tiene la posibilidad de decidir qué obsequios deben ser contabilizados. Para esto debe especificar la causa de la contabilización de obsequios y la cuenta para la anulación de IVA.

- **contabilizzazione omaggi**: con este indicador se activa la gestión de la contabilización de obsequios, activando los campos siguientes asociados.

Si la factura que se está contabilizando presenta un obsequio y:

1. **El parámetro de gestión no ha sido establecido (Il parametro di gestione non è stato impostato)**: el sistema pedirá confirmación al usuario con un aviso de la falta de configuración. En esta situación, la factura se registrará normalmente sin ninguna gestión de la línea de obsequio, que deberá ser gestionada manualmente en contabilidad.
   
2. **El parámetro de gestión de obsequios ha sido establecido (Il parametro di gestione omaggi è stato impostato)**:  
    - 2.1 Si no se ha ingresado ningún subcuenta en los campos siguientes, el sistema añadirá al final de los movimientos normales de contabilización las necesarias líneas de anulación de costos, utilizando la misma subcuenta establecida para el artículo.  
    - 2.2 Si se ha activado el indicador **sostituisci al conto dell'articolo**, se activará el campo donde se debe establecer la subcuenta de anulación de obsequios, que se utilizará en lugar de la subcuenta del artículo en estas líneas adicionales.

- **conto storno iva**: utilizada en caso de que el artículo obsequio en la factura no tenga el indicador **rivalsa iva**. Este importe será registrado y anulado solo en caso de que esté ingresada la *Cuenta de anulación de IVA*, sin la cual la operación deberá ser gestionada manualmente en contabilidad (también en este campo hay un mensaje de confirmación/aviso al usuario sobre la falta de configuración).

#### Botón específico

> **salva**: permite guardar los parámetros establecidos para la contabilización de obsequios.

Después de haber seleccionado las facturas (desde la pestaña *Contabilización*) y establecido los parámetros, las facturas pueden ser contabilizadas con la ayuda del botón *contabilizzazione fatture*.

### 3. Anteriores (Precedenti)

El formulario presenta la lista de las operaciones de contabilización realizadas, con el fin de visualizarlas y eventualmente anularlas a través de los botones correspondientes.

La anulación será posible solo si el período aún es modificable (impresión del libro diario, registro de IVA no impreso, liquidación periódica no impresa, cierre de cuentas no ejecutado, partidas contables cerradas en un ingreso o en un efecto).

- **contabilizzazione fatture**: cuadrícula con los detalles de las operaciones realizadas. Se poblada después del procedimiento de búsqueda y se pueden seleccionar las operaciones sobre las cuales aplicar las funciones del ribbon.
  
Los datos en las cuadrículas inferiores, **fatture di acquisto** y **registrazione contabile**, corresponden a la operación seleccionada en la cuadrícula superior. Un doble clic en la sección de facturas/registraciones permitirá visualizar la factura/la registración contable correspondiente.

#### Botones específicos

> **ricerca contabilizzazione**: busca la lista de contabilizaciones realizadas.  
> **anteprima contabilizzazione**: para visualizar la vista previa de impresión de la contabilización.  
> **ripristina contabilizzazione**: para eliminar la contabilización seleccionada.  
> **ripristina registrazione**: para eliminar toda la operación seleccionada, con todos sus detalles mostrados en las dos cuadrículas inferiores.

### 4. Mensajes de error (Messaggi di errore)

Consultar la página sobre [**contabilizzazione fattura di vendita**](/docs/sales/sales-invoices/accounting/sales-invoices-accounting).