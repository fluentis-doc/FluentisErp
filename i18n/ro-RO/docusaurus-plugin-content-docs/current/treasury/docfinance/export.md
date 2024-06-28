---
title: Exporturi
sidebar_position: 2
---

Din această fereastră se efectuează exportul datelor pentru DocFinance, cu trei opțiuni diferite:

**Export registru**: activarea acestui flag va impune sistemului să creeze fișierul pentru alinierea planului de conturi și a registrelor. După selectarea lui, se vor activa câmpurile succesive, unde se inserează numele fișierului și calea pentru creare (ambele date vor fi memorizate pentru a fi repropuse la următoarea operație de creare). Primul câmp, ‘Data ultimului export' permite definirea datei de referință pentru exportul doar a datelor modificate/adăugate în planul de conturi: este permisă ștergerea acestei date pentru a crea un fișier completat cu toate setările planului de conturi/registre (acest lucru are un impact semnificativ asupra timpilor necesari pentru alinierea între cele două sisteme);

**Creare automată cash flow**: cu ajutorul acestui flag, programul va crea un nou cash flow în modulul omonim, înainte de a face un eventual export al datelor punctului succesiv. Crearea se va realiza cu parametrii impliciți ai procedurii ‘Creare automată cash flow';

**Export cash flow**: cu ajutorul acestui flag, programul va crea fișierul fluxurilor financiare, atât ca angajamente contabile, cât și ca previziuni. Când flag-ul este inserat, se activează flag-ul succesiv ‘Derogabil din registre/tipuri de plată' și câmpurile cu numele și calea pentru crearea fișierului (ambele memorizate). În detaliu, în cazul în care a fost sau nu setat flag-ul ‘Derogabil din  registre/tipuri de plată', logica de atribuire a derogabilitatii se schimbă: în cazul în care nu este setat, derogabilitatea pentru furnizori va fi extrasă din tipul plății iar pentru clienți din registru; în cazul în care este setat, derogabilitatea va deriva din registrul  client/furnizor și, dacă aici nu a fost inserată, va fi calculată cu codurile fixe.

În partea inferioară a ferestrei se inserează utilizatorul care va crea fișierele. Este necesar ca acesta să aibă acces la folderele partajate inserate pentru crearea fișierelor.

RIBBON BAR: reprezintă meniul Forum-ului în discuţie, mai precis aria în care se pot efectua acţiuni asociate la procedura utilizată. Prezentăm în continuare lista cu funcţionalităţile posibile:



| Functie | Functionalitate |
| --- | --- |
| Salvează | Cu acest buton pot fi salvate setările care vor fi propuse implicit în fereastră. |
| Export | Efectuează crearea fișierului/fișierelor așa cum au fost inserate în fereastră. |






