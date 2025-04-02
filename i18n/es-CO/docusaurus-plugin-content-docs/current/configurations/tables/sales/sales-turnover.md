---
title: fatturato vendite
sidebar_position: 10
---

Permite ingresar nuevos registros o buscar aquellos ya existentes para visualizarlos, modificarlos o eliminarlos.

El formulario consta de un área de filtrado y una de resultados. Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.

Para poder ingresar registros es necesario hacer clic en la primera fila vacía de la cuadrícula o presionar el botón **nuovo**.

#### Campos específicos

**tipo**: código de identificación de la facturación de ventas;  

**descrizione**: descripción de la facturación de ventas;  

**Cuenta/Subcuenta/Descripción de subcuenta (Conto/Sottoconto/Descrizione sottoconto)**: Cuenta de costo utilizada en la contabilización de documentos de venta;  

**tipo iva**: utilizado en el registro de la contabilización del documento. Generalmente está configurado como genérico; para más detalles, verificar su uso en las causas contables y en los registros contables en el área administrativa;  

**tipo importo**: utilizado en el registro de la contabilización del documento. Para más detalles, verificar su [uso](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) contable en los registros contables en el área administrativa.  

**Familia de productos/Descripción de familia de productos (Famiglia prodotti/Descrizione famiglia prodotti)**: campo de asignación estadística de la venta para la Predicción de Ventas del CRM.  

**Detalle por países (Dettaglio per nazioni)**: estos datos se utilizan solo para el intercambio de datos con programas externos. En el futuro, será posible definir diferentes cuentas de costo por país y tipo de contabilización de artículos, asociadas en el registro de clientes.  

:::note Nota
Si el *tipo fatturato* se ingresa en el *anagrafica articoli*, este código se propone en las líneas del artículo del documento de compras y automatiza la contabilización de los documentos en una cuenta de contrapartida determinada.
:::

#### Ejemplo de una factura de venta:

Si el *tipo fatturato* ya estuviera presente en el *anagrafica articolo*, en los documentos de venta lo encontraríamos reflejado en la pestaña *articoli*, en el campo *fatturato vendite*; en el caso de que no esté presente en el registro de artículos, es posible seleccionarlo directamente dentro del documento de venta a través de la caja combinada correspondiente.

En caso de que no se ingrese en el registro del artículo y no se recuerde hacerlo manualmente en el documento de venta, el sistema, para no bloquear la contabilización de los documentos, permite (si esta elección es oportuna) utilizar la subcuenta de contrapartida predeterminada que se decidió establecer en el *Registro de contacto (Anagrafica contatto)* > pestaña Datos Contables (Dati Contabili) > pestaña Administración (Amministrazione) en el campo **Costo/Ingreso de contrapartida predeterminado (Costo/Ricavo di contropartita predefinito)**.  

Para todo lo que no está detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).