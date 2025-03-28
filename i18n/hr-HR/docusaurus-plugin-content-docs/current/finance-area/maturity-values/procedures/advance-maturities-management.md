---
title: Napredno upravljanje dospijećima
sidebar_position: 7
---

:::note MENI
**Administracija > Dospijeća plaćanja > Procedure > Napredno upravljanje dospijećima**

Nota:
Za sve što nije detaljno objašnjeno u ovom dokumentu o uobičajenom funkcioniranju obrazaca, molimo se obratite sljedećoj poveznici: [Zajedničke funkcionalnosti, tipke i polja](/docs/guide/common).

:::

---
Ovaj postupak omogućuje kreiranje avansnih stavki koje se plaćaju ili preuzimaju kada se izda potvrda narudžbe (ili pri isporuci), a zatim se fakturiraju i obračunavaju. To su uglavnom izvanračunovodstvene stavke jer postoje prije izdavanja računa.

Naredbe za upravljanje ovom funkcionalnošću nalaze se u ovom obrascu kao i u kartici ***Sažeci*** naloga. 

:::note BILJEŠKA
Primjeri na slikama odnose se na prodajnu oblast s jednim iznosom po narudžbi, ali upravljanje je isto za nabavu i konceptualno slično za iznose pri isporuci.

Ne postoji standardna automatizacija za stvaranje avansnog unosa računa prilikom potvrđivanja narudžbe ili bilo kojeg događaja povezanog s njom ili s otpremnicama. 

Svaki rok narudžbe može se proslijediti računovodstvu tako da ima vidljivost da postoji stavka narudžbe koju treba preuzeti.

Ovim se može upravljati putem prilagođenih radnih procesa koji se posebno konfiguriraju.

:::

### Stvaranje dospijeća narudžbe

U zaglavlju je potrebno postaviti dva retka s uvjetima plaćanja, jedan red će voditi akontaciju, a drugi red će imati postavku za preostali postotak.

Ovo će unijeti prisutnost roka plaćanja unaprijed koji će se poslati u računovodstvo putem odgovarajuće tipke **Stvarnje zrelosti unaprijed**

Pritiskom na ovu tipku otvara se obrazac u kojem se traže dva dodatna podatka: opis koji će se prijaviti ovakvom vođenju dospijeća i vrsta dokumenta koja će se povezati s ne knjiženom stavkom koja će se kreirati.

Rezultat će biti kreiranje vanbilančne stavke za iznos i istek naloga. Ova operacija bit će vidljiva u posebnom obrascu.

### Upravljanje prethodnim dospijećima unutar forme

U ovoj formi u prvoj kartici prodajne strane moguće je kreirati avansne artikle i za druge narudžbe kupaca i neovisno o kreiranju unutar narudžbe kupca ili artikle za isporuke prisutne u drugoj kartici. 

Na kartici ***Napredno upravljanje*** može se vratiti prethodni unos koji se upravo stvorio. 

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-form.png)

U izvornom prodajnom dokumentu, ako korisnik unese izmjenu neke vrijednosti koja uzrokuje ponovni izračun rokova, pojavit će se poruka upozorenja s pitanjem treba li poništiti avansnu stavku (ako to nije unovčeno, inače to nije moguće).

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-message.png)


### Plaćanje dospijeća unaprijed

Kada se avansni unos podigne na narudžbi (ili pri isporuci) i prva se napomena računovodstvenog unosa spremi s naplatom avansnog unosa (zatvaranje unosa), pojavit će se poruka s upozorenjem da je potrebno fakturirati unaprijed.  

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-message2.png)

Potvrđujući kreiranje, otvorit će se obrazac za Upravljanje dospijećima narudžbi, gdje se može ponovno otići na karticu Napredno upravljanje kako bi se to fakturiralo. 

Odabirom retka aktivira se tipka za izradu računa:

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-invoice-creation.png)

Pritiskom na tipku pojavit će se novi obrazac zahtjeva za podatke o kontu:

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-invoice-creation-popup.png)

Već predloženi podaci su današnji datum i opis koji će biti ispisan u retku stavke, dok će tip računa, stopu PDV-a i šifru obračuna prometa povremeno upravljati korisnik.

### Avansno fakturiranje i knjiženje

Nakon potvrde izrade otvara se račun: tip artikla se automatski postavlja kao tip 6, tj. predujam, tako da je isti dostupan za storniranje u računu za zatvaranje narudžbe. 

:::tip **BILJEŠKA:**

Nakon što se faktura obračuna, posebnost je u tome što se time neće stvoriti nova stavka, već će to biti stavka izvanračunovodstvenog predujma koja će biti vraćena (čak i ako je već u statusu "Zatvoreno") i povezana s knjiženjima te fakture.
:::