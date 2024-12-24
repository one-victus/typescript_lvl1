import { Data } from './data.model';

export let data: Data[] = [];

export const addData = (obj: Data) => {
  data.push(obj);
}

export const calcAge = (): number => {
  return data.reduce((acc, item) => acc + item.age, 0);
}
