---
title: Zaokruživanja  
sidebar_position: 5
---

Forma se otvara putem putanje **Prodaja > Prodajni cjenici > Procedure > Zaokruživanja**.  

Ova procedura omogućuje pretraživanje zaokruživanja te definiranje više kodova pravila za povećanje/smanjenje cijena, ažuriranje popusta i politike zaokruživanja dobivenih cijena.    

Ovi kodovi za zaokruživanje koriste se u procedurama kreiranja prodajnih cjenika.   

U formi Pretraživanje moguće je pretraživati postojeće podatke, unositi nove kodove za zaokruživanje ili mijenjati već postojeće kodove.

Definiranjem *Novog* koda (klik na tipku **Novo** u formi Pretraživanje) ili *Mijenjanjem* postojećeg koda moguće je unijeti opis koji se dodjeljuje pravilu.

![](/img/it-it/sales/sales-price-list/procedures/rounding/image02.png)

Promjena cijene može se izvršiti u postotku ili u vrijednosti, povećavajući ili smanjujući korištenjem vrijednosti sa znakom.

Metoda zaokruživanja definirana je za raspone jedinične cijene.  

**Gornja granica**: označava maksimalnu cijenu na koju će se primijeniti maska i postotak.  

**Maska**: tekstno polje u kojem korisnik definira pravilo zaokruživanja.  

**Postotak**: postotak iznad kojeg, ako omjer između izračunate cijene (dobivene primjenom varijacije na početnu cijenu) i početne cijene premaši vrijednost ovog postotka, zaokružena cijena se označava crvenom bojom jer prelazi dopušteni limit zaokruživanja. U prethodno prikazanom primjeru, „zaokružena cijena“ ne smije premašiti „nezaokruženu cijenu“ za više od 5%.  

**VALJANE VRIJEDNOSTI MASKA**

Maska je pravilo koje korisnik definira sastavljanjem teksta koristeći sljedeći jezik:    

=  vrijednost se ne mijenja

+  povećati vrijednost za jednu jedinicu  

-  smanjiti vrijednost za jednu jedinicu    

[  početak pravila za pojedinačnu vrijednost  

]  kraj pravila za pojedinačnu vrijednost   

(  početak pravila za definiranje fiksne vrijednosti na koju se vrijednost treba postaviti

)  kraj pravila za definiranje fiksne vrijednosti   

,  decimalni separator  

Vode se u nastavku primjeri koji mogu objasniti kako izraditi pravilo:

| Početna cijena | Nezaokružena cijena | Maska | Zaokružena cijena |
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

U sekciji **Popusti** moguće je definirati popuste za svaku liniju cjenika, te:  
- obrisati prethodno unesene popuste na istoj liniji,  
- ili izmijeniti popuste već prisutne u linijama cjenika.