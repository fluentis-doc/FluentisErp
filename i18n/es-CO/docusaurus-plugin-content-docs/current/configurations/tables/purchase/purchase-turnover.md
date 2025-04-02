---
title: fatturato acquisti
sidebar_position: 9
---

La tabla se abre a través de la ruta **Tablas > Compras > fatturato acquisti (Tabelle > Acquisti > Fatturato acquisti)** y contiene datos necesarios para la contabilización de los documentos.

*Campos específicos (Campi specifici)*:

**tipo**: código de identificación de la facturación;  

**descrizione**: descripción de la facturación;  

**Cuenta/Subcuenta/Descripción de la subcuenta (Conto/Sottoconto/Descrizione sottoconto)**: cuenta de costo utilizada en la contabilización de los documentos;  

**tipo iva**: utilizado en el registro de la contabilización del documento. Generalmente está configurado como genérico; para más detalles, verificar su uso en las causales contables y en los registros contables en el área administrativa;  

**Cuenta/Subcuenta analítica/Descripción (Conto/Sottoconto analitico/Descrizione)**: cuenta utilizada para contabilizar el documento en contabilidad analítica.  

**Tipo/Descripción (Tipo/Descrizione)**: utilizado en el registro de la contabilización del documento. Para más detalles, verificar su [uso](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) contable en los registros contables en el área administrativa.  

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).

:::note Nota
Si el *tipo fatturato* se inserta en el *anagrafica articoli*, este código se propone en las líneas del artículo del documento de compras y automatiza la contabilización de los documentos en una cuenta de contrapartida determinada.
:::

*Ejemplo de una factura de compras (Esempio di una fattura di acquisti)*:

Si, por lo tanto, el *tipo fatturato* ya estaba presente en el *anagrafica articolo*, en los documentos de compras lo encontraremos mencionado en la pestaña *articoli*, en el campo *fatturato acquisti*; en caso de que no esté presente en el registro del artículo, es posible seleccionarlo directamente dentro del documento de compras a través de la caja combinada correspondiente.

En caso de que no se inserte en el registro del artículo y no se recuerde añadirlo manualmente en el documento de compras, el sistema, para no bloquear la contabilización de los documentos, permite (si esta opción resulta oportuna) tomar la subcuenta de contrapartida predeterminada que se decidió establecer en el *Registro de contactos (Anagrafica contatto) > pestaña Datos Contables (tab Dati Contabili) > pestaña Administración (tab Amministrazione)* en el campo **Costo/Ingreso de contrapartida predeterminado (Costo/Ricavo di contropartita predefinito)**.