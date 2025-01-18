export interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  isBorder?: boolean;
}

export type MenuItem = {
  label: string;
  link?: string;
  subItems?: MenuItem[];
};

export type MenuProps = {
  items: MenuItem[];
};

export interface Post {
  title: string;
  text: string;
  tags: string;
  autor: string;
  img: string;
  img_2x: string;
  date: string;
  views: string;
}

export type HeaderProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export interface PostListProps {
  posts: Post[];
}

export type CloseBtnProps = {
  onClick: () => void;
  ariaLabel?: string;
};

export type MenuBtnProps = {
  onClick: () => void;
  ariaLabel?: string;
};

export interface LinkProps {
  href: string;
  label: string;
  className?: string;
}

export interface PostPopupProps {
  post: Post | null;
  onClose: () => void;
}
