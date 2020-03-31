const mongoose = require('mongoose');
const configuracion = require('../../configuracion/VariablesEntorno');

module.exports.connection = async () => {
  try {
    await mongoose.connect(configuracion.database, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Base De datos Conectada',configuracion.database);
  } catch (error) {
    console.log(error,'Error :P');
    throw error;
  }
}

module.exports.isValidObjectId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
}