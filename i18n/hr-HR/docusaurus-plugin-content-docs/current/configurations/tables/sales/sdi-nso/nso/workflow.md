---
title: Tipovi narudžbi i promjena statusa  
sidebar_position: 6
---

Stanje **Primljeno** označava narudžbu koja je primljena u Fluentis bez pogrešaka, ali još nije unesena kao narudžba kupca.  
Narudžba može biti primljena i sa statusom “U pogrešci”, što znači da je narudžba primljena i unesena, ali sadrži netočne podatke (npr. cijena stavke 0) ili nedostajuće podatke (npr. NSO kod kupca). Takvu narudžbu korisnik mora ispraviti prije daljnjih promjena statusa.  
Iz stanja Primljeno moguće su dvije akcije:        
- **Uvezi narudžbu** narudžba prelazi u stanje *Uneseno*, tj. kreira se u dokumentima Fluentis-a;  
- **Poništi dokument**, narudžba se ne kreira u Fluentis-u i prelazi u stanje *Poništeno*, jer je odbijena od strane dobavljača.

## Jednostavna narudžba

U jednostavnom procesu narudžbe, gdje samo kupac šalje narudžbe, a dobavljač ne odgovara putem sustava nego drugim kanalima (email, fax itd.), iz stanja Uneseno moguće je preći u:  
- *Čekanje otkazivanja od kupca*, narudžba je u stanju čekanja dok kupac ne pošalje otkaz putem drugih kanala (email, telefon itd.).  
- *Čekanje zamjene od kupca*, narudžba je u stanju čekanja dok se ne primi zamjenska narudžba od kupca.         

Kupac može podnijeti zahtjev za zamjenu narudžbe.
U tom slučaju, originalna narudžba prelazi u stanje “U zahtjevu za zamjenu”. Ovdje se mogu odabrati dva moguća stanja:  
- *Vrati u uneseno* slučaju da se zamjena ne prihvati i želi vratiti narudžbu u stanje “Uneseno”, kako bi se mogla izvršiti s originalnim vrijednostima.  
- *Zamjena od strane kupca* u slučaju da se želi prihvatiti zamjena narudžbe.        

Prilikom primitka zamjenske narudžbe bit će generiran dodatni redak sa statusom *Na čekanju prihvaćanja*, koji se odnosi na novu narudžbu.  
U slučaju prihvaćanja zamjene nove narudžbe za inicijalnu narudžbu, redak *Na čekanju prihvaćanja* prelazi u status *Uneseno*, dok redak iz izvorne narudžbe *Na zahtjevu za zamjenu* prelazi u status *Zamijenjeno od strane kupca*.

## Potpuna narudžba

U procesu potpune narudžbe, gdje kupac i dobavljač mogu slati narudžbe putem NSO-a, iz stanja “Uneseno” moguće je prijeći u sljedeća stanja:  
- *Slanje potvrde prihvaćanja* šalje se obavijest kupcu koja potvrđuje prihvaćanje narudžbe od strane dobavljača (IBSA). Narudžba prelazi u stanje “Potvrđeno od dobavljača”, a generirat će se dodatni red za datoteku odgovora potvrde.  
- *Slanje odbijenice* šalje se obavijest kupcu o neprihvaćanju narudžbe, a narudžba prelazi u stanje *Otkazano od dobavljača*.  
- *Kreiranje odgovora s izmjenama* omogućuje izmjenu dokumenta u dijelovima koji se tiču šifre artikla, količine i cijene pojedinih redova te njegovo slanje kupcu, koji može prihvatiti ili odbiti izmijenjenu narudžbu. Pojavit će se poruka upozorenja o zatvaranju originalne narudžbe i kreiranju nove narudžbe na kojoj će se izvršiti izmjene.  
Nakon što se izmjene provedu, narudžba se može poslati korištenjem stanja *U odgovoru s izmjenom*. Nova izmijenjena narudžba prelazi u stanje “Čeka na odgovor”, a generirat će se i nova obavijest.
- *Slanje potvrde primitka* šalje se jednostavna obavijest kupcu o primitku narudžbe, a narudžba prelazi u stanje *Primljeno od dobavljača*.    

## Prethodno dogovorena narudžba  

U prethodno dogovorenoj narudžbi, proces počinje od dobavljača koji, kao što je prethodno dogovoreno s kupcem putem drugih kanala (e-mail, fax…), šalje NSO narudžbu.    

Početno stanje koje preuzima narudžba unaprijed dogovorena je stanje *Kreirano unaprijed dogovoreno*, od kojeg se može izvršiti prijelaz u stanje *Kontrola unaprijed dogovorena*, što dovodi narudžbu u stanje *Kontrolirano*. Iz stanja *Kontrolirano* moguće je izvršiti 2 prijelaza stanja:  
- *Vraćanje u stanje unaprijed dogovoreno* vraća narudžbu u stanje *Kreirano unaprijed dogovoreno*  
- *Generacija unaprijed dogovorena* izvršava generaciju datoteke narudžbe unaprijed dogovorene, prelazeći njeno stanje u *Generirano*, koje može također pretrpjeti 2 promjene stanja:  
> - *Otprema unaprijed dogovorena*, koja dovodi narudžbu u stanje *Za otpremu*, tj. narudžba se šalje kupcu i spremna je za fizičko ispunjenje;  
> - *Vraćanje u kontrolirano*, što vraća narudžbu u stanje *Kontrolirano*.