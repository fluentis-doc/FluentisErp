---
title: Exportación de recibos de nómina (Esportazione Cedolini paga)
sidebar_position: 3
---

Al hacer clic en el botón exportar, se exportará el recibo seleccionado, o realizando una selección múltiple desde la cuadrícula de búsqueda, se podrá llevar a cabo una exportación múltiple en un solo archivo.

La configuración de los trazados es la siguiente:

Configuración > Parámetros > Administración > **parametri importazione paghe**.  
En la pantalla hay dos campos “Movimientos (Movimenti)” y “Valores (Valori)” que permiten establecer qué flujo de bizlink llamar para la exportación:

- Payroll_Export es para Zucchetti  
- Payroll_ExportExternalCompany es para TeamSystem  
- PayrollExport_SistemiPresenze es para Sistemas y debe ser insertado en el campo de ‘Movimientos’; mientras que PayrollExport_SistemiVoci debe colocarse en el siguiente campo “Valores” (Sistemas requiere dos archivos distintos, uno para las horas y otro para los reembolsos de gastos incluidos en el recibo de nómina; TeamSystem, en cambio, tiene todo junto).

Herramientas > Bizlink > Configuración > Flujos  
Abrir la opción **Intercompany**.  
Buscando por Payroll, serán visibles los trazados ya presentes como estándar, y desde la misma pantalla es posible configurar otros nuevos trazados si es necesario.