import { Intern } from '../lib/intern.js'

describe("Intern", () => {
  
  
  describe("Intern object creation", () => {
    it("Creates an object with name, id, email, and school properties", () => {
      const intern = new Intern("Jane Doe", 1, "janedoe@gmail.com", "University of Southern California");

      expect(intern).toBeInstanceOf(Intern);
      expect(intern.name).toEqual("Jane Doe");
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual("janedoe@gmail.com");
      expect(intern.school).toEqual("University of Southern California");
    });
  });

  
  describe("getName", () => {
    it("return the object's name", () => {
      const intern = new Intern("Jane Doe", 1, "janedoe@gmail.com", "University of Southern California");

      expect(intern.getName()).toEqual("Jane Doe");
    });
  });

 
  describe("getId", () => {
    it("return the object's id", () => {
      const intern = new Intern("Jane Doe", 1, "janedoe@gmail.com", "University of Southern California");

      expect(intern.getID()).toEqual(1);
    });
  });

  
  describe("getEmail", () => {
    it("return the object's email", () => {
      const intern = new Intern("Jane Doe", 1, "janedoe@gmail.com", "University of Richmond");

      expect(intern.getEmail()).toEqual("janedoe@gmail.com");
    });
  });

  describe("getSchool", () => {
    it("return the object's school", () => {
      const intern = new Intern("Jane Doe", 1, "janedoe@gmail.com", "University of Richmond");

      expect(intern.getSchool()).toEqual("University of Richmond");
    });
  });

  
  describe("getRole", () => {
    it("return the string 'Intern", () => {
      const intern = new Intern("Jane Doe", 1, "janedoe@gmail.com", "University of Richmond");

      expect(intern.constructor.name).toEqual("Intern");
    });
  });
});
