---
title: Tab mijloace fixe
sidebar_position: 7
---

Tab-ul **Mijloace fixe** este dedicat gestionării bunurilor cu utilizare plurienală: va fi utilizat pentru relevarea achizițiilor, majorărilor, înstrăinărilor sau casărilor.

Secțiunea superioară este dedicată codificării noului mijloc fix achiziționat sau pentru selectarea mijlocului fix existent pentru a-i efectua o nouă operație: pentru a insera un mijloc fix nou, trebuie să introduceți manual o nouă linie, iar pentru a selecta un mijloc fix existent trebuie să utilizați primul buton din stânga numit *Selectează mijloc fix existent*.

În cazul inserării manuale, utilizatorul va trebui să selecteze categoria de apartenență a mijlocului fix, tipul proprietății, să atribuie eventual un precod (pentru a obține o numerotare în acest precod) să confirme numerotarea progresivă atribuită automat și să denumească acest nou registru mijloc fix (care va fi utilizat în toate rapoartele modulului): toate aceste câmpuri vor fi preluate direct din mijlocul fix deja existent în cazul operației suplimentare. Câmpul *tip operație* este propus pe baza setărilor din șablonul contabil: de obicei, în cazul achizițiilor sau majorărilor se utilizează tipul operației *cost inițial*, în timp ce, pentru vânzari, ar putea fi *Înstrăinare parțială* și *Înstrăinare totală* (și, în mod normal, nu se creează două șabloane diferite, doar se schimbă din când în când). Câmpul contului analitic general este preluat din categoria mijlocului fix sau din mijlocul fix, în timp ce contul de gestiune nu este utilizat de obicei: în acest moment se inserează valoarea operației (care este costul de achiziție sau prețul de vânzare în cazul înstrăinării) și cota TVA a operației (în cazul achiziției cu TVA nedeductibil, cota de nedeductibilitate va majora mijlocul fix). Data pentru începerea activității este propusă pe baza datei de înregistrare: de la această dată va fi verificat anul de la care se poate începe amortizarea mijlocul fix; data pentru sfârșitul activității nu se inserează (dar vizualizarea în registrul mijloacelor fixe depinde și de acest câmp) pentru că amortizările vor fi gestionate automat față de valoarea rămasă de amortizat. Intervalul de date pentru garanție, în schimb, nu are nici o relevanță operativă.

În primul grid mai sunt următoarele flaguri: *Uzat* identifică mijloacele fixe care au fost achiziționate uzate (pentru aceste mijloace fixe procentul de aplicare al amortizării în primul an este de 100% și amortizarea accelerată este aplicabilă doar pentru un an), *În uz* (propus implicit la salvare) indică faptul că mijlocul fix este efectiv în uz (fără acest flag mijlocul fix nu poate fi amortizat), *Întreț.* indică faptul că mijlocul fix trebuie să fie considerat la calcularea întreținerilor. Câmpul note finale nu este preluat în nici un raport sau procedură. Flag *Tip deducere* permite setarea deductibilității fiscale a amortizării pentru mijlocul fix.

În momentul salvării liniei ar putea fi executate, pe baza diverselor cazuri, diverse mesaje de gestiune:

1)      Categoria mijlocului fix are setată o valoare în câmpul *limită am. totală* și valoarea inserată pentru noul mijloc fix este inferioară: suntem în cazul mijloacelor fixe cu valoare mai mică decât cea prevazuta, care poate fi înregistrată direct pe cost, cum este prevăzut în normele fiscale (și anume, amortizare 100%) și direct în anul achiziției. În acest caz va fi lansat un mesaj de confirmare a amortizării de 100% în primul an, care va seta flagul din antetul registrului mijlocului fix pentru a fi gestionat în mod particular în procedura automată de amortizare.

2)      Șablonul contabil prevede gestionarea centrelor de cost: în acest caz va fi lansat un mesaj de atribuire a centrelor de cost la registrul mijloacelor fixe. Această atribuire va fi obligatorie dacă șablonul prevede obligativitatea balansării centrelor de cost cu contabilitatea.

