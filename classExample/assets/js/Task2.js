//! Sual2:
class BankAccount {
    constructor(accountNumber) {
        this.accountNumber= accountNumber;
        this.balance=0;
    }
    deposit(amount){
        if (amount>0) {
            this.balance += amount
            console.log(`${amount} əlavə olundu`);
        }
        else{
            console.log("Məbləğ 0 dan böyük olmalıdır.");
            
        }
    }
    withdraw(amount){
        if(amount>0){
            if (amount<=this.balance) {
                this.balance -=amount
                console.log(`${amount} məbləği hesabınızdan çıxarıldı.`);      
            }
            else{
                console.log("Balansınızda kifayət qədər pul yoxdu.");
                
            }
        }
        else{
            console.log("Çıxarılan məbləğ 0 dan böyük olomalır.");
        }
    }
    getBalance(){
        return this.balance
    }
}
let myaccount = new BankAccount("12345")

myaccount.deposit(1000)

console.log(`Balance: ${myaccount.getBalance()}`);

myaccount.withdraw(200)
console.log(`Balance: ${myaccount.balance}`);

