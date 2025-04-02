---
title: parametri portafoglio effetti
sidebar_position: 4
---

Los parámetros del módulo Cartera de Efectos se encuentran en **Parámetros > Tesorería (Parametri > Tesoreria)**.

En los parámetros del módulo Cartera de Efectos se pueden preestablecer los elementos predeterminados que se propondrán en los procedimientos del módulo. En particular:

#### Adquisiciones de efectos (Acquisizioni effetti)  
- **Contabilización automática (Contabilizzazione automatica)**: permite predefinir la contabilización de efectos directamente en el momento de la adquisición de efectos de facturas o partidas.  
- **Adquisición solo con vencimiento más allá del número de días (Acquisizione solo con scadenza oltre numero giorni)**: si se indica un número de días, entonces ***FluentisERP*** bloqueará la creación de un efecto con un vencimiento más reciente no bancable.  
- **blocco creazione effetti senza abi/cab**: si está configurado, ***FluentisERP*** bloqueará la creación de efectos a los que no se les puede asignar códigos abi/cab de respaldo.  
- **raggruppa note credito per data scadenza**: si está configurado, la anulación automática de las notas de crédito, que se puede establecer para el cliente individual, operará solo para fechas que coincidan con los vencimientos de facturas.

#### Contabilización de efectos (Contabilizzazione effetti)  
- **causale di contabilità**: permite definir la causa contable predeterminada a proponer en el procedimiento homónimo.  
- **raggruppa per conto effetto**: permite definir el parámetro de agrupamiento de efectos para las registraciones realizadas con dicho procedimiento.  
- **Registro provisional (Registrazioni provvisorie)**: permite definir el estado de registro provisional para las registraciones realizadas con dicho procedimiento.  

#### Contabilización de asientos (Contabilizzazione distinte)  
- **causale di contabilità**: permite definir la causa contable predeterminada a proponer en el procedimiento homónimo.  
- **contabilizza alla data di maturazione**: la primera opción desglosará el registro del asiento en las diversas fechas de vencimiento de los efectos, agregando los días bancarios establecidos en el registro del banco para la causa configurada.  
- **Contabilizar en la fecha de vencimiento con fecha valor del banco = fecha de vencimiento (Contabilizza in data scadenza con data valuta banca = data di maturazione)**: la segunda opción, en cambio, registrará los diversos efectos a las distintas fechas de vencimiento, pero con la fecha de valor del banco ajustada según los días bancarios establecidos en el registro del banco para la causa configurada.  
- **chiusura cliente in contabilizzazione distinta**: con esta configuración, no se realizará la contabilización de efectos, por lo que no se utilizará una cuenta de respaldo *efectos en cartera*, sino que el cliente se cerrará directamente con la *contabilizzazione distinte*, con contrapartida típicamente *efectos sbf*, es decir, la cuenta de tránsito introducida en la cabecera del propio asiento.

#### Contabilización de Efectos a proveedor (Contabilizzazione Effetti a fornitore)  
- **contabilizzazione effetti a fornitore**: permite predefinir la causa contable a proponer en el procedimiento de Contabilización de efectos a proveedor, es decir, el giro de títulos de crédito en pago a los proveedores.

#### Contabilización de créditos (Contabilizzazione accrediti)  
- **causale di contabilità**: permite definir la causa contable predeterminada a proponer en el procedimiento homónimo.  
- **spese commissioni**: permite definir la subcuenta de los gastos de comisiones para las registraciones realizadas con dicho procedimiento.  
- **oneri passivi**: permite definir la subcuenta de los cargos pasivos para las registraciones realizadas con dicho procedimiento.  

#### Agrupación (Raggrupamento)  
- **raggruppa importi inferiori a**: este campo, si no está vacío y es diferente de cero, determina el valor umbral de las partidas a agrupar. Si, por ejemplo, se configura '1000', significa que se agruparán las partidas inferiores a esta cifra, es decir, hasta 999,99.