3)      Șablonul este de vânzare parțială și categoria mijlocului fix nu are flagul *majorare*: în acest caz va fi lansat un mesaj de atribuire a valorii înstrăinării la o particulară operație patrimonială a mijlocului fix. Pentru a clarifica situația, pentru un mijloc fix *fără majorare* fiecare linie operație este gestionată separat la nivelul amortizărilor: înstrăinarea parțială poate fi gestionată în realitate ca o vânzare totală, pe fiecare operație (de ex.: am un computer, îi majorez valoarea cu un scanner, apoi vând doar scannerul).

După salvare vom avea următoarea situație: linia superioară este selectată și în diversele taburi din partea inferioară va fi prezent detaliul mijlocului fix, atât ca operație patrimonială (unde va fi adăugată o nouă linie relativă la operația încărcată sus), economică (în mod normal neutilizată), cât și ca amortizări. În cazul înstrăinării parțiale utilizatorul va trebui să integreze linia operației parțiale cu sumele stornate a fondurilor (cu semn negativ) și să valorizeze minusvaloarea sau plusvaloarea relativă: aceste valori trebuie să fie inserate și în tabul *Înregistrare* pentru contabilitatea generală. În alte cazuri, în schimb, aplicația ar fi actualizat corect tabul mijloace fixe, ar fi inserat mișcarea și în secțiunea TVA a înregistrării și de aici ar fi actualizat înregistrarea relativă. În cazul înstrăinării, în particular, dacă au fost codificate conturile analitice de minusvaloare și plusvaloare atât în șablon, cât și în parametrii contabili, vor fi adăugate și liniile relative la operația de vânzare (o linie pentru stornarea totalului patrimonial activ, una sau mai multe linii pentru stornarea fondurilor de amortizare și pentru diferență minusvaloare și plusvaloare).

Alte operații care pot fi activate în tab mijloace fixe: în momentul încărcării unui nou mijloc fix este posibilă divizarea lui în N fișe diferite. Se poate întâmpla ca achiziția să fie relativă la un număr de mijloace fixe identice, de exemplu 5 computere: utilizatorul în loc să încarce 5 mijloace fixe manual, poate să încarce unul pe total și apoi să-l dividă automat în 5 parți cu ajutorul butonului (o alegere ulterioară poate fi crearea unui singur mijloc fix care se compune din 5 mijloace fixe: acest lucru, pe de o parte simplifică situația registrului mijloacelor fixe, iar pe de altă parte crează dificultăți în gestionarea înstrăinării mijloacelor fixe, pentru că va trebui să fie gestionate manual, ca înstrăinări parțiale).

Puteți să ștergeți linia mijlocului fix inserată în gridul superior: în acest caz va fi lansat un mesaj de confirmare pentru ștergerea registrului mijlocului fix, pentru care este propus implicit *Nu* (mesajul este lansat și în momentul închiderii fără salvare a înregistrării). Vă recomandăm să fiți atenți la acest mesaj pentru a nu lăsa fișe de mijloace fixe *goale* în baza de date.

Opțiunile sunt:

> **Salvează** - Buton pentru salvarea înregistrării.  
> **Nouă înregistrare** - Buton pentru crearea unei noi înregistrări.  
> **Parametri de inserare** - Deschide fereastra cu parametrii înregistrării.  
> **Deschide registru** - Deschide registrul analiticului selectat, iar dacă acesta lipseşte, deschide fereastra pentru căutarea unui alt registru.  
> **Selectează un mijloc fix existent** - Buton pentru selectarea unui mijloc fix deja existent pentru a-i efectua o operație nouă.  
> **Şterge mijlocul fix** - Buton pentru ştergerea mijlocului fix selectat.  
> **Asociere mijloc fix** - Buton pentru asocierea mijlocului fix selectat la un mijloc fix părinte.  
> **Şterge datele selectate din gridul bază de impozitare amortizabilă**  
> **Şterge datele selectate din gridul tip amortizare**  
> **Divide mijloc fix** - Buton pentru divizarea mijlocului fix în N  fișe diferite.  
> **Detaliu reevaluare**  
> **Document Manager** - Buton pentru deschiderea gestiunii documentelor.
