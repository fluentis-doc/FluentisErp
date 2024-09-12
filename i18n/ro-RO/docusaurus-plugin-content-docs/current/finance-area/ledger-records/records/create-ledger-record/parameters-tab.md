---
title: Tab parametri
sidebar_position: 8
---

Tab-ul **Parametri** este întodeauna prezent într-o înregistrare contabilă, dar nu este necesară vizualizarea/gestionarea lui deoarece prezintă doar starea definitivă sau provizorie a înregistrării contabile deschise: înregistrarea contabilă *definitivă* se va putea modifica în continuare (peste tot, dar nu și în șablonul și deviza de referință) până când va fi listat definitiv un jurnal fiscal obligatoriu sau până la includerea acesteia într-o închidere automată conturi. Statusul *provizorie* (care va deselecta și dezactiva numerotarea în jurnalul de vânzări/cumpărari și va numerota înregistrarea negativ de la -1000) poate fi utilizat pentru a releva în contabilitate facturile de plătit anticipat sau alte tipuri de operații periodice care apar în viitor (de ex. abonamente postdatate). Intrând în înregistrare și inserând din nou statusul definitivă, aplicația va reatribui automat numărul înregistrării și numărul în jurnalul de vânzări/cumpărări pentru data înregistrării inserate. Amintim că în contabilitate este prezentă o procedură pentru gestionarea înregistrării provizorii care permite operarea rapidă a atribuirii unui set di înregistrări provizorii la înregistrarea definitivă.

Flag-urile *Actualizare solduri*, *Grupează registru TVA* și *Actualizare automată CdC, CdP și comenzi* derivă din șablonul contabil: primul trebuie să fie tot timpul setat, la fel si al doilea (acesta va regrupa sau nu în jurnal liniile TVA care se referă la același cont analitic contabil). Al treilea este util câtorva tipuri de înregistrare manuală, pentru care utilizatorul este în mod normal obligat să gestioneze manual fișele cdc/cdp: lasând flagul inserat, aplicația va reseta întodeauna aceste fișe la orice modificare a informației inițiale a registrului jurnal, iar acest lucru poate cauza pierdera tuturor inserțiilor efectuate manual. Acest automatism, chiar și cu flagul neselectat, este oricum prezent în momentul inserării înregistrării. Câmpurile relative la black list permit gestionarea cazului particular al achizițiilor extra-cee (cu șablon fără TVA) care trebuie rezumate în declarația operațiilor cu țările cu fiscalitate privilegiată, asociind înregistrarea actuală la mișcarea TVA a declarației vamale din care vor fi citite valorile de declarat.

Gridul inferior vizualizează eventuala înregistrare automată asociată la cea în uz: în momentul modificării primului grid, aplicația va continua să-l alinieze pe al doilea pe baza logicii șabloanelor automate.

Opțiunile sunt:

> **Salvează** - Buton pentru salvarea înregistrării.  
> **Nouă înregistrare** - Buton pentru crearea unei noi înregistrări.  
> **Parametri inserare** - Deschide fereastra cu parametri înregistrării.  
> [Document Manager](/docs/guide/operations-with-data/document-manager) - Buton pentru deschiderea gestiunii documentelor.