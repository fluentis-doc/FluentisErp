---
title: FAQ Administración
sidebar_position: 1
ai_generated: true
---

<details>

  <summary>1. ¿Qué facturas electrónicas se insertan en la carpeta configurada en la tabla <b>Configuración documentos electrónicos</b>?</summary>
  
Hay dos condiciones a respetar en el maestro de clientes<!-- anagrafica cliente -->. 

La primera condición es el flag <b>Firma del documento</b>, que debe estar activo.                 
La segunda condición es el flag <b>Facturación electrónica firmada</b>, que es un flag de 3 estados:   

- Cuando es 1 para el cliente se prevé la firma, independientemente de otras opciones de configuración, por lo tanto siempre se exporta el archivo en la carpeta definida en la configuración documentos electrónicos para proceder con la firma;           

- Cuando es 0 para el cliente no se prevé la firma, independientemente de otras opciones de configuración, por lo tanto no se exporta el archivo a la carpeta de configuración documentos electrónicos, incluso si está configurada la carpeta;      

- Cuando es Null como en el caso anterior (que es la configuración por defecto) vale la configuración en ‘configuración documentos electrónicos’, es decir, si hay una ruta donde crear el archivo lo crea siempre, de lo contrario no lo crea.

</details>

<details>

  <summary>2. Para los pesos, al crear la factura electrónica, Fluentis me dice que no pueden superar los 9.999. ¿Cómo puedo eliminar este bloqueo?</summary>
  
Este bloqueo está relacionado con las reglas de la Facturación Electrónica, la cual no acepta PESOS superiores.
Para solucionar este problema es necesario escalar la unidad de medida<!-- UM --> si se supera el límite de 9999, de manera que se utilice una unidad de medida<!-- UM --> coherente y se obtengan los valores deseados.

</details>

<details>

  <summary>3. ¿Cómo es posible insertar el flag <b>Grupo IVA</b> en una <b>Declaración de intención</b> ya creada?</summary>
  
Es necesario realizar la siguiente actualización, insertando el id de la declaración de intención<!-- dichiarazione di intento -->.

update CA_DichIntMain set CADM_IsVatGroup = 1 
where CADM_Id = '[id de la declaración de intención<!-- dichiarazione di intento -->]'

</details>

<details>

  <summary>4. ¿Cómo puedo imprimir un libro mayor<!-- mastrino --> filtrando los movimientos<!-- movimenti --> según la competencia económica? De hecho, por ejemplo, al establecer el período requerido, en la impresión de los subcuentas, en los campos "desde fecha competencia" y "hasta fecha competencia" no se considera la competencia económica, sino que parece que se lee la fecha de competencia que en las registraciones contables se encuentra junto a la fecha de registro.</summary>

Confirmo que en los filtros, cuando dice desde fecha competencia hasta fecha competencia, se refiere precisamente a la fecha de competencia (por así decirlo "contable") del encabezado. Normalmente coinciden, pero se puede usar (aunque de hecho por pocos) para registrar, por ejemplo, asientos de ajuste con fecha de aprobación de balance que se refieren al 31/12, donde en esa fecha puede ser que el período ya esté bloqueado para la impresión definitiva del diario y, por tanto, no aceptaría la fecha de registro<!-- registrazione -->. En cuanto a la fecha de competencia económica, la impresión del libro mayor<!-- mastrino --> y más en general el sistema no está pensado para trabajar de ese modo. El procedimiento más correcto es calcular un cierre de cuentas del período (cierres intermedios) y lanzar los correspondientes asientos de ajustes de integración. Alternativamente, puedo recomendar usar la pantalla de visualización de cuentas donde, desde el object navigator, agregar las propiedades From AccrualDate ToAccrualDate que son las fechas de competencia económica (Desde A) y utilizar el filtro que está en la primera fila de la cuadrícula de detalle. Como otra alternativa, se debe ejecutar una personalización del informe y de la pantalla de inicio agregando filtros y campos, etc.

</details>

<details>

  <summary>5. ¿Por qué, al comparar un cierre de cuentas intermedia calculado del 1/1 al 31/12 con los resultados del módulo administrativo, en el cierre de controlling encuentro ajustes que en administración no se calculan?</summary>

