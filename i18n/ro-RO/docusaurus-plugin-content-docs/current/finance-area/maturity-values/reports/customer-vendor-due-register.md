---
title: Registre Scandețe Clienți/Furnizori
sidebar_position: 1
---

Din acest formular este posibil să se definească toți parametrii preliminari și să se lanseze tipărirea regsitrului de scadențe client / furnizor.

În partea de sus a formularului există mai multe filtre pe datele sursă:

![](/img/ro-RO/finance-area/maturity-values/reports/customer-vendor-due-register/image01.png)

**Cont**: filtru principal pentru conturile client / furnizor. Dacă nu sunt introduse date, programul va fi procesat pentru toate conturile clienților și furnizorilor. Este posibil să introduceți doar contul de registru pentru a obține doar clienții sau numai furnizorii;

 **Status angajament**: filtrul este propus în mod implicit în starea Deschis (care include și Expirat și Parțial Deschis), poate fi modificatsau lăsat necompletat pentru a propune toate starile;

**Poziție angajament**: caseta combinată a filtrului este folosit pentru a atribui categorii codabile angajamentelor;

**Plată**: filtrează tipul de plată stocat în lot (procesat în faza de deschidere de condițiile de plată, cu excepția cazului în care este modificat manual);

**Cod Document**: Filtrează codul tipului de document asociat cu lotul care se deschide (de ex. Factură, notă de credit, bon fiscal etc.)

**Monedă**: filtru pe moneda în care sunt denumite loturile;

**Agent**: filtru pe agentul conectat la lot (numai partea clientului);

**Bancă**: filtru pe banca de canalizare conectată la lotul care se deschide;

**Proiect**: filtru pe proiect (comandă) legat de lot.

Parametrii de viziualizare:

![](/img/ro-RO/finance-area/maturity-values/reports/customer-vendor-due-register/image02.png)

**Diviziune**: filtru pe divizie (operațional dacă există mai multe divizii în baza de date);

**Angajamente deschise în**: acest câmp, propus implicit la deschiderea măștii egală cu data de astăzi, poate fi modificat pentru a obține situația angajamentelor deschise (sau a angajamentelor cu unul dintre celelalte stări care pot fi selectate în câmpul Stare meciuri ), precum și prezentate la o anumită data;

**Angajamente și plăți în date**: dacă este activ, angajamentele anterioare deschise vor intra în vigoare atât cu data deschiderii angajamentelor, cât și cu data plății; daca este dezactivat, data de mai sus va avea efect numai cu referire la data de deschidere a angajamentelor și vor fi luate în considerare toate plățile;

**Sintetic**: dacă este activ, ascunde coloanele suplimentare referitoare la detaliile de plată din tipărit, dacă este dezactivat vă permite să afișați toate detaliile;

**Cu efecte în scadență**: ca urmare a contabilității emiterii de facturi există o inversare a creditului către client și o închidere contextuală a elementului deschis, prin activarea acestui indicator programul este „ajustat” pentru a lua în considerare și efectele de expirare;

**Conversie valutară**: selectând o monedă din caseta combinată, angajamentele vor fi convertite în moneda selectată la cursul de referință al zilei (afișat în coloana cursului de schimb din tipărire).

CRITERII DE GRUPARE POSIBILE CARE POATE FI ACTIVATE:

![](/img/ro-RO/finance-area/maturity-values/reports/customer-vendor-due-register/image03.png)

Notă: numele companiei = grupare pe baza datelor despre clienți sau furnizori;

Bancă = grupare după bancă;

Scadență = gruparea va avea loc prin expirare, reprezentând în ordine cronologică toate articolele deschise (evident pe baza criteriilor de filtrare stabilite mai sus).






