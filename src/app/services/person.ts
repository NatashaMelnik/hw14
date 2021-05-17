export interface IPerson {
  id?: number;
  login?: string;
  password?: string;
}

export abstract class APerson2 {
  abstract testmethod: () => void;
}
