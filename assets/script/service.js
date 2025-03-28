const nature = document.querySelector("#nature");
const evenement = document.querySelector("#evenement");
const portrait = document.querySelector("#portrait");
const retouche = document.querySelector("#retouche");

nature.addEventListener('click', () => {
    desc = document.querySelector("#natureDesc");
    if (desc) {
        nature.removeChild(desc);
    } else {
        let desc = document.createElement('p');
        desc.setAttribute('id', 'natureDesc');
        desc.innerText = "La photographie de la nature capture la beauté du monde sauvage à travers des images de paysages, de flore et de faune. Ce service s'adresse aux amateurs de nature, aux entreprises ou aux organismes cherchant à valoriser l'environnement. Il permet d'immortaliser des instants uniques, de sensibiliser à la préservation des écosystèmes ou d'illustrer divers projets. Grâce à une maîtrise de la lumière, du cadrage et des techniques photographiques, le photographe met en valeur la diversité et l’harmonie de la nature. Que ce soit pour des impressions artistiques, des supports de communication ou des reportages, la photographie de nature sublime le vivant.";
        nature.appendChild(desc);
    }
})

evenement.addEventListener('click', () => {
    desc = document.querySelector("#evenementDesc");
    if (desc) {
        evenement.removeChild(desc);
    } else {
        let desc = document.createElement('p');
        desc.setAttribute('id', 'evenementDesc');
        desc.innerText = "La photographie d’événements immortalise les moments marquants de mariages, anniversaires, conférences ou spectacles. Ce service vise à capturer l’ambiance et les émotions à travers des clichés naturels et spontanés. Grâce à un œil attentif et une maîtrise des techniques de prise de vue, le photographe met en valeur chaque détail important. Idéal pour les particuliers et les entreprises souhaitant conserver un souvenir authentique ou enrichir leur communication visuelle, la photographie d’événements garantit des images de qualité, prêtes à être partagées ou imprimées pour revivre ces instants précieux.";
        evenement.appendChild(desc);
    }
})

portrait.addEventListener('click', () => {
    desc = document.querySelector("#portraitDesc");
    if (desc) {
        portrait.removeChild(desc);
    } else {
        let desc = document.createElement('p');
        desc.setAttribute('id', 'portraitDesc');
        desc.innerText = "La photographie de portraits met en lumière la personnalité et l’expression d’un individu à travers des prises de vue artistiques et soignées. Destiné aux professionnels, aux artistes ou aux particuliers, ce service propose des portraits en studio, en extérieur ou en situation de travail. Un éclairage maîtrisé, un cadrage précis et une ambiance adaptée permettent de capturer des images naturelles et valorisantes. Idéal pour des profils professionnels, des books artistiques ou des souvenirs personnels, la photographie de portraits sublime chaque modèle en révélant son unicité et son authenticité.";
        portrait.appendChild(desc);
    }
})

retouche.addEventListener('click', () => {
    desc = document.querySelector("#retoucheDesc");
    if (desc) {
        retouche.removeChild(desc);
    } else {
        let desc = document.createElement('p');
        desc.setAttribute('id', 'retoucheDesc');
        desc.innerText = "La retouche photo améliore et perfectionne les images en ajustant couleurs, contrastes, luminosité ou en supprimant des imperfections. Ce service s’adresse aux particuliers et aux professionnels souhaitant sublimer leurs clichés pour des supports imprimés ou numériques. De la correction de base aux retouches avancées (montage, restauration d’anciennes photos, effets créatifs), chaque image est optimisée avec précision tout en conservant son naturel. Grâce à des outils professionnels et une expertise technique, la retouche photo permet d’obtenir des visuels percutants et harmonieux, répondant aux exigences esthétiques et artistiques de chaque projet.";
        retouche.appendChild(desc);
    }
})