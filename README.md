## Conseils/Consignes

- le projet peut être réalisé par 2 au maximum
- le travail devra être rendu via un repo GIT de votre choix
- le projet sera réalisé en vueJS
- pensez composant : on découpe la page en composant, chacun ayant UNE responsabilité
- à chaque modification du repo, pensez à regarder TOUTES les modifications qui peuvent vous donner des idées, indices, solutions etc...

## Sujet du TP

1) Créer une classe `LinkService`, ayant pour méthode `getLinks` qui retourne un tableau de `String`
2) Créer un composant `Navbar` qui affichera une liste de lien : un lien Home, un lien "Teams", un lien "Results"
3) Au clic sur le lien "Teams", ouvrir un onglet contenant un formulaire pour ajouter une Team { id, name }. Le résultat sera affiché dans la console
4) Créer un composant `TeamCard` permettant d'afficher une équipe et l'utilisere pour l'affichage des équipes créees
5) Enrichir une Team avec le champ `description` qui sera à saisir dans le formulaire et à afficher dans le détail d'une Team
