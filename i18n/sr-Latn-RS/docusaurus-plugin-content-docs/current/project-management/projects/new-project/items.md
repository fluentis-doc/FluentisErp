---
title: Artikli
sidebar_position: 3
---

Redovi projekta mogu se unositi kao jednostavna struktura sa jednim nivoom ili kao višeslojna hijerarhijska struktura, u zavisnosti od konfiguracije definisane u [Vrsti projekta](/docs/configurations/tables/project-management/project-type).

Podaci o redovima projekta podeljeni su na više kartica, koje se takođe omogućavaju u zavisnosti od konfiguracije podešene u **Vrsti projekta**.

## Dugmad na alatnoj traci

Redove projekta moguće je dodavati i uređivati pomoću odgovarajuće dugmadi na alatnoj traci:

**Novi artikal**: dodaje novi red artikla na kraj spiska postojećih redova.

**Obriši artikle**: briše izabrani red.

Ako projekat koristi **hijerarhijsku (stablastu) strukturu**, dostupna su i sledeća posebna dugmad:

**Nova podređena stavka**: dodaje novi red projekta kao podređeni red izabranog reda.

Ako je izabrani red vrste **Napomena**, podređeni red može biti bilo koje vrste reda (**Artikal sa klasom**, **Artikal bez klase**, **Napomena**, **Trošak**).  
Ako je izabrani red vrste **Artikal sa klasom** ili **Artikal bez klase**, podređeni red može biti samo vrste **Napomena**.

**Nova stavka istog nivoa**: dodaje novi red projekta na istom hijerarhijskom nivou kao i izabrani red. Kao i kod dugmeta **Nova podređena stavka**, dozvoljena vrsta novog reda zavisi od vrste reda nadređenog nivoa (ako postoji).

**Zameni WBS broj**: ponovo numeriše sve redove projekta tako da broj projekta postane korenski deo WBS oznake, a svaki sledeći nivo dobija odgovarajući redni broj. Na primer, ako je broj projekta **5**, prvi nivo biće **5.1**, podnivo **5.1.1** itd.

Za proširenje ili sažimanje cele hijerarhijske strukture dostupna su sledeća dugmad:

**Sažmi**: prikazuje samo redove prvog nivoa projekta.

**Proširi**: prikazuje sve redove svih nivoa projekta.

Izborom reda i korišćenjem dugmeta **Pomeri WBS** moguće je premestiti izabrani red na drugo mesto u hijerarhiji. Otvoriće se iskačući prozor sa mogućnostima **Umetni kao čvor istog nivoa** ili **Umetni kao podređeni čvor**, uz izbor odredišnog reda projekta.  
Izabrana opcija mora biti u skladu sa pravilima definisanim za vrstu čvora.

U **tabeli redova artikala** redovi će biti prikazani kao jednostavna ili višeslojna struktura, u zavisnosti od toga da li je u **Vrsti projekta** uključena opcija **Hijerarhijska struktura**.

U slučaju **višeslojne hijerarhijske strukture** primenjuju se sledeća ograničenja:
- redovi vrste **Artikal sa klasom**, **Artikal bez klase** i **Trošak** mogu se nalaziti samo na **poslednjem nivou**
- ili na **međunivou**, ali samo ako su **svi** njihovi podređeni redovi vrste **Napomena**.

Drugim rečima:
- redovi na **poslednjem nivou** mogu biti bilo koje vrste (**Artikal sa klasom**, **Artikal bez klase**, **Napomena**, **Trošak**)
- redovi na **međunivou** mogu biti <u>samo</u> vrste **Napomena**, osim u slučaju kada su **svi** podređeni redovi takođe vrste **Napomena**.

## Redovi projekta

**Broj reda**: broj reda artikla. U slučaju višeslojne strukture služi isključivo za identifikaciju, a ne za određivanje redosleda, koji zavisi od WBS broja i stvarnog položaja reda u hijerarhijskoj strukturi.

**WBS broj**: broj koji označava nivo na kojem se red nalazi. Na primer, WBS broj **41.1.1.2** označava da se red **.2** nalazi na četvrtom nivou, a njegov nadređeni red ima WBS broj **41.1.1**.

**Opis artikla**: opis unet u red projekta.

**Oporezivi iznos**: ako je red na poslednjem nivou, odgovara vrednosti polja **Osnovica** tog reda. Ako je red na međunivou, odgovara zbiru vrednosti **Osnovica** svih podređenih redova.

