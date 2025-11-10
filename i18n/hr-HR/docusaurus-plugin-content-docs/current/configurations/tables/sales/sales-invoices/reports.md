---
title: Ispisi
sidebar_position: 5
---

Dostupni su različiti standardni **ispisi**. Za pregled ispisa prije same štampe, potrebno je postaviti željene filtre i pritisnuti tipku *Pregled* na alatnoj traci. Ova operacija prikazuje ispis na ekranu bez mijenjanja statusa dokumenta. Ako je potrebno izvršiti papirni ispis ili spremiti datoteku, treba kliknuti tipku *Ispis*.


## Ispis računa

Ova ispis služi za masovno ispisivanje faktura prodaje koje su već unesene u sustav, prema filtrima specificiranim u početnom obrascu. Prvi odabir koji se traži je između privremenog ispisa i konačnog ispisa: razlika između dviju vrsta je ta što privremeni ispis nema nikakav učinak na stanje fakture, dok konačni ispis na papiru ili digitalno dovodi dokument u stanje *Ispisano*. Prvi filtri koji se prikazuju su oni koji se odnose na informacije iz zaglavlja dokumenata, kao što su vrsta fakture, broj dokumenta i kupac. U grupi *Napredno pretraživanje* mogu se označiti stanja fakture prema kojima se primjenjuje filtriranje, kao i projekt naveden u zaglavlju dokumenta.  
U grupi *Artikl* moguće je filtrirati, osim prema kodu artikla, i prema drugim informacijama vezanim uz redove tijela dokumenta, kao što su barkod, opis artikla ili ako je povezan projekt s redom artikla.  
Na raspolaganju su dva različita izgleda za ovaj ispis, koja se mogu odabrati iz kombinirane kutije na alatnoj traci. Prvi se zove *prateća faktura* i uključuje unos podataka vezanih uz prijevoz zajedno s detaljima fakture; drugi se zove *faktura prodaje* i ne uključuje unos podataka o prijevozu, stoga se preporučuje za odgođene fakture.       
S ovim ispisom, svaki račun se paginira zasebno i sadrži sljedeće sekcije:
- Zaglavlje s logotipom i podacima o tvrtki
- Podaci o računu (tip, broj, datum itd.)
- Podaci o klijentu (OIB, agent itd.)
- Detalji računa (šifra artikla, količina, cijena itd.)
- Sažetak otpremnice (ukupna roba, troškovi, ukupni porez itd.)        
Kod ovog ispisa, samo za račune izvan EU, ispisuju se nomenklature artikala ispod šifre artikla; dodatno, u stupcu s opisom artikla prikazuje se mali pregled sa sažetkom iznosa po nomenklatur

## Bilanca fakturiranja  

Ispis bilance fakturiranja pruža detaljan pregled poslovnog prometa, organizirajući prodajne račune na način koji olakšava analizu i računovodstveno upravljanje.
Zahvaljujući dostupnim filtrima, moguće je prilagoditi ispis tako da uključuje samo one račune koji zadovoljavaju određene kriterije — primjerice, one izdane od određenog datuma ili one koji se odnose na određene artikle.
Ovaj ispis podijeljen je u nekoliko sekcija koje omogućuju detaljan pregled podataka iz različitih perspektiva.
Isticanjem stavki duguje, potražuje i ukupno u različitim sekcijama, omogućuje se jasan uvid u prihode i rashode povezane s prodajom.         
Glavne sekcije su:  
- Kupci: prikazuje promet razvrstan po grupama kupaca. Ispod svake grupe navedeni su kupci s pripadajućim iznosima duguje, potražuje i ukupno. Na kraju sekcije prikazuje se ukupni iznos za grupu.  
- Računi prihoda: prikazuje račune razvrstane po vrstama prodajnog prometa. Uključeni su samo računi koji imaju definiranu stavku Promet prodaje. Na kraju sekcije prikazuje se ukupni iznos po vrsti prometa.  
- Plaćanja: detaljno prikazuje promet prema vrstama plaćanja (npr. gotovina, virman, kreditna kartica). Svaka vrsta plaćanja ima svoj pregled duguje, potražuje i ukupno, a na kraju sekcije prikazuje se zbroj.  
- Agenti: za svakog agenta prikazuje neto vrijednost robe i ostvarenu proviziju. Ova sekcija omogućuje procjenu učinka agenata i njihov doprinos ukupnom prometu.  
- Troškovi: prikazuje duguje, potražuje i ukupni iznos dodatnih troškova, pružajući pregled troškova povezanih s prodajom.            
      
U završnom dijelu nalazi se Sažetak po stopi PDV-a, gdje je za svaku stopu PDV-a navedena njezina oznaka, ukupna osnovica i iznos poreza.   

