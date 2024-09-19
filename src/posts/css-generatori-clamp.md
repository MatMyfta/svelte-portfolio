---
title: "CSS: generatori di clamp()"
description: "A cosa serve la funzione clamp e come creare un generatore"
date: '2024/09/19'
language: Italiano
categories:
    - CSS 
    - Javascript 
    - Tool
published: true
image: /images/posts/css-generatori-clamp.webp
imagealt: "CSS: generatori di clamp"
---

La funzione `clamp()` in CSS è uno strumento molto potente per creare dei layout responsive. La sua funzione è quella di impostare un valore che scala autonomamente al variare del viewport.

La sintassi è molto semplice:

```css
clamp(MIN, VAL, MAX)
```

In cui:

- **MIN**: è il valore minimo della proprietà
- **VAL**: è il valore ideale della proprietà (quello che permette di scalare)
- **MAX**: è il valore massimo della proprietà

Il beneficio principale di questa funzione, è che **ci permette di non utilizzare tante media query** per cambiare il valore della proprietà. Ad esempio, per scalare la grandezza di un font possiamo usare la funzione clamp in questo modo:

```css
font-size: clamp(1rem, 2.5vw, 2rem);
```

In questo esempio, la dimensione del font varierà in base a `2.5vw`, cioè proporzionalmente alla larghezza del viewport, ma rimarrà sempre compresa tra un minimo di `1rem` e un massimo di `2rem`.

Tuttavia, sorge un nuovo problema: **in questo modo non è possibile controllare su quali dispositivi il valore cambia**, il che potrebbe indurci a tornare all'uso delle media query.

## Generatori di clamp()

Per risolvere questo problema, è possibile trovare online numerosi generatori di `clamp()` che permettono di impostare un valore minimo, un valore massimo e un range di dimensioni del viewport. In questo modo si può controllare quando il valore inizierà a cambiare e quando smetterà. I dispositivi con dimensioni inferiori alla minima impostata visualizzeranno sempre il valore minimo, quelli con dimensioni superiori alla massima visualizzeranno sempre il valore massimo, mentre quelli intermedi vedranno un valore proporzionato alla larghezza del loro dispositivo.

Tuttavia ho sempre avuto un problema a usare i generatori online già presenti: non usano la funzione `calc()` per sommare i valori generati, dunque ho deciso di implementare una mia versione in cui uso la sintassi che preferisco io.

I generatori seguono il seguente procedimento.

### 1. Calcolare la pendenza

La pendenza indica quanto velocemente scala il valore relativamente alla larghezza del dispositivo. Si può calcolare con la seguente formula:

$$
S = \frac {V_\text{max} - V_\text{min}} {v_\text{max} - v_{min}}
$$

in cui $V$ è il valore, mentre $v$ è la misura del dispositivo (entrambe in `rem`).

### 2. Calcolare l’intersezione

L’intersezione è un valore cruciale per il calcolo della porzione dinamica (variabile) della funzione. Viene calcolata con la formula:

$$
B = V_\text{min} - (v_\text{min} \cdot S)
$$

### 3. Il valore dinamico della funzione

Una volta calcolate la pendenza ($S$) e l’intersezione ($B$), la funzione `clamp` includerà i valori in questo modo:

$$
\text{clamp(}V_\text{min} \text{rem}, (B \text{rem} + (S \cdot 100) \text{vw}), V_\text{max} \text{rem})
$$

## Risultato finale

Visto in formule può sembrare complicato (come piace a me), ma tradotto in codice diventa estremamente banale. Ho pubblicato una <a href="https://github.com/MatMyfta/clamp-generator" target="_blank">repository su github</a> in cui ho messo il codice sorgente di una mia implementazione.

Più avanti potrei anche hostare l’app, ma al momento non è in programma. Inoltre attualmente funziona anche staticamente, non c’è bisogno di mettere su alcun server per provarla, dato che è fatta in HTML, CSS (con Bootstrap) e vanilla Javascript.