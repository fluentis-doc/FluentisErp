---
title: Upravljanje povratima i knjižnim odobrenjima
sidebar_position: 3
---

U modulu **Prodaja** sistema Fluentis, upravljanje povratima i knjižnim odobrenjima omogućava evidentiranje i praćenje povrata robe ili usluga od strane kupaca, uz generisanje potrebnih računovodstvenih i logističkih dokumenata. Ovaj proces obezbeđuje pravilno praćenje poslovnih događaja i ažuriranje stanja zaliha u skladištu, kao i računovodstvenih pozicija kupaca u realnom vremenu.

Fluentis podržava različite vrste povrata:

- **Povrat sa knjižnim odobrenjem**: povrat robe uz izdavanje knjižnog odobrenja radi storniranja prethodno fakturisanog iznosa. Roba može biti vraćena putem otpremnice ili direktno prilikom izdavanja knjižnog odobrenja, u zavisnosti od podešavanja skladišta.

- **Povrat bez knjižnog odobrenja**: povrat robe bez izdavanja knjižnog odobrenja, na primer radi zamene robe. U tom slučaju najčešće se koriste otpremnice za evidentiranje kretanja robe u skladištu.

Povrat može biti:

- **Delimičan povrat**: vraća se samo deo isporučene robe.

- **Potpun povrat**: vraća se kompletna isporuka.

## Operativni proces

Dokumenti tipa **Povrat** mogu se generisati na dva načina:

### 1. Putem procedure **Storno**

Procedura **Storno** dostupna je na alatnoj traci u pretragama otpremnica ili faktura.

Ovom procedurom moguće je delimično ili potpuno stornirati izabrane dokumente iz liste rezultata.

Nakon klika na dugme **Storno**, otvara se prozor u kojem je potrebno:

- odabrati stavke koje se storniraju;
- definisati količinu za storno;
- izabrati tip dokumenta koji će biti kreiran (moguće je izabrati samo tipove dokumenata čija je priroda **Povrat**);
- uneti razlog skladišnog storna.

### 2. Ručnim kreiranjem nove otpremnice ili fakture

U ovom slučaju potrebno je:

- izabrati tip dokumenta čija je priroda **Povrat**;
- odabrati kupca;
- uneti artikle koji se vraćaju.

Kod ručno kreiranih povrata ne postoji automatska veza sa originalnim dokumentom, pa korisnik mora ručno povezati dokumente.

Ako je generisana povratna otpremnica, iz nje je moguće kreirati knjižno odobrenje odgovarajućom procedurom ili ručno.

Prilikom čuvanja ručno unetog knjižnog odobrenja sistem će upozoriti korisnika da količina mora biti negativna. Ova funkcionalnost omogućava pravilno ažuriranje prometa, pri čemu se knjižna odobrenja evidentiraju sa negativnim iznosom.

:::note Pažnja

U tabeli [Tipovi otpremnica](/docs/configurations/tables/sales/delivery-notes-type), tipu otpremnice sa prirodom **Povrat** mora biti pridružen [Tip fakture](/docs/configurations/tables/sales/invoices-type) tipa **Knjižno odobrenje**.

:::

Za fakturisanje povratnih otpremnica u knjižno odobrenje mogu postojati različiti slučajevi, u zavisnosti od znakova količine i cene na izvornoj otpremnici:

1. Otpremnica – Povrat, količina **10**, cena **10** → stavka fakture (standardna ili knjižno odobrenje): količina **-10**, cena **10**
2. Otpremnica – Povrat, količina **-10**, cena **10** → stavka standardne fakture: količina **10**, cena **10**
3. Otpremnica – Povrat, količina **-10**, cena **10** → stavka knjižnog odobrenja: količina **-10**, cena **10**
4. Otpremnica – Povrat, količina **10**, cena **-10** → stavka standardne fakture: količina **-10**, cena **-10**
5. Otpremnica – Povrat, količina **10**, cena **-10** → stavka knjižnog odobrenja: količina **-10**, cena **10**
6. Otpremnica – Povrat, količina **-10**, cena **-10** → stavka knjižnog odobrenja: količina **10**, cena **-10**
7. Otpremnica – Povrat, količina **-10**, cena **-10** → stavka knjižnog odobrenja: količina **-10**, cena **10**
8. Otpremnica – Standardna, količina **10**, cena **10** → stavka knjižnog odobrenja: količina **-10**, cena **10**
9. Otpremnica – Standardna, količina **-10**, cena **10** → stavka knjižnog odobrenja: količina **-10**, cena **10**
10. Otpremnica – Standardna, količina **10**, cena **-10** → stavka knjižnog odobrenja: količina **-10**, cena **10**
11. Otpremnica – Standardna, količina **-10**, cena **-10** → stavka knjižnog odobrenja: količina **-10**, cena **10**

## Konfiguracije i parametri

Za pravilno upravljanje povratima i knjižnim odobrenjima potrebno je obezbediti konfiguraciju sledećih elemenata:

- **Tipovi dokumenata**: definisanje tipova dokumenata za povrate i knjižna odobrenja.

- **Skladište i skladišni razlog**: svaki tip dokumenta koji utiče na stanje skladišta mora biti povezan sa [Skladištem](/docs/configurations/tables/logistics/warehouses) i odgovarajućim [Skladišnim razlogom](/docs/configurations/tables/logistics/warehouse-templates).

U povratima i knjižnim odobrenjima skladišno kretanje će uglavnom biti ulaznog tipa, jer se roba vraća od kupca nazad u skladište.

## Upravljanje mešovitim znakovima – NAPOMENA ZA PARTNERE I PROJEKT MENADŽERE

Mogućnost knjiženja dokumenata sa mešovitim znakovima mora biti posebno omogućena SQL skriptom.

:::note Tehnička napomena za aktivaciju

Potrebno je izvršiti sledeći SQL upit:

sql
select * 
from [Fluentis].[SH_LocalizationParameters]
where [SH_LocalizationParameters].[SHLP_Code] like 'VE-SalesInvoice_CreditNotesPostingSigns'
```

Identifikujte ID traženog parametra.

Zatim izvršite:

sql
select *
from [Fluentis].[SH_CompanyParameters]
where [SH_CompanyParameters].[SHCP_Parameter_SHLP_Id] = .....Pronađite red za kompaniju koja se koristi preko polja:

SHCP_Company_SHC_Id

i ažurirajte vrednost polja:

SHCP_Value

### Vrednosti parametra

**0**

Trenutna podrazumevana postavka.

Ne dozvoljava mešovite znakove.

Knjižna odobrenja su uvek prisilno negativna.

**-1**

Knjižna odobrenja se uvek invertuju.

Pozitivno postaje negativno, a negativno postaje pozitivno.

**+1**

Trenutno preporučena postavka za rad sa mešovitim znakovima.

I fakture i knjižna odobrenja knjiže se sa stvarnim znakom:

- pozitivne vrednosti ostaju pozitivne;
- negativne vrednosti ostaju negativne.

:::