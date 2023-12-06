//ES 1//

class User{
    constructor(fN, lN, a, l){
    this.firstName = fN,
    this.lastName = lN,
    this.age = a,
    this.location= l ;
}

confronto(persona) {
    if(this.age > persona.age) {
        return this.firstName + ' è più vecchio di ' + persona.firstName;
    } else if(this.age < persona.age) {
        return persona.firstName + ' è più vecchio di ' + this.firstName;
    } else {
        return persona.firstName + ' ha la stessa età di ' + this.firstName;
    }
}
}

let m = new User('Mario', 'Rossi', 29, 'Roma');
let g = new User('Giuseppe', 'Verdi', 31, 'Milano');
let f = new User('Francesca', 'Neri', 29, 'Napoli');

console.log(m.confronto(g));
console.log(f.confronto(m));
console.log(g.confronto(f));

//ES 2//

class Pet{
    static count = 0;
    constructor(pN, oN, s, b){
        this.petName = pN,
        this.ownerName = oN,
        this.species = s,
        this.breed = b;
    }

    confrontoProprietario(owner){
        if(this.ownerName == owner.ownerName){
            return true;
        } else {
        return false;
    }
    }
}

let formBtn = document.querySelector('#petForm button');
formBtn.addEventListener('click', () => {
    
    let f = document.querySelectorAll('#petForm input, #petForm select')

    let petName = f[0].value;
    let ownerName = f[1].value;
    let species = f[2].value;
    let breed = f[3].value;

    let p = new Pet(petName, ownerName, species, breed);
    addList(p);

    f[0].value = '';
    f[1].value = '';
    f[2].value = '';
    f[3].value = '';
})

function addList(p) {
    let ul = document.querySelector('#listPet ul');
    
    let li = document.createElement('li');
    li.classList.add("list-group-item");
    li.innerHTML = `
            <strong>PetName:</strong> ${p.petName}   
            <strong>OwnerName:</strong> ${p.ownerName}  
            <strong>Species:</strong> ${p.species}  
            <strong>Breed:</strong> ${p.breed}`;
    ul.appendChild(li);

    document.querySelector('#listPet h3 span').innerText = Pet.count;
}