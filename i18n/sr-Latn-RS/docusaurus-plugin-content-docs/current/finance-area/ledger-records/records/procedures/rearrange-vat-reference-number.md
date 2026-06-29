---
title: Ispravka rednih brojeva PDV protokola
sidebar_position: 10
---

Ova procedura omogućava masovnu izmenu brojeva PDV protokola koji su dodeljeni računovodstvenim knjiženjima (na primer ulaznim ili izlaznim fakturama), kako bi se ispravile greške ili izvršile promene zbog posebnih potreba.
Pored same izmene, ova funkcionalnost može poslužiti i kao alat za kontrolu, na primer za pronalaženje nedostajućih brojeva protokola ili neusaglašenosti između broja protokola i broja dokumenta, što može ukazivati na fiskalne nepravilnosti.
Prilikom otvaranja obrasca potrebno je odabrati PDV registar koji se proverava ili menja, kao i vremenski period na koji se provera odnosi. Za kompletnu kontrolu preporučuje se odabir perioda od početka poslovne godine.
Nakon toga pretraga se pokreće pomoću komande **Traži** koja se nalazi na traci sa alatkama.
Rezultati će biti prikazani u prvom pregledu ispod filtera.

![](/img/it-it/finance-area/ledger-records/records/rearrange-vat-reference-number/image02.png)

Pošto je prilikom kontrole često potrebno sortirati podatke ne samo po broju protokola već i po broju dokumenta, dostupna je opcija **Posmatraj brojeve dokumenata kao numeričke vrednosti**, koja omogućava pravilno numeričko sortiranje.

Primer:

- kada opcija nije aktivna, redosled po broju dokumenta biće: 1, 10, 100, 2, 20, 200...
- kada je opcija aktivna, redosled će biti: 1, 2, 3... 10... 20... 100... 200.

Izborom jednog reda iz liste rezultata (**Knjiženja glavne knjige**) u donja dva pregleda prikazaće se detalji koji se odnose na PDV registar i dnevnik knjiženja. Ovi podaci predstavljaju detalje računovodstvenog knjiženja koje je uneo korisnik ili koje je generisala neka automatska procedura.

## Načini prenumeracije

### Delimična prenumeracija

Primer: potrebno je pomeriti sve protokole počevši od broja **3**, kako bi se oslobodio jedan broj za naknadni unos nedostajućeg dokumenta.

Postupak je sledeći:

1. Označiti sve redove koji će biti obuhvaćeni prenumeracijom (na primer sve od protokola broj **3** nadalje). Za višestruki izbor mogu se koristiti taster **Shift** ili prevlačenje mišem.
2. U polje **Početni broj**, koje se nalazi u donjem delu obrasca, uneti novi početni broj (na primer **4**).
3. Na traci sa alatkama kliknuti na **Automatska numeracija**.
4. Program će predložiti nove brojeve protokola.
5. Kliknuti na **Sačuvaj** kako bi se promene trajno upisale.

![](/img/it-it/finance-area/ledger-records/records/rearrange-vat-reference-number/image03.png)   ![](/img/it-it/finance-area/ledger-records/records/rearrange-vat-reference-number/image04.png)

Alternativno (preporučuje se samo za izmene pojedinačnih ili manjeg broja redova):

1. Pozicionirati se na red koji se odnosi na knjiženje sa protokolom broj **3** i u polje za novi PDV protokol uneti novi broj (na primer **4**).
2. Kliknuti na **Sačuvaj** (na traci sa alatkama) kako bi se promena potvrdila.

### Potpuna prenumeracija

1. Označiti sve redove rezultata dobijene primenom filtera (na primer sva knjiženja od početka godine do danas) pomoću miša ili kombinacijom tastera **Ctrl + A**.
2. U polje **Početni broj**, koje se nalazi u donjem delu obrasca, uneti početni broj protokola (u ovom slučaju **1**).
3. Na traci sa alatkama kliknuti na **Automatska numeracija**.
4. Program će predložiti nove brojeve protokola.
5. Kliknuti na **Sačuvaj** kako bi se promene trajno upisale.

Moguće je promeniti kriterijum sortiranja koji će se koristiti prilikom prenumeracije odabirom jedne od ponuđenih opcija u donjem delu obrasca.

![](/img/it-it/finance-area/ledger-records/records/rearrange-vat-reference-number/image05.png)

**Datum/broj knjiženja**: broj protokola dodeljuje se prema redosledu datuma knjiženja, a za knjiženja sa istim datumom prema broju knjiženja.

**Datum/broj dokumenta**: broj protokola dodeljuje se prema redosledu datuma dokumenta, a za dokumente sa istim datumom prema broju dokumenta.

**Vrsta dokumenta / datum / broj**: broj protokola dodeljuje se prema vrsti dokumenta (na primer fakture ili knjižna odobrenja), a za dokumente iste vrste prema datumu dokumenta i broju dokumenta.

Opcija **Ponovo upiši opise**, kada je aktivna, ažurira opis knjiženja tokom postupka prenumeracije. Na osnovu podešavanja definisanih u **[šablonu knjiženja](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** omogućava automatsko preuzimanje novog broja PDV protokola u opis knjiženja.