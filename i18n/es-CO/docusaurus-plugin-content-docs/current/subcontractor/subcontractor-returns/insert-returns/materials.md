---
title: materiali
sidebar_position: 5
---

En esta pestaña se visualizan los materiales que el tercero debería haber utilizado para producir lo que se ha ingresado en la pestaña *articoli*. La propuesta de materiales se define en los Parámetros de Trabajo por Encargo (Conto lavoro), en el campo **dati materiali proposti**.

La sección *articolo* contiene la información de la línea seleccionada en la pestaña *articoli*.

## materiali (Materiali)

Para cada artículo mostrado arriba se pueden ingresar los materiales y sus detalles, o estos datos serán propuestos.

### Detalle de material (Dettaglio materiale)

En esta pestaña se ingresan los materiales que no han sido utilizados por el tercero, ya sea por exceso o porque fueron descartados.

*Campos específicos (Campi specifici)*:

**magazzino**: en esta columna se visualiza el código del almacén de Devoluciones (Resi), tomado de los parámetros de trabajo por encargo, visualizado automáticamente solo si se ingresa la cantidad devuelta en la línea del material, editable por el usuario;  

**causale**: en esta columna se visualiza el código de la causa para la carga de las Devoluciones (Resi), tomado de los parámetros de trabajo por encargo, visualizado automáticamente solo si se ingresa la cantidad devuelta en la línea del material, editable por el usuario. Si los materiales no utilizados por el usuario han sido descartados, entonces la causa no debe tener contrapartida. Si, en cambio, los materiales han sido devueltos, entonces la causa debe tener una contrapartida de carga para indicar dónde colocar los materiales devueltos.  

**carico lotto**  
En la cuadrícula, el usuario puede indicar cuáles son los lotes de materiales que han sido utilizados por el tercero. Las columnas visualizadas y las reglas de uso de la cuadrícula son las mismas que las de la cuadrícula de lotes en la pestaña Lotes\SN que se encuentra en la pestaña *articoli*.