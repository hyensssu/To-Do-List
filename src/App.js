import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './component/Header';
import InputSection from './component/InputSection';
import TodoLists from './component/TodoLists';
function App() {
  // state---------------------------------------------------

  // lists
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'javascript',
      content: '혼자 공부하는 자바스크립트 정독',
      isDone: false
    },
    {
      id: 2,
      title: 'react',
      content: '원장튜터님과 함께하는 리액트 완강',
      isDone: false
    },
    {
      id: 3,
      title: 'html/css',
      content: '자투리시간에 확실히 익히기',
      isDone: false
    }
  ]);

  // title
  const [title, setTitle] = useState('');

  // content
  const [content, setContent] = useState('');

  // handler------------------------------------------------

  // change title
  const titleChangeHandler = e => {
    setTitle(e.target.value);
  };

  // change content
  const contentChangeHandler = e => {
    setContent(e.target.value);
  };

  // add list
  const clickAddButtonHandler = e => {
    e.preventDefault();
    const newTodo = {
      id: todo.length + 1,
      title: title,
      content: content
    };
    setTodo([...todo, newTodo]);
    setTitle('');
    setContent('');
  };

  // delete list
  const clickDeleteButtonHandler = id => {
    const leftTodo = todo.filter(item => {
      return item.id !== id;
    });

    setTodo(leftTodo);
  };

  // from working to done
  const clickMoveToDoneButtonHandler = id => {
    const upDateTodo = todo.map(item => {
      if (item.id === id) {
        return { ...item, isDone: true };
      } else {
        return item;
      }
    });
    setTodo(upDateTodo);
  };

  // from done to working
  const clickMoveToWorkingButtonHandler = id => {
    const upDateTodo = todo.map(item => {
      if (item.id === id) {
        return { ...item, isDone: false };
      } else {
        return item;
      }
    });
    setTodo(upDateTodo);
  };

  // filteringList
  const finishedTodo = todo.filter(item => item.isDone);
  const unfinishedTodo = todo.filter(item => !item.isDone);

  return (
    <>
      <div className="container">
        <Header></Header>

        <InputSection
          title={title}
          titleChangeHandler={titleChangeHandler}
          content={content}
          contentChangeHandler={contentChangeHandler}
          clickAddButtonHandler={clickAddButtonHandler}
        ></InputSection>

        <main>
          <h2>Working...🙂</h2>
          {unfinishedTodo.map((item, i) => {
            return (
              <TodoLists
                item={item}
                clickDeleteButtonHandler={clickDeleteButtonHandler}
                clickMoveToDoneButtonHandler={clickMoveToDoneButtonHandler}
                clickMoveToWorkingButtonHandler={clickMoveToWorkingButtonHandler}
              ></TodoLists>
            );
          })}

          <h2>Done...😍</h2>
          {finishedTodo.map((item, i) => {
            return (
              <TodoLists
                item={item}
                clickDeleteButtonHandler={clickDeleteButtonHandler}
                clickMoveToDoneButtonHandler={clickMoveToDoneButtonHandler}
                clickMoveToWorkingButtonHandler={clickMoveToWorkingButtonHandler}
              ></TodoLists>
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
