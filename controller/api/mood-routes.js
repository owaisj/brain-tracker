const router = require('express').Router();
const db = require('../../models');

router
  .route('/:id')
  .get((req, res) => {
    db.Mood.findAll({ where: { UserId: req.params.id } }).then(data =>
      res.status(200).json(data)
    );
  })
  .post((req, res) => {
    /* eslint-disable */
    const UserId = req.params.id;
    const { mood_value } = req.body;
    // console.log(req);
    db.Mood.create({
      mood_value,
      UserId
    })
      .then(mood => res.status(200).json(mood))
      .catch(err => {
        console.log(err);
        res.status(422).json({
          message: 'Unable to add data.'
        });
      });
  });

module.exports = router;
