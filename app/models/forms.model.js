module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            identifiant: String,
            numQuestion: Int16Array,
            progression: Int16Array,
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
