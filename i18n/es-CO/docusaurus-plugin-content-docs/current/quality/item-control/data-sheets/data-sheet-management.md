---
title: Ficha técnica
sidebar_position: 2
ai_generated: true
---

La gestión se encuentra en la ruta **Calidad > Controles de artículo > Fichas técnicas > Nueva ficha técnica<!-- Scheda tecnica -->** o puede realizarse desde la **Búsqueda de Fichas técnicas<!-- Ricerca Schede tecniche -->**.

:::important ¿Para qué sirve<!-- A cosa serve -->
Las Fichas técnicas<!-- Schede tecniche --> catalogan toda aquella información que describe las características de los productos asociados como adecuadas para un contrato, una especificación funcional o un uso determinado.
Las fichas técnicas<!-- schede tecniche --> pueden ser personalizables por Cliente.
Se gestionan las revisiones y la trazabilidad<!-- rintracciabilità --> entre las Fichas técnicas<!-- Schede tecniche --> requeridas.

De forma estándar están disponibles los siguientes reportes:
> **Ficha técnica<!-- Scheda tecnica -->**: ficha con el listado de *Propiedades<!-- Proprietà -->* y de *Normas y Leyes<!-- Norme e Leggi -->* asociadas (para uso interno).
> **Ficha de Producto<!-- Scheda Prodotto -->**: ficha que contiene los datos del *Producto<!-- Prodotto -->* y de las *Propiedades<!-- Proprietà -->* (para uso comercial).
:::

## Botones de comando<!-- Pulsanti di comando -->

### ![](/img/neutral/common/save.png) Guardar<!-- Salva -->

Al presionar este botón se almacenan todas las informaciones modificadas de la *Ficha técnica<!-- Scheda tecnica -->* visualizada.

### ![](/img/neutral/common/duplicate.png) Duplicar ficha<!-- Duplica Scheda -->

Es posible duplicar la *Ficha técnica<!-- Scheda tecnica -->* visualizada en una nueva *Ficha técnica<!-- Scheda tecnica -->*. Solo debe presionar el botón **Duplicar<!-- Duplica -->**.
Se mostrará una solicitud de:
> **Tipo de ficha<!-- Tipo scheda -->**: es el *Tipo de ficha<!-- Tipo scheda -->* de la nueva *Ficha técnica<!-- Scheda tecnica -->* (dato obligatorio), se propone el *Tipo de ficha<!-- Tipo scheda -->* de la *Ficha técnica<!-- Scheda tecnica -->* de origen.
> **Del cliente**: es el *Cliente<!-- Cliente -->* de la nueva *Ficha técnica<!-- Scheda tecnica -->*, se propone la cuenta *Cliente<!-- Cliente -->* de la *Ficha técnica<!-- Scheda tecnica -->* de origen.
> **Extra data**: listado de los extra data previstos por el *Tipo de ficha<!-- Tipo scheda -->* indicado.
> **Nuevo código<!-- Nuovo codice -->**: es el *Código<!-- Codice -->* de la nueva *Ficha técnica<!-- Scheda tecnica -->* (dato obligatorio), se propone según lo previsto por el *Método de codificación<!-- Metodo di Codifica -->* asociado al *Tipo de ficha técnica<!-- Tipo scheda tecnica -->*.
> **Duplicar con trazabilidad<!-- Duplica con rintracciabilità -->**: indica si se desea mantener relación/trazabilidad, en la *Ficha técnica<!-- Scheda tecnica -->* de origen (pestaña *Fichas relacionadas<!-- Schede correlate -->* de la *Ficha técnica<!-- Scheda tecnica -->* de origen) y en la *Ficha técnica<!-- Scheda tecnica -->* de destino (en el expander *Origen de datos de ficha<!-- Origine dati scheda -->* presente en los *datos de cabecera*).

*Tipo de ficha<!-- Tipo scheda -->* y *Del cliente* se proponen desde el documento de origen; el *Código<!-- Codice -->* se propone si al *Tipo de ficha<!-- Tipo scheda -->* está asociado un *Método de codificación<!-- Metodo di codifica -->*.
A continuación, presione el botón **OK** o el botón **Cancelar<!-- Cancel -->** si desea continuar con la duplicación o no.
La nueva *Ficha técnica<!-- Scheda tecnica -->* creada tendrá la *Revisión<!-- Revisione -->* igual a *Cero<!-- Zero -->*.
Al finalizar el proceso la nueva *Ficha técnica<!-- Scheda tecnica -->* será visualizada.

