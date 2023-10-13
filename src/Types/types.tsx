import { CSSProperties } from "react";

export type ISectionW = {
  background?: React.ReactNode;
  content: React.ReactNode;
};

type TUserKeys = "FirstName" | "LastName" | "Email";
export type TUser = {
  [K in TUserKeys]: string;
};

export type SendFormProps = {
  leftSide: React.ReactNode;
  text: React.ReactNode;
  page: React.ReactNode;
};

export type TBUttonProps = {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  style?: CSSProperties;
  onClick?: () => void;
};

export type TProducts = {
  price: number;
  features: string[];
  image: string;
  category: string;
  name: string;
  description: string;
  size: string[] | number[];
  id: string;
};

export type TAddCart = {
  product: TProducts;
};
