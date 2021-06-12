import React from 'react';

import { Text } from 'react-native';

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  DateTransaction,
} from './styles';

interface Category {
  key: string;
  name: string;
  icon: string;
}

export interface TransactionCardProps {
  type: 'income' | 'outcome';
  title: string;
  amount: string;
  category: Category;
  date: string;
}


interface Props {
  data: TransactionCardProps,
  type: "income" | "outcome";
}

export function TransactionCard({
  data,
  type
}: Props) {
  return (
    <Container type={type}>
      <Title>{data.title}</Title>

      <Amount type={data.type}>
        {data.type === 'outcome' && '- '}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>
            {data.category.name}
          </CategoryName>
        </Category>
        <DateTransaction>
          {data.date}
        </DateTransaction>
      </Footer>
    </Container>
  );
};
