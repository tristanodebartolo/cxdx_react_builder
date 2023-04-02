## Prérequis

- nodeJs
  - https://nodejs.org/en
- npm
  - `npm install -g npm`

## Creation du module

> cxdx_react_builder/cxdx_react_builder.info.yml

```yml
name: 'CxDx React Builder'
type: module
description: 'ReactJs with webpack bloc.'
core_version_requirement: ^9 || ^10
package: 'cxdx'
dependencies:
  - block
```

## Déclaration du template du bloc

> cxdx_react_builder/cxdx_react_builder.module

```php
<?php

/**
 * Implements hook_theme().
 */
function cxdx_react_builder_theme($existing, $type, $theme, $path) {
  return [
    'react_js_block' => [
      'variables' => [
        'status' => NULL,
      ],
    ],
  ];
}
```

> cxdx_react_builder/templates/react-js-block.html.twig

```html
{% if status %}
  <div id="cx-react-app" class="clearfix">Veuillez patienter durant le chargement...</div>
{% else %}
  <div id="cx-react-app" class="clearfix">
    Quelque chose semble dysfonctionner.
  </div>
{% endif %}
```

## Creation du bloc

> cxdx_react_builder/src/Plugin/Block/ReactJsBlock.php

```php
<?php

namespace Drupal\cxdx_react_builder\Plugin\Block;

use Drupal\Core\Access\AccessResult;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Block\BlockPluginInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Session\AccountInterface;

/**
 * Provides a 'ReactJs' Block.
 *
 * @Block(
 *   id = "react_js_block",
 *   admin_label = @Translation("ReactJs Block"),
 *   category = @Translation("Cxdx"),
 * )
 */
class ReactJsBlock extends BlockBase implements BlockPluginInterface
{
  /**
   * {@inheritdoc}
   */
  public function build()
  {
    $build = [
      '#theme' => 'react_js_block',
      '#status' => TRUE,
      '#attached' => [
        'library' => [
          'cxdx_react_builder/react-builder',
        ],
      ],
    ];
    return $build;
  }

  /**
   * {@inheritdoc}
   * return 0 If you want to disable caching for this block.
   */
  public function getCacheMaxAge()
  {
    return 0;
  }

  /**
   * {@inheritdoc}
   */
  public function access(AccountInterface $account, $return_as_object = FALSE)
  {
    return AccessResult::allowedIfHasPermission($account, 'access content');
  }

}
```
## La bibliothèque des styles

> cxdx_react_builder/cxdx_react_builder.libraries.yml

```yml
react-builder:
  version: VERSION
  js:
    reactjs/dist/front.bundle.js: {preprocess: false}
  dependencies:
    - core/drupal
    - core/drupal.announce
    - core/jquery
    - core/once
```

## Init React projet

`npm init`
```
package name: (reactjs) cxdx_react
version: (1.0.0)
description: A reactjs Apllication in a module Drupal 10
entry point: (webpack.config.js)
test command:
git repository:
keywords:
author:
license: (ISC)
Install Reactjs
```

## Installtion de Reactjs

```
npm install react react-app-polyfill react-dom axios core-js
```

## Installation des outils de développement

Nous pouvons maintenant installer les outils de developpement.

- @babel/core
- @babel/plugin-proposal-class-properties
- @babel/plugin-proposal-decorators
- @babel/plugin-proposal-private-methods
- @babel/plugin-syntax-dynamic-import
- @babel/plugin-transform-runtime
- @babel/preset-env
- @babel/preset-react
- @babel/preset-typescript
- @babel/runtime
- autoprefixer
- babel-loader
- css-loader
- file-loader
- node-sass
- sass-loader
- style-loader
- webpack
- webpack-cli
- webpack-dev-server
```
npm install --save-dev @babel/core @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @babel/plugin-proposal-private-methods @babel/plugin-syntax-dynamic-import @babel/plugin-transform-runtime @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/runtime autoprefixer babel-loader css-loader file-loader node-sass sass-loader style-loader webpack webpack-cli webpack-dev-server
```

### scripts

Dans le fichier package.json, nous allons définir les trois scripts qui vont nous permettre d'excecuter les commandes npm run.

