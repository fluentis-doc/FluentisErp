---
title: Articole
sidebar_position: 1
---

Inserarea unui articol:

**Tip linie** ofera posibilitatea de a selecta articole cu caracteristici diferite. Acestea sunt:

**Articol codificat**: se refera la articole codificate in gestiunea societatii, deci articole care influenteaza atat contabilitatea, cat si gestiunea;

**Articol necodificat**: se refera la articole care nu sunt codificate in gestiunea societatii, influenteaza contabilitatea, dar nu si gestiunea;

**Articol cheltuieli**: se refera la articole care sunt sau nu codificate, sunt gestionate separat in rezumatul documentelor si nu au miscari in gestiune;

**Articol note**: este o simpla nota, nu influenteaza contabilitatea si nici gestiunea.

Se poate renunta la inserarea pas cu pas a acestor date, pentru ca, in momentul in care inserati direct o clasa sau o matricola, tipul liniei 'codificat' este selectat automat. In momentul in care il inserati, programul preia automat articolul asociat, cu toate datele din registrul sau. Inserarea clasei sau matricolei se poate realiza manual sau utilizand "Help-ul Articole" (dublu clic pe banda galbena) care va va propune toate datele relative, inserate in Registrul Articole. Dupa ce ati inserat articolul, descrierea lui va fi preluata automat din registru. Daca articolul are variante, trebuie sa selectati varianta corespunzatoare din combobox Variante.

**Unitatea de masura**: este propusa automat U.M. principala a articolului; insa operatorul are posibilitatea sa aleaga o unitate de masura alternativa.

**Variante**: se refera la variantele articolului selectat, daca acestea exista. Alegerea variantei este utila pentru articolele cu aceasta configurare particulara, care pot avea un pret diferit fata de configurarea standard. Ca urmare, pretul articolului cu variante poate fi diferit de pretul articolului fara variante. Aceasta necesita, eventual, gestionarea variantelor articolului in oferta de vanzare de referinta.

**Cantitate**: este cantitatea care se refera la U.M. principala care poate fi inserata manual de utilizator.

**Pret**: pretul este propus din oferta inserata in Registrul clientului; oferta de referinta pentru acel articol este evidentiata in tab-ul "Total". Este posibil ca acelasi document de vanzare sa cuprinda articole din oferte diferite, daca in Registrul clientului sunt asociate mai multe oferte in cascada (vedeti Registru parteneri). De asemenea, executand dublu clic pe campul Oferta din tab "Total" puteti sa selectati o oferta diferita de cea propusa din care va fi preluat pretul articolului inserat. In absenta ofertei, informatia propusa este pretul de vanzare preluat din Registrul articolului.

**TVA**: este preluat cu prioritate campul TVA din Registrul clientului. In cazul in care acesta nu este prezent, este propusa valoarea prezenta in Registrul articolului. Este un camp obligatoriu.

**Facturare vanzari**: este propusa informatia care se afla in tab "Generalitati" din Registrul articole. In cazul in care acesta nu este prezent, nu este propusa nici o informatie, se insereaza manual.

**Unitate de masura alternativa**: este propusa U.M. prezenta in gestiunea U.M. alternative din Registrul articolului care are flag-ul "implicit".

**Cantitatea alternativa**: este propusa valoarea relativa la U.M. alternativa, calculata prin multiplicarea sau divizarea cantitatii gestionale (relativa la U.M. principala) cu factorul de conversie inserat in registru.

RIBBON BAR: reprezinta meniul cu butoanele de executie, pentru fiecare operatie in parte aferente fiecarei ferestre din aria in care se lucreaza. Lista functionalitatiilor posibile cuprinde:



| Functie | Functionalitate |
| --- | --- |
| Salvează | Permite salvarea operatiilor efectuate. Acelasi rezultat il puteti obtine si cand treceti pe o linie diferita de cea pe care doriti sa o salvati. |
| Articol nou | Permite inserarea unui articol nou. |
| Sterge articol | Permite eliminarea articolului inserat. |
| Inserare fiu | Pentru comenzile configurate cu structura ierarhica in <Tabele/Achizitii/Tip Comenzi achizitii> se pot insera articole pe aceasta structura arborescenta |
| Inserare frate | Pentru comenzile configurate cu structura ierarhica in <Tabele/Achizitii/Tip Comenzi achizitii> se pot insera articole pe aceasta structura arborescenta. |
| Expandeaza/Comprima grila articolelor | Permite vizualizarea sau ascunderea tab-urilor 'total', 'date', 'variante', 'loturi', 'facturare', 'cerere intervenții'. |
| Sterge discounturi | Permite eliminarea discountului asociat unui articol. |



| Functie | Functionalitate |
| --- | --- |
| Document manager | Procedura da posibilitatea de a atasa documente. |






