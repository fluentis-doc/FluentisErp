---
title: registri iva
sidebar_position: 20
---

Ruta del formulario: **Configuración > Tablas > Administración > registri iva**

:::tip[Inicio Rápido (FAst Start)]
La tabla está involucrada en el procedimiento de [**Inicio Rápido (Fast Start)**](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, consulte la lista de verificación de la página vinculada.

Los registros creados por el Inicio Rápido ya están listos para gestionar:

- Compras y ventas Italia
- Compras y ventas de Cargo Inverso (Reverse Charge), además de un seccional para el giroconto de compras
- Compras y ventas UE, además de un seccional para el giroconto de compras
- Compras y ventas Extra UE
- Correspondencias (Corrispettivi)
- Resumen para imprimir liquidaciones de IVA
:::

### Botones específicos

**nuovo**: permite realizar la inserción de un nuevo registro IVA.  
**inserimento anno**: permite realizar la inserción de un nuevo año para el registro IVA en el que se está ubicado.  
**cancella**: permite realizar la eliminación del registro IVA en el que se está ubicado.  
**cancella anno**: permite realizar la eliminación del año del registro IVA en el que se está ubicado.  
**anteprima**: permite realizar la impresión.  
**stampa**: permite realizar la impresión.  
**annulla stampe definitive**: permite realizar la anulación de las impresiones definitivas de los registros. Se abre un diálogo en el cual seleccionar el registro y el período que se desea anular.  
:::

### Primera sección (Prima sezione)

**codice**: código alfanumérico identificativo del registro.  

**descrizione**: descripción del registro que normalmente se imprime en los informes oficiales.  

**tipo registro**: tipología precodificada del registro. Prestar atención a la configuración correcta, por ejemplo, de los registros que aceptan el giroconto para compras intra o cargo inverso, los cuales se establecerán en *vendite*, y diferenciar correctamente la naturaleza de las compras/ventas en suspensión de impuesto y el régimen especial según el art. 74 ter dpr 633/72.  

**controllo protocolli**: la configuración de este indicador bloquea la posibilidad de imprimir definitivamente un registro que tenga lagunas en los protocolos o incongruencias en su orden.  

**da ventilare**: este indicador impone la gestión del registro correspondiente en el procedimiento de ventilación de las correspondencias.  

**da liquidare**: permite determinar qué registros IVA deben ser gestionados en la impresión de la liquidación IVA periódica.  

**Ref. registro compra (Rif. reg. acquisto)**: el campo está activo solo para los registros de ventas/correspondencias, con el fin de indicar el registro IVA de compras de origen de la ventilación de las correspondencias.  

**descrizione**: descripción del ref. registro de compra.  

**numerazione**: permite establecer para cada registro un numerador con las opciones estándar habituales comunes a otros numeradores presentes en el sistema, en lugar de la numeración estándar prevista para los registros IVA. En la localización italiana, este campo no se utiliza.  

**descrizione**: descripción del numerador asociado.  

**tipo attività iva**: el combo box remite a la tabla Tipo de actividad IVA donde se pueden codificar libremente diferentes tipos de actividades a efectos de IVA (como "Producción" e "Inmobiliaria") a los cuales se asocia un porcentaje de *Pro Rata* de deducibilidad IVA. También hay un indicador para definir cuál es la actividad principal prevalente sobre la que totalizar los valores en la liquidación IVA.  

**descrizione**: descripción del tipo de actividad IVA.  

### Segunda sección (Seconda sezione)

Permite establecer el contador de protocolos para cada año contable en el campo 'Prot. IVA Inicial'.

**anno**: año de referencia.  

**Prot. IVA inicial (Prot. IVA iniziale)**: protocolo IVA inicial del año de referencia.  

**Último protocolo IVA (Ultimo prot. IVA)**: permite visualizar cuál es el último protocolo IVA que ha sido impreso de forma definitiva en el mismo registro.  

**data ultima stampa**: fecha de ejecución de la última impresión definitiva.  

**Última pág. impresa (Ultima pag. stampata)**: último número de página impresa de forma definitiva.  

:::tip nota
la impresión de esta tabla permite visualizar el último período impreso de manera definitiva por cada registro y año.
:::

:::important Ver También
[**TUTORIALES EN VIDEO SOBRE TABLAS ADMINISTRATIVAS**](/docs/video/finance/intro)
:::