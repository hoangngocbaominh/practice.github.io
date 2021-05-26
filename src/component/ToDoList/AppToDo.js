import React, { useEffect, useState } from "react";
import Pagination from "../Pagination";
import PostList from "../PostList";
// import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";
import queryString from "query-string";
import Search from "../Search";
import Clock from "../Clock";
// import MagicColor from "../MagicColor";

function AppToDo() {
  const [todo, setToDo] = useState([
    { id: 1, title: "hello đây là lab" },
    { id: 2, title: "hello đây là lab2" },
  ]);
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRow: 10,
  });
  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    try {
      const param = queryString.stringify(filter);

      async function fetchData() {
        setLoading(true)
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${param}`;
        const result = await fetch(requestUrl);
        const resultJSON = await result.json();
        console.log(resultJSON);
        setPostList(resultJSON.data);
        setPagination(resultJSON.pagination);
      }
      fetchData();
    } catch (error) {
      console.log("Falied to fetch postList", error.message);
    }
  }, [filter]);
  // const handleClickToDo = (item) => {
  //   // console.log(item.id);
  //   const index = todo.findIndex((x) => x.id === item.id);
  //   if (index < 0) return;
  //   const newToDo = [...todo];
  //   newToDo.splice(index, 1);
  //   setToDo(newToDo);
  // };
  const handleOnSubmit = (valueSubmit) => {
    // console.log(valueSubmit);
    const newToDoSubmit = [...todo];
    // console.log(newToDoSubmit);
    const valueForm = {
      id: todo.length + 1,
      title: valueSubmit.title,
    };
    newToDoSubmit.push(valueForm);
    // console.log(newToDoSubmit);
    setToDo(newToDoSubmit);
  };
  const handleChangePage = (newPage) => {
    setFilter({
      ...filter,
      _page: newPage,
    });
  };
  const handleSubmitFunc = (newFitters) => {
    console.log("hello", newFitters);
    setFilter({
      ...filter,
      _page: 1,
      title_like: newFitters.searchTerm,
    });
  };
  const [showClock, setShowClock] = useState(true)
   return (
    <>
       {showClock && <Clock />}
      <button onClick={() => setShowClock(false)}>Clock</button>
      {/* <MagicColor/> */}
      {/* <AddToDo onSubmit={handleOnSubmit} /> */}
      {/* <ToDoList todos={todo} onClickToDo={handleClickToDo} /> */}
      {/* <Search submitFunc={handleSubmitFunc}/>
      <PostList posts={postList} />
      <Pagination pagination={pagination} changePages={handleChangePage}/> */}
    </>
  );
}
export default AppToDo;
