const mongoose = require('mongoose');
const {database} = require('./../../configuracion/VariablesEntorno');

module.exports.connection = async () => {
  try {
    await mongoose.connect(database, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Base De datos Conectada',database);
  } catch (error) {
    console.log(error,'Error :P');
    throw error;
  }
}

module.exports.isValidObjectId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
}