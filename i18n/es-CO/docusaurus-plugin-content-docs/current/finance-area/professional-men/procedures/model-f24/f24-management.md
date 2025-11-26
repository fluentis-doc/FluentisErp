---
title: Gestión F24
sidebar_position: 2
ai_generated: true
---

## Compilación automática<!-- Compilazione automatica -->

La creación del modelo F24 prevé la carga de un nuevo modelo dentro del cual los datos de encabezado se completan en base a la información ingresada en la tabla [**Sociedad**<!-- Società -->](/docs/configurations/tables/general-settings/company).
 
El periodo de IVA<!-- periodo IVA --> y el periodo de retención<!-- periodo ritenuta --> (compuestos por los dos campos mes / año) se proponen como el mes actual: pueden ser modificados para seleccionar el mes de referencia (tanto para los datos del IVA por pagar<!-- dati dell'iva da versare --> como para las retenciones a cuenta<!-- ritenute d'acconto da versare --> por pagar).

En particular, en lo que respecta a las liquidaciones de IVA<!-- liquidazioni IVA -->, se buscará el periodo almacenado en la pantalla **[Pagos IVA<!-- Versamenti IVA -->](/docs/finance-area/declarations/declarations/vat-payment)** presente en contabilidad general<!-- contabilità generale --> (donde se almacenan automáticamente los valores de la liquidación al momento de su impresión definitiva: se permite una carga manual del valor).

Es posible elegir procesar solo los datos de IVA<!-- dati iva --> o solo los datos de las retenciones eliminando los datos de los campos (periodo y año de referencia) de la información que no interesa.

Una vez guardados los datos de encabezado se activará el botón **Proponer valores<!-- Proponi valori -->**, que completará las distintas filas de la primera **ficha erario<!-- scheda erario -->**.

Una vez completadas **manualmente** también todas **las demás secciones** de la declaración, según sea necesario, configurado el pagador/firmante y la ruta de creación del archivo, será posible ejecutar la creación del archivo con el botón correspondiente, que creará un archivo con el nombre estructurado como 'NIT sociedad<!-- Partita IVA società -->' + '_' + 'Número de declaración<!-- Numero dichiarazione -->' + '_' + 'Fecha de declaración<!-- Data dichiarazione -->' con extensión F24. En caso de faltar datos obligatorios se devolverá un mensaje de error explicativo y el archivo no será creado.

Es posible anular la creación del archivo con el botón específico de gestión.

Mediante el botón **Crear archivo telemático<!-- Crea File telematico -->** es posible crear el archivo que será enviado a la Agencia Tributaria<!-- Agenzia delle Entrate --> a través de los canales apropiados (por ejemplo, Entratel).
El archivo se archiva automáticamente en Documental<!-- Documentale --> y puede ser visualizado y descargado localmente mediante el botón y la lista desplegable **Documentos<!-- Documenti -->**, presente en la barra de menú.

:::note[Nota]
Para la creación del archivo se requiere la presencia (podría devolverse un mensaje de aviso) de dos conectores Bizlink denominados F24 (Gestionado por el servicio con autenticación) y F24Errors, de tipo Folder Output y con enlace al partner AgeEnt, Flujo AgeEnt, Operación de flujo y documento de flujo F24 (F24Errors para el segundo)
:::

## Contabilización<!-- Contabilizzazione -->

En el encabezado del modelo es posible completar los campos para los eventuales **Gastos bancarios<!-- Spese bancarie -->** y para la cuenta bancaria de **Banco de pago<!-- Banca di pagamento -->**.
En este punto es posible pulsar el botón **Contabilización<!-- Contabilizzazione -->** para generar automáticamente el asiento que refleja la salida bancaria y la reversión de las cuentas<!-- storno dei conti --> (alimentadas automáticamente), donde se ha registrado la deuda por las retenciones a cuenta<!-- debito per ritenute d'acconto da versare --> y por el IVA por pagar<!-- iva da versare --> (por ejemplo, cuentas comúnmente denominadas Erario c/retenciones a cuenta<!-- Erario c/ritenute d'acconto --> y Erario C/IVA<!-- Erario C/Iva -->).

:::tip[Nota]
Las cuentas<!-- conti --> utilizadas automáticamente para registrar la deuda de IVA y la deuda por las retenciones a cuenta<!-- ritenute d'acconto --> se configuran, respectivamente, en los [**parámetros de contabilidad**<!-- parametri di contabilità -->](/docs/configurations/parameters/finance/accounting-parameters) en lo que respecta al IVA, y en la tabla [**Tipos de retención**<!-- Tipi Ritenuta -->](/docs/configurations/tables/finance/withholding-tax-types) para las retenciones a cuenta, cuentas por defecto<!-- conto di default --> que pueden haber sido sobrescritas en la fase de [**contabilización del pago de honorarios**<!-- contabilizzazione pagamento compensi -->](/docs/finance-area/professional-men/accounting/payments-accounting/parameters)
:::

| Función | Significado |
| --- | --- |
| Guardar | Guarda el modelo en uso. |
| Proponer valores | Recupera los datos de los pagos de IVA<!-- versamenti iva --> y de las retenciones de los honorarios pagados. |
| Nuevo detalle | Sitúa el cursor en la cuadrícula de ingreso de detalles. |
| Eliminar detalle | Elimina la fila de detalle seleccionada. |