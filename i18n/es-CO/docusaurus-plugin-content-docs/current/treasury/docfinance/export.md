---
title: esportazioni
sidebar_position: 2
---

Desde esta máscara se llevan a cabo las exportaciones de datos para DocFinance, con tres opciones diferentes.

**esporta anagrafica**: la activación de este indicador obligará al sistema a crear el archivo de alineación del plan de cuentas y de los registros. Una vez configurado, se activarán los campos siguientes, donde se debe establecer el nombre del archivo y la ruta compartida de creación (ambos datos se guardarán para ser reutilizados en la creación posterior). El primer campo ‘Fecha de última exportación (Data ultima esportazione)’ permite definir la fecha de referencia para la exportación de solo los datos modificados/agregados en el plan de cuentas: se permite borrar esta fecha para crear un archivo completo de todas las configuraciones del plan de cuentas/registros (esto claramente tiene un impacto significativo en el tiempo necesario para el alineamiento entre los dos sistemas).

**creazione automatica cash flow**: con este indicador, el programa creará un nuevo flujo de caja en el módulo homónimo, antes de proceder a la posible exportación de datos del siguiente punto. La creación se realizará con los parámetros predeterminados del procedimiento ‘Creación automática de flujo de caja (Creazione automatica cash flow)’: se remite a la documentación específica para más detalles.

**esporta cash flow**: con este indicador, el sistema creará el archivo de flujos financieros, tanto como partidas contables como previsionales. Cuando se activa el indicador, se activa el siguiente indicador ‘Derogabilidad de registros/tipos de pago (Derogabilità da anagrafici/tipi pagamento)’ y los campos con los nombres y la ruta compartida de creación del archivo (ambos guardados). En detalle, dependiendo de si se ha configurado el indicador ‘Derogabilidad de registros/tipos de pago’ o no, la lógica de asignación de la derogabilidad cambia: si no está configurado, la derogabilidad para los proveedores se determinará por el tipo de pago y para los clientes por el registro; si está configurado, la derogabilidad se derivará del registro del cliente/proveedor y si aquí no está configurado, se calculará con códigos fijos (‘01’ para las riba, o ‘01’ – ‘02’ – ‘03’ – ‘04’ dependiendo de que la diferencia entre la fecha de vencimiento y la fecha actual dé como resultado una fecha vencida, una diferencia de menos de 30 días, de 30 a 90, más de 90).

En la parte inferior de la máscara debe definirse el usuario que ejecutará la creación de los archivos. Es necesario que este tenga acceso a las carpetas compartidas configuradas para la creación de archivos.

| Función (Funzione) | Significado (Significato) |
| --- | --- |
| Guardar (Salva) | Con este botón es posible guardar las configuraciones a proponer como predeterminadas en la máscara. |
| Exportación (Esportazione) | Ejecuta la creación del/los archivo/s tal como se configuró en la máscara. |