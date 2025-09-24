---
title: Contact nou
sidebar_position: 2
---

Fereastra contactului CRM se compune din:  
- o secțiune superioară prezintă eventualele workflow asociate contactului CRM. Fluxurile de lucru urmăresc, în general, customer journey-ul care transformă un lead în client, însă fiecare își poate crea propriul workflow în funcție de cerințele CRM ale companiei. Detalii despre **Workflow** ([aici](/docs/crm/home-crm/contacts/workflow-example)).  
- o secțiune centrală care afișează **Antetul contactului**, cu informații generale.  
- o secțiune inferioară, cu diverse **tab-uri**, care cuprind diferite operațiuni efectuate asupra clientului. Tab-urile afișate vor depinde de cele alese pentru fiecare [Tip de contact](/docs/configurations/tables/crm/contacts/contact-type) în tabel.

### Date antet

#### Câmpuri obligatorii

**Tip contact**: se referă la tabelul omonim [Tip contact](/docs/configurations/tables/crm/contacts/contact-type). Este folosit pentru a diferenția între diferitele contacte CRM (Contact, Prospect, Lead, etc.); 

**Nume contact**: este folosit pentru a indica numele companiei sau, în general, a contactului.  

#### Câmpuri neobligatorii

**CUI**: câmp alcătuit din codul ISO internațional al națiunii (definit în tabelul **Ţări**) și din CUI aferentă. Câmpul este supus unui test de corectitudine al caracterului de control; după introducerea acestui câmp, folosind butonul **Propune date** este posibilă popularea automată a datelor contactului.  

**TVA**: cod TVA de utilizat în cazul emiterii documentelor către contact.  

**Monedă**: monedă de utilizat în cazul emiterii documentelor către contact.    

**Cod oficiu**: cod IPA al instituției publice destinatară a facturii sau (flag e-Factură) codul SDI al destinatarului facturii. Va fi raportat în registrul clientului în cazul în care contactul va fi convertit.  

**Poștă electronică certificată (PEC)**: câmp destinat adresei PEC, în cazul în care este activată opțiunea PEC destinatar în câmpul *Tip cod* pentru emiterea facturilor electronice. Va fi preluat în fișa clientului în cazul în care contactul este convertit. 

**Detaliu adresă**: în această secțiune sunt introduse diferitele părți care compun adresa.  

**Agent principal**: servește pentru accesul în Fluentis de către agenți: aceștia vor putea consulta doar contactele la care au drepturi.  

**Latitudine/Longitudine**: există posibilitatea de a gestiona poziția contactelor prin latitudine și longitudine în locul adresei; aceste date sunt luate în considerare pentru localizare în Map, prezent în [Caută contacte CRM](/docs/crm/home-crm/contacts/search-contacts), dacă nu există adresa.  

**Pipeline contact**: dacă un contact are asociat un workflow iar starea workflow-ului corespunde uneia dintre stările din *Pipeline contact* pentru *Tipul de contact*, câmpul *Pipeline contact* din registrul contactului va fi actualizat automat. În acest fel, workflow-ul și câmpul *Pipeline contact* din registrul contactului vor fi întotdeauna aliniate.

**Sursă contact**: permite inserarea modului în care a fost obținut contactul și, prin urmare, [Sursa](/docs/configurations/tables/crm/contacts/contact-origin).  

**Calitate contact**: atribuie aprecieri diferitelor contacte: [calitatea](/docs/configurations/tables/crm/contacts/contact-quality) este exprimată în mod crescător de la una la cinci stele; această caracteristică este utilă pentru diverse analize și pentru a defini calitatea contactului în funcție de o clasificare realizată de utilizator.  

**Telefon/Email**: conține telefonul și email-ul principal al contactului, specificate în câmpurile omonime ulterioare: Telefon, Telefon mobil, Fax, Email, Email secundară, Web Site.  

**Limbă**: limba utilizată de contact.

**Informaţii statistice**: cele 3 secțiuni care îl compun vor fi completate în funcție de valorile introduse în câmpurile ulterioare **An statistică**, **Statistici privind cifra de afaceri** și **Număr statistic angajaţi**.Modificarea unuia dintre aceste câmpuri va influența spațiul respectiv și invers. De obicei acest combo box conține date referitoare la facturat și la numărul de angajați pentru ultimul an disponibil, informații foarte importante pentru întocmirea unei oferte comerciale.  

