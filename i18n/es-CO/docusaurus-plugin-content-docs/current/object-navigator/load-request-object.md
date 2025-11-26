---
title: Load Request Objetos
sidebar_position: 2
ai_generated: true
---

 

### Cómo visualizar campos adicionales en los formularios<!-- Come visualizzare campi aggiuntivi nelle form -->

Para agregar propiedades que no estén presentes en los formularios<!-- form -->, se debe verificar que las propiedades existan en la LoadRequest del objeto<!-- oggetto -->.

### Cargar nuevas propiedades<!-- Caricare nuove proprietà -->

**Ejemplos<!-- Esempi -->**:
 - agregar la *Partida IVA*<!-- Partita iva --> y el *Código fiscal*<!-- Codice fiscale --> en el expander del cliente, en la **Cabecera<!-- Testata -->** de los pedidos de cliente<!-- Ordini clienti -->.
 - agregar el *SWIFT* en la **grilla**<!-- griglia --> de los pagos de los pedidos de cliente<!-- Pagamenti degli Ordini clienti -->.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image01.png)

1. fijar el panel del **Object Navigator** para tenerlo siempre visible hasta que se definan los campos adicionales, es decir, justo antes de crear el perfil personalizado.

2. en el **Object Navigator**, haciendo clic derecho sobre el nombre del objeto<!-- oggetto -->, entrar en **Detalles<!-- Dettagli -->** e ir a la sección **Load Request del objeto<!-- Load Request dell'oggetto -->** y con clic derecho seleccionar **Nueva Object Load Request<!-- Nuovo Object Load Request -->**.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image02.png)

3. abrir un *Nuevo Load Request* donde se debe ingresar el mismo código que en el *Load Request Estándar* y luego guardar para que se carguen todas las propiedades del objeto<!-- oggetto -->.

4. buscar en el árbol del objeto<!-- oggetto --> las propiedades de interés.

En este caso, fuimos a la referencia *Cliente* y dentro de la referencia *Datos principales<!-- Anagrafica -->* para encontrar *Código fiscal*<!-- Codice fiscale --> y *Partida IVA*<!-- Partita iva -->, y los seleccionamos.

5. siempre en el mismo formulario, en la grilla **Based On**, habilitar el **Código** del LoadRequest para que, en ejecución, se carguen todas las propiedades presentes en este *Load Request Personalizado*.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image03.png)

6. cerrar el formulario.

 
### Agregar las propiedades en la cabecera del formulario<!-- Aggiungere le proprietà nella testata della form -->

6.1. a la izquierda del formulario de Fluentis que se va a personalizar, abrir y mantener abierto el **Form Navigator**.

6.2. abrir el árbol del formulario y activar el formulario en **Modo de Personalización<!-- Customization Mode -->**.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image04.png)

En este punto, el formulario se resalta en rojo:

![](/img/it-it/guide/panels/object-navigator/load-request-object/image05.png)

6.3 en el **Object Navigator*** buscar las propiedades a añadir en el formulario.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image06.png)

 
6.4. seleccionar el elemento y arrastrarlo al *Form Navigator* exactamente encima de la sección donde debe insertarse la propiedad, la cual aparecerá en el formulario de Fluentis.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image07.png)

6.5. *desactivar el Modo de Personalización* cuando se haya terminado de personalizar el formulario.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image08.png)

### Agregar las propiedades en la grilla del formulario<!-- Aggiungere le proprietà nella griglia della form -->

Para agregar propiedades en las grillas no es necesario entrar en modo de personalización.

7.1 en el *Object Navigator* buscar las propiedades a agregar.

7.2 seleccionar el elemento y arrastrarlo a la grilla. El formulario se resalta en rojo.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image09.png)

Esta propiedad aparecerá como la última columna, la cual luego deberá arrastrarse a la posición deseada.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image10.png)

8. *crear un perfil* para guardar la personalización.

![](/img/it-it/guide/panels/object-navigator/load-request-object/image11.png)

9. *reiniciar* Fluentis para que la personalización sea operativa.