module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            identifiant: String,
            nom: String,
            prenom: String,
            mail: String,
            password: String,
			      adresse: String,
            ville: String,
            province: String,
            numTelephone: String,
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
