---
title: Parametri import salarii
sidebar_position: 3
---

## Date tabel

Acești parametri sunt necesari pentru gestionarea funcționalității de import a înregistrărilor contabile referitoare la fluturașele de plată ale angajaților, prin intermediul fișierelor .csv (format Zucchetti) obținute prin serviciul Bizlink.

Aici se setează pentru fiecare societate **ziua**, **șablonul** contabil și **utilizatorul** care va fi folosit pentru a crea înregistrările.

**Permite căutarea în tabel**: (recomandăm să-l setați întotdeauna) permite căutarea mapărilor (transcodificărilor) conturilor în tabelul special de transcodificare de mai jos;
 
**Grupare pe centru de cost / Grupare pe angajat**: indică aplicației Fluentis ce tip de fișier se așteaptă (de la Zucchetti se poate crea un fișier grupat după centru de cost sau după angajat, acestea diferind prin numărul și poziția coloanelor de citit).

**Notă**: Ultimele două câmpuri nu sunt asociate acestui import al fluturașelor de plată, ci de importul pentru controlling, care momentan se efectuează prin import dintr-un fișier Excel și, prin urmare, nu sunt de fapt utilizate.

## Generalități Import salarii Bizlink

Funcționalitatea prevede crearea unui folder monitorizat de serviciul Bizlink, unde se vor depune fișierele de import, obținându-se astfel prelucrarea și importul automat. 

Deși este posibil să se creeze folder monitorizat de conectorul Bizlink pentru import direct pe server, din motive de securitate se preferă evitarea accesului utilizatorilor la server și configurarea folderului de import pe un PC client.

## Configurare parametri și serviciu Bizlink local

1. Creați un utilizator BizLink în Arm (form Utilizatori Bizlink) care va fi folosit pe PC-ul respectiv pentru import.
   
   Exemplu: 
   
   Nume: PC-Paghe  
   Parolă: xxxxx  
   Grilă Conexiuni: Bifați "Este activ" pe conexiunea de producție efectiv utilizată

2. Instalați BizLink pe PC manual,  
   prin intermediul comenzii executate din cmd ca administrator.
   
   net_dir>\InstallUtil "< fluentis_dir>\Tools\Service \Fluentis.BizLink.Tools.Service.exe"'
   
   Unde **net_dir** este dosarul de instalare al framework-ului .NET și se găsește în %WINDIR%\Microsoft.NET\Framework64\versiunea framework, iar **fluentis_dir** este dosarul de instalare al Fluentis.

![](/img/it-it/configurations/parameters/finance/payroll1.png)

3. Copiați dosarul bin al BizLink de pe server pe client (fiecare actualizare de versiune va trebui efectuată) cu excepția fișierului de log (evidențiat în imaginea de mai jos)

![](/img/it-it/configurations/parameters/finance/payroll2.png)

Calea standard este următoarea: C:\Program Files (x86)\Fluentis\Fluentis\Bin\Tools\Service

4. Modificați conectorul numit: Zucchetti_PaymentData în modul următor (în special adăugând utilizatorul Bizlink - PC-Paghe - tocmai creat în câmpul Identificativ)

![](/img/it-it/configurations/parameters/finance/payroll5.png)

Căile fișierelor (de exemplu C:\Temp\Bizlink\Incoming ; C:\Temp\Bizlink\Processed ; C:\Temp\Bizlink\Failed) trebuie să fie prezente pe PC-ul utilizatorului, iar pool-ul Fluentis trebuie să aibă permisiunea de a citi din acel dosar. Dacă nu funcționează, încercați să acordați permisiuni de control total pentru toți utilizatorii.

Setați, de asemenea, un identificator care va fi ulterior înscris în fișierul de configurare al Bizlink.

5. Modificați fișierul de configurare al Bizlink cu user, pwd, server și identifier. Fișierul se numește Fluentis.BizLink.Tools.Service.exe.config.  
   Modificați-l conform imaginii de mai jos.

![](/img/it-it/configurations/parameters/finance/payroll4.png)
 
În acest mod, serviciul Bizlink instalat pe PC va lucra doar cu acel conector.

6. Porniți Bizlink

## Gestionare fișier de import

![](/img/it-it/configurations/parameters/finance/payroll7.png)

Acordați atenție faptului că, în prezent, Fluentis solicită formatul lună/an, în timp ce, de obicei, fișierul este exportat de la Zucchetti ca dată completă; este necesară modificarea în Excel până când va fi revizuit.

![](/img/it-it/configurations/parameters/finance/payroll8.png)

De asemenea, trebuie gestionate transcodificările societății și ale planului de conturi.

![](/img/it-it/configurations/parameters/finance/payroll9.png)

Și, eventual, ale centrelor de cost.

În final, este necesar să se gestioneze **PARAMETRII DE IMPORT AL FLUTURAȘELOR DE PLATĂ** așa cum s-a specificat mai sus.
