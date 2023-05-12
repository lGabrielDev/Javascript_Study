let pessoa1 = {
    name: "adalberto",
    age: 54,
    
    //getters and setters improvisado
    getName: function getName(){
        return this.name;
    },

    setName: function setName(name){
        this.name = name;
    },

    getAge: function getAge(){
        return this.age;
    },

    setAge: function setAge(age){
        this.age = age;
    },

    //toString()
    toString: function toString(){
        return `Name: ${this.name}\nAge: ${this.age}`;
    }
}
