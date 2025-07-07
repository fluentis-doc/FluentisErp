---
title: Libros de IVA
sidebar_position: 20
---

Ruta del formulario: **Configuración > Tablas > Finanzas > Libros de IVA**

:::tip[Inicio Rápido]
La tabla está involucrada en el procedimiento de [**Inicio Rápido**](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, consulte la lista de verificación de la página vinculada.

Los registros creados por el Inicio Rápido ya están listos para gestionar:

- Compras y ventas Italia
- Compras y ventas de Inversión del Cargo, además de un seccional para la transferencia de compras
- Compras y ventas UE, además de un seccional para la transferencia de compras
- Compras y ventas Extra UE
- Correspondencias 
- Resumen para imprimir liquidaciones de IVA
:::

### Botones específicos

**Nuevo**: permite realizar la inserción de un nuevo libro de IVA.  
**Insertar año**: permite realizar la inserción de un nuevo año para el libro de IVA en el que se está ubicado.  
**Cancelar**: permite realizar la eliminación del libro de IVA en el que se está ubicado.  
**Eliminar año**: permite realizar la eliminación del año del libro de IVA en el que se está ubicado.  
**Vista previa**: permite realizar la impresión.  
**Imprimir Informe**: permite realizar la impresión.  
**Cancelar informes definitivos**: permite realizar la anulación de las impresiones definitivas de los registros. Se abre un diálogo en el cual seleccionar el registro y el período que se desea anular.  
:::

### Primera sección 

**Código**: código alfanumérico identificativo del registro.  

**Descripción**: descripción del registro que normalmente se imprime en los informes oficiales.  

**Tipo de nomenclatura**: tipología precodificada del registro. Prestar atención a la configuración correcta, por ejemplo, de los registros que aceptan el giroconto para compras intra o cargo inverso, los cuales se establecerán en *Ventas*, y diferenciar correctamente la naturaleza de las compras/ventas en suspensión de impuesto y el régimen especial según el art. 74 ter dpr 633/72.  

**Control número de referencia del IVA**: la configuración de este indicador bloquea la posibilidad de imprimir definitivamente un registro que tenga lagunas en los protocolos o incongruencias en su orden.  

**Asignar**: este indicador impone la gestión del registro correspondiente en el procedimiento de ventilación de las correspondencias.  

**Resolver**: permite determinar qué libros de IVA deben ser gestionados en la impresión de la liquidación IVA periódica.  

**Ref. registro compra**: el campo está activo solo para los registros de ventas/correspondencias, con el fin de indicar el libro de IVA de compras de origen de la ventilación de las correspondencias.  

**Descripción**: descripción del ref. registro de compra.  

**Numeración**: permite establecer para cada registro un numerador con las opciones estándar habituales comunes a otros numeradores presentes en el sistema, en lugar de la numeración estándar prevista para los libros de IVA. En la localización italiana, este campo no se utiliza.  

**Descripción**: descripción del numerador asociado.  

**Tipo de actividad de IVA**: el combo box remite a la tabla Tipo de actividad IVA donde se pueden codificar libremente diferentes tipos de actividades a efectos de IVA (como "Producción" e "Inmobiliaria") a los cuales se asocia un porcentaje de *Pro Rata* de deducibilidad IVA. También hay un indicador para definir cuál es la actividad principal prevalente sobre la que totalizar los valores en la liquidación IVA.  

**Descripción**: descripción del tipo de actividad IVA.  

### Segunda sección 

Permite establecer el contador de protocolos para cada año contable en el campo 'Prot. IVA Inicial'.

**Año**: año de referencia.  

**Prot. IVA inicial**: protocolo IVA inicial del año de referencia.  

**Último protocolo IVA**: permite visualizar cuál es el último protocolo IVA que ha sido impreso de forma definitiva en el mismo registro.  

**Última fecha de impresión**: fecha de ejecución de la última impresión definitiva.  

**Última pág. impresa**: último número de página impresa de forma definitiva.  

:::tip nota
la impresión de esta tabla permite visualizar el último período impreso de manera definitiva por cada registro y año.
:::

:::important Ver También
[**TUTORIALES EN VIDEO SOBRE TABLAS FINANZAS**](/docs/video/finance/intro)
:::