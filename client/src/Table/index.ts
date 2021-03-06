import styled from 'styled-components';
import { SortKey } from '../Context';

export const Header = styled.th`
  padding: 12px 15px;
  cursor: pointer;
  min-width: 150px;
`;

export const TableData = styled.td`
  padding: 12px 15px;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  cursor: pointer;
`;

export interface IHeader {
  key: SortKey;
  displayValue: string;
}

export { default as Table } from './Table';
export { default as TableHeaders } from './TableHeaders';
export { default as TableBody } from './TableBody';
