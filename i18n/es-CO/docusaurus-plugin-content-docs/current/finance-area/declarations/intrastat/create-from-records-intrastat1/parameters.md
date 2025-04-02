---
title: parametri
sidebar_position: 3
---

Dentro de la sección 'parametri (Parametri)', el procedimiento muestra todas las líneas de los movimientos ingresados. En particular:

**Estado y código IVA (Stato e codice IVA)** se toman del registro del sujeto titular;

el posible **Valor en divisa (Valore in divisa)** según lo ingresado en el registro (el campo está presente solo para el intra2);

**ammontare operazioni euro** toma el importe en la divisa de la empresa;

**numero del documento**, la **data di registrazione** y el **Código del servicio (Codice del servizio)** se toman del registro del titular de la entrada.

Una vez completados los datos, es posible proceder a la creación, operación que llevará los detalles a las secciones bis - ter - quater.

La correcta inserción automática en la sección adecuada del modelo depende de la gestión, en la fase de inserción de la escritura contable, del campo **tipo iva** en la cuadrícula de IVA. Si se establece en *generico*, el movimiento se insertará en la sección Bis; si se establece en *servizio*, se insertará en la sección quater.  
Este dato, a su vez, se utilizará correctamente para rellenar el campo ***BisTer*** (que se entiende como sección del modelo) presente en la pestaña *Intrastat* de la entrada, que es el dato real pasado en la fase de creación del modelo.

La sección Ter se valoriza, siempre a través de la pestaña *Intrastat* de la entrada, cuando al registrar una nota de crédito, en correspondencia de la cuadrícula de IVA de la entrada, se activa el indicador ***Nota de variación de años anteriores (Nota di variazione anni precedenti)*** (que identifica en cualquier caso una variación no relacionada con el mes o trimestre de registro, la cual requiere la compilación de la sección ter). Junto a este indicador, es posible ingresar la fecha de referencia de la factura que se está rectificando.