Prikazani su i podaci **Trošak resursa**, **Trošak materijala** i **Ukupan trošak**, koji predstavljaju zbir troškova unetih na odgovarajućim karticama **Resursi** i **Materijali**. Ako red ima podređene nivoe, prikazani ukupni iznosi predstavljaju međuzbirove svih podređenih redova.

**Datum početka**: ako je red na poslednjem nivou, odgovara datumu početka unetom na kartici **Planiranje usluga**. Ako je red na međunivou, odgovara <u>najranijem</u> datumu među svim podređenim redovima.

**Datum završetka**: ako je red na poslednjem nivou, odgovara datumu završetka unetom na kartici **Planiranje usluga**. Ako je red na međunivou, odgovara <u>najkasnijem</u> datumu među svim podređenim redovima.

**Dodeljeni dani**: odgovaraju vrednosti polja **Količina** reda projekta ako je jedinica mere vremenska (dani ili sati). Ako je korišćena druga jedinica mere, vrednost se ne uključuje u obračune.

**Procenjeni dani**: odgovaraju zbiru vrednosti polja **Količina** na kartici **Resursi** dodeljenih redu projekta.

**Planirani dani**: odgovaraju vrednosti polja **Stvarno vreme** prikazanog na planiranoj intervenciji nakon unosa planiranog datuma i vremena.

**Izvršeni dani**: odgovaraju zbiru:

- polja **Stvarno vreme** na redovima usluga u intervencijama
- polja **Ukupno vreme** na prijavama aktivnosti koje **nisu** povezane sa uslugama ili intervencijama.

Ako se podaci vode u satima, **pretvaranje u dane** sprovodi se prema sledećoj logici:  
zabeleženi sati u dokumentima / broj sati standardnog radnog dana kompanije (npr. 8).
Izvršeni dokumenti i dalje se uzimaju u obzir u pokazateljima broja dana kako bi bilo vidljivo šta je planirano, a šta je stvarno izvršeno.
Desnim klikom na red i izborom **Kopiraj element** moguće je kopirati red projekta zajedno sa svim njegovim sadržajem.
Desnim klikom na drugi red i izborom **Nalepi element** moguće je nalepiti kopirani red zajedno sa svim njegovim sadržajem. Sistem će zatražiti izbor da li se red umeće na istom nivou ili kao podređeni nivo.
Za premeštanje reda na drugo mesto koristite dugme **Premesti WBS** na alatnoj traci.

## Kartice sa detaljima reda projekta

### Kartica Aktivnost (delatnost)

Glavna kartica je **Aktivnost (delatnost)**, koja sadrži osnovne informacije o redu projekta, kao što su vrsta reda, artikal, količina, jedinica mere, cena, vidljivost i ostali podaci.  
Detaljno, kartica **Delatnost** sadrži:

**Red / WBS broj**: prikazuje broj reda i WBS broj. Vrednosti se postavljaju automatski, ali ih je moguće ručno izmeniti.

**Vrsta čvora**: određuje da li je red **Korenski čvor** (*Root Node*), **Čvor aktivnosti** (*Activity Node*) ili **Čvor radnog paketa** (*Work Package Node*).

**Tip reda**: određuje vrstu reda – **Artikal sa klasom**, **Artikal bez klase**, **Trošak** ili **Napomena**.

**Artikal**: prikazuje klasu, šifru i opis izabranog artikla.

**Opis**: sadrži opis izabranog artikla, ali ga je moguće slobodno uređivati (dvostrukim klikom otvara se prošireni iskačući prozor koji olakšava unos dužeg teksta).

**Vrsta posla**: označava nivo projekta koji još nije uključen u ponudu (vidljiv u ponudama radi razlikovanja od aktivnosti koje su deo ugovora), odnosno predstavlja novi posao kojim rukovodilac projekta još nije upravljao, a koji je nastao tokom izvođenja projekta.

**Artikal iz ponude**: ako je red projekta generisan iz ponude, prikazuje opisnu referencu na ponudu.

**Količina / JM**: prikazuje količinu reda i jedinicu mere izabranog artikla.

U proširivom odeljku nalaze se:

**Alternativna količina / Alternativna JM**: prikazuje alternativnu jedinicu mere i odgovarajuću alternativnu količinu izabranog artikla.

