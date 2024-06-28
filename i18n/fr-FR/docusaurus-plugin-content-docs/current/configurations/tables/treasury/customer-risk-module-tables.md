---
title: Tableaux formulaire Risque client
sidebar_position: 7
---

Ils ne sont pas présents tableaux spécifiques du formulaire en objet, mais il va assigné que divers types de document en achat et vente présentent paramétrages reliés au risque client.

Le crédit client retire les données par les suivants documents de la zone de vente:

**Type commande client**: le 'flag crédit' indique que si le document (imprimé et confirmé) vient considéré dans le calcul du crédit client ou non. Le flag 'Excluire le bloque' exclure ce type document par le bloque client;

**Types bon de livraison**: le 'flag crédit' indique que si le document (imprimé, ne valorisé pas en facture) vient considéré dans le calcul crédit client ou non. Le flag 'Excluire le bloque' exclure ce type document par le bloque client;

**Types facture**: le 'flag crédit' indique que si le document (imprimé, ne comptabilisé pas) vient considéré dans le calcul du crédit client ou non. Le flag 'Excluire le bloque' exclure ce type document par le bloque client.

Enfin, chaque registre client présente deux paramétrages reliés au formulaire en objet:

**Le** ** type contrôle crédit**:

**Bloque doc. et moniteur** ** crédit**: le document de la zone de vente qui va a dépasser le crédit sera bloqué et donc il y aura la nécessité de l'autoriser pour avancer aux phases successives du flux du document;

**Moniteur** ** crédit**: il sera simplement effectué un contrôle du crédit avec éventuel message à l'utilisateur de l'avenu dépassement;

**Bloque** ** de groupe**: comme pour le premier, mais le calcul est cumulatif pour toutes les sociétés de la base de données dirigéesau même registre client;

**Moniteur du** ** groupe**: comme pour le deuxième, mais le calcul est cumulatif pour toutes les sociétés de la base de données dirigées au même registre client.

Le deuxième paramétrage est le check 'Contrôle exposition', qui rend visible le client dans le masque de l'exposition clients.






