---
title: FAQ Inicio (FAQ Home)
sidebar_position: 2
---

<details>

  <summary>1. Al ingresar el Número de Identificación Fiscal (Partita IVA) en un nuevo registro de contacto y hacer clic en Proponer datos (Proponi dati) en la barra de ribbon, se completan los campos genéricos. ¿Hay un enlace directo a las cámaras de comercio o algún otro servicio similar? (Inserendo la Partita IVA in una nuova anagrafica contatto e cliccando Proponi dati nella ribbon bar, vengono completati i campi generici. C'è un collegamento diretto alle camere di commercio o altro servizio simile?)</summary>
  
Fluentis está conectado con los archivos VIES, proporcionados por la comunidad europea, por lo que se puede obtener información sobre muchas empresas italianas y europeas. Al ingresar el número de la Partita IVA, se propondrán los datos conocidos.

</details>

<details>

  <summary>2. ¿Es posible colorear a gusto las celdas de las cuadrículas de búsqueda si contienen un determinado valor? (E' possibile colorare a piacimento le celle delle griglie di ricerca se contengono un determinato valore?) </summary>

Sí, esta funcionalidad es posible utilizando el **Formato condicional (Conditional formatting)**. Para elegir el color que se otorgará a una celda que contenga un valor determinado, colóquese en el encabezado de la columna, luego clic derecho > Formato condicional (Conditional Formatting) > Administrar reglas (Manage rules). En la ventana emergente, seleccione **Nueva regla (New Rule)**, para abrir la ventana de Nueva regla de formato.  
Aquí seleccione el tipo de regla deseada de la lista. En la sección **Editar la descripción de la regla (Edit the rule description)**, seleccione **[...]** y en la ventana emergente, ingrese el primer valor que la columna podría asumir; guarde.  
Luego haga clic en **Formato (Format)** y en la ventana emergente, pestaña **Relleno (Fill)**, elija el color que la columna debe adoptar si el valor coincide con el que acaba de ingresar. Confirme.  
Cree una nueva regla para cada valor que la columna puede asumir. Guarde y actualice la ventana para visualizar el resultado.

</details>


<details>

  <summary>3. ¿Es posible ocultar a un usuario un determinado tipo de factura? (E' possibile nascondere ad un utente una determinata tipologia di fattura?) </summary>
  
Sí, mediante las <b>Restricciones (Restrizioni)</b>. Estas impiden a los usuarios crear, ver o modificar ciertos tipos de documentos. A continuación se presenta un ejemplo para impedir que un usuario utilize el Tipo de factura con código FVITDIF. Recordamos que es necesario agregar la restricción también en el perfil del usuario en la cuadrícula correspondiente.  

![](/img/it-it/sales/sales-invoices/search-sales-invoices/restriction.png)

</details>