**Cena**: prikazuje cenu reda. Ako je izabran artikal, vrednost se može automatski predložiti prema standardnim poslovnim pravilima.

U proširivom odeljku **Cena** nalaze se:

**Cena za alternativnu jedinicu mere**: oznaka koja pokazuje da li se cena odnosi na alternativnu jedinicu mere.

**Ručna cena**: automatski se uključuje ako je cena ručno izmenjena.

**Cenovnik**: referentni cenovnik predložen prema standardnim poslovnim pravilima.

**Tip raspona**: u slučaju popusta označava cenovni razred koji se primenjuje.

**Tabela popusta**: omogućava konfiguraciju mreže popusta.

**Trošak materijala / Ukupan trošak**: polja se automatski obračunavaju na osnovu podataka unetih na kartici **Materijali**, ako je omogućena. Polje **Ukupan trošak** predstavlja zbir vrednosti **Trošak materijala** i **Trošak resursa**. Predložene vrednosti korisnik može slobodno izmeniti.

**Trošak resursa**: polje se automatski obračunava na osnovu podataka unetih na kartici **Resursi**, ako je omogućena. Predloženu vrednost moguće je slobodno izmeniti.

**PDV**: određuje stopu PDV-a koja će se primeniti.

**Vrsta prometa prodaje**: određuje vrstu prihoda od prodaje za artikal.

**Nije vidljiv nivo**: kada je ova oznaka uključena, nivo se više ne prikazuje u hijerarhijskoj strukturi. Za prikaz svih skrivenih nivoa koristite dugme **Prikaži/Sakrij** na alatnoj traci. Ova mogućnost najčešće se koristi kako određena grana projekta više ne bi bila vidljiva niti dostupna za povezivanje sa drugim dokumentima.

**Kategorija aktivnosti**: određuje kategoriju aktivnosti koja će se predlagati u dokumentima oblasti **Projekti** povezanim sa redom projekta. Kategorije aktivnosti definišu se u šifarniku [Kategorija](/docs/configurations/tables/project-management/task-category).

### Kartica Planiranje usluge

Kartica **Planiranje usluge** sadrži sledeće informacije:

**Datum početka / Datum završetka**: označavaju planirane datume aktivnosti.

Ako je predmetni red korenski ili međučvor, datumi neće biti dostupni za uređivanje, već će se automatski odrediti prema najranijem i najkasnijem datumu podređenih redova.

Datumi će se koristiti i za izradu Gantovog dijagrama projekta.

> Datumi će se automatski ažurirati pod sledećim uslovima:
>
> - uključena je oznaka **Ponovo obračunaj datum početka i završetka** u tabeli [Vrste projekata](/docs/configurations/tables/project-management/project-type)
> - ako jedinica mere reda odgovara jedinici mere **Dani** definisanoj u parametrima projekta, promenom količine reda automatski će se ponovo obračunati datum završetka
> - ako se dodaju novi resursi sa datumom pre početka ili nakon završetka aktivnosti, datumi početka i završetka automatski će se ažurirati prema najranijem i najkasnijem datumu na kartici **Resursi**

**Prelazni datum od / Prelazni datum do**: označavaju datume prekretnica (*Milestone*).

**Izvršeno (%) / Procenjeno**: omogućavaju unos procenta dovršenosti ili procene napretka. Ako se red projekta koristi u dokumentima koji podržavaju prikaz tog procenta (npr. na redovima usluga intervencije), vrednost u projektu automatski će se ažurirati prema najvećem procentu zabeleženom u tim dokumentima.

**Vrsta zahteva za intervenciju**: omogućava izbor vrste zahteva za intervenciju koja će se koristiti prilikom generisanja novih zahteva povezanih sa redom projekta.

**Vrsta planirane intervencije**: omogućava izbor vrste planirane intervencije koja će se koristiti prilikom generisanja novih planiranih intervencija povezanih sa redom projekta.

**Glavna imovina**: omogućava povezivanje postrojenja koje, na primer, sadrži informacije vezane za projekat njegovog održavanja.

**Menadžer**: omogućava izbor resursa projekta.

**Prinudno zatvoreno**: omogućava unos datuma prinudnog zatvaranja reda projekta.

**Prinudno izvršeno**: oznaka koja pokazuje da je red projekta prinudno zatvoren.

