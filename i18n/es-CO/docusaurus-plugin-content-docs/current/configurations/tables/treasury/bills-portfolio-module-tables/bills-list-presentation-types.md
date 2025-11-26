---
title: Tipos de presentación de remesas de efectos
sidebar_position: 4
ai_generated: true
---

:::tip[Inicio rápido<!-- FAst Start -->]
La tabla está incluida en el procedimiento de [**Inicio Rápido<!-- Fast Start -->**](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, consulte la lista de verificación en la página enlazada.
:::

La tabla está vinculada al campo *Tipo<!-- Tipo -->* presente en el encabezado de la remesa de presentación de efectos<!-- distinta di presentazione effetti -->.

Se completa mediante la asignación de un código y una descripción, a los cuales luego se debe asociar un numerador de referencia.

Las opciones adicionales disponibles en el formulario permiten definir:

- **Remesa a Proveedor<!-- Giro a Fornitore -->:** si el tipo de remesa debe gestionarse como remesa de giro de efectos/títulos a proveedor<!-- distinta di giro effetti/titoli a fornitore -->;

- **Adeudos (Utenze):** si el tipo de remesa debe gestionarse como remesa RID que actualmente ha sido sustituida por el tipo SDD (Sepa Direct Debit - a nivel europeo) en la creación del archivo telemático en el módulo RIBA. Al activar esta casilla se habilita el botón de exportación del archivo correspondiente en la barra de acciones de la pantalla referente a la remesa de presentación.

- **LCR:** el equivalente francés de nuestras RIBA. Al activar esta opción en la remesa estará disponible el botón de exportación LCR y no la exportación normal.

- **Abono Inmediato<!-- Accredito Immediato -->:** cuando está activado, la contabilización de remesas registra en DEBE la cuenta bancaria y en HABER la cuenta transitoria bancaria (por ejemplo *Banco X C/ S.B.F.*), mientras que 
la contabilización de abonos tendrá en el debe la cuenta transitoria bancaria y en el haber la cuenta del tipo de efecto (por ejemplo la cuenta *Efectos activos en cartera*).

Cuando la casilla está desactivada se retorna a la lógica estándar: en DEBE la cuenta transitoria y en HABER la cuenta tomada del tipo efecto (por ejemplo la cuenta *Efectos activos en cartera*), mientras que la contabilización de abonos, como siempre, prevé en debe la cuenta bancaria y en haber la cuenta transitoria bancaria.

Esta configuración no es compatible con otras dos lógicas activables desde el formulario de Parámetros de cartera de efectos<!-- form Parametri portafoglio effetti -->: la casilla de *Cierre de cliente en contabilización de remesa<!-- Chiusura cliente in contabilizzazione distinta -->* no debe ser activada (porque elimina el paso por la cuenta de efectos; con esta opción activa, impediría de hecho el cierre del cliente). Tampoco resulta lógico utilizar las opciones de contabilización de remesas a fecha de vencimiento con esta casilla activa.

- **Código externo:** campo utilizado en el registro SDD para definir si la remesa es de tipo *CORE* o *B2B*. Consulte la documentación técnica de los registros SDD.


- **Las cuentas<!-- I conti -->**

- Cuenta / Subcuenta / Descripción **Banco**
- Cuenta / Subcuenta / Descripción **Transitoria Banco**

pueden ser asociadas al tipo de remesa para automatizar y definir el movimiento contable en el acto de la creación de una nueva remesa: se trata de la subcuenta<!-- sottoconto --> del banco registrada en la que se realizará el abono final de los efectos y de la transitoria de presentación para la contabilización de remesas (típicamente por ejemplo *Banco X C/ S.B.F.*).

<iframe width="560" height="315" src="https://www.youtube.com/embed/pnRACKqZqvM" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>