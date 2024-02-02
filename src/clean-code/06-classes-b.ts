(() => {
    // No applying Single Responsible Principle
    type Gender = 'M' | 'F';

    interface PersonProps {
        birthdate: Date;
        gender: Gender;
        name: string;
    }

    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({ name, gender, birthdate}: PersonProps) { 
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;
        }        
    }

    interface UserProps {
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class User extends Person {
        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor({email, role, name,  gender,  birthdate}: UserProps) {
            super({name, gender, birthdate});
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({ workingDirectory, lastOpenFolder, email, role, name, gender, birthdate }: UserSettingsProps) {
            super({email, role, name, gender, birthdate});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    // const newPerson = new Person('Juan', 'M', new Date('1998-06-17'));
    // console.log(newPerson);

    // const newUser = new User('XXXXXXXXXXXXXX', 'Admin', new Date(), 'Juan', 'M', new Date('1998-06-17'));

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'nano@mail.com',
        role: 'Admin',
        name: 'Juan',
        gender:'M',
        birthdate: new Date('1998-06-17')
    })
    console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() });

})();