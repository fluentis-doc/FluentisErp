---
title: Upravljanje troškovima
sidebar_position: 8
---

**Funkcionalni kontekst**

Sustav upravlja dodatnim troškovima (prijevoz, otprema i ostali troškovi) unutar prodajnih dokumenata, s posebnim naglaskom na njihov prijenos između povezanih dokumenata (ponude, narudžbe, otpremnice i računi).

Logika predviđa da se ti troškovi mogu definirati na razini šifarnika kupaca, a zatim predlagati, izračunavati i prenositi u dokumente u skladu s pravilima generiranja i aktivnim konfiguracijama.

**Upravljanje troškovima u šifarniku kupaca**

U odjeljku [Šifarnik kupaca > Računovodstveni podaci > Troškovi/Popusti](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/charges-discounts) moguće je definirati primjenjive troškove. Za svaki redak troška dostupne su četiri oznake koje određuju od koje se faze ciklusa dokumentacije trošak mora ponovno izračunati:

- izračun od ponuda
- izračun od narudžbi
- izračun od dokumenata isporuke
- izračun od računa

Za svaki redak troška može biti aktivna samo jedna oznaka. Ona određuje fazu procesa u kojoj sustav prekida prijenos vrijednosti i ponovno izračunava trošak izravno na temelju podataka trenutačnog dokumenta.

**Ponašanje kada nijedna oznaka nije aktivna**

Ako nijedna oznaka nije aktivna, sustav se ponaša na sljedeći način: troškovi definirani u šifarniku kupaca predlažu se prilikom izrade dokumenta.

To znači da se trošak primjenjuje samo na dokumente izrađene ručno ili putem dupliciranja, uvoza iz Excela ili WebAPI-ja, odnosno u svim slučajevima u kojima ne postoji povezani izvorni dokument putem postupaka konverzije, razduživanja ili valorizacije.

U tim scenarijima sustav ne provodi automatski prijenos troškova između povezanih dokumenata.

Prilikom izrade novog dokumenta sustav automatski predlaže troškove definirane u šifarniku kupaca.

Ako se dokument generira iz prethodnog dokumenta putem postupka razduživanja ili valorizacije, troškovi iz izvornog dokumenta prenose se u odredišni dokument.

Troškovi s fiksnim iznosom prenose se bez promjene vrijednosti. Postotni troškovi, s druge strane, moraju se pretvoriti u apsolutnu vrijednost na temelju omjera prenesene neto vrijednosti i ukupne neto vrijednosti izvornog dokumenta. Izračun se provodi prema sljedećoj logici:

- Trošak u odredišnom dokumentu jednak je trošku iz izvornog dokumenta pomnoženom omjerom prenesene neto vrijednosti i neto vrijednosti izvornog dokumenta.
- Ako se odredišni dokument generira iz više izvornih dokumenata koji sadržavaju istu vrstu troška, odgovarajuće vrijednosti zbrajaju se i čine jedan objedinjeni iznos u završnom dokumentu.

**Ponašanje kada je aktivna oznaka za izračun**

Kada je aktivna jedna od oznaka za izračun (uz pravilo da je za svaki redak troška dopuštena samo jedna aktivna oznaka), način upravljanja bitno se mijenja.

U tom se slučaju trošak koji treba primijeniti u odredišnim dokumentima više ne prenosi iz izvornog dokumenta, već se ponovno izračunava izravno na temelju podataka iz šifarnika kupaca.

Ako odredišni dokument odgovara razini definiranoj oznakom (primjerice, narudžbe, otpremnice ili računi), sustav ne prenosi troškove iz prethodnih dokumenata, već ih ponovno izrađuje na temelju trenutačne konfiguracije kupca.

To znači da se eventualni troškovi iz izvornih dokumenata ne prenose, već zamjenjuju novim izračunom.

**Izmjene dokumenata nakon razduživanja ili valorizacije**

Ako se odredišni dokument izmijeni nakon postupka razduživanja ili valorizacije (primjerice, promjenom količina, cijena ili popusta u odnosu na izvorni dokument), prethodno izračunate vrijednosti troškova možda više neće odgovarati izvornoj osnovici za izračun.

Budući da nije moguće automatski odrediti novi ispravan izračun, korisniku se prikazuje sljedeća poruka:

*„Količine, cijene ili popusti izmijenjeni su u odnosu na razduživanje generirano postupkom. Ostale troškove, troškove prijevoza i otpreme korisnik mora ručno prilagoditi.”*