import type { Person } from '../types/Person';
import type { Expense } from '../types/Expense';
import type { Settlement } from '../types/Settlement';

export const calculateSettlements = (
    people: Person[],
    expenses: Expense[]
): Settlement[] => {
    if (people.length === 0) return [];
    const total = expenses.reduce(
        (sum, expense) => sum + expense.amount,
        0
    );

    const sharePerPerson = total / people.length;

    const balances = people.map((person) => {
        const paid = expenses.filter((expense) => expense.paidById === person.id).reduce((sum, expense) => sum + expense.amount, 0);

        return {
            person,
            balance: paid - sharePerPerson,
        };
    })

    const creditors = balances.filter((item) => item.balance > 0).map((item) => ({ ...item }));

    const debtors = balances.filter((item) => item.balance < 0).map((item) => ({ ...item }));

    const settlements: Settlement[] = [];

    let debtorIndex = 0;
    let creditorIndex = 0;

    while (debtorIndex < debtors.length && creditorIndex < creditors.length) {
      const debtor = debtors[debtorIndex];
      const creditor = creditors[creditorIndex];

      const amount = Math.min(-debtor.balance, creditor.balance);

      settlements.push({
        from: debtor.person.name,
        to: creditor.person.name,
        amount: Number(amount.toFixed(2)),
      });

      debtor.balance += amount;
      creditor.balance -= amount;

      if (Math.abs(debtor.balance) < 0.01) {
        debtorIndex++;
      }

      if (Math.abs(creditor.balance) < 0.01) {
        creditorIndex++;
      }
    }

    return settlements;
}

