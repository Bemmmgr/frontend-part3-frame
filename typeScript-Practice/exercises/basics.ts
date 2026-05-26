let userName: string;
userName = "Max";

let userAge = 27; // number

let isVaild = true;

function greet(name: string): string {
  return `Hello, ${name}`;
}
console.log(greet(userName));

// 013 - alternative types
let userID: string | number = "abc123";
userID = 456;

// 014 - object types
// let user: object;
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};
user = {
  name: "steven",
  age: 27,
  isAdmin: true,
  id: "abcd",
};

type User2 = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};
let user2: User2;

// 015 - Array types
let hobbies: Array<string>;
// let hobbies: string[];  // number[];

hobbies = ["Sports", "Cooking", "Reading"];
// hobbies = [1, 2, 3];

// 016 - adding types to func parameter & return value types
// return value type: : undefined
// if func doesnt have any return: void
function add(a: number, b: number): number {
  const result = a + b;
  console.log(result);
  return result;
}

// 017 - defining function types
// important
type addFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: addFn) {
  calcFn(a, b);
}

calculate(2, 8, add);

// 019 - defining object types with interfaces
// 020 - interfaces vs custom types
interface Credentials {
  password: string;
  email: string;
}

let creds: Credentials;
creds = {
  password: "abcde",
  email: "text@gamil.com",
};

// when to use whcih: type or interface
// type for union type, 数组、函数、联合类型、交叉类型
// interface 可以通过 extends 扩展, 可以重复声明并自动合并
interface newUser {
  id: number;
  name: string;
}
interface newUser {
  password: string;
}

interface AdminUser extends newUser {
  // implements
  permissions: string[];
} // id, name. password, permissions

// extends = 继承已有东西，获得它的成员
// implements = 承诺实现某个结构，但不会获得具体实现=>construct(不能直接拿来用)
class AuthCredentials implements Credentials {
  constructor(
    public password: string,
    public email: string,
    public username: string,
  ) {}
}

function login(credentials: Credentials) {}

const credentialsUser = new AuthCredentials(
  "123456",
  "test@example.com",
  "steven",
);
login(credentialsUser);

// 021 - merging types
type Admin = {
  permission: string[];
};

type AppUser = {
  userName: string;
};

type AppAdmin = Admin & AppUser;

let admin: AppAdmin;
admin = {
  permission: ["login"],
  userName: "bull",
};

// same for interface, using extends

// 022 - being specific with literal types
// let role: string
type Role = "admin" | "editor" | "user";

let role: Role;
role = "admin";
// role = "abc";

// 023 - adding type guards
function performAction(action: string, role: Role) {
  if (role === "admin" && typeof action === "string") {
    // ...
  }
}

// 025 making sense of generic types - 泛型
let roles: Array<Role>;
roles = ["admin", "user"];

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  }, // data: string
};

const userStorage: DataStorage<User2> = {
  storage: [],
  add(user) {},
};

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}
const newUser = merge<{ name: string }, { age: number }>(
  { name: "Maxine" },
  { age: 27 },
);
