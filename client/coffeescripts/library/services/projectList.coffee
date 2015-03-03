angular.module 'coffeeboiler.services'

.value 'ProjectList',
    {
        1: {
          name: 'Super Snake'
          description: '1 - 2 player Snake Game, based on the classic.'
          image: 'snake.png'
          href: 'snakeaholic.com'
          git: 'bheithaus/supersnake'
          techs: [
            'Express Framework'
            'MongoDB'
            'Angular JS'
            'CoffeeScript'
            'Pathfinding JS'
            'Custom Game Engine'
            'socket.io'
          ]
        },
        2: {
          name: 'Financial Dashboard'
          description: 'Angular App built for a large portfolio management client'
          image: 'financial_dashboard.png'
          techs: [
            'Proprietary'
          ],
          more: true,
          screencap: '/files/financial_dashboard.mp4'
        },
        7: {
          name: 'Gryfter'
          description: '(WIP) A card trading application designed for mobile users.  One can capture an image, give it a price and some other metadata, then trade with other users for their image cards.'
          image: 'gryfter.png'
          techs: [
            'Express Framework'
            'MongoDB'
            'Angular JS'
            'CoffeeScript'
            'Amazon S3'
            'node GM (graphics magick)'
          ]
        },
        3: {
          name: 'BitIsland'
          description: 'A hackathon project, an Electronic Communication Network and trading platform centered around the BitCoin currency.  (I designed and built the front end of the app, with a teamate building an order matching engine in Python, which I interfaced with)'
          image: 'bitisland.png'
          href: 'bitisland.net'
          techs: [
            'Express Framework'
            'Angular JS'
            'CoffeeScript'
            'MongoDB'
            'Python backend (collaborators code)'
          ]
        },
        4: {
          name: 'CoffeeBoiler'
          description: 'Boilerplate for an application with all my favorite open source web development tools!  I built this as a seed to speed up starting a new project, for myself and hopefully others.'
          image: ''
          href: 'github.com/bheithaus/coffeeboiler'
          git: 'bheithaus/coffeeboiler'
          techs: [
            'Express'
            'Angular'
            'CoffeeScript'
            'Gulp'
            'MongoDB'
            'JWT Authentication'
            'Twitter Bootstrap'
          ]
        }
        5: {
          name: 'PVP Chess'
          description: 'A multiplayer online Chess Game with my custom chess library, voice activated moves'
          image: 'chess.jpg'
          href: 'pvpchess.herokuapp.com'
          git: 'bheithaus/pvp-chess'
          techs: [
            'Ruby on Rails'
            'Ruby Chess Library (mine)'
            'Backbone.js'
            'Vanilla JS'
          ]
        },
        6: {
          name: 'Soundvillage Radio'
          description: 'Internet Radio, drawing songs from Soundcloud API, using SoundManager 2 for streaming playback'
          image: 'soundvillage.jpg'
          href: 'soundvillage.herokuapp.com'
          git: 'bheithaus/soundvillage'

          techs: [
            'Ruby on Rails'
            'Soundcloud API and javascript SDK'
            'Twitter Bootstrap'
            'Backbone.js'
            'Vanilla JS'
          ]
        },
    }