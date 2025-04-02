---
title: FAQ Administración (FAQ Amministrazione)
sidebar_position: 1
---

<details>

  <summary>1. ¿Qué facturas electrónicas se ingresan en la carpeta configurada en la tabla <b>Configuración de documentos electrónicos</b>? (Quali fatture elettroniche vengono inserite nel folder impostato nella tabella <b>Configurazione documenti elettronici</b>?)</summary>
  
Hay dos condiciones que deben cumplirse en el registro del cliente.  

La primera condición es el indicador <b>Firma del documento</b>, que debe estar activo.                  
La segunda condición es el indicador <b>Facturación electrónica firmada</b>, que es un indicador de 3 estados:   

- Cuando es 1 para el cliente, se prevé la firma, independientemente de otras opciones de configuración; por lo tanto, el archivo siempre se exporta a la carpeta definida en la configuración de documentos electrónicos para su firma;           

- Cuando es 0 para el cliente, no se prevé la firma, independientemente de otras opciones de configuración; por lo tanto, no se exporta el archivo a la carpeta de configuración de documentos electrónicos, incluso si está configurada la carpeta;      

- Cuando es Null, como se mencionó anteriormente (que es la configuración predeterminada), se aplica la configuración en 'configuración de documentos electrónicos'; es decir, si hay una ruta para crear el archivo, siempre se crea, de lo contrario no se crea.

</details>


<details>

  <summary>2. Para los pesos, en el proceso de creación de la factura electrónica, Fluentis me dice que no pueden ser superiores a 9.999; ¿cómo puedo desactivar este bloqueo? (Per i pesi, in fase di creazione fattura elettronica, Fluentis mi dice che non possono essere superiori a 9.999 come faccio a togleire questo blocco?)</summary>
  
Este bloqueo está relacionado con las reglas de la Facturación Electrónica, que no acepta PESOS superiores.  
Para resolver este problema, es necesario escalar la unidad de medida si se supera el umbral de 9999, de manera que se utilice una unidad de medida coherente y se obtengan los valores deseados.

</details>


<details>

  <summary>3. ¿Cómo se puede insertar el indicador <b>Grupo IVA</b> en una <b>Declaración de intención</b> ya creada? (Come è possibile inserire il flag <b>Gruppo IVA </b> in una <b>Dichiarazione di intento</b> già creata?)</summary>
  
Es necesario realizar la siguiente actualización, ingresando el id de la declaración de intención.

update CA_DichIntMain set CADM_IsVatGroup = 1 
where CADM_Id = '[id della dichiarazione di intento]'

</details>


<details>

  <summary>4. ¿Cómo se puede realizar la impresión de un mayor filtrando los movimientos según la competencia económica? De hecho, por ejemplo, al establecer el período requerido, en la impresión de subcuentas, en los campos "desde la fecha de competencia" y "hasta la fecha de competencia" no se toma en cuenta la competencia económica, sino que parece que se lee la fecha de competencia que en los registros contables se coloca junto a la fecha de registro? (Come è possibile effettuare la stampa di un mastrino filtrando i movimenti in base alla competenza economica? Infatti ad esempio impostando il periodo richiesto, nella stampa dei sottoconti, nei campi "da data competenza" e "a data competenza" non viene presa in considerazione la competenza economica, ma sembrerebbe venga letta la data di competenza che nelle registrazioni contabili è posta di fianco alla data di registrazione.)</summary>

Confirmo que en los filtros, cuando se escribe desde la fecha de competencia hasta la fecha de competencia, se refiere a la de competencia (por así decirlo "contable") del encabezado. Normalmente coinciden, pero se puede usar (aunque sea por pocos) para registrar, por ejemplo, asientos de ajuste en la fecha de aprobación del balance que se refieren al 31/12, donde en esa fecha el período ya puede estar bloqueado para la impresión definitiva del diario, y por lo tanto no aceptaría la fecha de registro. En cuanto a la fecha de competencia económica, la impresión del mayor y, más en general, el sistema no está pensado para trabajar de esa manera. El procedimiento más correcto es calcular un cierre de cuentas del período (cierres interanuales) y lanzar los correspondientes asientos de ajuste o integración. Como alternativa, puedo recomendar usar el formulario de visualización de cuentas donde agregar desde el objeto del navegador las propiedades From AccrualDate ToAccrualDate, que son las fechas de competencia económica (De A), y usar el filtro ubicado en la primera fila de la cuadrícula de detalles. Alternativamente, también será necesario realizar una personalización del informe y del formulario de lanzamiento agregando filtros, encabezados, etc.

</details>

