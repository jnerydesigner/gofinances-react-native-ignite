import React, { useState } from 'react';
import { Modal } from 'react-native';
import { Button } from '../../components/Form/Button';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { Input } from '../../components/Form/Input';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';

import { CategorySelect } from '../CategorySelect';

import {
  Container,
  Title,
  Header,
  Form,
  Inputs,
  TransactionButtonContainer
} from './styles';


export function Register() {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  function handleTransactionTypeSelect(type: 'income' | 'outcome') {
    setTransactionType(type);
  }
  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }
  return (
    <Container>
      <Header>
        <Title>Register</Title>
      </Header>

      <Form>
        <Inputs>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionButtonContainer>
            <TransactionTypeButton
              title="Entrada"
              type="income"
              onPress={() => handleTransactionTypeSelect('income')}
              isActive={transactionType === 'income'}
            />
            <TransactionTypeButton
              title="Saída"
              type="outcome"
              onPress={() => handleTransactionTypeSelect('outcome')}
              isActive={transactionType === 'outcome'}
            />
          </TransactionButtonContainer>
          <CategorySelectButton
            title={category.name}
            activeOpacity={0.1}
            onPress={handleOpenSelectCategoryModal}
          />
        </Inputs>
        <Button title="Enviar" nameIcon="send" />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  )
}