**Obiect email**: este necesar să se indice dacă, pentru acest registru, se pot trimite Oferte și/sau Newsletter. Doar activarea acestei opțiuni permite trimiterea acestor tipuri de documente.  

**Alte informații**: conține alte informații și codul fiscal introduse în câmpurile omonime ulterioare.  

**Persoană**: indică dacă acest contact este o persoană fizică sau juridică.  

**Status legal**: permite definirea statutului juridic al contactului.  

**Capital social**: permite indicarea capitalului social al companiei aferent contactului.  

**Incoterm**: câmp care va fi propus în documentele legate de contact.  

**Registru**: în acest câmp Fluentis inserează automat codul și numele clientului asociat contactului, în momentul în care acesta din urmă este convertit în client, dar se poate insera și manual.  

**Categorie administrativă**: reprezintă categoria administrativă a contactului, potențial utilă în scopuri statistice.  

**Categoria comercială**: reprezintă categoria comercială. Poate fi utilă în scopuri statistice.  

**Sector de utilizare**: este un câmp specific modulului CRM și este folosit pentru a indica [sectorul](/docs/configurations/tables/crm/contacts/sector-use) în care operează contactul.  

**Contact părinte**: permite inserarea unui contact conectat la cel afișat, de exemplu în cazul în care contactul face parte dintr-un holding a cărui companie mamă este deja printre contactele sale. Sau, în momentul în care contactul își schimbă numele, este posibil să se înregistreze acest lucru conectându-l cu noul contact.  

**Marcă**: reprezintă eventualul brand comercializat de companie.  

**Discount**: reprezintă tipul de reducere aplicat documentelor adresate contactului.  

**Procent**: reprezintă procentul de reducere de aplicat în raport cu tipul de reducere selectat.  

**Dată închidere**: este posibil să se specifice o dată de închidere a contactului, ceea ce va face ca acesta să nu mai apară în lista contactelor active, din data specificată.  

**Motiv închidere**: este posibil să se specifice motivele care au determinat închiderea contactului.

#### Butoane specifice  
- **Propune date**: permite propunerea datelor inserate anterior +n registru.  
- **Conversie în client**: permite convertirea unui contact CRM în [client](/docs/erp-home/registers/contacts/create-new-contact/general). Datele introduse în contact vor fi copiate în noua registru. Butonul este activ pentru [Tipurile de contact](/docs/configurations/tables/crm/contacts/contact-type) care nu au activ flag-ul *client*.

În cadrul contactului există și câmpuri folosite în scopuri statistice, care nu sunt afișate direct utilizatorului și sunt setate automat:

- *data creării contactului*
- *data începere lead* și *data finalizare lead*
- *data începere client* și *data finalizare client*

În momentul în care un contact este creat, i se atribuie *data creării contactului*. Când tipul contactului trece într-un tip cu opțiunea *lead* activată, se va atribui data de trecere la tipul lead. Când trece la un alt tip de contact care are opțiunea *lead* dezactivată, se va atribui *data de finalizare lead*.  
Aceeași logică va fi utilizată și în cazul trecerii tipului de contact într-un tip de contact cu opțiunea *client* activată.

### 1. Workflow Log

Acest tab apare doar dacă pentru *Contactele CRM* a fost activat un workflow care prevede afișarea sa. Pentru detalii consultați documentația privind workflow-urile.  
Utilizarea unui workflow pentru gestionarea contactelor permite gestionarea relației cu potențialul client în etape. Diferitele etape ale workflow-ului pot include diverse activități pentru atragerea clientului, care vor depinde de tipul de relație la care s-a ajuns în acea etapă. De exemplu, în etapa *Calificare* este importantă efectuarea unui apel telefonic de prezentare, în timp ce în etapa *Oportunitate* nu, deoarece clientul deja ne cunoaște și evaluează achiziția.

#### Activităţi

Câmpurile disponibile în detaliul activităților sunt împărțite în 2 secțiuni, **Activităţi** și **Activităţi suspendate**. Prima pentru a detalia activitatea deja efectuată, în timp ce în a doua pot fi deja definite unele informații despre activitatea ce urmează a fi desfășurată ulterior celei deja introduse.

**Tip activitate**: permite inserarea tipului de activitate efectuată pentru contact. Tipologiile sunt definite în tabelul **Tipuri de activitate** din **Arm**. Activitățile pot varia în funcție de stadiul workflow-ului curent. 

