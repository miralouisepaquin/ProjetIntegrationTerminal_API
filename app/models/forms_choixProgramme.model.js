//Modèle : Forms_ChoixProgramme
//
//Auteur Mira Paquin
//(c)2024 Projet Intégration Terminal
//
//Modèle pour gérer le formulaire Mon Choix De Programme
//
module.exports = mongoose => {
  var schema = mongoose.Schema(
      {
          identifiant: String,
          date: Date,
          reponses: [
            {
              numQuestion: String,
              reponse: Boolean,
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
    const FormsProgramme = mongoose.model("formsProgramme", schema);
  return FormsProgramme;
};
