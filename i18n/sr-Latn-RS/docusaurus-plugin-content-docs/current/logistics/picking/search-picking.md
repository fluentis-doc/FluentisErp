---
title: Pretraga Pickinga (Slaganja robe)
sidebar_position: 2
---

Ova forma se otvara putem **Logistika > Slaganje robe**.

import SearchForm from './../../import/sections/search-form.md'

<SearchForm />

**Napredno pretraživanje**

U odeljku **Napredno pretraživanje** moguće je primeniti filtere prema statusu pickinga.

**Sve**: aktiviranjem ove opcije isključuju se sve ostale opcije i ne primenjuje se nijedan filter iz ovog odeljka.

**(Ne)štampani**: aktiviranjem jedne od ovih opcija prikazuju se samo štampani ili neštampani dokumenti za picking.

**(Ne)preuzeti**: aktiviranjem jedne od ovih opcija prikazuju se samo preuzeti ili nepreuzeti dokumenti za picking.

**(Ne)isporučeni**: aktiviranjem jedne od ovih opcija prikazuju se samo dokumenti za picking iz kojih su generisani otpremni dokumenti (otpremnice/računi) ili oni iz kojih takvi dokumenti nisu generisani.

:::note[Napomena]
Za razliku od postupka [Pražnjenje pickinga](/docs/logistics/picking/unload-picking), ovaj postupak omogućava izvršavanje istih funkcija, ali samo za označene redove.
:::

*Posebna dugmad*  
**Otpremnica**: otvara postupak kreiranja **prodajnih otpremnica** na osnovu izabranih dokumenata za picking.
**Račun**: otvara postupak kreiranja **izlaznih računa** na osnovu izabranih dokumenata za picking.
**Lista za preuzimanje**: otvara postupak kreiranja **liste za preuzimanje** na osnovu izabranih dokumenata za picking.

Prilikom kreiranja *otpremnice* i *izlaznog računa* iz pickinga dodate su nove oznake: **Koristi skladište i predložak iz vrste otpremnice** i **Koristi skladište i predložak iz vrste izlaznog računa**.       
Ako je oznaka aktivna, postupak će za redove otpremnice / izlaznog računa koristiti skladište i skladišni predložak definisane u vrsti otpremnice / izlaznog računa.         
Naravno, na skladištu / lokaciji preuzetoj iz skladišnog predloška otpremnice / izlaznog računa mora postojati raspoloživa zaliha.        

Iz ovog obrasca moguće je i [Kreirati novi picking](/docs/logistics/picking/picking-management) klikom na dugme **Novo**.