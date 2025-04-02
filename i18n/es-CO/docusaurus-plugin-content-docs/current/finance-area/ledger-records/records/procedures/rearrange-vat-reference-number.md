---
title: riordina protocolli iva
sidebar_position: 10
---

La funcionalidad gestionada a través de este formulario permite modificar masivamente los protocolos de IVA asignados a las registraciones contables (de tipo IVA, por ejemplo, para facturas recibidas o emitidas) con el fin de corregir posibles errores o por necesidades particulares.

En primera instancia, la búsqueda de datos posible con este formulario puede ser útil también como control, por ejemplo, de números de protocolo faltantes o de descoordinaciones (en lo que respecta, por ejemplo, a las facturas de venta) entre el número de protocolo y el número del documento que evidentemente representan irregularidades desde el punto de vista fiscal.

Al abrir el formulario, es necesario seleccionar el registro de IVA a controlar y/o modificar y el rango de fechas de interés (para un control general se recomienda empezar desde el comienzo del año). Esta selección se realiza en la parte más alta del formulario.

A este punto, es posible iniciar la búsqueda a través del comando **cerca** presente en la barra de herramientas.

Los datos son visualizados en la primera cuadrícula inmediatamente debajo del área de filtro.

![](/img/it-it/finance-area/ledger-records/records/rearrange-vat-reference-number/image02.png)

Dado que para realizar los controles podría ser interesante ordenar los datos no solo según el número de protocolo, sino, por ejemplo, según el número de documento, y siendo el número de documento una cadena alfanumérica, existe en la zona de filtro el indicador específico **considera numero documento come numero** que permite un criterio de ordenamiento correcto.

Ejemplo:

- Con el indicador desactivado, se tendrá (ordenando por número de documento) 1, 10, 100, 2, 20, 200 .....

- Con el indicador activo, se tendrá (ordenando por número de documento) 1, 2, 3, ... 10 ... 20 ... 100 ... 200

Al seleccionar una fila de la cuadrícula de resultados (Registraciones contables), se visualizarán los detalles relacionados con el registro de IVA y el libro diario en las dos **cuadrículas adicionales** (estos datos constituyen claramente los detalles de la registración contable ingresados por el usuario o por el procedimiento automático de contabilización de facturas).

**POSIBLES MODALIDADES DE RENUMERACIÓN / REORDENAMIENTO**:

- Parcial: como ejemplo, supongamos que se debe "desplazar" hacia adelante un número de protocolo todas las registraciones a partir del nr. 3 (de modo que se cree un "hueco" en la numeración para insertar quizás una escritura faltante).

  1. Seleccione las filas interesadas por la renumeración (por ejemplo, desde la registración con nr. de protocolo 3 en adelante), se puede utilizar la tecla Shift del teclado o hacer Click & drag con el mouse;
  2. Ingrese el número de protocolo de inicio en el campo **numero di partenza** situado en la parte baja del formulario (por ejemplo, 4);
  3. Presione el botón **numerazione automatica** situado en la barra de herramientas;
  4. Se propondrán los nuevos protocolos como se ve en la imagen;
  5. Presione **salva** (situado en la barra de herramientas) para confirmar la modificación.

![](/img/it-it/finance-area/ledger-records/records/rearrange-vat-reference-number/image03.png)  ![](/img/it-it/finance-area/ledger-records/records/rearrange-vat-reference-number/image04.png)

En alternativa (recomendable solo para modificaciones a filas individuales o pocas filas):

  1. Posicionarse, en correspondencia de la fila relativa a la registración con protocolo nr. 3, en el campo Nuevo prot. IVA y digitar el nuevo protocolo (ej. 4);
  2. Presione **salva** (situado en la barra de herramientas) para confirmar la modificación.

- Total: al necesitar renumerar todas las registraciones, por ejemplo, porque está descoordinada respecto al número de documento o por falta de coherencia entre el orden de protocolo y la fecha de registración (por ejemplo, porque no se activó el control de coherencia fecha-protocolo).

  1. Seleccione todas las filas del resultado obtenido gracias al filtro (por ejemplo, todas las registraciones desde el comienzo del año hasta hoy) a través del mouse o con la combinación Ctrl A;
  2. Ingrese el número de protocolo de inicio en el campo **numero di partenza** situado en la parte baja del formulario (en este caso 1);
  3. Presione el botón **numerazione automatica** situado en la barra de herramientas;
  4. Se propondrán los nuevos protocolos como se ve en la imagen;
  5. Presione **salva** (situado en la barra de herramientas) para confirmar la modificación.

Es posible variar el criterio de ordenamiento utilizado en la operación de renumeración seleccionando, en alternativa, entre los propuestos en la parte inferior del formulario.

![](/img/it-it/finance-area/ledger-records/records/rearrange-vat-reference-number/image05.png)

Fecha / Número de registración: se asignará el número de protocolo en relación con la progresión de la fecha de registración, y a igual fecha del número de registración.

Fecha / Número de documento: se asignará el número de protocolo en relación con la progresión de la fecha de registración, y a igual fecha del número de documento.

Tipo / Fecha / Número de documento: se asignará el número de protocolo en relación al tipo de documento (por ejemplo, facturas, luego notas de crédito), a igual tipo de documento, en base a la progresión de la fecha de registración, y a igual fecha del número de documento.

El indicador **riscrivi descrizioni**, si está activo, en el momento de la renumeración actualiza la descripción del movimiento en aquellos casos en que, según las configuraciones definidas en la **[causal contable](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**, prevé la lectura automática del protocolo de IVA.