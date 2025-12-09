---
title: Tipos de Presentación de Lista de Facturas
sidebar_position: 4
---

:::tip[FAst Start]
La tabla está incluida en el procedimiento de [**Fast Start**](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, consulte la lista de verificación en la página enlazada.
:::
distinta effetti
La tabla está vinculada al campo *Tipo* presente en el encabezado de la lista de presentación de facturas.

Se completa mediante la asignación de un código y una descripción, a los cuales luego se debe asociar un numerador de referencia.

Las opciones adicionales disponibles en el formulario permiten definir:

- **Giro al proveedor** si el tipo de lista debe gestionarse como lista de giro de facturas/títulos a proveedor;

- **Consumo:** si el tipo de lista debe gestionarse como lista RID que actualmente ha sido sustituida por el tipo SDD (Sepa Direct Debit - a nivel europeo) en la creación del archivo telemático en el módulo C.Ord. Al activar esta casilla se habilita el botón de exportación del archivo correspondiente en la barra de acciones de la pantalla referente a la lista de presentación.

- **LCR:** el equivalente francés de nuestras C.Ord. Al activar esta opción en la lista estará disponible el botón de exportación LCR y no la exportación normal.

- **Acreditado directamente:** cuando está activado, la contabilización de listas registra en DEBE la cuenta bancaria y en HABER la cuenta transitoria bancaria (por ejemplo *Banco X C/ S.B.F.*), mientras que 
la contabilización de abonos tendrá en el debe la cuenta transitoria bancaria y en el haber la cuenta del tipo de factura (por ejemplo la cuenta *facturas activos en cartera*).

Cuando la casilla está desactivada se retorna a la lógica estándar: en DEBE la cuenta transitoria y en HABER la cuenta tomada del tipo factura (por ejemplo la cuenta *facturas activos en cartera*), mientras que la contabilización de abonos, como siempre, prevé en debe la cuenta bancaria y en haber la cuenta transitoria bancaria.

Esta configuración no es compatible con otras dos lógicas activables desde el formulario de Parámetros del Portafolio de Facturas: la casilla de *Cerrar cliente en la contabilidad de listas* no debe ser activada (porque elimina el paso por la cuenta de facturas; con esta opción activa, impediría de hecho el cierre del cliente). Tampoco resulta lógico utilizar las opciones de contabilización de listas a fecha de vencimiento con esta casilla activa.

- **Código externo:** campo utilizado en el registro SDD para definir si la lista es de tipo *CORE* o *B2B*. Consulte la documentación técnica de los registros SDD.


- **Las cuentas**

- Cuenta / Cuenta detallada / Descripción **Banco**
- Cuenta / Cuenta detallada / Descripción **Transitoria Banco**

pueden ser asociadas al tipo de lista para automatizar y definir el movimiento contable en el acto de la creación de una nueva lista: se trata de la cuenta detallada del banco registrada en la que se realizará el abono final de los facturas y de la transitoria de presentación para la contabilización de listas (típicamente por ejemplo *Banco X C/ S.B.F.*).

<iframe width="560" height="315" src="https://www.youtube.com/embed/pnRACKqZqvM" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>