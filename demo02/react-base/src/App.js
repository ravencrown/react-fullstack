import React from 'react';
import {Button, List} from 'antd-mobile';

class App extends React.Component {
  render() {
    const boss = 'chengx';
    return (
      <div>
        <h2>独立团, 团长{boss}</h2>
        <FirstCrew boss="chengx2"/>
        <SecondCrew boss="chengx3" />
      </div>
    )
  }
}

function SecondCrew(props) {
  return <h2>secondCrew, {props.boss}</h2>
}

class FirstCrew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      solders: ['a', 'b', 'c']
    }
    // this.addSolder = this.addSolder.bind(this);
  }
   
  componentWillMount() {
    console.log("FirstCrew componentWillMount");
  }

  componentDidMount() {
    console.log("FirstCrew componentDidMount")
  }

  addSolder() {
    console.log("dss");
    this.setState({
      solders: [...this.state.solders, 'new'+Math.random()]
    })
  }

  render() {
    console.log("FirstCrew render");
    return (
      <div>
        <h2>firstCrew,  团长{this.props.boss}</h2>
        {/* <button onClick={this.addSolder}>Button</button> */}
        <Button type="primary" onClick={() => this.addSolder()}>Button</Button>
        <List renderHeader={()=>'list'}>
          {this.state.solders.map(v=>{
            return (
              <List.Item key={v}>
                {v}
              </List.Item>
            )
          })}
        </List>
        {/* <ul>
            {this.state.solders.map(v => {
              return <li key={v}>{v}</li>;
            })}
        </ul> */}
      </div>
    )
  }
}

export default App;