El módulo controlling razona de manera más flexible, en algunas situaciones, respecto al módulo administrativo.
De hecho, es capaz de ajustar cualquier costo o ingreso (con tipo de cuenta compatible) incluso para cuotas de competencia económica en el pasado. Por ejemplo, si el costo registrado en el año X tiene competencia parcialmente (o totalmente) en el año X-1, al procesar el cierre del año X se tendrá igualmente un ajuste (por ejemplo un ajuste activo).
Hay que prestar especial atención a la **gestión de los ajustes realizados en el módulo administrativo**.
**Se recomienda ejecutar el cálculo y contabilización de ajustes y el cierre y reapertura de cuentas con reapertura de ajustes a través de los procedimientos automáticos, evitando hacer asientos manualmente**.
El procedimiento automático impone, de hecho, que a los asientos de reapertura de los ajustes la fecha sea igual al asiento original objeto de ajuste y la competencia económica de tal asiento sea igual al año X-1. De este modo se evita que, al procesar los cierres de período del año X, el software calcule más ajustes, ya que el saldo del año X (o período intermedio del año X) contiene el resultado correcto de competencia por efecto de la correcta reapertura del ajuste anterior.  

</details>

<details>

  <summary>6. ¿Por qué en la pantalla de gestión de ajustes (acumulaciones y ajustes) aunque estoy seguro de haber ingresado movimientos<!-- movimenti --> contables idóneos no calcula nada?</summary>

Después de asegurarse de haber ingresado efectivamente movimientos<!-- movimenti --> contables con fechas de competencia económica que crucen el ejercicio contable, y de haber utilizado cuentas de gasto con el tipo "por ajustar" (db Fast Start) o que tengan marcado el flag Servicio en la tabla *tipos de cuenta*, si aún no veo ninguna acumulación o ajuste propuesto, podría haber activado, inadvertidamente, el flag *Cierre mensual* en los parámetros generales de contabilidad. Este flag activa, de hecho, lógicas para ubicaciones extranjeras no italianas.

</details>

<details>

  <summary>7. He asociado un tipo de retención a un cliente para generar la factura electrónica completa con las etiquetas necesarias, ahora quiero contabilizar la factura pero veo que el asiento contable no es correcto y no reporta la retención, ¿por qué?</summary>

Dentro de la tabla *Tipos de Retención*, abre el tipo asociado al cliente en cuestión y verifica que el campo *Tipos de partidas* esté configurado en *Partidas netas*.

</details>

<details>

  <summary>8. Fluentis me propone al crear un nuevo asiento contable<!-- registrazione contabile --> siempre la última moneda utilizada con la causale seleccionada, ignorando la moneda por defecto del cliente o proveedor, ¿por qué?</summary>

Verifica la configuración del parámetro general en la tabla PARAM_Parameter código CA-RegCont-General_PurposeCurrencyByTemplate. Si el parámetro está configurado en 1 se propondrá la última moneda utilizada con la causale, si está configurado en 0 no se propondrá ninguna moneda siguiendo la lógica básica de la moneda de la empresa y luego la lectura de la moneda del cliente o proveedor.

</details>

<details>

  <summary>9. Tengo la necesidad de crear varias numeraciones para las facturas de venta. No queda claro si debo crear tantos registros iva ventas para cuantas numeraciones, o si el único registro ventas puede tener múltiples numeraciones.</summary>

La relación presente en el ciclo de contabilización de las ventas es Tipo Factura > Numeración > Causale contable asociada > Registro iva asociado a la causale. En un entorno estándar se nota que puede haber más tipos, pero si se asocian a la misma causale, que entonces tiene el mismo seccional iva, la numeración es la misma (compartida, así que la FT nº 1 para el tipo A y luego para el tipo B será la nº 2). En el caso de diferentes tipos factura con diferentes numeraciones concurrentes es conveniente diferenciar los seccionales iva y por lo tanto también asociarles diferentes causali, de lo contrario la numeración iva entrará en conflicto. Esto porque normalmente en las causali está activo una opción que propone el protocolo iva igual al número del documento (de modo que no se tenga que prestar atención a contabilizar las facturas en orden numérico). De lo contrario, es necesario desactivar dicha opción.

