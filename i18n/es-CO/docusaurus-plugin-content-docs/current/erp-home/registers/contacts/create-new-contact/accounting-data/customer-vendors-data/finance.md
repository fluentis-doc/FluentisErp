---
title: amministrazione
sidebar_position: 1
---

En este formulario encontramos los siguientes campos:

**divisa**: el campo, obligatorio, se propone por defecto en función de la divisa de la empresa, pero puede ser modificado para tener esta propuesta en la creación de documentos y registros contables;  

**posizione iva**: es la tasa de IVA que se propondrá en el ciclo documental activo/pasivo y en los registros contables.

:::note Atención
La prioridad de valorización del campo [IVA](/docs/sales/sales-invoices/invoicing/sales-invoice) en los documentos prevé, en el siguiente orden:  
1. verificación de las [Declaraciones de intención (Dichiarazioni di intento)](/docs/finance-area/declarations/declarations/intent-declaration), si están presentes, y sustitución del código de IVA en ellas contenidas;  
2. registro del cliente/proveedor;  
3. registro del artículo.
:::

Es conveniente evaluar, en función de la lógica de prioridad de valorización, si se debe completar o no este campo en el registro del cliente/proveedor.

*Ejemplo*: si lleno el campo en el registro de un cliente intra-UE insertando una tasa de IVA no imponible, esta tasa prevalecerá en los documentos sobre cualquier tasa ordinaria insertada en el registro de los artículos que van en la factura. Esta prevalencia puede no ser adecuada en otras situaciones y debe tenerse en cuenta.

**tipo contab. iva**: el campo permite definir, en combinación con la configuración de las causas de contabilidad general, cuál es el subcuenta de IVA de compra/venta que se utilizará en los registros a nombre del sujeto en uso. Existe un tipo contab. IVA por defecto dentro de los parámetros de contabilidad; (utilizado principalmente para fiscalidad NO italianas).

**Tipo contab. artículo (Tipo contab. articolo)**: para la contabilización de facturas de **Fluentis**, permite definir la lógica de valorización del subcuenta de detalle del facturado de compras/ventas diferenciando la contrapartida (de costo/ingreso) respecto al cliente/proveedor titular de la factura de compra o venta.

*Ejemplo*:  

En el plan de cuentas tengo la cuenta 500 Ventas productos que tiene los siguientes subcuentas:

500-001 Ingresos productos terminados  

500-002 Ingresos intercompany productos terminados  

500-003 Ingresos exteriores productos terminados  

El artículo XYZ tiene el facturado de ventas 'A – Ingresos productos terminados' en el registro, que está conectado a la cuenta contable 500-001 Ingresos productos terminados.

Si mi cliente cod. 001 es italiano, la configuración es satisfactoria, línea de venta del artículo *XYZ* con facturado de ventas ‘A' por lo tanto registro del ingreso en la cuenta correcta.

Pero si la venta es a un cliente cod 002 intercompany, o a un cliente cod. 003 exterior, con el fin de evitar que el usuario deba recordar cada vez cambiar el facturado de ventas (en B o C) en todas las líneas del documento (factura) para contabilizar la línea del documento en la cuenta apropiada, es posible definir la correcta valorización para el registro en cuestión, prevaleciendo sobre la configuración general.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance/image03.png)

El llenado del campo se realiza a través de una combo-box conectada a la tabla [Tipo contab. artículo (Tipo contab. articolo)](/docs/configurations/tables/finance/articles-accounting-types) en esta tabla crearemos, por ejemplo, un tipo de Contabilización cod. 1 ‘Intercompany' y un tipo de contabilización cod. 2 ‘Exterior', y pondremos en ambos el indicador ‘Cliente’ de modo que estos dos registros sean visibles en los registros de clientes. Entonces en el registro de 002 configuraremos tipo de contabilización cod. 1 'Intercompany' y en 003 cod. 2 ‘Exterior'.

Luego será necesario ingresar en la tabla [Facturado ventas (Fatturato vendite)](/docs/configurations/tables/sales/sales-turnover) en correspondencia de la línea 'A - Ingresos productos terminados' (en la cuadrícula inferior):

- una línea tipo contabilización ‘intercompany' y cuenta 400-001 Ingresos intercompany productos terminados;  

- una línea tipo contabilización ‘exterior' y cuenta 400-002 Ingresos exteriores productos terminados.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance/image04.png)

De esta manera, el usuario solo deberá configurar el registro y las configuraciones harán que se valore el subcuenta apropiado; la contabilización verificará por cada facturado de ventas ingresado en la factura si existe un detalle con una cuenta particular para el tipo ingresado en el cliente.

