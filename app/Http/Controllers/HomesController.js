'use strict'
const New = use('App/Model/New')

class HomesController {

  * index (request,response) {
    const news = yield New.all()
    yield response.sendView('pages/home', { posts: news.toJSON() });
  }

}

module.exports = HomesController
