---
title: Zaglavlje
sidebar_position: 2
---

Nakon odabira obaveznih podataka u gornjem dijelu, korisnik može nastaviti unos sljedećih podataka [ručno](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) pomoću  [polja za pomoć](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) ili, prema odabranim postupcima, aplikacija *automatski* popunjava određena polja.

:::note NAPOMENA
Ako se dokument *kreira automatski*, ovi podaci preuzimaju se iz *izvornog dokumenta* iz kojeg je generiran.
:::

Unosom **Dobavljača** automatski se *predlažu* svi specifični podaci s kartice **Zaglavlje**, prema podacima postavljenim prethodno u [šifarniku dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), u odgovarajućim poljima adrese i *odjeljcima*:  

- **Valuta**: [Valuta](/docs/guide/glossary/glossary-intro#currency), [Kurs](/docs/guide/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/glossary/glossary-intro#country), [Jezik](/docs/guide/glossary/glossary-intro#language), [Zona](/docs/guide/glossary/glossary-intro#zone).
- **Isporuka**: [Isporuka](/docs/guide/glossary/glossary-intro#shipment), [Porto](/docs/guide/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/glossary/glossary-intro#packing), [Cjenik](/docs/guide/glossary/glossary-intro#sales-price-list) i njegov [vremenski okvir važenja](/docs/guide/glossary/glossary-intro#validity-date).

*Drugi opcionalni podaci*:

**Status narudžbe**: kada se kreira, nema aktivnih zastava, ali se kasnije može promijeniti u:    
> **Printano**: kada se isprinta konačno;    
> **Autorizirano**: kada korisnik odobri, nema utjecaja na poslovne procese, ali se vrednuje u Mobilnoj Aplikaciji;    
> **Povijesno**: kada korisnik pohrani dokument;  
> **Opozvano**: kada korisnik želi otkazati dokument umjesto brisanja, automatski se postavlja status evidentirano na svim njegovim redovima.

:::NAPOMENE
Zastave se mogu ukloniti postupkom poništenja operacije.
:::

**Bilješke dobavljača**: ovo polje preuzima se iz kartice dobavljača, ali se može i ručno unijeti. Desnim klikom miša može se otvoriti forma za unos duljih bilješki; ako polje sadrži vrijednost, mijenja se boja pozadine polja.    
**Naša/Vaša referenca**: u ovim poljima obično se navodi unutarnja referenca i referenca dobavljača za dokument.  
Ako se narudžba dovršava postupkom *Isporuke iz narudžbenice*, prikazuje se informacija iz odgovarajućeg polja narudžbenice. Ovaj prijenos vrijedi samo za narudžbu dobavljača stvorenu preuzimanjem podataka iz jednog izvornog dokumenta.

**Početna bilješka**: Moguće je odabrati bilješke koje su prethodno unesene u odgovarajuću tablicu, dostupnu putem putanja *Konfiguracije > Alati > Upravljanje kodiranim bilješkama*. Da biste to učinili, korisnik može dvaput kliknuti na polje **Početna bilješka** kako bi otvorio *pomoć vezanu uz kodirane bilješke* i odabrao podatke. Alternativno, desnim klikom miša moguće je otvoriti prozor radi specificiranja vrlo dugog teksta bilješke. Ako polje sadrži vrijednost, boja pozadine polja mijenja se.

U slučaju stvaranja narudžbenice pomoću postupka *Dobiti iz naloga za posao*, informacije prisutne u nalogu ponovno će biti prikazane.

**Operater**: Omogućuje unos korisnika koji stvara dokument. Zaposlenici su prethodno uneseni u tablicu *Zaposlenici*, koja se nalazi na putanji *Početna stranica > Zaposlenici*. Podatak postaje **obavezan** ako je opcija postavljena u samim Postavkama dokumenta.

**Projekt:** korištenjem [pomoći uz polje](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) moguće je povezati dokument s projektom. Ovo udruživanje funkcionira samo na razini zaglavlja stavke. Projekt se automatski unosi ako narudžbenica nastaje kao rezultat dokumenta koji ga sadržava (npr. planirane narudžbe za kupnju).    
**Nalog proizvodnje**: mora biti postojeći broj radnog naloga za određenu godinu. Ako narudžbenica nastaje izdavanjem planiranih narudžbi za kupnju, radni nalog automatski dobiva broj.  
**Status izvršenja**: kada se narudžbenica izvrši putem DDT-a ili fakture, njezino stanje isporuke automatski se mijenja iz neizvršenog u djelomično izvršeno ili izvršeno. Korisnik može prisiliti izvršenje narudžbenice koja nije u potpunosti izvršena, a kada se to dogodi, datum izvršenja također se sprema.    
**Status dokumenta**: unosi ga korisnik i upravlja se u određenim vertikalizacijama (distribucijski lanci ili povezane tvrtke) kako bi se replicirali dokumenti između maloprodajnih mjesta i centralnog sustava te obrnuto.

**Prodajna mjesta**: upravlja se samo vertikalizacijom koja se odnosi na distribucijske lance. U slučaju narudžbenice dobivene prijenosom robe između maloprodajnih mjesta istog lanca, prikazuje se maloprodajno mjesto porijekla robe.

*Posebni gumbi*

> **Dobit iz naloga za posao**: poziva postupak za stvaranje narudžbenice iz radnog naloga. Aktivira se unosom dobavljača i vrste narudžbenice.   
> **Zamijeni datume predviđene isporuke u redovima**: nakon što su određeni datumi zahtjeva za isporukom i/ili predviđene isporuke u zaglavlju narudžbenice, moguće je masovno zamijeniti te datume u već unesenim redovima stavki.

 
## Plaćanja

**Rješenja plaćanja** automatski su preuzeta iz *Šifarnik dobavljača > kartica Plaćanja* i mogu se mijenjati/brisati od strane korisnika.

Ako je s **Vrstom plaćanja** povezan financijski popust, iznos popusta uzima se u obzir samo u računovodstvenom smislu, odnosno u datumima dospijeća dokumenta, a ne u ukupnom iznosu DDT-a.

Ako dokument potječe iz narudžbenice, vrste plaćanja mogu se preuzeti iz prvog dokumenta, iz šifarnika dobavljača ili se mogu vidjeti u formi dokumenata za obradu, a korisnik odabire željeni tip plaćanja.

*Posebno dugme*

> **Otkaži plaćanja**: koristi se za brisanje odabranih redaka plaćanja.


## Popusti

Ponuđeni su samo predefinirani popusti preuzeti iz *Šifarnik klijenta > kartica Popusti* i ne oni koji su dodijeljeni uvjetima plaćanja ili određenim artiklima. Mogu se mijenjati/brisati od strane korisnika.

Popusti predloženi u zaglavlju dokumenta ponovno se prikazuju u svakom novom unosu stavke u dokument.

Ako se nakon unosa stavki u dokument unese novi popust u zaglavlju, to se ne replicira u već unesenim stavkama dokumenta.

*Posebno dugme*

> **Izbriši rabate**: koristi se za brisanje odabranih redaka popusta.

## Odredište

Ovdje se predstavljaju informacije unesene u *Šifarnik dobavljača > kartica Isporuke*, samo ako postoje zadane informacije. Padajući izbornik nudi sve primatelje, odredišta i prijevoznike unesene u šifarnik dobavljača.

Adrese dostave (primatelj/odredište i prijevoznik) mogu se unijeti i samo opisno, bez prethodnog unosa među kontaktima.


## Dodatni podaci

Ovdje se predstavljaju informacije unesene u *Šifarnik subjekta > kartica Dodatni podaci*, samo ako postoje zadane informacije.