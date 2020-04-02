import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1', 
  'name' : '해시율',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생'
},
{  'id' : 2,
'image' : 'https://placeimg.com/64/64/2', 
'name' : '홍길동',
'birthday' : '901212',
'gender' : '남자',
'job' : '프로그래머'
},
{  'id' : 3,
'image' : 'https://placeimg.com/64/64/3', 
'name' : '베이지',
'birthday' : '901231',
'gender' : '여자',
'job' : '베이비시터'
}
]
class App extends Component{
  render(){
    return (// 반복문을 사용해야할떄 map함수를 사용한다. 
      <div>
        {
        customers.map(c => {
          return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        )
      })
      }     
     </div>
    );
  }

}

export default App;
