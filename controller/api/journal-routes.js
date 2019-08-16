const router = require('express').Router();
const db = require('../../models');

router
  .route('/:id')
  .get((req, res) => {
    db.Journal.findAll({
      include: [
        {
          model: db.User,
          where: {
            id: req.params.id
          }
        }
      ]
    }).then(data => res.status(200).json(data));
  })
  .post((req, res) => {
    /* eslint-disable */
    const UserId = req.params.id;
    const { post_title, post_body } = req.body;
    // console.log(req);
    db.Journal.create({
      post_title,
      post_body,
      UserId
    })
      .then(post => res.status(200).json(post))
      .catch(err => {
        console.log(err);
        res.status(422).json({
          message: 'Unable to add post.'
        });
      });
  });

module.exports = router;
