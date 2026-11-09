---
title: Šta je elektronsko fakturisanje
sidebar_position: 1
---

Elektronsko fakturisanje je digitalni sistem izdavanja i slanja faktura koji zamenjuje papirni oblik novim digitalnim načinima komunikacije.

Kod elektronskog fakturisanja fakture i odobrenja (dokumenti o izmeni faktura) moraju se izrađivati u novom digitalnom formatu „XML (eXtensible Markup Language)”, jeziku koji omogućava računarskim sistemima da definišu i provere značenje sadržanih elemenata primenom standardizovanih postupaka, čime se proveravaju informacije potrebne za zakonom propisane kontrole.

Italijanski pravni sistem uveo je upravljanje elektronskim fakturisanjem Zakonom o budžetu iz 2008. godine, u skladu sa propisima Evropske unije, a od 6. juna 2014. elektronska faktura postala je obavezna za izdavanje dokumenata organima javne uprave.

„Elektronska faktura” propisana italijanskim zakonodavstvom jeste XML datoteka (eXtensible Markup Language) koja je u skladu sa tehničkim specifikacijama iz Priloga A akta direktora Agencije za prihode, protokol br. 89757/2018 od 30. aprila 2018. Sadržaj svih faktura uopšteno je uređen članovima 21. i 21-bis Predsedničke uredbe br. 633/1972.

Datoteka fakture izrađena prema novom XML standardu sadrži drugačiji prikaz obaveznih podataka propisanih propisima o PDV-u, koji se prema potrebi mogu dopuniti dodatnim informacijama ili elementima radi lakšeg upravljanja fakturama i njihovog knjiženja.

Članom 1, stavom 917, tačkama a i b Zakona br. 205 od 27. decembra 2017. (Zakon o budžetu za 2018.) uvedena je obaveza elektronskog fakturisanja od 1. januara 2019. za isporuke dobara i pružanje usluga između subjekata koji imaju prebivalište, poslovno su nastanjeni ili su identifikovani na državnoj teritoriji, primenom istih informatičkih rešenja koja su se već koristila za izdavanje elektronskih faktura organima javne uprave.

Elektronske fakture koje su se do tada izdavale organima javne uprave, a naknadno i fakture izdate u B2B i B2C poslovanju, šalju se putem sistema „Sistema di Interscambio” (SdI), odnosno informacionog sistema kojim upravlja Agencija za prihode. Taj sistem može da prima elektronske fakture, sprovodi provere primljenih datoteka, razmenjuje odgovarajuće informacije sa pošiljaocem i prosleđuje fakture njihovim primaocima.

Preduzeća uključena u postupak elektronskog fakturisanja moraju da upravljaju i izlaznim ciklusom, odnosno izdavanjem faktura za prodate proizvode ili pružene usluge, i ulaznim ciklusom, odnosno prijemom dokumenata koje izdaju njihovi dobavljači.

## Operativni tok u Fluentisu

U Fluentisu je moguće upravljati elektronskim fakturisanjem i povezanim obavezama na sledeće načine:

- izdavanje prodajnih dokumenata subjektima koji imaju prebivalište, poslovno su nastanjeni ili su identifikovani na teritoriji Italije;
- izdavanje prodajnih dokumenata organima javne uprave;
- preuzimanje elektronskih nabavnih dokumenata koje izdaju italijanski dobavljači (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONSKOG FAKTURISANJA SA FLUENTISOM);
- slanje obaveštenja sistemu SdI o nabavnim i prodajnim dokumentima koje izdaju inostrani dobavljači ili koji su namenjeni inostranim kupcima (subjektima koji nemaju prebivalište, nisu poslovno nastanjeni niti su identifikovani na teritoriji Italije) (bivši spesometro).

Za upravljanje tokovima potrebno je konfigurisati vezu u BizLinku namenjenu komunikaciji sa uslugom Fluentis Business Hub. Svrha ove usluge je slanje dokumenata sistemu SdI, preuzimanje dokumenata elektronskog fakturisanja iz ulaznog ciklusa iz sistema SdI (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONSKOG FAKTURISANJA SA FLUENTISOM), kao i preuzimanje obaveštenja i poruka povezanih sa različitim fazama slanja izlaznih faktura.

