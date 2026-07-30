---
title: Novi upit za ponudu
sidebar_position: 3
---

Obrazac se otvara putem menija **Nabavka > Upit za ponudu > Novi upit za ponudu** ili iz obrasca za pretragu **upita za ponudu** klikom na dugme **Novo**.

## *Kako kreirati upit za ponudu*

<details>

<summary>Kliknite za prikaz osnovnih koraka</summary>

1. **Unesite obavezne podatke**: **Tip upita za ponudom** i **Dobavljač**. Polja **Godina**, **Broj** i **Datum** automatski će biti popunjena.

2. **Unesite ili izmenite neobavezne podatke** zaglavlja, kao što su datum isporuke, eventualni **popusti**, **odredište** i slično.

3. **Unesite artikle**: dvostrukim klikom na polje **Šifra artikla** otvara se pomoćni prozor za izbor artikla koji omogućava pretragu i izbor postojećeg artikla. Ostali podaci reda, kao što su **jedinica mere**, **količina** i **cena**, automatski će biti popunjeni, ali ih je moguće izmeniti.

   Kao alternativu moguće je izabrati **Vrstu reda** **Artikal bez klase** i ručno uneti ostale podatke.

4. **Po potrebi unesite popuste ili druge dodatne informacije** na karticama **Popusti** i **Podaci o artiklu**.

5. **Proverite odeljak Sažeci** i po potrebi unesite završne popuste.

6. Nakon provere i potvrde ponude **unesite Datum potvrde u zaglavlje** kako bi dokument postao dostupan za pretvaranje u narudžbinu.

</details>

## **1. Gornji deo** {#upper-section}

Obavezna polja za unos upita za ponudom su:

- **Tip**: obavezno polje. U zavisnosti od izabrane [Vrste upita za ponudom](/docs/configurations/tables/purchase/purchase-offer-type), biće dostupne određene funkcionalnosti, na primer **Upravljanje osnovnim sredstvima**.
- **Datum / Godina**: prema podrazumevanim podešavanjima predlaže se trenutni datum, ali ga je moguće ručno izmeniti.
- **Broj**: automatski se predlaže prema izabranoj vrsti upita za ponudom.
- **Dobavljač**: sadrži kontakt kojem se šalje upit za ponudom.
- **Verzija**: označava verziju ponude. Nova verzija može se kreirati pomoću dugmeta **Nova verzija** na alatnoj traci.

:::note Zapamtite
Ako je dokument **automatski kreiran** iz **upita za ponudu**, navedeni podaci automatski će biti preuzeti iz **izvornog dokumenta**.
:::

## **2. Zaglavlje** {#header}

### 2.1 Podaci o dobavljaču

Nakon izbora **Dobavljača**, svi podaci na kartici **Zaglavlje** automatski se popunjavaju prema podešavanjima definisanim u [šifarniku dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), odnosno prema podacima njegove adrese i sledećih odeljaka:

