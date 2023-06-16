const TodoLists = ({
  item,
  clickDeleteButtonHandler,
  clickMoveToDoneButtonHandler,
  clickMoveToWorkingButtonHandler
}) => {
  return (
    <>
      <section key={item.id} className="workingSection">
        <div className="containerBox">
          <h1>{item.title}</h1>
          <p>{item.content}</p>
          <div className="btnBox">
            <button className="deleteBtn" onClick={() => clickDeleteButtonHandler(item.id)}>
              삭제하기
            </button>
            {item.isDone === false ? (
              <button className="completeBtn" onClick={() => clickMoveToDoneButtonHandler(item.id)}>
                완료
              </button>
            ) : (
              <button
                className="completeBtn"
                onClick={() => clickMoveToWorkingButtonHandler(item.id)}
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

export default TodoLists;
