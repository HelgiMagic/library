import styled from 'styled-components';

export const BookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 250px;
  padding: 20px;

  background-color: #262626;

  border-radius: var(--book-radius);
`;

export const Title = styled.h3`
  padding: 2px 0;
  color: white;

  font-size: 18px;
  font-weight: normal;

  align-items: center;
  justify-content: center;
  display: flex;
  min-height: 60px;
`;

export const Art = styled.img`
  border-radius: var(--book-radius);
  object-fit: cover;
  max-height: 315px;
`;
