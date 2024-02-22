//Modèle : Forms
//
//Auteur Mira Paquin
//(c)2024 Projet Intégration Terminal
//
//Modèle pour gérer les formulaires
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
    const Forms = mongoose.model("forms", schema);
  return Forms;
};
