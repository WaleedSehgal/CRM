import { 
    addNewContact,
    getContacts, 
    getContactWithID, 
    updateContact,
    deletecontact} from "../controllers/crmController";

const routes = (app) => {
    app.route("/contact")
    .get((req, res, next)=> {
        // middleware
        console.log(`Request from" ${req.orignalUrl}`)
        console.log(`Request from" ${req.method}`)
        next();
    }, getContacts)
    
    // POST endpoint
    .post(addNewContact);

    app.route("/contact/:contactId")
    // get specific contact
    .get(getContactWithID)

    // put request 
    .put(updateContact)

    // delete request
    .delete(deletecontact)
}

export default routes;