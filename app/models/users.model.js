//Modèle : Users
//
//Auteur Mira Paquin
//(c)2024 Projet Intégration Terminal
//
//Modèle pour gérer les usagers
//
module.exports = mongoose => {
  var schema = mongoose.Schema(
      {
          identifiant: String,
          prenom: String,
          nom: String,
          mail: String,
          password: String,
          type: Boolean,
      },
      { timestamps: true }
  );
  schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const Users = mongoose.model("users", schema);
  return Users;
};
