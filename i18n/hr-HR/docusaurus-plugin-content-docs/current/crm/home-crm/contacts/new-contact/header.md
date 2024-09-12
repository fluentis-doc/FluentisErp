---
title: Zaglavlje Kontakti
sidebar_position: 1
---

Zaslon za CRM Kontakt sastoji se od tri dijela:     
- prvi gornji dio prikazuje eventualne radne tokove povezane s CRM kontaktom; radni tokovi obično slijede korisničko putovanje koje pretvara potencijalnog kupca u klijenta, ali svaki korisnik može stvoriti vlastiti radni tok prema potrebama CRM poslovanja; više informacija možete pronaći u odgovarajućem vodiču o Radnim tokovima.          
- središnji dio sadrži zaglavlje kontakta s općim i anketnim informacijama, neke obavezne, a neke neobavezne;   
- ispod se nalazi nekoliko kartica koje prikazuju različite radnje provedene na klijentu, a koje će biti obrađene u nastavku ovog vodiča.          

## Obavezni podaci zaglavlja

**Ime**: koristi se za navođenje naziva tvrtke ili, općenito, imena kontakta;      

**Vrsta kontakta**: prethodno definiran u tablici [Vrsta kontakta ](/docs/configurations/tables/crm/contacts/contact-type); automatski će se predložiti radni tok ako je povezan s tipom kontakta; koristi se za definiranje vrste kontakta kako bi ga se razlikovalo, na primjer, između potencijalnog klijenta i stvarnog klijenta. Na **Vrsti Kontakta** također je moguće naznačiti kartice koje će se prikazivati na anketi kontakta;      

## Neobavezni podaci zaglavlja:

**PDV broj**: polje sastavljeno od ISO koda zemlje (definirano u tablici **Zemlje**) i odgovarajućeg PDV ID-a. Polje je podložno testiranju ispravnosti kontrolnog broja za talijanske porezne brojeve (Partita IVA). 

**Podrijetlo kontakta**: moguće je navesti kako je kontakt pronađen, tj. njegovo [Porijeklo](/docs/configurations/tables/crm/contacts/contact-origin).    

**Kvaliteta kontakta**: dodjeljuje zvjezdice raznim kontaktima: [kvaliteta](/docs/configurations/tables/crm/contacts/contact-quality) se izražava rastućim redoslijedom od jedne do pet zvjezdica; ova značajka služi za razne analize i za određivanje kvalitete kontakta prema korisničkoj klasifikaciji.       

**Glavni agent**: služi kao informativni naslov, ali i za svrhe pristupa Fluentisu od strane agenata: oni će moći konzultirati samo kontakte za koje imaju dopuštenje.       

**Pojedinosti o adresi**:3 praznine koje ga čine bit će popunjene na temelju vrijednosti unesenih u sljedeće polje **Adresa**, **Grad** i **Županija**; izmjena jednog od ovih polja utjecat će na odgovarajući prostor i obrnuto.

**Telefon/Email**: sadrži glavni broj telefona i e-poštu kontakta, navedene u istoimenim sljedećim poljima. Ova e-adresa će se koristiti za eventualno slanje **Newslettera** ili **Ponuda** usmjerenih prema kontaktu.     

U polju **Email**: treba naznačiti je li za ovu evidenciju moguće slati Ponude i/ili Newslettere; ova oznaka je važna jer inače neće biti moguće slati nijednu od ovih vrsta dokumenata.     

**Statistički podaci**: tri prostora koja ga čine bit će popunjena prema vrijednostima unesenim u sljedeće polja **Statistička godina**, **Statistika prihoda** i **Broj statističkih zaposlenika**; promjena bilo kojeg od ovih polja utjecat će na odgovarajući prostor i obrnuto. Ova kutija obično sadrži podatke o prihodima i broju zaposlenika za posljednju dostupnu godinu, vrlo važne informacije prilikom sastavljanja komercijalne ponude.   

**Više informacija**: sadrži Dodatne informacije i Porezni broj unesene u odgovarajuća polja.    

**Osoba**: koristi se kako bi se utvrdilo je li kontakt fizička ili pravna osoba.   

**Pravni status**: polje za slobodno popunjavanje gdje se definira pravni status kontakta.    

**Temeljni kapital**: polje za slobodno popunjavanje gdje se može navesti ukupni kapital tvrtke povezan s kontaktom.

**Paritet**: polje gdje se navodi paritet (npr. "Franco tvornica"), koja se predlaže na dokumentima povezanim s kontaktom.

**Šifarnik**: u ovom polju Fluentis automatski navodi nadimak i pravno ime klijenta povezanog s kontaktom, kada je ovaj potonji pretvoren u klijenta.    

**Administrativna kategorija**: koristi se za označavanje administrativne kategorije kontakta, može biti korisno u statističke svrhe.    

**Komercijalna kategorija**: kao i administrativna kategorija, može biti korisna u statističke svrhe.   

**Sektor upotrebe**: ovo je polje specifično za CRM i služi da označi [sektor](/docs/configurations/tables/crm/contacts/sector-use) u kojem posluje kontakt.     

**Prioritetni kontakt**: moguće je označiti kontakt povezan s trenutno pregledanim kontaktom, na primjer, ako kontakt pripada holdingu čija nadređena već postoji među našim kontaktima.    

**Marka proizvoda**: koristi se za označavanje eventualnog brenda koji tvrtka tržišta.     

**Datum zatvaranja**: moguće je specificirati datum zatvaranja kontakta, nakon kojeg se više neće pojavljivati među aktivnim kontaktima, od navedenog datuma.         

**Završni opis razloga**: moguće je navesti razloge koji su doveli do zatvaranja kontakta.  

**Descrizione motivo di chiusura**: moguće je dodatno detaljizirati razlog zatvaranja, dopunjujući ono što već postoji u polju **Razlog zatvaranja**.

U zadnjem dijelu obrasca prisutne su **specifične kartice**.     