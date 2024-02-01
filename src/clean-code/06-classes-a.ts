(() => {
    // No applying Single Responsible Principle
    type Gender = 'M' | 'F';

    class Person {
        constructor(
            public name: string, 
            public gender: Gender, 
            public birthdate: Date
        ) { }        
    }

    class User extends Person {
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            public name: string, 
            public gender: Gender, 
            public birthdate: Date
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            public email: string,
            public role: string,
            public name: string, 
            public gender: Gender, 
            public birthdate: Date
        ) {
            super(email, role, name, gender, birthdate);
        }
    }

    // const newPerson = new Person('Juan', 'M', new Date('1998-06-17'));
    // console.log(newPerson);

    // const newUser = new User('XXXXXXXXXXXXXX', 'Admin', new Date(), 'Juan', 'M', new Date('1998-06-17'));

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'nano@mail.com',
        'Admin',
        'Juan',
        'M',
        new Date('1998-06-17')
    )
    console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() });

})();