import React from 'react';
import Wrapper from './History.styled';

export default function History({ data }) {
  console.log(data);
  const actionText = data.action === 'took' ? 'забрал' : 'вернул';

  return (
    <Wrapper>
      <p>
        Имя:
        {' '}
        {data.name}
      </p>

      <p>
        Действие:
        {' '}
        {actionText}
      </p>

      <p>
        Дата:
        {' '}
        {data.date}
      </p>
    </Wrapper>
  );
}
