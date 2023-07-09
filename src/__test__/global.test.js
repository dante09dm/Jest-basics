 const text = "watever";
 const frameworks = ["React", "Vue", "Angular", "Svelte"];

 // Test arrays
 test("It should have React", () => {
   expect(frameworks).toContain("React");
 });

 //Test string
 test ('Debe contener un texto', () => {
    expect(text).toMatch(/watever/)
});
 
// Test numbers
test("It should be greater than", () => {
    expect(10).toBeGreaterThan(9);
  });

  
// Test Booleans
test("It should be true", () => {
    expect(true).toBeTruthy();
  });
  
  // Reverse strings function
  const reverseString = (str, cb) => {
    cb(str.split("").reverse().join(""));
  };
  
  // Test callbacks
  test("The callback should return a reversed word", () => {
    reverseString("Dante", str => {
      expect(str).toBe("etnaD");
    });
  });

  const reverseStringPromise = str => {
    return new Promise((resolve, reject) => {
      if (!str) {
        reject(Error("There is no string"));
      }
      resolve(str.split("").reverse().join(""));
    });
  };
  
  // Test promises
  test("The promise should return a reversed word", () => {
    return reverseStringPromise("Platzi").then(str => {
      expect(str).toBe("iztalP");
    });
  });
  
  // Test async-await
  test("The async-await block code should return a reversed word", async () => {
    const str = await reverseStringPromise("adidas");
    expect(str).toBe("sadida");
  });
  
  // Funcion que se ejecuta despues de cada prueba
  afterEach(() => console.log("After each test"));
  // Funcion que se ejetuta despues de todas las pruebas
  afterAll(() => console.log("All test ended."));
  
  // Funcion que se ejecuta antes de cada prueba
  beforeEach(() => console.log("Before each test"));
  // Funcion que se ejecuta antes de todas las pruebas
  beforeAll(() => console.log("Beginning of all tests"));