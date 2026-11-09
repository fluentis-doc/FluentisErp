---
title: Što je elektroničko fakturiranje
sidebar_position: 1
---

Elektroničko fakturiranje digitalni je sustav izdavanja i slanja računa koji zamjenjuje papirnati oblik novim digitalnim načinima komunikacije.

Kod elektroničkog fakturiranja računi i odobrenja (dokumenti o izmjeni računa) moraju se izrađivati u novom digitalnom formatu „XML (eXtensible Markup Language)”, jeziku koji omogućuje računalnim sustavima definiranje i provjeru značenja sadržanih elemenata primjenom standardiziranih postupaka, čime se provjeravaju informacije potrebne za zakonom propisane kontrole.

Talijanski pravni sustav uveo je upravljanje elektroničkim fakturiranjem Zakonom o proračunu iz 2008. godine, u skladu s propisima Europske unije, a od 6. lipnja 2014. elektronički račun postao je obvezan za izdavanje dokumenata tijelima javne uprave.

„Elektronički račun” propisan talijanskim zakonodavstvom XML je datoteka (eXtensible Markup Language) koja je u skladu s tehničkim specifikacijama iz Priloga A akta ravnatelja Agencije za prihode, protokol br. 89757/2018 od 30. travnja 2018. Sadržaj svih računa općenito je uređen člancima 21. i 21-bis Predsjedničke uredbe br. 633/1972.

Datoteka računa izrađena prema novom XML standardu sadržava drukčiji prikaz obveznih podataka propisanih propisima o PDV-u, koji se prema potrebi mogu dopuniti dodatnim informacijama ili elementima radi lakšeg upravljanja računima i njihova knjiženja.

Člankom 1., stavkom 917., točkama a i b Zakona br. 205 od 27. prosinca 2017. (Zakon o proračunu za 2018.) uvedena je obveza elektroničkog fakturiranja od 1. siječnja 2019. za isporuke dobara i pružanje usluga između subjekata koji imaju prebivalište, poslovno su nastanjeni ili su identificirani na državnom području, primjenom istih informatičkih rješenja koja su se već koristila za izdavanje elektroničkih računa tijelima javne uprave.

Elektronički računi koji su se do tada izdavali tijelima javne uprave, a naknadno i računi izdani u B2B i B2C poslovanju, šalju se putem sustava „Sistema di Interscambio” (SdI), odnosno informacijskog sustava kojim upravlja Agencija za prihode. Taj sustav može primati elektroničke račune, provoditi provjere zaprimljenih datoteka, razmjenjivati odgovarajuće informacije s pošiljateljem te prosljeđivati račune njihovim primateljima.

Poduzeća uključena u postupak elektroničkog fakturiranja moraju upravljati i izlaznim ciklusom, odnosno izdavanjem računa za prodane proizvode ili pružene usluge, i ulaznim ciklusom, odnosno zaprimanjem dokumenata koje izdaju njihovi dobavljači.

## Operativni tijek u Fluentisu

U Fluentisu je moguće upravljati elektroničkim fakturiranjem i povezanim obvezama na sljedeće načine:

- izdavanje prodajnih dokumenata subjektima koji imaju prebivalište, poslovno su nastanjeni ili su identificirani na području Italije;
- izdavanje prodajnih dokumenata tijelima javne uprave;
- preuzimanje elektroničkih nabavnih dokumenata koje izdaju talijanski dobavljači (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONIČKOG FAKTURIRANJA S FLUENTISOM);
- slanje obavijesti sustavu SdI o nabavnim i prodajnim dokumentima koje izdaju inozemni dobavljači ili koji su namijenjeni inozemnim kupcima (subjektima koji nemaju prebivalište, nisu poslovno nastanjeni niti su identificirani na području Italije) (bivši spesometro).

Za upravljanje tijekovima potrebno je konfigurirati vezu u BizLinku namijenjenu komunikaciji s uslugom Fluentis Business Hub. Svrha je te usluge slanje dokumenata sustavu SdI, preuzimanje dokumenata elektroničkog fakturiranja iz ulaznog ciklusa iz sustava SdI (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONIČKOG FAKTURIRANJA S FLUENTISOM) te preuzimanje obavijesti i poruka povezanih s različitim fazama slanja izlaznih računa.

