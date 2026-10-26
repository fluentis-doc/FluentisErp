---
title: Pretraga Pickinga (Slaganja robe)
sidebar_position: 2
---

Ova forma se otvara putem  **Logistika > Slaganje robe**.

import SearchForm from './../../import/sections/search-form.md'

<SearchForm />

**Napredno pretraživanje**

U odjeljku **Napredno pretraživanje** moguće je primijeniti filtre prema statusu pickinga.

**Sve**: aktiviranjem ove oznake isključuju se sve ostale oznake i ne primjenjuje se nijedan filtar iz ovog odjeljka.

**(Ne)ispisani**: aktiviranjem jedne od ovih oznaka prikazuju se samo ispisani ili neispisani dokumenti za picking.

**(Ne)preuzeti**: aktiviranjem jedne od ovih oznaka prikazuju se samo preuzeti ili nepreuzeti dokumenti za picking.

**(Ne)otpremljeni**: aktiviranjem jedne od ovih oznaka prikazuju se samo dokumenti za picking iz kojih su generirani otpremni dokumenti (otpremnice/računi) ili oni iz kojih takvi dokumenti nisu generirani.

:::note[Napomena]
Za razliku od postupka [Pražnjenje pickinga](/docs/logistics/picking/unload-picking), ovaj postupak omogućuje izvršavanje istih funkcija, ali samo za označene retke.
:::

*Posebni gumbi*  
**Otpremnica**: otvara postupak izrade **prodajnih otpremnica** na temelju odabranih dokumenata za picking.
**Račun**: otvara postupak izrade **izlaznih računa** na temelju odabranih dokumenata za picking.
**Lista za preuzimanje**: otvara postupak izrade **liste za preuzimanje** na temelju odabranih dokumenata za picking.

Prilikom kreiranja *otpremnice* i *izlaznog računa* iz pickinga dodane su nove oznake: **Koristi skladište i predložak iz vrste otpremnice** i **Koristi skladište i predložak iz vrste izlaznog računa**.       
Ako je oznaka aktivna, postupak će za retke otpremnice / izlaznog računa koristiti skladište i skladišni predložak definirane u vrsti otpremnice / izlaznog računa.         
Naravno, na skladištu / lokaciji preuzetoj iz skladišnog predloška otpremnice / izlaznog računa mora postojati raspoloživa zaliha.        

Iz ovog je obrasca moguće i [Kreirati novi picking](/docs/logistics/picking/picking-management) klikom na gumb **Novo**.