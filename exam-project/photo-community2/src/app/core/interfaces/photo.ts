import { IBase } from './base';
import { IPost } from './post';
import { IUser } from './user';


export interface IPhoto<T = string> extends IBase {
    subscribers: string[];
    posts: T[];
    photoTitle: string;
    photoUrl: string;
    photoExif: string;
    userId: IUser;
  }