const express = require('express')
const router  = express.Router()
const app     = require('../app.js');
const mangga  = app.treeMango;
// console.log(app.treeMango)

router.get('/',(req,res) => {
  console.log('masuk routing start')
  res.send('masuk routing start')
  let pohonMangga = new MangoTree('MangoTree', 1, 2, 8, true)
  let ngitung     = cron.schedule('*/2 * * * * *',(blabla) => {
    treeMango.grow()
    treeMango.produce()
    treeMango.harvest()
    db.ref('siMangga').set({
      isDead:'',
      status: `[Year ${treeMango._age} Report] Height = ${treeMango._height} | Fruits harvested = ${treeMango._harvested}`
    })
    console.log(`\n===================Data ${treeMango._name} tree:======================================\n`);
    console.log(`[Year ${treeMango._age} Report] Height = ${treeMango._height} | Fruits harvested = ${treeMango._harvested}`)
    if (treeMango._healthyStatus == false) {
      console.log('Pohon mangganya dead')
      db.ref('mango').set({
        isDead: 'Pohon mangga Anda mati silahkan tanam lagi'
      })
      ngitung.stop()
    }
  })
})


module.exports = router
