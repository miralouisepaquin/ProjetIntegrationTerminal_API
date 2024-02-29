//Modèle : FormEtudes
//
//Auteur Mira Paquin
//(c)2024 Projet Intégration Terminal
//
//Modèle pour gérer le formulaire Mon Programme d'études
//
module.exports = mongoose => {
  var schema = mongoose.Schema(
      {
          titre: String,
          directive: 
            {
              titre: String,
              objectif: [],
            },
          piedPage: String,
          questions: [
            {
              id: String,
              titre: String,
              sousTitre: String,
              questions: [{
                id: String,
                enonce: String,
              }]
            }
          ],
      },
      { timestamps: true }
  );
  schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const FormEtudes = mongoose.model("formEtudes", schema);
  return FormEtudes;
};
