const functions = require('firebase-functions')
const admin = require('firebase-admin')
const websitesData = require('./src/websites.data')
const formatDateCompUtil = require('./src/formatDateComp.util')
const cors = require('cors')({
  origin: websitesData
})

admin.initializeApp()

exports.addEntry = functions.region('europe-west1')
  .https.onRequest((req, res) => new Promise((resolve, reject) =>
  
    cors(req, res, () => {

      const origin = req.get('origin')

      const { host, path, id, ip } = req.query

      if (origin !== 'https://' + host) {

        res.status(400).json({
          error: 'Query host does not match origin host'
        })
      
      } else if (!websitesData.some(regExp => host.match(regExp))) {

        res.status(400).json({
          error: 'Host is not allowed'
        })

      } else {

        if (!path) path = ''
        
        const date = new Date()
      
        admin.firestore()
          .collection('entry')
          .add({
            date: `${
              date.getFullYear() }/${
              formatDateCompUtil(date.getMonth(), 1) }/${
              formatDateCompUtil(date.getDate()) } ${
              formatDateCompUtil(date.getHours(), 1) }:${
              formatDateCompUtil(date.getMinutes()) }:${
              formatDateCompUtil(date.getSeconds()) }`,
            host,
            path,
            ...(ip ? { ip: req.ip } : {}),
            ...(id ? { id } : {})
          })
          .then(() => resolve(res.json({ result: true })))
          .catch(err => reject(res.status(err.code || 500).json(err)))
      
      }
    })))