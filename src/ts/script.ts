
const characterName = document.querySelector('#characterName') as HTMLInputElement;
const characterLastName = document.querySelector('#characterLastName') as HTMLInputElement;
const alias = document.querySelector('#alias') as HTMLInputElement;
const strength = document.querySelector('#strength') as HTMLInputElement;
const speed = document.querySelector('#speed') as HTMLInputElement;
const intelligence = document.querySelector('#intelligence') as HTMLInputElement;
const universe = document.querySelector('#universe') as HTMLInputElement;
const quote = document.querySelector('#quote') as HTMLInputElement;
const image = document.querySelector('#image') as HTMLInputElement;


const form = document.querySelector('#send-form') as HTMLFormElement;

type Character = {
  name: string;
  lastName: string;
  alias: string;
  strength: number;
  speed: number;
  intelligence: number;
  universe: string;
  quote: string;
  imgUrl: string;
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const cardContainer = document.querySelector('.cards-container') as HTMLDivElement;

  // Charakterdaten sammeln
  const newCharacter: Character = {
    name: characterName.value,
    lastName: characterLastName.value,
    alias: alias.value,
    strength: Number(strength.value),
    speed: Number(speed.value),
    intelligence: Number(intelligence.value),
    universe: universe.value,
    quote: quote.value,
    imgUrl: image.value,
  };

  // eine neue Karte wird erstellt
  createCharacterCard(newCharacter, cardContainer);

  // Formular wird zurücksetzt
  form.reset();
});

// * Funktion für einen neuen  Charakter
function createCharacterCard(character: Character, container: HTMLDivElement) {
  const newCard = document.createElement('div');
  newCard.classList.add('card');

  //  Hintergrundbild setzen
  newCard.style.backgroundImage = `url(${character.imgUrl})`;
  newCard.style.backgroundSize = 'cover';
  newCard.style.backgroundPosition = 'center';

  // button zum löschen der Karte
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-btn');
  deleteButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" height="15">
      <path fill="#000000" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1 -32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1 -32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1 -32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.7 23.7 0 0 0 -21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0 -16-16z"/>
    </svg>
  `;
  deleteButton.addEventListener('click', () => {
    container.removeChild(newCard);
  });

  // + Bearbeiten-Button
  // # noch nicht fertig
  // const editButton = document.createElement('button');
  // editButton.classList.add('edit-btn');
  // editButton.innerHTML = `
  //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="15" height="15">
  //     <path fill="#000000" d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4 .4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5-5.5-14.3-5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"/>
  //   </svg>
  // `;
  // editButton.addEventListener('click', () => {
  //   
  // });

  // hier wird die Karte befüllt
  newCard.innerHTML = `
    <h2>${character.name} ${character.lastName}</h2>
    <h3>${character.alias}</h3>
    <p><strong>Strength:</strong> ${character.strength}</p>
    <p><strong>Speed:</strong> ${character.speed}</p>
    <p><strong>Intelligence:</strong> ${character.intelligence}</p>
    <p><strong>Universe:</strong> ${character.universe}</p>
    <p class="quote">"${character.quote}"</p>
  `;
  newCard.appendChild(deleteButton);
  // newCard.appendChild(editButton);

  container.appendChild(newCard);
}