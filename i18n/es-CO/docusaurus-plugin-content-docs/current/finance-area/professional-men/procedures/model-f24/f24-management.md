---
title: Gestión F24 (Gestione F24)
sidebar_position: 2
---

## Compilación automática (Compilazione automatica)

La creación del modelo F24 implica la carga de un nuevo modelo en el que los datos de cabecera se completan en función de los referencias ingresadas en la tabla [**società**](/docs/configurations/tables/general-settings/company).

El período de IVA y el período de retención (compuestos por los dos campos mes/año) se proponen como el mes actual: pueden ser modificados para hacer referencia al mes correspondiente (tanto para los datos de IVA a pagar como para las retenciones a cuenta a pagar).

En particular, en lo que respecta a las liquidaciones de IVA, se buscará el período almacenado en la máscara **[Pagos de IVA (Versamenti IVA)](/docs/finance-area/declarations/declarations/vat-payment)** presente en contabilidad general (donde se almacenan automáticamente los valores de la liquidación en el momento de su impresión definitiva: se permite una carga manual del valor).

Es posible optar por procesar solo los datos de IVA o solo los datos de las retenciones, eliminando los datos de los campos (período y año de referencia) del dato que no interesa.

Una vez almacenados los datos de cabecera, se activará el botón **proponi valori** que completará las diversas filas de la primera **pestaña de hacienda (scheda erario)**.

Una vez completadas **manualmente** también todas **las otras secciones** de la declaración, según las necesidades, establecido el firmante y la ruta de creación del archivo, será posible ejecutar la creación del archivo con el botón correspondiente que generará un archivo con el nombre estructurado como 'Número de IVA de la empresa (Partita IVA società)' + '_' + 'Número de declaración (Numero dichiarazione)' + '_' + 'Fecha de declaración (Data dichiarazione)' con extensión F24. En caso de datos obligatorios faltantes, se devolverá un mensaje de error explicativo y el archivo no se creará.

Es posible cancelar la creación del archivo con el botón de gestión correspondiente.

A través del botón **crea file telematico**, es posible crear el archivo que será enviado a la Agencia de Impuestos a través de los canales correspondientes (p. ej., Entratel).  
El archivo se archiva automáticamente en el Documental y se puede visualizar y descargar localmente a través del botón y la lista desplegable **Documentos**, presente en la barra de ribbon.

:::note[Nota]
Para la creación del archivo se requiere la presencia (se podría devolver un mensaje de aviso) de dos conectores Bizlink denominados F24 (Gestionado por el servicio con autenticación) y F24Errors, de tipo Folder Output y conectado al partner AgeEnt, Flujo AgeEnt, Operación de Flujo y documento de flujo F24 (F24Errors para el segundo).
:::

## Contabilización (Contabilizzazione)

En la cabecera del modelo es posible completar los campos para posibles **spese bancarie** y para la cuenta del **banca di pagamento**.  
En este punto, se puede presionar el botón **contabilizzazione** para generar automáticamente la escritura que registra la salida del banco y el contracargo de las cuentas (cargadas automáticamente) donde se ha anotado la deuda por retenciones a cuenta a pagar y por IVA a pagar (ejemplo: cuentas comúnmente denominadas Hacienda c/retenciones a cuenta y Hacienda C/Iva).

:::tip[Nota]
Las cuentas utilizadas automáticamente para cargar la deuda de IVA y la deuda por las retenciones a cuenta están configuradas, respectivamente, en los [**parametri di contabilità**](/docs/configurations/parameters/finance/accounting-parameters) respecto a la IVA, y en la tabla [**tipi ritenuta**](/docs/configurations/tables/finance/withholding-tax-types) para las retenciones a cuenta, cuenta por defecto que podría haber sido sobrescrita en el proceso de [**contabilización del pago de compensaciones (contabilizzazione pagamento compensi)**](/docs/finance-area/professional-men/accounting/payments-accounting/parameters).
:::

| Función (Funzione) | Significado (Significato) |
| --- | --- |
| Guardar (Salva) | Guarda el modelo en uso. |
| Proponer valores (Proponi valori) | Ejecuta la recuperación de datos de los pagos de IVA y de las retenciones de compensaciones pagadas. |
| Nuevo detalle (Nuovo dettaglio) | Establece el cursor en la cuadrícula de inserción de detalles. |
| Eliminar detalle (Cancella dettaglio) | Elimina la fila de detalle seleccionada. |