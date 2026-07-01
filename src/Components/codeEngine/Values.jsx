
export const CODE_SNIPPETS = {
    javascript: `function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alex");
`,

    typescript: `type Params = {
  name: string;
};

function greet(data: Params) {
  console.log("Hello, " + data.name + "!");
}

greet({ name: "Alex" });
`,

    python: `def greet(name):
    print("Hello, " + name + "!")

greet("Alex")
`,

    java: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
`,


};

export  const LANGUAGE_VERSIONS = {
    java: "17.0.8",
    python: "3.11.5",
    javascript: "18.15.0",
    typescript: "5.2.2",
}