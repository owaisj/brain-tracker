const router = require('express').Router();
const db = require('../../models');

router
  .route('/:id')
  .get((req, res) => {
    db.Sleep.findAll({ where: { UserId: req.params.id } }).then(data =>
      res.status(200).json(data)
    );
  })
  .post((req, res) => {
    /* eslint-disable */
    const UserId = req.params.id;
    const { sleep_time } = req.body;
    // console.log(req);
    db.Sleep.create({
      sleep_time,
      UserId
    })
      .then(sleep => res.status(200).json(sleep))
      .catch(err => {
        console.log(err);
        res.status(422).json({
          message: 'Unable to add sleep data.'
        });
      });
  });

module.exports = router;
