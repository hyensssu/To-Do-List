import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // state---------------------------------------------------

  // todo working
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'javascript',
      content: '혼자 공부하는 자바스크립트 정독'
    },
    {
      id: 2,
      title: 'react',
      content: '원장튜터님과 함께하는 리액트 완강'
    },
    {
      id: 3,
      title: 'html/css',
      content: '자투리시간에 확실히 익히기'
    }
  ]);

  // todo Done
  const [done, setDone] = useState([]);

  // title
  const [title, setTitle] = useState('');

  // content
  const [content, setContent] = useState('');

  // btn state
  const [state, setState] = useState(false);
  
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
  const clickAddButtonHandler = () => {
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
    const leftDone = done.filter(item => {
      return item.id !== id;
    });
    setTodo(leftTodo);
    setDone(leftDone);
  };

  // except working list, add done list
  const clickMoveToDoneButtonHandler = id => {
    const moveToDone = todo.filter(item => {
      return item.id === id;
    });
    const removeWorking = todo.filter(item => {
      return item.id !== id;
    });
    setState(!state);
    setDone([...done, ...moveToDone]);
    setTodo(removeWorking);
  };

  // except done list, add working list
  const clickMoveToWorkingButtonHandler = id => {
    const moveToWorking = done.filter(item => {
      return item.id === id;
    });

    const removeDone = done.filter(item => {
      return item.id !== id;
    });
    setState(!state);
    setTodo([...todo, ...moveToWorking]);
    setDone(removeDone);
  };

  return (
    <>
      <div className="container">
        <header className="head">
          <h1>My Todo List</h1>
          <span>React</span>
        </header>

        <section className="inputSection">
          <div className="inputBoxs">
            <label for="inputTitle">제목 : </label>
            <input
              type="text"
              id="inputTitle"
              className="inputTitle"
              value={title}
              onChange={titleChangeHandler}
            ></input>
            <label for="inputContent">내용 : </label>
            <input
              type="text"
              id="inputContent"
              className="inputContent"
              value={content}
              onChange={contentChangeHandler}
            ></input>
          </div>
          <button className="addBtn" onClick={clickAddButtonHandler}>
            추가하기
          </button>
        </section>

        <main>
          <h2>Working...🙂</h2>
          {todo.map((item, i) => {
            return (
              <RenderSpot
                item={item}
                clickDeleteButtonHandler={clickDeleteButtonHandler}
                clickMoveToDoneButtonHandler={clickMoveToDoneButtonHandler}
                clickMoveToWorkingButtonHandler={clickMoveToWorkingButtonHandler}
                state={state}
              ></RenderSpot>
            );
          })}
          {/* -------------------------------------------------------------------- */}
          <h2>Done...😍</h2>
          {done.map((item, i) => {
            return (
              <RenderSpot
                item={item}
                clickDeleteButtonHandler={clickDeleteButtonHandler}
                clickMoveToDoneButtonHandler={clickMoveToDoneButtonHandler}
                clickMoveToWorkingButtonHandler={clickMoveToWorkingButtonHandler}
                state={state}
              ></RenderSpot>
            );
          })}
        </main>
      </div>
    </>
  );
}

const RenderSpot = props => {
  return (
    <>
      <section key={props.item.id} className="workingSection">
        <div className="containerBox">
          <h1>{props.item.title}</h1>
          <p>{props.item.content}</p>
          <div className="btnBox">
            <button
              className="deleteBtn"
              onClick={() => props.clickDeleteButtonHandler(props.item.id)}
            >
              삭제하기
            </button>
            {props.state === false ? (
              <button
                className="completeBtn"
                onClick={() => props.clickMoveToDoneButtonHandler(props.item.id)}
              >
                완료
              </button>
            ) : (
              <button
                className="completeBtn"
                onClick={() => props.clickMoveToWorkingButtonHandler(props.item.id)}
              >
                취소
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
