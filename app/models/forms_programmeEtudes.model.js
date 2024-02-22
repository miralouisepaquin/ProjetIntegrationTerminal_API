//Modèle : Forms_programmeEtudes
//
//Auteur Mira Paquin
//(c)2024 Projet Intégration Terminal
//
//Modèle pour gérer le formulaire Mon Programme d'études
//
module.exports = mongoose => {
  var schema = mongoose.Schema(
      {
          identifiant: String,
          date: Date,
          reponses: [
            {
              numQuestion: String,
              reponse: String,
            }
          ],
          progression: Number,
      },
      { timestamps: true }
  );
  schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const FormsEtudes = mongoose.model("formsEtudes", schema);
  return FormsEtudes;
};
