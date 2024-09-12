---
title: Articole
sidebar_position: 1
---

Inserarea unui articol:

**Tip linie** ofera posibilitatea de a utiliza articole cu caracteristici diferite.

Acestea sunt:

**Articol codificat**: se refera la articole codificate in registrul articole de gestiunea al societatii, deci articole care influenteaza atat contabilitatea, cat si gestiunea;

**Articol necodificat**: se refera la articole care nu sunt codificate in registru articole, influenteaza contabilitatea, dar nu si gestiunea;

**Articol cheltuieli**: se refera la articole care sunt sau nu codificate, sunt gestionate separat in rezumatul documentelor si nu au miscari in gestiune;

**Articol note**: este o simpla nota, nu influenteaza contabilitatea si nici gestiunea. Se poate renunta la inserarea pas cu pas a acestor date, pentru ca, in momentul in care inserati direct o clasa sau o matricola, tipul liniei 'codificat' este selectat automat.

**Cod**: se refera la "codul articolului Bar Code" inserat in Articole, tab "Coduri Bar Code". In momentul in care il inserati, programul preia automat articolul asociat, cu toate datele din registru. Inserarea clasei sau matricolei se poate realiza manual sau utilizand "Help-ul Articole" (dublu clic pe banda galbena) care va va propune toate datele relative, inserate in Registrul Articole.

Dupa ce ati inserat articolul, descrierea lui va fi preluata automat din registru. Daca articolul are variante, trebuie sa selectati varianta corespunzatoare din combobox Variante.

**Unitatea de masura**: este propusa automat U.M. principala a articolului; insa operatorul are posibilitatea sa aleaga o unitate de masura alternativa.

**Variante**: se refera la variantele articolului selectat, daca acestea exista. Alegerea variantei este utila pentru articolele cu aceasta configurare particulara, care pot avea un pret diferit fata de configurarea standard. Ca urmare, pretul articolului cu variante poate fi diferit de pretul articolului fara variante. Aceasta necesita, eventual, gestionarea variantelor articolului in oferta de vanzare de referinta.

**Cantitate**: este cantitatea care se refera la U.M. principala care poate fi inserata manual de utilizator sau care este preluata din documentul de vanzare pe baza caruia s-a facut executarea (de ex. din ordine clienti).

**Pret**: pretul este propus din oferta inserata in Registrul clientului; oferta de referinta pentru acel articol este evidentiata in tab-ul "Total". Este posibil ca acelasi document de vanzare sa cuprinda articole din oferte diferite, daca in Registrul clientului sunt asociate mai multe oferte in cascada (vedeti Registru parteneri). De asemenea, executand dublu clic pe campul Oferta din tab "Total" puteti sa selectati o oferta diferita de cea propusa din care va fi preluat pretul articolului inserat. In absenta ofertei, informatia propusa este pretul de vanzare preluat din Registrul articolului.

**TVA**: este preluat cu prioritate campul TVA din Registrul clientului. In cazul in care acesta nu este prezent, este propusa valoarea prezenta in Registrul articolului. Este un camp obligatoriu.

**Facturare vanzari**: este propusa informatia care se afla in tab "Generalitati" din Registrul articole. In cazul in care acesta nu este prezent, nu este propusa nici o informatie, dar, in momentul contabilizarii facturii, va fi luata in considerare valoarea inserata in "Cheltuieli/Venituri de contropartida predefinit" din Registrul clientului sau se va genera un mesaj de eroare.

**Unitate de masura alternativa**: este propusa U.M. prezenta in gestiunea U.M. alternative din Registrul articolului care are flag-ul "implicit".

**Cantitatea alternativa**: este propusa valoarea relativa la U.M. alternativa, calculata prin multiplicarea sau divizarea cantitatii gestionale (relativa la U.M. principala) cu factorul de conversie inserat in registru.

RIBBON BAR: reprezintă meniul cu butoanele de executie, pentru fiecare operatie in parte aferente fiecarei ferestre din aria in care se lucreaza. Lista functionalitatilor posibile cuprinde:



| Functie | Functionalitate |
| --- | --- |
| Salvează | Permite salvarea operatiilor efectuate. Acelasi rezultat il puteti obtine si cand treceti pe o linie diferita de cea pe care doriti sa o salvati. |
| Articol nou | Permite inserarea unui articol nou. |
| Sterge articol | Permite eliminarea articolului inserat. |
| Variaza - Gaseste ultimele preturi | Permite cautarea conditiilor de vanzare pentru articol in documentele de vanzare precedente si permite preluarea pretului si a discountului; |
| Deschide disponibilitatea | Permite accesul la fereastra"Disponibilitate articol" |
| Expandeaza/Comprima grila articolelor | Permite vizualizarea sau ascunderea tab-urilor 'total', 'date', 'variante', 'loturi'. |
| Import articole | Import articole	Permite importul de articole dintr-un document. |
| Import barcode | Permite importul articolelor pe baza de cod de bare. |
| Inregistrari de gestiune | Permite adaugarea un articol tip nota din inregistrari de gestiune. |
| Atribut articol | Permite accesul la fereastra de atribute articole din Registru articol. |
| Scan | Permite adaugarea unui articol. |
| Sterge discounturi | Permite eliminarea discountului asociat unui articol. |



| Functie | Functionalitate |
| --- | --- |
| Document manager | Procedura da posibilitatea de a atasa documente. |






