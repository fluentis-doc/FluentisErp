---
title: Odlazni inozemni dokumenti o kupnji
sidebar_position: 5
---
:::tip[Napomena]
**Obveza ispunjena** u vezi s kupnjama od trenutne dostave za Sdi [**autofaktura**](/docs/finance-area/e-invoice/auto-invoice/auto-invoice-generation).
Što se tiče prodaje, trenutno se provodi izravno slanje faktura (pogledajte dolje).
:::


Propisi su zahtijevali da se Poreznoj upravi šalju podaci o transakcijama prijenosa dobara/usluga OBAVLJENIM i PRIMLJENIM od subjekata koji nisu identificirani/nisu rezidenti na teritoriju države.

- Za **IZDANE** dokumente može se koristiti isti format kao za elektroničke fakture u Italiji; alternativno, mogu se poslati u formatu predviđenom za strane dokumente o kupnji, kako je navedeno u sljedećem odjeljku.

- Za slanje Sdi-u dokumenata o kupnji od stranih dobavljača predviđen je **[poseban format](/docs/finance-area/declarations/declarations/electronic-invoice-for-foreign)**.

Digitalni potpis obvezan je za obje vrste datoteka.  

Slanje ovih datoteka Sdi-u upravlja se u Fluentis-u putem promjena stanja dokumenata.  

XML dokument zatim se šalje Sdi-u, koji ga provjerava i preuzima, a zatim vraća obavijesti u vezi s mogućim odbijanjem zbog nepravilnosti datoteke ili uspješnim preuzimanjem.  

**Iz ovog obrasca moguće je upravljati pojedinačnim ili masovnim promjenama stanja za slanje Sdi-u, slijedeći isti format kao za talijanske fakture.**

U obrascu Strani dokumenti o kupnji u izlazu prikazani su svi dokumenti proizvedeni iz računovodstvenih evidencija koji se odnose na ovu vrstu događaja. Obrazac je podijeljen u gornji dio u kojem su prikazani filtri za odabir upravljanih datoteka, među kojima su:  


 - Datum od/Datum do primitka:  
 - Datum od/Datum do primitka od kupca:  

U mreži rezultata prikazani su podaci koji se odnose na upravljane ili datoteke koje treba upravljati.   


 - **Status e-dokumenta**: prikazuje opis statusa dokumenta, navodeći i status unutarnjeg upravljanja Fluentis-om, kao i status koji je prikazan na Fluentis Business Hub-u i koji je izravno preuzet od SdI.  
 - **Naziv datoteke ES**: naziv datoteke koja se stvara kada dokument pređe u stanje GENERIRANO; u izvornom formatu ili nakon što je digitalno potpisana, predstavlja datoteku računa koja se šalje SdI.  
 - **Sdi Id**: jedinstveni identifikator koji SdI dodjeljuje dokumentu prilikom njegovog primitka.  
 - **Datum zadnjeg događaja**: datum posljednje promjene statusa na datoteci, bilo ručno ili zbog napredovanja obrade na SdI.

Na traci izbornika prikazane su funkcije za upravljanje odabranim dokumentom ili dokumentima:

tipka ![](/img/neutral/common/view.png) **Prikaži** omogućuje pregled, gdje možete pregledati događaje povezane s generiranom XML datotekom, preuzeti je ili promijeniti njezin status:

![](/img/it-it/finance-area/sdi-documents/outgoing-foreign-purchase-documents/image02.png)

- tipka ![](/img/it-it/finance-area/sdi-documents/outgoing-foreign-purchase-documents/image03.png)   **Preuzmi privitak** preuzima odabranu datoteku u odabranu mapu na vašem sustavu. 

- tipka ![](/img/it-it/finance-area/sdi-documents/outgoing-foreign-purchase-documents/image04.png) **Otvori dokument** otvara računovodstveni zapis povezan s odabranom datotekom.  






