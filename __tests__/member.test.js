import { Member } from '../lib/member.js'


describe("Member", () => {
  describe("member object creation", () => {
    it("Creates an object with name, id, and email properties", () => {
      const member = new Member("Jane Doe", 1, "janedoe@gmail.com");

      expect(member).toBeInstanceOf(Member);
      expect(member.name).toEqual("Jane Doe");
      expect(member.id).toEqual(1);
      expect(member.email).toEqual("janedoe@gmail.com");
    });
  });

  
  describe("getName", () => {
    it("return the object's name", () => {
      const member = new Member("Jane Doe", 1, "janedoe@gmail.com");

      expect(member.getName()).toEqual("Jane Doe");
    });
  });

 
  describe("getId", () => {
    it("return the object's id", () => {
      const member = new Member("Jane Doe", 1, "janedoe@gmail.com");

      expect(member.getID()).toEqual(1);
    });
  });


  describe("getEmail", () => {
    it("return the object's email", () => {
      const member = new Member("Jane Doe", 1, "janedoe@gmail.com");

      expect(member.getEmail()).toEqual("janedoe@gmail.com");
    });
  });


  describe("getJob", () => {
    it("return the string 'Member'", () => {
      const member = new Member("Jane Doe", 1, "janedoe@gmail.com");

      expect(member.constructor.name).toEqual("Member");
    });
  });
});