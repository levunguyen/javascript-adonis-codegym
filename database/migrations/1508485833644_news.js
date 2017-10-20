'use strict'

const Schema = use('Schema')

class NewsTableSchema extends Schema {

  up () {
    this.create('news', (table) => {
      table.increments()
      table.string('title')
      table.text('content')
      table.timestamps()
    })
  }

  down () {
    this.drop('news')
  }

}

module.exports = NewsTableSchema
