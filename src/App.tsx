import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal'
import { Header } from './components/Header';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal"
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
    <>
      <Header onOpenNewTransactionModal={handleTransactionModalOpen} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleTransactionModalClose}
      />
      <GlobalStyle />
    </>
  );
}


