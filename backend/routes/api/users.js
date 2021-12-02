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

router.get('/:user_id', async (req, res, next) => {
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

      var nodesList = [
        {
          id: parseInt(user.id),
          group: 0,
        },
      ]

      var linksList = [
        {
          source: parseInt(user.id),
          target: parseInt(user.rec1),
          value: 0,
        },
        {
          source: parseInt(user.id),
          target: parseInt(user.rec2),
          value: 0,
        },
        {
          source: parseInt(user.id),
          target: parseInt(user.rec3),
          value: 0,
        },
        {
          source: parseInt(user.id),
          target: parseInt(user.rec4),
          value: 0,
        },
        {
          source: parseInt(user.id),
          target: parseInt(user.rec5),
          value: 0,
        },
      ]

      const pyProg = await spawn('python3', ['cbf_live.py', recs])

      await pyProg.stdout.on('data', async function (data) {
        var nodes = JSON.parse(
          data.toString().replace('\n', '').replaceAll("'", '"')
        )
        nodesList.push.apply(nodesList, nodes.nodes)
        linksList.push.apply(linksList, nodes.links)
        var reply = {
          user_id: parseInt(user.id),
          nodes: nodesList,
          links: linksList,
        }

        return res.status(200).json(reply)
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
