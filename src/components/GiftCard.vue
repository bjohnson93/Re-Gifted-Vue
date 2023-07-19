<template>

<!-- <h1>gift card?</h1> //this worked -->
<div @click="openGift(giftProp.id)">

  <div v-if="giftProp.opened"><img class="img-fluid"  :src="giftProp.url" :alt="giftProp.tag"></div>
          <div v-else-if="!giftProp.opened">No gift for you</div>
            <p class="fs-4" >{{giftProp.tag}}</p>
</div>

</template>


<script>
import { Gift } from "../models/Gift.js";
import { giftsService } from "../services/GiftsService.js";
import { logger } from "../utils/Logger.js";


export default {
  props: {
    giftProp: { type: Gift, required: true }
  },
  setup(){
    return {
      async openGift(giftId) {
        // logger.log('you clicked a gift')
        await giftsService.openGift(giftId)
      }
  }
 }
}
</script>


<style lang="scss" scoped>

</style>