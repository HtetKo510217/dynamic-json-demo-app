class Post {
    id: string;
    title: string;
    body: string;
    imageUrl: string;

    constructor(id: string, title: string, body: string, imageUrl: string) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.imageUrl = imageUrl;
    }
}

export default Post;