### ![](/img/neutral/common/execute.png) Crear nueva revisión<!-- Crea nuova revisione -->

Para poder crear una nueva *Revisión<!-- Revisione -->* de la *Ficha técnica<!-- Scheda tecnica -->* visualizada es necesario pulsar el botón **Crear nueva revisión<!-- Crea nuova revisione -->**.
Se crea una nueva *Ficha técnica<!-- Scheda tecnica -->*, con toda la información de la *Ficha técnica<!-- Scheda tecnica -->* de origen pero con índice de *Revisión<!-- Revisione -->* incrementado y la *Fecha de inicio de validez<!-- Data di inizio validità -->* igual a la fecha actual.
La *Ficha técnica<!-- Scheda tecnica -->* de origen termina su validez, la *Fecha fin de validez<!-- Data fine validità -->* se establece igual a la fecha actual.
Al finalizar el proceso la nueva *Revisión<!-- Revisione -->* de la *Ficha técnica<!-- Scheda tecnica -->* será visualizada.

### ![](/img/neutral/common/item-web.png) Crear Plan de control<!-- Crea Piano di controllo -->

Desde la *Ficha técnica<!-- Scheda tecnica -->* es posible crear un *Plan de control<!-- Piano di controllo -->*; para esto es necesario pulsar el botón **Crear Plan de control<!-- Crea Piano di controllo -->**.
Se crea un nuevo *Plan de control<!-- Piano di controllo -->*, se copian solamente las *Propiedades<!-- Proprietà -->* de origen con el indicador *Pruebas a detectar<!-- Prove da rilevare -->*, todas las demás informaciones de la *Ficha técnica<!-- Scheda tecnica -->*, pero con índice de *Revisión<!-- Revisione -->* igual a *cero* y con *Fecha de inicio de validez<!-- Data di inizio validità -->* igual a la fecha actual. Se mostrará una solicitud de:
> **Tipo de plan de control<!-- Tipo piano di controllo -->**: es el *Tipo de plan de control<!-- Tipo piano di controllo -->* del nuevo *Plan de control<!-- Piano di controllo -->* (dato obligatorio).
> **Número<!-- Numero -->**: es el *Número* progresivo del nuevo *Plan de control<!-- Piano di controllo -->* (dato obligatorio), se propone según lo previsto por la *Numeración<!-- Numerazione -->* asociada al *Tipo de plan de control<!-- Tipo piano di controllo -->* y la fecha actual.
> **Crear manteniendo la trazabilidad<!-- Crea mantenendo la rintracciabilità -->**: indica si se desea mantener relación/trazabilidad, de la *Ficha técnica<!-- Scheda tecnica -->* de origen, en el *Plan de control<!-- Piano di controllo -->* de destino (en el expander *Origen Plan de control<!-- Origine Piano di controllo -->* presente en los *datos de cabecera*).

Posteriormente, presione el botón **OK** o el botón **Cancelar<!-- Cancel -->** si desea continuar con la creación o no.
Al finalizar el proceso el nuevo *Plan de control<!-- Piano di controllo -->* será visualizado.

### ![](/img/neutral/common/duplicate.png) Duplicar prueba<!-- Duplica prova -->

En el contexto de la pestaña *Propiedades<!-- Proprietà -->*, el botón está habilitado solo si, del listado *Propiedades<!-- Proprietà -->*, se ha seleccionado una sola fila *Propiedad<!-- Proprietà -->*.
Toda la información de la *Propiedad<!-- Proprietà -->* de origen será duplicada en una nueva *Propiedad<!-- Proprietà -->* agregada en *Secuencia<!-- Sequenza -->* a las *Propiedades<!-- Proprietà -->* ya existentes.

## Gestión de datos<!-- Gestione dati -->

### Datos de cabecera<!-- Dati di testata -->