</details>

<details>

  <summary>10. ¿Cómo puedo gestionar una nota de crédito simplificada solo de iva TD08 para la recuperación, por ejemplo, del iva de un cliente en quiebra?</summary>

1. En la tabla Administración > **Tipos de Documento** verifica la presencia (y si es necesario agrega) de un tipo correspondiente. El campo Código / Descripción puede ser nombrado libremente, por ejemplo *Nota de crédito simplificada para recuperación de IVA*, o *Nota de crédito solo de IVA*, etc.; el flag **Nota de crédito** debe estar **activo** y el campo **Código para facturas electrónicas** debe decir *TD08*.
2. En la tabla Ventas > **Tipos de Facturas** verifica la presencia (y si es necesario agrega) de un tipo correspondiente. El campo Código / Descripción puede ser nombrado libremente, por ejemplo *Nota de crédito simplificada para recuperación de IVA*, o *Nota de crédito solo de IVA*, etc.; en el campo **Naturaleza de la Factura** DEBE seleccionarse la opción ***Nota de variación solo de IVA***; el campo **Tipo de documento** tendrá el tipo mencionado en el punto 1 y el campo **Causale** (contable) tendrá la causale correcta (a crear o seleccionar dentro de la tabla Administrativa > Causali de contabilidad general) para que el asiento contable sea adecuado para la situación. (por ejemplo será una causale que gestiona las notas de crédito con su correspondiente esquema contable).
3. Crear el nuevo documento en el módulo Venta > Facturas de Venta utilizando el tipo de factura creado en el punto 2.
    - El tipo particular configurado en el campo Naturaleza Factura del punto 2 permite ingresar, en la grilla de Artículos del documento, únicamente filas de tipo *Notas* donde se podrá ingresar una breve descripción del ajuste realizado, por ejemplo: "Documento emitido conforme al art. 26, párrafo 3 bis, D.P.R. n. 633/1972, únicamente para la recuperación del IVA".
    - Ampliando la sección *Tipo de Referencia* del *Encabezado* del documento es posible, además del campo Tipo de referencia, agregar también el detalle de la factura previa que se ajusta.
    - En este tipo particular de Nota de crédito la posibilidad de gestionar los valores está limitada exclusivamente a la sección **Resumen** y precisamente en la grilla *Resumen IVA* donde se moverá directamente el campo **Impuesto** (en negativo), además del campo (código) IVA (ej. 22%), dejando en cero la base imponible (se trata, de hecho, de una nota de crédito solo de iva).
4. Generar el archivo xml y enviar la factura electrónica como es habitual (según las instrucciones de la guía en línea).
5. Contabilizar la Nota de crédito como de costumbre. Asociando una causale contable típica para las notas de crédito Italia, por ejemplo (presente en la lista de ambientes Fast Start), el asiento contable se ejecutará igualmente de forma adecuada moviendo, en la sección iva, solo el impuesto y no la base imponible y en la sección contable revirtiendo del crédito hacia el cliente (en Haber) el valor del iva que se deduce de la cuenta iva ventas (en Debe) en virtud de la recuperación realizada.
</details>

<details>

  <summary>11. ¿Cómo puedo gestionar una "Comunicación" TD29 para declarar una facturación omitida o irregular por parte del proveedor?</summary>

1. En la tabla Administración > **Tipos de Documento** verifica la presencia (y si es necesario agrega) de un tipo correspondiente. El campo Código / Descripción puede ser nombrado libremente, por ejemplo *Comunicación por facturación incorrecta del proveedor*, el flag **Autofactura** debe estar **activo**, el campo **Código para facturas electrónicas** debe decir *TD29*.
2. En la tabla Ventas > **Tipos de Facturas** verifica la presencia (y si es necesario agrega) de un tipo correspondiente. El campo Código / Descripción puede ser nombrado libremente, por ejemplo *Comunicación por facturación incorrecta*; en el campo **Naturaleza de la Factura** debe seleccionarse la opción ***Factura***; el campo **Tipo documento** tendrá el tipo mencionado en el punto 1. En el campo **Causale** (contable) no necesariamente debe asociarse uno dado que es solo una comunicación de omisión de facturación por parte del proveedor, sin relevancia a efectos IVA.
3. Crear el nuevo documento en el módulo Venta > Facturas de Venta utilizando el tipo de factura creado en el punto 2.
   - Ampliando la sección *Tipo de Referencia* del *Encabezado* del documento es posible, si es necesario, además del campo Tipo de referencia, agregar también el detalle de la factura previa que se ajusta.
   - En el campo Cedente, en el encabezado del documento, ingresar los datos del Proveedor, mientras que en el campo Cliente ingresar los datos de nuestra empresa creada especialmente para autofacturas.
   - En la sección Artículos del documento, insertar una fila con, por ejemplo, la descripción de la mercancía no facturada y los valores correspondientes, o, si se trata de ajuste por factura incorrecta o irregular, el valor del ajuste.
