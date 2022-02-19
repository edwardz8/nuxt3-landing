/* import { defineStore } from 'pinia'

type Transaction = {
    id: number,
    type: 'charge' | 'refund' | 'payment'
    amount: number
    status: 'pending' | 'processed'
}

type BankDetails = {
    balance: number
    transactions: Transaction[]
}

export const useBankAccountStore = defineStore('bank', {
    state: () => {
        return {
            balance: 0,
            transactions: [],
        } as BankDetails
    },
    actions: {
        charge(amount: number) {
            const id = Date.now()
            this.transactions.push({
                id, type: 'charge', amount, status: 'pending'
            })

            return id
        },

        processTransaction(transactionId: number) {
            setTimeout(() => {
                this.transactions = this.transactions.map((t) => {
                    if (t.id === transactionId) {
                        return { ...t, status: 'processed' }
                    }
                    return t
                })
            }, 4000)
        }
    },
    getters: {
        processedTransactions: (state) =>
            state.transactions.filter((t) => t.status === 'processed'),

        pendingTransactions: (state) =>
            state.transactions.filter((t) => t.status === 'pending'),

        runningBalance(state): number {
            return (
                this.balance + this.processedTransactions.map((t) => t.amount)
                    .reduce((acc, curr) => acc + curr, 0)
            )
        },
        pendingAmount(): number {
            return this.pendingTransactions.map((t) => t.amount).reduce((acc, curr) => acc + curr, 0)
        }
    }
}) */