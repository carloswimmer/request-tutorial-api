import Post from '../models/Post';
import postsDB from '../mockDB/postsDB';

class PostsRepository {
  private posts: Post[];

  constructor() {
    this.posts = postsDB;
  }

  public findAll(): Post[] {
    return this.posts;
  }

  public findById(id: number): Post | undefined {
    const post = this.posts.find(post => post.id === id);

    return post;
  }

  public findByUserId(userId: number): Post[] {
    const filteredPosts = this.posts.filter(post => post.userId === userId);

    return filteredPosts;
  }

  public create(postRequest: Omit<Post, 'id'>): Post {
    const { userId, title, body } = postRequest;
    const post = new Post(title, body, userId);

    this.posts.push(post);

    return post;
  }

  public update(id: number, post: Post): void {
    const postIndex = this.posts.findIndex(post => post.id === id);

    Object.assign(this.posts[postIndex], post);
  }

  public delete(id: number): Post[] | undefined {
    const postIndex = this.posts.findIndex(post => post.id === id);

    if (postIndex === -1) return undefined;

    this.posts.splice(postIndex, 1);

    return this.posts;
  }
}

export default PostsRepository;
