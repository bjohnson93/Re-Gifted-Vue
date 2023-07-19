import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class GiftsService {
  async getGifts() {
    const res = await api.get('api/gifts')
    logger.log('got gifts?', res.data)
    const gifts = res.data.map(giftPojo => new Gift(giftPojo))
    logger.log('mapped gifts-', gifts)
    AppState.gifts = gifts
  }

  async openGift(giftId) {

    const res = await api.get(`api/gifts/${giftId}`)
    // logger.log('[did we get one only?]', res.data)
    const clickedGift = res.data
    // logger.log("is it opened?", clickedGift.opened)
    if (clickedGift.opened) {
      return
    } else {
      const openTheGift = { opened: !clickedGift.opened }
      const res = await api.put(`api/gifts/${giftId}`, openTheGift)
      const openedGift = new Gift(res.data)
    }
  }
}
export const giftsService = new GiftsService()