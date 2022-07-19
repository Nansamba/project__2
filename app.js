const app = Vue.createApp({
  data() {
    return {
      url: "https://betterprogramming.pub/20-vs-code-shortcuts-for-fast-coding-cheatsheet-10b0e72fd5d",
      showBooks: true,
      books: [
        {
          title: "name of the wind",
          author: "patrick rothfuss",
          img: "images/1.jpeg",
          isFav: true,
        },
        {
          title: "the way of the kings",
          author: "brandon rothfuss",
          img: "./images/2.jpeg",
          isFav: false,
        },
        {
          title: "the final empire",
          author: "patrick rothfuss",
          img: "./images/3.jpeg",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      book.isFav = !book.isFav;
    },
    toggleIsFav(book) {
      this.isFav = !this.isFav;
    },
  },
  //   handleEvent(e, data) {
  //     console.log("e, e.type");
  //     if (data) {
  //       console.log(data);
  //     }
  //   },
  //   handleMousemove(e) {
  //     this.x = e.offsetX;
  //     this.y = e.offsetY;
  //   },
});

app.mount("#app");
