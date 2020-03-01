export type Article = {
  id: number;
  title: string;
  subtitle: string;
  body: string;
  imgUrl: string;
  date: Date;
};

export type AppState = {
  articles: Article[];
  todos: Todo[];
};

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};
