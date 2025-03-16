---
title: Pretraga računovodstvenih zapisa
sidebar_position: 7
---

Ovaj obrazac omogućuje pretraživanje prethodno unesenih računovodstvenih zapisa, a po potrebi i njihovo uređivanje (ili pregledavanje) odabirom odgovarajućeg retka i dvostrukim klikom.



| Funkcija | Značenje |
| --- | --- |
| Traži | Tipka za pokretanje pretraživanja unesenih računovodstvenih zapisa prema postavljenim filtrima. |
| Novo | Tipka za unos novog računovodstvenog zapisa. |
| Izmjeni | Tipka za uređivanje prethodno unesenog računovodstvenog zapisa. |
| Prikaži | Tipka za pregled prethodno unesenog računovodstvenog zapisa. |
| Otkaži | Tipka za brisanje prethodno unesenog računovodstvenog zapisa. |
| Izvorni dokument	 | Tipka za pozivanje izvornog dokumenta iz kojeg je nastao računovodstveni zapis. |
| Dupliciraj | Tipka koji omogućuje stvaranje dupliciranog računovodstvenog zapisa kako bi se stvorio sličan zapis, uz izmjenu odgovarajućih elemenata, bez potrebe za unosom ispočetka. |

Glavna polja za filtriranje pri pretraživanju računovodstvenih zapisa su:  

**Tip temeljnice**: padajući izbornik, kao što je uobičajeno u Fluentisu, omogućuje odabir više od jedne stavke istovremenim pritiskom na tipku Ctrl.

**Od / Do datuma knjiženja i Od / Do datuma obračuna**: To su referentni datumi računovodstvenih zapisa; napomena: filteri rade s AND uvjetom, stoga se sužavanje pretrage “zbraja”. U slučaju nenamjernog nepodudaranja datuma registracije i datuma kompetencije (računovodstvene), kako bi se pronašao željeni zapis, preporučuje se uklanjanje filtera za datum obračuna ili filtera za datum knjiženja.

**Konto**: Riječ je o podkontu unesenom u zaglavlje zapisa (Kupac ili dobavljač).

**Vrsta konta**: omogućuje odabir jedne ili više vrsta konta (troškovi / prihodi / imovina / obveze ili konta iz šifarnika kao što su kupci, dobavljači, banke i agenti), držeći pritisnutu tipku Ctrl. Također, otvaranjem dodatnih opcija moguće je isključiti tipove konta iz šifarnika.

![](/img/it-it/finance-area/ledger-records/records/search-ledger-records/image01.png)

U sekciji filtara nalazi se expander koji se odnosi na moguće informacije povezane s državom elektroničkog računa, a koji se odnosi na dokumente koji imaju interakciju sa Sustavom razmjene:

![](/img/it-it/finance-area/ledger-records/records/search-ledger-records/image02.png)

U traci izbornika, u sekciji posvećenoj elektroničkom izdavanju računa, pomoću tipke **Registar dokumenata Sdi** moguće je pregledati radnje izvršene na odabranom dokumentu. Funkcija **Ispiši** omogućuje ispis XML dokumenta, dok funkcije **Preuzmi privitak** ili **Preuzmi sadržaj registra** omogućuju preuzimanje XML datoteke.

Pregled rezultata prikazuje nekoliko stupaca u kojima se navodi stanje i ishod dokumenata u odnosu na njihovu predaju Centralnoj platformi:

![](/img/it-it/finance-area/ledger-records/records/search-ledger-records/image06.png)

-      **Stanje računa**: sadrži opis stanja dokumenta, navodeći kako interno stanje u Fluentisu, tako i stanje prikazano od Fluentis Business Hub-a i direktno preuzeto od Centralne platforme

-      **Naziv datoteke**: ime datoteke koja se stvara kada dokument dosegne stanje GENERIRANA; u originalnom formatu ili nakon digitalnog potpisa, predstavlja fakturirani dokument koji treba poslati Centralnoj platformi.

-      **Id**: jedinstveni identifikator koji se dodjeljuje dokumentu u trenutku prijema.

-      **Datum primanja dokumenta**: datum kada je sustav razmjene primio dokument. Ova informacija se dobiva iz obavijesti o prijemu koju Centralna platforma izdaje nakon prijema pošiljke i prije nego što nastavi s formalnim provjerama datoteke.

-      **Datum zatvaranja**: datum zatvaranja tok računa (npr. dokument Dostavljen).

-      **Datum posljednjeg događaja**: datum posljednje promjene stanja na datoteci, bilo ručno ili kao rezultat napredovanja.






