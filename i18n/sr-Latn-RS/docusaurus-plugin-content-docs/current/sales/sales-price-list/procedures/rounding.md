---
title: Zaokruživanja
sidebar_position: 5
---

Obrazac se otvara putem putanje **Prodaja > Prodajni cenovnici > Procedure > Zaokruživanja**.

Ova procedura omogućava pretragu **Zaokruživanja** i definisanje više šifara pravila povećanja/smanjenja cena, ažuriranja popusta i politika zaokruživanja dobijenih cena.

Ove šifre **Zaokruživanja** koriste se u procedurama kreiranja prodajnih cenovnika.

U obrascu, pomoću *Pretraži* moguće je pretražiti postojeće podatke, uneti nove šifre zaokruživanja ili izmeniti postojeće šifre.

Definisanjem *Nove* šifre (klikom na dugme **Novo**) ili *Izmenom* postojećeg koda moguće je uneti opis pravila.  

![](/img/it-it/sales/sales-price-list/procedures/rounding/image02.png)

Promena cene može se vršiti procentualno ili po vrednosti, povećavanjem ili smanjivanjem pomoću vrednosti sa znakom.

Metoda zaokruživanja definiše se za cenovne razrede.

**Gornja granica**: označava maksimalnu cenu na koju će se primeniti maska i procenat.

**Maska**: tekstualno polje u kojem korisnik definiše pravilo zaokruživanja.

**Procenat**: procenat preko kojeg, ako odnos između obračunatih cena, dobijenih primenom promene na početnu cenu, i početne cene premaši vrednost ovog procenta, dobijena cena će biti označena crveno jer prelazi dozvoljenu granicu zaokruživanja. U gore navedenom primeru, „zaokružena cena“ ne bi trebalo da premaši „nezaokruženu cenu“ za 5%.

**VAŽEĆE VREDNOSTI ZA MASKU**

MASKA je pravilo koje korisnik definiše sastavljanjem teksta pomoću sledećeg jezika:

=  vrednost ostaje nepromenjena

+  povećanje vrednosti za jedinicu

-  smanjenje vrednosti za jedinicu

[  početak pravila za pojedinačnu vrednost

]  završetak pravila za pojedinačnu vrednost

(  početak pravila koje određuje na koju fiksnu 
vrednost treba dovesti analiziranu vrednost

)  završetak pravila koje određuje na koju fiksnu vrednost treba dovesti analiziranu vrednost

,  decimalni *razdvajač*

Evo nekoliko primera koji mogu pojasniti kako napraviti pravilo:

| Poč. cena | Nezaokr. cena | Maska | Zaokružena cena |
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

U odeljku popusta moguće je definisati popuste za svaki red u cenovniku, izabrati brisanje prethodno unetih popusta u istom redu ili preći na uređivanje postojećih popusta u redovima cenovnika.