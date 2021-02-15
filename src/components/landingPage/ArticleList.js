import React, { Component } from "react";
import * as api from "../../api";
import ArticleCard from "./ArticleCard";
import SortingBlock from "./SortingBlock";
import AddArticle from "./AddArticle";

export default class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    newArticle: {
      votes: 0,
    },

  };
  componentDidMount() {
    this.fetchArticles();
  }
  componentDidUpdate(prevProps) {
    const { topic } = this.props;
    if (topic !== prevProps.topic) {
      this.fetchArticles(this.sort, topic);
    }
  }

  render() {
    const { articles } = this.state;
    return (
      <>
        <SortingBlock {...articles} fetchArticles={this.fetchArticles} />
        {this.props.username && (
          <>
            <AddArticle
              sendArticle={this.sendArticle}
              setArticleState={this.setArticleState}
            />
          </>
        )}

        <div className="article__list">
          {articles.map((article) => {
            return (
              <ArticleCard
                key={article.article_id}
                {...this.props}
                {...article}
                {...this.state}
                removeArticle={this.removeArticle}
              />
            );
          })}
        </div>
      </>
    );
  }

  setArticleState = (field, inputFields) => {
    const newArticle = {
      ...this.state.newArticle,
      author: this.props.username,
    };
    newArticle[field] = inputFields[field];
    this.setState((currentState) => {
      return { ...currentState.articles, newArticle };
    });
  };

  sendArticle = (e) => {
    e.preventDefault();
    api.postArticle(this.state.newArticle).then((article) => {
      this.setState((currentState) => {
        return { articles: [article, ...currentState.articles] };
      });
    });
  };
  fetchArticles = (sort = "votes") => {
    api.getAllArticles(sort, this.props.topic).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };
  removeArticle = (id) => {
    api.deleteArticle(id).then((res) => {
      this.fetchArticles();
    });
  };

}
