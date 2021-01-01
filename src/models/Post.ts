export default class Post {
    public title: string;
    public author: string;
    public postDate: Date;
    public body: string;
    public keywords: string[];

    constructor() {
        this.title = '';
        this.author = '';
        this.postDate = new Date();
        this.body = '';
        this.keywords = [];
    }
}