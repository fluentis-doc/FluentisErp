---
title: Cargar Solicitud de Objetos (Load Request Oggetti)
sidebar_position: 2
---

### Cómo visualizar campos adicionales en los formularios (Come visualizzare campi aggiuntivi nelle form)

Para agregar propiedades que no están presentes en los formularios, se debe verificar que las propiedades estén en la LoadRequest del objeto.

### Cargar nuevas propiedades (Caricare nuove proprietà)

**esempi**:
 - agregar el *partita iva* y el *codice fiscale* en el expander del cliente, en la **testata** de los pedidos de clientes.
 - agregar el *SWIFT en la* **cuadrícula (griglia)** de Pagos de los pedidos de clientes.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image01.png)

1. Fijar el panel del **object navigator** para tenerlo siempre visible hasta la definición de los campos adicionales, es decir, hasta el momento antes de crear el perfil personalizado.

2. En el **object navigator**, hacer clic derecho sobre el nombre del objeto, entrar en **dettagli** y dirigirse a la sección **Load Request del objeto (Load Request dell'oggetto)** y con clic derecho seleccionar **nuovo object load request**.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image02.png)

3. Abrir una *Nueva Solicitud de Carga (Nuovo Load Request)* donde insertar el mismo código que la *Solicitud de Carga Estándar (Load Request Standard)* y luego guardar para que se carguen todas las propiedades del objeto.

4. Buscar en el árbol del objeto las propiedades de interés.

En este caso, nos dirigimos a la referencia *Cliente* y dentro de la referencia *anagrafica* para encontrar *codice fiscale* y *partita iva*, y los seleccionamos.

5. Siempre en el mismo formulario, en la cuadrícula **based on**, activar el **codice** de la Solicitud de Carga para que en ejecución se carguen todas las propiedades presentes en esta *Solicitud de Carga Personalizada (Load Request Personalizzato)*.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image03.png)

6. Cerrar el formulario.

### Agregar las propiedades en la cabecera del formulario (Aggiungere le proprietà nella testata della form)

6.1. A la izquierda del formulario de Fluentis que se va a personalizar, abrir y mantener abierto el **Navegador de Formularios (Form Navigator)**.

6.2. Abrir el árbol del formulario y activar el formulario en **Modo de Personalización (Customization Mode)**.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image04.png)

En este punto, el formulario se enmarca en rojo:

![](/img/it-it/guide/panels/object-navigator/load-request-object/image05.png)

6.3. En el **object navigator**, buscar las propiedades para agregar al formulario.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image06.png)

6.4. seleccionar la opción y arrastrarla al *Navegador de Formularios (Form Navigator)* justo encima de la sección donde se debe insertar la propiedad que aparecerá en el formulario de Fluentis.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image07.png)

6.5. *Deseleccionar el Modo de Personalización (deselezionare Customization Mode)* cuando se haya terminado de personalizar el formulario.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image08.png)

### Agregar las propiedades en la cuadrícula del formulario (Aggiungere le proprietà nella griglia della form)

Para agregar propiedades en las cuadrículas no es necesario entrar en el modo de personalización.

7.1. En el *object navigator* buscar las propiedades a agregar.

7.2. Seleccionar la opción y arrastrarla a la cuadrícula. El formulario se enmarca en rojo.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image09.png)

Esta propiedad aparecerá como la última columna que luego deberá ser arrastrada a la posición deseada.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image10.png)

8. *Crear un perfil (creare un profilo)* para guardar la personalización.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image11.png)

9. *Reiniciar (ripartire)* Fluentis para hacer operativa la personalización.