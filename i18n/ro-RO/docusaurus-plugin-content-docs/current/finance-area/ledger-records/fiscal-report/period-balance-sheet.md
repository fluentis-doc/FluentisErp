---
title: Bilanţ exerciţiu
sidebar_position: 1
---

Acest raport are rolul de a prezenta o versiune inițială a bilanțului firmei, subdivizând implicit cele patru secțiuni activ/pasiv/costuri/venituri. Subliniem că raportul funcționează doar pentru data competenței contabile inserată în antetul înregistrării, independent de data înregistrării acesteia în registru jurnal.

Diverse opțiuni prevăzute în fereastră:

- vizualizare sume semn negativ: dacă este setat, aplicația va insera fiecare cont analitic în secțiunea de apartenență (pe baza tipului de cont) cu, eventual, semnul negativ când soldul este în secțiunea opusă. Dacă flagul nu este inserat implicit, fiecare analitic va fi vizualizat în secțiunea relativă soldului său.

- detaliu registre: implicit aplicația exclude tot detaliul conturilor analitice asociate la clienţi, furnizori și la agenți. Doar cu flagul relativ vor fi vizualizate detaliile acestor conturi analitice.

- exclude conturile de ordine: acestea sunt vizualizate în partea inferioară a secțiunilor activ și pasiv. Cu acest flag conturile de ordine nu vor fi vizualizate în raport. Conturile de ordine nu fac obiectul închiderii/deschiderii conturilor în procedura automată a aplicației.

- comparație an precedent: cu această opțiune va fi executat CA_BilancioAnnoPrec.rpt care prevede coloana anului în curs și una pentru soldul aceleași perioade dar pentru anul precedent celui inserat ca filtru.

- exclude șablon: în cazul în care au fost relevate înregistrările pentru închidere conturi, pentru a obține soldurile bilanțului va fi necesară excluderea mișcărilor bazate pe șablonul pentru închiderea acesteia. Dacă se execută raportul fără să se excludă acest șablon va rezulta un raport cu toate soldurile zero (cu excepția conturilor de ordine pentru motivul expus mai sus): acesta poate fi folosit pentru verificarea corectitudinii finalizării operațiilor de închidere conturi.

- în raport pot fi inserate și mişcările derivante din înregistrările provizorii

Ultima observație se referă la alte două fișiere care se pot asocia procedurii prin intermediul gestiunii rapoartelor: raportul CA_BilancioSezioni.rpt vizualizează bilanțul pe secțiuni opuse, raportul CA_BilancioGruppi.rpt, în schimb, vizualizează structura planului de conturi cu relativele rezultate ale grupărilor pe conturi diverse.

Reamintim că maxima flexibilitate de reclasificare se obține utilizând modulul bilanț și relativele modele de reclasificare.

Opțiuni disponibile:

> **Vizualizare** - Buton pentru vizualizarea raportului bilanţ exerciţiu.  
> **Listare** - Buton pentru listarea raportului bilanţ exerciţiu.