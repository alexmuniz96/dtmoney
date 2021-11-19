import { useState } from "react";
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import Modal from 'react-modal'
import { NewTransactionModal } from "./components/NewTransactionModal"
import { TransactionsProvider } from './components/hooks/useTransactions'

import { GlobalStyle } from './style/global';

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleTransactionModalOpen() {
    setIsNewTransactionModalOpen(true)
  }

  function handleTransactionModalClose() {
    setIsNewTransactionModalOpen(false)
  }

  return (

    <TransactionsProvider>

      <Header onOpenNewTransactionModal={handleTransactionModalOpen} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleTransactionModalClose}
      />
      <GlobalStyle />

    </TransactionsProvider>

  );
}