4. Crear el archivo xml y enviarlo con los procedimientos habituales.
</details>

<details>
  <summary>12. ¿Cómo puedo desbloquear una liquidación periódica de IVA impresa como definitiva?</summary>

1. En el formulario Administración > DECLARACIONES > **Pagos IVA**, donde se reportan todos los períodos para los cuales existe la liquidación definitiva, seleccionar el período (o más de uno) por desbloquear y pulsar el botón ***Eliminar Liquidaciones IVA***.
2. Normalmente, si cuando se hizo la liquidación definitiva se habilitó la opción para asientos automáticos de contrapartida, se mostrará un mensaje que confirma la eliminación automática de las contrapartidas. Además, se mostrará un mensaje de advertencia que recuerda que se debe borrar manualmente el registro (para el período correspondiente) presente en el formulario **Declaración iva periódica** que se creó automáticamente al ejecutar la liquidación definitiva.
3. Como se indicó en el punto anterior, borrar manualmente el registro presente en el formulario **Declaración iva periódica** para el período correspondiente al desbloqueado. Se recuerda que en esta tabla se almacenan los datos para la gestión de los campos manuales de la liquidación (traslado de crédito, compensación, etc.)
4. Retroceder el contador de páginas y la fecha de la última impresión para el seccional IVA sobre el cual se imprimen las liquidaciones periódicas (generalmente código RIE en la base de datos FastStart). Acceder a la tabla Registros IVA, localizar el seccional a restaurar (ej. *RIE*) y corregir manualmente, para el año corriente, en la grilla inferior de detalle, los campos **Última página impresa**, **Fecha última impresión**.
5. Si las liquidaciones periódicas se imprimen sumadas en un seccional iva ordinario (por ejemplo en ventas o compras), y en todos los casos en los que es necesario modificar movimientos iva para los cuales, además de la liquidación definitiva, también se han impreso en definitivo los seccionales, desde la tabla **Registros IVA** pulsar el botón en la cinta **Anular impresiones definitivas**. Aparecerá un popup donde seleccionar y confirmar el período por desbloquear y el seccional iva a desbloquear. En caso de desbloqueo de varios períodos para un seccional determinado, se recomienda proceder de forma consecutiva y desbloqueando todos los períodos intermedios, procediendo del más reciente al más antiguo. Proceda luego con la restauración manual de los datos de *última página impresa, última fecha de impresión y último protocolo IVA*.

</details>

<details>

  <summary>13. ¿Cómo procedo para desbloquear la impresión definitiva del Libro Diario?</summary>

1. Cuando se creó la impresión definitiva, en el formulario de impresión **Libro Diario** se lanzó la impresión activando el flag *Definitiva*. En ese momento, recordemos, también se ejecutaba un control con su correspondiente mensaje de advertencia, si había asientos contables anteriores a las fechas seleccionadas en el filtro de impresión, que aún no se habían impreso como definitivos. De todos modos, era posible ignorar la advertencia. El período impreso como definitivo quedaba bloqueado para posibles cambios en los asientos contables.
2. **Para desbloquear** un período impreso como definitivo, acceder al formulario Configuración > Parámetros > Administración > **Parámetros de contabilidad** del año corriente o aquel a desbloquear y utilizar el botón **Anular impresiones definitivas**. Aparecerá un popup donde especificar el período (de fecha a fecha) para ejecutar el desbloqueo. El desbloqueo consiste, técnicamente, en poner los asientos afectados en el período en estado no definitivo (campo visible solo en la base de datos o arrastrando la propiedad IsPrintedInJournal - Impreso en libro diario, en un formulario que apunte al objeto FSPosting como por ejemplo el formulario *Asientos contables* accesible desde el menú Administración > Asientos > Asientos), por ello se recomienda actuar de manera ordenada y consecutiva evitando dejar períodos no definitivos, los cuales serán igualmente señalados por la advertencia antes mencionada.
3. Después del desbloqueo es necesario restaurar manualmente los datos almacenados en el formulario de Parámetros de contabilidad al hacer la impresión definitiva:
    - Fecha de la última impresión libro diario: retrocediéndola a la última fecha de registro no desbloqueada
    - Última página / línea: retrocediéndola a la última no desbloqueada
    - Saldo Debe / Haber: eliminando los valores, que luego se recrearán automáticamente con la nueva impresión definitiva.
