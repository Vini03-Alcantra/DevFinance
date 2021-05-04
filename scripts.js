const Modal = {
    open(){
        //Abrir modal
        //Adicionar a aclass active no modal
        document
            .querySelector(".modal-overlay")
            .classList
            .add('active')
    },
    close(){
        //fechar o modal
        //remover class axtive do modal
        document
            .querySelector(".modal-overlay")
            .classList
            .remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: "Luz",
        amount: -15000,
        date: "03/05/2021"
    },
    {
        id: 2,
        description: "aplicativo",
        amount: 35000,
        date: "04/05/2021"
    },
    {
        id: 3,
        description: "Comida",
        amount: 10000,
        date: "05/05/2021"
    }

]

const Transaction = {
    incomes(){},
    expenses(){},
    total(){}
}

const DOM = {
    addTransaction(transaction, index){        
        const tr = document.createElement("tr")
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)        
    },

    innerHTMLTransaction(transaction){
        const html = `        
            <td class="description">${transaction.description}</td>
            <td class="expense">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover transação">
            </td>        
        `
        return html;
    }
}

DOM.addTransaction(transactions[2])