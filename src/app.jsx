import React, { Component } from 'react';
import Habits from './components/habits';
import './app.css';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },  //기본값 준비
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  }
  handleIncrement = habit => {
    // console.log(`handleIncrement ${habit.name}`);
    const habits = [...this.state.habits]; //spread연산자로 habit데이터 복사해준다. 
    const index = habits.indexOf(habit); //indexOf=배열에서 지정된 요소를 찾을수 있는 첫번째 인덱스를 반환
    habits[index].count++;
    this.setState(habits); //데이터 변환시 사용. setState
  }
  handleDecrement = habit => {
    // console.log(`handleDecrement ${habit.name}`);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState(habits);
  }
  handleDelete = habit => {
    // console.log(`handleDelete ${habit.name}`);
    const habits = this.state.habits.filter(item => item.id !== habit.id); //filter=주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환.
    this.setState({ habits });
    console.log(habits);
  }
  handleAdd = name => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    console.log(habits);
    this.setState({ habits });
  }

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      habit.count = 0;
      return habit;
    });
    this.setState({ habits });
  }

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter(item => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;

