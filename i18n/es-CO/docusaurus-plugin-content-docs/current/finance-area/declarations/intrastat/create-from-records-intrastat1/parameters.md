---
title: Parámetros
sidebar_position: 3
ai_generated: true
---

Dentro de la sección 'Parámetros<!-- Parametri -->' el procedimiento muestra todas las filas de los movimientos<!-- movimenti --> ingresados. En particular:

**Estado y código de IVA<!-- Stato e codice IVA -->** se toman desde el registro maestro del sujeto titular;

el eventual **Valor en moneda<!-- Valore in divisa -->** según lo ingresado en la registración<!-- registrazione --> (el campo solo está presente para intra2);

**Importe de operaciones en euros<!-- Ammontare operazioni euro -->** toma el monto en la moneda de la empresa;

**Número del documento<!-- Numero del documento -->**, la **Fecha de registración<!-- Data di registrazione -->** y el **Código del servicio<!-- Codice del servizio -->** se recuperan del registro maestro titular de la registración<!-- anagrafica intestataria della registrazione -->.

Una vez completados los datos es posible proceder con la creación, operación que reportará los detalles en las secciones bis - ter - quater.

La correcta inserción automática en la sección adecuada del modelo depende de la gestión, en la fase de ingreso de la escritura contable, del campo **Tipo IVA** en la cuadrícula de IVA. Si se ajusta en *Genérico*, el movimiento<!-- movimento --> se insertará en la sección Bis, si se ajusta en *Servicio*, se insertará en la sección quater.
Este dato, a su vez, valorizará correctamente el campo ***BisTer*** (a entenderse como la sección del modelo) presente en la pestaña *Intrastat* de la registración<!-- registrazione -->, que luego es el dato que de hecho se transfiere en la fase de creación del modelo.

La sección Ter, en cambio, se valoriza, siempre a través de la pestaña *Intrastat* de la registración<!-- registrazione -->, cuando al registrar una nota de crédito, en la cuadrícula de IVA de la registración<!-- registrazione -->, se activa la marca ***Nota de variación de años anteriores*** (que identifica en cualquier caso una variación no referida al mes o trimestre de la registración<!-- registrazione --> la cual requiere la cumplimentación de la sección ter). Junto a esta marca es posible ingresar la fecha de referencia de la factura que se rectifica.