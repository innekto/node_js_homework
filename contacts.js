const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const jsonData = JSON.parse(data);
  console.log("jsonData", jsonData);
  return jsonData;
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const result = contacts.find((contact) => (contact.id = contactId));
  return result || null;
}

async function removeContact(contactId) {
  const updateContacts = contacts.filter((contact) => contact.id !== contactId);
  await fs.writeFile(contactsPath, JSON.stringify(updateData, null, 2));
}

async function addContact({ name, email, phone } = data) {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
