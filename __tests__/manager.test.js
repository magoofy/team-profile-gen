import { Manager } from '../lib/manager.js'


describe("Manager", () => {
  describe("Manager object creation", () => {
    it("Creates an object with name, id, email, and officeNumber properties", () => {
      const manager = new Manager("Jane Doe", 1, "janedoe@gmail.com", 50);

      expect(manager).toBeInstanceOf(Manager);
      expect(manager.name).toEqual("Jane Doe");
      expect(manager.id).toEqual(1);
      expect(manager.email).toEqual("janedoe@gmail.com");
      expect(manager.officeNumber).toEqual(50);
    });
  });

  describe("getName", () => {
    it("return the object's name", () => {
      const manager = new Manager("Jane Doe", 1, "janedoe@gmail.com", 50);

      expect(manager.getName()).toEqual("Jane Doe");
    });
  });

  describe("getId", () => {
    it("return the object's id", () => {
      const manager = new Manager("Jane Doe", 1, "janedoe@gmail.com", 50);

      expect(manager.getID()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("return the object's email", () => {
      const manager = new Manager("Jane Doe", 1, "janedoe@gmail.com", 50);

      expect(manager.getEmail()).toEqual("janedoe@gmail.com");
    });
  });
  
  describe("getOffice", () => {
    it("return the object's officeNumber", () => {
      const manager = new Manager("Jane Doe", 1, "janedoe@gmail.com", 50);

      expect(manager.officeNumber).toEqual(50);
    });
  });

  describe("getRole", () => {
    it("return the string 'Manager'", () => {
      const manager = new Manager("Jane Doe", 1, "janedoe@gmail.com", 50);

      expect(manager.constructor.name).toEqual("Manager");
    });
  });
});