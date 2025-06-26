---
title: Parámetros del Portafolio de Facturas
sidebar_position: 4
---

Los parámetros del portafolio de facturas se encuentran en **Parámetros > Tesorería**.

En los parámetros del portafolio de facturas se pueden preestablecer los elementos predeterminados que se propondrán en los procedimientos del módulo. En particular:

#### Adquisición de facturas
- **Contabilidad automática**: permite predefinir la contabilización de facturas directamente en el momento de la adquisición de facturas de facturas o partidas.  
- **Adquisición solo con fecha de vencimiento después de número de días**: si se indica un número de días, entonces ***FluentisERP*** bloqueará la creación de un efecto con un vencimiento más reciente no bancable.  
- **Bloquear la creación de facturas sin ABI / CAB**: si está configurado, ***FluentisERP*** bloqueará la creación de facturas a los que no se les puede asignar códigos abi/cab de respaldo.  
- **Agrupe las notas de crédito por fecha de vencimiento**: si está configurado, la anulación automática de las notas de crédito, que se puede establecer para el cliente individual, operará solo para fechas que coincidan con los vencimientos de facturas.

#### Contabilidad de facturas
- **Plantilla de Registros de Libro Mayor**: permite definir la causa contable predeterminada a proponer en el procedimiento homónimo.  
- **Agrupación por cuenta de facturación**: permite definir el parámetro de agrupamiento de facturas para las registraciones realizadas con dicho procedimiento.  
- **Grabaciones temporales**: permite definir el estado de registro provisional para las registraciones realizadas con dicho procedimiento.  

#### Listas de contabilidad
- **Plantilla de Registros de Libro Mayor**: permite definir la causa contable predeterminada a proponer en el procedimiento homónimo.  
- **Contabilidad en la fecha de vencimiento**: la primera opción desglosará el registro del asiento en las diversas fechas de vencimiento de las facturas, agregando los días bancarios establecidos en el registro del banco para la causa configurada.  
- **Cuenta en fecha de vencimiento con moneda fecha = fecha de vencimiento de los datos**: la segunda opción, en cambio, registrará las diversas facturas a las distintas fechas de vencimiento, pero con la fecha de valor del banco ajustada según los días bancarios establecidos en el registro del banco para la causa configurada.  
- **Cerrar cliente en la contabilidad de listas**: con esta configuración, no se realizará la contabilización de facturas, por lo que no se utilizará una cuenta de respaldo *facturas en cartera*, sino que el cliente se cerrará directamente con la *Listas de contabilidad*, con contrapartida típicamente *facturas sbf*, es decir, la cuenta de tránsito introducida en la cabecera del propio asiento.

#### Contabilidad de facturas por proveedor
- **Contabilidad de facturas por proveedor**: permite predefinir la causa contable a proponer en el procedimiento de Contabilidad de facturas a proveedor, es decir, el giro de títulos de crédito en pago a los proveedores.

#### Contabilidad de Créditos 
- **Plantilla de Registros de Libro Mayor**: permite definir la causa contable predeterminada a proponer en el procedimiento homónimo.  
- **Cargos por comisión**: permite definir la subcuenta de los gastos de comisiones para las registraciones realizadas con dicho procedimiento.  
- **Gastos pasivos**: permite definir la subcuenta de los cargos pasivos para las registraciones realizadas con dicho procedimiento.  

#### Agrupamiento  
- **Agrupar valores menores que**: este campo, si no está vacío y es diferente de cero, determina el valor umbral de las partidas a agrupar. Si, por ejemplo, se configura '1000', significa que se agruparán las partidas inferiores a esta cifra, es decir, hasta 999,99.