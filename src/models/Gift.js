export class Gift {
  constructor(data) {
    this.id = data._id
    this.tag = data.tag
    this.url = data.url || 'https://media2.giphy.com/media/4EiGNSTfy4WC4/200w.webp?cid=ecf05e47nyzr7f2262pyx1un2w9e39o6xcyh4epjak8ptj3u&ep=v1_gifs_search&rid=200w.webp&ct=g'
    this.opened = data.opened
    this.creatorId = data.creatorId
  }
}

// let giftData = {
//   "tag": {
//     "type": "String",
//     "maxlength": 120
//   },
//   "url": {
//     "type": "String",
//     "required": true
//   },
//   "opened": {
//     "type": "Boolean",
//     "default": false
//   },
//   "creatorId": {
//     "type": "ObjectId",
//     "required": true,
//     "ref": "Account"
//   }
// }
