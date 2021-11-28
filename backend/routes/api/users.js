const express = require('express')
const router = express.Router()
const { spawn } = require('child_process')
const db = require('../../db/connection')
const usersModel = require('../../models/users')

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/', async (req, res) => {
  var databasesList = await usersModel.find({})

  // console.log('Databases:' + databasesList)
  res.json({
    size: databasesList.length - 1,
  })
})

router.get('/:user_id', async (req, res) => {
  try {
    const id = req.params.user_id
    var users = await usersModel.find({ _id: id })
    // console.log('users' + users)
    if (users != null && users[0] != null) {
      // id = user.getId()
      var user = users[0]
      // console.log(user)
      var recs =
        user.rec1 +
        ',' +
        user.rec2 +
        ',' +
        user.rec3 +
        ',' +
        user.rec4 +
        ',' +
        user.rec5

      const pyProg = await spawn('python3', ['cbf_live.py', recs])

      await pyProg.stdout.on('data', async function (data) {
        var nodes = JSON.parse(
          data.toString().replace('\n', '').replaceAll("'", '"')
        )

        var reply = {
          user_id: user.id,
          nodes: nodes.nodes,
          links: nodes.links,
        }

        return res.json(reply)
      })
    } else {
      return res.status(400).json({ error: 'user not found' })
    }
  } catch (error) {
    console.log(error)
    return res
      .status(501)
      .json({ error: 'Invalid userId or Something went wrong' })
  }
})

module.exports = router
