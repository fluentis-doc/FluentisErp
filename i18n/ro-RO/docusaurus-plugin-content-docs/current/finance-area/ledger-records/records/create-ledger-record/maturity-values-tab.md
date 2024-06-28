---
title: Tab Angajamente
sidebar_position: 3
---

Tab **Angajamente** este prezent doar dacă şablonul are flagul *Deschidere angajamente* setat.

Prima secţiune a tabului **Angajamente** este dedicată gestionării datelor pentru calcularea angajamentelor de mai jos: pentru o înregistrare manuală de tip TVA vom avea gridul completat cu datele implicite, care au fost inserate în registrul client/furnizor/agent atribuit înregistrării. Pentru alte tipuri de înregistrare (de exemplu, pentru plăţile anticipate se poate codifica un şablon care va deschide angajamentul, cu semnul opus, în loc să îl închidă, dat fiind faptul că documentul nu a fost încă relevat): în acest caz gestionarea acestei secţiuni devine manuală şi utilizatorul va putea să insereze datele esenţiale de tip plată, soluţie de plată şi analitic de referinţă cu 100% inserat în câmpul *procent*.

 Pentru această secţiune menţionăm:

- angajamentul poate fi creat şi în conturile analitice care nu sunt de parteneri și care nu au flag-ul **Deschidere angajamente** în planul de conturi (acest flag este doar a controla că datele din jurnal și din angajamente corespund la conturile analitice care au setat acest flag)

- datele bancare, în mod normal, sunt preluate din registru sau din documentul contabilizat din aria achiziţii/vânzări/liber profesionişti, dar uneori pot fi forţate utilizând helpul abi/cab. Banca asociată în acestă secţiune este cea care va fi utilizată, în mod normal, în plăţi furnizori ca bancă beneficiară a plăţii, în cazul în care nu a fost activat flagul *Impune banca principală prezentă în registrul furnizorului*

- câmpul *procent*, de obicei, se inserează. Semnificaţia câmpurilor valoare/TVA este următoarea: în câmpul valoare se poate insera o valoare fixă care va fi utilizată pentru combinaţia tip plată/soluţie de plată pentru linia analizată; câmpul *TVA* permite definirea, pentru această valoare, a sumei TVA (acest lucru este util în cazul în care soluţia de plată prevede procentele pentru baza de impozitare/TVA diferenţiate pe diverse rate, pentru a obţine un calcul corect). Se poate insera o combinaţie sumă/procent (deja în registru): aplicația va valoriza angajamentul cu tipul/soluţia de plată până la acoperirea sumei, iar pentru excedent va calcula pe baza procentului liniei alternative (de ex., suma 1000 pentru BB 30 zile, procentul 100 pentru RB 60/90: dacă suma este de 1500, va fi creat un angajament pentru 1000 pentru BB la 30 gg, două angajamente de 250 ca RB la 60 și 90 zile).

- flag-ul *Grupează angajamente* situat la stânga este preluat de registrul client/furnizor: nu este practic util, deoarece rar se întâmplă ca două angajamente să aibă acelaşi tip de plată şi aceeaşi dată scadenţă în acelaşi document.

- în partea superioară sunt câteva câmpuri rezumat pentru situaţia clientului/furnizorului: suma creditului acordat în modulul risc client, valoarea expunerii obţinută în baza angajamentelor deschise (fără să se considere înregistrarea în uz) şi soldul contabil (considerând şi înregistrarea în uz).

În cazul înregistrării derivate din contabilizarea efectelor neîncasate, gridul superior NU are nici o relevanţă pentru calcularea angajamentelor de mai jos; este citită doar în cazul în care este nevoie de datele bancare.

Gridul inferior afişează lista cu angajamente calculate pe baza setărilor de mai sus: utilizatorul poate forţa tipul de plată, data scadenţei pentru ca acestea să corespundă cu informaţia din document, poate şi să forţeze sumele diverselor rate (având grijă să modifice manual totalurile). Mai importantă este posibilitatea de a bloca direct plata angajamentului: aplicația va memoriza data şi utilizatorul care a blocat plata (cu o eventuală notă explicativă), data şi utilizatorul care a deblocat (pentru ambele operaţii sunt prevăzute drepturi specifice utilizator în ArtinfoUserManager). Ulterioare elemente cu gestionare manuală sunt: poziţia angajamentului, care este un tabel definit de utilizator, permiţând clasificarea angajamentelor contabile din momentul creării lor; notele angajamentului, care pot fi asoociate automat în şablonul contabil, descrierea detaliată a analiticului aşa cum au fost inserate în contabilitate. Gridul angajamentelor NU permite inserarea manuală a unei rate noi. Ultimul câmp prevede posibilitatea de a atribui (sau modifica) agentul de referinţă pentru angajament: acesta este valorizat automat pe baza agentului inserat în factura de vânzări în momemntul contabilizării (în cazul în care sunt mai mulţi agenţi, va fi atribuit cel cu comisione superioare). În cazul în care şablonul prevede atât deschiderea angajamentelor, cât şi închiderea pentru compensare şi a fost activat şi flagul *Aviz*, în momentul salvării înregistrării va fi lansat un mesaj care va aviza despre prezenţa angajamentelor care pot fi compensate.

Opțiunile sunt:

>** Salvează** - Buton pentru salvarea înregistrării.  
> **Nouă înregistrare** - Buton pentru crearea unei noi înregistrări.  
> **Parametri de inserare** - Deschide fereastra cu parametrii înregistrării.  
> **Deschide registru** - Deschide registrul analiticului selectat, iar dacă acesta lipseşte, deschide fereastra pentru căutarea unui alt registru.  
> **Şterge angajamente** - Buton pentru ştergerea angajamentului creat automat pe baza tipului de plată inserat.  
> **Şterge din gridul plăţi** - Buton pentru ştergerea soluţiei de plată, propusă automat din registru, sau inserată manual.  
> **Recalculează angajamente** - Buton pentru recalcularea angajamentului forțat manual.  
> **Grupează angajamente** - Buton pentru gruparea angajamentelor în prezenţa mai multor angajamente cu aceeaşi dată scadenţă.  
> **Document Manager** - Buton pentru deschiderea gestiunii documentelor.