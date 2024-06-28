---
title: Tab plăți
sidebar_position: 4
---

Tab-ul **Plăţi** este prezent doar dacă şablonul are flagul *Închidere angajamente* setat.

Acest tab permite afişarea angajamentelor deschise pentru a putea continua cu plăţile/încasările sau cu compensaţiile. În mod normal, toate înregistrările de tip TVA au flagul pentru deschiderea angajamentelor şi pot avea (credit notele le au, in general) şi flagul pentru închidere + compensare angajamente; şabloanele de plată/încasare, în schimb, prevăd întodeauna închiderea angajamentelor întodeauna fără flagul pentru compensare, eventual pot avea flagul pentru deschidere angajamente pentru a gestiona cazurile de plată anticipată. Facem distincție în ce privesc plăţile angajamentelor şi compensarea angajamentelor: în terminologia contabilă, poate fi compensare angajamente (debit/credit) pentru acelaşi analitic (de ex. factura cu credit note) dar şi compensare client/furnizor. În aplicație, în schimb, compensarea este strâns legată de situaţia angajamentelor cu acelaşi analitic, care poate fi gestionată efectuând atât plăţi angajamente debit, cât şi credit (care se *compensează* în contabilitate).

Dacă în antetul înregistrării a fost inserat un analitic, acesta va fi preluat ca filtru de cautare în câmpurile iniţiale din tab-ul plăţi: pentru toate înregistrările TVA, aplicația va propune aici doar angajamentele clientului/furnizorului inserat în antet, pentru a se continua cu compensarea facturii/credit note; în cazul înregistrărilor de plată/încasare, în schimb, câmpul va rămâne gol iar utilizatorul îl va putea completa. Semnalăm câmpul analitic *Bancă*, care nu este un filtru şi se completează cu analiticul de plată inserat în registrul clientului/furnizorului atribuit înregistrării şi care va actualiza înregistrarea contabilă în câmpul tip sumă *Tot. doc./înregistrare* (dacă în parametrii contabili, în lista conturilor clienţi/furnizori, este autorizată substituţia).

În primul grid, după identificarea angajamentului/angajamentelor de plată, acestea pot fi selectate şi plătite executând dublu clic pe fiecare linie sau utilizând butonul *Crează plăţi*. În cazul în care şablonul prevede compensarea angajamentului, va fi activat butonul *Compensare angajamente* (iar dublu clic va avea aceeaşi funcţionalitate). Un ultim buton de utilizat în această secţiune este *Crează plăţi extinse*: se va deschide o fereastră intermediară pentru inserarea sumei plăţii cu o eventuală sumă bonificaţie, cu relativul cont analitic pentru relevarea contabilă (detaliu: în această fereastră există un singur punct unde se poate seta statusul *Închisă forţat* pentru un angajament: utilizarea acestui status nu este recomandată); un rezultat similar poate fi obţinut forţând suma de plată pe care aplicația o va afişa, pe rând, pentru fiecare angajament, în secţiunea relativă la plăţi. Nu este permisă forţarea plăţii cu o valoare superioară diferenţei rămase din angajament.

În lista plăţilor pot fi inserate note: aceste note pot fi asociate automat, în şablon, cu descrierea generică a înregistrării contabile (flag *descriere în jurnal şi plăţi*, nerecomandat).

În final, este prezent un raport (chitanţa) pentru plăţile înregistrării. Într-un alt moment, plata va fi gestionată, în funcţie de setările şabloului, la schimbul istoric al angajamentului (astfel nu va fi relevată automat nici o diferenţă de schimb, care va trebui să fie gestionată manual în contabilitate: această opţiune facilitează gestionarea egalităţii dintre angajamentele deschise şi soldul contabil) sau contravaloarea euro va fi calculată la schimbul din data înregistrării (şi în acest caz, dacă este setat corect în şablon şi în devize, aplicația va valoriza automat conturile analitice profit/pierderi din conversie pentru fiecare deviză). Dacă se vizualizează doar unul din griduri cu ajutorul butonului *Prezintă/Ascunde*, vor fi afișate câmpurile total pentru sumele selectate în acesta: pe baza plăţilor inserate efectiv şi a setărilor şablonului, aplicația va actualiza linia cu tipul sumei *Tot. doc./înregistrare* cu totalul plăţilor relevate, în timp ce va insera o linie pentru fiecare plată sau va grupa plăţile debit şi credit, pentru fiecare deviză, pentru fiecare analitic plătit/încasat.

Opțiunile sunt:

> **Salvează** - Buton pentru salvarea înregistrării.  
> **Nou înregistrare** - Buton pentru crearea unei înregistrări noi.  
> **Parametri de inserare** - Deschide fereastra cu parametrii înregistrării.  
> **Deschide registru** - Deschide registrul analiticului selectat, iar dacă acesta lipseşte, deschide fereastra pentru căutarea unui alt registru.  
> **Caută angajamente** - Buton pentru cautărea angajamentelor de plătit/încasat.  
> **Şterge plăţi** - Buton pentru ştergerea plăţilor selectate anterior.  
> **Crează plăţi** - Buton pentru crearea  plăţii din angajamentul selectat.  
> **Compensaţie** - Buton pentru compensare angajamente, dacă este prevăzut în şablonul contabil.  
> **Crează plăţi extinse** - Buton pentru gestionarea plăţii/încasării cu eventuale valori pentru bonificaţie şi cu relativul analitic pentru relevarea în contabilitate.  
> **Prezintă/Ascunde** - Buton pentru afişarea doar a unui grid, angajamente sau plăţi, sau pentru afişarea ambelor.  
> **Raport** - Buton pentru listarea plăţii/încasării selectate.  
> **Document Manager** - Buton pentru deschiderea gestiunii documentelor.