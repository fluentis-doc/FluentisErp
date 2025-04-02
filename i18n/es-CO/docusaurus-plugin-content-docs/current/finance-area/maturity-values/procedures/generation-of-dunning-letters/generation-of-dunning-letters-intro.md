---
title: generazione solleciti
sidebar_position: 1
---

Desde esta máscara se procederá a la generación de avisos con la característica de poder establecer un nivel de aviso que irá más allá del orden lógico de prioridad que caracteriza la generación automática de avisos.  
También es posible seleccionar manualmente las partidas a avisar después de filtrarlas, teniendo así un mayor control sobre la operación.

Para proceder, es necesario, en la parte inferior de la máscara, asignar la fecha de creación de los avisos y seleccionar el tipo de aviso (previamente codificado en la tabla *Tipos de avisos*) desde el cuadro combinado.  
Opcionalmente, se puede atribuir un nivel de aviso específico (a través del cuadro combinado ***N. avisos***) para forzar la creación más allá del orden lógico de prioridad. Normalmente, de hecho, las partidas que nunca han sido avisadas tendrán el aviso de prioridad 1; aquellas ya avisadas pasarán a un nuevo aviso de prioridad 2 y así sucesivamente para las siguientes.

La fecha del aviso influye en la creación ya que debe respetar los parámetros presentes en la tipología del aviso y en el número del aviso, como los días de retraso y los *días* que determinan la fecha límite del aviso anterior.  
Si la fecha del aviso no es válida con respecto a los parámetros para la partida seleccionada, el comando de creación no ejecutará ningún aviso.

CAMPOS DE FILTRO:

**Cuenta / subcuenta (Conto / sottoconto)**: referido al titular de las partidas.

**agente**: para filtrar el agente que está dentro del registro del cliente.

**Agente de partidas avisadas (Agente da partite sollecitate)**: filtra las partidas con el agente indicado en la partida, dado que se valora en la contabilización de facturas de venta con el agente principal presente en el documento, es decir, aquel con el monto más alto en caso de múltiples agentes valorizados.

CAMPOS RELATIVOS A LAS PARTIDAS A BUSCAR:
Nro Documento, Posición de la partida, De / A Fecha del documento, De / A Fecha de vencimiento, año de la partida, número ... Tipo de documento, Categoría administrativa (en registro del cliente), Tipo de pago.

CAMPOS RELATIVOS A LAS REFERENCIAS DEL ANTERIOR AVISO SOBRE PARTIDAS YA AVISADAS:
Tipo de aviso (Tipo Sollecito), DE / A fecha del aviso (data sollecito), DE / A Fecha de vencimiento (solicitud), Número de aviso, Referencia...

TIPO DE PARTIDAS: Indicador para extraer no solo las clásicas partidas activas de clientes, sino también aquellas relacionadas, por ejemplo, con proveedores, etc...