---
title: Registraciones Contables y Funcionalidades en Contabilidad General
sidebar_position: 10
ai_generated: true
---

En cada registración contable<!-- registrazione contabile --> con causale<!-- causale contabile --> contable que tenga activado el indicador de gestión de *Centros de costo<!-- Centri di costo -->*, tendremos visibilidad de la pestaña 'Analítica' dedicada a la valorización de la contabilidad analítica por centro de costo<!-- centro di costo -->.

:::tip Nota<!-- Nota -->
El indicador de gestión *Proyectos* presente en la causale<!-- causale contabile --> contable se comportará de manera diferente según si la empresa tiene activo o no el *Controlling*: 
- si **no está activo**, el indicador mostrará una pestaña específica para la gestión de costos/ingresos directos de proyecto, desconectada de la contabilidad analítica
- si **está activo**, el indicador mostrará el campo proyectos dentro de la pestaña de gestión por centros de costo<!-- centri di costo --> en la analítica: el campo será editable solo para dimensiones relacionadas con la dimensión proyectos
:::

Dentro de la pestaña analítica tendremos completa visibilidad y disponibilidad de todas las filas valorizadas automáticamente por ***FluentisERP*** al momento del ingreso de la registración<!-- registrazione -->, o traídas desde el documento de origen de la contabilización: podremos modificar los importes, agregar nuevas filas, eliminar otras, según las lógicas de configuración de la dimensión de cada centro valorizado, del plan de cuentas y de la causale<!-- causale -->.

Una vez completada la registración<!-- registrazione -->, tendremos visibilidad de estos datos en algunos procesos y reportes de Contabilidad general<!-- Contabilità generale -->:

## PROCEDIMIENTOS DE CONTABILIDAD GENERAL<!-- PROCEDURE DI CONTABILITA' GENERALE -->
- procedimiento de ***Visualización de movimientos de los centros empresariales<!-- Visualizzazione movimenti dei centri aziendali -->***: es un formulario de búsqueda de los movimientos analíticos presentes en las registraciones<!-- registrazioni --> contables, con la posibilidad de ingresar y modificar la registración<!-- registrazione --> correspondiente

- procedimiento de ***Visualización de Balance con centros de costo<!-- Visualizzazione Bilancio con centri di costo -->***: permite visualizar los totales de los centros<!-- centri -->, pero también por centro<!-- centro --> y subcuenta<!-- sottoconto -->, totalizándolos también en la estructura del plan de cuentas

## REPORTES DE CONTABILIDAD GENERAL<!-- REPORT DI CONTABILITA' GENERALE -->
Dentro del grupo *Reportes analíticos<!-- Stampe analitica -->* tenemos disponible:
- reporte ***Análisis de centros de costo<!-- Analisi centri di costo -->***: permite agrupar los datos de los movimientos analíticos según una lista de propiedades predefinidas, arrastrándolas a la cuadrícula de agrupamiento

- reporte ***Análisis de centros de beneficio<!-- Analisi centri di profitto -->***: este reporte existe por retrocompatibilidad, es similar al anterior pero lee los datos de los movimientos de los *Centros de beneficio<!-- Centri di profitto -->*.

- reporte ***Análisis de movimientos por Centros de costo<!-- Analisi movimenti per Centri di costo -->***: muestra el detalle de los movimientos de cada subcuenta<!-- sottoconto -->, detallando en qué centros<!-- centri --> fueron registrados.

- reporte ***Control de desbalances Centros de costo/Centros de ingreso/Proyectos<!-- Controllo sbilanci Centri di costo/Centri di ricavo/Progetti -->***: en el caso de empresas con el *Controlling* activo, el reporte contempla la verificación de cuadratura solo de los datos de contabilidad analítica de los centros de costo<!-- centri di costo -->, filtrando para cada [*dimensión<!-- dimensione -->*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) específica. Si estamos en una empresa sin activación de *Controlling*, en cambio, tendremos indicadores para configurar la búsqueda de descuadres de los centros de costo<!-- centri di costo -->, de los centros de ingreso<!-- centri di ricavo --> o de la sección de proyectos<!-- progetti --> de las registraciones<!-- registrazioni --> contables.