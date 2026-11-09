---
title: Upravljanje troškovima
sidebar_position: 8
---

**Funkcionalni kontekst**

Sistem upravlja dodatnim troškovima (prevoz, otprema i ostali troškovi) unutar prodajnih dokumenata, sa posebnim naglaskom na njihov prenos između povezanih dokumenata (ponuda, narudžbina, otpremnica i faktura).

Logika predviđa da se ti troškovi mogu definisati na nivou šifarnika kupaca, a zatim predlagati, izračunavati i prenositi u dokumente u skladu sa pravilima generisanja i aktivnim konfiguracijama.

**Upravljanje troškovima u šifarniku kupaca**

U odeljku [Šifarnik kupaca > Računovodstveni podaci > Troškovi/Popusti](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/charges-discounts) moguće je definisati primenljive troškove. Za svaki red troška dostupne su četiri oznake koje određuju od koje faze ciklusa dokumentacije trošak mora ponovo da se izračuna:

- izračunavanje od ponuda
- izračunavanje od narudžbina
- izračunavanje od dokumenata isporuke
- izračunavanje od faktura

Za svaki red troška može biti aktivna samo jedna oznaka. Ona određuje fazu procesa u kojoj sistem prekida prenos vrednosti i ponovo izračunava trošak direktno na osnovu podataka iz trenutnog dokumenta.

**Ponašanje kada nijedna oznaka nije aktivna**

Ako nijedna oznaka nije aktivna, sistem se ponaša na sledeći način: troškovi definisani u šifarniku kupaca predlažu se prilikom izrade dokumenta.

To znači da se trošak primenjuje samo na dokumente izrađene ručno ili putem dupliranja, uvoza iz Excela ili WebAPI-ja, odnosno u svim slučajevima u kojima ne postoji povezani izvorni dokument putem postupaka konverzije, razduživanja ili valorizacije.

U tim scenarijima sistem ne obavlja automatski prenos troškova između povezanih dokumenata.

Prilikom izrade novog dokumenta sistem automatski predlaže troškove definisane u šifarniku kupaca.

Ako se dokument generiše iz prethodnog dokumenta putem postupka razduživanja ili valorizacije, troškovi iz izvornog dokumenta prenose se u odredišni dokument.

Troškovi sa fiksnim iznosom prenose se bez promene vrednosti. Procentualni troškovi, s druge strane, moraju se pretvoriti u apsolutnu vrednost na osnovu odnosa prenete neto vrednosti i ukupne neto vrednosti izvornog dokumenta. Izračunavanje se obavlja prema sledećoj logici:

- Trošak u odredišnom dokumentu jednak je trošku iz izvornog dokumenta pomnoženom odnosom prenete neto vrednosti i neto vrednosti izvornog dokumenta.
- Ako se odredišni dokument generiše iz više izvornih dokumenata koji sadrže isti tip troška, odgovarajuće vrednosti se sabiraju i čine jedan objedinjeni iznos u završnom dokumentu.

**Ponašanje kada je aktivna oznaka za izračunavanje**

Kada je aktivna jedna od oznaka za izračunavanje (uz pravilo da je za svaki red troška dozvoljena samo jedna aktivna oznaka), način upravljanja bitno se menja.

U tom slučaju trošak koji treba primeniti u odredišnim dokumentima više se ne prenosi iz izvornog dokumenta, već se ponovo izračunava direktno na osnovu podataka iz šifarnika kupaca.

Ako odredišni dokument odgovara nivou definisanom oznakom (na primer, narudžbine, otpremnice ili fakture), sistem ne prenosi troškove iz prethodnih dokumenata, već ih ponovo kreira na osnovu trenutne konfiguracije kupca.

To znači da se eventualni troškovi iz izvornih dokumenata ne prenose, već se zamenjuju novim izračunavanjem.

**Izmene dokumenata nakon razduživanja ili valorizacije**

Ako se odredišni dokument izmeni nakon postupka razduživanja ili valorizacije (na primer, promenom količina, cena ili popusta u odnosu na izvorni dokument), prethodno izračunate vrednosti troškova možda više neće odgovarati izvornoj osnovici za izračunavanje.

Budući da nije moguće automatski odrediti novi ispravan iznos, korisniku se prikazuje sledeća poruka:

*„Količine, cene ili popusti izmenjeni su u odnosu na razduživanje generisano postupkom. Ostale troškove, troškove prevoza i otpreme korisnik mora ručno da prilagodi.”*