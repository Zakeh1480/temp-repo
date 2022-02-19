import './styles.css';
import { Component } from 'react';
import { loadPost } from '../../utils/load-post';
import { Posts } from '../../components/Posts/Posts';
import { Button } from '../../components/Button';
import { Search } from '../../components/Search';

class Home extends Component {

  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 8,
    searchValue: ''
  };

  async componentDidMount() {
    await this.loadPost();
  }

  loadPost = async () => {
    const { page, postPerPage } = this.state;
    const postsAndPhotos = await loadPost();
    this.setState({
      posts: postsAndPhotos.slice(page, postPerPage),
      allPosts: postsAndPhotos,
    });
  }

  loadMorePosts = () => {
    const {
      page,
      postPerPage,
      allPosts,
      posts
    } = this.state;

    const nextPage = page + postPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);

    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage })
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ searchValue: value });
  }

  render() {

    const { posts, page, postPerPage, allPosts, searchValue } = this.state;
    const noMorePost = page + postPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      }) : posts;

    return (
      <section className="container">

        <div className="search-container">
          <Search handleChange={this.handleChange} value={searchValue} />
        </div>

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <h2>Não há posts!</h2>
        )}


        <div className="button-container">
          {!searchValue && (
            <Button text={'Próxima Página'} onClick={this.loadMorePosts} disabled={noMorePost} />
          )}
        </div>
      </section>
    );
  }
}

export default Home;
