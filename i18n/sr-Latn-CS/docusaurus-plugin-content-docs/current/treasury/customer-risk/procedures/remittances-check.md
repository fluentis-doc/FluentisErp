---
title: Kontrola doznake 
sidebar_position: 1
---
Obrazac se nalazi u Riznica > Rizik kupca > Procedure > Kontrola doznake.

Ovaj obrazac prikazuje detaljan pregled evidentiranih uplata (primitaka) koje su povezane s kupcem, unutar vremenskog raspona i prema filtrima unesenima u zaglavlje obrasca.

## Kako provjeriti stanje uplata kupca

1. Po potrebi proširite sekciju filtera i obavezno unesite račun kupca čije uplate želite provjeriti
2. Upotrijebite ostale filtere za pretraživanje relevantnih evidencija uplata
3. Pritisnite gumb Pretraži i pregledajte rezultate u središnjoj mreži, dok se prosječne vrijednosti za cjelokupno stanje kupca prikazuju u donjem dijelu obrasca.

## Kako čitati i tumačiti rezultate

- Evidencije uplata za odabranog kupca, unutar postavljenog vremenskog raspona, prikazuju se po datumu, od najstarije prema najnovijoj. U obrascu su prikazane od najnovije na vrhu prema najstarijoj na dnu, a prikazuje se i **datum dospijeća** otvorene stavke koja je naplaćena.

- Izračun je **skalarnog tipa**, što znači da se retci međusobno uspoređuju kako bi se izračunale razlike u danima od prvog retka prema sljedećima. Računaju se tzv. **Brojevi**, odnosno iznos pomnožen s brojem dana (na isti način kao u skalarno obračunatim izvodima koje banke šalju za tekuće račune).

- Uzima se u obzir i **valuta banke**,  tj. na računovodstvenom knjiženju naplate mogu biti dodani tzv. bankovni valutni dani, odnosno razmak između dana kada je kupac naložio uplatu i stvarnog primitka sredstava. Ovi valutni dani prikazani su na računovodstvenom knjiženju ako je aktivirana oznaka *Dani banke* u [Tip temeljnice](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates), a mogu biti automatski predloženi kroz [šifarnik ](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry) (Tab *Dani banke*) banke naplate ili ručno uneseni prilikom knjiženja. 

Ako se ova valuta ne unese, prema zadanim postavkama uzima se datum knjiženja naplate, pa je broj dodatnih **Valutnih dana** u odnosu na datum naplate jednak nuli.

Dakle, polje **Valuta naplate** bit će jednako datumu knjiženja, dok će polja **Valutni dani** i **Valutni brojevi** biti jednaka nuli.

- Izračun uključuje brojanje **Dana dospijeća** kao usporedbu između prvog retka (gdje je izračun uvijek nula) i sljedećih redaka. Na primjer, ako je prvo dospijeće bilo 9. veljače, a sljedeće 20. veljače, tada je broj dana dospijeća za drugi redak 11. 

- Izračun **Valutnih brojeva dospijeća** dobiva se množenjem broja dana dospijeća s iznosom naplate. 


<details>

  <summary>**Ostali podaci u detaljnoj mreži**: Kliknite za proširenje!</summary>
 
 - **Datum / Broj knjiženja**: Preuzeto iz zaglavlja knjiženja naplate kupca
 - **Opis uzroka**: knjigovodstveni razlog korišten u knjiženju naplate
 - **Vrsta dokumenta**: preuzeto iz otvorenog dokumenta koji je naplaćen, obično se odnosi na vrstu fakture
 - **Broj dokumenta**: broj fakture koja je otvorila naplaćeni dokument
 - **Datum dokumenta**: datum fakture koja je otvorila naplaćeni dokument
 - **Valuta**: valuta naplaćenog dokumenta
 - **Izvorni iznos u valuti**: iznos izvorne partije ako je valuta različita od valute tvrtke (npr. različito od eura)
 - **Izvorni iznos u valuti tvrtke**: iznos partije u valuti tvrtke (obično euro)
 - **Preostali iznos u valuti / u valuti tvrtke**: preostali iznos partije ako je djelomično naplaćena (izražen u izvornim valutama ako je različito od valute tvrtke, ili u eurima)
 - **Iznos naplate u valuti**: vrijednost izvršene naplate vezana za naplaćenu partiju, ako je valuta različita od valute tvrtke (npr. različito od eura) ili u eurima

</details>


### U donjem dijelu forme izvršava se konačni izračun <u>prosječnih vrijednosti</u>.

Izračunati prosječni podaci u formi su:

- **Prosječni datum valute naplate** : izračunava se zbrajanjem svih iznosa uplata (tj. naplata) prikazanih u formi i zbrajanjem svih *brojeva valute* prikazanih u formi, te dijeljenjem tih dvaju zbrojeva (Zbroj brojeva valute / Zbroj iznosa uplata) kako bi se dobio prosječni broj dana valute. Na kraju se **prosječni broj dana valute** dodaje na najraniji datum valute naplate (tj. na najstariji datum).

- **Prosječni datum dospijeća** : izračunava se zbrajanjem svih iznosa uplata prikazanih u formi i zbrajanjem svih *brojeva dospijeća* prikazanih u formi, te dijeljenjem tih dvaju zbrojeva (Zbroj brojeva dospijeća / Zbroj iznosa uplata) kako bi se dobio prosječni broj dana dospijeća. Na kraju se **prosječni broj dana dospijeća** dodaje na najraniji datum dospijeća (tj. na najstariji datum).

:::note[Napomena]
U slučaju efekata, datum valute postavlja se jednak datum dospijeća, neovisno o datumu knjiženja efekta.
:::

<details>

  <summary>**Izračun prosjeka u praksi**: Kliknite za proširenje!</summary>
 
 odnosom između zbroja iznosa i zbroja dana*iznosa dobiva se prosječan broj dana koji se dodaje na prvi datum kako bi se dobio prosječni datum.

</details>


- **Odmak** ili razlika između prosječnog datuma dospijeća i prosječnog datuma valute naplate, koji predstavlja prosječno kašnjenje u naplati između dospijeća i valute: ovaj broj dana može se spremiti, putem gumba **Ažuriraj broj dana kašnjenja**, u kartoteci klijenta u polju *Prosječni broj dana kašnjenja*, polju koje se koristi u simulacijama cash flow-a za dobivanje predviđenog datuma dospijeća financijskog toka.

<details>

  <summary>**Ostala polja za izračun u odjeljku sažetka**: Kliknite za proširenje!</summary>
 
 - **Ukupni izvorni iznos u valuti**: Zbroj iznosa u valuti naplaćenih stavki
 - **Ukupni izvorni iznos u eurima**: protuvrijednost u eurima iz prethodnog polja
 - **Ukupni preostali iznos u valuti**: zbroj preostalih vrijednosti naplaćenih stavki; ako su stavke potpuno naplaćene, vrijednost je nula, inače korisno za djelomično naplaćene stavke
 - **Ukupni preostali iznos u eurima**: protuvrijednost u eurima iz prethodnog polja
 - **Ukupni iznos naplate u valuti**: zbroj iznosa naplata u valuti
 - **Ukupni iznos naplate u eurima**: protuvrijednost u eurima iz prethodnog polja
 - **Ukupni brojevi valuta**: zbroj polja Brojevi valuta iz redaka tablice, koristi se za izračun konačnih prosjeka
 - **Ukupni brojevi dospijeća**: zbroj polja Brojevi dospijeća iz redaka tablice, koristi se za izračun konačnih prosjeka

</details>

Obrazac omogućava ispis detalja izračuna.






