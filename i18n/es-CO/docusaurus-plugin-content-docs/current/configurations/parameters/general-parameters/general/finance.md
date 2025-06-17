---
title: Áreas de Negocio - Finanzas
sidebar_position: 1
---

**Creación de archivo Intraweb o Entratel** (código FS-FI-Intrastat-ItalianFileType): este parámetro, anteriormente visible solo en la base de datos, permite establecer directamente desde la interfaz el tipo de formato de exportación de los modelos intrastat, con el fin de hacerlo compatible respectivamente con la aplicación Intraweb de la agencia de aduanas o con Entratel de la agencia de ingresos (dos canales alternativos posibles para el envío de los modelos). La diferencia, técnicamente, radica particularmente en el registro de encabezado del archivo requerido para el envío por Entratel.  
El parámetro, normalmente, ya está configurado y puede ser gestionado simplemente en la columna VALOR, donde, como se indica en la nota, el indicador en condición FALSE (0 - desactivado) = Intraweb, mientras que TRUE (1 - activo) = Entratel. En caso de creación manual (problemas técnicos o retrocompatibilidad), configurar la columna Tipo como Booleano, la fecha de inicio de validez y el campo valor. El campo *Código* en la cuadrícula principal es FS-FI-Intrastat-ItalianFileType.

**Utilice el peso del documento en el Intrastat de compras / ventas** (código FS-FI-Intrastat-UseDocumentWeightInPurchase y FS-FI-Intrastat-UseDocumentWeightInSale): Al habilitar (en el campo Valor) el indicador (parámetro de tipo booleano) respectivamente para cada uno de los dos parámetros, el procedimiento automático de creación intrastat desde facturas detecta los pesos de los artículos desde el campo ‘NetWeight’ de las líneas del documento de compra / venta, en lugar de los pesos teóricos del registro de artículo como por defecto.  
La contabilización de la factura de venta, si la causa contable prevé la gestión intrastat, a su vez lleva a contabilidad los pesos del documento: de este modo, también el procedimiento de adquisición de registros contables tendrá el peso del documento.

Estos parámetros pueden ser asociados a un parámetro adicional (**visible solo en la base de datos**) con el que Fluentis lleva en la sección Bis/Ter... los valores de los pesos tal como están presentes en la creación automática, sin realizar redondeos de línea. Los redondeos que se gestionarán en la fase siguiente con el botón de agrupación presente en la sección Bis/Ter.

La consulta para ejecutar es:

        update fluentis.SH_CompanyParameters set shcp_value = cast(0 as smallint)
        
        --update fluentis.SH_CompanyParameters set shcp_value = cast(1 as smallint)
        	
        from fluentis.SH_CompanyParameters
        		
        join fluentis.SH_LocalizationParameters on SHLP_Id = SHCP_Parameter_SHLP_Id
        	
        where SHLP_Code like 'IN-IntrastatRoundByOperation'

**Bloquear la contabilidad cuando la fecha de registro es anterior a la fecha de recepción** (código FS-FI-Posting-BlockPostingBeforeReceiveDate): habilitando este parámetro, el registro de las facturas de compra desde el archivo Sdi no se consentirá en fecha anterior a la fecha de recepción de Sdi.  

**Permitir la creación de cartas de morosidad a partir de vencimientos cerrados** (código FS-FI-DunningLetters-AllowClosedMaturities): con este parámetro, la generación de recordatorios podrá crear también cartas de pago realizado.