**Kriterijumi za izdavanje računa**: omogućavaju izbor načina fakturisanja projekta, pri čemu se pojedine aktivnosti mogu izuzeti iz fakturisanja radi naknadne kontrole. Dostupne su sledeće mogućnosti:

- **Sve aktivnosti**
- **Ugovorene aktivnosti**: fakturisaće se samo količina aktivnosti definisana na kartici **Aktivnost**, dok dodatne aktivnosti koje premašuju ugovorenu količinu neće biti fakturisane.

**Naplativa aktivnost**: oznaka koja određuje da li je aktivnost naplativa. Vrednost se preuzima iz **Kategorije aktivnosti**, ako je definisana na kartici **Aktivnost**, ali ju je moguće ručno promeniti. Oznaka se prenosi i u dokumente oblasti **Projekti** koji je podržavaju.

**Aktivnost sa dodatom vrednošću**: oznaka koja određuje da li aktivnost predstavlja aktivnost sa dodatom vrednošću. Prenosi se u dokumente oblasti **Projekti** (npr. **Intervencije** i **Prijave aktivnosti**) i koristi se u statističke svrhe.

**Poveži WBS**: omogućava povezivanje reda projekta sa drugim redom istog projekta kako bi se početak aktivnosti kontrolisao prema pravilima definisanim u sledećem polju.

**Vrsta WBS veze**: **završetak–početak**, **početak–početak**, **završetak–završetak** ili **početak–završetak**. U zavisnosti od izabrane vrste veze, dokumente će biti moguće povezati sa redom projekta samo ako prethodni red ispunjava zadati uslov. Na primer, ako su redovi **1.1** i **1.2** povezani vezom **završetak–početak**, dokumente će biti moguće povezati sa redom **1.2** tek kada red **1.1** ima **Procenat dovršenosti rada = 100 %**; u suprotnom će sistem prikazati poruku o grešci.

### Kartica Resursi

Na kartici **Resursi** moguće je dodeliti resurse izabranom redu projekta:

**Datum unosa**: automatski se popunjava datumom dodavanja resursa na projekat.

**Resurs**: sadrži resurs prethodno definisan u odgovarajućoj oblasti [Resursi](/docs/project-management/registers/resources-management/new-resource).

**Centar troška**: automatski se preuzima poslovni centar povezan sa resursom, ali ga je moguće promeniti.

**Jedinica mere**: određuje jedinicu mere za iskazivanje dnevnog vremena resursa.

**Količina**: označava broj dnevnih sati.

**Trošak po jedinici**: označava trošak resursa po jednoj jedinici mere.

:::note[Napomena]
Dodelom resursa redu projekta u odgovarajuće polje automatski će se predložiti satnica resursa.

Trošak zavisi i od izabrane jedinice mere:

- ako je jedinica mere **sat**, vrednost ostaje nepromenjena
- ako je jedinica mere **dan** (prema podešavanjima u **Parametrima projekta**), izvršiće se preračun na osnovu radnog vremena definisanog u šifarniku resursa
- ako je izabrana neka druga jedinica mere, sistem će pokušati da pronađe odgovarajući faktor konverzije. Ako faktor ne postoji, prikazaće se poruka:

> **Nije moguće izvršiti konverziju jediničnog satnog troška resursa u jedinicu mere resursa na projektu. Trošak resursa na projektu nije obračunat.**
:::

:::note[Kriterijumi za određivanje specifičnih troškova u redu projekta]
Ako resurs ima različite troškove za prekovremeni rad, rad praznicima i slične slučajeve, odgovarajući trošak određuje se prema sledećoj logici:

1. Da li je datum početka unet u redu projekta obuhvaćen kalendarom neradnih dana?
> Ako jeste, dodeliće se vrednost definisana za **Vrstu troška: Praznik**. Korisnik će pritom dobiti obaveštenje sa zahtevom za potvrdu.

2. Ako datum početka nije obuhvaćen kalendarom neradnih dana, proverava se mreža predviđenih radnih dana za resurs.
> Ako datum početka nije obuhvaćen ni neradnim ni radnim danima resursa, korisniku će biti ponuđeno ažuriranje troška označenog kao **Podrazumevani trošak za neradni dan**, ako postoji. Ako takav trošak nije definisan, primeniće se trošak **Prekovremeni rad**.

