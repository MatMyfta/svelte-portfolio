---
title: "CakePHP: creazione di componenti riutilizzabili"
description: "In CakePHP si può modulare il codice attraverso i component, ovvero porzioni di logica condivisa tra più controller. Utilizzandoli, è possibile alleggerire il codice all’interno di un singolo controller oppure condividere la stessa logica in più controller senza duplicare il codice."
date: '2025/02/26'
language: IT
categories: 
    - CakePHP
Difficulty: Medium
published: true
---

Parliamoci chiaro: a nessuno piace dover gestire migliaia di righe di codice in un unico file. Tuttavia, nelle applicazioni complesse, dividere la logica su più file può risultare difficile. Ad esempio, nei framework basati sul pattern MVC i controller sono incaricati della logica applicativa, ma ben presto rischiano di trasformarsi in file lunghissimi e difficili da gestire.

In CakePHP questo problema si risolve tramite i component, ovvero porzioni di logica condivisa tra più controller. Utilizzandoli, è possibile alleggerire il codice all’interno di un singolo controller oppure condividere la stessa logica in più controller senza duplicare il codice. Ciò comporta un miglioramento della modularità, della mantenibilità e della testabilità del software, caratteristiche essenziali per un’applicazione destinata a evolvere.

A differenza degli helper, che si occupano della presentazione, o dei behavior, che estendono le funzionalità dei modelli, i component operano a livello di controller, offrendo un’interfaccia coerente per operazioni quali autenticazione, logging o integrazione con API esterne.

## Esempio: componente per filtri di ricerca

