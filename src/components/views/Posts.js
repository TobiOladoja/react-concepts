import React, { Component } from 'react';
import { connect } from 'react-redux';

class Posts extends Component {
  render() {
    const posts = this.props.post ? (
      <div className='posts'>
        <h4 className='center'>{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
      </div>
    ) : (
      <div className='center'>Loading post..</div>
    );
    return <div className='container'>{posts}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  };
};

export default connect(mapStateToProps)(Posts);