<details>

  <summary>5. ¿Por qué, al comparar un cierre de cuentas interanual calculado del 1/1 al 31/12 con los resultados del módulo administrativo, en el cierre del controlling encuentro reservas que en administración no se calculan? (Come mai, confrontando una chiusura conti infrannuale calcolata dall'1/1 al 31/12 con i risultati del modulo amministrativo, nella chiusra del controling trovo dei risconti che in amministrazione non vengono calcolati?)</summary>

El módulo de controlling opera de manera más flexible, en algunas situaciones, en comparación con el módulo administrativo.  
De hecho, es capaz de ajustar cualquier costo o ingreso (con un tipo de cuenta compatible) incluso por cuotas de competencia económica en el pasado. Por ejemplo, si el costo registrado en el año X tiene competencia parcialmente (o totalmente) en el año X-1, al procesar el cierre del año X, se tendrá una rectificación (por ejemplo, un activo diferido).  
Es necesario prestar especial atención a la **gestión de los ajustes realizados en el módulo administrativo**.  
**Se recomienda realizar el cálculo y la contabilización de ajustes y el cierre y reapertura de cuentas con reapertura de ajustes a través de los procedimientos automáticos, evitando realizar asientos manualmente**.  
El procedimiento automático, de hecho, impone a los asientos de reapertura de los ajustes la fecha correspondiente al asiento original objeto de rectificación y la competencia económica de dicho asiento igual al año X-1. De esta manera, se evita que al procesar los cierres de período del año X, el software calcule rectificaciones adicionales, ya que en el saldo del año X (o período interanual del año X) ya se tiene el resultado correcto de competencia por efecto de la correcta reapertura del ajuste anterior.  

</details>

<details>

  <summary>6. ¿Por qué, en la máscara de gestión del ajuste (diferidos y reservas), aunque esté seguro de haber ingresado movimientos contables adecuados, no se calcula nada? (Come mai nella maschera di gestione dell'assestamento (ratei e risconti) pur essendo sicuro di aver inserito movimenti contabili idonei non calcola nulla?)</summary>

Después de asegurarse de haber ingresado efectivamente movimientos contables con fechas de competencia económica que abarcan el ejercicio contable y de haber utilizado cuentas de costos que tengan el tipo "a ajustar" (db Fast Start) o que tengan el indicador Servicio en la tabla *tipos de cuenta*, si aún no veo ningún ajuste o reserva propuesta, podría haber activado, inadvertidamente, el indicador *Cierre mensual* en los parámetros generales de contabilidad. Este indicador activa, de hecho, lógicas para localizaciones extranjeras no italianas.

</details>

<details>

  <summary>7. He asociado un tipo de retención a un cliente para generar la factura electrónica completa con las etiquetas necesarias, ahora quiero contabilizar la factura, pero veo que el asiento contable no es correcto y no incluye la retención, ¿por qué? (Ho associato un tipo ritenuta d'acconto ad un cliente per generare la fattura elettronica completa dei tag necessari, ora voglio contabilizzare la fattura ma vedo che la scrittura contabile non è corretta e non riporta la ritenuta d’acconto, perchè?)</summary>

Dentro de la tabla *Tipos de Retención*, abra el tipo asociado al cliente en cuestión y verifique que el campo *Tipos de partidas* esté configurado en *Partidas Netas*.

</details>

<details>

  <summary>8. Fluentis me propone dentro de un nuevo registro contable siempre la última moneda utilizada con el motivo seleccionado, ignorando la moneda por defecto del cliente o proveedor, ¿por qué? (Fluentis mi propone all'interno di una nuova registrazione contabile sempre l'ultima divisa utilizzata con la causale selezionata ignorando la divisa di default del cliente o fornitore, perchè?)</summary>

Verifique la configuración del parámetro general en la tabla PARAM_Parameter código CA-RegCont-General_PurposeCurrencyByTemplate. Si el parámetro está configurado en 1, se propondrá la moneda última utilizada con el motivo; si está configurado en 0, no se propondrá ninguna moneda, siguiendo la lógica básica de la moneda de la sociedad y luego la lectura de la moneda del cliente o proveedor.

</details>

<details>

  <summary>9. Tengo la necesidad de crear más numeraciones para las facturas de venta. No está claro si debo crear tantos registros IVA de venta como numeraciones hay, o si el único registro de venta puede tener más numeraciones (ho la necessità di creare più numerazioni per le fatture si vendita. Non è chiaro se devo creare tanti registri iva vendita per quante sono le numerazioni o l'unico registro vendita può avere più numerazioni).</summary>

La relación presente en el ciclo de contabilización de las ventas es Tipo de Factura > Numeración > Causa contable asociada > Registro IVA asociado a la causa. En un entorno estándar, se puede notar que pueden existir más tipos, pero si están asociados a la misma causa, que por lo tanto tiene el mismo sección IVA, la numeración es la misma (compartida; por lo tanto, la FT nro 1 para el tipo A y luego para el tipo B nacerá la nro 2). En el caso de diferentes tipos de factura con diferentes numeraciones concurrentes, es apropiado diferenciar los seccionales IVA y, por lo tanto, también asociarles diferentes causas, de lo contrario, la protocolización del IVA entrará en conflicto. Esto se debe a que normalmente en las causas hay una opción que propone el protocolo IVA igual al número del documento (de modo que no se deba prestar atención a contabilizar las facturas en el orden de número). De lo contrario, es necesario desactivar dicha opción.

</details>