Komunikacijski protokol između sustava Fluentis Business HUB i SdI-ja (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONIČKOG FAKTURIRANJA S FLUENTISOM) temelji se na sustavu aplikacijske suradnje putem web-servisa:

- račun koji je izdan u Fluentisu prolazi kroz vezu BizLinka do sustava Fluentis Business Hub;
- usluga Fluentis Business Hub šalje dokumente sustavu SdI;
- Fluentis Digital Hub preuzima iz sustava SdI obavijesti o statusu dokumenata i prosljeđuje ih ERP sustavu;
- Fluentis Digital Hub prima ulazne račune koje šalju dobavljači kupaca Fluentisa;
- raspoređuje račune prema pojedinačnim konfiguracijama kupaca.

U Fluentisu je stoga moguće:

- generirati prodajne račune u elektroničkom obliku prema strukturi propisanoj za B2B/B2C/PA fakturiranje;
- ako se odluči za digitalno potpisivanje datoteka računa ili ako je takav postupak obvezan zbog prirode samih dokumenata, upravljati izvozom XML dokumenata u vanjsku mapu datotečnog sustava radi digitalnog potpisivanja pomoću softvera treće strane, a zatim ponovno uvesti potpisanu datoteku (`.xml` ili `.p7m`);
- pregledavati sadržaj XML datoteke i prema potrebi joj priložiti PDF datoteku računa u standardnom formatu;
- slati dokumente sustavu SdI (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONIČKOG FAKTURIRANJA S FLUENTISOM);
- pratiti status poslanih dokumenata putem tablica za masovno pretraživanje, polja za prikaz statusa dokumenata u pojedinačnim dokumentima i nadzornih ploča za pregled zapisnika koje šalje sustav SdI;
- preuzimati ulazne račune koje šalju dobavljači (NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONIČKOG FAKTURIRANJA S FLUENTISOM).

Slanje i preuzimanje elektroničkih dokumenata odvija se putem postupka **PROMJENE STATUSA** dokumenata.

Fluentis putem sustava Fluentis Business Hub omogućuje prijenos u SdI i potpisanih datoteka računa i datoteka bez digitalnog potpisa. Za digitalno potpisivanje generiranih dokumenata potrebno je preuzeti dokumente u mapu datotečnog sustava, primijeniti digitalni potpis pomoću vanjskog softvera za potpisivanje (npr. DIKE) te ponovno uvesti tako potpisanu datoteku (`.xml` ili `.p7m`), koja će se zatim poslati sustavu SdI u novom formatu.

Nakon slanja dokumenata sustavu SdI, Fluentis preuzima obavijesti koje generira sustav razmjene (Sistema di Interscambio) i povezuje ih s odgovarajućim dokumentima, upravljajući pritom promjenama njihovih statusa.

Ako nije dostupna aktivna veza sa sustavom Fluentis Business Hub, i dalje je moguće generirati XML datoteke izlaznog ciklusa za odabrane kontakte, preuzeti generirane datoteke i poslati ih putem kanala izvan Fluentisa.

XML datoteke koje Fluentis generira i koje sustav SdI preuzima za ulazni ciklus pohranjuju se u Fluentisovu sustavu za upravljanje dokumentacijom. Osim toga, uvijek su dostupne tijekom različitih faza upravljanja prodajnim dokumentom putem posebne funkcionalnosti **Registar dokumenata SDI**, u kojoj je moguće pregledati kronološku povijest slanja dokumenta te preuzeti i pregledati datoteke koje je generirao Fluentis (XML i PDF) i koje je zaprimio sustav SdI.

Ulazni ciklus elektroničkog fakturiranja prema privatnim subjektima ne omogućuje primatelju odbijanje računa. Stoga se takav račun mora obraditi kao računovodstvena obveza u skladu s važećim propisima.