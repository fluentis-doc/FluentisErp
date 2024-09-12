---
title: Prodajna formula
sidebar_position: 4
---

Na ovoj formi možete povezati pravila između dokumenata kupovine i prodaje kako biste automatski promijenili cijenu stavki kada dobavljač pošalje novi katalog.  
U prvom prikazu nalaze se **Šifra** i **Opis** formula.        
U drugom prikazu nalaze se izvorni dokumenti, odredišni dokumenti i formule.  
Moguće je primijeniti do 5 operacija za isti redak. Razmatraju se samo stupci s sadržajem, prazni stupci neće biti ažurirani niti uzeti u obzir kao izvor promjene. Korisnik stoga treba popuniti samo stupce koji ga zanimaju za izvor, odredište, operaciju i operativnu vrijednost. Razmotrimo stupce u drugom prikazu.     
**Odredište vrste prodajnog cjenika**: sadrži tip prodajnog cjenika na koji se odnosi promjena kada se primijeni formula u ovom retku;    
**Konto/Podkonto/opis odredišnje prodajne liste**: sadrži prilagođenu prodajnu listu koja prima promjenu;           
**Tip cjenika dobavljača odredišta**: sadrži Tip cjenika dobavljača na koji se odnosi promjena;      
**Konto/Podkonto /Opis dobavljačkog cjenika odredišta**: sadrži prilagođeni nabavni cjenik koji prima promjenu;        
**Odredište računa s popisom prodajnih cjenika ili cjenik kupnje**: sadrži izvorni tip prodajnog cjenika na koji će se primijeniti Operator;       
**Konto/Podkonto /opis izvornog klijenta**: sadrži prilagođeni cjenik koji se uzima kao izvor;  
**Izvorni tip dobavljačkog cjenika**: sadrži izvorni tip dobavljačkog cjenika;  
**Konto/Podkonto /opis izvornog dobavljačkog cjenika**: sadrži prilagođeni dobavljački cjenik koji se uzima kao izvor;  
**Izvor troškova skladišta**: ovaj se stupac popunjava ako se trošak prosječne, posljednje ili standardne vrijednosti stavke želi koristiti kao izvor;  
**Operand br**: u izvorni dokument bit će primijenjena operacija odabrana u ovom padajućem izborniku među +, -, *, / ili %;  
**Vrijednost br**: u ovom polju možete unijeti ručnu vrijednost koja će se primijeniti prema odabranoj operaciji;  
**Vrijednost Svojstva br**: u ovom polju možete unijeti polje koje se treba dodati/oduzeti itd. prema odabranoj operaciji; ovo polje isključuje prethodno: zbroj/razlika/dijeljenje itd. može biti ručna vrijednost ili vrijednost drugog polja; dvostruki klik na ovom polju otvara Navigator objekata iz kojeg možete odabrati svojstvo koje treba uzeti u obzir kao vrijednost operacije; posljednje dvije stavke u Navigatoru objekata su oznake **DodatnaVrijednost** i **DodatniPostotak**, koje služe za prenošenje ovih vrijednosti iz dobavljačkog cjenika;  
**Prenjeti popust**: ovaj će se znak vratiti u odredišni dokument popusta iz odabranog cjenika;  
**Prenjeti popust od željenog dobavljača**: ovaj će znak vratiti popust iz preferiranog dobavljačkog cjenika po zadanim postavkama.