Simétricamente, la configuración opera sobre la parte de proveedores, poniendo el indicador *Proveedores (Fornitori)* en la tabla [Tipo contab. artículo (Tipo contab. articolo)](/docs/configurations/tables/finance/articles-accounting-types) y actualizando la tabla **fatturato acquisti**.

**Subcuenta facturas por recibir / emitir (Sottoconto fatture da ricevere / emettere)**: indicar en este campo la subcuenta patrimonial (prioritaria respecto al valor por defecto insertado en los parámetros contables) a utilizar en el procedimiento del área de compras **Contabilización de facturas por recibir**, pero también en los procedimientos de cálculo de los ajustes contables o de las simulaciones de balance interanual en caso de que todo el costo deba ser incluido en el balance del periodo. Los campos son alternativos y visibles dependiendo de si el tipo de cuenta es *fornitore* (facturas por *recibir*) o *cliente* (facturas por *emitir*).

**Subcuenta de nota de crédito por recibir / emitir (Sottoconto della Nota d accredito da ricevere / emettere)**: indicar en este campo la subcuenta patrimonial (prioritaria respecto al valor por defecto insertado en los parámetros contables) a utilizar en el procedimiento del área de compras **Contabilización de facturas por recibir**, pero también en los procedimientos de cálculo de los ajustes contables o de las simulaciones de balance interanual en caso de que todo el costo deba ser incluido en el balance del periodo. Los campos son alternativos y visibles dependiendo de si el tipo de cuenta es *fornitore* (notas de crédito por *recibir*) o *cliente* (notas de crédito por *emitir*).

**sottoconto di fatturazione**: el campo, gestionado exclusivamente para los registros de clientes, permite definir para el subcuenta del registro en uso, cuál es el subcuenta en el que se debe emitir la factura durante la creación de las facturas a partir de DDT.

*Ejemplo*: supongamos la gran distribución.

Cliente X, tienda filial ubicada en Sacile, que tiene en su registro completado el subcuenta de facturación = cliente Y (la casa matriz) ubicada en Milán.

Nuestra empresa entrega con DDT a la tienda X de Sacile, luego, cuando emite la factura, esta debe ser emitida a la casa matriz cliente Y de Milán.

Un método alternativo (recomendado) consiste en gestionar siempre el registro del cliente Y casa matriz de Milán y en su registro codificar la **[destinación mercancía](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery)** = cliente X tienda de Sacile. De esta manera, el DDT y las facturas están emitidos al mismo sujeto con mayor claridad.

**sottoconto capogruppo**: en el análisis del riesgo del cliente, permite unir a clientes que pertenecen al mismo grupo empresarial;  

**Subcuenta de pago (Pag.Forn.)**: esta subcuenta se asocia a las partidas contables creadas, con el fin de poder verificar la canalización de los pagos/recibos en las impresiones de los vencimientos y en las simulaciones de flujo de caja;

**Costo/Ingreso de contrapartidas predeterminadas (Costo/Ricavo di contropartite predef.)**: es el subcuenta de contabilidad general que se propondrá por defecto en los registros contables de IVA; en caso de contabilización de documentos de compras/ventas, este subcuenta es el valor por defecto a utilizar en caso de que no se haya introducido un facturado de compras/ventas en las líneas de artículos;

*Prioridad de valorización* de los campos cuenta, subcuenta, descripción en la sección **Extremos de IVA (Estremi IVA)** del documento de la **registrazione contabile**:  
1. Valorización del [Facturado Ventas (Fatturato Vendite)](/docs/configurations/tables/sales/sales-turnover)/ **fatturato acquisti** presente en la factura que se contabiliza y el código de cuenta, subcuenta y descripción conectados a cada tipología en las tablas Facturado compras / Facturado ventas.  
2. Registro de Cliente/Proveedor

**Costo/Ingreso de contrapartida alternativa (Costo/Ricavo di contropartita alternativo)**: esta cuadrícula permite predefinir la lista de subcuentas y la respectiva tasa de IVA a proponer en los registros de IVA a nombre del sujeto; para utilizar la opción es necesario que se establezca una ‘Posición IVA‘ por defecto y que no se haya insertado ningún costo/ingreso de contrapartida predeterminada;

