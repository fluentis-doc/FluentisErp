---
title: Korištenje kredita 
sidebar_position: 3
---

Obrazac **Korištenje kredita** omogućuje kreiranje i spremanje izračuna korištenja kredita za svakog klijenta te pregled povijesnog prikaza. U listi izračuna prikazanoj u maski, redovi s odstupanjem bit će prikazani crvenom bojom. 

Za izradu novog izračuna pritisne se tipka **Novo**.

Nakon otvaranja detaljne obrasca, unese se račun klijenta koji se želi analizirati.

Unese se ili izmijeni datum početka izračuna koji predstavlja datum od kojeg se čitaju podaci za izračun.

Zatim se pritisne tipka **Izračunavanje**.

Izračun se može spremiti pomoću naredbe **Spremi**.

**Referentni datum** predstavlja dan na koji se izračunava raspoloživi kredit.

NAPOMENA: U slučaju, primjerice, bankovnih mjenica koje su izdane i predane na naplatu, čak i ako su knjižene putem odgovarajuće računovodstvene procedure, iznos se za potrebe izračuna kredita smatra zauzetim sve do datuma dospijeća obveze koja je generirala mjenicu. Stoga, ako se referentni datum izračuna promijeni na datum nakon tog roka, može se uočiti da je iznos kredita oslobođen za odgovarajući iznos. 

Kod prodajnih dokumenata, poput narudžbe klijenta, izračun raspoloživog kredita (vidljiv u zaglavlju) uvijek je vezan za današnji datum, bez mogućnosti izmjene referentnog datuma. Stoga, nova narudžba koja prelazi dugovanje neće biti obradiva (osim putem autorizacijskog postupka) do dana dospijeća hipotetskog efekta koji oslobađa dovoljan iznos.


Gumb **Ažurirajte kredit klijenta** ažurira evidenciju klijenta unesenu u zaglavlje izračuna i postavlja u evidenciji vrijednost koju očitava iz polja **Procijenjeni kredit**. 

Ovo polje, pak, popunjava naredba Izračunavanje, primjenjujući vrijednost iz polja **Multiplikator kreditne procjene** (npr. 1) na ponderirani izračun temeljen na prometu klijenta u razmatranom razdoblju.

Izračun je razvijen na sljedeći način:

Promet 12M / 365 * Množitelj * Prosječni broj dana kašnjenja, gdje su posljednji parametri izračunati na osnovu dospjelih faktura u zadnjih 12 mjeseci, prema formuli: (suma(Iznos dospijeća * Dani Kašnjenja)) / (ukupna suma dospijeća). 

**OSTALA POLJA FORME:**

**Promet 12M**. = promet u posljednjih dvanaest mjeseci

**Stavke** dugovanja/potraživanja i pripadajući saldo

**Duguje / Potražuje** = naplate iz privremenih evidencija (informativni podaci)

**Dugovani / potražni saldo** = računovodstveni pokreti ako je odabrana računovodstvena metoda 

**Promet za knjiženje** = promet koji još nije knjižen (potraživanje jer uključuje odobrenja)

**Otpremnice za fakturiranje** (potraživanje ako su povratne otpremnice)

**Vrijednost i broj neplaćenih stavki** (statistički podatak, nije uključen u izračun)

**Dospjelo** = iznos dospjelih otvorenih stavki 


