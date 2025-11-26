---
title: Declaración de intención
sidebar_position: 5
ai_generated: true
---

Desde este formulario es posible ingresar los registros para las declaraciones de intención recibidas o emitidas para el año de referencia, o bien buscar y modificar las ya existentes<!-- registri per le dichiarazioni di intento ricevute o emesse per l'anno di riferimento, oppure ricercare ed entrare in modifica di quelli già presenti -->.

Presione el botón **Nuevo<!-- Nuovo -->** en la barra ribbon para ingresar un nuevo registro, o, luego de presionar el botón **Buscar<!-- Ricerca -->**, haga doble clic en el registro deseado (o presione el botón **Modificar<!-- Modifica -->** en la barra ribbon) para ingresar nuevas declaraciones de intención dentro del registro seleccionado.

 

 
### Cabecera del registro<!-- Testata Registro -->
La zona superior del formulario correspondiente al registro muestra los datos del propio registro, mientras que la zona inferior contiene los detalles de cada declaración de intención referida al registro.

**Registro de declaración<!-- Registro dichiarazione -->**: nombre del registro, asignable libremente;

**Tipo**: indica si el registro es de tipo cliente (declaraciones de intención recibidas de los clientes) o proveedor (declaraciones emitidas a los proveedores gracias a la condición de exportador habitual de la empresa en uso);

**Fecha de inicio / Fecha de fin / Año<!-- Data inizio / Data fine / Anno -->**: extremos de validez del registro.


---
### GESTIÓN DEL GRUPO IVA<!-- GESTIONE DEL GRUPPO IVA -->

:::tip Info: el grupo IVA<!-- il gruppo iva -->
Con la introducción de esta norma, se prevé la posibilidad, para empresas vinculadas por intereses financieros, económicos y organizativos, de crear un único grupo, considerado como un solo contribuyente (solo a fines de IVA) frente a la administración fiscal. Por tanto, estará dotado de un único número de identificación fiscal (IVA). Las empresas que pertenecen al grupo facturarán las operaciones hacia terceros con una identificación fiscal común, la identificación fiscal del grupo. En cambio, las transferencias de bienes y prestaciones de servicios intercambiadas entre empresas internas al grupo no serán relevantes a efectos de la base imponible del IVA. Como consecuencia, todas las operaciones realizadas por uno de los sujetos del grupo se consideran efectuadas por el grupo en su conjunto. La factura y los **otros documentos, INCLUIDAS LAS DECLARACIONES DE INTENCIÓN<!-- INCLUSE LE DICHIARAZIONI DI INTENTO -->**, son emitidos por el representante del Grupo o por los participantes, indicando en los mismos además del número de identificación fiscal del Grupo también el código fiscal del participante que realizó la operación.
:::

:::note **FLAG Grupo IVA<!-- Gruppo iva -->**: 
habilita la posibilidad de ingresar declaraciones de intención relativas a un grupo IVA<!-- gruppo iva -->. Su activación no influye en la inserción de declaraciones ordinarias y se recomienda mantenerla siempre activa.

**CAMPO CONFIGURADO POR DEFECTO COMO ACTIVO Y NO DEBE DESACTIVARSE, OCULTO EN LAS VERSIONES FLUENTIS 2021 Y POSTERIORES<!-- CAMPO SETTATO DI DEFAULT COME ATTIVO E DA NON DISATTIVARE, NASCOSTO SULLE VERSIONI FLUENTIS 2021 E SUCCESSIVE -->**
:::


**Campo Nomenclatura (en la cuadrícula de detalle)**: el campo es relevante para la gestión del grupo IVA, se completa con la ficha del grupo IVA existente en el cliente o proveedor (pestaña información fiscal) o se puede editar manualmente para ingresar la referencia a la ficha del grupo IVA al que pertenece el cliente o proveedor;

---

 
### Detalle de declaraciones de intención<!-- Dettaglio dichiarazioni di intento -->

**Para ingresar las declaraciones de intención dentro del registro, escriba directamente en la cuadrícula inferior.**

**Fecha de Protocolo<!-- Data Protocollo -->**: campo no obligatorio, activo solo para las declaraciones del registro de tipo clientes, introduzca la fecha asignada por el cliente en la declaración de intención;

**Prot**: campo no obligatorio, activo solo para las declaraciones del registro de tipo clientes, ingrese el número de protocolo asignado por el cliente en la declaración de intención;

