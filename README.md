# Argent Bank

Argent Bank est une application bancaire permettant aux utilisateurs de gérer leurs comptes en ligne. Cette application est construite avec React et Vite, et utilise Redux pour la gestion de l'état.

## Installation

1. Clonez le dépôt :

```sh
git clone https://github.com/oHminod/argentbank.git
```

2. Accédez au répertoire du projet :

```sh
cd argent-bank
```

3. Installez les dépendances :

```sh
npm install
```

4. La partie back-end de l'application est hébergée sur [ce dépôt](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API). Suivez les instructions pour l'installer et la lancer.

## Utilisation

Pour lancer l'application en mode développement, exécutez la commande suivante :

```sh
npm run dev
```

## Scripts

- `npm run dev` : Lance l'application en mode développement.
- `npm run build` : Crée une version de production de l'application.
- `npm run lint` : Exécute ESLint pour vérifier le code.
- `npm run preview` : Lance un serveur local pour prévisualiser la version de production de l'application.

## Structure du projet

```
public/
    argentBankLogo.png
    ...
src/
    components/
        layout/
            footer.tsx
            layout.tsx
            navBar.tsx
            navMenu.tsx
    hooks/
        useUserData.tsx
    pages/
        homePage/
            components/
                ...
            homePage.tsx
        signinPage/
            signinPage.tsx
        userPage/
            components/
                ...
            userPage.tsx
        errorPage.tsx
    redux/
        actions/
            authActions.ts
        reducers/
            authReducer.ts
            index.ts
        store/
            localStorage.ts
            selectors.ts
            store.ts
    utils/
        data-access-layer.ts
        data.ts
        routes.tsx
        types.ts
    index.css
    main.tsx
    vite-env.d.ts
.gitignore
.nvmrc
eslint.config.js
index.html
package-lock.json
package.json
README.md
vite.config.ts
```

## Dépendances principales

- Vite
- React
- React Router DOM
- React Redux
- Redux Toolkit

## Versions alternatives

- [Version sans typeScript](https://github.com/oHminod/argent-bank)
