//Modèle : Questions
//
//Auteur Mira Paquin
//(c)2024 Projet Intégration Terminal
//
//Modèle pour gérer les questions
//
module.exports = mongoose => {
  var schema = mongoose.Schema(
      {
          numQuestion: Number,
          description: String,
      },
      { timestamps: true }
  );
  schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const Questions = mongoose.model("questions", schema);
  return Questions;
};