**Fecha de Nuestro Protocolo<!-- Data Ns. Protocollo -->**: fecha del protocolo asignado internamente al registrar la declaración de intención en el registro, esta fecha es el campo de referencia para la validez inicial en la aplicación en los documentos de compra/venta; (también se utiliza si se llenan los campos "ref. identificativo<!-- rif identificativo -->" y "ref. progresivo<!-- rif progressivo -->") Se recomienda completarlo igualmente también en la gestión de facturas clientes para el tag de la factura electrónica.

**Nuestro Protocolo<!-- Ns. Protocollo -->**: protocolo asignado internamente al momento del registro de la declaración de intención (**ATENCIÓN:** NECESARIO PARA LA CORRECTA VALORIZACIÓN DEL TAG DE LA CARTA DE INTENCIÓN EN LA FACTURA ELECTRÓNICA DE VENTA);

**Cuenta<!-- Conto --> / Subcuenta<!-- Sottoconto --> / Descripción**: ingrese aquí la cuenta del titular de la declaración de intención (cliente o proveedor);

**Nomenclatura**: el campo solo es relevante en registros que gestionan el grupo IVA, se completa desde la ficha del grupo IVA insertada en el cliente (pestaña información fiscal) o es la ficha propia del cliente, pero es editable manualmente para poder insertar la referencia a la ficha del grupo IVA al que pertenece el cliente;

:::danger Importante
**Fecha de inicio / Fecha de fin<!-- Data inizio / Data fine -->**: NO llene estos campos para las declaraciones de intención en curso de validez. A raíz de las últimas modificaciones normativas ya no se permiten declaraciones de intención válidas sin límites de valor para un determinado período. Por tanto, para que la declaración de intención sea correctamente detectada y esté activo el control sobre el límite de valor y la sustitución del código IVA en la factura, el campo no debe estar llenado. En el caso de que el cliente anule la declaración (o si se anula la validez a un proveedor), se podrá indicar solo la fecha de fin de validez, a partir de la cual se bloqueará la lectura de la declaración para los documentos posteriores;
:::

:::danger Importante
**Op. individual<!-- Singola op. --> / Tot. Op.**: active alternativamente uno de los dos flags según si la declaración de intención es válida solo para una operación individual o bien válida hasta cubrir el valor ingresado en el campo siguiente.
:::

**Importe<!-- Importo -->**: ingrese aquí el importe de la declaración de intención. Este valor será controlado con el fin de que no sea superado por la suma de los totales de las facturas emitidas en declaración de intención desde la fecha del protocolo;

**IVA Plaf. / Desc. IVA Plaf.**: ingrese aquí el código de IVA de exención según la vigencia de la declaración de intención. Este código de IVA reemplazará automáticamente la tasa ordinaria en la remisión/factura hasta cubrir el valor de la declaración de intención;

**IVA prev. / Desc. IVA prev.<!-- IVA prec. / Descr IVA prec. -->**: ingrese aquí el código de IVA ordinario que será reemplazado por el código de IVA ingresado en el campo anterior;

**Notas<!-- Annotazioni -->**: campo libre para notas;

**Aduana<!-- Dogana -->**: active el flag si la declaración de intención se refiere a una importación y ha sido emitida hacia la aduana;

**Archivo Emitido<!-- File Emesso -->**: flag completado automáticamente por el procedimiento de exportación del archivo telemático de las declaraciones emitidas hacia proveedores. Seguido por las referencias del archivo creado (**Nombre de archivo<!-- Nome file -->** y **Carpeta<!-- Cartella -->**)

**Ref. identificativo<!-- Rif. identificativo -->**: ingrese aquí la primera parte del protocolo telemático de transmisión a la agencia tributaria de la declaración de intención;

**Ref. progresivo<!-- Rif. progressivo -->**: ingrese aquí la segunda parte del protocolo telemático (progresivo de fila de la declaración dentro del suministro telemático; por ejemplo 000001 en el caso de transmitir una única declaración de intención);


N.B.
La modificación respecto al protocolo telemático ha involucrado tanto la leyenda a reportar en la impresión de la factura como el archivo xml para la factura electrónica, por lo que se reportará automáticamente en lugar de los campos "Nuestro protocolo<!-- Ns protocollo -->"/ "Su protocolo<!-- Vs protocollo -->".

