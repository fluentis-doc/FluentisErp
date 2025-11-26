---
title: FAQ Inicio
sidebar_position: 2
ai_generated: true
---

<details>

  <summary>1. Al ingresar el NIT<!-- Partita IVA --> en una nueva ficha<!-- anagrafica --> de contacto y hacer clic en Proponer datos<!-- Proponi dati --> en la ribbon bar, se completan los campos genéricos. ¿Existe una conexión directa con las cámaras de comercio u otro servicio similar? </summary>
  
Fluentis está conectado con los archivos VIES, puestos a disposición por la Comunidad Europea, por lo que se puede obtener información de muchas empresas italianas y europeas. Al ingresar el número del NIT<!-- partita iva -->, se propondrán los datos conocidos.

</details>

<details>

  <summary>2. ¿Es posible colorear a gusto las celdas de las cuadrículas de búsqueda si contienen un determinado valor? </summary>

Sí, esta funcionalidad es posible utilizando el **Formato condicional<!-- Conditional formatting -->**. Para elegir el color a asignar a una celda que contiene un valor determinado, ubíquese en el encabezado de la columna, luego clic derecho > Formato condicional<!-- Conditional Formatting --> > Administrar reglas<!-- Manage rules -->. En la ventana emergente, seleccione **Nueva regla<!-- New Rule -->** para abrir la pantalla de Nueva regla de formato<!-- New Formatting Rule -->.
Aquí seleccione el tipo de regla deseado de la lista. En la sección **Editar la descripción de la regla<!-- Edit the rule description -->**, seleccione **[...]** y en la ventana emergente, ingrese el primer valor que la columna podría tener; guarde.
Luego haga clic en **Formato<!-- Format -->** y en la ventana emergente, pestaña **Relleno<!-- Fill -->**, elija el color que debe tomar la columna si el valor corresponde al que acaba de ingresar. Confirme.
Cree una nueva regla para cada valor que la columna pueda tener. Guarde y actualice la pantalla para ver el resultado.

</details>

<details>

  <summary>3. ¿Es posible ocultar a un usuario un determinado tipo de factura? </summary>
  
Sí, con las <b>Restricciones<!-- Restrizioni --></b>. Estas impiden a los usuarios crear, visualizar o modificar determinados tipos de documentos. A continuación, se muestra el ejemplo para impedir que un usuario utilice el Tipo de factura<!-- Tipo fattura --> con código FVITDIF. Recordamos que es necesario añadir la Restricción<!-- Restrizione --> también en el perfil Arm del usuario, en la cuadrícula correspondiente.            

![](/img/it-it/sales/sales-invoices/search-sales-invoices/restriction.png)

</details>