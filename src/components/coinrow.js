import React from 'react';
import { Table } from 'semantic-ui-react'

const CoinRow = ({ rank, name, symbol, price_usd, percent_change_1h, percent_change_24h, percent_change_7d }) => (
  <Table.Row>
    <Table.Cell>{rank}</Table.Cell>
    <Table.Cell>{name} ({symbol})</Table.Cell>
    <Table.Cell>{price_usd}</Table.Cell>
    <Table.Cell>{percent_change_1h}%</Table.Cell>
    <Table.Cell>{percent_change_24h}%</Table.Cell>
    <Table.Cell>{percent_change_7d}%</Table.Cell>
  </Table.Row>
)

export default CoinRow;