**conto anticipi**: es posible definir un subcuenta de anticipos asociado al mismo registro del cliente (por ejemplo, un subcuenta vinculada al tipo de cuenta específica '*CA*' para Anticipos Clientes con su respectivo libro mayor) y conectarlo a la cuenta principal del cliente (la clásica con tipo de cuenta '*CIT*' vinculada, por ejemplo, al libro mayor Clientes Italia) a través de este campo.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance/image05.png)

Este subcuenta será utilizado para valorar las líneas tipo 6 ‘factura de anticipo’ y 7 ‘anulación de anticipos’ presentes en las facturas de venta.

La factura de anticipo siempre estará a nombre del cliente real y tendrá la línea tipo 6 ‘Factura de anticipo’ y el facturado de ventas registrará la deuda genérica, por ejemplo, en la cuenta Clientes c/anticipos (como es habitual cuando no se utiliza el campo en cuestión).

El resultado en la contabilización de la factura de anticipo será el siguiente:

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance/image06.png)

Estará a nombre del cliente efectivo y tendrá una línea de anulación de su valor para reasignarlo a la cuenta de anticipos dedicada.

En la factura de venta final estará presente la línea de anulación de anticipos por el valor ya facturado como es habitual.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance/image07.png)

El resultado de la contabilización de la factura a saldo será el siguiente:

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance/image08.png)

Por lo tanto, habrá el cierre de la deuda genérica de la cuenta Clientes c/anticipos como es habitual, además de las dos líneas de anulación de la contabilización de la factura anterior. Desde el saldo (debe) de cada cuenta de anticipos de clientes, entonces, se podrá entender el monto de los anticipos abiertos para cada cliente.

ATENCIÓN: gestión de partidas abiertas: en ambas contabilizaciones hay desajustes entre movimientos contables y movimientos de los partidas, por lo que las causas **no** deben prever la obligación de cuadrar los partidas.

---

**no fatture accompagnatorie**: indicador para no permitir la creación de facturas de venta de tipo acompañatorio a nombre del sujeto en uso.

**No agrupar por destino (Non raggr.per destinazione)**: indica que para el sujeto en uso no se desea agrupar nunca los documentos por destino durante la creación de los documentos; este indicador se considera en los procedimientos presentes en la barra de herramientas de Búsqueda de Pedidos de Clientes, Búsqueda de Pedidos de Proveedores, Búsqueda de Pedidos de Trabajo.  

**Agrupar por comisiones de venta (Raggruppa per commesse di vendita)**: para el sujeto, los DDT de transporte se agruparán por comisión para crear las facturas de venta;

**crea fatture da ddt per oc**: para el sujeto, los DDT de transporte se agruparán por **ordine cliente** para crear las facturas de venta;

**gest. edi**: habilita la gestión de archivos EDI (funcionalidad actualmente deshabilitada);

**Intrastat/Cod. Serv (Intrastat/Cod. Serv)**: indicador que habilita la gestión de la declaración intrastat para los documentos/registros a nombre del sujeto en uso, si también el tipo de documento es de tipo intracomunitario; en caso de sujeto con indicador ‘Intrastat', es posible indicar el código de servicio por defecto para las secciones cuatro y cinco de la declaración intrastat;

**Perc. gastos Intra/Signo (Perc. spese Intra/Segno)**: indica el porcentaje medio de los gastos a añadir/quitar al valor de la mercancía para el cálculo del valor estadístico en la declaración intrastat; el signo que define si los gastos deben sumarse o restarse para obtener el valor estadístico de la mercancía en las declaraciones intrastat;

**categoria amministrativa**: dato estadístico de la categoría administrativa asociada al sujeto;

**categoria commerciale**: dato estadístico pero también de configuración de los descuentos según los criterios de asociación definidos en las listas del área de ventas;

**categoria fatturazione**: criterio de filtro para el procedimiento de creación de facturas de venta a partir de DDT;

**categoria provvigionale cliente**: dato que puede ser útil para la atribución de los porcentajes de comisión a los agentes vinculados a este cliente, según las prioridades definidas en su registro;

**responsabile**: para los análisis de riesgo del cliente, sujeto interno responsable comercial del sujeto.

**filiale aziendale di riferimento**: en este campo es posible asociar al cliente/proveedor a una filial y, a través de esta, a una *división* empresarial diferente. En la contabilización de las facturas de venta hay un parámetro con el que asignar la registro contable a esta división, manteniendo todos los documentos en la principal operativa.

*Botón específico*:  
> **calcolo sconti**: para asignar, al registro del cliente en uso, una configuración de descuentos (definida en el módulo de ventas > Listas de ventas). El botón está **activo** **solo** dentro de un registro de cliente.