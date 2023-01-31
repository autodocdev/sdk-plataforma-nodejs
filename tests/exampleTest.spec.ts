import { hello } from "../src/index";

test('it should return hello name', () => {
  expect(hello('name')).toEqual('Hello name');
});