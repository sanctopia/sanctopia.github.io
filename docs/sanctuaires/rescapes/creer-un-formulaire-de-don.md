---
sidebar_position: 2
slug: creer-un-formulaire-de-don
tags:
  - Recapés
  - HelloAsso
---

# 📋 Créer une campagne de don pour un individu

## 🧑‍🏫 Comment ça marche ?

Pour que Sanctopia puisse reconnaître les dons faits à travers sa plateforme, et pour récompenser les donateurs, il est nécessaire que les formulaires contiennent des **informations complémentaires**.

Lorsqu'un donateur souhaite faire un don, Sanctopia génère automatiquement un **code PIN** que le donateur devra ajouter au formulaire de don.

Pour qu'un formulaire de don soit compatible avec Sanctopia, il est nécessaire que les formulaires de dons puissent permettre aux donateurs d'entrer leur code PIN qui leur sera donné lors de la complétion du formulaire HelloAsso.

:::danger
Sans la possibilité d'entrer leur **Code PIN Sanctopia**, il nous sera impossible de lier les dons à notre plateforme.
:::

## ✏️ Ajouter un champ **Code PIN Sanctopia** à vos formulaires

:::warning
Une fois que vous créez une campagne de don avec le champ **Code PIN Sanctopia**, il est possible qu'HelloAsso ajoute automatiquement ce champ à la prochaine campagne de don que vous créerez. Assurez-vous de supprimer ce champ quand vous créez de nouvelles campagnes de dons qui seront utilisées en dehors de la plateforme Sanctopia.
:::

### Accéder à une campagne de don

1. Connectez-vous à votre compte [HelloAsso](https://auth.helloasso.com/connexion?redirect=https://www.helloasso.com/utilisateur/redirection-backoffice&back=https://www.helloasso.com/).

1. Dans votre compte administrateur, utilisez le menu à gauche pour naviguer vers la page **Mes dons**

   ![Mes dons](./img/HelloAsso-Mes-dons.png)

1. Cliquez sur **Créer une campagne de don** (ou **Administrer** sur une campagne de don existante)

   ![Mes dons](./img/HelloAsso-Mes-dons2.png)

## Informations générales

1. Nommez le formulaire de don
   :::tip
   **Nom public**

   Nous recommandons aux sanctuaires de nommer le formulaire pour leur rescapé formulaire `Je deviens gardien-ne de <nom du rescapé>`. En utilisant le même langage, l'expérience utilisateur est claire.

   **Nom privé**

   Vous êtes libre de choisir le nom privé de vos campagnes de dons, mais nous recommandons que vous précisiez que c'est pour Sanctopia pour vous aider à différencier entre les campagnes propres à Sanctopia, et les autres qui seront utilisées en dehors de Sanctopia.
   :::
   ![Nom du formulaire](./img/HelloAsso-Nom-du-formulaire.png)

1. Cliquez sur **Enregistrer et passer à l'étape suivante**

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

### Personnalisation

#### Description détaillée

Pour améliorer l'expérience utilisateur, il est recommandé d'ajouter une description détaillée au formulaire pour réexpliquer comment ils deviennent gardien·ne d'un individu.

```
Devenez gardien·ne de [Nom de l'individu] en faisant un don (min. 5 €).
[Nom de l'individu] sera ajouté à votre liste de protégé·es.
Si vous faites un don mensuel, vous deviendrez un·e gardien·ne en or du sanctuaire.
```

![Description détaillée](./img/HelloAsso-Description-detaillee.png)

#### Couleur principale

Sanctopia souhaite offrir une expérience utilisateur unique et intuitive. Lors de la création de campagnes de dons qui seront exclusivement utilisées sur Sanctopia, nous demandons aux sanctuaires que leur formulaire ait la même couleur que le thème utilisé sur notre plateforme :

```
a65d58
```

![Couleur principale](./img/HelloAsso-Couleur-principale.png)

#### Vignette

Pour assurer une expérience utilisateur agréable, il est recommandé d'utiliser la même photo que celle du profil de l'individu comme vignette. Ça permet à l'utilisateur d'être rassuré que l'individu qui recevra le don est bien celui qu'il/elle a choisi.

![Vignette](./img/HelloAsso-Vignette.png)

## Prêt à publier votre formulaire ?

### Choisissez qui peut accéder à votre formulaire

1. Sélectionnez l'option **Privé : Seules les personnes disposant de l'URL du formulaire peuvent y accéder et effectuer un paiement.** 

   ![Option privé](./img/HelloAsso-Pret-a-publier-votre-formulaire-2.png)

   :::warning
   Si vous avez imposé le Code PIN Sanctopia, ce qui est recommandé, il est important que ce formulaire soit privé pour qu'il ne puisse être utilisé que sur Sanctopia.
   :::

1. Cliquez sur **Publier mon formulaire**

## Prêt pour l'intégration avec Sanctopia

Maintenant que vous avez une campagne de don qui n'accepte que des dons mensuels, vous êtes prêt à connecter ce formulaire à votre budget mensuel sur Sanctopia !