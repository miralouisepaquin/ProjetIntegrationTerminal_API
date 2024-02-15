module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            section: String,
            numQuestion: Int16Array,
            description: String,
            reponse: Boolean,
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
