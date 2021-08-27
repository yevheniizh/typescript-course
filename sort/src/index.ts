// import { NumbersCollections } from './NumbersCollection';
// import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollections = new NumbersCollections([10, 3, -5, 0]);
// numbersCollections.sort();
// console.log(numbersCollections.data);

// const charactersCollections = new CharactersCollection('Xaayb');
// charactersCollections.sort();
// console.log(charactersCollections.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
