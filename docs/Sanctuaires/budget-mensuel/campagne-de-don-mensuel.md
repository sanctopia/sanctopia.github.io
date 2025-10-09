---
sidebar_position: 1
tags:
  - HelloAsso
---

# 📋 Créer une campagne de don mensuel sur HelloAsso

HelloAsso vous permet de créer une campagne de don qui accepte exclusivement des dons mensuels. Suivez les étapes suivantes pour en mettre une en place, que vous pourrez ensuite lier à votre budget mensuel pour inciter les donateurs à vous faire un don mensuel.

## Créer une nouvelle campagne de don

1. Connectez-vous à votre compte [HelloAsso](https://auth.helloasso.com/connexion?redirect=https://www.helloasso.com/utilisateur/redirection-backoffice&back=https://www.helloasso.com/).

1. Dans votre compte administrateur, utilisez le menu à gauche pour naviguer vers la page **Mes dons**

   ![Mes dons](./img/HelloAsso-Mes-dons.png)

1. Cliquez sur **Créer une campagne de don**

   ![Mes dons](./img/HelloAsso-Mes-dons2.png)

## Informations générales

1. Nommez le formulaire de don
   :::tip
   **Nom public**

   Nous recommandons aux sanctuaires de nommer ce formulaire `Devenez un gardien en or` car les donateurs qui mettent en place un don mensuel via Sanctopia gagneront le titre de gardien en or du sanctuaire. En utilisant le même langage, l'expérience utilisateur est claire.

   **Nom privé**

   Vous êtes libre de choisir le nom privé de vos campagnes de dons, mais nous recommandons que vous précisiez que c'est pour Sanctopia pour vous aider à différencier entre les campagnes propres à Sanctopia, et les autres qui seront utilisées en dehors de Sanctopia.
   :::
   ![Nom du formulaire](./img/HelloAsso-Nom-du-formulaire.png)

1. Cliquez sur **Enregistrer et passer à l'étape suivante**

## Montants des dons

1. Supprimez tous les dons ponctuels dans la liste nommée **Dons ponctuels** en cliquant sur les 3 petits points `...` qui se trouvent à droite de chacun des montants, puis en cliquant sur **Supprimer**

   ![Supprimer les dons ponctuels](./img/HelloAsso-Supprimer-dons-ponctuels.png)

   Confirmez pour chaque don ponctuel en cliquant sur **Oui, je supprime**
   ![Confirmer la suppression d'un don ponctuel](./img/HelloAsso-Confirmer-supprimer-dons-ponctuels.png)


   :::warning
   Au moment où nous écrivons notre documentation, il y a un bug lorsqu'il n'y a plus que quelques montants dans la liste de dons ponctuels. Le menu est coupé et le bouton **Supprimer** est caché. Il suffit de faire défiler vers le bas pour faire apparaître le reste du menu

   ![Bug supprimer les dons ponctuels](./img/HelloAsso-Bug-supprimer-dons-ponctuels.png)
   :::

1. Assurez-vous que l'option **Dons ponctuels** est décochée dans les **Paramètres** si vous souhaitez **Autoriser la saisie d'un montant libre sur votre campagne**

   ![Paramètres des montants](./img/HelloAsso-Montants-parametres.png)

:::danger
Avant d'appuyer sur **Enregistrer et passer à l'étape suivante** sur la page **Montants des dons**, assurez-vous que vous avez bien :

- [ ] Supprimé tous les dons ponctuels
- [ ] Décoché l'option **Dons ponctuels** dans les paramètres

Nous avons eu des problèmes lorsque nous avons essayé de changer ces options dans des campagnes de dons existantes, donc une fois sauvegardé, il est possible que vous ne soyez pas capable de faire en sorte que votre campagne autorise exclusivement les dons mensuels
:::

### Informations complémentaires

1. Naviguez dans la section **Informations complémentaires**

   ![Informations complémentaires](./img/HelloAsso-Informations-complementaires.png)

1. Cliquez sur **Ajouter une information** dans la section **Informations sur vos donateurs**

   ![Ajouter une information](./img/HelloAsso-Ajouter-une-information.png)

1. Remplissez le formulaire avec les informations suivantes et cliquez sur **Ajouter** :

   - Intitulé de l'information : **Code PIN Sanctopia**
   - Type de réponse souhaitée : **Texte court (250 caractères)**
   - Information rattachée à :
     - **Mes tarifs**
       - **Tous les tarifs**
   - Statut : **✓ Information obligatoire** _(Doit être cochée)_

   ![Nouvelle information](./img/HelloAsso-Nouvelle-information.png)

   :::warning
   Il est important que ce formulaire soit rempli exactement comme ceci. Si votre formulaire est utilisé autre part que sur Sanctopia, il est recommandé de **décocher le statut Information obligatoire**.
   :::

   :::tip
   Il est recommandé de créer des campagnes de dons qui seront uniques à Sanctopia et qui resteront privées pour qu'elles ne soient pas listées sur votre page HelloAsso et éviter leur partage en dehors de Sanctopia.
   :::

## Personnalisation

### Couleur principale

1. Sanctopia souhaite offrir une expérience utilisateur unique et intuitive. Lors de la création de campagnes de dons qui seront exclusivement utilisées sur Sanctopia, nous demandons aux sanctuaires que leur formulaire ait la même couleur que le thème utilisé sur notre plateforme :
   ```
   a65d58
   ```

   ![Couleur principale](./img/HelloAsso-Couleur-principale.png)

1. Cliquez sur **Publier maintenant**

## Prêt à publier votre formulaire ?

### Choisissez le design de votre formulaire

1. HelloAsso va vous demander quel design vous voulez pour votre formulaire. Choisissez l'option **Conserver le formulaire actuel**. Cliquez sur **Enregistrer**
   ![Option conserver le formulaire actuel](./img/HelloAsso-Pret-a-publier-votre-formulaire-1.png)
   
   :::danger
   Sanctopia n'est pas compatible avec le nouveau design des formulaire HelloAsso.
   :::

### Choisissez qui peut accéder à votre formulaire

1. Sélectionnez l'option **Privé : Seules les personnes disposant de l'URL du formulaire peuvent y accéder et effectuer un paiement.** 

   ![Option privé](./img/HelloAsso-Pret-a-publier-votre-formulaire-2.png)

   :::warning
   Si vous avez imposé le Code PIN Sanctopia, ce qui est recommandé, il est important que ce formulaire soit privé pour qu'il ne puisse être utilisé que sur Sanctopia.
   :::

1. Cliquez sur **Publier mon formulaire**

## Prêt pour l'intégration avec Sanctopia

Maintenant que vous avez une campagne de don qui n'accepte que des dons mensuels, vous êtes prêt à connecter ce formulaire à votre budget mensuel sur Sanctopia !