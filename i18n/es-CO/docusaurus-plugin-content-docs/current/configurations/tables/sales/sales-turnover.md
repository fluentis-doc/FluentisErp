---
title: Facturación de ventas
sidebar_position: 10
ai_generated: true
---

Permite ingresar nuevos registros<!-- record --> o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

El formulario se compone de un área de filtro y una de resultados. Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **Buscar<!-- Ricerca -->** para visualizar los resultados dentro de la cuadrícula de resultados.

Para poder ingresar registros<!-- record --> es necesario hacer clic en la primera fila vacía de la cuadrícula o presionar el botón **Nuevo<!-- Nuovo -->**.

#### Campos específicos

**Tipo**: código de identificación de la facturación de ventas<!-- fatturato vendite -->;

**Descripción**: descripción de la facturación de ventas<!-- fatturato vendite -->;

**Cuenta/Subcuenta/Descripción de subcuenta**: Cuenta<!-- Conto --> de costo utilizada en la contabilización de los documentos de venta<!-- vendita -->;

**Tipo de IVA**: utilizado en el registro<!-- registrazione --> de la contabilización del documento. Por lo general está configurado como genérico, para otros detalles verificar su uso en las causales contables<!-- causali contabili --> y en los registros contables<!-- registrazioni contabili --> en el área administrativa;

**Tipo de importe**: utilizado en el registro<!-- registrazione --> de la contabilización del documento. Para más detalles, consulte su [uso](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) contable en los registros contables<!-- registrazioni contabili --> en el área administrativa.

**Familia de productos/Descripción de familia de productos**: campo de asignación estadística de la venta<!-- vendita --> para el Sales Forecast del CRM.

**Detalle por países**: estos datos se utilizan solo para el intercambio de datos con programas externos. En el futuro se podrá definir cuentas de costo diferentes por país y tipo de contabilización de artículo, asociado al maestro de cliente<!-- anagrafica cliente -->.

:::note Notas<!-- Note -->
Si el *Tipo de facturación*<!-- Tipo fatturato --> se ingresa en el *Maestro de artículos*<!-- Anagrafica articoli --> este código se propone en las líneas de artículo del documento de compras y automatiza la contabilización de los documentos en una determinada cuenta de contrapartida.
:::

#### Ejemplo de una factura de venta:

Entonces, si el *Tipo de facturación*<!-- Tipo fatturato --> ya estuviera presente en el *Maestro de artículos*<!-- Anagrafica articolo -->, en los documentos de venta<!-- vendita --> lo encontraremos en la pestaña *Artículos*, en el campo *Facturación de ventas*<!-- Fatturato vendite -->; en caso de que no esté presente en el maestro de artículos, es posible seleccionarlo directamente dentro del documento de venta a través de la caja combinada disponible.

En el caso de que no se ingrese en el maestro de artículos y no se recuerde ingresarlo manualmente en el documento de venta, el sistema, para no bloquear la contabilización de los documentos, permite (si esta opción es conveniente) retomar la subcuenta<!-- sottoconto --> de contrapartida por defecto que se decidió configurar en el Maestro de contacto<!-- Anagrafica contatto --> > pestaña Datos contables > pestaña Administración en el campo **Costo/Ingreso de contrapartida predeterminado**.

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).