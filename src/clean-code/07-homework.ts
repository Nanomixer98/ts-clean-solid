(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    interface HtmlElementProps{
        id: string;
        type: HtmlType;
    }

    interface InputAttributesProps {
        value: string;
        placeholder: string;
    }

    interface InputElementProps {
        id: string;
        value: string;
        placeholder: string;
    }

    class HtmlElement {
        public id: string;
        public type: HtmlType;

        constructor({ id, type }: HtmlElementProps) {
            this.id = id;
            this.type = type;
        }
    }

    class InputAttributes {
        public value: string;
        public placeholder: string;

        constructor({ placeholder, value }: InputAttributesProps) {
            this.value = value;
            this.placeholder = placeholder;
        }
    }

    class InputEvents {
        constructor() {}

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    class InputElement {
        public htmlElement: HtmlElement;
        public inputAttributes: InputAttributes;
        public inputEvents: InputEvents;

        constructor({id, placeholder, value}: InputElementProps){
            this.htmlElement = new HtmlElement({ id, type: 'input' })
            this.inputAttributes = new InputAttributes({ placeholder, value});
            this.inputEvents = new InputEvents();
        }
    }

    const nameField = new InputElement({ id: 'Fernando', placeholder: 'Enter first name', value: 'txtName' });

    console.log({ nameField });

})()