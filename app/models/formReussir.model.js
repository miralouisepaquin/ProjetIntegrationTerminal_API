//Modèle : FormReussir
//
//Auteur Mira Paquin
//(c)2024 Projet Intégration Terminal
//
//Modèle pour gérer le formulaire Moyen Concrets Pour Réussir
//
module.exports = mongoose => {
  var schema = mongoose.Schema(
      {
          titre: String,
          directive: String,
          instruction: String,
          piedPage: String,
          questions: [
            {
              facteur: String,
              titre: Boolean,
              actions: [],
              ressources: [],
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
    const FormReussir = mongoose.model("formReussir", schema);
  return FormReussir;
};
