let Houser = [
  ('Bob Ross', '5454 NW Gogo Pl', 'Boring', 'OR', 97356),

  ('John BOB', '77 SE Random Blvd', 'Screamer', 'AL', 79861),

  ('Tango McTavish', '362 Road Rd', 'Why', 'AZ', 65412),

  ('Ryan Rose', '3522 Enwatak St', 'Sisters', 'OR', 95641),

  ('Hannagin Joe', '6622 Highland Dr', 'Corvallis', 'OR', 97330),

  ('Towanda Smith', '9987 Tyler Ln', 'No Name', 'CO', 56562),

  ('Chris Cole', '999 Roger Rd', 'Hazardville', 'CT', 61115)

]

module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.create_listing()
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
        console.log(err)
      });
  },

  getOne: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.select_listing()
      .then(Houser => res.status(200).send(Houser))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
        console.log(err)
      });
  },

  getAll: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.select_all_listings()
      .then(Houser => res.status(200).send(Houser))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
        console.log(err)
      });
  },

  update: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.update_listing()
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
        console.log(err)
      });
  },

  delete: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.delete_listing()
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
        console.log(err)
      });
  }
};



