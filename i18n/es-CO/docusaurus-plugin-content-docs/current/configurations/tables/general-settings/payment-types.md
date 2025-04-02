---
title: tipi pagamento
sidebar_position: 7
---
:::tip[Inicio Rápido (FAst Start)]
La tabla está interesada en el procedimiento de [**Inicio Rápido (Fast Start)**](/docs/guide/fast-start).

En caso de que se desee configurar manualmente, consulte la lista de verificación de la página enlazada.
:::

La tabla contiene los tipos de pago que se deben utilizar en el sistema de gestión.

Permite ingresar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

Para insertar nuevos registros, haga clic en la primera fila vacía en la cuadrícula superior o presione el botón **nuovo**. 

## Tipo de pago (Tipo pagamento)

**pagamento**: es el código alfanumérico de reconocimiento;  

**descrizione**: es la descripción del pago, normalmente reportada en varios impresos del ciclo activo/pasivo;  

**importo di bollo**: importe del timbre;  

**Porcentaje de Pago (Percentuale Pagamento)**: permite asociar un tipo (llamándolo desde la tabla Tipos de Descuento) y el porcentaje de descuento asociado a las líneas del artículo del documento en relación con el tipo de pago; por ejemplo, es posible definir un descuento del 5% en caso de que se utilice el tipo de pago Efectivo (Contanti).

:::note Nota
Este es un descuento que reduce la base imponible de la línea, junto con otros descuentos derivados de listas de precios y condiciones comerciales en el registro.
:::

**Tipo de descuento financiero / Valor de descuento financiero (Tipo sconto finanziario / Valore sconto finanziario)**: relacionados con la fecha de vencimiento de la factura, que no afectan el total del documento pero se aplican al momento de registro del cobro.

**natura effetto**: permite definir el tipo de efecto eventualmente conectado o de otro tipo de pago. Actualmente, el campo tiene solo valor informativo sin automatizaciones particulares relacionadas, excepto para el tipo Recibo bancario (Ricevuta bancaria) que identifica el tipo de pago adecuado para la posterior gestión de la creación del efecto.

**Código intra serv. (Cod. intra serv.)**: código del pago a ingresar en las declaraciones intrastat.

**codice per fatture elettroniche**: código identificativo del tipo de pago para las facturas electrónicas y las facturas a la administración pública (por ejemplo, MP01, MP02, etc... ver instrucciones ministeriales para la elaboración de facturas electrónicas).

**nazione**: filtro para hacer visible ese tipo de pago solo a las empresas de la base de datos que tengan la nacionalidad especificada (útil ya que la tabla, al ser básica, es visible para todas las empresas de la misma base de datos).

### Idiomas (Lingue)

Para cada tipo de pago seleccionado en la cuadrícula superior, se pueden definir descripciones en idioma: utilizables para impresiones personalizadas.

### Tipos de efectos (Tipi effetti)

Para cada tipo de pago seleccionado en la cuadrícula superior, es posible preconfigurar el tipo de efecto a crear desde la partida/vencimiento en el módulo *portafoglio effetti*.

:::danger Atención
La asociación pago - efecto sirve para que en la máscara de creación de efectos solo se visualicen las partidas coherentes para la creación del efecto. Por ejemplo, la configuración correcta podría ser asociar al tipo de pago RiBa la tipología de efecto Recibo Bancario, y al tipo de pago Cambiale el tipo de efecto Cambiale; de este modo, no se visualizarán, por ejemplo, las partidas abiertas con el tipo de pago Transferencia (Bonifico) en la máscara de creación de efectos desde las partidas o las fechas, evitando generar datos incoherentes.
:::

Para todo lo no detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).