Se recomienda igualmente continuar completando estos campos, junto al campo “Fecha de nuestro protocolo<!-- Data ns protocollo -->”, ya que en ausencia del protocolo telemático dichos campos igualmente serán incluidos.


**Detalles para el archivo<!-- Dettagli per il File -->**: habilita los siguientes campos **Integrativa** (vinculado a **Importe declaración<!-- Importo dichiarazione -->** - que se está integrando) y **Descripción mercancía** que representan posibles datos necesarios para los archivos enviados a los proveedores. Se recomienda consultar la normativa específica sobre emisión de declaraciones de intención.

### Creación de archivo telemático<!-- Creazione file telematico -->

Para generar el archivo telemático a fin de transmitir las declaraciones emitidas presione el botón ***Exportar<!-- Esporta -->*** presente en la barra ribbon.


El archivo generado será almacenado en el gestor documental (abrir mediante el botón con el clip) y será posible descargar una copia en el PC local (mediante el comando ***Guardar adjunto<!-- Salva allegato -->***). 

 
### Gestión de declaraciones múltiples para un solo cliente / proveedor<!-- Gestione dichiarazioni multiple per singolo cliente / fornitore -->

**POSIBILIDAD DE VINCULAR LA DECLARACIÓN DE INTENCIÓN INDIVIDUAL EN LOS DOCUMENTOS DE COMPRA/VENTA<!-- POSSIBILITA' DI AGGANCIO DELLA SINGOLA DICHIARAZIONE DI INTENTO NEI DOCUMENTI DI ACQUISTO/VENDITA -->** 

Es posible seleccionar específicamente, sobre todo en presencia de varias declaraciones válidas simultáneamente, qué declaración vincular al documento.

Se puede elegir la declaración de intención a la que hacer referencia de entre las ingresadas, para un determinado aviso de entrega (DDT) o factura llamándola desde la combo box "Detalle declaraciones<!-- Dettaglio dichiarazioni -->", gestionando de forma específica el texto impreso en factura y en el archivo xml.

![](/img/it-it/finance-area/declarations/declarations/intent-declaration/image04.png)

 
### Impresiones<!-- Stampe -->

**IMPRESIÓN DE CONTROL DE LOS VALORES RESIDUALES DE LAS DECLARACIONES DE INTENCIÓN<!-- STAMPA DI CONTROLLO DEI VALORI RESIDUI DELLE DICHIARAZIONI DI INTENTO -->**

Tanto desde el formulario de búsqueda de registros existentes como desde dentro del registro seleccionado (entrando en edición) es posible también generar una impresión de control (llamada ***Verificar declaraciones de intención<!-- Verifica dichiarazioni di intento -->***) que resume los importes de las declaraciones de intención recibidas y el valor de la facturación para monitorear los límites aún facturables para cada declaración.

Existe una versión adicional del informe (seleccionable en la lista desplegable) llamada ***Verificar declaración de intención con detalles<!-- Verifica dichiarazione di intento con dettagli -->*** que reporta los detalles de cada documento vinculado con la declaración.


### Gestión de referencia a cartas de intención de años anteriores<!-- Gestione riferimento a lettere di intento anni precedenti -->

Puede ocurrir la siguiente situación: emitir una nota de crédito a un cliente haciendo referencia a la declaración de intención del año (o de un año) anterior. 

El cliente puede ya haber emitido incluso una declaración de intención en el año en curso. Por ejemplo, la nota de crédito puede ser una corrección de una factura del año anterior por mercancía enviada también el año anterior, por lo que hay que incluir la referencia a la declaración de intención anterior.

En la cabecera de la nota de crédito utilice los campos de referencia a la factura que se está rectificando:

Expanda la sección **Tipo de referencia<!-- Tipo riferimento -->** y complete **Referencia FT<!-- Riferimento FT -->** (un campo para el número de factura y el siguiente para la fecha de la factura).

Hecho esto, las declaraciones de intención disponibles en la lista desplegable serán **también** las del registro del año anterior (o en todo caso la indicada en la fecha de la referencia)

![](/img/it-it/finance-area/declarations/declarations/intent-declaration/image06.png)

### **VIDEO TUTORIALES<!-- VIDEO TUTORIALS -->**

<iframe width="560" height="315" src="https://www.youtube.com/embed/rZM6NBOpIxQ" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>