```json
"scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "watch": "webpack  --colors --debug --display-chunk -w --mode development"
  },
```

- Le script "dev" exécute Webpack en mode développement, le code généré est destiné à être utilisé lors du développement et inclut des informations de débogage.

- Le script "build" exécute Webpack en mode production, le code généré est optimisé pour la performance, mais peut inclure moins d'informations de débogage.

- Le script "watch" exécute Webpack en mode développement avec l'option de surveillance (-w). Cela signifie que Webpack surveillera les fichiers sources pour les modifications et régénérera automatiquement le code généré chaque fois qu'un fichier est modifié.

Puis, toujours dans le fichier `package.json`, nous allons ajouter l'objet "browserslist", à la suite des instructions :

```json
 "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all",
      "ie >= 9"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version",
      "ie >= 9"
    ]
  }
```

L'objet "browserslist" est utilisé pour définir les navigateurs que l'application va prendre en charge. Il est utilisé par des outils tels que Autoprefixer et Babel pour générer le code CSS et JavaScript compatible avec tous les navigateurs.

###

```json
{
  "name": "cxdx_react",
  "version": "1.0.0",
  "description": "A reactjs application in a module Drupal 10",
  "main": "index.js",
  "scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "watch": "webpack  --colors --debug --display-chunk -w --mode development"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^1.3.4",
    "core-js": "^3.29.1",
    "react": "^18.2.0",
    "react-app-polyfill": "^3.0.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@babel/core": "^7.21.4",
    "@babel/plugin-proposal-class-properties": "^7.18.6",
    "@babel/plugin-proposal-decorators": "^7.21.0",
    "@babel/plugin-proposal-private-methods": "^7.18.6",
    "@babel/plugin-syntax-dynamic-import": "^7.8.3",
    "@babel/plugin-transform-runtime": "^7.21.4",
    "@babel/preset-env": "^7.21.4",
    "@babel/preset-react": "^7.18.6",
    "@babel/preset-typescript": "^7.21.4",
    "@babel/runtime": "^7.21.0",
    "autoprefixer": "^10.4.14",
    "babel-loader": "^9.1.2",
    "css-loader": "^6.7.3",
    "file-loader": "^6.2.0",
    "node-sass": "^8.0.0",
    "sass-loader": "^13.2.2",
    "style-loader": "^3.3.2",
    "webpack": "^5.77.0",
    "webpack-cli": "^5.0.1",
    "webpack-dev-server": "^4.13.2"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all",
      "ie >= 9"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version",
      "ie >= 9"
    ]
  }
}
```

## Webpack configurations

Enfin, nous allons créer, à la racine du projet, le fichier `webpack.config.js` dans lequel nous allons ajouter les lignes suivantes :

