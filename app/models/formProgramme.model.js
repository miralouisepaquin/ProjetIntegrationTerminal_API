//Modèle : FormProgramme
//
//Auteur Mira Paquin
//(c)2024 Projet Intégration Terminal
//
//Modèle pour gérer le formulaire Mon Choix De Programme
//
module.exports = mongoose => {
  var schema = mongoose.Schema(
      {
          titre: String,
          directive: [
            {
              titre: String,
              objectif: [],
              but: String,
            }
          ],
          piedPage: String,
          questions: [
            {
              facteur: String,
              questions: [],
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
    const FormProgramme = mongoose.model("formProgramme", schema);
  return FormProgramme;
};
