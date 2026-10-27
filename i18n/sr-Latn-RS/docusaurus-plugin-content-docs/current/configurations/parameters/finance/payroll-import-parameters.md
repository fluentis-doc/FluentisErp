---
title: Parametri za uvoz zarada
sidebar_position: 3
---

**### Polja tabele**

Ovi parametri su neophodni za upravljanje funkcionalnošću uvoza računovodstvenih knjiženja koja se odnose na platne liste zaposlenih putem .csv datoteka (Zucchetti format), dobijenih preko BizLink servisa.

Ovde se za svako preduzeće podešavaju **dan**, računovodstveni **šablon** i **korisnik** koji će se koristiti za kreiranje knjiženja.

**Dozvoli pretraživanje tabele**: (uvek aktivirano) omogućava pretraživanje mapiranja računa (transkodiranja) u odgovarajućoj tabeli za transkodiranje navedenoj u nastavku.

**Grupiši prema mestu troška / Grupiši prema zaposlenom**: određuje koju vrstu datoteke Fluentis očekuje. U programu Zucchetti moguće je kreirati datoteku grupisanu prema mestu troška (CDC) ili prema zaposlenom. Ove datoteke se razlikuju po broju i položaju kolona koje treba pročitati.

Napomena: Poslednja dva polja nisu povezana sa ovim uvozom zarada, već sa uvozom za kontroling, koji se trenutno obavlja uvozom iz Excel tabele, pa se zapravo ne koriste.

**### Opšti BizLink uvoz zarada**

Ova funkcionalnost obuhvata kreiranje fascikle koju nadgleda BizLink servis, u koju se smeštaju datoteke za uvoz, nakon čega se automatski obrađuju i uvoze.

Iako je moguće kreirati fasciklu koju nadgleda BizLink konektor za direktan uvoz na serveru, iz bezbednosnih razloga preporučuje se da se izbegne pristup korisnika serveru i da se fascikla za uvoz postavi na klijentski računar.

**### Konfigurisanje lokalnog BizLink servisa i ostalih potrebnih parametara**

1. Kreirajte BizLink korisnika u Armu (obrazac BizLink Users) koji će se koristiti na odgovarajućem računaru za uvoz.

   Primer: Name: PC-Payroll, Password: xxxxx, Connections Grid:

   Označite opciju *Aktivno je* na produkcionoj vezi koja se zaista koristi.

2. Ručno instalirajte BizLink na računaru.

   Pokrenite sledeću komandu iz komandne linije (CMD) kao administrator:

   `net_dir>\InstallUtil "<fluentis_dir>\Tools\Service\Fluentis.BizLink.Tools.Service.exe"`

   Gde je `net_dir` instalaciona fascikla .NET Framework-a, koja se nalazi u `%WINDIR%\Microsoft.NET\Framework64\` u fascikli odgovarajuće verzije framework-a, dok je `fluentis_dir` instalaciona fascikla Fluentis-a.

   ![](/img/it-it/configurations/parameters/finance/payroll1.png)

3. Kopirajte fasciklu BizLink `bin` sa servera na klijentski računar. Ovo ažuriranje moraće da se ponovi za svaku novu verziju, osim za datoteku evidencije (log), koja je označena na slici ispod.

   ![](/img/it-it/configurations/parameters/finance/payroll2.png)

   Standardna putanja je:

   `C:\Program Files (x86)\Fluentis\Fluentis\Bin\Tools\Service`

4. Izmenite konektor pod nazivom `Zucchetti_PaymentData` na sledeći način, posebno tako što ćete u polje `Identifier` dodati novokreiranog BizLink korisnika (`PC-Payroll`).

   ![](/img/it-it/configurations/parameters/finance/payroll5.png)

   Putanje fascikli (na primer `C:\Temp\Bizlink\Incoming`, `C:\Temp\Bizlink\Processed` i `C:\Temp\Bizlink\Failed`) moraju postojati na korisničkom računaru, a Fluentis nalog mora imati dozvolu za čitanje iz tih fascikli. Ako to ne uspe, pokušajte da svima dodelite potpunu kontrolu. Takođe podesite identifikator koji će kasnije biti naveden u BizLink konfiguracionoj datoteci.

5. Podesite BizLink konfiguracionu datoteku sa korisničkim imenom, lozinkom, serverom i identifikatorom. Datoteka se zove `Fluentis.BizLink.Tools.Service.exe.config`.

   Izmenite je prema slici u nastavku.

   ![](/img/it-it/configurations/parameters/finance/payroll4.png)

   Na ovaj način, BizLink servis instaliran na računaru radiće samo sa ovim konektorom.

6. Pokrenite BizLink.

**### Upravljanje datotekom za uvoz**

![](/img/it-it/configurations/parameters/finance/payroll7.png)

Imajte na umu da je u Fluentis-u trenutno potrebno formatirati mesec/godinu, dok se datoteka iz programa Zucchetti obično izvozi sa kompletnim datumom. Zato je potrebno izmeniti format u Excel-u pre nego što se datoteka pregleda.

![](/img/it-it/configurations/parameters/finance/payroll8.png)

Zatim je potrebno podesiti mapiranje preduzeća i kontnog plana.

![](/img/it-it/configurations/parameters/finance/payroll9.png)

Po potrebi je potrebno podesiti i mesta troškova.

Na kraju, potrebno je podesiti **PARAMETRE ZA UVOZ ZARADA** na prethodno opisani način.