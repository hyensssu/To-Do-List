const InputSection = ({
  title,
  titleChangeHandler,
  content,
  contentChangeHandler,
  clickAddButtonHandler
}) => {
  return (
    <>
      <div className="inputSection">
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
      </div>
    </>
  );
};

export default InputSection;
