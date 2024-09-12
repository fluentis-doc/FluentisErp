---
title: Parametri za uvoz plaća 
sidebar_position: 3
---

### Polja tablice 

Ovi parametri su nužni za upravljanje funkcionalnošću uvoza računovodstvenih zapisa koji se odnose na platne liste zaposlenika kroz .csv datoteke (Zucchetti format) dobivene putem bizlink usluge.

Ovdje postavljate za svaku tvrtku **dan**, računovodstveni **predložak** i **korisnika** koji će se koristiti za izradu zapisa. 

**Dopusti pretraživanje tablice**: (uvijek postavljeno) traži preslikavanja računa (transkodiranje) u odgovarajućoj tablici transkodiranja u nastavku;
 
**Grupiraj prema mjestu troška / Grupiraj prema zaposleniku**: govori Fluentisu koju vrstu datoteke može očekivati ​​(od Zucchettija možete stvoriti datoteku grupiranu prema cdc-u ili prema zaposleniku (razlikuju se u broju i položaju stupaca za čitanje)).

Napomena: Zadnja dva polja nisu povezana s ovim uvozom obračuna plaća, već s uvozom za kontroling koji se trenutno izvodi preko uvoza iz Excel tabele i stoga se zapravo ne koriste.  

### Opći Bizlink uvoz plaća 

Funkcionalnost uključuje stvaranje mape koju nadzire usluga Bizlink u kojoj se pohranjuju datoteke za uvoz, dobivanje automatske obrade i uvoza. 

Unatoč činjenici da je moguće kreirati mapu koju nadzire bizlink konektor za uvoz izravno na poslužitelju, iz sigurnosnih razloga poželjno je izbjegavati da korisnici pristupaju poslužitelju i postaviti mapu za uvoz na klijentsko računalo. 

### Konfiguriranje lokalne usluge Bizlink i ostalih potrebnih parametara 

1. Kreirajte bizLink korisnika u Armu (obrazac Bizlink Users) oji će se koristiti na relevantnom računalu za uvoz. 
Primjer: Nome: PC-Payroll  Password: xxxxx Connections Grid: 
Označite *Aktivno je* na proizvodnoj vezi koja se stvarno koristi

2. Instalirajte bizLink na računalo ručno
    Putem naredbe pokreni iz cmd kao administrator

net_dir>\InstallUtil "< fluentis_dir>\Tools\Service \Fluentis.BizLink.Tools.Service.exe"'

Gdje je net_dir instalacijska mapa .net framework a i nalazi se u%WINDIR%\Microsoft.NET\Framework64\ramework verzija, dok je  fluentis_dir instalacijska mapa Fluentisa. 

![](/img/it-it/configurations/parameters/finance/payroll1.png)

3.  Kopirajte datoteku mape bizLink bin s poslužitelja na klijent  (morat će se izvršiti ažuriranje svake verzije) osim datoteke dnevnika (označeno na slici ispod)

![](/img/it-it/configurations/parameters/finance/payroll2.png)

Standardna staza je ova: C:\Program Files (x86)\Fluentis\Fluentis\Bin\Tools\Service

4. Uredite konektor pod nazivom: Zucchetti_PaymentData a ovaj način (posebno dodavanjem novostvorenog bizlink korisnika - PC-Payroll - u polje Identifier)

![](/img/it-it/configurations/parameters/finance/payroll5.png)

Putanje datoteke (primjer C:\Temp\Bizlink\Incoming ; C:\Temp\Bizlink\Processed ; C:\Temp\Bizlink\Failed) moraju biti prisutne na korisničkom računalu i skup Fluentis mora moći čitati iz toga mapa. Ako to ne uspije, pokušajte svima dati potpunu kontrolu. Također postavite identifikator koji će se kasnije prijaviti u bizLink konfiguracijskoj datoteci. 



5. Postavite bizLink konfiguracijsku datoteku s userom, pwd, server i identifier. Datoteka se zove Fluentis.BizLink.Tools.Service.exe.config. 
Modificarlo come da immagine sotto.

![](/img/it-it/configurations/parameters/finance/payroll4.png)
 
Na taj će način bizLink servis instaliran na računalu raditi samo s tim konektorom. 

6. Pokrenite bizLink


### Upravljanje datotekom za uvoz 



![](/img/it-it/configurations/parameters/finance/payroll7.png)

Obratite pozornost na činjenicu da je trenutno u Fluentisu potrebno formatirati mjesec/godinu dok se obično datoteka eksportira iz Zucchettija kao cijeli datum, mora se mijenjati u Excelu dok se ne pregleda. 

![](/img/it-it/configurations/parameters/finance/payroll8.png)

Zatim je potrebno voditi transkodiranje poduzeća i kontnog plana. 

![](/img/it-it/configurations/parameters/finance/payroll9.png)

I eventualno mjesta troškova. 

Na kraju, potrebno je upravljati PARAMETRIMA UVOZA PLAĆA kako je gore navedeno.