## Popis računa  

Ovim ispisom moguće je ispisati popis računa unesenih u sustav.
Filtri su isti kao u prethodnim ispisima, uz dodatnu mogućnost odabira načina sortiranja računa — po kupcu, broju računa ili tipu računa.
Također je moguće odabrati dvije vrste ispisa: *Sažeti* ispis prikazuje popis zaglavlja računa, s prikazom ukupnih iznosa i podjelom po dospijećima; *Detaljni ispis* prikazuje sve stavke pojedinih računa, s informacijama o količinama i vrijednostima.

## Promet

Ovaj izvještaj analizira promet prodaje ostvaren preko svih [Vrsta računa](/docs/configurations/tables/sales/invoices-type) koji imaju aktiviran pokazivač *U statistici*, prikazujući vrijednost prometa i postotak udjela svake pojedine stavke artikla u ukupnom prometu.
Na početnom ekranu prikazani su filteri vezani uz zaglavlje dokumenata, slični onima iz prethodnih izvještaja, ali s dodatnim mogućnostima specifičnim za ovaj izvještaj.  
U polju *Godine za usporedbu* mogu se definirati razdoblja za međusobnu usporedbu. Sekcija *Opcije* sadrži pokazivače za prikaz dodatnih podataka i uključivanje/isključivanje određenih vrsta stavki: *Količina* – prikazuje i količine uz vrijednosti; *Samo kodirani artikli* – uključuje samo artikle s kodom; *Uključi troškovne artikle* i *Uključi poklon artikle* – uključuje te stavke u izračun. Padajući izbornik *Način sortiranja* omogućuje prikaz po kupcu, šifri kupca ili iznosu. U mreži *Grupiraj* mogu se postaviti razine grupiranja povlačenjem željenih vrijednosti iz tablice *Svojstva* u tablicu grupiranja. Za brisanje grupiranja koristi se tipka *Ukloni grupiranja*.

## Statistika prodaje

Ova sekcija omogućuje analizu prodaje s fokusom na marže profita izračunate na temelju troška prodanih proizvoda ili usluga.  
Ispis predviđa dva moguća prikaza podataka, koja se mogu odabrati iz kombinirane kutije na alatnoj traci. Prvi prikaz, *Marže na trošak nabave iz cjenika*, uspoređuje vrijednost prodaje s pripadajućim troškom na razini cjenika, s naznakom vrijednosti marže i pripadajućeg postotka. Drugi prikaz, *Marže prema trošku ulaza robe iz otpremnice*, prikazuje usporedbu između vrijednosti prodaje i troška navedenog na kretanjima prijema robe registriranim u skladištu.  
U početnom obrascu prikazani su neki filtri koji se odnose na zaglavlje dokumenata za vađenje, slični onima u već analiziranim izvještajima, ali postoje i neke mogućnosti specifične za ovaj izvještaj.  
U grupnom okviru *Opcije* nalaze se neki flagovi pomoću kojih je moguće prikazati određene podatke i uključiti ili isključiti neke vrste redaka artikala u izračunu: označavanjem opcije *Količina* prikazat će se, osim vrijednosti, i količine pojedinih redaka; *Samo kodirani artikli* osigurava da ispis uzima u obzir samo redove tipa *Kodirani artikal*; *Također troškovni artikli* i *Također poklon artikli* uključuju u izračune i redove tipa trošak i/ili poklon. Kombinirana kutija *Način sortiranja* omogućuje odabir načina na koji će se podaci prikazivati, između: opisa kupca, koda kupca ili iznosa fakturiranja. Na kraju, u mreži *Grupiraj* moguće je postaviti grupiranja, u opadajućem redoslijedu, prema kojima će se ispis prikazivati: za populaciju tablice dovoljno je odabrati željeno grupiranje u tablici *Svojstva* i povući ga u tablicu grupiranja.

##  Ispisi CONAI

Dokument CONAI izjave koristi se za prijavu podataka o ambalaži koju tvrtke stavljaju na tržište.  
Ovaj dokument omogućuje izračun CONAI ekološke naknade, troška kojim poduzeća podupiru sustav recikliranja ambalaže.  
Filtri omogućuju odabir samo dokumenata koji zadovoljavaju određene kriterije, a rezultati se mogu grupirati po Materijalu, Kupcu ili Artiklu.         
Dokument sadrži:  
- Referentno razdoblje  
- Osnovne podatke   
- Težinu ambalaže    
- Ekološku naknadu    
- Izuzeće  

Više informacija dostupno je u članku: [Pregled i ispis](/docs/guide/common/operations-with-data/reports) 