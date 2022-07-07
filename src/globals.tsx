const backPort = 8080;
export const backUrl = `http://localhost:${backPort}`;

export interface PostInterface {
  _id: string;
  title: string;
  content: string;
  author: string;
  //   author_id: string;
  //   authorname: string;
  created_at: Date;
  updated_at: Date;
}

export interface UserInterface {
  avatar: string; //not added in back yet
  //background: string;
  username: string;
  email: string;
  password: string;
  name: string;
}

export interface ChatHeadInterface {
  _id: string;
  image: string;
  chatName: string;
}
