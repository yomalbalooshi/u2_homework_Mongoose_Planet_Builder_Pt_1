const {
  connectableObservableDescriptor
} = require('rxjs/internal/observable/ConnectableObservable')
const Planet = require('../models/planet')
const create = async (req, res) => {
  try {
    let planet = await Planet.findById(req.params.id)
    planet.plants.push(req.body)
    await planet.save()
    res.redirect(`/planets/${planet._id}`)
  } catch (error) {
    console.log(error)
    // res.status(500).send(error.message)
  }
}
module.exports = {
  create
}
