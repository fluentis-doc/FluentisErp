---
title: dichiarazione di intento
sidebar_position: 5
---

Desde este formulario es posible ingresar los registros para las declaraciones de intención recibidas o emitidas para el año de referencia, o buscar y modificar las que ya están presentes.

Presione el botón **nuovo** en la barra de menú para insertar un nuevo registro, o bien, después de presionar el botón **ricerca**, haga doble clic en el registro deseado (o presione el botón **modifica** en la barra de menú) para insertar nuevas declaraciones de intención dentro del registro seleccionado.

### Encabezado del Registro (Testata Registro)
La parte superior del formulario correspondiente al registro muestra los datos del registro en sí, mientras que la parte inferior contiene los detalles de cada declaración de intención referida al registro.

**registro dichiarazione**: nombre del registro asignable libremente;  

**tipo**: indica si el registro es de tipo cliente (declaraciones de intención recibidas de los clientes) o proveedor (declaraciones emitidas a los proveedores en virtud de la condición de exportador habitual de la empresa en uso);  

**Fecha inicio / Fecha fin / Año (Data inizio / Data fine / Anno)**: extremos de validez del registro.


---
### GESTIÓN DEL GRUPO IVA (GESTIONE DEL GRUPPO IVA)

:::tip Info: el grupo iva (Info: il gruppo iva)
Con la introducción de tal norma, se previó la posibilidad, para las empresas conectadas por intereses financieros, económicos y organizativos, de crear un grupo único, considerado como un solo contribuyente (a efectos de IVA) frente al fisco. Por lo tanto, contará con un único número de Registro de IVA. Las empresas que forman parte del grupo facturarán las operaciones a terceros con un Registro de IVA común, el Registro de IVA del grupo. Por otro lado, las cesiones de bienes y las prestaciones de servicios intercambiados entre las empresas del grupo no se considerarán a efectos de la base imponible del IVA. Como consecuencia de esto, todas las operaciones realizadas por uno de los sujetos del grupo se consideran como realizadas por el grupo entero. La factura y **otros documentos, INCLUIDAS LAS DECLARACIONES DE INTENTO (altri documenti, INCLUSE LE DICHIARAZIONI DI INTENTO)**, son emitidos por el representante del Grupo o por los participantes, indicando en estos además del número de Registro de IVA del Grupo, también el número de identificación fiscal del sujeto participante que ha realizado la operación.
:::

:::note **FLAG Grupo iva (FLAG Gruppo iva)**: 
habilita la posibilidad de insertar declaraciones de intención referidas a un grupo IVA. Su activación no afecta la inserción de declaraciones ordinarias y se recomienda siempre su activación.

**CAMPO CONFIGURADO POR DEFECTO COMO ACTIVO Y NO DESACTIVAR, OCULTO EN LAS VERSIONES FLUENTIS 2021 Y SUCESIVAS (CAMPO SETTATO DI DEFAULT COME ATTIVO E DA NON DISATTIVARE, NASCOSTO SULLE VERSIONI FLUENTIS 2021 E SUCCESSIVE)**
:::


**Campo Nomenclatura (nella griglia di dettaglio)**: el campo es relevante para la gestión del grupo iva, se valora con la información del grupo iva ingresada en el cliente o proveedor (pestaña información fiscal) o se puede editar manualmente para ingresar la referencia a la información del grupo iva de pertenencia del cliente o proveedor;  

---

### Detalle de declaraciones de intención (Dettaglio dichiarazioni di intento)

**Para insertar las declaraciones de intención dentro del registro, escriba directamente en la cuadrícula inferior.**

**data protocollo**: campo no obligatorio activo solo para las declaraciones del registro de tipo clientes, ingresar la fecha proporcionada por el cliente en la declaración de intención;  

**Prot**: campo no obligatorio activo solo para las declaraciones del registro de tipo clientes, ingresar el protocolo asignado por el cliente en la declaración de intención;  

