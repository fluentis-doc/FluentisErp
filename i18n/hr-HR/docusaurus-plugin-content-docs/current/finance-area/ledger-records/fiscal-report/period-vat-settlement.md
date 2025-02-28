---
title: Obračun PDV-a
sidebar_position: 5
---

Ovim postupkom ispisa nastavlja se s izračunom PDV-a referentnog razdoblja: za ovo izvješće nije obavezno da su registri PDV-a razdoblja već ispisani, ali kako bi se prijavilo bilo kakvo stanje prethodnog razdoblja, mora postojati konačan ispis plaćanja PDV-a za prethodno razdoblje (ili ručno učitavanje u tablicu **[Plaćanja PDV-a](/docs/finance-area/declarations/declarations/vat-payment)** što daje isti rezultat blokiranja PDV razdoblja u računovodstvu). U suprotnom, ispis se još uvijek može izvršiti, ali bez prijenosa iznosa iz prethodnog mjeseca ili kvartala.

Postavi se referentno razdoblje i godina (pri čemu će razdoblje biti mjesečno ili tromjesečno ovisno o periodičnosti plaćanja PDV-a određenoj u **[parametrima knjiženja](/docs/configurations/parameters/finance/accounting-parameters)**);

odabere se Knjiga PDV-a na koju se želi ispisati uplata iz kombiniranog okvira:

Ispis se može izvršiti u  pregledu ili odmah.

Ukoliko je odabrano zadnje razdoblje u godini, bit će omogućena mogućnost ispisa/**izračunavanja zaduženja** PDV-a, na temelju čega će se u izvješću prikazati prijave do datuma 20.12.gggg.

**Datum uplate/Modalitet uplate**: ova polja (datum koji se zatim prijavljuje u tekstualnom nizu) dopuštaju da se tekst koji se odnosi na datum i način plaćanja poreza pojavi u ispisu (ili, njihovom izmjenom, dodatna napomena).

 

**Prikaži zaglavlje**: zastavica predložena prema zadanim postavkama: treba je ukloniti samo ako tvrtka i dalje ispisuje na starim obrascima.

**Konačni** ispis: aktivna zastavica učinit će ispis konačnim blokiranjem referentnog razdoblja PDV-a i ažuriranjem brojača stranica knjige PDV-a u kojem se ispisuje. Također omogućuje nastavak za automatske prijenose. Nadalje, referentno razdoblje bit će izmijenjeno kako bi odgovaralo onom koje slijedi nakon posljednjeg konačnog ispisa, a broj kopija za ispis bit će onemogućen.

![](/img/it-it/finance-area/ledger-records/fiscal-report/period-vat-settlement/image01.png)

 

Izvršavanje pregleda ispisa u konačnici nije dovoljno za zatvaranje razdoblja i ažuriranje brojača. Samo će izvršenje procesa fizičkog ispisa zatvoriti razdoblje u računovodstvu i ažurirati brojač stranica tablice knjiga PDV-a (i nije relevantno je li postupak uspješan ili ne, to također može biti ispis u datoteku).

Konačni ispis omogućit će opciju **knjiženje namirenja** (stanja razdoblja): postavljanjem ove opcije aplikacija će aktivirati popis konta koji će se koristiti (preuzimajući ih iz računovodstvenih parametara) te će korisnik samo morati potvrditi razlog i referentni datum. Nakon što je proces ispisa proveden, dva knjiženja prijenosa PDV-a za dugovnu i potražnu stranu bit će dodana na konta na PDV dugovnim/potražni stranama podkonta.  

![](/img/it-it/finance-area/ledger-records/fiscal-report/period-vat-settlement/image02.png)

| Funkcija | Značenje |
| --- | --- |
| Prethodni pregled | Gumb za pregled ispisa. |
| Ispiši | Gumb za fizički ispis. |

:::important VIDI TAKOĐER
[**VIDEO TUTORIJALI O TISKU POREZA**](/docs/video/finance/intro)
:::