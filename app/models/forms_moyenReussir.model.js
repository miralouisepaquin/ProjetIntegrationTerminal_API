//Modèle : Forms_MoyenReussir
//
//Auteur Mira Paquin
//(c)2024 Projet Intégration Terminal
//
//Modèle pour gérer le formulaire Moyen Concrets Pour Réussir
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
    const FormsReussir = mongoose.model("formsReussir", schema);
  return FormsReussir;
};