</details>

<details>

  <summary>14. ¿Cómo puedo cerrar forzosamente una partida abierta?</summary>

El estado de una partida, (abierta, cerrada, parcialmente abierta) es calculado por el sistema y no puede ser forzado actuando directamente sobre el campo de Estado de la partida, ya que sería recalculado de inmediato.
La partida se considera *cerrada* (y el sistema detecta este estado) solo si existe un pago para esa partida (enlazado a ésta y con el mismo número).

Por lo tanto, la forma correcta para cerrar una partida creada extra-contablemente, o que ha quedado abierta porque un asiento contable de pago no generó también el pago a nivel de partidas, consiste en utilizar el siguiente procedimiento.

1. Acceder al formulario Administración > Partidas > **Pagos**
2. Crear un nuevo pago con el botón **Nuevo**
3. Inmediatamente después de abrir el formulario con los datos del nuevo pago, en vez de rellenar manualmente, utilizar el comando **Crear desde partidas / Pagos** que mostrará un popup para buscar y seleccionar la partida abierta que se desea cerrar. En el popup están presentes los habituales campos de búsqueda de partidas, basta con seleccionar con el mouse la partida a cerrar y pulsar el botón **Seleccionar**. Se crearán automáticamente los enlaces entre partida y pago de forma correcta. El estado de la partida se recalculará automáticamente como *Cerrada*.

</details>

<details>

  <summary>15. ¿Cómo puedo restaurar una letra de cambio bancaria ya presentada o acreditada?</summary>

El procedimiento de emisión de una letra de cambio bancaria y su posterior contabilización y presentación para cobro supone una serie de pasos secuenciales. Por lo tanto, en caso de intentar restaurar (rollback), por ejemplo, la creación de una letra de cambio bancaria que ya ha sido presentada en el banco o acreditada, el software impedirá esta operación mostrando un mensaje de advertencia.

Todas las fases de la creación y presentación con posterior acreditación, así como las operaciones de contabilización, pueden ser restauradas, pero es necesario actuar en el orden lógico correcto, partiendo de las operaciones ejecutadas más recientemente hasta llegar a las primeras fases.

Si, por lo tanto, la secuencia de operaciones realizadas para la creación es la siguiente:

- Contabilización de la factura de venta con apertura de partida
- Creación automática de la Letra de cambio bancaria desde las partidas abiertas
- Contabilización de la emisión de la letra de cambio bancaria (a menudo realizada junto con el punto anterior - wizard)
- Creación de la remesa de presentación e inserción de los efectos (letras de cambio) en la remesa
- Contabilización de la presentación de la remesa
- Contabilización del Acreditamiento de Letras de cambio bancarias

El rollback deberá seguir este orden

- Restaurar la contabilización del acreditamiento
- Restaurar la contabilización de la remesa
- Eliminar el efecto (letra de cambio bancaria) de la remesa (que podría no ser eliminable si contiene también otros efectos) seleccionándolo desde dentro de la remesa y pulsando la tecla SUPR
- Restaurar la contabilización de efectos (ANTES DEL SIGUIENTE PASO)
- Restaurar la creación automática de efectos desde partidas
 
Recordamos que los procedimientos de restauración son accesibles desde los mismos formularios donde se ha realizado la creación, en la pestaña correspondiente, siempre presente.

</details>