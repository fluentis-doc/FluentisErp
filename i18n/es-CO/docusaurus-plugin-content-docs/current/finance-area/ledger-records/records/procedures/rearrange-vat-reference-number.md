---
title: Reordenar protocolos de IVA
sidebar_position: 10
ai_generated: true
---

La funcionalidad gestionada a través de este formulario permite modificar masivamente los protocolos de IVA<!-- protocolli iva --> asignados a los asientos contables<!-- registrazioni contabili --> (de tipo IVA, por ejemplo, para facturas recibidas o emitidas) con el fin de corregir posibles errores o por necesidades particulares.

En primera instancia, la búsqueda de datos posible con este formulario también puede ser útil como control, por ejemplo, de números de protocolo faltantes o de desajustes (en lo que respecta, por ejemplo, a las facturas de venta) entre el número de protocolo y el número del documento que representan irregularidades evidentes desde el punto de vista fiscal.

Al abrir el formulario es necesario seleccionar el registro de IVA<!-- registro IVA --> que desea controlar y/o modificar y el rango de fechas de interés (para un control general se recomienda partir desde el inicio del año). Dicha selección se realiza en la parte superior del formulario.

En este punto, es posible iniciar la búsqueda mediante el comando **Buscar<!-- Cerca -->** presente en la barra de acciones.

Los datos se visualizan en la primera cuadrícula situada inmediatamente debajo del área de filtro.

![](/img/it-it/finance-area/ledger-records/records/rearrange-vat-reference-number/image02.png)

Ya que, para poder realizar controles, podría ser interesante ordenar los datos no solo en base al número de protocolo, sino también en base al número de documento, y siendo el número de documento de por sí una cadena alfanumérica, está presente en la zona de filtro el indicador correspondiente **Considerar número de documento como número** que permite un criterio de ordenamiento correcto.

Ejemplo:

- con el indicador desactivado se tendrá (ordenando por número de documento) 1, 10, 100, 2, 20, 200 .....

- con el indicador activado se tendrá (ordenando por número de documento) 1, 2, 3, ... 10 ... 20 ... 100 ... 200

Seleccionando una fila de la cuadrícula de resultados (Asientos contables<!-- Registrazioni contabili -->) se visualizarán los detalles relativos al registro de IVA<!-- registro IVA --> y al libro diario<!-- libro giornale --> en las dos **cuadrículas adicionales ubicadas debajo** (estos datos constituyen claramente los detalles del asiento contable<!-- registrazione contabile --> ingresados por el usuario o por el procedimiento automático de contabilización de facturas).

**POSIBLES MODALIDADES DE RENUMERACIÓN / REORDENACIÓN<!-- MODALITA' DI RINUMERAZIONE / RIORDINO -->**:

- Parcial: por ejemplo, suponga que se debe "desplazar" hacia adelante por un número de protocolo todos los asientos<!-- registrazioni --> a partir del número 3 (de modo que se cree un "hueco" en la numeración para insertar quizá una anotación faltante).


 1. Seleccione las filas interesadas por la renumeración (por ejemplo, desde el asiento<!-- registrazione --> con número de protocolo 3 en adelante), puede utilizar la tecla Shift del teclado o hacer Click & drag con el ratón;
 2. Ingrese el número de protocolo de inicio en el campo correspondiente **Número de inicio<!-- Numero di partenza -->** situado en la parte inferior del formulario (por ejemplo, 4);
 3. Presione el botón **Numeración automática<!-- Numerazione automatica -->** situado en la barra de acciones;
 4. Se propondrán los nuevos protocolos como se ve en la imagen;
 5. Presione **Guardar<!-- Salva -->** (situado en la barra de acciones) para confirmar la modificación.

![](/img/it-it/finance-area/ledger-records/records/rearrange-vat-reference-number/image03.png)  ![](/img/it-it/finance-area/ledger-records/records/rearrange-vat-reference-number/image04.png)

Alternativamente (recomendable solo para modificaciones de una o pocas filas)


 1. Ubíquese, en la fila correspondiente al asiento<!-- registrazione --> con protocolo número 3, en el campo Nuevo prot. IVA y escriba el nuevo protocolo (ej. 4);
 2. Presione **Guardar<!-- Salva -->** (situado en la barra de acciones) para confirmar la modificación.

- Total: cuando se debe renumerar todos los asientos<!-- registrazioni -->, por ejemplo porque están desfasados respecto al número del documento o por falta de coherencia entre el orden de protocolo y la fecha del asiento<!-- data registrazione --> (por ejemplo, porque no se activó el control de coherencia fecha-protocolo).


 1. Seleccione todas las filas del resultado obtenido con el filtro (por ejemplo, todos los asientos<!-- registrazioni --> desde el inicio del año hasta hoy) mediante el ratón o con la combinación Ctrl+A;
 2. Ingrese el número de protocolo de inicio en el campo correspondiente **Número de inicio<!-- Numero di partenza -->** situado en la parte inferior del formulario (en este caso 1);
 3. Presione el botón **Numeración automática<!-- Numerazione automatica -->** situado en la barra de acciones;
 4. Se propondrán los nuevos protocolos como se observa en la imagen;
 5. Presione **Guardar<!-- Salva -->** (situado en la barra de acciones) para confirmar la modificación.

Es posible variar el criterio de orden utilizado en la operación de renumeración seleccionando, entre los propuestos, en la parte inferior del formulario.

![](/img/it-it/finance-area/ledger-records/records/rearrange-vat-reference-number/image05.png)

Fecha / Número de Asiento<!-- Data / Numero Registrazione -->: el número de protocolo se asignará de acuerdo con la progresión de la fecha del asiento<!-- data registrazione --> y, en caso de igualdad, del número de asiento<!-- numero di registrazione -->.

Fecha / Número de Documento<!-- Data / Numero Documento -->: el número de protocolo se asignará de acuerdo con la progresión de la fecha del asiento<!-- data registrazione --> y, en caso de igualdad, del número de documento<!-- numero di documento -->.

Tipo / Fecha / Número de Documento<!-- Tipo / Data / Numero Documento -->: el número de protocolo se asignará en función del tipo de documento (por ejemplo, facturas, luego notas de crédito); a igualdad de tipo de documento, según la progresión de la fecha del asiento<!-- data registrazione --> y, a igualdad de fecha, según el número de documento<!-- numero di documento -->.

El indicador **Reescribir descripciones<!-- Riscrivi descrizioni -->**, si está activo, en la fase de renumeración actualiza la descripción del movimiento<!-- movimento --> allí donde, según las configuraciones definidas en la **[causale contable](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**, se prevea la lectura automática del protocolo de IVA<!-- protocollo IVA -->.