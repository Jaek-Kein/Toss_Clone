import { create } from "zustand";
import bankData from '../Data/dummy.json'


interface Account {
    Balance: number;
    AccountNumber: string;    
}

interface DataStore {
    TossBank: Account;
    setBalance: (balance: number) => void;
    setAccountNumber: (accountNumber: string) => void
    loadData: () => void;
}

const useDataStore = create<DataStore>((set) => ({
    TossBank: {
        Balance: 0,
        AccountNumber: "",
    },

    setBalance: (balance) => set((state) => ({
        TossBank: {
            ...state.TossBank,
            Balance: balance
        }
    })),

    setAccountNumber: (accountNumber) => set((state) => ({
        TossBank: {
            ...state.TossBank,
            AccountNumber: accountNumber
        }
    })),

    loadData: () => {
        try{
            const data = bankData.Tossbank;

            set({
                TossBank: {
                    Balance: data.Balance,
                    AccountNumber: data.AccountNumber
                },
            })
        } catch {
            return
        }
    }

}))

export default useDataStore