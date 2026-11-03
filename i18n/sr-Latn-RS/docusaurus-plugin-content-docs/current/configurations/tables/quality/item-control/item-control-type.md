---
title: Tipovi kontrole artikala
sidebar_position: 9
---

Tabela se nalazi na putanji **Tablice > Kvalitet > Kontrola artikala > Tipovi kontrole artikala**.

U ovoj tabeli moguće je definisati *tipove kontrole artikala*.

*Tip kontrole artikla*, zajedno sa *godinom* i *brojem*, čini jedinstvenu šifru *kontrole artikla*.

Primeri upotrebe *tipova kontrole artikala* mogu se pronaći u sledećim modulima:
> **Uvoz artikala za kontrolu** – u *podacima zaglavlja*;
> **Kontrole artikala** – na listi *podataka zaglavlja*;
> **Sertifikati analize** – na kartici *Kontrole i zabeležene vrednosti*;
> **Parametri kontrole artikala** – na kartici *Opšte*;
> kao i u svim modulima u kojima se koristi *kontrola artikla*.

Tabela omogućava unos novih zapisa ili pretraživanje postojećih zapisa radi pregleda, izmene ili brisanja.

**Pretraživanje tipova kontrole artikala**

Obrazac se sastoji od područja za filtriranje i područja sa rezultatima. Nakon postavljanja željenih filtera dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli.

**Unos tipova kontrole artikala**

Za unos novih *tipova kontrole artikala* potrebno je kliknuti na prvi prazan red u tabeli ili pritisnuti dugme **Novo**.

Za novi zapis potrebno je uneti barem obavezna polja koja program zahteva: **Šifra** i **Opis**.

## Tipovi kontrole artikala

Ovo je lista u koju se unose osnovni podaci o *tipovima kontrole artikala*.

Lista se sastoji od sledećih podataka:

> **Tip kontrole**: šifra *tipa kontrole artikla*.
> **Opis tipa kontrole**: opis *tipa kontrole artikla*.
> **Skladište**: šifra *skladišta* koja se predlaže u **Kontrola artikala > Ispitivanja > Skladište**;
> reč je o skladištu za kontrolu kvaliteta koje se koristi za premeštanje artikala, nakon sprovedene kontrole, u odgovarajuće skladište usaglašenih odnosno neusaglašenih artikala (ako je postavljeno kao protivstavka u odgovarajućem *šablonu*).
> **Šablon za razduženje neusaglašenih artikala**: šifra *skladišnog šablona* koja se predlaže u **Kontrola artikala > Ispitivanja > Šablon za razduženje neusaglašenih artikala**;
> reč je o šablonu preuzimanja koji se koristi za premeštanje neusaglašenih artikala, nakon sprovedene kontrole, u odgovarajuće skladište neusaglašenih artikala;
> šablon protivstavke nije obavezan ako se ne želi upravljati skladištem škarta ili skladištem za ponovno zaprimanje artikala nakon naknadne obnove ili dorade kontrolisanog artikla.
> **Šablon za razduženje usaglašenih artikala**: šifra *skladišnog šablona* koja se predlaže u **Kontrola artikala > Ispitivanja > Šablon za razduženje usaglašenih artikala**;
> reč je o šablonu preuzimanja koji se koristi za premeštanje usaglašenih artikala, nakon sprovedene kontrole, u odgovarajuće skladište usaglašenih artikala;
> preporučuje se da se postavi odgovarajući *šablon* protivstavke kako bi usaglašeni artikal nakon kontrole ponovo postao raspoloživ.
> **Šablon za razduženje za destruktivna ispitivanja**: šifra *skladišnog šablona* koja se predlaže u **Kontrola artikala > Ispitivanja > Šablon za razduženje neusaglašenih artikala** ako je *ispitivanje* tipa *Destruktivno*;
> reč je o šablonu preuzimanja koji se koristi za premeštanje artikala nakon sprovedene kontrole;
> šablon protivstavke nije predviđen jer je *ispitivanje* destruktivno, pa naknadna obnova ili dorada kontrolisanog artikla nije moguća.
> **Tip predloženog sertifikata**: šifra *tipa sertifikata analize* koja se predlaže prilikom izrade novog *sertifikata analize* na osnovu ovog *tipa kontrole artikla*.
> **Opis skladišta**: opis *skladišta*.
> **Opis šablona istovara neusaglašenih artikala**: opis *šablona izlaza neusaglašenih artikala*.
> **Opis šablona istovara usaglašenih artikala**: opis *šablona izlaza usaglašenih artikala*.
> **Opis šablona istovara za destruktivna ispitivanja**: opis *šablona izlaza za destruktivna ispitivanja*.
> **Opis predloženog tipa sertifikata**: opis *predloženog tipa sertifikata*.
> **Napomene**: slobodne napomene.

### Dodatni podaci

Moguće je uneti opšte [dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) za *tipove kontrole artikala*.

Ti *dodatni podaci* mogu se naslediti u *kontrolama artikala* tog tipa.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sledeću poveznicu [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).