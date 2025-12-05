---
title: Facturación de ventas
sidebar_position: 10
---

Permite ingresar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

El formulario se compone de un área de filtro y una de resultados. Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **Buscar** para visualizar los resultados dentro de la cuadrícula de resultados.

Para poder ingresar registros es necesario hacer clic en la primera fila vacía de la cuadrícula o presionar el botón **Nuevo**.

#### Campos específicos

**Tipo**: código de identificación de volumen de ventas;

**Descripción**: descripción de volumen de ventas;

**Cuenta/Cuenta detallada/Descripción de subcuenta**: Cuenta de costo utilizada en la contabilización de los documentos de venta;

**Tipo de IVA**: utilizado en el registro de la contabilización del documento. Por lo general está configurado como genérico, para otros detalles verificar su uso en las plantillas contables y en los Registros de Libro Mayor en el área administrativa;

**Tipo de importe**: utilizado en el registro de la contabilización del documento. Para más detalles, consulte su [uso](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) contable en los Registros de Libro Mayor en el área administrativa.

**Familia de productos/Descripción de familia de productos**: campo de asignación estadística de la venta para el Sales Forecast del CRM.

**Detalle por países**: estos datos se utilizan solo para el intercambio de datos con programas externos. En el futuro se podrá definir cuentas de costo diferentes por país y tipo de contabilización de artículo, asociado al contacto de cliente.

:::note Notas
Si el *Tipo de rotación se ingresa en el *Registro de artículos* este código se propone en las líneas de artículo del documento de compras y automatiza la contabilización de los documentos en una determinada cuenta de contrapartida.
:::

#### Ejemplo de una factura de venta:

Entonces, si el *Tipo de rotación ya estuviera presente en el *Registro de artículos*, en los documentos de venta lo encontraremos en la pestaña *Artículos*, en el campo *Volumen de ventas*; en caso de que no esté presente en el maestro de artículos, es posible seleccionarlo directamente dentro del documento de venta a través de la caja combinada disponible.

En el caso de que no se ingrese en el maestro de artículos y no se recuerde ingresarlo manualmente en el documento de venta, el sistema, para no bloquear la contabilización de los documentos, permite (si esta opción es conveniente) retomar la cuenta detallada de contrapartida por defecto que se decidió configurar en el Maestro de contacto > pestaña Datos contables > pestaña Administración en el campo **Costo/Ingreso de contrapartida predeterminado**. 

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).