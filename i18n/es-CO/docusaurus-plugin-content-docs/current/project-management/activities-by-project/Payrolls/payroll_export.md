---
title: Exportación de nóminas
sidebar_position: 3
ai_generated: true
---

Al hacer clic en el botón exportar se exportará la única nómina<!-- cedolino --> seleccionada, o bien, realizando una selección múltiple desde la cuadrícula de búsqueda, se podrá efectuar una exportación múltiple en un único archivo.

La configuración de los formatos<!-- tracciati --> es la siguiente:

Configuración > Parámetros > Administración > **Parámetros de importación de nóminas<!-- Parametri Importazione paghe -->**
en la pantalla están presentes dos campos “Movimientos”<!-- Movimenti --> y “Valores”<!-- Valori --> que permiten configurar qué flujo de bizlink llamar para la exportación:

- Payroll_Export es para Zucchetti
- Payroll_ExportExternalCompany es para TeamSystem
- PayrollExport_SistemiPresenze es para Sistemi y debe colocarse en este campo de ‘Movimientos’<!-- Movimenti -->, mientras que PayrollExport_SistemiVoci va en el campo siguiente “Valores”<!-- Valori --> (Sistemi requiere dos archivos distintos, uno para las horas y otro para los reembolsos de gastos insertados en la nómina<!-- busta paga -->; TeamSystem, en cambio, lleva todo junto)

Herramientas > Bizlink > Configuración > Flujos 
abrir el ítem **Intercompany**
buscando por Payroll serán visibles los formatos<!-- tracciati --> ya presentes por defecto, y desde la misma ventana es posible configurar otros nuevos formatos<!-- tracciati --> adicionales si fuera necesario.