```js

// Le code commence par inclure le module "path",
// qui fournit des utilitaires pour travailler avec
// les chemins de fichiers et de répertoires.
var path = require('path');

// Ensuite, il définit deux variables, "BUILD_DIR" et "APP_DIR",
// qui représentent les chemins des répertoires de sortie (où les fichiers générés
// par Webpack seront placés) et d'entrée (où se trouvent les fichiers source), respectivement.
var BUILD_DIR = path.join(__dirname, 'dist');
var APP_DIR = path.join(__dirname, 'src');

// Le code définit ensuite un objet de configuration pour Webpack,
// avec plusieurs propriétés importantes :
var config = {
  // "mode": cela indique à Webpack le mode dans lequel il doit fonctionner.
  // Dans ce cas, le mode est "development", ce qui signifie que
  // les fichiers générés seront optimisés pour le développement
  // (par exemple, avec des informations de débogage supplémentaires).
  // Il peut également être défini sur "production" pour générer
  // des fichiers optimisés pour la production.
  mode: 'development', // development // production
  // "entry": cela définit les points d'entrée de l'application,
  // c'est-à-dire les fichiers source qui doivent être utilisés
  // pour générer le bundle final. Dans ce cas,
  // il y a deux points d'entrée : "front.js" et "back.js".
  entry: {
    'front': APP_DIR + '/front.js',
    // 'back': APP_DIR + '/back.js',
  },
  // "output": cela définit où les fichiers générés par Webpack doivent être placés.
  // Dans ce cas, les fichiers seront placés dans le répertoire "dist"
  // (défini par la variable "BUILD_DIR"),
  // avec un nom de fichier qui correspond au nom du point d'entrée ("[name].bundle.js").
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js'
  },
  // "module": cela définit les règles de chargement pour les différents types de fichiers.
  // Dans ce cas, il y a quatre règles :
  module: {
    rules: [
      // La première règle utilise Babel pour transpiler les fichiers JavaScript (avec l'extension ".js" ou ".mjs"),
      // en utilisant les presets "@babel/preset-env", "@babel/preset-react" et "@babel/preset-typescript",
      // ainsi que plusieurs plugins.
      // La transpilation est effectuée uniquement pour les fichiers qui ne se trouvent pas dans le répertoire "node_modules".
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets:  [
              ['@babel/preset-env',
                {
                  "corejs": { "version":3 },
                  "useBuiltIns": "usage",
                  "targets": {
                    "edge": "17",
                    "firefox": "60",
                    "chrome": "67",
                    "safari": "11.1",
                    "ie": "9"
                  }
                }
              ],
              '@babel/preset-react',
              '@babel/preset-typescript'
            ],
            plugins : [
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              '@babel/plugin-syntax-dynamic-import',
              ['@babel/plugin-proposal-class-properties', { "loose": true }],
              ["@babel/plugin-proposal-private-methods", { "loose": true }],
              ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
              ["@babel/transform-runtime"]
            ]
          }
        }
      },
      // La deuxième règle utilise les loaders "style-loader"
      // et "css-loader" pour charger les fichiers CSS (avec l'extension ".css").
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // La troisième règle utilise les loaders "style-loader",
      // "css-loader" et "sass-loader" pour charger les fichiers SCSS (avec l'extension ".scss").
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // La quatrième règle utilise le loader "file-loader"
      // pour charger les fichiers d'image (avec les extensions ".jpg", ".jpeg", ".png", ".gif" ou ".svg").

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/img/[name].[ext]',
            },
          },
        ],
      },
    ]
  }
}
// Enfin, le code exporte l'objet de configuration "config" pour être utilisé par Webpack.
module.exports = config;
```

## Fichiers

```bach
/reactjs
  ├── dist
  ├── package.json
  ├── webpack.config.js
  └── src
        ├── front.js
        └── Front
             └── Components
                    └── FrontContainer
                          ├── FrontContainer.js
                          └── FrontContainer.scss
```

Voici ce que chaque dossier et fichier représente :

- **dist** : le dossier où sera généré le code compilé..
- **package.json** : Le fichier contenant des informations sur le projet, y compris les dépendances et les scripts à exécuter.
- **webpack.config.js** : Le fichier de configuration pour Webpack, un outil de build pour compiler le code JavaScript, CSS et d'autres ressources en un ou plusieurs fichiers.
- **src** : le dossier où se trouve tout le code source du projet.
- **front.js** : le point d'entrée de l'application, qui importe et monte l'application React.
- **Front** : le dossier contenant tous les composants React de l'application.
- **Components** : Le dossier contenant les composants réutilisables de l'application.
- **FrontContainer** : Le composant React qui contient la logique métier de la page d'accueil.
- **FrontContainer.js** : le code JavaScript du composant FrontContainer.
- **FrontContainer.scss** : les styles Sass du composant FrontContainer.

### index
> cxdx_react_builder/reactjs/src/front.js

```js
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import FrontContainer from './Front/Components/FrontContainer/FrontContainer';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('cx-react-app');
const root = createRoot(container);
root.render(<FrontContainer />);
```

### FrontContainer component
> cxdx_react_builder/reactjs/src/Front/Components/FrontContainer/FrontContainer.js

```js
import React, {useContext} from 'react'
// Styles
import './FrontContainer.scss'
const FrontContainer = (props) => {
  return (
    <div className={`cxdx-wrapper`}>Hello World by Reactjs</div>
  )
}
export default FrontContainer
```

### FrontContainer Css

> cxdx_react_builder/reactjs/src/Front/Components/FrontContainer/FrontContainer.scss

Ajoutons également le fichier FrontContainer.scss pour les styles.

## Compilation

On peut maintenant tester la compîlation

```
npm run dev
```