3. Ako datum početka pripada redovnom radnom danu, proverava se:
> da li pripada glavnoj smeni.
>> Ako je glavna smena označena kao **noćna**, korisniku će biti ponuđeno ažuriranje noćnim troškom. U suprotnom će se primeniti trošak definisan u zaglavlju resursa.

4. Ako datum ne pripada glavnoj smeni, proverava se da li pripada alternativnoj smeni.
> Ako alternativna smena ima definisan poseban trošak, primeniće se ta vrednost.
>> Ako je alternativna smena označena kao **noćna**, korisniku će biti ponuđeno ažuriranje noćnim troškom. U suprotnom će se primeniti trošak definisan u zaglavlju resursa.
:::

Datum se predlaže na osnovu **Datuma početka**, ako je unet na kartici **Planiranje usluge**. Ako već postoji red **Resursi** sa istim datumom, predložiće se prvi sledeći slobodan datum. Vreme se automatski preuzima prema glavnoj smeni definisanoj u šifarniku resursa.

**Datum početka**: sadrži datum na koji će resurs biti raspoređen, zajedno sa vremenom početka rada.

**Vreme početka pauze**: sadrži datum i vreme početka pauze, ako postoje.

**Vreme završetka pauze**: sadrži datum i vreme završetka pauze, ako postoje.

**Datum završetka**: sadrži datum na koji će resurs biti raspoređen, zajedno sa vremenom završetka rada.

**Efektivno vreme**: polje koje se automatski obračunava na osnovu vremena unetih u prethodnim poljima.

**Beleška**: omogućava unos dodatnih napomena.

**Vrsta zahteva za intervenciju**: omogućava izbor povezane **vrste zahteva za intervenciju**, zajedno sa njenim svojstvima, kao što su opis i broj.

Svaki red ove mreže ulazi u obračun **Predviđenih dana** reda projekta, koji su prikazani u mreži redova projekta.
Dugme na alatnoj traci ![](/img/it-it/project-management/projects/resources-navigator.png) **Navigator resursa** omogućava proveru raspoloživosti različitih resursa i rezervaciju termina. Otvara se zaseban prozor, a rezervisani datumi prenose se na karticu **Resursi** i utiču na obračun troškova projekta.

Pomoću dugmeta ![](/img/neutral/common/new-visit-report.png) **Kreiranje zahteva za intervenciju** moguće je, nakon izbora resursa, direktno kreirati zahtev za intervenciju povezan sa projektom ili izvršiti njegovo vraćanje pomoću dugmeta **Poništi zahtev za intervenciju**.

### Kartica Materijali

Na kartici **Materijali** navode se materijali potrebni za realizaciju projekta zajedno sa pripadajućim podacima o artiklu sa klasom. Trošak tih materijala ulazi u vrednost polja **Trošak materijala** reda projekta.
Trošak se predlaže prema podešavanju definisanom u polju **Vrsta troška**, čija se podrazumevana vrednost određuje u parametrima projekta. Ako je izabrana opcija **Poslednji trošak** ili **Prosečni trošak**, kao referentni datum koristi se datum projekta.
Na ovom ekranu takođe je moguće direktno kreirati **Zahtev za nabavku (RDA)** za materijale pomoću dugmeta **Kreiranje RDA** na alatnoj traci.
Ako je projekat generisan iz predloška, svi postojeći podaci automatski će se preuzeti iz predloška.

### Kartica Podaci

Na kartici **Podaci** dostupna su sledeća polja:

**Tip porekla Trošak / prihod**: u tabeli se iz **Vrste projekta** automatski predlažu šifre troškova ili prihoda koje će se koristiti za obračun **Stanja napretka radova (SAL)**. Vrednosti je moguće ručno izmeniti.

**Procenjeni datum isporuke**: planirani datum isporuke. Trenutno se popunjava ako je red generisan iz ponude ili narudžbine kupca.

**Nomenklatura**: odnosi se na Intrastat nomenklaturu. Trenutno se popunjava ako je red generisan iz ponude ili narudžbine kupca.

**Beleška**: opšte polje za unos napomena.

**Marka**: moguće je povezati marku ako je ta funkcionalnost omogućena u šifarniku [Marke](/docs/configurations/tables/logistics/brands).

**Projekat / Godina**: omogućava povezivanje reda projekta sa drugim redom projekta.

