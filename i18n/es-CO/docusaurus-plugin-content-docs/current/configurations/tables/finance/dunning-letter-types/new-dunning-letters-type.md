---
title: Nuevo tipo de solicitudes (Nuovo tipo solleciti)
sidebar_position: 3
---

Los campos de este formulario son:

**codice**: código identificativo del tipo sollecito (identificativo del tipo sollecito).

**descrizione**: descripción del tipo de solicitud (tipo sollecito).

**tipo interesse**: opcional, es el enlace al tipo de tasa de interés que se debe aplicar al retraso de pago, para obtener un cálculo a la fecha de emisión de la solicitud.

**Solicitud por grupo de partidas (Sollecito per gruppo partite)**: el indicador de gestión para grupo de partidas gestionará una carta de solicitud para un grupo de partidas simultáneamente (gestión estándar), mientras que sin indicador, cada partida contable tendría su propia solicitud separada de las demás.

Una vez guardado el tipo de solicitud, es posible crear sus varios niveles con el botón 'nuevo (nuovo)'.

**codice**: código identificativo de la solicitud (identificativo del sollecito).

**descrizione**: descripción del tipo de solicitud (tipo sollecito).

**priorità**: prioridad de creación de 1 a N niveles.

**descrizione tipo fido**: el enlace a un tipo de control de crédito del cliente no está gestionado.

**giorni di ritardo**: indicación de los días de retraso que deben transcurrir antes de solicitar la partida.

**giorni**: el número de días de vencimiento de la solicitud y si estos deben contarse a partir de la fecha de creación o de la fecha de vencimiento de la solicitud anterior.

**Desde la fecha de movimiento anterior (Da data movimento precedente)**: fecha de referencia para los niveles posteriores al primero.

**da data creazione**: fecha de referencia generalmente utilizada para el primer nivel.

:::danger ATENCIÓN (ATTENZIONE)
Los valores de los campos "**giorni di ritardo**" y "**giorni**", en particular para las solicitudes posteriores a la primera, se suman; por lo tanto, en el caso del segundo, tercer aviso, etc., generalmente no es necesario agregar un valor en el parámetro *giorni di ritardo*, sino que se puede referir al tiempo adicional transcurrido desde la fecha de la primera solicitud a través del parámetro *giorni*.
:::

Para cada número de solicitud se podrá proceder, una vez guardado, a la inserción de los varios textos en idioma: el primero que se cargará es el que se utilizará por defecto cuando el registro del cliente no tenga un idioma asignado.

Los textos se dividen en 4 secciones: el objeto de la carta, el encabezado, la conclusión y la sección de referencias (activa solo para solicitudes sobre grupos de partidas). En la sección de referencias, en particular, se puede insertar un texto utilizando los códigos previstos en la parte inferior de la máscara: por ejemplo, “Ref. (3) nr. (4) del (5), (9) de (8) (10) con vencimiento al (6)”.