const express = require('express')
const router = express.Router()

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) =>
  res.json({
    msg: 'Users Works',
  })
)

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test2', (req, res) =>
  res.json({
    msg: 'Users-/test2 Works',
  })
)

router.get('/test3', (req, res) => {
  id = 22010
  const { spawn } = require('child_process')
  const pyProg = spawn('python3', ['cbf_live.py', id])
  pyProg.stdout.on('data', function (data) {
    reply = JSON.parse(data.toString().replace('\n', '').replaceAll("'", '"'))
    recommendations = reply.recommendation
    edges = reply.edges
    console.log(edges)

    for (i = 0; i < recommendations.length; i++) {
      recipe = recommendations[i]
      id2 = recipe.id
      edges.push([id, id2])
    }

    res.json({
      recipe_id: id,
      recommendations: recommendations,
      edges: edges,
    })
  })
  pyProg.stderr.on('data', (data) => {
    console.log(data.toString())
  })
})

module.exports = router
