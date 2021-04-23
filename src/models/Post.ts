class Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  static lastId: number;

  constructor(title: string, body: string, userId: number) {
    this.id = Post.incrementId();
    this.title = title;
    this.body = body;
    this.userId = userId;
  }

  static incrementId(): number {
    if (!this.lastId) this.lastId = 100;
    else this.lastId++;
    return this.lastId;
  }
}

export default Post;
