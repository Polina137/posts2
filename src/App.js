import React, {useEffect, useMemo, useRef, useState} from 'react';
import Counter from "./components/Counter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import postList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/mySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import {useSortedPosts} from "./hooks/usePosts";
function App() {
    const[posts, SetPosts] = useState([])
    const[filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = useSortedPosts(posts, filter.sort, filter.query);
    

    useEffect(() => {
        console.log('use effect')
    }, []);
    const createPost = (newPost) => {
      SetPosts([...posts, newPost])
        setModal(false);
    }
    const removePost = (post) =>{
      SetPosts(posts.filter(p => p.id !== post.id))
    }
    return (
    <div className="App">
        <MyButton style = {{marginTop: 30}} onClick = {() => setModal(true)}>
            создать пользователя
        </MyButton>
      <MyModal
          visible={modal}
          setVisible={setModal
      }>
          <PostForm create = {createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
       <PostFilter
           filter = {filter}
           setFilter={setFilter}
       />
          <PostList remove = {removePost} posts = {sortedAndSearchedPosts} title = "СПИСОК ПОСТОВ"/>
    </div>
  );
}
export default App;
