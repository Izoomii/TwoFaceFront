import axios from "axios";

const backPort = 8080;
export const backUrl = `http://localhost:${backPort}`;

export const profilePicturePath = "/assets/userpics";

export interface PostInterface {
  _id: string;
  title: string;
  content: string;
  author_id: string;
  authorname: string;
  created_at: Date;
  updated_at: Date;
}

export interface UserInterface {
  _id: string;
  firstname: string;
  email: string;
  password: string;
  lastname: string;
  bio: string;
  profilepicture: string;
  backgroundpicture: string;
}

export interface ChatInterface {
  _id: string;
  image: string;
  chatname: string;
  created_at: Date;
  participants: string[];
}

export interface MessageInterface {
  _id: string;
  chat_id: string;
  author_id: string;
  created_at: Date;
  content: string;
}

export interface CommentInterface {
  _id: string;
  author_id: string;
  parent_id: string;
  parenttype: "post" | "comment";
  content: string;
  created_at: Date;
  updated_at: Date;
}

export const isAuthentified = async (): Promise<UserInterface | null> => {
  let user: UserInterface | null = null;
  await axios
    .get(`${backUrl}/users/whoami`, {
      withCredentials: true,
    })
    .then(({ data }) => {
      user = data.user;
    });
  return user;
};

export const redirectToLogin = () => {
  console.log("get redirected here");
};
