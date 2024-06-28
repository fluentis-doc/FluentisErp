---
title: Zaokruživanja
sidebar_position: 5
---

Obrazac se otvara putem putanje **Prodaja > Cjenici prodaje > Postupci > Zaokruživanja**.

Ovaj postupak omogućuje pretraživanje Zaokruživanja i definiranje više šifri pravila povećanja/smanjenja cijena, ažuriranja popusta i politika zaokruživanja dobivenih cijena.

Ove šifre Zaokruživanja koriste se u postupcima stvaranja cjenika prodaje.

U obrascu *Pretraga* moguće je pretražiti postojeće podatke, unijeti nove kodove zaokruživanja ili izmijeniti postojeće kodove.

Definiranjem *Nove* šifre (klikom na gumb **Novo** obrascu *Pretraga*) ili *Izmjenom* postojećeg koda moguće je unijeti opis pravila.  

![](/img/it-it/sales/sales-price-list/procedures/rounding/image02.png)

Promjena cijene može se dogoditi u postocima ili u vrijednosti, povećavajući ili smanjujući pomoću vrijednosti sa znakom.

Metoda zaokruživanja definirana je za cjenovne razrede.

**Gornja granica**: označava maksimalnu cijenu na koju će se primijeniti maska i postotak.

**Maska**: tekstualno polje gdje korisnik definira pravilo zaokruživanja.

**Postotak**: postotak preko kojeg, ako je omjer između izračunatih cijena, dobivenih primjenom promjene na početnu cijenu, i početna cijena premaši vrijednost ovog postotka, dobivena cijena će biti označena crveno jer prelazi dopušteni granica zaokruživanja. U gore navedenom primjeru, "zaokružena cijena" ne bi trebala prelaziti "cijenu koja nije zaokružena" za 5%.

**VALJANE VRIJEDNOSTI ZA MASKU**

MASKA je pravilo koje korisnik definira sastavljajući tekst pomoću sljedećeg jezika:

=  vrijednost ostaje nepromijenjena

+  povećanje vrijednosti za jedinicu

-  smanjenje vrijednosti za jedinicu

[  početak pravila za pojedinačnu vrijednost

]  završetak pravila za pojedinačnu vrijednost

(  početak pravila koje određuje na koju fiksnu 
vrijednost treba biti dovedena analizirana vrijednost

)  završetak pravila koje određuje na koju fiksnu vrijednost treba biti dovedena analizirana vrijednost

,  decimalni odjeljnik

Evo nekoliko primjera koji mogu pojasniti kako napraviti pravilo:

| Poč. cijena | Nezaokr. cijena | Maska | Zaokružena cijena |
| --- | --- | --- | --- |
| 16,16 | 16,968 | [=][=][=],[=][+] | 16,98 |
| 16,16 | 16,968 | [=][=][=],[=][=] | 16,97 |
| 16,16 | 16,968 | [=][=][=],[=][-] | 16,96 |
| 16,16 | 16,968 | [=][=][=],[=][=][+] | 16,969 |
| 16,16 | 16,968 | [=][=][=],[=][=][=] | 16,968 |
| 16,16 | 16,968 | [=][=][=],[=][=][-] | 16,967 |
| 16,16 | 16,968 | [=][=][=],[=][=][-(0)] | 16,96 |
| 16,16 | 16,968 | [=][=][=],[=][+(9)] | 16,99 |
| 16,16 | 16,968 | [=][=][=],[=][-(3)] | 16,93 |
| 16,16 | 16,968 | [=][=][=],[=] | 17 |
| 16,16 | 16,968 | [=][=][=],[+] | 17,1 |
| 16,16 | 16,968 | [=][=][=],[-] | 16,9 |
| 16,16 | 16,968 | [=][=][=] | 17 |
| 16,16 | 16,968 | [=][=][-] | 16 |
| 16,16 | 16,968 | [=][=][+] | 18 |

U odjeljku popusta moguće je definirati popuste za svaki red u cjeniku, odabrati brisanje prethodno unesenih popusta u istom retku ili ići na uređivanje postojećih popusta u redovima cjenika.
