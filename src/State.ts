import { AppState } from "./models/Models";

export const MyAppState: AppState = {
  articles: [
    {
      id: 0,
      title: "Candid photo 101",
      subtitle: "you think this is a game?",
      body:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit sunt mollitia nemo cum nesciunt culpa, quos eligendi, non ipsum in quo facilis inventore nihil cumque doloribus molestiae sint! In, doloremque!",
      imgUrl: `https://cache.desktopnexus.com/thumbseg/1644/1644219-bigthumbnail.jpg`,
      date: new Date(2019, 9, 11)
    },
    {
      id: 1,
      title: "Big boi",
      subtitle: "kome at me vro",
      body:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit sunt mollitia nemo ",
      imgUrl:
        "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      date: new Date(2015, 4, 1)
    },
    {
      id: 2,
      title: "Rawr!",
      subtitle: "the nauty kitty",
      body:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit sunt mollitia nemo cum nesciunt culpa, quos eligendi, non ipsum in quo facilis inventore nihil cumque doloribus molestiae sint! In, doloremque! \n quo facilis inventore nihil cumque doloribus molestiae sint! In, doloremque!",
      imgUrl:
        "https://ichef.bbci.co.uk/news/410/cpsprodpb/11EC0/production/_110280437_2485_t2f_00008.jpg",
      date: new Date(2012, 2, 31)
    }
  ],
  todos: [
    {
      id: 0,
      completed: true,
      text: "Add AddNewArticle Page"
    },
    {
      id: 1,
      completed: true,
      text: "Add ArticleDetail Page"
    },
    {
      id: 2,
      completed: true,
      text: "Add Buttons in ArticleDetail page"
    },
    {
      id: 3,
      completed: true,
      text: "Add back buttons"
    },
    {
      id: 4,
      completed: false,
      text: "Add About Page "
    },
    {
      id: 5,
      completed: false,
      text: "Add AddTodos page + FAB"
    },
    {
      id: 6,
      completed: false,
      text: "Build APK"
    },
    {
      id: 7,
      completed: false,
      text: "Let user alter state: articles, todos"
    },
    {
      id: 8,
      completed: false,
      text: "Enhance loading screen with animation"
    },
  ]
};
