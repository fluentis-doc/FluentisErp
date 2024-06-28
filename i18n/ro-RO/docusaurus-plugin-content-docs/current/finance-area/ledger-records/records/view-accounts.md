---
title: Vizualizare conturi
sidebar_position: 2
---

Fereastra **Vizualizare conturi** permite vizualizarea înregistrărilor contabile a oricărui cont sintetic şi analitic, de orice tip: toate înregistrările ale tuturor exerciţiilor contabile sunt întodeauna actualizate, dar pot fi modificate în relaţie cu închiderea perioadei sau cu rapoartele fiscale obligatorii sau ca operaţii de închidere a conturilor.

În partea superioară este obligatorie inserarea contului sintetic sau, direct, analitic: câmpurile succesive sunt opţionale şi propun flagul pentru diviziunea activă şi flagul pentru înregistrările definitive.

Gridul afişează datele înregistrărilor, implicit ordonate după data înregistrării ascendentă, pe baza filtrelor inserate: presupunem că aţi filtrat pentru contul x *de la dată înregistrare* 01/01/yyyy; câmpurile din partea superioară, din secţiunea *Sold precedent*, vor fi completate cu totalurile debit credit ale înregistrărilor anteriore datei 01/01/yyyy, iar în gridul înregistrărilor câmpul *progresiv* va afişa pe primul rând soldul actualizat cu valoarea liniei selectate care apoi este actualizat pentru fiecare linie din grid (IMPORTANT: progresivul este semnificativ doar în cazul ordonării ascendente după data înregistrării sau competenţei, nu şi în celelalte cazuri). În totalurile din partea inferioară a ferestrei câmpul *Sold selecţie* reprezintă valorile debit/credit selectate în grid, apoi *Sold curent* reprezintă valorile debit/credit ale liniilor afişate în grid, iar *Total* reprezintă valorile debit/credit al soldului precedent şi al celui curent, în timp ce *Solduri* este soldul final în debit sau în credit (care va corespunde întodeauna cu progresivul vizualizat în ultima linie).

Un al element de care trebuie să se ţină cont în gestionarea gridului este următorul: sunt două serii de conturi analitice afişate, analiticul atribuit (care este cel al înregistrării din care este preluată mişcarea însăşi) şi analiticul detaliu care este cel pentru care aţi efectuat căutarea. De exemplu, în cazul în care afişaţi mişcările unui cont general de cost, în analiticul atribuit veţi vedea codurile furnizorilor care au expediat facturi înregistrate acestui cont de cost iar în analitic detaliu fiecare analitic de cost relevat.

Operaţiile pe care le puteţi efectua în **Vizualizare conturi** sunt:

1) Dublu clic pe fiecare linie vizualizată: în acest caz aplicația, dacă utilizatorul are drepturile necesare, va deschide, pentru a fi modificată, înregistrarea corespunzătoare mişcării.

2) Apăsaţi butonul **Modifică** şi veţi obţine acelaşi rezultat obţinut mai sus cu dublu clic.

3) Apăsaţi butonul **Doc. sursă**, când este activ şi dacă utilizatorul are dreptul, va deschide doar pentru vizualizare factura de achiziţie/vânzare care, cu procedura de contabilizzare, a creat mişcarea contabilă selectată.

4) Apăsaţi butonul **Detalii** (activ dacă este selectată o singură linie) pentru a vizualiza într-un grid separat toate mişcările înregistrării contabile de apartenenţă. Dacă mutaţi cursorul pe o altă linie acest grid va fi dezactivat.

Opțiuni disponibile:

> **Vizualizează conturi** - Buton pentru vizualizarea înregistrărilor contabile inserate anterior.  
> **Modifică** - Buton pentru modificarea unei înregistrări contabile inserată anterior.  
> **Document sursă** - Buton cu ajutorul căruia se poate ajunge la documentul sursă din care provine înregistrarea contabilă.  
> **Detalii** - Afişează, în gridul rezultatelor, detaliul înregistrării contabile selectate.
