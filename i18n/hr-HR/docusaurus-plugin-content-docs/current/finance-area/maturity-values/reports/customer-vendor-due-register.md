---
title: Pregled otvorenih stavaka kupaca i dobavljača
sidebar_position: 1
---

Iz ove forme moguće je definirati sve potrebne parametre za pokretanje ispisa otvorenih stavaka kupaca/dobavljača.

Obrazac je isti kao i onaj za pokretanje drugih ispisa temeljenih na obradi otvorenih stavaka, međutim neka polja možda neće biti korištena ili relevantna za ovaj ispis.

Na vrhu obrasca nalaze se različiti filteri s osnovnim podacima:  

**![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image01.png)**

**Konto:** glavni filter za podkonta kupaca/dobavljača. Ako nema unesenih podataka, ispis će se obraditi nad svim kontima kupaca i dobavljača. Moguće je unijeti samo glavni konto (bez podkonta) za dobivanje samo kupaca ili samo dobavljača.  

**Od/do datuma dospijeća**: filtar po datumu dospijeća koji je pohranjen unutar otvorene stavke (obrađuje se prilikom generiranja otvorene stavke prema uvjetima plaćanja, osim ako se ručno ne mijenja).  

**Status**: filtar je prema zadanim postavkama postavljen u status Otvorena stavka (postoji i Zatvorena stavka i Djelomično otvoreno), može se mijenjati ili ostaviti prazno za pregled svih stavaka.  

**Pozicija**: padajući izbornik s dodatnom kodificiranim statusima otvorenih stavaka. Uglavnom se ne koristi.

**Plaćanje**: filtar prema vrsti plaćanja pohranjenoj unutar otvorene stavke (generira se tijekom stavaranja otvorene stavke prema uvjetima plaćanja osim, ako se ručno ne mijenja).

**Šifra dokumenta**: filtriranje prema šifri vrste dokumenta povezanim s otvorenom stavkom (npr. faktura ili odobrenje).  

**Valuta**: filtrirajte prema valuti u kojoj su dospijeća denominirana (ekvivalentne vrijednosti u eurima također će biti prikazane u ispisu).  

**Agent**: filtrirajte agenta povezanog sa stavkama (samo na strani klijenta).

**Banka**: filter po banci vezanoj uz otvorenu stavku.   

**Projekt**: filter po projektu povezanom s otvorenom stavkom.

**Od/Do godine dospjele vrijednosti; Od/Do broja dospjele vrijednosti**:  filtriranje prema godini i broju otvorene stavke.  

**Odjel**: filter po odjelu poduzeća (operativno ako postoji više odjela u bazi podataka). 

Parametri prikaza

![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image02.png)

**Stavke otvorene za**: ovo polje, predloženo prema zadanim postavkama kada se obrazac otvori, može se modificirati kako bi se dobila jasnija situacija vezana uz stanje otvorenih stavaka. 

Primjer: ako je plativa faktura s datumom 1. lipnja otvorila stavku koja istječe 1. srpnja, a plaćanje za tu stavku je zabilježeno 28. lipnja, pregled otvorenih stavaka dobavljača s datumom nakon 28. (na primjer, 30. lipnja), dospijeće neće biti vidljivo jer je zatvoreno, ako se gledaju stavke npr. 20. srpnja, dospijeće će biti vidljivo jer je još uvijek otvoreno tog datuma.

**Vrijednosti dospjelosti i plaćanja na datume**: s aktivnom zastavicom, bit će prikazane otvorene stavke samo s datumom otvaranja dospijeća i datumom plaćanja; s deaktiviranom zastavicom, bit će prikazane sve stavke. 

**Sintetski**: ako je zastavica aktivna, skriva daljnje stupce koji se odnose na podatke o plaćanju, ako je deaktivirana, omogućuje prikaz svih pojedinosti.  

**S računima koji dospijevaju**: budući da nakon obračuna izdavanja mjenica (mjenica, potvrda banke i sl.) dolazi do storniranja odobrenja prema kupcu i istovremenog zatvaranja otvorene stavke, aktiviranjem ove zastavice, datum dospijeća je "ispravljen" kako bi se također uzeli u obzir i stavke koje će biti zatvorene.  

**Pretvorba valuta**: odabirom valute iz padajućeg izbornika stavke će se pretvoriti u odabranu valutu po referentnom tečaju toga dana.  

MOGUĆI KRITERIJI GRUPIRANJA KOJI SE MOGU AKTIVIRATI

![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image03.png)

Napomena: Naziv tvrtke = grupiranje na temelju podataka o kupcu ili dobavljaču.  

Banka = grupiranje po banci plaćanja. 

Datum krajnjeg roka = grupiranje će se odvijati po isteku datuma plaćanja, predstavljajući sve otvorene stavke kronološkim redoslijedom. 

PODRUČJE **Dani**: koristi se samo za ispis Izvješća o isteku i nije relevantno za ovaj ispis.

![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image04.png)

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/WhWmjPGfF0Y" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>





