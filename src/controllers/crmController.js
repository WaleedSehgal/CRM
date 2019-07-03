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
