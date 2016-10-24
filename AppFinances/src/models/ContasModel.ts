export class ContasModel {
    
    private list: Array<any>

    constructor() {
        this.list = [
            {descricao: "Alimentação"},
            {descricao: "Lazer"},
            {descricao: "Transporte"}
        ];
    }

    getList() {
        return this.list;
    }

    insert(conta) {
        this.list.push(conta);
    }

    edit(conta) {

    }

    delete(conta) {        
        let pos = this.list.indexOf(conta);
        this.list.splice(pos, 1);
    }
}