**Data**: acest câmp este completat automat de procedură în momentul în care se introduce câmpul **Tip activitate**;  

**Operator**: conține utilizatorul care a efectuat inserarea;  

**Descriere activitate**: permite inserarea detaliilor activității.

**Data activitate în aşteptare**: este completat automat de procedură atunci când se introduce câmpul **Tip activitate**;

**Tip activitate**: permite inserarea tipului de activitate în așteptare pentru contact;

**Descriere activitate**: permite inserarea detaliului activității care urmează să fie desfășurată;

**Dată închidere**: permite inserarea datei de expirare a activității;

**Operator**: reprezintă utilizatorul care va efectua activitatea;

**Dată început/sfârşit memento**: în acest câmp se poate indica intervalul de date în care trebuie să fie afișat un memento pentru activitatea următoare;

**Creează activitate**: bifând această opțiune se va crea o nouă înregistrare în secțiunea **Activităţi** din Fluentis pentru utilizatorul indicat în câmpul **Operator**. Acest mecanism automat se declanșează la momentul salvării contactului.

#### Log (Log)

În acest tab sunt afișate schimbările de stare ale workflow-ului, cu indicarea: stării inițiale și stării finale, a operatorului care a efectuat operația și a datei.

### 2. Referinţe Contact

Pentru a introduce o nouă referință, efectuași clic pe butonul **Referinţă nouă**, care apare atunci când sunteți în acest tab. Pentru a introduce o referință deja existentă, utilizați butonul **Caută**.

#### Câmpuri specifice  

**Nume** și **Prenume**: reprezintă numele și prenumele referinței.

**Operator**: reprezintă eventualul operator asociat în registrul referinței.  

**Rol**: reprezintă rolul referinței în cadrul companiei contactului.

**Telefon**: este telefonul fix principal al referinței.

**Email**: este adresa de email a referinței.

### 3. Adrese contact

Permite introducerea și afișarea eventualelor adrese alternative față de cea principală indicată în contact. 

**Telefon**: este numărul de telefon asociat adresei indicate.

**Fax**: este numărul de fax asociat adresei indicate.

**Email**: este adresa de email asociată adresei indicate.

**Site web**: este site-ul web asociat adresei indicate.

**Tip adresă**: este tipul de adresă la care se face referire, conform [tabelului](/docs/configurations/tables/general-settings/address-types).

**CP**: este codul poștal aferent adresei.

**Localitate**: este orașul aferent adresei.

**Județ**: este județul aferentă adresei.

**Țară**: este națiunea aferentă adresei.

**Regiune**: este regiunea aferentă adresei.

### 4. Note contact

Permite afișarea notelor referitoare la contact. 

### 5. Document Management

Permite consultarea documentelelor atașate. Pentru a atașa documentele se poate utiliza:

- butonul **Documente** pentru a atașa un document deja codificat în Fluentis sau crearea unui nou document de atașat.
- clic-dreapta pentru a selecta **Ataşează fișier** și crea un nou document de atașat.

### 6. Categoria comercială

Permite introducerea și afișarea categoriei comerciale de apartenență a companiei. Este suficient să se selecteze [categoria comercială](/docs/configurations/tables/crm/contacts/commercial-category).

### 7. Zona contact

Permite introducerea și vizualizarea zonei de apartenență a companiei. 

### 8. Agenți contact

Permite definirea **Agenților** conectați la acest contact.

**Cont sintetic/analitic/descriere**: permit selectarea agentului, făcând referire la registrul aferent;

**Zonă**: permite inserarea zonei de competență a agentului, așa cum este definită în tabel;

**Procent**: este procentul de comision care îi revine agentului în raport cu contactul;

**Utilizează procent**: bifând această opțiune se indică procedurii că, în faza de introducere a ofertelor de vânzare, trebuie să se țină cont de valoarea indicată în câmpul **Procent** pentru a efectua calculul comisioanelor care îi revin agentului.

### 9. Visit Report Contacte

Afișează lista **Visit Reports** introduse pentru contact și permite inserarea altora noi.

### 10. Oferte contact

Afișează lista ofertelor introduse pentru contact.  
În partea superioară a tab-ului se află câmpurile de filtrare care permit căutarea documentelor dorite pentru a le vizualiza/modifica. Este, de asemenea, posibilă crearea unor oferte noi.

### 11. Extra Data contact

