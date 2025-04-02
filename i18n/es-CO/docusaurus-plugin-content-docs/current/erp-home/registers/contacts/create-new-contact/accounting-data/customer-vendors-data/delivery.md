---
title: consegna
sidebar_position: 4
---

Este formulario permite definir la lista de destinos de mercancía y las características estándar de las cláusulas comerciales relacionadas.

**elenco destinatari**: en la cuadrícula se pueden indicar diferentes destinatarios de mercancía, entre los cuales uno por defecto que se propondrá en los documentos. Si la sede indicada en 'Datos comunes (Dati comuni)' del registro es la sede de envío de mercancía, no es necesario indicar nada en estas secciones de destinatarios/destinos.

Para cada destinatario se puede vincular la **zona** y la **zona consegna** de referencia.

**elenco destinazioni**: en la cuadrícula se ingresan los N posibles destinos para ese destinatario, que a su vez pueden tener un valor *default* que se propondrá, un *automezzo* por defecto, un *tipo de UDC* (unidad de carga), una *zona de entrega (zona consegna)* y un *vettore*. Así se puede crear una *triangulación*: vendo al sujeto del registro y entrego a un almacén particular de un destinatario tercero.

En la sección inferior se pueden definir el **Tipo de envío (Tipo di spedizione)** (por tierra/mar/camión, etc.) y las notas, el tipo de *embalaje (imballaggio)* y las *notas* correspondientes, y las condiciones de entrega en el campo *porto* y las notas eventuales (todos los campos de notas si se completan se mencionarán en los documentos de envío);

En la sección **zone consegna** hay elementos predeterminados válidos para el cliente, tales como:

- **Zona de entrega general (Zona consegna generale)**: en la que se indica la zona de entrega general y la dirección;

- **Exclusión de Día/Día de entrega (Esclusione Giorno/Giorno di consegna)**: en este caso, se indica el día de entrega por defecto para esa zona; si el indicador de Exclusión de día está activo, el día indicado será el único día en el que no se realizarán entregas en esa zona;

- **Exclusión de hora/Hora de entrega (Esclusione ora/Ora di consegna)**: en este campo se indica el rango horario dentro del cual debe realizarse la entrega; en caso de que el indicador de Exclusión de hora de entrega esté activo, el rango horario indicado será el rango en el que no se aceptarán entregas.

- **numero addetti** necesarios para la entrega;

- **automezzo** dedicado a la entrega;

- **Tipo de UDC (Tipo di UDC)** (pallet, europallet, etc.);

También se puede especificar si el transporte corre normalmente a cargo del **mittente**, **destinatario** o del **vettore**.

En la cuadrícula adyacente, se podrá indicar una **Lista de transportistas (Lista di vettori)** autorizados para ese sujeto, indicando uno por defecto.

*Botones específicos*:
> **salva**: para guardar los cambios en el registro en uso.  
> **nuovo destinatario/nuova destinazione**: para gestionar la creación de un nuevo registro no contable para asociarlo automáticamente al registro en uso como destinatario, como destino o ambos (si se selecciona un destinatario, se propondrá la creación de un destino; en otros casos, se propondrá la creación de un nuevo destinatario). La máscara que se abre permite, además de definir cómo asociar el registro que se está creando al activo, definir todas las características de un nuevo contacto. Es posible guardar la creación y continuar ingresando nuevos destinatarios/destinos, o presionar para guardar y cerrar la máscara para regresar al registro en uso.  
> **cancella destinatario**: para eliminar el destinatario seleccionado.  
> **cancella destinazione**: para eliminar el destino seleccionado.  
> **cancella vettore**: para eliminar el transportista seleccionado.