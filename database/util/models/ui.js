const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UiSchema = new Schema({
    what: {
      type: String,
      required: true,
    },
    component: {
      type: String,
      required: true,
    },
    subcomponent: {
      type: String,
      required: true,
    },
    elements: {
      type: String,
      required: true,
    }
  },
);


module.exports = mongoose.model("Ui", UiSchema);
