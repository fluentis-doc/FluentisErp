---
title: riferimenti
sidebar_position: 1
---

El registro del banco presenta en la pestaña **riferimenti** los datos fundamentales relacionados con la cuenta corriente a indicar:

**ISO**: indicar los primeros 4 caracteres del IBAN, luego 2 caracteres para el código del país (ej. IT) + 2 para el código de la institución;  

Los códigos **ABI**, **CAB**, el número de **C/C** (para los bancos italianos se deben indicar 5 caracteres para abi y cab - incluyendo el cero inicial - y todos los 12 caracteres de la cuenta corriente italiana), el código internacional **Swift**, el **CIN**;  

**Divisa**: especificar la moneda con la cual está expresada la cuenta bancaria;  

Es posible ingresar algunos datos útiles para la interacción con **DocFinance®** (programa de tesorería externo al sistema):  

**R.B.N.**: representa la tipología de relación (ej. Cuenta corriente, cuenta de divisas...)  

**Banco Doc Finance**: el nombre del banco a utilizar para el análisis de flujos por banco y otras funciones permitidas por DocFinance  

**Código del banco**: un posible código de banco libre;  

**SIA** código para el envío de archivos telemáticos italianos, ej. para las Recepciones bancarias, (si no se indica, se utilizará el que está por defecto en la tabla de la Empresa, Home>Tabelle>Generali).  

**banca d'appoggio** permite conectar el registro del banco al código de [**banca d'appoggio**](/docs/configurations/tables/general-settings/reference-bank) genérico. Esto puede servir para canalizar automáticamente los movimientos financieros de las cuentas y evaluarlos en los análisis de flujo de caja.  

La sección relacionada con la *Facturación electrónica* no está actualmente en uso.