import { addNewContact, getContacts} from "../controllers/crmController";

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
    .put((req, res)=>
    res.send("PUT request successfull!"))

    .delete((req, res) => 
    res.send("DELETE request successfull!"));
}

export default routes;