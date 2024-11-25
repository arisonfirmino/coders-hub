import { Post, Prisma, Topic, User } from "@prisma/client";

type UserBasicInfo = Pick<User, "name" | "email" | "image">;

type PostPayloadWithRelations = Prisma.PostGetPayload<{
  include: {
    user: true;
    topics: true;
    comments: true;
    favorites: true;
  };
}>;

type CommentPayloadWithRelations = Prisma.CommentGetPayload<{
  include: {
    user: true;
    post: {
      include: {
        user: true;
      };
    };
  };
}>;

// user-info.tsx
export interface UserInfoProps {
  user: UserBasicInfo;
}

// user-avatar.tsx
export interface UserAvatarProps {
  user: UserBasicInfo;
}

// signin-button.tsx
export interface SignInButtonProps {
  children: React.ReactNode;
  handleSignInClick: () => void;
}

// signout-button.tsx
export interface SignOutButtonProps extends UserInfoProps {
  user: UserBasicInfo;
}

// posts-list.tsx
export interface PostsListProps {
  posts: PostPayloadWithRelations[];
}

// post-item.tsx
export interface PostItemProps {
  post: PostPayloadWithRelations;
}

// post-header.tsx
export interface PostHeaderProps {
  post: PostPayloadWithRelations;
  isPostOwner: boolean;
}

// post-user.tsx
export interface PostUserProps {
  post: Pick<PostPayloadWithRelations, "id" | "user" | "created_at">;
}

// post-content.tsx
export interface PostContentProps {
  post: Pick<Post, "project_name" | "description">;
}

// post-footer.tsx
export interface PostFooterProps {
  post: Pick<
    PostPayloadWithRelations,
    "id" | "deploy" | "comments" | "favorites"
  >;
}

// post-topics-list.tsx
export interface PostTopicsListProps {
  topics: Topic[];
}

// topic-item.tsx
export interface TopicItemProps {
  topic: Topic;
}

// comments-list.tsx
export type CommentsListProps = {
  comments: CommentPayloadWithRelations[];
};

// comment-item.tsx
export type CommentItemProps = {
  comment: CommentPayloadWithRelations;
};

// interactions.tsx
export interface InteractionsProps {
  id: string;
  comments_length: number;
  likes_length: number;
}
