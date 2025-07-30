---
title: Izrada elektroničkog računa
sidebar_position: 2
---

Na ovoj stranici prikazano je:

 - **Izdavanje elektroničke računa za B2B i javnu upravu (PA)**  
 - **Upravljanje digitalnim potpisom**  
 - **Postupak izrade računa za korisnike koji nisu pretplaćeni na FBH uslugu**  

Za izradu elektroničke fakture/e-računa između poslovnih subjekata (B2B) i s javnom upravom (B2G), najprije se morati izraditi prodajnu fakturu uobičajenim Fluentis procedurama, nakon čega se nastavlja s generiranjem relevantne XML datoteke pomoću odgovarajućeg tijeka rada.

![](/img/it-it/finance-area/e-invoice/create-electronic-invoice/image01.png)

 Generiranje XML datoteke se izvršava kroz neka stanja/statuse dokumenta/faktura.

 ![](/img/it-it/finance-area/e-invoice/create-electronic-invoice/image02.png)

  

Novoizrađena faktura prikazuje se sa statusom "**Nije ispitano**", naknadni status  "**Kontrola dokumenta**" osim identifikacije da je dokument kreiran vrši i automatsku provjeru prisutnosti određenih mini podataka.

Iz toga je moguće preko statusa "**Generazione del file**" generirati XML izgled fakture.

Imajte na umu dva posebna stanja "**Poništi dokument**" i "**Izuzmi dokument**", prvo znači da se dokument ne smije poslati krajnjem kupcu, ali će i dalje ostati važeći za potrebe PDV-a, drugo se odnosi na dokumente koji po svojoj prirodi ne smiju spadati u tijek upravljanja elektroničkim fakturiranjem.

Nakon statusa "generirano" moguće je dodijeliti status "**Za slanje**", ovaj status će automatski uzrokovati da Fluentis Business HUB obradi datoteku i pošalje je u SDI.

Nakon što je dokument poslan FBH servisu, status će se automatski promijeniti prvo u "**U Fluentis Business Hubu**", a zatim u status "**U SDI-ju**", kada server proslijedi datoteku.

Za praćenje ovih stanja jednostavno pritisnite tipku ![](/img/neutral/common/search.png) za ažuriranje obrasca.

n.b. prelaskom u status "Za slanje" više se neće moći vratiti ili modificirati fakturu već ćete morati pričekati obavijest o ishodu od SDI-ja.

UPRAVLJANJE DIGITALNIM POTPISOM Ako datoteka mora biti digitalno potpisana, aktiviranje oznake "Digitalni potpis" na razini registra korisnika ili u tablici poduzeća uzrokovat će pojavljivanje dodatnog statusa nakon faze generiranja praćenja.

Zapravo, s generiranim statusom kopija datoteke stvorena je izravno u vanjskoj mapi postavljenoj prilikom konfiguracije elektroničkog fakturiranja i bit će dovoljno obraditi je softverom za potpis. 

Stoga status "**Potpis dokumenta**" samo ponovno uvozi potpisani dokument u novom formatu (p7m). 

POSTUPAK ZA ONE KOJI SE NE PRETPLATE NA FBH SERVIS Za one koji se oslanjaju na alate van Fluentisa za slanje računa u SDI, jednostavno preuzmite e-račun u XML formatu i zatim ga prenesite putem odabranog kanala.

Pomoću tipke ![](/img/it-it/finance-area/e-invoice/create-electronic-invoice/image04.png) moguće je preuzeti xml datoteku koja je već u stanju "Generirano", no preporučljivo je ipak prebaciti u stanje "Za slanje" kako biste datoteku blokirali od bilo kakvih promjena.  






