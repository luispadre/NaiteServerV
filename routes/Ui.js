const router = require("express").Router();
const mongoose=require('mongoose')
const Schema = mongoose.Schema;

// const Ui = require('../database/util/models/ui');
var Ui = mongoose.model(
  "Ui",
  new Schema(
    {
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
      },
    },
    { collection: "ui" }
  )
);

router.route("/").get((req, res, next) => {
  const component = req.query.component;
  const subcomponent = req.query.subcomponent;
  console.log(`componente${component} subcomponent${subcomponent}`);
  console.log(Ui);

  const filter = {
    what: component,
  };
  Ui.find(filter, function(err, data) { 
    console.log(err, data, data.length);
    return data
    ? res.json({
        componente: data,
        // subcomponent: subcomponent,
      })
    : res.json({
        componente: component,
        subcomponent: subcomponent,
      });
});

//   Ui.findOne(filter, (err, existingComponent) => {
//     console.log(existingComponent, "veremos");
//     return existingComponent
//       ? res.json({
//           componente: component,
//           subcomponent: subcomponent,
//         })
//       : res.json({
//           componente: component,
//           subcomponent: subcomponent,
//         });
//   });
});

module.exports = router;
