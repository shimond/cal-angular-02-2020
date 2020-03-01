export type CreditCardType = 'MasterCard' | 'Visa' | 'Diners';

export interface CreditCard {
    displayName: string;
    last4Digits: string;
    expireDate: Date;
    type: CreditCardType;
}


