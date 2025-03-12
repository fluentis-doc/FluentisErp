---
title: Business Areas - Tesoreria
sidebar_position: 2
---

**Creare fișier SEPA** (cod FS-PR-SEPA-PaymentRequest): acest parametru permite asocierea unui flux Bizlink 'SEPA' pentru exportul transferurilor bancare în Euro. Fiecare localizare geografică are propria structură implicită de generare (în prezent, formatul italian este 4.01), dar în cazul schimbărilor de structură de referință, poate fi util să schimbi liber tipul de fișier care va fi creat, începând cu o anumită dată.

**SDD (Debit Direct SEPA)** (cod FS-PR-SEPA-SDD): similar cu precedentul, dar pentru fișierele SDD care pot fi create din Listele Portofolii Efecte (în prezent pentru Italia, versiunea 1.01).

**Creare fișier SEPA extern** (cod FS-PR-SEPA-ForeignPaymentRequest): similar cu primul, dar pentru schema transferurilor bancare în valută.

Fluxurile disponibile în prezent sunt:

- *EsteroSEPA_XML_Payment*
- *ExportSDDWorkflow*
- *ExportSDDWorkflow_1.01*
- *SEPA_XML_Payments_Export*
- *SEPA_XML_Payments_Export_4.01*
- *SEPA_XML_Payments_Export_FR*
- *SEPA_XML_Payments_Export_HR*
- *SEPA_XML_Payments_Export_RO*
- *SEPA_XML_Payments_Export_RS*
- *SEPA_XML_Payments_Export_SI*


**Detaliu mișcare** (cod FS-PR-DocFinanceNote): pentru companiile care primesc mișcările bancare de la DocFinance, acest parametru permite definirea modului în care ***FluentisERP*** va completa descrierile detaliate ale mișcărilor importate. Logica de codificare a string-ului urmează logica deja utilizată în Șabloane de contabilitate, cu adăugarea codului (DF) pentru a indica descrierea prezentă direct în fișierul primit de la DocFinance.

:::tip Notă
De exemplu:
- setând parametru ca "(2) FT.N. (DF) din (4) – (6)" se va crea un text cu
"Descriere șablon" + FT.N. + "Descriere din DocFinance" din "data document angajament" - "Descrierea contului analitic angajament"
- setând parametru ca "FT. (3) din (4)", adică fără utilizarea stringului furnizat de DocFinance, vom obține:
    - pentru liniile legate de partidă, o notă de tipul FT. + "Număr document angajament" + din + "data document angajament"
    - pentru liniile neligate de angajament, va fi folosit implicit stringul prezent în fișierul DocFinance
:::
