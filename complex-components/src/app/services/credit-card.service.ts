import { CreditCard } from '../models/credit-card.model';

export class CreditCardMockService implements CreditCardService {

    getAllCards() {
        const creditCardList: CreditCard[] = [];
        creditCardList.push({
            displayName: 'עסק',
            expireDate: new Date(),
            last4Digits: '3314',
            type: 'MasterCard'
        });

        creditCardList.push({
            displayName: 'סופר',
            expireDate: new Date(),
            last4Digits: '3316',
            type: 'Diners'
        });


        creditCardList.push({
            displayName: 'כרטיס מעמ',
            expireDate: new Date(),
            last4Digits: '9976',
            type: 'Diners'
        });


        creditCardList.push({
            displayName: 'פלייכארד',
            expireDate: new Date(),
            last4Digits: '9832',
            type: 'Visa'
        });
        return creditCardList;
    }
}


export class CreditCardService  {

    getAllCards() {
        const creditCardList: CreditCard[] = [];
        creditCardList.push({
            displayName: 'עסק',
            expireDate: new Date(),
            last4Digits: '3314',
            type: 'MasterCard'
        });
        return creditCardList;
    }
}



