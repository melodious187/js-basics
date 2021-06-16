
// getters => access properties
// setters => change or mutate the properties

const person = {
    firstName: 'Andrew',
    lastName: 'Rath',
    get fullName(){
        return (`${person.firstName} ${person.lastName}`);

    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];

    }
}

person.fullName = 'John Brown';

console.log(person);


