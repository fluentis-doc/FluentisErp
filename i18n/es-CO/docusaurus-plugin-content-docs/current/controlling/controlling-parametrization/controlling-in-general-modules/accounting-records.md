---
title: Registros Contables y Funcionalidades en Contabilidad General (Registrazioni Contabili e Funzionalità in Contabilità generale)
sidebar_position: 10
---

En cada registro contable con causal contable que tiene activo el indicador de gestión de *Centros de costo*, tendremos visibilidad de la pestaña 'Analítica' dedicada a la valorización de la contabilidad analítica por centro de costo.

:::tip Nota
El indicador de gestión *Proyectos* presente en la causal contable se comportará de manera diferente según si la empresa tiene activo o no el *controlling*: 
- si **no está activo**, el indicador hará visible una ficha específica de gestión de costos/ingresos directos de proyecto, desconectada de la contabilidad analítica.
- si **está activo**, el indicador hará visible el campo proyectos dentro de la ficha de gestión a centros de costo de la analítica: el campo será editable solo para dimensiones relacionadas con la dimensión proyectos.
:::

Dentro de la ficha analítica tendremos plena visibilidad y disponibilidad de todas las líneas valorizadas automáticamente por ***FluentisERP*** al momento de la inserción del registro, o reportadas desde el documento origen de la contabilización: podremos modificar los importes, agregar nuevas líneas, eliminar otras, según las lógicas de configuración de la dimensión del centro individual valorizado, del plan de cuentas y de la causal.

Una vez completado el registro, tendremos visibilidad de estos datos en algunos procedimientos e impresiones de Contabilidad General:

## PROCEDIMIENTOS DE CONTABILIDAD GENERAL
- procedimiento de ***Visualización de movimientos de los centros empresariales***: es una máscara de búsqueda de los movimientos analíticos presentes en los registros contables, con la posibilidad de entrar en modificación del mismo registro.

- procedimiento de ***Visualización de Balance con centros de costo***: permite visualizar los totales de los centros, pero también por centro y subcuenta, totalizándolos también sobre la estructura del plan de cuentas.

## REPORTES DE CONTABILIDAD GENERAL
Dentro del grupo *Impresiones analíticas*, tenemos disponible
- impresión ***Análisis de centros de costo***: permite agrupar los datos de movimiento de la analítica según una lista de propiedades predefinidas, arrastrándolas en la cuadrícula de agrupación.

- impresión ***Análisis de centros de beneficio***: el reporte está presente por retrocompatibilidad, es similar al anterior pero lee los datos de los movimientos de los *Centros de beneficio*.

- impresión ***Análisis de movimientos por Centros de costo***: visualiza el detalle de las movimentaciones de los subcuentas individuales, detallando en qué centros han sido movidos.

- impresión ***Control de desbalance de Centros de costo/Centros de ingreso/Proyectos***: en el caso de empresas con el *controlling* activo, la impresión prevé la verificación de cuadratura de solo los datos de contabilidad analítica de los centros de costo, filtrando por cada específica [*dimensión+ (dimension)*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension). Si estamos en una empresa sin activación del *Controlling*, en cambio, tendremos indicadores para establecer la búsqueda de desbalances de los centros de costo, de los centros de ingreso, o de la sección de proyectos de los registros contables.