> - **Valuta**: odeljak koji sadrži podatke o [Valuti](/docs/configurations/tables/general-settings/currencies), [Kursu](/docs/guide/common/glossary/glossary-intro#currency-exchange) i [Datumu valute](/docs/guide/common/glossary/glossary-intro#currency-date).
> - **Pošiljka**: odeljak koji sadrži podatke o [Otpremi](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Paritetu isporuke](/docs/guide/common/glossary/glossary-intro#carriage), [Ambalaži](/docs/guide/common/glossary/glossary-intro#packing), podrazumevanom [Cenovniku](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) i njegovom [periodu važenja](/docs/guide/common/glossary/glossary-intro#validity-date).
> - **Država**: odeljak koji sadrži podatke o [Državi](/docs/guide/common/glossary/glossary-intro#country), [Jeziku](/docs/guide/common/glossary/glossary-intro#language) i [Zoni](/docs/guide/common/glossary/glossary-intro#zone).
> - **Plaćanja**: odeljak koji sadrži podatke o [Načinima plaćanja](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), **Popustima**, **Odredištu** i **Prevozniku**.

Korisnik može ručno obrisati ili izmeniti sva navedena polja.

### 2.2 Neobavezni podaci zaglavlja

- **Beleške**: ovo polje preuzima se iz šifarnika dobavljača ili, ako je primenljivo, iz upita za ponudu, ali se može uneti i ručno.
- **Naša / Vaša referenca**: u ova polja obično se unose interna referenca i referenca dobavljača za dokument. Ako je definisana u šifarniku dobavljača, automatski će biti preuzeta, a u suprotnom se može uneti ručno.
- **Početne / Završne beleške**: moguće je izabrati napomene prethodno definisane u tabeli **Konfiguracija > Uslužni programi > Upravljanje kodifikovanim napomenama**. Dvostrukim klikom na polje **Početne / Završne napomene** otvara se pomoć za izbor kodifikovanih napomena.
- **Projekat**: pomoću pomoći pri unosu dokument se može povezati sa projektom. Ovo povezivanje važi samo na nivou zaglavlja dokumenta. Projekat će biti automatski popunjen ako je upit za ponudom nastao iz upita za ponudu koji već sadrži projekat.
- **Datum potvrde ponude**: omogućava unos datuma potvrde ponude, ali nije obavezan podatak. U postupku [Kreiranja narudžbine dobavljaču iz ponude dobavljača](/docs/purchase/offer-request/procedures/order-creation) moguće je prikazati i pretvoriti i nepotvrđene upite za ponudom uključivanjem odgovarajuće oznake u oblasti filtera.
- **Procenjeni datum isporuke**: ako se unese pre dodavanja artikala u upit za ponudom, automatski će biti prenet na sve redove artikala. U suprotnom je dovoljno kliknuti na dugme **Zameni planirani datum isporuke u stavkama** na alatnoj traci kako bi se datumi ažurirali u svim postojećim redovima.
- **Datum zatvaranja**: prilikom pretvaranja upita za ponudom u narudžbinu dobavljaču automatski se popunjava trenutnim datumom ako je uključena opcija za automatsko zatvaranje pretvorenih ponuda.
- **Važenje ponude**: omogućava definisanje datuma isteka važenja upita za ponudom.

#### Specifična dugmad

> **Zameni planirani datum isporuke u stavkama**: nakon definisanja planiranog datuma isporuke u zaglavlju omogućava masovno ažuriranje tog datuma u već unetim redovima artikala.

### 2.3 Plaćanja

[Uslovi plaćanja](/docs/configurations/tables/general-settings/payment-terms) automatski se preuzimaju iz **Šifarnika dobavljača > kartica Plaćanja**, a korisnik ih može izmeniti ili obrisati.

Ako je uz [Vrstu plaćanja](/docs/configurations/tables/general-settings/payment-types) definisan finansijski popust, njegov iznos uzima se u obzir isključivo u računovodstvenom delu, odnosno prilikom obračuna dospeća plaćanja dokumenta, a ne u ukupnom iznosu otpremnice.

#### Specifična dugmad

> **Otkaži plaćanja**: služi za brisanje izabranih redova plaćanja.

### 2.4 Popusti

Prikazuju se samo podrazumevani popusti preuzeti iz **Šifarnika dobavljača > kartica Popusti**, dok se popusti definisani u uslovima plaćanja ili na pojedinačnim artiklima ne preuzimaju. Korisnik ih može izmeniti ili obrisati.

Popusti definisani u zaglavlju dokumenta automatski se prenose na svaki novi red artikla dodat u dokument. Ako se novi popust unese u zaglavlje nakon što su redovi artikala već dodati, on se neće automatski primeniti na postojeće redove.

#### Specifična dugmad

> **Obriši podrazumevane popuste**: služi za brisanje izabranih popusta.

### 2.5 Dodatni podaci

Na ovoj kartici prikazuju se podaci definisani u **Šifarniku kontakta > kartica Dodatni podaci**, ali samo ako postoje podrazumevane vrednosti.

## **3. Artikli** {#items}

Za unos **Novog artikla** u tabelu dovoljno je postaviti se na novi red i uneti potrebne podatke ili koristiti dugme **Novi artikal** na alatnoj traci.

### 3.1 Obavezni podaci

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tip linije** omogućava izbor različitih vrsta artikala iz padajućeg menija:
> - **Artikal sa klasom**: artikli definisani u šifarniku koji se mogu knjižiti u analitičkom računovodstvu i evidentirati u skladištu.
> - **Artikal bez klase**: opisni artikli koji se mogu knjižiti u analitičkom računovodstvu, ali se ne mogu evidentirati u skladištu.
> - **Trošak**: može biti sa klasom ili bez klase. U sažecima dokumenta prikazuje se zasebno. Ako je kodifikovan i poreski relevantan, evidentira se u skladištu. Ako je bez klase ili nije poreski relevantan, neće biti evidentiran u skladištu.
> - **Beleške**: opisni red koji se štampa na dokumentu. Ne utiče na računovodstvo niti na skladište.
> - **Besplatan artikal**: obrađuje se kao artikal sa klasom ili bez klase u poreskom i skladišnom smislu, ali se zbog toga što je reč o besplatnom artiklu prikazuje zasebno u sažecima dokumenta. U zavisnosti od oznake **Teret PDV-a**, obračunava se da li trošak PDV-a besplatnog artikla snosi obveznik ili ne.

:::note Napomena
Ako se unos započne direktnim unosom artikla, njegova **klasa**, **šifra** i **tip linije** (**artikal sa klasom**) biće automatski popunjeni.
:::

- **Klasa / Šifra / Opis stavke**: mogu se uneti ručno ili pomoću pomoći pri unosu, koja će ponuditi sve podatke definisane u šifarniku artikala. Nakon izbora artikla njegov **Opis** automatski će biti preuzet iz šifarnika. Ako artikal ima definisane **Varijante**, željena varijanta može se izabrati na kartici **Podaci o artiklu**.

- **Jedinica mere**: automatski se predlaže osnovna jedinica mere artikla, ali ako su u šifarniku definisane alternativne jedinice mere, korisnik može izabrati neku od njih.

- **Količina**: predstavlja količinu u osnovnoj jedinici mere i prema podrazumevanim podešavanjima iznosi **1**. Može se ručno izmeniti ili preuzeti iz dokumenta koji se izvršava.

- **Cena**: cena se preuzima iz cenovnika definisanog u šifarniku kontakta. Cenovnik koji se koristi za pojedini artikal prikazan je na kartici **Podaci o artiklu**. Isti dokument može sadržati artikle čije su cene preuzete iz različitih cenovnika ako je u šifarniku kontakta definisano više uzastopno povezanih cenovnika. Dvostrukim klikom na polje **Cenovnik** korisnik može izabrati drugi cenovnik umesto podrazumevanog, iz kojeg će biti preuzeta cena izabranog artikla.

  Ako nije definisan nijedan cenovnik, predložiće se **poslednji trošak** iz šifarnika artikla.

- **PDV**: prednost ima vrednost definisana u polju **PDV** u šifarniku kontakta. Ako ona nije definisana, predlaže se vrednost iz šifarnika artikla, ali je korisnik može promeniti.

- **Jedinična cena**: automatski se obračunava nakon primene popusta.

### 3.2 Neobavezni podaci

- **Promet nabavke**: preuzima se sa kartice **Opšte** u šifarniku artikla.

- **Datum zatvaranja**: označava datum zatvaranja ponude. Automatski se popunjava ako je tokom postupka [Kreiranja narudžbine dobavljaču iz ponude dobavljača](/docs/purchase/offer-request/procedures/order-creation) uključena opcija zatvaranja ponuda.

- **Procenjeni datum isporuke**: označava predviđeni datum isporuke robe. Automatski se predlaže ako je na kartici **Zaglavlje** popunjeno polje **Planirani datum isporuke**.

- **Očekivani period isporuke**: slobodno opisno polje u koje je moguće uneti očekivani period isporuke robe.

### 3.3 Popusti {#discount}

- **Tip raspona**: prikazuje cenovni razred popusta koji će se koristiti, a preuzima se iz šifarnika dobavljača ili iz cenovnika.

- **Ručna cena**: automatski se uključuje kada je cena artikla ručno uneta ili izmenjena.

U tabeli se prikazuju svi popusti povezani sa artiklom, pri čemu svaki ima svoju osnovicu i način primene. Popusti se mogu preuzeti iz šifarnika dobavljača, uslova plaćanja dodeljenih dokumentu, cenovnika ili [Definicije politika popusta](/docs/purchase/price-control/definition). Sve predložene vrednosti moguće je izmeniti.

#### Specifična dugmad

> **Obriši popuste**: briše izabrani popust iz pripadajuće tabele.

### 3.4 Podaci artikla {#items-data}

Na ovoj kartici prikazuju se i unose dodatni podaci o artiklu.

> - **Artikal**: prikazuje artikal izabran u gornjoj tabeli.
> - **Varijanta**: u ovom polju moguće je izabrati jednu od varijanti artikla definisanih na kartici [Varijante](/docs/erp-home/registers/items/create-new-item) u šifarniku artikla. Ako su u cenovniku definisane različite cene i/ili popusti za pojedine varijante, oni će se automatski ažurirati nakon izbora druge varijante.
> - **Beleška**: predstavlja napomene povezane sa redom artikla. Mogu se uneti i pomoću pomoći za izbor kodifikovanih napomena. Biće prenete u sve dokumente koji nastanu iz ovog dokumenta.
> - **Skladište i predložak**: prikazuju skladište i predložak koji će se automatski koristiti prilikom skladišnog knjiženja odgovarajućih artikala.
>
> - **Projekat**: predstavlja projekat koji će biti povezan sa dokumentom. Ako je projekat izabran u zaglavlju dokumenta, automatski će biti prenet na sve redove artikala. U suprotnom se može izabrati pomoću pomoći za izbor projekta.
> - **Cenovnik**: prikazuje cenovnik iz kojeg je preuzeta cena artikla, zajedno sa datumom početka i završetka njegovog perioda važenja.
>
> - **Alternativna jedinica mere / Alternativna količina**: omogućava podešavanje alternativne jedinice mere i pripadajuće količine za artikal izabran u tabeli.
> - **Cena alternativne jedinice mere**: ako je uključena, označava da se cena uneta na redu artikla odnosi na alternativnu, a ne na osnovnu jedinicu mere.
>
> - **Marka**: predstavlja marku artikla preuzetu iz šifarnika artikla ili iz cenovnika artikla.
> - **Zahtev za nabavku**: ako je ponuda nastala iz zahteva za nabavku, prikazuje se pripadajući [Zahtev za nabavku](/docs/purchase/purchase-requests/purchase-request/insert-purchase-request).

#### 3.4 Dodatni podaci {#extra-data}

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

#### 3.5 Dokumenti u prilogu {#attached-documents}

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

## **4. Sažeci** {#summaries}

U odeljcima ove kartice prikazane su glavne informacije za ceo dokument.

### 4.1 Konačni popusti na artikle

Završni popusti primenjeni na nivou pojedinačnog artikla raspoređuju se (odnosno proporcionalno raspodeljuju) na svaki red artikla u dokumentu. To znači da se iznos popusta srazmerno deli između svih artikala u dokumentu, a pripadajući popust biće vidljiv na kartici **Artikli** za svaki pojedinačni red.

- **Vrsta / Opis popusta**: omogućava izbor vrste popusta (definisane u [Vrste popusta](/docs/configurations/tables/general-settings/discount-types)), pri čemu se određuje redosled primene popusta i da li će se popust obračunavati na poresku osnovicu ili kaskadno na prethodno primenjene popuste.

- **Prioritet**: određuje redosled primene popusta. Popusti se primenjuju rastućim redosledom prioriteta.

- **Kaskada / Iznos**: određuje da li će se popust obračunavati na osnovicu *(cena × količina) − (već obračunati popusti)* ili na osnovicu *(cena × količina)*.

- **Vrednost**: numerička vrednost završnog popusta koji će biti primenjen.

### 4.2 Ukupni iznosi dokumenta

- **Iznos stavki bez popusta**: predstavlja zbir vrednosti svih artikala.

- **Zaduženje**: predstavlja vrednost eventualnog avansa primljenog za dokument.

- **Poklonjeni iznos**: predstavlja ukupnu vrednost artikala vrste **Besplatan artikal** unetih na kartici **Artikli**.

- **Ukupni primenjeni popusti**: predstavlja ukupnu vrednost popusta primenjenih na artikle, bez završnih popusta.

- **Neto iznos artikala**: **Iznos stavki bez popusta** − **Ukupni primenjeni popusti**.

- **Konačni popusti artikala**: predstavlja vrednost završnih popusta izraženu kao procenat bruto iznosa artikala.

- **Iznos umanjen za ukupni popust**: **Neto iznos artikala** − **Konačni popusti artikala**.

- **Ukupno za stavke troška**: predstavlja ukupnu vrednost artikala vrste **Artikal troška** unetih na prethodnoj kartici.

- **Troškovi naplate**: predstavlja zbir troškova naplate unetih u tabeli **Troškovi**.

- **Trošak overe**: predstavlja zbir troškova biljega unetih u tabeli **Troškovi**.

- **Ukupno troškovi / popusti / doplate**: predstavlja ukupnu vrednost svih stavki unetih u tabeli **Troškovi**.

- **Poreska osnovica**: **Neto iznos artikala** − **Konačni popusti artikala** + **Ukupno za stavke troška** + **Ukupno troškovi / popusti / doplate**.

- **Porez**: predstavlja zbir vrednosti prikazanih u sažecima PDV-a.

- **Ukupno**: **Poreska osnovica** + **Porez**.