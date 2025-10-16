--
title: Raport de vizită nou
description: Ghid pentru crearea unui nou Raport de vizită în Fluentis ERP, cu toate câmpurile form-ului explicate.
keywords: [Fluentis ERP, Raport de vizită, CRM, ghid, procedură]
sidebar_position: 2
schema_type: HowTo
---

# Crearea unui nou Raport de vizită  

Procedura de creare a unui nou **Raport de vizită** permite definirea caracteristicilor vizitei efectuate de contact.

## Structura form  

Form-ul este împărțit în două părți: superioară și inferioară.

### Partea superioară  

#### Câmpuri specifice:

1. **Tip Raport de vizită**: permite indicarea tipului de Raport de vizită și face referire la tabelul cu același nume (*Cod* și *Descriere*).  
2. **Număr**: număr atribuit automat de Fluentis.  
3. **Dată**: data vizitei, setată cu data de astăzi.  
4. **Obiect**: motivul vizitei la client.  
5. **Notă**: câmp liber pentru note suplimentare.  
6. **Contact/Client**: indică contactul CRM sau clientul; eticheta și obiectul câmpului se schimbă în funcție de indicatorul (*Contact CRM* sau *Cont Fluentis*).  
7. **Participanți**: indicați persoanele care au participat la întâlnire.  
8. **Agent**: indicați agentul prezent la întâlnire, dacă este disponibil.  

### Partea inferioară  

Partea inferioară a form-ului prezintă două taburi.

#### Document  

În acest tab se completează, în general, raportul creat în timpul vizitei. Acest document poate conține informații variate, în funcție de tipul de vizită efectuată. Din acest motiv, în tabel se poate selecta un [Șablon](/docs/crm/budget-marketing-automation/template/template-search) utilizat ca bază pentru raport și care poate fi completat cu informațiile clientului. Este necesar, așadar, să se creeze în prealabil diverse șabloane pentru a fi disponibile în momentul vizitei pentru a fi utilizate.  
În partea dreaptă va fi afișat șablonul selectat. De asemenea, puteți să inserați datele necesare pentru trimiterea prin email a documentului.  

Pentru gestionarea șablonului sunt disponibile următoarele secțiuni:  
- **Email**: acest tab conține:  
> - *Print*: permite tipărirea foii de lucru;  
> - *Print Preview*: permite tipărirea pe ecran a foii de lucru, pentru previzualizare;  
> - *Salvează*: permite salvarea unei copii a documentului;  
> - *Undo*: șterge ultima modificare din șablon;  
> - *Redo*: reface ultima modificare ștearsă din șablon.

- **Home**: acest tab conține butoanele pentru funcționalitățile de bază privind editarea textului din Șablon, cum ar fi dimensiunile fontului, listele, alinierea textului etc.  
Preia funcțiile de bază ale celor mai cunoscute editoare de text, precum Microsoft Word.

- **Insert**: acest tab conține butoanele pentru inserarea unor elemente în Șablon:  
> - *Inserează tabel*: permite inserarea unui tabel în foaia de lucru;  
> - *Aliniere imagine*: permite inserarea unei imagini în corpul documentului;  
> - *Imagine*: permite inserarea unei imagini în corpul documentului;  
> - *Bookmark*: permite inserarea unui semn de carte în cadrul șablonului;  
> - *Hyperlink*: permite inserarea unui link către o pagină web sau către un semn de carte din șablon;  
> - *Header*: permite inserarea antetului șablonului;  
> - *Footer*: permite inserarea subsolului șablonului;  
> - *Page Number*: servește pentru a indica numărul paginii în antetul sau subsolul Șablonului;  
> - *Page Count*: servește pentru a indica numărul total de pagini ale șablonului în antet sau subsol;  
> - *Text Box*: permite inserarea unei casete de text în Șablon;  
> - *Symbol*: servește pentru a insera un simbol special în Șablon.

- **Merge data**: în acest tab se găsesc butoanele necesare pentru gestionarea și inserarea datelor de tip merge.   
> - *Insert Merge Field*: permite inserarea datelor de tip merge, selectându-le dintr-o listă bazată pe Data Source la care face referire Șablonul;  
> - *View Merged Data*: permite ascunderea/vizualizarea datelor de tip merge inserate în șablon;  
> - *Show All Field Codes*: permite afișarea codurilor câmpurilor utilizate ca date de tip merge;  
> - *Show All Field Results*: permite afișarearezultatului extrapolării câmpurilor utilizate ca date de tip merge;  
> - *First Record*: permite poziționarea pe primul înregistrare extrasă din datele de tip merge;  
> - *Previous record*: permite poziționarea pe înregistrarea anterioară celei curente, extrasă din datele de tip merge;  
> - *Next record*: permite poziționarea pe înregistrarea următoare celei curentă, extrasă din datele de tip merge;  
> - *Last Record*: permite poziționarea pe ultima înregistrare extrasă din datele de tip merge.

#### Documente atașate  

În acest tab este posibilă consultarea documentelor atașate. Pentru a atașa documentele, se poate proceda în două moduri:

- utilizând butonul din bara de instrumente **Documente** cu care se poate alege dacă se atașează un document deja codificat în Fluentis sau dacă se creează un nou Document de atașat.  
- efectuând direct în tabel click dreapta și selectând **Ataşează fişier** pentru a crea un nou Document de atașat.