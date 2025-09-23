---
title: Parametri neplaćeno
sidebar_position: 2
---

Parametri modula **Potraživanje** nalaze se u **Parametri > Riznica**.

U parametrima neplaćenih stavki mogu se unaprijed postaviti zadane stavke koje će se predlagati u procedurama modula.

#### Tip zapisa
- **Privremeni račun + troškovi protestacije**: s ovom postavkom otvorit će se stavka klijenta na privremenom računu za isti iznos kao izvorni efekt te će se troškovi terećiti na bankovni račun.   
- **Klijent + troškovi protestacije**: preporučuje se postavka ‘Klijent + troškovi protestacije’ kako bi se mogla ponovo otvoriti stavka klijenta za isti iznos kao izvorni efekt i terećiti troškove na bankovni račun.

#### Upravljanje dospijećima plaćanja  
- **Ponovno otvaranje dospjele vrijednosti računa**: preporučuje se postavka ‘Ponovno otvaranje stavke vezane uz fakturu’. Ova opcija otvara novu stavku, ali sa istim referencama na broj i datum izvorne fakture. Ako je efekt sažetak više dokumenata, uzet će se prvi s liste, dok će u bilješkama stavke biti navedeni svi ostali referentni dokumenti.  
- **Otvaranje nove stavke**: alternativna opcija kreira novu stavku s brojem i datumom dokumenta temeljenim na broju i datumu efekta koji je ostao neplaćen. 

#### Troškovi

Ovaj odjeljak treba postaviti ako se želi imati zadana postavka koja će se predlagati prilikom kreiranja fakture klijentu za troškove neplaćenih stavki.

- **Vrsta računa**: omogućuje postavljanje tipa fakture koji će se koristiti.  
- **Vrsta plaćanja**: omogućuje postavljanje tipa plaćanja koji će se koristiti.  
- **Jedinica mjere**: omogućuje postavljanje jedinice mjere stavke artikla.  
- **Rok plaćanja**: omogućuje postavljanje rješenja plaćanja za generiranje odgovarajućeg roka plaćanja.  

#### Troškovi regresije
- **Knjiženje troškova regresije**: FluentisERP će knjižiti trošak regresije koji se ponovno tereti kupcu.  
- **Vrsta fakturiranja**: omogućuje postavljanje prihoda od prodaje ili kontrole prihoda koja će se povezati sa stavkom na fakturi.  
- **PDV stopa**: omogućuje postavljanje stope PDV-a.   

#### Povrat ovjere 
- **Tip izdavanja računa**: omogućuje postavljanje prihoda od prodaje, odnosno protivvrijednosti prihoda koja se treba povezati s linijom računa.  
- **Postotak PDV-a**: omogućuje postavljanje stope PDV-a.

#### Regres naknada
- **Tip izdavanja računa**: omogućuje postavljanje prihoda od prodaje, odnosno konta prihoda koje treba povezati s linijom računa.
- **Postotak PDV-a**: može se postaviti stopa PDV-a.

#### Parametri
- **Knjigovodstvena oznaka**: oznaka koja se predlaže u procedurama knjiženja neplaćenih stavki.  
- **Konto troškova protestacije**: konto koji se koristi za evidentiranje troškova naplaćenih od banke.  
- **Prijelazni konto**: privremeni konto koji bi se koristio za knjiženje ako je postavljena opcija ‘Privremeni konto + troškovi protestacije’. Preporučuje se ipak popuniti ovo polje (može biti isti kao konto troškova) jer će biti obavezno prilikom izvršenja procedure knjiženja.  
- **Bankovni prijelazni račun**: privremeni bankovni konto koji se koristi ako se neplaćena stavka odnosi na efekte koji nisu prezentirani procedurom (npr. pri korištenju modula DocFinance).
 
:::danger Pažnja
Ako se ovo polje popuni, postavljeni konto će se koristiti bez obzira na postavke zastavica opisane u odjeljku *Tip knjiženja*, s prioritetom u odnosu na normalno korišteni konto protuvrijednosti (konto efekta ako je efekt *izdan*, konto s.b.f. u zaglavlju stavke ako je efekt *prezentiran*, te bankovni račun C/C ako je efekt *priznat*).

**Stoga se preporučuje da se polje ne popunjava ako nije potrebno.**
:::

- **Konto terećenja troškova klijentu**: podkonto prihoda koji se koristi u proceduri knjiženja neplaćenih stavki u slučaju da je odabrana opcija terećenja troškova klijentu.  
- **Tip kamate**: neplaćenoj stavci može biti pridružen referentni kamatni stopa. U slučaju mjenica može se simulirati početni izračun kamata između predviđenog datuma dospijeća i datuma evidentiranja neplaćene stavke.  
- **Kreiranje jedne stavke**: ova zastavica omogućuje otvaranje samo jedne stavke za neplaćenu riba kreiranu iz više različitih stavki. 

:::danger Pažnja 
Ne postavljati ako se upravljanje Agentima vrši prema kriteriju izvršenog plaćanja ili ukupnog iznosa.. 
:::

- **Datum dospijeća jednak datumu dospijeća efekta**: aktiviranjem ovog parametra datum dospijeća ponovno otvorene stavke zbog neplaćene stavke postavlja se jednak datumu dospijeća efekta, umjesto datumu neplaćene stavke.