Komunikacioni protokol između sistema Fluentis Business HUB i SdI-ja (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONSKOG FAKTURISANJA SA FLUENTISOM) zasniva se na sistemu aplikativne saradnje putem veb-servisa:

- faktura koja je izdata u Fluentisu prolazi kroz BizLink vezu do sistema Fluentis Business Hub;
- usluga Fluentis Business Hub šalje dokumente sistemu SdI;
- Fluentis Digital Hub preuzima iz sistema SdI obaveštenja o statusu dokumenata i prosleđuje ih ERP sistemu;
- Fluentis Digital Hub prima ulazne fakture koje šalju dobavljači kupaca Fluentisa;
- raspoređuje fakture prema pojedinačnim konfiguracijama kupaca.

U Fluentisu je stoga moguće:

- generisati prodajne fakture u elektronskom obliku prema strukturi propisanoj za B2B/B2C/PA fakturisanje;
- ako se odluči za digitalno potpisivanje datoteka faktura ili ako je takav postupak obavezan zbog prirode samih dokumenata, upravljati izvozom XML dokumenata u eksternu fasciklu datotečnog sistema radi digitalnog potpisivanja pomoću softvera treće strane, a zatim ponovo uvesti potpisanu datoteku (`.xml` ili `.p7m`);
- pregledati sadržaj XML datoteke i prema potrebi joj priložiti PDF datoteku fakture u standardnom formatu;
- slati dokumente sistemu SdI (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONSKOG FAKTURISANJA SA FLUENTISOM);
- pratiti status poslatih dokumenata putem tabela za masovnu pretragu, polja za prikaz statusa dokumenata u pojedinačnim dokumentima i kontrolnih tabli za pregled zapisnika koje šalje sistem SdI;
- preuzimati ulazne fakture koje šalju dobavljači (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONSKOG FAKTURISANJA SA FLUENTISOM).

Slanje i preuzimanje elektronskih dokumenata odvija se putem postupka **PROMENE STATUSA** dokumenata.

Fluentis putem sistema Fluentis Business Hub omogućava prenos u SdI i potpisanih datoteka faktura i datoteka bez digitalnog potpisa. Za digitalno potpisivanje generisanih dokumenata potrebno je preuzeti dokumente u fasciklu datotečnog sistema, primeniti digitalni potpis pomoću eksternog softvera za potpisivanje (npr. DIKE), a zatim ponovo uvesti tako potpisanu datoteku (`.xml` ili `.p7m`), koja će se potom poslati sistemu SdI u novom formatu.

Nakon slanja dokumenata sistemu SdI, Fluentis preuzima obaveštenja koja generiše sistem razmene (Sistema di Interscambio) i povezuje ih sa odgovarajućim dokumentima, upravljajući pritom promenama njihovih statusa.

Ako nije dostupna aktivna veza sa sistemom Fluentis Business Hub, i dalje je moguće generisati XML datoteke izlaznog ciklusa za izabrane kontakte, preuzeti generisane datoteke i poslati ih putem kanala izvan Fluentisa.

XML datoteke koje Fluentis generiše i koje sistem SdI preuzima za ulazni ciklus čuvaju se u Fluentisovom sistemu za upravljanje dokumentacijom. Osim toga, uvek su dostupne tokom različitih faza upravljanja prodajnim dokumentom putem posebne funkcionalnosti **Registar dokumenata SDI**, u kojoj je moguće pregledati hronološku istoriju slanja dokumenta, kao i preuzeti i pregledati datoteke koje je generisao Fluentis (XML i PDF) i koje je primio sistem SdI.

Ulazni ciklus elektronskog fakturisanja prema privatnim subjektima ne omogućava primaocu da odbije fakturu. Zato se takva faktura mora obraditi kao računovodstvena obaveza u skladu sa važećim propisima.