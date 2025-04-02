---
title: Gestión de devoluciones y notas de crédito (Gestione resi e note di credito)
sidebar_position: 3
---

El mecanismo de gestión de devoluciones y notas de crédito permite administrar los flujos de retorno de mercancías y los ajustes financieros relacionados. Así es como típicamente funciona:

**Registro de la Devolución (Registrazione del Reso)**: Cuando un cliente devuelve un producto, el proceso comienza con la creación de un documento de devolución en el sistema. Este documento puede ser creado manualmente (ingresando un DDT con Naturaleza *reso* o una factura con Naturaleza *Nota de crédito (Nota di credito)*), o automáticamente con el procedimiento de **storno** presente en la [Búsqueda (Ricerca)](/docs/sales/sales-delivery-notes/insert-delivery-notes/search-sales-dn) de documentos. En caso de que se cree el DDT de devolución, de este se podrá crear automáticamente la nota de crédito con los procedimientos correspondientes. 

**Actualización de Inventarios (Aggiornamento delle Scorte)**: una vez que se ha movido a almacén el documento de anulación, el sistema actualiza automáticamente los inventarios para reflejar el retorno de la mercancía, indicando los productos devueltos como disponibles. 

**Detalles de la Nota de Crédito (Dettagli della Nota di Credito)**: La nota de crédito incluye detalles como el monto acreditado y puede ser revisada antes de ser enviada al cliente. Al guardar una nota de crédito, todos los Tipos de gasto se ingresan con signo negativo, excepto los gastos de Sellos (Bollo). 

**Actualización de la Contabilidad (Aggiornamento della Contabilità)**: Una vez contabilizada, la nota de crédito actualiza los registros contables, reduciendo el monto adeudado por el cliente; esto puede reflejarse en una disminución del saldo abierto o en un reembolso, dependiendo de los acuerdos con el cliente.

:::note Nota
Desde la versión 607, las notas de crédito se manejan con signo negativo.  
En el momento de guardar el documento, de hecho, Fluentis cambiará el signo de los artículos y notificará al usuario con un pop-up. También todos los gastos se convierten a signo negativo, excepto los gastos de Sellos (Bollo).    
La gestión de la contabilización del documento no cambia con respecto al pasado, ya que el documento negativo continúa siendo descontado del registro IVA (antes se convertía en negativo al momento de la contabilización).  
El envío del documento a la SDI mediante la generación del archivo .xml implica un nuevo cambio de signo en conformidad con las especificaciones técnicas para la facturación electrónica.  
El cambio en el comentario ha sido necesario, sobre todo para una mejor gestión de las estadísticas de ventas y los procesos conexos.
:::

### Gestión de signos mixtos (Gestione segni misti)

La posibilidad de contabilizar el documento con signos mixtos debe habilitarse específicamente mediante un script SQL.

:::note Nota técnica para activación
A continuación, el script a ejecutar:

ATENCIÓN: El parámetro a continuación que controla la modalidad de gestión de signos ahora debe establecerse en +1, a diferencia del pasado, en consecuencia del cambio de política de gestión de signos mencionado anteriormente.

    select * from [Fluentis].[SH_LocalizationParameters] where [SH_LocalizationParameters].[SHLP_Code] like 'VE-SalesInvoice_CreditNotesPostingSigns'

identificar el Id del parámetro en cuestión

En la búsqueda

    select * from [Fluentis].[SH_CompanyParameters] where [SH_CompanyParameters].[SHCP_Parameter_SHLP_Id] = ..... identificar la fila para la empresa en uso a través del campo SHCP_Company_SHC_Id

y ejecutar una actualización al campo SHCP_Value

VALORES DEL PARÁMETRO:

0 = así como está, no permite signos mixtos (las NC siempre son forzadas a ser negativas)

-1 = NC siempre invertidas (el + se convierte en menos y el - se convierte en +)

+1 = Tipo actualmente requerido para el signo mixto, tanto las FT como las NC se contabilizan con los signos existentes, el + permanece + y el - permanece -.
:::