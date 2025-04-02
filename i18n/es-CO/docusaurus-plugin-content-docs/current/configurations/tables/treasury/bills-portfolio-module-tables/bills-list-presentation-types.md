---
title: tipi presentazione distinte effetti
sidebar_position: 4
---

:::tip[Inicio Rápido (FAst Start)]
La tabla está relacionada con el procedimiento de [**Inicio Rápido (Fast Start)**](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, consulte la lista de verificación de la página enlazada.
:::

La tabla está conectada al campo *Tipo* presente en el encabezado de la lista de presentación de efectos. 

Se completa mediante la imposición de un código y una descripción, a los cuales se les asignará luego un numerador de referencia.

Las opciones adicionales previstas en la máscara ofrecen la posibilidad de definir:

- **Giro a Proveedor (Giro a Fornitore):** si el tipo de lista debe gestionarse como lista de giro de efectos/títulos a proveedor;  

- **Servicios (Utenze):** si el tipo de lista debe gestionarse como lista RID, actualmente reemplazada por el tipo SDD (Sepa Direct Debit - a nivel europeo) en la creación del archivo telemático en el módulo RIBA. Al activar el indicador, se habilitará el botón de exportación de la traza correspondiente en la barra de herramientas del formulario relacionado con la lista de presentación.

- **LCR:** el correspondiente francés de nuestras Riba. Al configurar este indicador, en la lista será activo el botón de exportación LCR y no la exportación normal.

- **Acreditación Inmediata (Accredito Immediato):** cuando está configurado, la contabilización de las listas registra en DARE la cuenta bancaria y en AVERE la cuenta transitoria bancaria (por ejemplo, *Banca X C/ S.B.F.*), mientras que la contabilización de los créditos tendrá en DARE la cuenta transitoria bancaria y en AVERE la cuenta del tipo de efecto (por ejemplo, la cuenta *Efectos activos en cartera*). 

Cuando el indicador está desactivado, se vuelve a la lógica estándar: en DARE la cuenta transitoria y en AVERE la cuenta tomada del tipo de efecto (por ejemplo, la cuenta *Efectos activos en cartera*), mientras que la contabilización de créditos prevé como siempre en DARE la cuenta bancaria y en AVERE la cuenta transitoria bancaria.

Esta configuración no es compatible con otras dos lógicas que pueden activarse desde el formulario Parámetros de cartera de efectos: el indicador de *Cierre de cliente en contabilización de lista* no debe configurarse (porque interrumpe el paso sobre la cuenta de efectos; con este indicador del tipo de lista activo, en realidad impediría el cierre del cliente). También usar las opciones de contabilización de listas a la fecha de maduración resulta poco lógico con este indicador activo.

- **Código externo (Codice esterno):** campo utilizado en la traza SDD para definir si la lista es de tipo *CORE* o *B2B*. Hacer referencia a la documentación técnica de las trazas SDD.

- **Las cuentas (I conti)**

- Cuenta / Subcuenta / Descripción **banca** 
- Cuenta / Subcuenta / Descripción **Transitorio Banco (Transitorio Banca)** 

pueden ser asociados al tipo de lista para automatizar y definir la movimentación contable al crear una nueva lista: se trata de la subcuenta del registro bancario sobre la que se realizará el acreditamiento final de efectos y del transitorio de presentación para la contabilización de listas (típicamente, por ejemplo *Banca X C/ S.B.F.*).

<iframe width="560" height="315" src="https://www.youtube.com/embed/pnRACKqZqvM" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>