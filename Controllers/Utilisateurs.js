const { Utilisateurs } = require("../Models/Utilisateurs")

const ajouterUtilisateur = async (req,res)=>{
    try{
        let utilisateurs = new Utilisateurs(
            req.body.nom, 
            req.body.prenom,
            req.body.age,
            req.body.estadmin,
            req.body.telephone,
            req.body.motdepasse
        );
        let result= await client
            .db()
            .collection("utilisateurs")
            .insertOne(utilisateurs);

        res.status(200).json(result);
    }
    catch(erreur){
        console.log(erreur);
        res.status(500).json(erreur);
    }
};
module.exports ={ ajouterUtilisateur };