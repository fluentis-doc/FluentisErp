---
title: Izlazna prodajna dokumentacija
sidebar_position: 2
---

Obrazac “**Izlazna prodajna dokumentacija**“ podijeljen je u dva dijela, zaglavlje koje sadrži polja za filtriranje koja se mogu koristiti za filtriranje dokumenata i prikaza rezultata provedenog pretraživanja:  

## Tipke na traci izbornika:

- **Pretraga**: pokreće pretragu u mreži rezultata prema podacima prisutnim u filtrima zaglavlja.  
- **Prikaz**: otvara ugrađeni preglednik za pregled xml datoteke prema unaprijed učitanom stilu unutar Fluentis-a kako bi omogućio "čisti" pregled  
- **Otvori dokument**: otvara dokument fakture vezan uz dotičnu xml datoteku  
- **Preuzmi privitak:**  datoteka xml se preuzima lokalno na računalo kako bi se mogla obraditi, na primjer, s uslugama za slanje trećih strana.  
- **Ponovno učitaj datoteku:** aktivno je kada je redak u stanju *Generirano*  i omogućuje ponovno učitavanje datoteke iz vanjskog direktorija (lokalnog ili mrežnog); korisno za ponovno učitavanje xml datoteke u kojoj je bilo potrebno ručno intervenirati kako bi se postavio neki specifičan ili neodgovarajući tag (bez potrebe za prolaskom kroz korak *potpisano* kao u prošlosti).  
Fluentis provjerava ima li datoteka isto ime i je li xml sintaktički ispravan, ali ne provodi test na Sdi strukturu (stoga pogrešan tag ili tag s netočnim vrijednostima neće generirati nikakvu poruku i neće doći do slanja Sdi). U logu vezanom uz datoteku (na primjer, pritiskom na Prikaz) u polju **Informacije** bit će prikazana napomena da je datoteka ručno prepisana, zajedno s datumom.  


## Vrijednosti prikazane u mreži su:  

-      **Status e-dokumenta**: status dokumenta koji se odnosi na njegovo slanje u putem Fluentis Business Huba  

-      **Tip**: šifra vrste prodajnog dokumenta

-      **Datum**,**Broj, Kupac:** datum, broj dokumenta i kupac na kojeg se odnosi dokument

-      **Datum primanja kupca**: naziv datoteke i naziv XML datoteke koja se stvara kada se dokument prebacu u stanje GENERIRANO; u izvornom formatu ili nakon digitalnog potpisa, predstavlja datoteku računa koja se šalje ES-u. 

-      **Naziv datoteke ES:** naziv datoteke i naziv XML datoteke koja se stvara kada se dokument prebacu u stanje GENERIRANO; u izvornom formatu ili nakon digitalnog potpisa, predstavlja datoteku računa koja se šalje ES-u.

-      **Datum zadnjeg događaja**: odnosi se na zadnju radnju koju je izvršio operater ili posljednju obavijest primljenu od ES-a tijekom procesa upravljanja dokumentima

Klikom na proširenje pregleda računa (tipka + krajnje lijevo) otvara se detalj koji se odnosi na stanje dokumenta te se prikazuju pojedinačni prijelazi koji su se dogodili u vođenju dokumenta s pripadajućim datumom izvršenja i naziv fakture bilo koje datoteke generirane promjenom stanja:

![](/img/it-it/finance-area/sdi-documents/outgoing-sales-documents/image02.png)

Dokumenti predstavljeni u prikazu dokumenata ES-a su svi oni koji su kreirani aktivnim tokom upravljanja dokumentima fakture, bez obzira na status; dvostruki klik na redak fakture otvara panel u kojem je moguće pregledati dokumente nastale tijekom upravljanja datotekom i povijest prijelaza.

![](/img/it-it/finance-area/sdi-documents/outgoing-sales-documents/image03.png)

U prikazu dokumenata ES-a, odabirom dokumenta ili više njih u istom statusu, moguće je upravljati statusom obrade dokumenta pomoću padajućeg izbornika Status na traci izbornika i odabirom novog statusa dokumenta:

![](/img/it-it/finance-area/sdi-documents/outgoing-sales-documents/image04.png)







