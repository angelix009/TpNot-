class Team {
    id;
    name;
    description;    

    constructor(id, name, description) {
        if (!id) {
            throw new RequiredFieldError('id'); 
        }

        if (!name) {
            throw new RequiredFieldError('name'); 
        }
        if (!description) {
            throw new RequiredFieldError('id'); 
        }

        this.id = id;
        this.name = name;
        this.description = description;

    }
}