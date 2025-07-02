---
title: Nuevo tipo de cartas de cobranza
sidebar_position: 3
---

Los campos de este formulario son:

**Código**: código identificativo del tipo de carta de cobranza.

**Descripción**: descripción del tipo de carta de cobranza.

**Tipo de interés**: opcional, es el enlace al tipo de tasa de interés que se debe aplicar al retraso de pago, para obtener un cálculo a la fecha de emisión de la carta de cobranza. 

**carta de cobranza por grupo de partidas**: el indicador de gestión para grupo de partidas gestionará una carta de carta de cobranza para un grupo de partidas simultáneamente (gestión estándar), mientras que sin indicador, cada partida contable tendría su propia carta de cobranza separada de las demás.

Una vez guardado el tipo de carta de cobranza, es posible crear sus varios niveles con el botón 'nuevo'.

**Código**: código identificativo de la carta de cobranza.

**Descripción**: descripción del tipo de carta de cobranza.

**Prioridad**: prioridad de creación de 1 a N niveles.

**Descripción del tipo de crédito**: el enlace a un tipo de control de crédito del cliente no está gestionado.

**Días de retraso**: indicación de los días de retraso que deben transcurrir antes de solicitar la partida.

**Días**: el número de días de vencimiento de la carta de cobranza y si estos deben contarse a partir de la fecha de creación o de la fecha de vencimiento de la carta de cobranza anterior.

**Desde la fecha de movimiento anterior**: fecha de referencia para los niveles posteriores al primero.

**Desde la fecha de creación**: fecha de referencia generalmente utilizada para el primer nivel.

:::danger ATENCIÓN
Los valores de los campos "**Días de retraso**" y "**Días**", en particular para las cartas de cobranza posteriores a la primera, se suman; por lo tanto, en el caso del segundo, tercer aviso, etc., generalmente no es necesario agregar un valor en el parámetro *Días de retraso*, sino que se puede referir al tiempo adicional transcurrido desde la fecha de la primera carta de cobranza a través del parámetro *Días*.
:::

Para cada número de carta de cobranza se podrá proceder, una vez guardado, a la inserción de los varios textos en idioma: el primero que se cargará es el que se utilizará por defecto cuando el registro del cliente no tenga un idioma asignado.

Los textos se dividen en 4 secciones: el objeto de la carta, el encabezado, la conclusión y la sección de referencias (activa solo para cartas de cobranza sobre grupos de partidas). En la sección de referencias, en particular, se puede insertar un texto utilizando los códigos previstos en la parte inferior de la máscara: por ejemplo, “Ref. (3) nr. (4) del (5), (9) de (8) (10) con vencimiento al (6)”.