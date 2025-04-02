---
title: dettaglio
sidebar_position: 2
---

El registro de tipo **Agente** es necesario para gestionar las diferentes configuraciones y **automatismos** relacionados con este tipo de sujetos y permitir el **cálculo de comisiones** además de la gestión de los **aspectos fiscales** como las contribuciones ENASARCO y la retención de impuestos.

Después de ingresar los datos generales del sujeto, se procederá a elegir el [tipo de cuenta](/docs/configurations/tables/finance/account-types) **Agentes** en la cuadrícula *Subcuentas asignadas* de la pestaña [*Datos contables*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro).

:::important[Importante]
Se aconseja completar de manera exhaustiva todos los campos necesarios para la gestión del agente, organizados en esta y en las siguientes pestañas.
:::

Esta ventana contiene elementos generales del agente mismo:

**utilizzo a partite aperte**: activa la gestión de cuentas abiertas para el registro en uso (se recomienda habilitarlo siempre para obtener en el calendario también las cuentas abiertas en relación con el agente, por ejemplo, para el pago de comisiones pendientes); 

**categoria agente**: es el elemento fundamental para el cálculo del **Enasarco** y del **FIRR**, tal como se define en la tabla [Categorías de Agentes](/docs/configurations/tables/sales/agent-category); la elección se realiza a través de la combobox vinculada a la tabla.

**caratteristica agente**: elemento estadístico libre útil, por ejemplo, para crear agrupamientos. La combobox está vinculada a la tabla [Características de Agentes](/docs/configurations/tables/sales/agent-characteristics).

**iva**: tasa de IVA por defecto a proponer en la creación de la compensación del agente, tanto manualmente como desde el procedimiento de cálculo de la liquidación de comisiones.

**divisa**: divisa en la que está denominado el cuenta contable y los documentos a nombre del agente.

**data inizio/fine rapporto**: con base en esta fecha comienza el cálculo de la indemnización supletiva de clientela (impresión disponible para el módulo Agentes/Beneficiarios);

**costo di/contropartita**: el subcuenta de contabilidad general que se propone al ingresar la compensación en el módulo Beneficiarios (o para utilizarse en su creación automática desde la liquidación de agentes) con el fin de registrar el costo de las comisiones;

**conto di contropartita costo fisso**: es posible valorar el fijo en una cuenta contable específica a través de este campo;

**conto di fatturazione**: este subcuenta se utiliza, en la creación automática de la compensación del beneficiario desde la liquidación de agentes, para asignar la compensación a un código contable diferente (de tipo proveedor, con el fin de unificar los datos contables para sujetos que son tanto agente como proveedor);

**annotazioni**: notas libres del registro del agente;

**operatore**: conexión al usuario de **Fluentis**, sirve para las restricciones de visibilidad de los datos cuando al agente se le ha habilitado un acceso a ***Fluentis***;

**visibilità del documento**: está vinculado al campo anterior, permite definir si el agente ve *Todos los documentos* o *Sus propios documentos*;

**enasarco**: número de inscripción en el ente;

**CCIAA**: número de inscripción en la cámara de comercio;

**capo area**: permite conectar el registro de un agente que es jefe de área respecto al que se está utilizando; no hay automatismos relacionados con el cálculo de comisiones.

**regime fiscale**: el régimen del sujeto;

**Intra y Cod.serv. (Intra e Cod.serv.)**: para agentes intracomunitarios a reportar en las secciones cuarta y quinta de la declaración intrastat;

**società di capitali**: obsoleto, presente para compatibilidad retroactiva.

**obbligo provvigioni su riga ordine**: con este indicador se obliga al usuario a establecer una comisión para el agente en el pedido del cliente.

Los campos relacionados con la facturación electrónica no están actualmente en uso.