---
title: Pregled PDV stavki
sidebar_position: 5
---

:::tip[Čemu služi]

Obrazac omogućava **prikaz zapisa (prometa)** izvršenih nad **PDV evidencijama**, zajedno sa odgovarajućim računovodstvenim zapisima (na primer, prijemne ili izlazne fakture).

Koristan je za **kontrolu** ili **pregled podataka** povezanih sa PDV-om.

Prikaz na ekranu je veoma fleksibilan i omogućava brzo filtriranje, izvoz podataka ili direktan ulazak u izmenu pojedinačnog zapisa dvostrukim klikom.
:::

## Zaglavlje

U gornjem delu obrasca nalaze se **filteri**:

**PDV knjige:** omogućavaju izdvajanje zapisa koji pripadaju jednoj ili više PDV knjiga (višestruki izbor moguć je preko padajuće liste uz držanje tastera **Ctrl**).

**PDV šifra:** filtrira zapise prema određenoj stopi ili PDV šifri (oslobođenje, izuzeće i sl.).

**Od datuma obračuna PDV-a / Do datuma obračuna PDV-a:** pretražuje zapise prema datumu obračuna PDV-a, odnosno datumu kada će promet biti uključen u obračun PDV-a.

:::tip[Napomena]
**Glavni filter** odnosi se na obračunski period PDV-a, a ne na datum računovodstvenog knjiženja. Kao što je poznato, datum obračuna PDV-a može biti različit od datuma knjiženja i može se naknadno promeniti.

Ako je potrebno pretraživanje prema datumu knjiženja, može se koristiti filter odgovarajuće kolone u tabeli rezultata.
:::

**Operacije:** filtrira podatke prema tri kategorije transakcija (izlazne, ulazne i prenos poreske obaveze), koje služe za povezivanje PDV šifri sa odgovarajućim redovima godišnje PDV prijave. Pogledajte tablicu [**Stope/Metode PDV-a**](/docs/configurations/tables/finance/vat-rates).

**Red poreske prijave:** filter koji se koristi zajedno sa prethodnim. Nakon izbora vrste operacije moguće je dodatno filtrirati PDV šifre koje pripadaju određenom redu godišnje PDV prijave. Pogledajte tablicu [**Stope/Metode PDV-a**](/docs/configurations/tables/finance/vat-rates).

**Vrsta PDV-a:** filtrira podatke prema vrsti PDV transakcije. Ovaj podatak se dodeljuje prilikom kreiranja računovodstvenog zapisa, u odeljku *PDV podaci* putem istoimenog polja.

**Konto / Podkonto:** omogućava filtriranje prema kontu koji je korišćen u računovodstvenom zapisu iz kojeg je nastala PDV stavka. Kod nabavke ili prodaje to je najčešće konto troška ili prihoda.

**Konto zaglavlja:** omogućava filtriranje prema kontu unetom u zaglavlje računovodstvenog zapisa koji je generisao PDV stavku. Kod nabavke ili prodaje to je najčešće konto dobavljača ili kupca.

## Tabela podataka

Tabela sadrži fiksne kolone sa osnovnim vrednostima svakog prometa, kao što su osnovica, porez, nepriznati iznos i ukupni iznosi.

Pored njih, dostupne su i sledeće kolone:

- **Datum i broj knjiženja** koje je generisalo PDV zapis
- **Broj dokumenta**, na primer broj izlazne ili ulazne fakture
- **GLK šablon** (šifra i opis) korišćen za računovodstveni zapis koji je generisao PDV zapis
- **PDV knjiga** (šifra i opis) u kojoj je evidentiran zapis
- **PDV protokol** zapisa
- **Konto korišćen u zaglavlju** zapisa (na primer kupac ili dobavljač)
- **Protukonto** korišćen u računovodstvenom zapisu (na primer konto troška ili prihoda) koji je generisao PDV zapis
- **PDV šifra** (stopa, oslobođenje, izuzeće i dr.) korišćena u zapisu
- **Procenat (nepriznato)** koji se nalazi na PDV stavci računovodstvenog zapisa. Vrednost se može ručno promeniti, ali se najčešće automatski preuzima iz odgovarajuće [**PDV stope/metode**](/docs/configurations/tables/finance/vat-rates).
- **Od / Do datuma obračuna**, odnosi se na obračunski period troška ili prihoda i nije direktno povezan sa PDV zapisom, iako je definisan u PDV delu računovodstvenog zapisa.
- **Obračun u gornjoj/donjoj vrednosti**, podatak definisan u PDV delu računovodstvenog zapisa koji se koristi za obračun [**Plafona/limita**](/docs/finance-area/declarations/declarations/plafond/general-overview).
- **Datum obračuna PDV-a**, podatak koji se koristi i u filterima zaglavlja obrasca, a ovde je prikazan za svaki pojedinačni zapis.
- **Detaljan opis**, istoimeno polje iz PDV dela računovodstvenog zapisa.
- **Datum obračuna**, odnosi se na datum obračuna iz zaglavlja računovodstvenog zapisa koji je generisao PDV zapis.
- **Datum dokumenta**, datum fakture iz zaglavlja računovodstvenog zapisa koji je generisao PDV zapis.
- **Tip šifre**, odnosi se na polje **Tip dokumenta** iz zaglavlja računovodstvenog zapisa koji je generisao PDV zapis.
- **Tip fiskalne operacije** (šifra/opis), polje iz PDV dela računovodstvenog zapisa koje služi za povezivanje sa vrstom nabavke potrebnom za statističke podatke u godišnjoj PDV prijavi. Polje je vidljivo samo ako je omogućeno u parametrima računovodstvenih šablona.

## Ukupni iznosi u donjem delu obrasca

- **Osnovica / Porez / Ukupno – Izabrano**: prikazuje zbir za trenutno označene redove (moguće je označiti više redova držanjem tastera **Ctrl**).
- **Osnovica / Porez / Ukupno**: prikazuje zbir svih redova prikazanih u tabeli rezultata, uz primenu filtera iz zaglavlja obrasca i eventualnih filtera postavljenih na kolonama tabele.