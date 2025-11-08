import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses'; // <-- ajout ici

function App() {
  const utilisateur = { nom: 'Emma', photo: '/user.png' };

  const courses1 = ['Pommes', 'Pâtes', 'Lait'];
  const courses2 = ['Savon', 'Shampoing', 'Dentifrice'];

  return (
    <div>
      <HelloWorld />
      <Greeting prenom="Alice" />
      <Profil utilisateur={utilisateur} taille={150} />

      <Voiture marque="Toyota" modele="Corolla" couleur="Rouge" />
      <Voiture marque="Peugeot" modele="208" couleur="Bleue" />
      <Voiture marque="Renault" modele="Clio" couleur="Grise" />

      <h3>Liste de courses 1 :</h3>
      <ListeCourses elements={courses1} />

      <h3>Liste de courses 2 :</h3>
      <ListeCourses elements={courses2} />
    </div>
  );
}

export default App;
