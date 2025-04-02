---
title: Tipos de POS (Tipi POS)
sidebar_position: 25
---

:::tip[Inicio Rápido (FAst Start)]
La tabla está sujeta al procedimiento de [**Inicio Rápido**](/docs/guide/fast-start)

En caso de querer configurarlo manualmente, consulte la lista de verificación de la página enlazada.
:::

La tabla se abre a través de la ruta **Tablas > Ventas > Tipos POS**.

### Búsqueda de POS (Ricerca POS)

Permite ingresar nuevos registros o buscar aquellos ya existentes para visualizarlos, modificarlos o eliminarlos.

El formulario consta de un área de filtro y otra de resultado. Una vez establecidos todos los filtros deseados, solo basta hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.

Para modificar/visualizar un tipo POS, simplemente haga doble clic en la fila deseada o presione el botón **modifica**.

Para ingresar nuevos registros, es necesario presionar el botón **nuovo** que abrirá un nuevo formulario de entrada. 

### Ingreso/Modificación de POS (Inserimento/Modifica POS)

En este formulario se ingresarán todos los datos relacionados con el nuevo tipo de POS que se desea añadir, tales como:

**Tipo y descripción (Tipo e descrizione)**: en estos campos se deberá definir el tipo y la descripción del POS;  

**numerazione**: en este campo se ingresará el código de la numeración apropiada. Para más detalles sobre las numeraciones del sistema, consulte el artículo [Numeraciones Fluentis](/docs/configurations/tables/fluentis-numerations); 

**default**: si está activo, este indicador indica el tipo de POS por defecto que se propone al crear un nuevo POS;  

**note**: este es un campo de texto libre en el cual se pueden insertar notas descriptivas que luego se visualizarán en las impresiones correspondientes;  

**prezzo ivato**: si está activo, los precios presentes en la oferta se mostrarán incluyendo el IVA;  

**acconto**: si está activo, este indicador indica que el POS es de tipo anticipo y podrá ser cancelado con una transacción de un tipo de POS ordinario;  

**Servidor P.O.S/ Base de datos/ Tabla (Server P.O.S/Database/Tabella)**: en estos campos se seleccionará el Servidor, la Base de datos y la Tabla donde leer y/o escribir los datos de los POS;  

**Tabla de documentos relacionados (Tabella coll. documenti)**: tabla donde se leen y/o escriben los datos de los documentos vinculados a los POS;  

**UM llegada (UM arr.)**: UM utilizada en la creación de DDT y facturas desde el POS;  

**IVA llegada/ Descripción IVA (IVA arr./Descrizione IVA)**: código IVA utilizado en la creación de DDT y facturas desde el POS;  

**Punto de venta (Punto vendita)**: punto de venta en el que se crean los POS;  

**cassa**: en este campo se debe especificar el código de la caja a vincular a los POS;  

**cat. merc.**: en este campo se indica la categoría mercantil del pedido;  

**iva**: código IVA a utilizar en los POS;  

**magazzino**: en este campo se debe especificar el almacén de compromiso de la mercancía contenida en los POS de este tipo;  

**causale**: en este campo se debe indicar la causa de movilización de la mercancía comprometida contenida en los POS de este tipo;  

**tipo pagamento**: en este campo se propone el tipo de pago sugerido en los POS de este tipo;  

**soluzione di pagamento**: en este campo se debe indicar la solución de pago sugerida en los POS de este tipo;  

**listino**: en este campo se indica el código de la lista de precios general desde la cual se recuperan los precios de los artículos a incluir en el POS;  

**data validità**: aquí se indicará la fecha de validez de la lista de precios general;  

**scarico automatico alla chiusura del corrispettivo**: si está activo, cuando el POS se imprime, también se descontará automáticamente del almacén, de lo contrario, será necesario proceder con la descarga manual;  

**e' necessario il registratore di cassa**: si está activo, este indicador señala que para utilizar los POS es necesario la conexión con un registrador de caja para la impresión del recibo fiscal;  

**visualizza varianti**: si está activo, también se pueden usar las variantes de artículo;  

**visualizza attributi**: si está activo, también se pueden usar los atributos de artículo.  

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).