**CRM kontakt**: omogućava povezivanje reda projekta sa [CRM kontaktom](/docs/crm/home-crm/contacts/new-contact).

**Tiket**: omogućava povezivanje reda projekta sa Tiketom.

**Nivo usluge (SLA)**: omogućava izbor nivoa usluge.

**Isključi WBS iz SAL obračuna**: ako je uključeno, red projekta i **SVI** dokumenti povezani sa tim redom biće isključeni iz postupka obračuna **Stanja napretka radova (SAL)**, nezavisno od konfigurisanih šifara troškova ili prihoda.

**Centar troška**: omogućava povezivanje reda projekta sa poslovnim centrom, koji će se prenositi u sve dokumente koji podržavaju ovu informaciju.

### Kartica Napredak

Na kartici **Napredak** prikazani su redovi stvarno utrošenog vremena evidentiranog u proizvodnji ili na intervencijama.

Vrednosti se preuzimaju obradom koja se pokreće pomoću dugmeta **Izrada napretka projekta**.

Obrada napretka obračunava redove na kartici **Napredak** izvršavanjem sledećih koraka:

- briše sve zapise stvarno utrošenog vremena projekta koji nisu ručno izmenjeni
- pretražuje prijave iz proizvodnje koje:
  - imaju fazu proizvodnog naloga povezanu sa trenutnim projektom
  - povezane su sa redom projekta

Za svaki pronađeni red koji još nije povezan sa redom **Napretka**, kreira se novi red na kartici **Napredak**.

Za ručno izmenjene zapise red se ne briše, već se ažurira vrednost polja vremena.

Ista obrada izvršava se i za redove usluga na intervencijama, kao i za prijave aktivnosti.

Na kraju se ažurira polje **Procenat dovršenosti rada** na kartici **Planiranje usluge** za redove projekta koji:

- imaju vrstu čvora **2 – Work Package Node**
- imaju ukupan zbir vremena na kartici **Napredak** jednak **0**.

### Kartica Agenti

Na kartici **Agenti (trgovački predstavnici)** moguće je odrediti **Glavnog agenta** i ostale agente povezane sa redom projekta.

### Kartica Fakturisanje

Na kartici **Fakturisanje** moguće je definisati rate za fakturisanje projekta koje će se koristiti u postupku [Kreiranje izlaznih računa](/docs/project-management/projects/procedures/invoice-creation).
Ako je na kartici **Planiranje usluge** popunjeno polje **Prinudno zatvoreno**, rate se neće prikazivati u postupku kreiranja izlaznih računa.

**Prioritet**: određuje redosled rata.
**Dan**: označava dan na koji se rata odnosi i koristi se kao kriterijum pretrage u postupku [Kreiranje izlaznih računa](/docs/project-management/projects/procedures/invoice-creation).
**Mesec**: označava mesec na koji se rata odnosi i koristi se kao kriterijum pretrage u postupku [Kreiranje izlaznih računa](/docs/project-management/projects/procedures/invoice-creation).
**Godina**: označava godinu na koju se rata odnosi i koristi se kao kriterijum pretrage u postupku [Kreiranje izlaznih računa](/docs/project-management/projects/procedures/invoice-creation).
**Procenat**: procenat koji se koristi za obračun cene koja će biti preneta na račun. Na primer, ako je cena reda projekta **100**, a procenat podešen na **30**, na računu će biti prikazana cena **30**.

**Vrednost**: umesto procenta moguće je uneti direktnu vrednost cene koja će biti preneta na račun. Na primer, ako je cena reda projekta **100**, moguće je uneti dva reda sa vrednošću **50**. Na računu će tada biti prikazana cena **50**.

Može se popuniti **samo jedno** od polja **Procenat** ili **Vrednost**, nikada oba istovremeno. Takođe, sistem ne proverava da li zbir pojedinačnih rata odgovara ukupnom iznosu definisanom na redu projekta.
Vrednost i procenat odnose se **isključivo na polje Cena**, a ne na polje **Količina**.
Količina će stoga uvek ostati jednaka količini definisanoj na redu projekta.

### Kartica Dodatni podaci

Na kartici **Dodatni podaci** moguće je uneti **Dodatne** podatke za red projekta.

### Kartica Dokumenti u prilogu

Na kartici **Dokumenti u prilogu** moguće je dodati priloge za red projekta.