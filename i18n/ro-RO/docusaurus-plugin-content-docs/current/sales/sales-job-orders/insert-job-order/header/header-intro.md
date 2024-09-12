---
title: Antet
sidebar_position: 1
---

Pentru inserarea unei comenzi de vanzare sunt necesare urmatoarele.:

Inserare **tip comanda** care in prealabil a fost stabilit si configurat in sectiunea de [Home>Tabele>Vanzare]. In momentul selectarii clientului sunt propuse toate datele specifice tabului “Antet” din document, pe baza datelor inserate anterior in Registrul clientului.

Datele propuse, daca au fost inserate in registru, sunt:

**Expeditii**: este propusa informatia inserata in Registrul clientului in tab ‘Expeditii' (tabelul de referinta este "Expeditii");

**Transport**: este propusa informatia inserata in Registrul clientului in tab ‘Expeditii' (tabelul de referinta este "Taxe de transport");

**Ambalaj**: este propusa informatia inserata in Registrul clientului in tab ‘Expeditii' (tabelul de referinta este "Ambalaje");

**Tara**: este propusa informatia inserata in tab-ul “Date comune” din Registrului clientului (tabelul de referinta este "Tari");

**Zona**: este propusa informatia inserata in Registrul clientului in tab ‘Expeditii' (tabelul de referinta este "Zone");

**Oferta de referinta**: este propusa informatia inserata in Registrul clientului in tab Oferte, dar numai in cazul in care exista o oferta fixa implicita (tabelul de referinta este "Oferte de Vanzare");

**Valabila De la**: este data de la care este valabila oferta selectata;

**Valabila (pina) La**: este data pana la care este valabila oferta selectata; Limba: este propusa informatia inserata in tab-ul “Date comune” din Registrului clientului.

**Deviza**: este propusa informatia inserata in Registrul clientului in tab ‘Administrativ' (tabelul de referinta este Devize);

Schimb valutar: daca valuta societatii cu care se opereaza este aceiasi cu a documentului, valoarea raportata va fi 1, daca nu, valoarea va fi preluata din Schimburi valutare sau Schimburi fixe pentru Euro;

**Data valutei**: este data la care este calculata valoarea schimbului ca raport dintre moneda societatii cu care se lucreaza si cea a clientului, pe baza tabelului Schimburi valutare;

**Note initiale**: pot fi inserate note care au fost in prealabil definite in "Note codificate". Pentru aceasta trebuie sa faceti dubluclic in campul "Note initiale" pentru a deschide "Help note codificate" si pentru a selecta informatiile pe care le doriti;

**Note registru**: este propusa informatia inserata in Registrul clientului in tab ‘Administrativ';

**Destinatie si destinatar**: este propusa informatia inserata in Registrul clientului in tab ‘Expeditii', numai in cazul in care exista destinatari si destinatii implicite. Combo box-ul va propune toti destinatarii si destinatiile inserate in registrul clientului respectiv. Comanda, in momentul in care este creata, nu are nici un flag si setat. Insa, pentru a transfera articolele din comanda in ordin trebuie sa aveti flag-ul "Listat" si sa inserati "Data confirmarii comenzii".

**Situatia comenzii**, in momentul crearii ei este "Neexecutata". Dupa ce comanda suporta operatii de transfer, programul ii schimba automat statusul.

RIBBON BAR: reprezinta meniul cu butoanele de executie, pentru fiecare operatie in parte aferente fiecarei ferestre din aria in care se lucreaza. Lista functionalitatiilor posibile cuprinde:



| Functie | Functionalitate |
| --- | --- |
| Salvează | Salvarea comenzii de vanzare. |
| Sterge plati | Permite stergerea platii inserate in antet; plata este preluata din Registrul clientului. |



| Functie | Functionalitate |
| --- | --- |
|  [Document manager](/docs/guide/operations-with-data/document-manager)  | Procedura da posibilitatea de a atasa documente. |






