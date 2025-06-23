Representa el resumen de las fechas de vencimiento del documento, para cada *tipo* y *solución* de pago.  
- **número**: valor progresivo de la línea.  
- **pago**: representa el código alfanumérico del *Tipo de pago* extraído del *Encabezado del documento > pestaña Pagos*.  
- **importe**: Importe de la fecha de vencimiento calculado. Puede ser forzado manualmente, en cuyo caso se activa automáticamente el siguiente indicador *editar manualmente*. (Se activan automáticamente controles y avisos sobre la cuadratura entre los valores de las fechas de vencimiento y el total de la factura)  
- **fecha de vencimiento**: Fecha de vencimiento calculada. Puede ser forzada manualmente, en cuyo caso se activa automáticamente el siguiente indicador *editar manualmente*.  
- **cargos de cobranza**: Campo en el que se reportan los gastos de cobro calculados.  
- **iva**: a aplicar a los gastos de cobro (también puede configurarse manualmente)  
- **Causa de pago**: es posible insertar directamente en factura una causa contable que dé lugar a un asiento automático de cobro/pago. NB tener cuidado con la plantilla de la causa porque utilizará las cuentas presentes incluso sin subcuenta, razón por la cual existe el siguiente campo.  
- **Cuenta subcuenta cliente/proveedor**: cuenta que se utiliza para cobrar/pagar (caja o banco, por ejemplo) la fecha de vencimiento sobreescribiendo la cuenta presente en la causa contable de pago (o cobro)  
- **número de recibo**: Un posible número de recibo para el dinero recibido  
- **soltero**: activa la contabilización del cierre de fechas de vencimiento en el asiento automatizado  
- **tipo de descuento**: Tipo de descuento financiero  
- **valor matricial**: Valor del descuento financiero sobre el cobro  
- **declaraciones detalladas**: Es la referencia a la declaración de intención. El IVA aplicado a los gastos de cobro podría ser siempre un IVA de techo, por lo que es necesario poder insertar aquí la declaración de intención asociada (como para las líneas de artículo y las líneas de gastos)  

**FACTURAS DE COMPRA:**

- **signo**: solo las fechas de vencimiento que tienen este indicador se gestionan luego en pago con causa y cuenta establecida  
- **Modelos de referencia de pago**: Modelo de creación del código de pago. En algunas localizaciones extranjeras cada fecha de vencimiento en la factura prevé un código atribuido por quien factura: este código está estructurado según algunos modelos específicos (tabla MB_PaymentReferenceModels), de manera que se pueda construir el código con un algoritmo.  
- **Códigos de modelos de pago**: Este es el código (estructurado como el modelo anterior) que se debe reportar en la partida y, por lo tanto, en los pagos que se envían al banco, para que este comunique al beneficiario cuál es la fecha de vencimiento que fue pagada (y así automatizar la importación de los movimientos bancarios con el cierre de la partida). Desde aquí se compila dentro de la partida y en el archivo Sepa.  
- **Fecha límite para pago anticipado**: Este es un campo previsto en el trazo de facturas Sdi, la fecha límite para poder aplicar el descuento financiero.