**Fecha Ns. Protocolo (Data Ns. Protocollo)**: fecha del protocolo asignada internamente al momento de registrar la declaración de intención en el registro, esta fecha sirve como campo de referencia para la validez inicial para la aplicación en los documentos de compra/venta; (utilizado incluso si están valorados los campos "ref identificativo" y "ref progresivo"). Se recomienda valorarlo de todos modos también en la gestión de las facturas de clientes para la gestión de la etiqueta de la factura electrónica.

**Ns. Protocolo (Ns. Protocollo)**: protocolo asignado internamente al momento de registrar la declaración de intención en el registro (**ATENCIÓN (ATTENZIONE):** NECESARIO PARA LA VALORIZACIÓN CORRECTA DE LA ETIQUETA DE LA CARTA DE INTENTO EN LA FACTURA ELECTRÓNICA DE VENTA);  

**Cuenta / Subcuenta / Descripción (Conto / Sottoconto / Descrizione)**: ingresar aquí la cuenta del sujeto titular de la declaración de intención (cliente o proveedor);  

**nomenclatura**: el campo es relevante solo en los registros que gestionan el grupo iva, se valoriza con la información del grupo iva ingresada en el cliente (pestaña información fiscal) o con la información misma del cliente, pero es editable manualmente para poder ingresar la referencia a la información del grupo iva de pertenencia del cliente;  

:::danger Importante (Importante)
**data inizio / data fine**: NO complete estos campos para las declaraciones de intención en curso de validez. A raíz de las últimas modificaciones normativas, no se admiten más declaraciones de intención válidas sin limitaciones de valor por un período determinado. Por lo tanto, a fin de que se registre correctamente la declaración de intención y se pueda activar el control sobre el límite de valor y la sustitución del código iva en la factura, el campo no debe ser completado. En caso de que el cliente cancele la declaración (o se cancele la validez a un proveedor), será posible indicar solo la fecha de fin de validez, a partir de la cual se bloqueará la lectura de la declaración para los documentos posteriores;
:::

:::danger Importante (Importante)
**Operación única / Total Op. (Singola op. / Tot. Op.)**: activar alternativamente uno de los dos indicadores dependiendo de si la declaración de intención es válida solo para una única operación o si es válida hasta concurrencia con el valor ingresado en el campo siguiente.
:::

**importo**: ingresar aquí el importe de la declaración de intención. Este valor será controlado para que no supere la suma de los totales de las facturas emitidas en declaración de intención a partir de la fecha de la protocolización;  

**IVA Plaf. / Descr IVA Plaf. (IVA Plaf. / Descr IVA Plaf.)**: ingresar aquí el código iva de exención debido a la vigencia de la declaración de intención. Este código iva reemplazará automáticamente a la tasa ordinaria en el ddt/factura hasta el valor de la declaración de intención;  

**IVA prec. / Descr IVA prec. (IVA prec. / Descr IVA prec.)**: ingresar aquí el código iva ordinario que será reemplazado por el código iva ingresado en el campo anterior;  

**annotazioni**: campo de notas libre;  

**dogana**: activar el indicador si la declaración de intención se refiere a una importación y ha sido emitida a la aduana;  

**file emesso**: indicador poblado automáticamente por el procedimiento de exportación del trazado telemático de las declaraciones emitidas a los proveedores. Seguido por las referencias del archivo creado (**Nombre archivo** y **Carpeta**)  

**rif. identificativo**: ingresar aquí la primera parte del protocolo telemático de transmisión a la agencia de ingresos de la declaración de intención;  

**Ref. progresivo (Rif. progressivo)**: ingresar aquí la segunda parte del protocolo telemático (progresivo de línea de la declaración dentro del suministro telemático; por ejemplo, 000001 en el caso de que se transmita una sola declaración de intención);  

N.B.  
La modificación respecto al protocolo telemático ha afectado tanto la terminología a incluir en la factura como el trazado xml para la factura electrónica, por lo que se registrará automáticamente en lugar de los campos "Ns protocolo" / "Vs protocolo".  

