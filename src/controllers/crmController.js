import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel"

const Contact = mongoose.model("Contact", ContactSchema);

export const addNewContact = (req, res) => {
    let newcontact = new Contact(req.body);

    newcontact.save((err, contact) =>{
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const getContacts = (req, res) =>{
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const getContactWithID = (req, res) => {
    Contact.findById(req.params.contactId, (err, contact) =>{
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

export const updateContact = (req, res) => {
    Contact.findByIdAndUpdate({ _id: req.params.contactId}, req.body, { new: true}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

export const deletecontact = (req, res) => {
    Contact.remove({ _id: req.params.contactId}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json( {message: "Successfully deleted contact"});
    });
}
