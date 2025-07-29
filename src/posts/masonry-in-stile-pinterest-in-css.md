---
title: "Masonry in stile Pinterest in CSS"
description: "Guida alla realizzazione in CSS di un masonry in stile Pinterest."
date: '2025/07/29'
language: IT
categories: 
	- CSS
published: true
---

L’altro giorno stavo scorrendo Pinterest come mio solito per prendere un po’ di ispirazione dai contenuti consigliati. Dopo un po’ di tempo passato a scrollare ho iniziato a fare caso alla griglia che utilizza, ovvero un *masonry* con colonne di larghezza fissa e righe sfasate, mantenendo la proporzione delle immagini originale e il margine sempre uguale, un po’ come nella seguente rappresentazione, fatta a grandi linee

![Esempio di layout masonry](/images/articles/masonry-layout.png)

## Griglie

A primo impatto non sembra esserci nulla di complicato, molto spesso mi è capitato di trovarmi di fronte a layout a griglia e le opzioni per realizzarli sono diverse. 

La prima che mi verrebbe in mente è una soluzione del genere attraverso i CSS Grid:

```css
.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
}
```

Ma il risultato non è esattamente quello che cerchiamo di ottenere, la larghezza fissa delle colonne viene rispettata, mentre invece le righe non rimangono sfasate, l’altezza di ciascuna riga equivale all’altezza massima dell’oggetto più alto contenuto in quella riga. 

Il layout grid è ottimo per definire le relazioni in termini di grandezza, posizione e livelli degli oggetti contenuti, ma in questo caso non è la scelta ideale. 

Con i flexbox il risultato non cambia, infatti l’unica differenza con i grid è il fatto che i primi sono progettati per layout in un’unica dimensione (riga o colonna), ma hanno comportamenti molto simili tra loro.

![Esempio di grid layout con righe ad altezza fissa](/images/articles/grid-layout.png)

## Masonry

Una tecnologia ancora sperimentale è quella dei masonry.

Questa sarebbe la soluzione perfetta, perché è progettata proprio per far sì che un asse abbia la tipica struttura a griglia (spesso le colonne), mentre l’altra una struttura *a mattonelle* in stile Pinterest.

Purtroppo questo sistema non è ancora supportato dai browser.

Puoi leggere maggiori dettagli direttamente dalla bozza delle [specifice del CSS dal CSS Working Group Editor’s Draft](https://drafts.csswg.org/css-grid-3/).

## Colonne

L’opzione più supportata sembra essere quella delle colonne, che utilizza le proprietà `column-count`  o `column-width`.

Questo approccio mantiene le colonne di dimensione fissa, mentre non le righe rimangono sfasate, ottenendo l’effetto desiderato.

```css
<div class="list">
  <div class="content lg">1</div>
  <div class="content lg">2</div>
  <div class="content md">3</div>
  <div class="content sm">4</div>
  <div class="content md">5</div>
  <div class="content sm">6</div>
  <div class="content sm">7</div>
  <div class="content md">8</div>
  <div class="content md">9</div>
  <div class="content md">10</div>
  <div class="content md">11</div>
</div>
```

```css
.masonry {
  column-count: 4;        /* numero di colonne */
  column-gap: 1rem;       /* spazio tra le colonne */
}

.item {
  background: #ddd;
  margin-bottom: 1rem;    /* stesso spazio che c'è tra le colonne */
  display: inline-block;  /* necessario per mantenere il corretto flusso in colonna */
  width: 100%;
  border-radius: 25px;
  padding: 10px;
}
```

Questa è decisamente la soluzione più semplice e supportata su tutti i browser moderni, lascio un collegamento alla [guida di MDN sulle colonne](https://developer.mozilla.org/en-US/docs/Web/CSS/columns) per approfondire i dettagli. Il risultato che otteniamo è qualcosa del genere, che si avvicina di molto a ciò che ci aspettavamo.

![Masonry con l’uso di column-count in CSS.](/images/articles/masonry-with-columns.png)

Masonry con l’uso di column-count in CSS.

## Una piccola nota

Pinterest non usa questo sistema, preferisce usare Javascript.

Il motivo è semplice: il sistema che abbiamo sperimentato ha un difetto piuttosto importante, ovvero che il flusso degli oggetti va dall’alto verso il basso e non riga per riga come una griglia. Questo lo si può notare anche dall’immagine precedente, in cui ho messo i numeri per rappresentare l’ordine degli elementi in HTML, la prima colonna ha i primi due elementi, la seconda i successivi 3 e così via. 

Pinterest invece ha bisogno di avere un ordinamento ben specifico per i propri pin, ovvero le immagini devono essere ordinate da sinistra a destra e in seguito dall’alto verso il basso, in modo tale che come prime vengano mostrati i pin più rilevanti secondo il loro algoritmo di ranking, per questo JavaScript è molto più adatto al loro caso.

## Conclusioni

Il layout a *masonry* è uno degli schemi visivi più usati sul web: è flessibile, esteticamente piacevole e permette di valorizzare contenuti di dimensioni diverse.

Se il tuo obiettivo è realizzarne uno **velocemente e senza complicazioni**, l’uso di `column-count` è la scelta più immediata e compatibile.

Se invece hai bisogno di un controllo totale sull’ordine degli elementi — come fa Pinterest — dovrai integrare **JavaScript** o attendere che il supporto per i **CSS Masonry** diventi uno standard stabile nei browser.

In ogni caso, conoscere queste diverse opzioni ti permetterà di scegliere la soluzione giusta per ogni progetto, bilanciando semplicità, supporto e flessibilità.