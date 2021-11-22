const { formatTitle, shortenBio, convertLength } = require("./public/utils");

let testData = {
  id: 1,
  firstName: "Patten",
  lastName: "Goforth",
  bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  datetime: "2022-03-14 8:00:00",
  title: "nulla ac",
  length: 65,
  floor: 5,
  roomNumber: 3,
};

// just checking to see if the test actually runs regardless if pass/fail
test("should run", () => {
  expect(2).toBe(2);
});

// to show that we can access our ^ testData
test('first name should be = "Patten', () => {
  expect(testData.firstName).toBe("Patten");
});

// describe is used to group tests together
describe("formatTitle tests", () => {
  test("formatTitle should return a string", () => {
    let formattedTitle = formatTitle(testData.title);
    expect(typeof formattedTitle).toBe("string");
  });

  test("[FAIL]formatTile should format the title correctly, the first letter is Uppercase", () => {
    let formattedTitle = formatTitle(testData.title);
    expect(formattedTitle).toBe("Nulla ac"); // this test is designed to fail
  });
});

// toBe vs toEqual

//should pass
// toEqual checks to see if the afterConversion is the same
test("myObj is toEqual myObjTwo", () => {
  const myObj = { myNum: 4 };
  const myObjTwo = { myNum: 4 };
  expect(myObj).toEqual(myObjTwo);
}); // toBe does look for type just not memory storage

// should fail
// toBe checks to see if stored in same place in memory (set to same variable)
test("[FAIL]myObj is toBe myObjTwo", () => {
  const myObj = { myNum: 4 };
  const myObjTwo = { myNum: 4 };
  expect(myObj).toBe(myObjTwo);
});

// all tests will be checking shortenBio functions
describe("shortenBioTests", () => {
  // the bio after being ran through shortenBio() function
  let shortBio = shortenBio(testData.bio); // calling the shortenBio function

  test("shortenBio should return a string shorter than its original string", () => {
    expect(shortBio.length).toBeLessThan(testData.bio.length);
  });

  test("shortenBio should add periods to the end of the string.", () => {
    expect(shortBio).toContain("...");
  });
});

// testing convertLength function
describe("convertLength tests", () => {
  // convertLength takes time in minutes(integer) and converts to hours and minutes which will be represented as an array [hours,minutes] so therefore should have a length of 2

  test("convertLength should return an array length of 2", () => {
    let afterConversion = convertLength(testData.length);
    expect(afterConversion.length).toEqual(2);
  });

  /**
  another way to solve

  test("convertLength should return an array length of 2", () => {
    expect(afterConversion).toHaveLength(2);
  });

   */

  test("convertLength can handle numbers under 60", () => {
    // pass in number under 60 in arg to test
    let result = convertLength(30);
    expect(result[0]).toEqual(0);
  })
});

// HOW TO RUN TESTS: npm run test
// Install jest intellisense:  npm i @types/jest