Se recomienda de todos modos seguir valorando dichos campos, junto con el campo “Fecha ns protocolo”, ya que en ausencia de la inclusión del protocolo telemático, tales campos se registrarán de todos modos. 


**dettagli per il file**: habilita los campos siguientes **integrativa** (conectado a **importo dichiarazione** - que se integra) y **descrizione merce**, que representan posibles datos necesarios para los trazados emitidos a los proveedores. Se aconseja consultar la normativa específica sobre la emisión de declaraciones de intención.

### Creación de archivo telemático (Creazione file telematico)

Para generar el archivo telemático con el fin de transmitir las declaraciones emitidas, presione el botón **esporta*** presente en la barra de menú.


El archivo generado será almacenado en el sistema documental (abrir mediante el botón con el clip) y será posible descargar una copia en la PC local (a través del comando **salva allegato***).  

### Gestión de declaraciones múltiples por cliente / proveedor (Gestione dichiarazioni multiple per singolo cliente / fornitore)

**POSIBILIDAD DE UNIR LA DECLARACIÓN DE INTENTO ÚNICA EN LOS DOCUMENTOS DE COMPRA/VENTA (POSSIBILITA' DI AGGANCIO DELLA SINGOLA DICHIARAZIONE DI INTENTO NEI DOCUMENTI DI ACQUISTO/VENDITA)**

Es posible seleccionar específicamente, especialmente en presencia de varias declaraciones válidas simultáneamente, cuál declaración vincular al documento.

Es posible seleccionar la declaración de intención a la que hacer referencia entre las ingresadas para un determinado DDT o factura, llamándola desde la caja combinada "Detalle declaraciones", gestionando así específicamente la cadena registrada en la impresión de factura y en el trazado xml.

![](/img/it-it/finance-area/declarations/declarations/intent-declaration/image04.png)

### Impresiones (Stampe)

**IMPRIMIR CONTROL DE LOS VALORES RESTANTES DE LAS DECLARACIONES DE INTENTO (STAMPA DI CONTROLLO DEI VALORI RESIDUI DELLE DICHIARAZIONI DI INTENTO)**

Desde el formulario de búsqueda de los registros existentes, así como desde dentro del registro seleccionado (entrando en modificación), también es posible elaborar una impresión de control (denominada ***Verificación de declaraciones de intención (Verifica dichiarazioni di intento)***), que resume los importes de las declaraciones de intención recibidas y el valor del volumen de negocios para mantener bajo control los límites aún facturables para cada declaración.

Hay presente una versión adicional de impresión (seleccionable desde el menú desplegable) denominada ***Verificación de declaración de intención con detalles (Verifica dichiarazione di intento con dettagli)*** que muestra los detalles de cada documento conectado con la declaración.


### Gestión de referencia a cartas de intención de años anteriores (Gestione riferimento a lettere di intento anni precedenti)

Puede darse el caso de gestionar esta situación: emitir una nota de crédito a un cliente haciendo referencia a la declaración de intención del año (o de un año) anterior.

El Cliente puede haber emitido también una declaración de intención en el año en curso. Por ejemplo, la nota de crédito puede ser una corrección de una factura del año anterior por mercancía enviada siempre en el año anterior, por lo que se debe incluir la referencia a la declaración de intención anterior.

En el encabezado de la nota de crédito utilizar los campos para las referencias a la factura que se está rectificando:

Expandir la sección **tipo riferimento** y completar **riferimento ft** (un campo para el número de factura y el siguiente para la fecha de factura).

Hecho esto, las declaraciones de intención seleccionables desde la caja combinada correspondiente serán **también** aquellas del registro del año anterior (o de todos modos, el indicado en la fecha de referencia)

![](/img/it-it/finance-area/declarations/declarations/intent-declaration/image06.png)

### **VIDEO TUTORIALES (VIDEO TUTORIALS)**

<iframe width="560" height="315" src="https://www.youtube.com/embed/rZM6NBOpIxQ" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>