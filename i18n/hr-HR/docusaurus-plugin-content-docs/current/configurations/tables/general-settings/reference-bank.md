---
title: Banka prezentacije
sidebar_position: 1
---

U ovu tablicu unose se banke za naplatu koje se mogu pozivati u matičnim podacima Klijenata i Dobavljača (i Matičnim podacima Banaka) radi upravljanja raznim automatizmima, kao što su ponajprije uključivanje u ispis (npr. bankovni podaci za plaćanje na izlaznom računu) i kanalizacija financijskih tokova vezanih uz otvorene stavke itd.   

Unutar ove tablice moguće je unijeti i banke društva i banke druge strane (klijenta ili dobavljača).

:::tip
Preporučuje se, primjerice, koristiti slovnu šifru za banke društva, a brojčanu šifru za banke klijenata i dobavljača kako bi se one jasno razlikovale.  

Također, moguće je unijeti retke s potpunim podacima IBAN i/ili SWIFT (preporučeno za banke društva) ili retke s isključivo ABI i CAB šiframa (preporučeno za banke druge strane za koje se IBAN i SWIFT mogu navesti u poljima unutar mreže u matičnim podacima).  
:::

Ako je redak u tablici Banka za naplatu potpun s IBAN i/ili SWIFT, uz ABI i CAB, pozivanjem tog retka putem padajuće liste podaci će biti preneseni u mrežu u matičnim podacima. U suprotnom, prenijet će se samo ABI i CAB, no uvijek je moguće naknadno unijeti nedostajuće podatke izravno u mrežu.

Ovo se preporučuje za banke druge strane kako bi se izbjeglo kodiranje prevelikog broja redaka u tablici Banka za naplatu koji se koriste samo za jednog klijenta ili dobavljača. Poželjno je navesti samo podatke o bankovnoj poslovnici (ABI i CAB) preko koje više klijenata ili dobavljača može imati tekući račun.

Unos banke može se izvršiti i dvostrukim klikom u polja abi/cab **u matičnim podacima Klijenta ili Dobavljača** kako bi se otvorio pomoćni prozor za pretraživanje nacionalnih bankovnih poslovnica (Pomoć se oslanja na tablicu pod nazivom *ABI* *CAB*), iz kojih se može odabrati odgovarajuća. Odabir će spremiti podatke u ovu tablicu i u matične podatke, gdje je moguće odmah dopuniti s podacima tekućeg računa, cin, iban, swift.