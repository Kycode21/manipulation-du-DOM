# 📝 Liste de tâches (Manipulation du DOM)

Bienvenue ! Dans cet exercice, tu vas donner vie à une petite application de **liste de tâches** en utilisant uniquement du **JavaScript** et le **DOM**.

L'interface (HTML + Tailwind) est déjà prête dans le fichier `index-tailwind.html`.
Ton travail : écrire tout le JavaScript dans un fichier **`script.js`** (déjà relié en bas de la page).

---

## 🎯 Ce que ton application doit faire

### 1. Ajouter une tâche
- Quand l'utilisateur écrit une tâche dans le champ `#input-tache` puis valide le formulaire `#form-tache` (bouton **Ajouter** ou touche **Entrée**), une nouvelle tâche apparaît dans la liste `#liste-taches`.
- La page **ne doit pas se recharger**.
- Une tâche vide (ou composée uniquement d'espaces) ne doit **pas** être ajoutée.
- Après l'ajout, le champ se vide et garde le focus.

> 💡 Un modèle de tâche est fourni dans la balise `<template id="template-tache">`. Utilise-le pour créer chaque nouvelle tâche plutôt que d'écrire le HTML à la main.

### 2. Supprimer une tâche
- Chaque tâche possède un bouton **✕** (`.btn-supprimer`).
- Un clic sur ce bouton supprime **uniquement cette tâche** de la liste.

### 3. Supprimer toutes les tâches
- Le bouton en bas de la carte (`#btn-vider-terminees`) doit **vider entièrement la liste**.
- Tu peux renommer le texte du bouton (par exemple « Tout supprimer ») pour qu'il corresponde à son action.

### 4. Afficher le nombre de tâches
- L'élément `#nb-taches` doit toujours afficher le **nombre de tâches présentes** dans la liste.
- Ce nombre doit se mettre à jour **à chaque** ajout, suppression ou vidage de la liste.

## 🚀 Comment travailler

1. **Fork** ce dépôt sur ton propre compte GitHub.
2. **Clone** ton fork sur ton ordinateur.
3. Crée le fichier `script.js` à la racine du projet et code les fonctionnalités.
4. Ouvre `index-tailwind.html` dans ton navigateur pour tester (pense à la console : `F12`).
5. Fais des **commits réguliers** avec des messages clairs, par exemple :
   - `feat: ajout d'une tâche`
   - `feat: suppression d'une tâche`
   - `feat: compteur de tâches`
6. **Push** ton travail sur ton fork.


## 📬 Rendre ton travail

Une fois terminé, tu dois **m'envoyer ton résultat directement depuis GitHub**, de façon à ce que je puisse voir et commenter ton code depuis **mon dépôt d'origine**.

Pas d'envoi par e-mail,Slack, WhatsApp ou fichier zip 🙂 : c'est à toi de **découvrir comment GitHub permet de proposer ses modifications au propriétaire d'un dépôt que l'on a forké**. Fouille l'interface de ton fork, lis la documentation GitHub… ça fait partie de l'exercice !

Bon courage et amuse-toi bien ! 💪
