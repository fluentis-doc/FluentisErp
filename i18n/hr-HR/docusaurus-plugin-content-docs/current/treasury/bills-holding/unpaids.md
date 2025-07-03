---
title: Potraživanja
sidebar_position: 4
---

Forma za pretraživanje potraživanja

- nalazi se u Riznica > Portfelj efekata > Efekti > Potraživanja

- omogućava korisniku pretraživanje prethodno unesenih potraživanja radi pregleda, izmjene ili eventualnog brisanja.

Iz ove forme moguće je i ručno unijeti novo potraživanje pritiskom na gumb **Novo**.


## Gumbi na alatnoj traci

> - **Traži:** Gumb za pretraživanje potraživanja prema kriterijima unesenim u zaglavlju forme.
> - **Novo:** Otvara formu za unos novog potraživanja.
> - **Izmjeni:** Omogućuje izmjenu već unesenog potraživanja.
> - **Prikaži:**  Omogućuje pregled već unesenog potraživanja.
> - **Ukloni:**  Briše odabrano potraživanje.
> - **Zbirno stvaranje nenaplativih potraživanja:** Pokreće naredbu za istovremeno kreiranje više potraživanja.

> Izvršavanje **Ispisa** (*Pregled* ili *Ispis*) pokreće, za odabrana potraživanja (može se odabrati više držeći Ctrl), odgovarajuće izvještaje iz [**izbornika ispisa**](/docs/treasury/bills-holding/reports/print-unpaid-list) modula.

> - *Potraživanja*: prikaz efekata potraživanja s pripadajućim podacima i iznosima, uvećanim za eventualne kamate i troškove
> - *Pismo opomene*:  Pismo upućeno dužniku u kojem se ističu potraživanja i traži plaćanje 


## Filteri za pretragu

- **Vrste efekata:** Filtrira po tipu efekta unesenog u potraživanje prilikom kreiranja, npr. Bankovna priznanica, Mjenica itd.
- **Dužnik:** filter se odnosi na polje ***Dužnik*** unutar efekta
- **OD / DO / datum potraživanja / datum dospijeća / datum izdavanja / broj**: odnose se na istoimena polja unutar potraživanja, posebno na datum kreiranja potraživanja, datum dospijeća računa koji se ponovo otvara zbog potraživanja, datum izdavanja efekta koji je postao potraživanje i broj potraživanja
- **Status potraživanja:** filter se odnosi na *Status potraživanja* unutar potraživanja, koji se automatski mijenja ovisno o izvršenim procedurama, npr. kreira se kao Potraživanje, zatim postaje naplaćeno, ili je izdata zadužnica itd.
- **Filter flagovi:** Po defaultu je aktivno *Svi*, ali se može promijeniti odabirom različitih uvjeta pretrage koje, ako se aktiviraju istovremeno, proširuju opseg pretrage, npr. ispisani + knjiženi + NE ispisani... Također postoji dodatni proširivi dio za filtriranje potraživanja koja potječu od efekata nastalih iz otvorenih stavki ili faktura s pripadajućim datumskim i brojčanim referencama. Ovo olakšava pretragu jer su te dvije procedure za kreiranje efekta međusobno alternativne.

## Mreža rezultata

U ovoj formi prikazuju se isti podaci koji su detaljno opisani u filterima gore.

Također prikazuje:
- iznos potraživanja i  **Bankovni troškovi** iz zaglavlja potraživanja, koji se ponovno tereće klijentu i knjiže
- **Datum** i **Broj** uvoza vezan za proceduru **Neplaćeni uvoz**
- **Broj fakture** koja je generirala efekt koji je postao potraživanje
- **Banka prezentacije** potraživanja.