Permite inserarea [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) pentru contact, care vor fi apoi raportate în documentele asociate acestuia.

### 12. Concurenţi contact  

Permite inserarea eventualilor **Concurenţi** pe care compania îi are în negocierea cu contactul.  

În câmpul **Nota** se pot indica alte informații utile referitoare la concurent.

### 13. Oferte de vânzare contact 

Afișează ofertele de vânzare valabile pentru contact, care vor fi aplicate documentelor adresate contactului. În faza de conversie a contactului în client, aceste date vor fi preluate.

### 14. Ordine client contact 

Afișează lista ordinelor introduse pentru contact.  
În partea superioară a tab-ului se află câmpurile de filtrare care permit căutarea documentelor dorite pentru a le vizualiza/modifica. Este, de asemenea, posibilă crearea unor ordine noi.

### 15. Newsletter contact 

Afișează lista cu newsletter introduse pentru contact.  

### 16. Plăți contact

În acest tab pot fi configurate plățile de propus în documentele aferente contactului.

#### Tipuri plată

Este o secțiunea fundamentală a tab-ului **Plăți** și servește pentru a seta logica de calcul a scadențelor. Se selectează **Tipul de plată** și **Soluția de plată** (ambele se găsesc în *Configurare > Tabele > Setări Generale*).

**Procent**: permite definirea cotei părți (în procente) din valoarea totală a plății (sau încasării) de gestionat cu condiția de plată (combinație între tip și soluție de plată) setată în rând.

Dacă procentul este mai mic de 100, vor fi create mai multe rânduri cu procente care însumate vor fi egale cu 100.

*Exemplu*:
- 50% Numerar la emiterea facturii și 50% Transfer bancar la 30 zile.  
- 50% Numerar la emiterea facturii; 25% Transfer bancar la 30 zile; 25% Transfer bancar la 60 zile.  

<u>Atenție</u>: dacă soluția de plată prevede mai mult de o scadență, se va completa astfel: *exemplu* 50% numerar la emiterea facturii și 50% transfer bancar la 30 - 60 zile

**Bancă principală**: reprezintă banca de referință pentru angajamente. 

Câmpul se completează selectând banca din combo box-ul conectat la tabelul *banca principală*. În acest tabel se poate insera atât bănca companiei, cât și băncile partenerilor (client sau furnizor).   
Se pot introduce:  
- înregistrări complete cu cod IBAN și/sau SWIFT (recomandat pentru băncile societății),  
- sau doar cu codurile ABI și CAB (recomandat pentru băncile partenerilor, pentru care codurile IBAN și SWIFT pot fi completate în câmpurile specifice din fișa anagrafică).

Dacă rândul din tabelul *banca principală* este complet cu IBAN și/sau SWIFT, pe lângă ABI și CAB, atunci, selectând acest rând din combo box, datele vor fi preluate automat din registru. Dacă nu, se vor afișa doar ABI și CAB (datele lipsă pot fi adăugate apoi manual). Această modalitate este recomandată pentru băncile clienților sau furnizorilor, pentru a evita înregistrarea prea multor rânduri în tabela Banca de referință care sunt folosite doar pentru un singur client. Este de preferat să se introducă doar datele sucursalei bancare (ABI și CAB), care pot fi comune mai multor clienți care au conturi la aceeași bancă.

Introducerea unei bănci poate fi efectuată și cu dublu click în câmpurile ABI/CAB care va deschide help-ul de căutare din care se selectează sucursala dorită și pentru a crea automat o fișă bancară, pe care apoi o poți completa cu datele de cont: CIN, IBAN, SWIFT etc.

**Cod bancă**: câmp utilizat în localizări și poate conține un cod bancar alternativ față de sistemul ABI și CAB.

#### Banca principală 

Permite inserarea băncilor alternative ale partenerilor. Un alt exemplu poate fi cel al unui client care plătește cu transfer bancar, dar despre care dorim să introducem și banca partenerului (banca principală) în cazul plății notelor de credit.

### 17. Oportunități contact 

Afișează lista oportunităților introduse pentru contact.  

### 18. Orar deschidere contact 

În acest tab sunt afișate zilele și orele de deschidere ale contactului.

### 19. Apeluri contact 

Afișează lista apelurilor telefonice efectuate către contactul.

### 20. Campanii marketing contact 

Afișează lista campaniilor de marketing în care este prezent contactul.