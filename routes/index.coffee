module.exports =
  partial: require './partial'

  index: (req, res) ->
    res.render 'index', { 
      title: 'Brian Heithaus'
      user: req.user
    }