In questa guida prenderò come esempio pratico la stessa struttura data dal [tutorial CMS](https://book.cakephp.org/5/en/tutorials-and-examples/cms/database.html) dalla documentazione di CakePHP. Prendiamo la stessa struttura del database, poi creiamo i model con i comandi:

```bash
bin/cake bake model Articles
bin/cake bake model Users
```

E creiamo anche i controller con i comandi:

```bash
bin/cake bake controller Articles
bin/cake bake controller Users
```

L’obiettivo è realizzare un component in grado di aggiungere un filtro di ricerca alle query di diversi controller, evitando così la duplicazione del codice.

## Creazione del component

Creiamo per prima cosa un componente generico, chiamato per esempio `FilterComponent` e lo implementiamo in questo modo:

```php
<?php
namespace App\Controller\Component;

use Cake\Controller\Component;
use Cake\ORM\Query;

// src/Controller/Componet/FilterComponent.php
class FilterComponent extends Component
{
    protected $fields = [];

    /**
     * Apply filters to a query.
     *
     * The method loops through each provided filter. If a value is present
     * and a mapping exists in the 'fields' config, it applies a condition to
     * the query. For string values, a partial match (LIKE) is used; for others,
     * an exact match is applied.
     *
     * @param \Cake\ORM\Query $query The query object to filter.
     * @param array $filters Key-value pairs of filters.
     * @return \Cake\ORM\Query
     */
    public function applyFilters(Query $query, array $filters): Query
    {
        foreach ($filters as $key => $value) {
            if (!empty($value) && isset($this->fields[$key])) {
                $column = $this->fields[$key];
                if (!is_numeric($value)) {
                    $query->where([$column . ' LIKE' => '%' . $value . '%']);
                } else {
                    $query->where([$column => $value]);
                }
            }
        }
        return $query;
    }
}
```

Questa classe contiene un array di campi da filtrare e un metodo per applicare i filtri alla query. Il metodo verifica, per ciascun filtro, che il valore non sia vuoto e che il campo sia definito, decidendo poi se effettuare una ricerca parziale (per le stringhe) o esatta (per i numerici). Alla fine viene restituita la query modificata.

Per renderla operativa, occorre estendere questa classe per ciascun controller in cui vogliamo applicare i filtri. Ad esempio, per filtrare le query relative agli articoli e agli utenti:

```php
<?php
namespace App\Controller\Component;

// src/Controller/Componet/ArticlesFilterComponent.php
class ArticlesFilterComponent extends FilterComponent
{
    protected $fields = [
        'id'    => 'Articles.id',
        'title' => 'Articles.title',
        'slug'  => 'Articles.slug',
    ];
}
```

```php
<?php
namespace App\Controller\Component;

// src/Controller/Componet/UsersFilterComponent.php
class UsersFilterComponent extends FilterComponent
{
    protected $fields = [
        'id'      => 'Users.id',
        'email'   => 'Users.email',
        'name'    => 'Users.name',
    ];
}
```

In ogni componente specifico definiamo, nella variabile `$fields`, l’associazione tra il nome dell’input frontend e il nome del campo nel database. In questo modo si stabilisce un legame diretto tra l’interfaccia utente e la struttura dati.

Il vero vantaggio di questa struttura è la possibilità di creare, estendendo la classe base `FilterComponent`, componenti specifici per ciascun controller senza ripetere codice. Se necessario, è anche possibile aggiungere metodi di filtraggio personalizzati, mantenendo sempre la responsabilità del filtraggio all’interno della classe ereditata e lasciando i controller più snelli e gestibili.

## Usare i nuovi component nei controller

Andiamo ora ad aggiungere i nuovi component nei nostri controller. Da adesso prenderemo in considerazione soltanto il controller per gli articoli, ma il procedimento per gli Users (e per qualsiasi altro controller) è lo stesso.

Per prima cosa dobbiamo caricare il component all’interno del controller, per farlo dobbiamo sovrascrivere il metodo `initialize()` in questo modo:

```php
// src/Controller/ArticlesController.php
class ArticlesController extends AppController
{
    public function initialize(): void
    {
        parent::initialize();
        $this->loadComponent('ArticlesFilter');
    }
}
```

CakePHP offre inoltre diverse API per configurare il component usando `loadComponent`  permettendo di fare tutto attraverso `FilterComponent` e rendendo superflua la creazione di classi aggiuntive come `ArticlesFilter`, ma, come anticipato, queste sottoclassi possono tornare utili per avere metodi di filtraggio personalizzati per alcuni controller.

A questo punto aggiungiamo il filtro al metodo `index()`:

```php
// src/Controller/ArticlesController.php
class ArticlesController extends AppController
{

    public function initialize(): void
    {
        parent::initialize();
        $this->loadComponent('ArticlesFilter');
    }

    /**
     * Index method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function index()
    {
        $filters = $this->request->getQueryParams();

        $query = $this->Articles->find();
        $query = $this->ArticlesFilter->applyFilters($query, $filters);

        $articles = $query->all();

        $this->set(compact('articles'));
    }
}
```

I valori dei filtri in questo caso vengono presi dai query parameters e poi passati al metodo `applyFilters`, che automatizzerà la creazione delle condizioni per la query da mandare al database. 

### Implementazione nei template

Per testare il funzionamento del component, lascio un semplice esempio di template `index` con un form di ricerca.

```php
<?php
// templates/Articles/index.php

/**
 * @var \App\View\AppView $this
 * @var iterable<\App\Model\Entity\Article> $articles
 */
?>
<div class="articles index content">
    <?= $this->Form->create(null, ['type' => 'get']) ?>
    <fieldset>
        <legend>Filter Articles</legend>
        <?= $this->Form->control('id', [
                'label' => 'Article ID', 
                'value' => $this->request->getQuery('id')
            ]); ?>
        <?= $this->Form->control('title', [
                'label' => 'Article Title', 
                'value' => $this->request->getQuery('title')
            ]); ?>
    </fieldset>
    <?= $this->Form->button('Filter'); ?>
    <?= $this->Form->end(); ?>
    
    <?= $this->Html->link(__('New Article'), ['action' => 'add'], ['class' => 'button float-right']) ?>
    <h3><?= __('Articles') ?></h3>
    <div class="table-responsive">
        <table>
            <thead>
                <tr>
                    <th><?= __('id') ?></th>
                    <th><?= __('user_id') ?></th>
                    <th><?= __('title') ?></th>
                    <th><?= __('slug') ?></th>
                    <th><?= __('published') ?></th>
                    <th><?= __('created') ?></th>
                    <th><?= __('modified') ?></th>
                    <th class="actions"><?= __('Actions') ?></th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($articles as $article): ?>
                <tr>
                    <td><?= $this->Number->format($article->id) ?></td>
                    <td><?= $article->hasValue('user') ? $this->Html->link($article->user->email, ['controller' => 'Users', 'action' => 'view', $article->user->id]) : '' ?></td>
                    <td><?= h($article->title) ?></td>
                    <td><?= h($article->slug) ?></td>
                    <td><?= h($article->published) ?></td>
                    <td><?= h($article->created) ?></td>
                    <td><?= h($article->modified) ?></td>
                    <td class="actions">
                        <?= $this->Html->link(__('View'), ['action' => 'view', $article->id]) ?>
                        <?= $this->Html->link(__('Edit'), ['action' => 'edit', $article->id]) ?>
                        <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $article->id], ['confirm' => __('Are you sure you want to delete # {0}?', $article->id)]) ?>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</div>
```

Nei template è importante notare che il nome degli input deve coincidere con le chiavi all’interno di `ArticlesFilterComponent`, perché altrimenti non viene trovata alcuna mappatura con il database.

## Casi d’uso

Il componente illustrato è solo un esempio dell’utilizzo dei component in CakePHP. Pur essendo possibile utilizzare logiche simili come behavior (data la stretta integrazione con i modelli), i component sono pensati per gestire la logica legata al ciclo di vita della richiesta HTTP e che si applica a più controller.

Tra i casi d’uso più comuni troviamo:

- **Gestione dell’autenticazione e dell’autorizzazione:** Verificare, per ogni richiesta, se l’utente dispone delle autorizzazioni necessarie.
- **Interazione con API esterne:** I component fungono da interfaccia tra i controller e le API, semplificando la loro integrazione.
- **Gestione dei pagamenti:** Coordina redirezioni e integrazioni con sistemi di pagamento (come PayPal), mantenendo il controller snello.

## Test

L’utilizzo dei component rende il codice più modulare e separa le responsabilità dal controller, di conseguenza si vengono a creare tante piccole classi differenti, che sono anche più semplici da testare attraverso gli unit test. Nei test è possibile creare un dummy controller con request e response e passare l’oggetto al `ComponentRegistry` per istanziare un componente. Ad esempio in questo modo:

```php
$request = new ServerRequest();
$response = new Response();
$controller = new Controller($request, $response);
$registry = new ComponentRegistry($controller);
$component = new MyCustomComponent($registry);
```

Una buona pratica per testare componenti che si interfacciano ad API esterne è attraverso l’utilizzo dei mock, in modo da fingere l’interazione con l’esterno e testare il component con diversi input.

## Conclusione

In conclusione, l’adozione dei component in CakePHP è una strategia vincente per sviluppare applicazioni modulari, manutenibili ed estensibili. Separando la logica di filtraggio, autenticazione, logging e altre operazioni comuni dai controller, si riduce la duplicazione del codice e si centralizzano le funzionalità. Questo approccio non solo semplifica lo sviluppo e la manutenzione, ma migliora anche la testabilità e la qualità complessiva del software. In un contesto di progetti complessi, l’utilizzo di component ben strutturati consente un’evoluzione ordinata del codice, garantendo scalabilità e robustezza nel tempo.