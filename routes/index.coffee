module.exports =
  partial: require './partial'

  index: (req, res) ->
    res.render 'index', {
      title: 'Zen DevShop'
      user: req.user
    }

