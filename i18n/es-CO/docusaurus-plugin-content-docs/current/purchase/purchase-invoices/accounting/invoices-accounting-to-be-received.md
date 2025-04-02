---
title: contabilizzazione fatture da ricevere
sidebar_position: 2
---

El procedimiento se abre a través de la ruta **contabilizzazione fatture da ricevere**

Con este procedimiento es posible realizar la contabilización de las facturas a recibir, leyendo los documentos de entrada de mercancía.

### 1. Facturas a recibir de movimientos

La contabilización de facturas a recibir prevé, como orígenes de datos, uno de los tres elementos:

- **ddt di acquisto**  
- **ricevimento merci**  
- **Devolución de trabajo por encargo (Rientro di conto lavoro)**  

Dependiendo del documento elegido, los campos siguientes filtrarán los registros relacionados.

En esencia, **la registración de las facturas de fin de año a recibir se puede realizar sobre los documentos presentes en el sistema que ya no han sido facturados**. Por lo tanto, es un procedimiento que se debe ejecutar al inicio del año sobre los documentos abiertos, antes de proceder con el flujo documental para cerrarlos.

Cuando luego se vayan a crear las facturas de compra a partir de uno de estos documentos contabilizados, al momento de la contabilización de la factura, el sistema registrará la factura normalmente y luego agregará en cola un nuevo registro con signo opuesto al movimiento creado por el documento de entrada de mercancía.

En la parte inferior del formulario hay algunos parámetros de gestión de la contabilización:

- **data registrazione**: es la fecha de registro que se asignará a la propia registración, típicamente el 31/12 del año;  
- **data competenza**: es la fecha de competencia que se asignará a la registración, típicamente el 31/12 del año;  
- **causale**: es la causa contable a utilizar. Se trata de una causa genérica, no relacionada con el IVA.

#### Botón específico  
> **contabilizzazione**: permite ejecutar el registro contable de los documentos seleccionados.

### 2. Anteriores

El formulario presenta la lista de las operaciones de contabilización realizadas, con el fin de visualizarlas y eventualmente anularlas a través de los botones correspondientes. Con un doble clic en la cuadrícula de registros creados, es posible visualizar la registración contable.

**contabilizzazione fatture da ricevere**: cuadrícula con los detalles de las operaciones realizadas. Se poblará después del procedimiento de búsqueda y se pueden seleccionar las operaciones sobre las cuales aplicar las funciones de la cinta.

Los datos en las cuadrículas de abajo, **movimenti contabilizzati** y **registrazione contabile** corresponden a la operación seleccionada en la cuadrícula superior. Un doble clic en la sección de movimientos/de las registraciones permitirá visualizar el movimiento/la registración contable correspondiente.

#### Botones específicos  
> **rollback contabilizzazione**: para cancelar la contabilización seleccionada.  
> **ripristina fattura**: para cancelar toda la operación seleccionada en la primera cuadrícula, con todos sus detalles mostrados en las dos cuadrículas inferiores.