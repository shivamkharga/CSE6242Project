const express = require('express')
const db = require('../../db/connection')
const router = express.Router()
const recipeModel = require('../../models/recipe')

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/:recipeId', async (req, res) => {
  try {
    const recipeId = parseInt(req.params.recipeId)
    //   console.log('here' + recipeId)
    var recipes = await recipeModel.find({ _id: recipeId })
    //   console.log('users' + recipes)
    if (recipes != null && recipes[0] != null) {
      // id = user.getId()
      var recipe = recipes[0]
      return res.json(recipe)
    } else {
      return res.status(400).json({ error: 'recipe not found' })
    }
  } catch (error) {
    console.log(error)
    return res.status(501).json({ error: 'Something went wrong' })
  }
})

module.exports = router
