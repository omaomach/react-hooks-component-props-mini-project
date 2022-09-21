import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

function ArticleList() {
    const articleList = blogData.posts.map((postObj) => {
        return <Article key={postObj.id} title={postObj.title} date={postObj.date} preview={postObj.preview} />
    })
    return (
        <main>
            {articleList}
        </main>
    )
}

export default ArticleList