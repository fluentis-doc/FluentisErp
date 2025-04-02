---
title: pagamenti contatto
sidebar_position: 16
---

Esta es una de las pestañas de los **Contactos CRM**.

En esta pestaña se pueden configurar los pagos a proponer en los documentos relacionados con el contacto. 

### Tipos de pago (Tipi pagamento)

La sección fundamental de la pestaña **pagamenti** sirve para establecer la lógica de cálculo de los plazos. Se seleccionan el **Tipo de pago (Tipo di pagamento)** y la **soluzione di pagamento** (ambos se encuentran en *Configuración > Tablas > Configuración general*).

**percentuale**: permite definir la parte correspondiente (en porcentaje) del valor total del pago (o cobro) que se debe gestionar con la condición de pago (como combinación de tipo de pago y solución de pago) establecida en la línea.

En caso de que el porcentaje sea menor a 100, se deben crear tantas líneas con porcentajes que sumen 100.

*Ejemplo*:<br />
- 50% Efectivo a la vista de la factura y 50% Transferencia bancaria a 30 días.<br />
- 50% Efectivo a la vista de la factura; 25% Transferencia bancaria a 30 días; 25% Transferencia bancaria a 60 días.<br />
![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image03.png) ![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image04.png)

<u>Atención</u>: si la solución de pago incluye más de un plazo, se completará de esta manera: ejemplo 50% efectivo a la vista y 50% transferencia bancaria a 30 - 60 días.

**![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image05.png)**

**Banco (d'appoggio)**: representa el banco de referencia para las partidas.  
- Para el registro de cliente:
> - si el tipo de pago es recibo bancario, se debe indicar el banco del cliente;  
> - si el tipo de pago es transferencia bancaria, se debe indicar el banco de la empresa en uso (para que en la impresión de documentos aparezcan los datos de pago para el cliente);  

El campo se completa a través de un combo box (**Banco**) conectado a la tabla *Banco d'appoggio*. Dentro de esta tabla se pueden ingresar tanto los bancos de la empresa como los bancos de la contraparte (cliente o proveedor). Además, es posible ingresar líneas completas con código IBAN y/o SWIFT (recomendado para los bancos de la empresa) así como líneas completas con solo código ABI y CAB (recomendado para los bancos de contraparte donde el IBAN y SWIFT pueden ser indicados en los campos de la cuadrícula presente en el registro).

Si la línea presente en la tabla Banco d'appoggio está completa con IBAN y/o SWIFT, así como con ABI y CAB, al llamar a esa línea a través del combobox, los datos se llevarán a la cuadrícula en el registro; de lo contrario, solo se llevarán ABI y CAB, pero siempre será posible agregar los datos faltantes directamente en la cuadrícula. Esto es aconsejable para los bancos de contraparte a fin de evitar codificar demasiadas líneas en la tabla Banco d'appoggio utilizadas solo para un único cliente. Es preferible indicar solo los datos de la sucursal bancaria (ABI y CAB) donde diferentes clientes pueden tener su cuenta corriente.

La inserción de un banco puede realizarse también a través de un doble clic en los campos abi/cab para abrir la ayuda de búsqueda entre las agencias bancarias nacionales, desde las cuales seleccionar la correspondiente y crear el código en el registro para completar con los datos de la cuenta corriente, cin, iban, swift.

**descrizione banca**: campo conectado al campo anterior.

**codice banca**: campo NO utilizado en Italia. Para localizaciones en el extranjero, puede contener un código bancario alternativo respecto al sistema ABI CAB.

### Banco d'appoggio (Banca d'appoggio)

En la cuadrícula se pueden ingresar los bancos de apoyo de la contraparte.

De esta manera, es posible ingresar bancos de apoyo alternativos (siempre de contraparte). Un ejemplo adicional podría ser un cliente que paga con transferencia (así que en la cuadrícula Tipo de Pago se ingresa el banco de nuestra empresa) pero se quiere ingresar su banco de apoyo en caso de pago de notas de crédito.

La inserción de un banco puede realizarse a través de un doble clic en los campos abi/cab para abrir la ayuda de búsqueda entre las agencias bancarias nacionales, desde las cuales seleccionar la correspondiente y crear el código en el registro para completar con los datos de la cuenta corriente, cin, iban, swift.