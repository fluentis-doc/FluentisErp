---
title: Upravljanje ticketima
sidebar_position: 1
---

S ekrana pretrage Ticketa moguće je pregledati već unesene tickete. Općenito, upravljanje tiketima koristi se od strane internog tima korisničke podrške tvrtke. S ovog ekrana moguće je otvoriti postojeće tickete u načinu uređivanja ili pregleda, kao i stvarati nove tickete.      
Osim toga, gumb **Izrada ponude iz Ticketa** na vrpci omogućava stvaranje [Ponuda](/docs/sales/offers/insert-offer) izravno iz odabranih ticketa. Artikl/usluga unesena u ticket postat će stavka ponude, a u ponudi će se prikazati i ostali podaci uneseni u ticketu: Projekt, Klijent, Iznosi stavki (treba paziti u ovom slučaju ako postoje važeći cjenici za klijenta - ponuda će mijenjati iznose prema cjeniku povezanom s klijentom). Ovaj postupak također je dostupan unutar pojedinačnih ticketa.

Klikom na *Novo* moguće je unijeti novi Ticket. Upravljanje ticketima sastoji se od dva dijela: zaglavlja i donjih kartica, koje ćemo navesti.   

## Zaglavlje

Zaglavlje sadrži sljedeće polja:    
 
**Tip/Godina/Redni broj**: ovi se podaci automatski popunjavaju ako je operateru dodijeljena zadana vrsta ticketa u [Postavkama operatera za CRM](/docs/configurations/parameters/crm/ticket-parameters); broj je progresivan.    
**Datum stvaranja/Rok**: datum stvaranja automatski se unosi s današnjim datumom; datum roka je polje koje se mora unijeti ručno.     
**Datum zatvaranja/Zatvoreno**: unoseći oznaku Zatvoreno, automatski se upisuje datum zatvaranja.
**Klijent**: ovo polje automatski se popunjava ako je operateru dodijeljen zadani klijent u  [Postavkama operatera za CRM](/docs/configurations/parameters/crm/ticket-parameters); inače ga je moguće unijeti ručno.      
**Kontakt**: moguće je unijeti i alternativni [Kontakt](/docs/crm/home-crm/contacts/new-contact).         
**Projekt**: moguće je navesti projekt na koji se tiket odnosi;        
**Operacije ticketa**: U ovom se polju prikazuju moguće [Operacije](/docs/configurations/tables/crm/tickets/operations) za ovu Vrstu ticketa;      
**Kontakt osoba**: u ovom polju prikazuje se *Kontakt osoba* klijenta, preuzeta iz šifarnika; međutim, polje se može izmijeniti.     
**Ozbiljnost ticketa**: ovo polje sadrži informacije o [Ozbiljnosti](/docs/configurations/tables/crm/tickets/severity);   
**Predmet**: ovo je polje koje je moguće ručno popuniti;       
**Status**: moguće je dodijeliti status tiketu; prikazani su statusi uneseni u odgovarajuću [Vrstu ticketa](/docs/configurations/tables/crm/tickets/ticket-type);               
**Fakturirano/Fakturabilno**: ove oznake označavaju je li ticket već fakturiran ili treba biti;      
**Kriteriji fakturiranja**: navedite jesu li kriteriji fakturiranja predviđeni ponudama ili stvarnim radom;      
**Razdoblje fakturiranja**: odredite hoće li fakturiranje ići u stvarnom vremenu ili po isporuci.      

Analizirajmo donje kartice   

## Pojedinosti o ticketima

Ova kartica sastoji se od dva polja: **Jezik** (automatski popunjen) i **Opis** (obavezno polje).    

## Korisnici

Na ovoj kartici prikazani su operateri koji obavljaju aktivnosti na ticketu; prilikom stvaranja novog ticketa automatski se popunjavaju polja **Operater** i **Prvi dodijeljeni datum**.     

## Procjena/Napor

Ova kartica aktivira se nakon klika na gumb *Tehnička procjena* na vrpci. Ovisno o vrsti ticketa koji se stvara, bit će ponuđen odgovarajući [Predložak ](/docs/configurations/tables/crm/tickets/template-ticket) s pripadajućim podacima već unesenim u odgovarajuću tablicu. Korisnik može mijenjati sva polja. Polja koja se ne preuzimaju iz tablica Vrste Ticketa ili predloška i koja se stoga moraju ručno popuniti jesu:         
**Stvarni datum početka**: ovdje je moguće unijeti datum stvarnog početka radova, koji može biti različit od **Predviđenog datuma početka**, smještenog pored i automatski popunjenog datumom stvaranja ticketa;       
**Komercijalno/Tehničko**: u ova polja unose se odgovarajući operatori, a isto će biti predstavljeno i u sljedećoj kartici *Komercijalna procjena*.       
U donjoj tabeli važno je navesti/promijeniti stupac **Predviđeno trajanje** jer će popunjavanje ovog stupca automatski popuniti i polja **Procijenjeno vrijeme napora** i **Radni sati** te će poslužiti za daljnje stvaranje komercijalne procjene.        
Nakon što završite s tehničkom procjenom, kliknite gumb *Završi tehničku procjenu*: to će ponovno zaključati uređivanje kartice Procjena/Napor. Kako biste je ponovno uredili, kliknite gumb *Poništi tehničku procjenu*.       

## Podaci o zatvaranju

Ova kartica sastoji se od polja **Datuma zatvaranja** i **Napomene**; oba polja slobodnog su unosa i nisu obavezna.     

## Povezani ticketi

Na ovoj kartici moguće je unijeti eventualno povezane tickete. Da biste to učinili, možete koristiti polje za pomoć, dvaput klikom na stupac **Broj**.     

## Bilješka

Na ovoj kartici moguće je unijeti/brisati bilješke. Da biste to učinili, koristite gumbe *Nova napomena* i *Izbriši napomenu*. Stupci **Operater** i **Datum unosa** automatski se popunjavaju. Oznaka **info rezervirana** označava da napomena treba biti dostupna samo operateru koji ju je unio.        

## Komercijalna procjena

Ova kartica aktivira se nakon klika na gumb *Komercijalna procjena* na vrpci. Ovisno o [Vrsti ticketa](/docs/configurations/tables/crm/tickets/ticket-type) koji se stvara i pripadajućem[Predlošku](/docs/configurations/tables/crm/tickets/template-ticket) bit će ponuđeni određeni podaci, poput Opisa. Korisnik može mijenjati sve podatke.         
Polje **Tehničko/Trgovinsko** preuzima se iz kartice *Tehničke procjene*.    
U donjoj mreži važno je provjeriti/promijeniti stupac **Ukupna trgovačka količina**.Ovaj stupac prikazuje predviđeno trajanje izračunato iz tehničke procjene, ali ga trgovac može povećati/smanjiti, što će stvoriti konačnu procjenu. Ovaj će stupac također popuniti donje polje ispod mreže: **Ukupno trgovinsko predviđeno trajanje**.       
Nakon što završite s komercijalnom procjenom, kliknite gumb *Završi komercijalnu procjenu*: to će ponovno zaključati uređivanje kartice Procjena/Napor. Kako biste je ponovno uredili, kliknite gumb *Poništi komercijalnu procjenu*.       
Kada završite s komercijalnom procjenom, možete stvoriti ponudu putem postupka *Stvaranje ponuda iz ticketa*.    

## Ponude

Na ovoj kartici prikazane su eventualne povezane Ponude povezane s ticketima stvorene pomoću postupka *Izrada ponuda iz ticketa*.     


