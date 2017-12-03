import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'semantic-ui-react'
import CoinRow from './coinrow'

class CoinTable extends Component {
  state = {
    coins: []
  }

  render (){
    return (
      <Table celled selectable color="red" >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Rank</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>1H Change</Table.HeaderCell>
            <Table.HeaderCell>24H Change</Table.HeaderCell>
            <Table.HeaderCell>7D Change</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
  
        <Table.Body>
          {
            this.state.coins.map(coin => <CoinRow key={coin.rank} {...coin}/>)
          }
        </Table.Body>
      </Table>
    )
  }
 
  componentDidMount(){
    axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=50')
      .then((response) => {
        console.table(response.data);
        this.setState({
          coins: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    }
}

export default CoinTable;