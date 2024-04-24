import { program } from "commander";
import Contacts from "./contacts.js";

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
        const listContact = await Contacts.listContacts();
        console.table(listContact);
    
      break;

    case "get":
   
        const getContact = await Contacts.getContactById(id);
        console.table(getContact);
      
      break;

    case "add":
      
        const addContact = await Contacts.addContact({ name, email, phone });
        console.table(addContact);
     
      break;

    case "remove":
      
        const removeContact = await Contacts.removeContact(id);
        console.table(removeContact);
     
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
