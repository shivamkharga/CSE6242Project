const users = require('../server')
const chai = require('chai')
const chaiHttp = require('chai-http')

chai.should()
chai.use(chaiHttp)

describe('Users Test', function () {
  this.timeout(5000)

  it('Test for /api/:user_id', function (done) {
    // id = '1'

    setTimeout(done, 300)
    chai
      .request(users)
      .get('/api/users/1')
      .end((err, response) => {
        let expected =
          '{"user_id":1,"nodes":[{"id":1,"group":0},{"id":207075,"group":1},{"id":125299,"group":1},{"id":182106,"group":2},{"id":210352,"group":2},{"id":210786,"group":2},{"id":151818,"group":1},{"id":162347,"group":2},{"id":162402,"group":2},{"id":151821,"group":2},{"id":199755,"group":1},{"id":204162,"group":2},{"id":199757,"group":2},{"id":199772,"group":2},{"id":138246,"group":1},{"id":145860,"group":2},{"id":230663,"group":2},{"id":215955,"group":2}],"links":[{"source":1,"target":207075,"value":0},{"source":1,"target":125299,"value":0},{"source":1,"target":151818,"value":0},{"source":1,"target":199755,"value":0},{"source":1,"target":138246,"value":0},{"source":125299,"target":182106,"value":1},{"source":125299,"target":210352,"value":1},{"source":125299,"target":210786,"value":1},{"source":151818,"target":162347,"value":1},{"source":151818,"target":162402,"value":1},{"source":151818,"target":151821,"value":1},{"source":199755,"target":204162,"value":1},{"source":199755,"target":199757,"value":1},{"source":199755,"target":199772,"value":1},{"source":138246,"target":145860,"value":1},{"source":138246,"target":230663,"value":1},{"source":138246,"target":215955,"value":1}]}'

        response.should.have.status(200)
        response.text.should.be.eq(expected)
      })
  })

  it('Test for /api/:user_id for user 10101', function (done) {
    // id = '1'

    setTimeout(done, 300)
    chai
      .request(users)
      .get('/api/users/10101')
      .end((err, response) => {
        let expected =
          '{"user_id":10101,"nodes":[{"id":10101,"group":0},{"id":51314,"group":1},{"id":102721,"group":2},{"id":178855,"group":2},{"id":126648,"group":2},{"id":3205,"group":1},{"id":5325,"group":2},{"id":6890,"group":2},{"id":10251,"group":2},{"id":30639,"group":1},{"id":149876,"group":2},{"id":159654,"group":2},{"id":160083,"group":2},{"id":112356,"group":1},{"id":193150,"group":2},{"id":146763,"group":2},{"id":185902,"group":2},{"id":47499,"group":1},{"id":183051,"group":2},{"id":212189,"group":2},{"id":86561,"group":2}],"links":[{"source":10101,"target":51314,"value":0},{"source":10101,"target":3205,"value":0},{"source":10101,"target":30639,"value":0},{"source":10101,"target":112356,"value":0},{"source":10101,"target":47499,"value":0},{"source":51314,"target":102721,"value":1},{"source":51314,"target":178855,"value":1},{"source":51314,"target":126648,"value":1},{"source":3205,"target":5325,"value":1},{"source":3205,"target":6890,"value":1},{"source":3205,"target":10251,"value":1},{"source":30639,"target":149876,"value":1},{"source":30639,"target":159654,"value":1},{"source":30639,"target":160083,"value":1},{"source":112356,"target":193150,"value":1},{"source":112356,"target":146763,"value":1},{"source":112356,"target":185902,"value":1},{"source":47499,"target":183051,"value":1},{"source":47499,"target":212189,"value":1},{"source":47499,"target":86561,"value":1}]}'

        response.should.have.status(200)
        response.text.should.be.eq(expected)
      })
  })

  it('Test for /api/:user_id for invalid user', function (done) {
    // id = '1'

    setTimeout(done, 300)
    chai
      .request(users)
      .get('/api/users/1010100')
      .end((err, response) => {
        let expected = '{"error":"user not found"}'

        response.should.have.status(400)
        response.text.should.be.eq(expected)
      })
  })

  it('Test for /api/users', function (done) {
    // id = '1'

    setTimeout(done, 300)
    chai
      .request(users)
      .get('/api/users')
      .end((err, response) => {
        let expected = '{"size":11041}'

        response.should.have.status(200)
        response.text.should.be.eq(expected)
      })
  })
})
