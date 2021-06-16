
// getters => access properties
// setters => change or mutate the properties

const person = {
    firstName: 'Andrew',
    lastName: 'Rath',
    get fullName(){
        return (`${person.firstName} ${person.lastName}`);

    },
    set fullName(value){
        if(typeof value !== 'string') 
            throw new Error('Value is not a string');
        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first and last name');
        this.firstName = parts[0];
        this.lastName = parts[1];

    }
}


try{
    person.fullName = '12 34';
}
catch (e) {
    alert(e);
}

console.log(person);

