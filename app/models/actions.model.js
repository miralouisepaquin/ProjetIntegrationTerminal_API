//Modèle : Actions
//
//Auteur Mira Paquin
//(c)2024 Projet Intégration Terminal
//
//Modèle pour gérer les actions
//
module.exports = mongoose => {
  var schema = mongoose.Schema(
      {
          id: String,
          action: String,
      },
      { timestamps: true }
  );
  schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const Actions = mongoose.model("actions", schema);
  return Actions;
};
