---
title: Rotación de compras
sidebar_position: 9
---

La tabla se abre a través de la ruta **Tablas > Compras > Rotación de compras** y contiene datos necesarios para la contabilización de los documentos.

*Campos específicos*:

**Tipo**: código de identificación de la facturación;  

**Descripción**: descripción de la facturación;  

**Cuenta/Cuenta detallada/Descripción de la cuenta detallada**: cuenta de costo utilizada en la contabilización de los documentos;  

**Tipo de IVA**: utilizado en el registro de la contabilización del documento. Generalmente está configurado como genérico; para más detalles, verificar su uso en las causales contables y en los registros contables en el área administrativa;  

**Cuenta/Cuenta detallada analítica/Descripción**: cuenta utilizada para contabilizar el documento en contabilidad analítica.  

**Tipo/Descripción**: utilizado en el registro de la contabilización del documento. Para más detalles, verificar su [uso](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) contable en los registros contables en el área administrativa.  

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).

:::note Nota
Si el *Tipo de rotación* se inserta en el *Registro de artículos*, este código se propone en las líneas del artículo del documento de compras y automatiza la contabilización de los documentos en una cuenta de compensación determinada.
:::

*Ejemplo de una factura de compras*:

Si, por lo tanto, el *Tipo de rotación* ya estaba presente en el *Registro de artículos*, en los documentos de compras lo encontraremos mencionado en la pestaña *Artículos*, en el campo *Rotación de compras*; en caso de que no esté presente en el registro del artículo, es posible seleccionarlo directamente dentro del documento de compras a través de la caja combinada correspondiente.

En caso de que no se inserte en el registro del artículo y no se recuerde añadirlo manualmente en el documento de compras, el sistema, para no bloquear la contabilización de los documentos, permite (si esta opción resulta oportuna) tomar la cuenta detallada de compensación predeterminada que se decidió establecer en el *Registro de contactos > pestaña Datos Contables > pestaña Finanzas* en el campo **Costo/Ingreso de compensación predeterminado**.