La información gestionable es:
> **Tipo de ficha<!-- Tipo scheda -->**: es el *Tipo de ficha técnica<!-- Tipo scheda tecnica -->* (dato obligatorio).
> Al ingresar manualmente una nueva *Ficha técnica<!-- Scheda tecnica -->* se propone el *Tipo de ficha técnica<!-- Tipo scheda tecnica -->* indicado en el expander *Fichas técnicas<!-- Schede tecniche -->* en la pestaña *General<!-- Generale -->* presente en los *Parámetros de control de artículos<!-- Parametri Controllo articoli -->*.
>
> **Código<!-- Codice -->**: es el *Código<!-- Codice -->* de la *Ficha técnica<!-- Scheda tecnica -->* (dato obligatorio).
> Se propone según lo previsto por el *Método de Codificación<!-- Metodo di Codifica -->* asociado al *Tipo de ficha técnica<!-- Tipo scheda tecnica -->*.
>
> **Revisión<!-- Revisione -->**: es la Revisión<!-- Revisione --> de la *Ficha técnica<!-- Scheda tecnica -->* (dato obligatorio).
La información es modificable si se está creando una nueva *Ficha técnica<!-- Scheda tecnica -->* de lo contrario es de solo lectura; se puede modificar de forma controlada por el sistema usando el botón *Crear nueva revisión<!-- Crea nuova revisione -->* que incrementa el valor anterior de *Revisión<!-- Revisione -->* en una unidad.
>
> **Descripción<!-- Descrizione -->**: es la descripción de la *Ficha técnica<!-- Scheda tecnica -->*.
> **Nombre comercial<!-- Nome commerciale -->**: es la descripción comercial de la *Ficha técnica<!-- Scheda tecnica -->*.
> **Del cliente**: es la razón social del *Cliente<!-- Cliente -->*. Las *Propiedades<!-- Proprietà -->* son personalizadas por *Cliente<!-- Cliente -->*/*Artículos asociados<!-- Articoli associati -->*.
> **Fecha solicitud/Solicitado por<!-- Data richiesta/Richiesta da -->**: solo las referencias de en qué fecha y quién solicitó la creación de la *Ficha técnica<!-- Scheda tecnica -->*.
>
> **Validez: Inicio/Fin<!-- Validità: Inizio/Fine -->**: son las fechas de inicio y fin de validez de la *Ficha técnica<!-- Scheda tecnica -->*.
> Las fechas se gestionan automáticamente al crear una nueva *Revisión<!-- Revisione -->* de la *Ficha técnica<!-- Scheda tecnica -->*.
>
> **Responsable**: es el *Empleado<!-- Dipendente -->* responsable de la *Ficha técnica<!-- Scheda tecnica -->*.
> Al ingresar manualmente una nueva *Ficha técnica<!-- Scheda tecnica -->* se propone el *Responsable<!-- Responsabile -->* indicado en el expander *Fichas técnicas<!-- Schede tecniche -->* en la pestaña *General<!-- Generale -->* presente en los *Parámetros de control de artículos<!-- Parametri Controllo articoli -->*.
>
> **Origen de datos de ficha<!-- Origine dati scheda -->**: expander donde es posible ingresar:
>
>> **Tipo/Ficha origen/Rev.<!-- Tipo/Scheda origine/Rev. -->**: contiene las referencias de la *Ficha técnica de origen<!-- Scheda tecnica di origine -->* (*Tipo de ficha<!-- Tipo scheda -->*, *Código<!-- Codice -->* y *Revisión<!-- Revisione -->*).
>> **Motivo de la revisión<!-- Motivo della revisione -->**: una breve descripción del motivo que condujo a la revisión.
>> La información se puede modificar si la *Ficha técnica<!-- Scheda tecnica -->* aún está vigente.
>
> **Notas<!-- Note -->**: anotaciones libres.

### Atributos de la ficha<!-- Attributi scheda -->
Es posible ingresar [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) para cada *Ficha técnica<!-- Scheda tecnica -->*.
Se heredan de los *Atributos de ficha técnica<!-- Attributi Scheda tecnica -->* asociados al *Tipo de ficha técnica<!-- Tipo scheda tecnica -->*.

### Propiedades<!-- Proprietà -->
Contiene las *Propiedades<!-- Proprietà -->* de los *Artículos<!-- Articoli -->* o *Atributos de artículo<!-- Attributi articolo -->* de la *Ficha técnica<!-- Scheda tecnica -->*.
La lista se compone de la siguiente información:
> **Secuencia<!-- Sequenza -->**: es la secuencia de visualización/importancia de la *Propiedad<!-- Proprietà -->*.
> **Tipo de prueba<!-- Tipo prova -->**: es el código de la *Propiedad<!-- Proprietà -->*.
> **Descripción tipo de prueba<!-- Descrizione tipo prova -->**: es la descripción de la *Propiedad<!-- Proprietà -->*. La información es de solo lectura.
> **Descripción<!-- Descrizione -->**: es la descripción de la *Propiedad<!-- Proprietà -->* editable.
> **Referencia plan de control estándar<!-- Riferimento piano di controllo standard -->**: es un campo descriptivo que contiene las referencias a codificaciones de pruebas reconocidas globalmente.
> **Instrumento de medición<!-- Strumento di misura -->**: es la *Categoría del instrumento de medición<!-- Categoria dello strumento di misura -->* a utilizar para poder detectar los *Valores<!-- Valori -->* expresados en la *Propiedad<!-- Proprietà -->*.
> **Prueba a detectar<!-- Prova da rilevare -->**: indica si la *Propiedad<!-- Proprietà -->* es una *Prueba a detectar<!-- Prova da rilevare -->*.
Al crear un *Plan de control<!-- Piano di controllo -->* desde la *Ficha técnica<!-- Scheda tecnica -->*, la *Propiedad<!-- Proprietà -->* será copiada en las *Pruebas a detectar<!-- Prove da rilevare -->*.
> **Unidad de medida<!-- Unità di misura -->**: es la *Unidad de medida<!-- Unità di misura -->* con la que se expresan el *Valor nominal<!-- Valore nominale -->* y los *Límites mínimo y máximo<!-- Limiti minimo e massimo -->* si se expresan en valor y no en porcentaje.
> **Tipo de valor<!-- Tipo valore -->**: es el *Tipo de valor<!-- Tipo valore -->* con el que expresar el *Valor nominal<!-- Valore nominale -->*; los *Tipos de valor<!-- Tipi valore -->* posibles son: *Numérico<!-- Numerico -->*, *Sí/No<!-- Si/No -->* o *Texto<!-- Testo -->*.
> **Tipo de límite<!-- Tipo limite -->**: habilitado si el *Tipo de valor<!-- Tipo valore -->* es *Numérico<!-- Numerico -->*, es el *Tipo de límite<!-- Tipo limite -->* que controlará la habilitación de los *Límites<!-- Limiti -->* y los valores de *Tolerancia<!-- Tolleranza -->*.
> **Valor nominal<!-- Valore nominale -->**: es el valor teórico esperado de la *Propiedad<!-- Proprietà -->*.
> **Límite mínimo<!-- Limite minimo -->**: límite mínimo permitido respecto al *Valor nominal<!-- Valore nominale -->*.
> **L.min.(toll-)<!-- L.min.(toll-) -->**: es el límite de tolerancia negativa sobre el límite mínimo.
> **L.min.(toll+)<!-- L.min.(toll+) -->**: es el límite de tolerancia positiva sobre el límite mínimo.
> **Límite máximo<!-- Limite massimo -->**: límite máximo permitido respecto al *Valor nominal<!-- Valore nominale -->*.
> **L.max.(toll-)<!-- L.max.(toll-) -->**: es el límite de tolerancia negativa sobre el límite máximo.
> **L.max.(toll+)<!-- L.max.(toll+) -->**: es el límite de tolerancia positiva sobre el límite máximo.
> **%**: indica si el *Límite mínimo<!-- Limite minimo -->* y el *Límite máximo<!-- Limite massimo -->* se expresan en porcentaje.
> **Fecha inicio de validez<!-- Data inizio validità -->**: es la fecha de inicio de validez de la *Propiedad<!-- Proprietà -->*.
> **Fecha fin de validez<!-- Data fine validità -->**: es la fecha de fin de validez de la *Propiedad<!-- Proprietà -->*.
> **Imprimibles<!-- Stampabili -->**: indica si la información es imprimible o no en los reportes: *Ficha técnica<!-- Scheda tecnica -->* y *Ficha de Producto<!-- Scheda Prodotto -->*.
> **Notas<!-- Note -->**: anotaciones libres.

Los límites de tolerancia positiva y negativa sobre los límites mínimos y máximos son informaciones habitualmente proporcionadas por el error del *Instrumento de medición<!-- Strumento di misura -->* utilizado para detectar los valores. En esta versión solo pueden ingresarse manualmente por el operador.

### Normas y Leyes<!-- Norme e Leggi -->
Contiene las referencias a *Normativas<!-- Normative -->* y/o *legislaciones<!-- legislazioni -->* aplicables a las *Propiedades<!-- Proprietà -->* de la *Ficha técnica<!-- Scheda tecnica -->*.
La lista se compone de la siguiente información:
> **Tipo**: es el *Tipo de norma y ley<!-- Tipo norma e legge -->* asociada a la *Norma y Ley<!-- Norma e Legge -->* indicada. La información es de solo lectura.
> **Código<!-- Codice -->**: es la *Norma y Ley<!-- Norma e Legge -->*.
> **Descripción<!-- Descrizione -->**: es la descripción de la *Norma y Ley<!-- Norma e Legge -->* indicada. La información es de solo lectura.
> **Notas<!-- Note -->**: anotaciones libres.

### Clientes<!-- Clienti -->
Contiene los *Clientes<!-- Clienti -->* y *Clientes finales<!-- Clienti finali -->* (Contactos) interesados en los *Artículos<!-- Articoli -->* con *Propiedades<!-- Proprietà -->* similares y listados en los dos respectivos listados.
La lista se compone de la siguiente información:
> **Cliente<!-- Cliente -->**: es la razón social del *Cliente<!-- Cliente -->*.
> **Cliente final<!-- Cliente finale -->**: es el código y la descripción del *Cliente final<!-- Cliente finale -->*.
> **Notas<!-- Note -->**: anotaciones libres.

### Artículos asociados<!-- Articoli associati -->
Contiene los *Artículos<!-- Articoli -->* con características similares y listadas en el listado de *Propiedades<!-- Proprietà -->*.
La lista se compone de la siguiente información:
> **Clase<!-- Classe -->**: es la clase del *Artículo<!-- Articolo -->*.
> **Código de artículo<!-- Codice articolo -->**: es el código del *Artículo<!-- Articolo -->*.
> **Descripción de artículo<!-- Descrizione articolo -->**: es la descripción del *Artículo<!-- Articolo -->*.
> **Variante<!-- Variante -->**: es el código de la *Variante de artículo<!-- Variante articolo -->*.
> **Descripción de variante<!-- Descrizione variante -->**: es la descripción de la *Variante de artículo<!-- Variante articolo -->*. La información es de solo lectura.
> **Tipo de declaración<!-- Tipo dichiarazione -->**: es el *Tipo de declaración<!-- Tipo di dichiarazione -->* (de no responsabilidad) que se propondrá en el reporte *Ficha de Producto<!-- Scheda Prodotto -->*.
> **Notas<!-- Note -->**: anotaciones libres.

### Atributos de artículo<!-- Attributi articolo -->
Como alternativa al listado de *Artículos asociados<!-- Articoli associati -->* es posible ingresar características (en formato [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata)) para las cuales las *Propiedades<!-- Proprietà -->* de la *Ficha técnica<!-- Scheda tecnica -->* son válidas.

### Fichas relacionadas<!-- Schede correlate -->
En este listado es posible visualizar las *Fichas técnicas<!-- Schede tecniche -->* duplicadas con trazabilidad<!-- rintracciabilità --> desde la *Ficha<!-- Scheda -->* visualizada.
Mediante doble clic del mouse sobre la fila deseada es posible gestionar la *Ficha técnica<!-- Scheda tecnica -->* seleccionada.

### Revisiones
En este listado es posible visualizar el historial de *Revisiones<!-- Revisioni -->* anteriores a la *Ficha técnica<!-- Schede tecniche -->* visualizada.
Mediante doble clic del mouse sobre la fila deseada es posible gestionar la *Ficha técnica<!-- Scheda tecnica -->* seleccionada.

### Documentos relacionados<!-- Documenti collegati -->
En este listado es posible añadir y consultar eventuales archivos adjuntos; es posible visualizar la vista previa.

Para todo lo no detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).