---
title: Búsqueda de Picking
sidebar_position: 2
ai_generated: true
---

El formulario se abre a través de la ruta **Logística > Picking**.

import SearchForm from './../../import/sections/search-form.md'

<SearchForm />

*Botones específicos<!-- Pulsanti specifici -->*  
**DDT**: ejecuta el procedimiento para crear el documento DDT a partir de un picking<!-- picking -->.  
**Factura<!-- Fattura -->**: ejecuta el procedimiento para crear el documento factura<!-- fattura --> a partir de un picking<!-- picking -->. 

Durante la creación de *DDT* y *Factura<!-- Fattura -->* desde picking<!-- picking -->, se ha añadido un nuevo indicador: **Usar almacén<!-- magazzino --> y causal<!-- causale --> según tipo DDT** y **Usar almacén<!-- magazzino --> y causal<!-- causale --> según tipo de Factura<!-- Fattura -->**.       
Si está activo, el procedimiento utilizará para las líneas de la DDT / Factura<!-- DDT / Fattura --> el almacén<!-- magazzino --> y la causal<!-- causale --> tomados de los indicados en el tipo DDT / Factura<!-- tipo DDT / Fattura -->.         
Obviamente, debe haber existencias disponibles en el almacén<!-- magazzino --> / ubicación tomada de la causal<!-- causale --> de la DDT/factura<!-- DDT/fattura -->.        

Desde este formulario también es posible [Crear un nuevo picking<!-- Creare un nuovo picking -->](/docs/logistics/picking/picking-management), haciendo clic en el botón **Nuevo<!-- Nuovo -->**.