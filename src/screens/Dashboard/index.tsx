import React from 'react';
import { v4 as uuid } from 'uuid';

// import { Text, Image } from 'react-native';
import Constants from 'expo-constants';
import {
  Container,
  Header,
  UserInfo,
  User,
  UserGreeting,
  UserName,
  Photo,
  UserWrapper,
  Icon,
  HighLightCards,
  Transactions,
  Title,
  TransactionsList
} from './styles';
import { theme } from '../../global/styles/theme';
import { HighLightCard } from '../../components/HighLightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardProps {
  id: string;
}



export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: uuid(),
      type: 'income',
      title: "Desenvolvimento de Site em React",
      amount: "R$ 14.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
        key: "vendas"
      },
      date: "14/10/2020"
    },
    {
      id: uuid(),
      type: 'outcome',
      title: "Aluguel do Apartamento",
      amount: "R$ 1.000,00",
      category: {
        name: "Aluguel",
        icon: "shopping-bag",
        key: "aluguel"
      },
      date: "14/10/2020"
    },
    {
      id: uuid(),
      type: 'income',
      title: "Desenvolvimento de Aplicativo Mobile",
      amount: "R$ 20.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
        key: "vendas"
      },
      date: "14/10/2020"
    },
    {
      id: uuid(),
      type: 'outcome',
      title: "Café da Manhã",
      amount: "R$ 20,00",
      category: {
        name: "Refeição",
        icon: "coffee",
        key: "snack"
      },
      date: "14/10/2020"
    }
  ]
  return (
    <Container>
      <Header style={{ marginTop: Constants.statusBarHeight + 15 }}>
        <UserWrapper>
          <UserInfo>
            <Photo source={{
              uri: "https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/0d2f/313d/73c9/143a/6875/d46e/d976/bb81/2b1d/b017/b017.jpg"
            }} />
            <User>

              <UserGreeting>
                Olá,
            </UserGreeting>

              <UserName>
                Jander
            </UserName>

            </User>
          </UserInfo>

          <Icon name="power" />

        </UserWrapper>
      </Header>


      <HighLightCards>
        <HighLightCard title="Entrada" type="up" amount="R$ 22.000,00" lastTransaction="21 do 10 de 2021" />
        <HighLightCard title="Saída" type="down" amount="R$ 8.000,00" lastTransaction="21 do 10 de 2021" />
        <HighLightCard title="Total" type="total" amount="R$ 14.000,00" lastTransaction="21 do 10 de 2021" />
      </HighLightCards>



      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TransactionCard data={item} type="income" key="vendas" />
          )}
        >
          {/* <TransactionCard
            data={data}
            type="income"

            key="vendas"
          /> */}
        </TransactionsList>
      </Transactions>
    </Container>
  );
};