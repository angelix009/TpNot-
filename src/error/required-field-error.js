class RequiredFieldError extends Error { 
    constructor(field) {
        super(`Le champ ${field} est obligatoire !`);
    }   
}