---
title: Gestión de devoluciones y notas de crédito
sidebar_position: 3
ai_generated: true
---

En el módulo de Ventas de Fluentis, la gestión de devoluciones<!-- resi --> y notas de crédito permite registrar y monitorear la devolución de bienes o servicios por parte de los clientes, generando los documentos contables y logísticos necesarios. Este proceso garantiza una correcta trazabilidad de las operaciones y una actualización en tiempo real de las existencias de almacén<!-- magazzino --> y de las posiciones contables de los clientes.

Fluentis soporta diferentes tipos de devolución<!-- reso -->:

- Devolución con Nota de Crédito: devolución de bienes con emisión de una nota de crédito para anular el importe facturado. La mercancía podrá ser devuelta a través de un documento de transporte<!-- documento di trasporto --> o directamente al emitir la nota de crédito, según la configuración del almacén<!-- magazzino -->.

- Devolución sin Nota de Crédito: devolución de bienes sin emisión de nota de crédito, por ejemplo para sustitución de mercancía. En este caso, típicamente se utilizarán los documentos de transporte<!-- documenti di trasporto --> para mover el almacén<!-- magazzino -->.

La devolución<!-- reso --> además puede ser: 

- Devolución Parcial: devolución de una parte de la mercancía entregada.

- Devolución Total: devolución de la totalidad del suministro.

##  Proceso Operativo<!-- Processo Operativo -->

Los documentos de **Devolución<!-- Reso -->** pueden ser generados de dos maneras:

1) *a través del procedimiento de **Estorno<!-- Storno -->** presente en la barra de herramientas de la búsqueda de albaranes<!-- DDT --> o facturas.* Con este procedimiento es posible anular parcial o totalmente los documentos seleccionados en la cuadrícula de búsqueda. Una vez pulsado el botón *Estorno*, se abrirá una ventana emergente en la que: seleccionar las líneas de los artículos a anular con las cantidades correspondientes, ingresar el Tipo de documento a crear (**solo será posible seleccionar tipos de documento con naturaleza Devolución<!-- Reso -->**) e ingresar la Causal de estorno del almacén<!-- Causale di storno del magazzino -->. 

2) *manualmente con la creación de un nuevo albarán<!-- DDT --> o factura.* 
En este caso, es importante ingresar un Tipo de documento con Naturaleza *Devolución<!-- Reso -->*, el cliente y los artículos a anular. Si se crea manualmente la devolución<!-- reso -->, sin embargo, no existirá el enlace con el documento de origen, el cual deberá ser ingresado manualmente por el usuario.

Si se ha generado un albarán<!-- DDT -->, se podrá generar a partir de él la factura, mediante el procedimiento correspondiente o mediante la liquidación manual. Al guardar una nota de crédito ingresada manualmente, el sistema advertirá al usuario que debe ingresar una cantidad negativa en las notas de crédito. Esta funcionalidad permite tener una facturación actualizada, que considere en negativo las notas de crédito.

:::note Atención<!-- Attenzione -->
En la tabla [Tipos de Albarán<!-- Tipi DDT -->](/docs/configurations/tables/sales/delivery-notes-type), al Tipo de Albarán *Devolución<!-- Reso -->* debe asociarse un [Tipo de factura<!-- Tipo fattura -->](/docs/configurations/tables/sales/invoices-type) *Nota de crédito*.
:::

Para la valoración de los albaranes<!-- DDT --> de devolución en nota de crédito, pueden existir diferentes casos según los signos de cantidad y precio, en el albarán de origen:
1)	Albarán de devolución   Cantidad  10, Precio  10 -> línea de factura (normal o nota de crédito NC) Cantidad  -10, Precio  10
2)	Albarán de devolución   Cantidad -10, Precio  10 -> línea de factura normal                Cantidad  10, Precio  10 
3)	Albarán de devolución   Cantidad -10, Precio  10 -> línea de factura NC                   Cantidad -10, Precio  10 
4)	Albarán de devolución   Cantidad  10, Precio -10 -> línea de factura normal               Cantidad -10, Precio -10 
5)	Albarán de devolución   Cantidad  10, Precio -10 -> línea de factura NC                   Cantidad -10, Precio  10 
6)	Albarán de devolución   Cantidad -10, Precio -10 -> línea de factura normal               Cantidad  10, Precio -10 
7)	Albarán de devolución   Cantidad -10, Precio -10 -> línea de factura NC                   Cantidad -10, Precio  10 
8)	Albarán normal Cantidad  10, Precio  10 -> línea de factura NC                            Cantidad -10, Precio  10
9)	Albarán normal Cantidad -10, Precio  10 -> línea de factura NC                            Cantidad -10, Precio  10
10)	Albarán normal Cantidad  10, Precio -10 -> línea de factura NC                           Cantidad -10, Precio  10 
11)	Albarán normal Cantidad -10, Precio -10 -> línea de factura NC                           Cantidad -10, Precio  10 

## Configuraciones y Parámetros<!-- Configurazioni e Parametri -->

Para una correcta gestión de las devoluciones<!-- resi --> y notas de crédito, asegúrese de que estén configurados los siguientes elementos:

- **Tipos de Documento<!-- Tipi Documento -->**: definir los tipos de documento para devoluciones<!-- resi --> y notas de crédito.

- **Almacén y Causal de almacén<!-- Magazzino e Causale di Magazzino -->**: cada tipo de documento que mueve el almacén<!-- magazzino --> debe tener asociado el [Almacén<!-- Magazzino -->](/docs/configurations/tables/logistics/warehouses) y la [causal<!-- causale -->](/docs/configurations/tables/logistics/warehouse-templates) relativa; generalmente, en las devoluciones<!-- resi --> y en las notas de crédito el movimiento será una entrada<!-- carico -->, ya que la mercancía es devuelta por el cliente. 

## Gestión de signos mixtos - NOTA PARA PARTNER Y PROJECT MANAGER<!-- Gestione segni misti - NOTA PER PARTNER E PROJECT MANAGER -->

La posibilidad de contabilizar el documento con signos mixtos debe habilitarse específicamente mediante un script SQL.

:::note Nota técnica para activación<!-- Nota tecnica per attivazione -->
A continuación el script a ejecutar:

ATENCIÓN: El parámetro a continuación que controla el modo de gestión de los signos debe ser ajustado a +1, a diferencia del pasado, debido al cambio de política en la gestión de signos anteriormente mencionada.

    select * from [Fluentis].[SH_LocalizationParameters] where [SH_LocalizationParameters].[SHLP_Code] like 'VE-SalesInvoice_CreditNotesPostingSigns'

identificar el Id del parámetro en cuestión

En la búsqueda 

    select * from [Fluentis].[SH_CompanyParameters] where [SH_CompanyParameters].[SHCP_Parameter_SHLP_Id] = ..... identificar la fila para la empresa en uso a través del campo SHCP_Company_SHC_Id

y ejecutar un update en el campo SHCP_Value

VALORES DEL PARÁMETRO:

0 = como está, no permite signos mixtos (las NC siempre se fuerzan negativas)

-1 = NC siempre invertidas (el + pasa a menos y el - pasa a +)

+1 = Tipología actualmente requerida para el signo mixto, tanto FT como NC se contabilizan con los signos existentes, el + se mantiene + y el - se mantiene -.
:::